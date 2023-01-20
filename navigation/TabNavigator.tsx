import React from 'react';
import { Image, StyleSheet} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Theme
import {useTheme} from 'assets/styles/ThemeProvider';

// Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens
import SampleModalScreen from '../screens/SampleModalScreen';
import OrdersScreen from '../screens/OrdersScreen';
import MenuScreen from '../screens/MenuScreen';
import ReportsScreen from '../screens/ReportsScreen';

const MenuStack = createStackNavigator();
const MenuStackScreen = () => {
    return (
        <MenuStack.Navigator>
            <MenuStack.Screen
                name="Menu"
                component={MenuScreen}
                options={{ headerShown: false }}
            />
        </MenuStack.Navigator>
    )
}

const ReportsStack = createStackNavigator();
const ReportsStackScreen = () => {
    return (
        <ReportsStack.Navigator>
            <ReportsStack.Screen
                name="Reports"
                component={ReportsScreen}
                options={{ headerShown: false }}
            />
        </ReportsStack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

let screenOptions = ({ route }) => ({
    tabBarIcon: ({ color, size }) => {

        switch (route.name) {
            case "Menu":
                return (
                    <Image 
                        source={require('../assets/icons/tabs/MenuTabIcon.png')}
                        style={[styles.iconStyle, { tintColor: color }]}
                    />
                )
            case "Orders":
                return (
                    <Image 
                        source={require('../assets/icons/tabs/OrdersTabIcon.png')}
                        style={[styles.iconStyle, { tintColor: color }]}
                    />
                )
            case "Reports":
                return (
                    <Image 
                        source={require('../assets/icons/tabs/ReportsTabIcon.png')}
                        style={[styles.iconStyle, { tintColor: color }]}
                    />
                )
            default:
                return (<MaterialCommunityIcons name="file-question" size={size} color={color} />)
        }
    },
})
const TabNavigator = ( props ) => {
    const { colors } = useTheme(); // including styles here gives func comps access to styles

    return (
        <Tab.Navigator
            screenOptions={screenOptions}
            tabBarOptions= {{
                activeTintColor: colors.primaryText,
                inactiveTintColor: colors.secondaryText,
                style:{
                    backgroundColor: colors.background,
                    height: 64,
                },
                labelPosition: 'below-icon',
                labelStyle: styles.tabBarLabel
            }}
        >
            <Tab.Screen name="Menu" component={MenuStackScreen} /> 
            <Tab.Screen name="Orders" component={OrdersScreen} initialParams={{...props}} />
            <Tab.Screen name="Reports" component={ReportsStackScreen} /> 

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    iconStyle: {
        resizeMode: 'contain',
        height: 24,
    },
    tabBarLabel: {
        marginTop: -10, 
        marginBottom: 10, 
        fontFamily: 'Inter',
        fontSize: 12
    }
});


export default TabNavigator;