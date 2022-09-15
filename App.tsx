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

import { ApolloProvider } from '@apollo/client';
import client from './client';
import CognitoClient from './utils/CognitoClient';
import { getCurrentUser, clearSession } from './utils/session';

const App = () => {
    const [isLoadingComplete, setIsLoadingComplete] = useState<Boolean>(false);
    const [showSetupGate, setShowSetupGate] = useState<Boolean>(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    // let user;
    // let loggedIn;
    
    const Cognito = new CognitoClient();

    useEffect(()=>{
        let isMounted = true;

        const loadAsync = async () => {
          LogBox.ignoreLogs([
              'Native splash screen is already hidden.',
              'AsyncStorage has been extracted from react-native core and will be removed in a future release.',
          ]);

          const currentUser = await getCurrentUser();
          if (isMounted) {
            setUser(currentUser);
            setLoggedIn(!!currentUser);
          };
          
          await SplashScreen.preventAutoHideAsync();
          await loadResourcesAsync()
        };

        loadAsync();
        // Cognito.signOut();
        // setLoggedIn(false);
        // clearSession("user");
        // clearSession("page");

        return () => { isMounted = false };
    }, []);

    const loadResourcesAsync = async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

        let readyToOpenApp = await LocalAPI.startupSequence();
      
        // if (readyToOpenApp.success) {
        //     _handleSetupGatePassed()
        // }

        if (!readyToOpenApp.success) {
            console.log(readyToOpenApp)
            //setShowSetupGate(true);
        } else {
          await handleFinishLoading();  
        }
        

    }

    // const _handleSetupGatePassed = () => {
    //     setShowSetupGate(false);
    // }

    // // In this case, you might want to report the error to your error reporting
    // // service, for example Sentry
    // const handleLoadingError = (error) => {
    //     console.warn(error);
    // }

    const handleFinishLoading = async () => {
        await SplashScreen.hideAsync();
    }
  
    return (
      <ApolloProvider client={client}>
          <AppearanceProvider>
          <ThemeProvider>
              <SafeAreaProvider>
              <Root>
                      <StatusBar style="light" />
                      <View style={styles.container}>
                        {/* {!loggedIn ? 
                        <SetupGate />
                        :<AppNavigator/>
                        } */}
                          {
                              !isLoadingComplete ? 
                                  <AppLoading
                                      startAsync={loadResourcesAsync}
                                      onFinish={() => setIsLoadingComplete(true)}
                                      onError = {console.warn}
                                  />
                              :
                                  !loggedIn ?
                                  // <SetupGate _handleSetupGatePassed= {_handleSetupGatePassed} showSetupGate={showSetupGate ? "true" : "false"}/>
                                  <SetupGate 
                                    Cognito={Cognito} 
                                    showSetupGate={showSetupGate ? "true" : "false"} 
                                    setUser={setUser} 
                                    setLoggedIn={setLoggedIn} 
                                  />
                                  :<AppNavigator currentUser={user} />
                          }
                  </View>
              </Root>
              </SafeAreaProvider>
          </ThemeProvider>
          </AppearanceProvider>
        </ApolloProvider>
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