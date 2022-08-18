// React Imports
import React, { Component } from 'react';
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

export class App extends Component {
	declare state: any;
	declare setState: any;

    constructor(props) {
        super(props);
        this.state = {
            isLoadingComplete: false,
            showSetupGate: true,
        };

        this.loadResourcesAsync = this.loadResourcesAsync.bind(this);
        this.handleLoadingError = this.handleLoadingError.bind(this);
        this.handleFinishLoading = this.handleFinishLoading.bind(this);
        this._handleSetupGatePassed = this._handleSetupGatePassed.bind(this);
    };

    async componentDidMount() {
        LogBox.ignoreLogs([
            'Native splash screen is already hidden.',
        ]);

        SplashScreen.preventAutoHideAsync()
        this.loadResourcesAsync()
    }

    async loadResourcesAsync() {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

        let readyToOpenApp = await LocalAPI.startupSequence();

        if (readyToOpenApp.success) {
            this._handleSetupGatePassed()
        }

        if (!readyToOpenApp.success) {
            console.log(readyToOpenApp)
            this.setState({ showSetupGate: true })
        }

        await this.handleFinishLoading()
    }

    _handleSetupGatePassed() {
        this.setState({ showSetupGate: false })
    }

    // In this case, you might want to report the error to your error reporting
    // service, for example Sentry
    handleLoadingError(error) {
        console.warn(error);
    }

    async handleFinishLoading() {
        this.setState({ isLoadingComplete: true })
        await SplashScreen.hideAsync();
    }

    render() {

        return (
            <AppearanceProvider>
            <ThemeProvider>
                <SafeAreaProvider>
                <Root>
                        <StatusBar style="light" />
                        <View style={styles.container}>
                            {
                                !this.state.isLoadingComplete ? 
                                    <AppLoading
                                        startAsync={this.loadResourcesAsync}
                                        onFinish={() => this.setState({isLoadingComplete: true})}
                                        onError = {console.warn}
                                    />
                                :
                                    this.state.showSetupGate ?
                                    <SetupGate _handleSetupGatePassed= {this._handleSetupGatePassed} showSetupGate={this.state.showSetupGate ? "true" : "false"}/>
                                    :<AppNavigator/>
                            }
                    </View>
                </Root>
                </SafeAreaProvider>
            </ThemeProvider>
            </AppearanceProvider>
        )
    }
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