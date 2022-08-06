import {
    Alert
} from 'react-native';
import Linking from 'expo-linking';
import { Toast } from 'native-base';
// var Global = require('assets/styles/global');
import * as Device from 'expo-device';
import firebase from 'firebase/app'
import * as Font from 'expo-font';
import {
    Nunito_400Regular,
    Nunito_700Bold
  } from '@expo-google-fonts/nunito';
import { Ionicons } from '@expo/vector-icons';

const UserAPI = require('./users');
import { firebaseConfig } from './API_KEYS/firebaseConfig';

const AlertNotifications = async () => new Promise((resolve) => {
    Alert.alert(
        'Enable Push Notifications',
        'Expo-Boilerplate will send you notifications for <PURPOSE>',
        [
            {
                text: 'OK',
                onPress: () => {
                    resolve(true);
                },
            }, 
            {
                text: 'Cancel',
                onPress: () => {
                    resolve(false);
                },
                style: 'cancel'
            }
        ], 
        { cancelable: true },
    );
});

const checkDevicePermissions = async () => {
    // // PERMISSION 1: Notifications
    // const notifPermStatus = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    // let notifsPermOK = (notifPermStatus.granted || !Device.isDevice) // simulator is not a device. 

    // // Stop here if the user did not grant permissions
    // if (!notifsPermOK) {
    //     const {status, permissions} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    //     if (status !== 'granted'){
    //         let a  = await AlertNotifications()
    //         if (a){
    //             Linking.openURL('app-settings://notification/')
    //             throw new Error("Notifications are not enabled.")
    //         }
    //     }
    // }

    return false;
}

const initializeFirebase = async () => {
    try {
        if (firebase.apps.length == 0){
            firebase.initializeApp(firebaseConfig);
        }
    } 
    catch (error) {
        throw new Error(error);
    }
}

const loadFonts = async () => {
    Font.loadAsync({
        // This is the font that we are using for our tab bar (unused, keeping syntax -MJ)
        ...Ionicons.font,
        'work-sans-regular': require('assets/fonts/WorkSans-Regular.ttf'),
        'work-sans-bold': require('assets/fonts/WorkSans-Bold.ttf'),
        'work-sans-light': require('assets/fonts/WorkSans-Light.ttf'),
        'work-sans-medium': require('assets/fonts/WorkSans-Medium.ttf'),
        'work-sans-semibold': require('assets/fonts/WorkSans-SemiBold.ttf'),
        'work-sans-thin': require('assets/fonts/WorkSans-Thin.ttf'),
        'segoe': require('assets/fonts/segoe.ttf'),
        'segoe-bold': require('assets/fonts/segoe-bold.ttf'),
        'segoe-italic': require('assets/fonts/segoe-italic.ttf'),
        'nunito': Nunito_400Regular,
        'nunito-bold': Nunito_700Bold,
    })
}

// run this every time app is initialized
const startupSequence = async () => {
    try {
        await loadFonts();
        await checkDevicePermissions();
        await initializeFirebase();
        await UserAPI.authenticateUser();
    }
    catch (e){
        return {
            success: false,
            data: e
        }

    }

    return { success: true, data: "Successfully logged in" }
}

// sleep time expects milliseconds
const sleep = async (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
}

export { startupSequence, sleep }