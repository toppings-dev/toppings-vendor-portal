import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';

import {ThemeContext} from 'assets/styles/ThemeProvider';

import PrimaryButton from 'components/elements/PrimaryButton'
import * as Linking from 'expo-linking';


class AccessCodeGate extends React.Component {
	declare state: any;
	declare props: any;
	declare context: any;

    constructor(props) {
        super(props);
        this.state = {};
    }

    static contextType = ThemeContext;

    async _handleNextStep() {
        this.props.navigation.navigate("Name")
    }

    async _handleGoToHomeScreen() {
        this.props.route.params._handleSetupGatePassed()
    }

    render() {
        const styles = StyleSheet.create({
            splash: {
                position: 'absolute',
                width: Dimensions.get('window').width,
                height: "100%"
            },
            legalText: {
                fontSize: 12,
                color: 'white',
                textAlign: 'center',
                fontStyle: "normal",
                fontWeight: "normal",
                fontFamily: 'nunito'
            },
            legalTextContainer: {
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignSelf: 'center',
                alignItems: 'center'
            },
            content: {
                marginBottom: 50,
                width: "100%",
                paddingHorizontal: 25,
            },
            container: {
                backgroundColor: this.context.colors.base,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'flex-end',
                flexDirection: 'column',
            },
        });

        const LegalText = () => {
            return (
                <View style={styles.legalTextContainer}>
                    <Text style={styles.legalText}>By entering, you're agreeing to our </Text>
                    <Text 
                        onPress={()=> Linking.openURL('https://www.google.com/')} 
                        style={[styles.legalText, this.context.styles.bold]}
                    >
                         Terms of Service
                    </Text>
                    <Text style={styles.legalText}>and </Text>
                    <Text 
                        onPress={()=> Linking.openURL('https://www.google.com/')} 
                        style={[styles.legalText, this.context.styles.bold]}
                    >
                        Privacy Policy. 
                    </Text>
                    <Text style={styles.legalText}> Thanks!</Text>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <Image source={require('assets/images/SplashScreen.png')} style={styles.splash}/>
                <View style={styles.content}>
                    <LegalText/>
                    <PrimaryButton text={"Sign Up with Phone Number"} onPress={()=> this._handleNextStep()}/>
                    {/* <PrimaryButton text={"Skip SignUp"} onPress={()=> this._handleGoToHomeScreen()}/> */}
                </View>
            </View>
        );
    }
};

export default AccessCodeGate