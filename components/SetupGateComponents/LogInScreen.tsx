import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import awsConfig from '../../utils/awsConfig';
import Amplify from 'aws-amplify';

import { setCurrentUser, getCurrentPage, setCurrentPage, setTokens } from '../../utils/session';

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
    <KeyboardAwareScrollView contentContainerStyle={{ alignItems: 'center' }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>

      {(errorMsg != "") ? (
        <View style={{ alignItems: 'center' }}>
          <Text style={{...styles.titleText, marginTop: 60}}>Vendor Portal</Text>
          <Text style={styles.errorMessage}>{errorMsg}</Text>
        </View>
      ) : (
        <Text style={{...styles.titleText}}>Vendor Portal</Text>
      )}
      <Text style={styles.label}>Email Address</Text>
      <TextInput 
        value={email}
        onChangeText={(text)=> setEmail(text)}
        autoCorrect= {false}
        style={styles.input}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput 
        value={password}
        onChangeText={(text)=> setPassword(text)}
        autoCorrect={false}
        secureTextEntry={true}
        style={styles.input}
      />
      <TouchableOpacity activeOpacity={0.5} onPress={login} style={styles.button}>
        <Text style={{ color: '#007eff', fontWeight: 'bold' }}>Submit</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginTop: 12 }}>
        <Text style={{ color: '#FFFFFF' }}>Don't have an account?</Text>
        <TouchableOpacity activeOpacity={0.5} onPress={handleSignUpScreen}>
          <Text style={styles.signup}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>

    </View>
 )
}

const styles = StyleSheet.create({
  loginDiv: {
    backgroundColor: '#007eff',
    color: '#ffffff',
    width: '100%',
    height: '100%',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: 25,
  },
  titleText: {
    color: '#FFFFFF',
    fontFamily: 'fat-frank-regular',
    fontSize: 48,
    marginTop: 80,
    marginBottom: 20,
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
    width: 350,
    borderRadius: 4,
    color: '#000000',
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginBottom: 10,
  },
  label: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 2,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    marginTop: 15,
    width: 'auto',
    alignItems: 'center',
  },
  signup: {
    color: '#FFFFFF',
    textDecorationLine: 'underline',
    marginLeft: 2,
  },
});

export default LogInScreen;