import React, { Component } from 'react';
import { createStackNavigator, CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import GetStartedScreen from 'components/SetupGateComponents/GetStartedScreen'
import PhoneNumberScreen from 'components/SetupGateComponents/PhoneNumberScreen'
import VerifySMSCodeScreen from 'components/SetupGateComponents/VerifySMSCodeScreen'
import NameScreen from 'components/SetupGateComponents/NameScreen'
import HandleScreen from 'components/SetupGateComponents/HandleScreen'
import ProfilePhotoScreen from 'components/SetupGateComponents/ProfilePhotoScreen'

const SetupGateStack = createStackNavigator();
const SetupGateStackScreen = (props) => {
    return (
        <SetupGateStack.Navigator
            screenOptions={({route, navigation}) => ({
              headerShown: false
            })}
        >
            <SetupGateStack.Screen
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
            />
        </SetupGateStack.Navigator>
    )
}

export default SetupGateStackScreen;