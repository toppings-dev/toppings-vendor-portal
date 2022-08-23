import React, { useState } from 'react';
import { createStackNavigator, CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import awsConfig from '../utils/awsConfig';
import Amplify from 'aws-amplify';
// import { useQuery } from '@apollo/client';
// import * as customQueries from '../graphql/customQueries';

// Theme
// var Global = require('../assets/styles/global');
import {useTheme} from 'assets/styles/ThemeProvider';

// Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

// Screens
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SampleModalScreen from '../screens/SampleModalScreen';
import SetupGateStackScreen from 'components/SetupGateComponents/SetupGateStackScreen'
import OrdersScreen from '../screens/OrdersScreen';

Amplify.configure(awsConfig);

const quickModal = {
    headerShown: false,
    animationEnabled: true,
    gestureEnabled: false,
    //cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
    ...TransitionPresets.ModalPresentationIOS,
    cardOverlayEnabled: true,
    transitionSpec: {
        open: {
            animation: 'timing',
            config: {
                duration: 100
            },
        },
        close: {
            animation: 'timing',
            config: {
                duration: 100
            },
        }

    },
    cardStyle: { backgroundColor: 'transparent' },
    cardStyleInterpolator: ({ current: { progress } }) => ({
        cardStyle: {
            opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1],
            }),
        },
        overlayStyle: {
            opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, .5],
                extrapolate: 'clamp',
            }),
        },
    }),
}

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Main"
                component={HomeScreen}
                options={{ headerShown: false }}
            />

        </HomeStack.Navigator>
    )
}

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ headerShown: false }}
            />
        </ProfileStack.Navigator>
    )
}

const ModalStack = createStackNavigator();
const ModalStackScreen = () => {
    const {colors} = useTheme(); // including styles here gives func comps access to styles
    return (
        <ModalStack.Navigator
        screenOptions={({route, navigation}) => ({
              gestureEnabled: true,
              cardOverlayEnabled: true,
              headerStatusBarHeight: 5,
              ...TransitionPresets.ModalPresentationIOS,
              headerTintColor: "red"
            })}
            mode="modal"
        >
            <ModalStack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ 
                    ...TransitionPresets.ModalPresentationIOS,
                    cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
                    headerBackTitleVisible: false,
                    headerTintColor: colors.primaryText,
                    headerStyle: {
                        backgroundColor: colors.surface,
                    },
                    
                }}
                
            />

            <ModalStack.Screen
                name="SampleModal"
                component={SampleModalScreen}
                options={{ 
                    ...TransitionPresets.ModalPresentationIOS,
                    cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
                
            />
            


        </ModalStack.Navigator>
    )
}

const RootStack = createStackNavigator();
const RootStackScreen = (props) => {
  const [restaurant, setRestaurant] = useState();
  const { currentUser } = props;

  // let { data, error, loading } = useQuery(customQueries.GET_RESTAURANT_BY_OWNER, {
  //   skip: currentUser.username === 'all@gmail.com',
  // });
  // if (error) {
  //   console.log("error", error);
  // }
  // console.log("data", data);
  // if (data?.getRestaurantByOwner) {
  //   setRestaurant(data.getRestaurantByOwner);
  // }

    return (
        <RootStack.Navigator
          screenOptions={({route, navigation}) => ({
              gestureEnabled: true,
              cardOverlayEnabled: true,
              headerStatusBarHeight:
                navigation.dangerouslyGetState().routes.indexOf(route) > 0 ?
                0 :
                undefined,
              ...TransitionPresets.ModalPresentationIOS,
            })}
            mode="modal"
        >
            <RootStack.Screen
                name="Orders"
                component={OrdersScreen}
                options={{ headerShown: false }}
                initialParams={{...props, restaurant}}
            />
          
            <RootStack.Screen
                name="Tabs"
                component={TabScreen}
                options={{ headerShown: false }}
            />

            <RootStack.Screen
                name="Modals"
                component={ModalStackScreen}
                options={{
                    headerShown: false,
                }}
            />

            <RootStack.Screen
                name="Setup"
                component={SetupGateStackScreen}
                options={{
                    headerShown: false,
                }}
            />

            
        </RootStack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

let screenOptions = ({ route }) => ({
    tabBarIcon: ({ color, size }) => {

        switch (route.name) {
            case "HomeScreen":
                return (<FontAwesome name={"home"} color={color} size={size}/>)

            case "SearchScreen":
                return (<Ionicons name="ios-search" size={size} color={color} />)

            case "ProfileScreen":
                return (<MaterialCommunityIcons name="account-circle" size={size} color={color} />)

            default:
                return (<MaterialCommunityIcons name="file-question" size={size} color={color} />)
        }
    },
})
const TabScreen = () => {
    const {colors} = useTheme(); // including styles here gives func comps access to styles

    return (
        <Tab.Navigator
            screenOptions={screenOptions} 
            tabBarOptions= {{
                activeTintColor: colors.primaryText,
                inactiveTintColor: colors.disabledText,
                showLabel: false,
                style:{
                    backgroundColor: colors.base,
                },
            }}
        >
            <Tab.Screen name="HomeScreen" component={HomeStackScreen} /> 
            <Tab.Screen name="SearchScreen" component={SearchScreen} /> 
            <Tab.Screen name="ProfileScreen" component={ProfileStackScreen} /> 

        </Tab.Navigator>
    )
}


export default RootStackScreen;