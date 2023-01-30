import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './RootStack';
import TabNavigator from './TabNavigator';

export default function AppNavigator(props) {
    return (
      <NavigationContainer>
        {/* <RootStack {...props} /> */}
        <TabNavigator {...props} />
      </NavigationContainer>
    );
}