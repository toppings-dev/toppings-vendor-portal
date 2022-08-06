import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import SetupGateStackScreen from "./SetupGateStackScreen"

export default function AppNavigator(props) {
    return (
        <NavigationContainer>
            <SetupGateStackScreen {...props}/>
        </NavigationContainer>

    );
}