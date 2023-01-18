import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import awsConfig from '../../utils/awsConfig';
import Amplify from 'aws-amplify';

import { setCurrentUser, getCurrentPage, setCurrentPage } from '../../utils/session';

import { colors, font } from '../../styles';

Amplify.configure(awsConfig);

const LogInScreen = (props) => {
  const { Cognito, setUser, setLoggedIn } = props.route.params;

  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUpScreen = () => {
    props.navigation.navigate("SignUpScreen");
  }

  async function login(e) {
    console.log('dalk');
    if (e != null) {
      console.log('wot');
      e.preventDefault();
    }
  
    if (email.length > 0 && password.length > 0) {
      const user = { 
        username: email, 
        password: password,
      };
      console.log(user);
      let isError = false;
      let result;
      try {
        result = await Cognito.authenticateUser(email, password);
      } catch (error) {
        console.log("log in error,", error);
        isError = true;
        setErrorMsg('Username/Password may be incorrect!');
      }
      if (!isError) {
        console.log("auth sign in", result);
        await Cognito.setTokens();
        //setTokens(result);

        const currentUser = await Cognito.getCurrentUserAttributes();

        const userWithSub = {
          ...user,
          cognitoId: currentUser[0].Value,
        };
        setCurrentUser(userWithSub);
            
        if (getCurrentPage() == null) {
          setCurrentPage("orders");
        }

        setUser(userWithSub);
        setLoggedIn(true);
      }
    } else {
      setErrorMsg("Login info is incomplete.");
    }
  }

 return (
    <View style={styles.loginDiv}>
      <View style={styles.leftContainer}>
        <Text style={[font.h1, font.white]}>
          Manage orders.{'\n'}
          Edit Menus.{'\n'}
          View financial reports.{'\n'}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        {(errorMsg != "") &&
          <View style={{ position: 'absolute', top: 56, left: 70}}>
            <Text style={styles.errorMessage}>{errorMsg}</Text>
          </View>
        }
        <Text style={font.h1}>Log In</Text>
        <Text style={[font.p, font.gray, { marginBottom: 28 }]}>Sign in to manage orders, edit menus, and view financial reports.</Text>
        <TextInput 
          value={email}
          onChangeText={(text)=> setEmail(text)}
          autoCorrect= {false}
          style={[font.p, styles.input]}
          placeholder="Email"
        />
        <TextInput 
          value={password}
          onChangeText={(text)=> setPassword(text)}
          autoCorrect={false}
          secureTextEntry={true}
          style={[font.p, styles.input]}
          placeholder="Password"
        />
        <TouchableOpacity activeOpacity={0.5} onPress={handleSignUpScreen} style={{ marginLeft: 12 }}>
          <Text style={[font.p, font.bold, font.blue]}>Forgot Password? (Sign up)</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={login} style={styles.button}>
          <Text style={[font.p, font.white, font.bold]}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
 )
}

const styles = StyleSheet.create({
  loginDiv: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
  },
  leftContainer: {
    flex: 1,
    paddingLeft: 70,
    height: '100%',
    backgroundColor: colors.blue,
    justifyContent: 'center'
  },
  rightContainer: {
    paddingHorizontal: 70,
    flex: 1,
    height: '100%',
    backgroundColor: '#FFF',
    justifyContent: 'center'
  },
  errorMessage: {
    borderWidth: 1,
    borderColor: '#b71c1c',
    borderStyle: 'solid',
    borderRadius: 5,
    backgroundColor: '#ef9a9a',
    color: '#b71c1c',
    width: 350,
    margin: 'auto',
    paddingHorizontal: 10,
    paddingVertical: 6,
    textAlign: 'center',
    marginBottom: 10
  },
  input: {
    backgroundColor: '#FFFFFF',
    width: '80%',
    borderRadius: 16,
    color: colors.gray,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    borderColor: colors.gray,
    borderWidth: 0.5,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: colors.blue,
    borderRadius: 16,
    marginTop: 28,
    width: '80%',
    alignItems: 'center',
  },
});

export default LogInScreen;