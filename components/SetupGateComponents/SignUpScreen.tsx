import React, { useState, useRef, useContext, useEffect } from 'react';
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
    {(errorMsg == "" && successMsg != "") ? <Text style={styles.successMessage}>{successMsg}</Text> : null}
    {(errorMsg != "") ? <Text style={styles.errorMessage}>{errorMsg}</Text> : null}
    {(!signedUp && !confirmed) ? (
      <View>
        <TextInput 
          placeholder="Name" 
          value={name}
          onChangeText={(text)=> setName(text)}
          autoCorrect={true}
        />
        <TextInput 
          placeholder="Email Address" 
          value={email}
          onChangeText={(text)=> setEmail(text)}
          autoFocus={false}
          autoCorrect= {false}
        />
        <TextInput 
          placeholder="Phone Number" 
          value={phoneNumber}
          onChangeText={(text)=> setPhoneNumber(text)}
          autoCorrect={false}
        />
        <TextInput 
          placeholder="Password" 
          value={password}
          onChangeText={(text)=> setPassword(text)}
          autoCorrect={false}
          secureTextEntry={true}
        />
        <KeyboardAvoidingView>
          <TouchableOpacity activeOpacity={0.5} onPress={signUp}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    ) : signedUp && !confirmed && (
      <View>
        <TextInput 
          placeholder="Restaurant Id" 
          value={restaurantId}
          onChangeText={(text)=> setRestaurantId(text)}
          autoCorrect={true}
        />
        <TextInput 
          placeholder="Confirmation Code" 
          value={confirmationCode}
          onChangeText={(text)=> setConfirmationCode(text)}
          autoFocus={false}
          autoCorrect= {false}
        />
        <KeyboardAvoidingView>
          <TouchableOpacity activeOpacity={0.5} onPress={confirmSignUp}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    )}
   
    <Text>Already have an account? <TouchableOpacity activeOpacity={0.5} onPress={handleLogInScreen}><Text>Sign In</Text></TouchableOpacity></Text>
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

export default SignUpScreen;