// React Imports
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, LogBox } from 'react-native';

// Expo Imports
import * as SplashScreen from 'expo-splash-screen';
import * as ScreenOrientation from 'expo-screen-orientation';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

// 3rd Party Libraries
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppearanceProvider } from 'react-native-appearance';
import {ThemeProvider} from 'assets/styles/ThemeProvider';

// Custom Components
var LocalAPI = require('./clientAPI/local');
import AppNavigator from './navigation/AppNavigator';
import SetupGate from 'components/SetupGateComponents/SetupGateNavigator'
import { Root } from "native-base";
import "./shim";

const App = () => {
    const [isLoadingComplete, setIsLoadingComplete] = useState<Boolean>(false);
    const [showSetupGate, setShowSetupGate] = useState<Boolean>(false);


    useEffect(()=>{
        LogBox.ignoreLogs([
            'Native splash screen is already hidden.',
        ]);

        SplashScreen.preventAutoHideAsync()
        loadResourcesAsync()
    
    }, []);

    const loadResourcesAsync = async () => {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

        let readyToOpenApp = await LocalAPI.startupSequence();

        if (readyToOpenApp.success) {
            _handleSetupGatePassed()
        }

        if (!readyToOpenApp.success) {
            console.log(readyToOpenApp)
            setShowSetupGate(true);
        }

        await handleFinishLoading()
    }

    const _handleSetupGatePassed = () => {
        setShowSetupGate(false);
    }

    // In this case, you might want to report the error to your error reporting
    // service, for example Sentry
    const handleLoadingError = (error) => {
        console.warn(error);
    }

    const handleFinishLoading = async () => {
        setIsLoadingComplete(true);
        await SplashScreen.hideAsync();
    }

  
    return (
        <AppearanceProvider>
        <ThemeProvider>
            <SafeAreaProvider>
            <Root>
                    <StatusBar style="light" />
                    <View style={styles.container}>
                        {
                            !isLoadingComplete ? 
                                <AppLoading
                                    startAsync={loadResourcesAsync}
                                    onFinish={() => setIsLoadingComplete(true)}
                                    onError = {console.warn}
                                />
                            :
                                showSetupGate ?
                                <SetupGate _handleSetupGatePassed= {_handleSetupGatePassed} showSetupGate={showSetupGate ? "true" : "false"}/>
                                :<AppNavigator/>
                        }
                </View>
            </Root>
            </SafeAreaProvider>
        </ThemeProvider>
        </AppearanceProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bg: {
        position: 'absolute',
        left: 0,
        flex:1,
        resizeMode: "stretch",
        zIndex: 0,
        width: "100%",
        height: "100%"

    },
});

export default App;