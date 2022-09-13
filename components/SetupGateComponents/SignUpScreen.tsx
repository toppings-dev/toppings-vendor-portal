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

import * as customQueries from '../../graphql/customQueries';
import * as customMutations from '../../graphql/customMutations';
import { useMutation } from '@apollo/client';

import { setUnverifiedUser, getUnverifiedUser, setTokens, setCurrentUser, getCurrentPage, setCurrentPage } from '../../utils/session';

Amplify.configure(awsConfig);

interface CognitoResp {
  codeDeliveryDetails: string,
  userConfirmed: string,
  userSub: string,
};

const SignUpScreen = (props) => {
  const { Cognito, setUser } = props.route.params;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [restaurantId, setRestaurantId] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
 
  const [signedUp, setSignedUp] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  

  let [createRestaurantOwner] = useMutation(customMutations.CREATE_RESTAURANT_OWNER, {
    update(cache, { data: { createRestaurantOwner } }) {
      cache.writeQuery({
        query: customQueries.GET_RESTAURANT_BY_OWNER,
        data: {
          getRestaurantByOwner: createRestaurantOwner,
        },
      });
    },
  });

  const handleLogInScreen = () => {
    props.navigation.navigate("LogInScreen");
  }

  async function signUp(e) {
    e.preventDefault();
    let newPhoneNumber = phoneNumber.replace(/-/g, "").replace(/\s/g, "");

    if (newPhoneNumber.charAt(0) !== "+") {
      newPhoneNumber = "+" + (newPhoneNumber.length === 10 ? "1" : "") + newPhoneNumber;
    }

    console.log("phone number", newPhoneNumber)
    
    let unverifiedUser: CognitoResp;

    if (name.length > 0 && email.length > 0 && newPhoneNumber.length >= 10 && password.length > 0) {
      try {
        unverifiedUser = await Cognito.signUp(email, password, [
          {
            Name: 'name',
            Value: name,
          },
          {
            Name: 'phone_number',
            Value: newPhoneNumber,
          },
          {
            Name: 'custom:isUser',
            Value: '0',
          }
        ]);
      } catch (err) {
        setErrorMsg(err.message);
      }

      console.log("resp", unverifiedUser);

      setUnverifiedUser(unverifiedUser);
      setSignedUp(true);
      setSuccessMsg("Account created, please enter the confirmation code.");
      setErrorMsg("");
      setUserName(name);
      setUserEmail(email);
      setUserPassword(password);
    } else {
      setErrorMsg("Account info is incomplete.");
    }
  }

  async function confirmSignUp(e) {
    e.preventDefault();
    let name = userName;

    let unverifiedUser = await getUnverifiedUser();

    if (confirmationCode.length > 0) {
      await Cognito.confirmRegistration(unverifiedUser.userSub, confirmationCode);
      const user = {
        username: userEmail,
        password: userPassword,
      };
      const result = await Cognito.authenticateUser(userEmail, userPassword);
      setTokens(result);

      const currentUser = await Cognito.getCurrentUserAttributes();
      if (restaurantId) {
        await createRestaurantOwner({
          variables: {
            restaurantId: restaurantId,
            email: userEmail,
          },
        });
      }

      const userWithSub = {
        ...user,
        cognitoId: currentUser[0].Value,
      };
      setCurrentUser(userWithSub);
      setConfirmed(true);
      setErrorMsg("");
      
      if (getCurrentPage() == null) {
        setCurrentPage("orders");
      }

      setUser(userWithSub);
      //setLoggedIn(true);
    } else {
      setErrorMsg("Account info is incomplete.");
    }
  }

 return (
  <View style={styles.loginDiv}>
    <KeyboardAwareScrollView contentContainerStyle={{ alignItems: 'center' }}>
      {(errorMsg != "" || successMsg != "") ? (
        <Text style={{...styles.titleText, marginTop: 10}}>Vendor Portal</Text>
      ) : (
        <Text style={styles.titleText}>Vendor Portal</Text>
      )}
      {(errorMsg == "" && successMsg != "") ? <Text style={styles.successMessage}>{successMsg}</Text> : null}
      {(errorMsg != "") ? <Text style={styles.errorMessage}>{errorMsg}</Text> : null}
      {(!signedUp && !confirmed) ? (
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.label}>Name</Text>
          <TextInput 
            value={name}
            onChangeText={(text)=> setName(text)}
            autoCorrect={true}
            style={styles.input}
          />
          <Text style={styles.label}>Email Address</Text>
          <TextInput 
            value={email}
            onChangeText={(text)=> setEmail(text)}
            autoCorrect= {false}
            style={styles.input}
          />
          <Text style={styles.label}>Phone Number</Text>
          <TextInput 
            value={phoneNumber}
            onChangeText={(text)=> setPhoneNumber(text)}
            autoCorrect={false}
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
          <TouchableOpacity activeOpacity={0.5} onPress={signUp} style={styles.button}>
            <Text style={{ color: '#007eff', fontWeight: 'bold' }}>Submit</Text>
          </TouchableOpacity>
        </View>
      ) : signedUp && !confirmed && (
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.label}>Restaurant Id</Text>
          <TextInput 
            value={restaurantId}
            onChangeText={(text)=> setRestaurantId(text)}
            autoCorrect={true}
            style={styles.input}
          />
          <Text style={styles.label}>Confirmation Code</Text>
          <TextInput 
            value={confirmationCode}
            onChangeText={(text)=> setConfirmationCode(text)}
            autoCorrect= {false}
            style={styles.input}
          />
          <TouchableOpacity activeOpacity={0.5} onPress={confirmSignUp} style={styles.button}>
            <Text style={{ color: '#007eff', fontWeight: 'bold' }}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
    
      <View style={{ flexDirection: 'row', marginTop: 12 }}>
        <Text style={{ color: '#FFFFFF' }}>Already have an account?</Text>
        <TouchableOpacity activeOpacity={0.5} onPress={handleLogInScreen}>
          <Text style={styles.signup}>Sign In</Text>
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
    marginTop: 30,
    marginBottom: 20,
  },
  successMessage: {
    borderWidth: 1,
    borderColor: '#1b5e20',
    borderStyle: 'solid',
    backgroundColor: '#a5d6a7',
    color: '#1b5e20',
    width: 350,
    textAlign: 'center',
    marginBottom: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
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

export default SignUpScreen;