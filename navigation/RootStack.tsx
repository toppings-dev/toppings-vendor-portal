import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import SetupGateStackScreen from "components/SetupGateComponents/SetupGateStackScreen";
import TabNavigator from "./TabNavigator";

// This should be used in AppNavigator in the future
// Need to figure out golbal props first

const RootStack = createStackNavigator();
const RootStackScreen = (props) => {
  return (
    <RootStack.Navigator
      screenOptions={({ route, navigation }) => ({
        gestureEnabled: true,
        cardOverlayEnabled: true,
        headerStatusBarHeight:
          navigation.dangerouslyGetState().routes.indexOf(route) > 0
            ? 0
            : undefined,
        ...TransitionPresets.ModalPresentationIOS,
      })}
      mode="modal"
    >
      <RootStack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />

      {/* <RootStack.Screen
                name="Modals"
                component={ModalStackScreen}
                options={{
                    headerShown: false,
                }}
            /> */}

      <RootStack.Screen
        name="Setup"
        component={SetupGateStackScreen}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
