import React, { useState, useRef, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Touchable
} from 'react-native';

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

    console.log(awsConfig);
    
    console.log('HI');
    if (email.length > 0 && password.length > 0) {
      const user = { 
        username: email, 
        password: password,
      };
      console.log(user);

      const result = await Cognito.authenticateUser(email, password);
      console.log("auth sign in", result);
      setTokens(result);

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
    } else {
      setErrorMsg("Login info is incomplete.");
    }
  }

 return (
  <View style={styles.loginDiv}>
    {(errorMsg != "") ? <Text style={styles.errorMessage}>{errorMsg}</Text> : null}
      <TextInput 
        placeholder="Email Address" 
        value={email}
        onChangeText={(text)=> setEmail(text)}
        autoFocus={true}
        autoCorrect= {false}
      />
      <TextInput 
        placeholder="Password" 
        value={password}
        onChangeText={(text)=> setPassword(text)}
        autoCorrect={false}
        secureTextEntry={true}
      />
      <KeyboardAvoidingView>
        <TouchableOpacity activeOpacity={0.5} onPress={login}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    <Text>Don't have an account? <TouchableOpacity activeOpacity={0.5} onPress={handleSignUpScreen}><Text>Sign Up</Text></TouchableOpacity></Text>
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
  successMessage: {
    borderWidth: 1,
    borderColor: '#1b5e20',
    borderStyle: 'solid',
    backgroundColor: '#a5d6a7',
    color: '#1b5e20',
  },
  errorMessage: {
    borderWidth: 1,
    borderColor: '#b71c1c',
    borderStyle: 'solid',
    borderRadius: 5,
    backgroundColor: '#ef9a9a',
    color: '#b71c1c',
    width: 400,
    margin: 'auto',
    padding: 8,
  }
});

export default LogInScreen;