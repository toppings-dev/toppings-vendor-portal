import React, { useState, useContext } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView
} from 'react-native';

import * as LocalAPI from 'clientAPI/local'
import * as UserAPI from 'clientAPI/users'

import PrimaryButton from 'components/elements/PrimaryButton'
import * as FirebaseRecaptcha from 'expo-firebase-recaptcha';

import { firebaseConfig } from 'clientAPI/API_KEYS/firebaseConfig';

import {useTheme} from 'assets/styles/ThemeProvider';

const PhoneNumberScreen = (props) => {
    const [loading, setLoading] = useState(false);
    const [failure, setFailure] = useState(false);
    const [errorText, setErrorText] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const recaptchaVerifier = React.createRef()[0];

    const {colors, styles} = useTheme(); // including styles here gives func comps access to styles

    const _handleNextStep = async () => {
        setLoading(true);
        setFailure(false);

        let r = await UserAPI.signUp(phoneNumber, recaptchaVerifier)
        
        let codeSent = r.success;
        if (codeSent) {
            setLoading(false);
            setFailure(false);
            props.navigation.navigate("VerifySMSCode")
            return
        }

        if (!codeSent) {
            setLoading(false);
            setFailure(true);
            setErrorText(r.data);
            console.log("FAILED: ")
            console.log(r.data)
            return;
        }
    }

    const componentStyles = StyleSheet.create({
        container: {
            position: 'absolute',
            backgroundColor: colors.base,
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            paddingBottom: "20%",
            width: "100%",
            height: "100%",
            paddingHorizontal: 20,
            paddingTop: "20%",
        },
    
        textInput: {
            ...styles.textInput,
            ...styles.h2
        }
    });


    return (
        <View style={styles.container}>
            <View style={{width: "100%"}}>
                <View style={{height:25}}/>
                <Text style={[styles.h2, styles.bold]}>What's your phone number?</Text>
                <FirebaseRecaptcha.FirebaseRecaptchaVerifierModal
                    ref={recaptchaVerifier}
                    firebaseConfig={firebaseConfig}
                    attemptInvisibleVerification={true}
                />
                <TextInput 
                    keyboardType="number-pad"
                    placeholder="818.401.3963" 
                    style={styles.textInput}
                    textContentType="telephoneNumber"
                    value={phoneNumber}
                    onChangeText={(text)=> setPhoneNumber(text)}
                    autoFocus={true}
                />

                { failure ? <Text style={[styles.h3, {color: 'red'}]}>{errorText}</Text> :null}

                <Text style={styles.h3}>Your number is how we verify your identity. We keep it fully private.</Text>
            </View>

            <KeyboardAvoidingView 
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                style={{width: "100%"}}
            >
                <PrimaryButton 
                    loading={loading} 
                    text={"Send me a code 📱"} 
                    onPress={()=> _handleNextStep()} 
                    disabled={phoneNumber.length < 10}
                    fullWidth={true}
                    rounded={true}
                />
            </KeyboardAvoidingView>
        </View>
    );
}

export default PhoneNumberScreen;