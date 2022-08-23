import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './RootStack';

export default function AppNavigator(props) {
    return (
        <NavigationContainer>
            <RootStack {...props}/>
        </NavigationContainer>

    );
}