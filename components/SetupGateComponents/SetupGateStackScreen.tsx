import React, { Component } from 'react';
import {Platform} from 'react-native';
import { createStackNavigator, CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import GetStartedScreen from 'components/SetupGateComponents/GetStartedScreen'
import PhoneNumberScreen from 'components/SetupGateComponents/PhoneNumberScreen'
import VerifySMSCodeScreen from 'components/SetupGateComponents/VerifySMSCodeScreen'
import NameScreen from 'components/SetupGateComponents/NameScreen'
import HandleScreen from 'components/SetupGateComponents/HandleScreen'
import ProfilePhotoScreen from 'components/SetupGateComponents/ProfilePhotoScreen'
import LogInScreen from 'components/SetupGateComponents/LogInScreen';
import SignUpScreen from 'components/SetupGateComponents/SignUpScreen';

const SetupGateStack = createStackNavigator();
const SetupGateStackScreen = (props) => {
    return (
        <SetupGateStack.Navigator
            screenOptions={({route, navigation}) => ({
              headerShown: false,
              animationEnabled: Platform.OS == 'android' ? false : true,
            })}
        >
          <SetupGateStack.Screen
              name="LogInScreen"
              component={LogInScreen}
              options = {{
                  headerShown:false,
              }}
              initialParams={props}
          />
          <SetupGateStack.Screen
              name="SignUpScreen"
              component={SignUpScreen}
              options = {{
                  headerShown:false,
              }}
              initialParams={props}
          />
            {/* <SetupGateStack.Screen
                name="GetStarted"
                component={GetStartedScreen}
                options = {{
                    headerShown:false,
                }}
                initialParams={props}
            />

            <SetupGateStack.Screen
                name="PhoneNumber"
                component={PhoneNumberScreen}
                options = {{
                    headerShown:false,
                }}
            />

            <SetupGateStack.Screen
                name="VerifySMSCode"
                component={VerifySMSCodeScreen}
                options = {{
                    headerShown:false,
                }}
            />

            <SetupGateStack.Screen
                name="Name"
                component={NameScreen}
                options = {{
                    headerShown:false,
                }}
            />

            <SetupGateStack.Screen
                name="Handle"
                component={HandleScreen}
                options = {{
                    headerShown:false,
                }}
            />

            <SetupGateStack.Screen
                name="ProfilePhoto"
                component={ProfilePhotoScreen}
                options = {{
                    headerShown:false,
                }}
                initialParams={props}
            /> */}
        </SetupGateStack.Navigator>
    )
}

export default SetupGateStackScreen;