import React, { useState, useContext } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';

// var Global = require('assets/styles/global');
import { connect } from 'react-redux'
import LocalAPI from 'clientAPI/local.js'
import UserAPI from 'clientAPI/users.js'

import {useTheme} from 'assets/styles/ThemeProvider';

import PrimaryButton from 'components/elements/PrimaryButton'


//class PhoneNumberScreen extends React.Component {
const PhoneNumberScreen = (props) => {
    const [loading, setLoading] = useState(false);
    const [failure, setFailure] = useState(false);
    const [error, setError] = useState("");
    const [firstName, setFirstName] = useState("");

    const {colors, styles} = useTheme(); // including styles here gives func comps access to styles

    const _handleNextStep = async () => {
        setLoading(true);
        setFailure(false);
        let source = props.navigation.dangerouslyGetState().routes[0]?.params?.source || "Gate"

        // await LocalAPI.sleep(500)
        let nameOK = true; 
        if (nameOK) {
             // Go Back if In Settings + Update to Backend
            if (source == "Settings") {
                let r  = await UserAPI.updateUserAppSync({name: firstName})
                
                if (!r.success){
                    setLoading(false);
                    setFailure(true);
                    setError(r.data);
                    return
                }
                setLoading(false);
                setFailure(false);                
               props.navigation.goBack()
                return
            }
            setLoading(false);
            setFailure(false);
            console.log("navigate to phone", props.navigation);
            props.navigation.navigate("PhoneNumber")
            return
        }

        if (!nameOK) {
            setLoading(false);
            setFailure(true);
            return;
        }
    }

    const componentStyles = StyleSheet.create({
        container: {
            position: 'absolute',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            paddingTop: 45,
            paddingBottom: "20%",
            width: "100%",
            height: "100%",
            paddingHorizontal: 20,
            paddingTop: "20%",
            zIndex: 1,
            backgroundColor: colors.base
        },
    
        description: {
            width: "65%",
            textAlign: 'center',
            marginVertical: 15
        }
    });
    return (
        <View style={componentStyles.container}>
            <View style={{width: "100%"}}>
                <Text style={[styles.h2, styles.bold]}>What's your first name?</Text>
                <TextInput 
                    placeholder="Mary" 
                    placeholderTextColor="#aaa"
                    style={{...styles.textInput,
                        ...styles.h2}}
                    textContentType="givenName"
                    value={firstName}
                    onChangeText={(text)=> setFirstName(text)}
                    autoFocus={true}
                    autoCorrect= {false}
                />

                { failure ? <Text style={[styles.h3, {color: 'red'}]}>Oops! There was an error: {error}.</Text> :null}

                <Text style={styles.h3}>Please use your real name. Thanks!</Text>
                <View style={{height:15}}/>
            </View>

            <KeyboardAvoidingView 
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                style={{width: "100%", marginBottom: "40%"}}
            >
                <PrimaryButton 
                    loading={loading}
                    text={"That’s me 😎"} 
                    onPress={()=> _handleNextStep()}
                    disabled={(firstName.length < 1)}
                    fullWidth={true}
                    rounded={true}
                />
            </KeyboardAvoidingView>
        </View>
    );
};

export default PhoneNumberScreen;