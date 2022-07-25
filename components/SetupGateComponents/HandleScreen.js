import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView
} from 'react-native';

import {useTheme} from 'assets/styles/ThemeProvider';
import LocalAPI from 'clientAPI/local.js'
import UserAPI from 'clientAPI/users.js'

import PrimaryButton from 'components/elements/PrimaryButton'


const HandleScreen = (props) => {
    const [loading, setLoading] = useState(false);
    const [failure, setFailure] = useState(false);
    const [errorText, setErrorText] = useState("");
    const [handle, setHandle] = useState("");
    const {colors, styles} = useTheme(); // including styles here gives func comps access to styles

    const _handleNextStep = async () => {
        let source = props.navigation.dangerouslyGetState().routes[0]?.params?.source || "Gate"

        setLoading(true);
        setFailure(false);

        let handleValid = true;
        if (handleValid) {
            let r  = await UserAPI.updateHandle(handle)
                
            if (!r.success){
                setLoading(false);
                setFailure(true);
                setErrorText(r.data);
                return
            }
            setLoading(false);
            setFailure(false);            

            // Go Back if In Settings
            if (source == "Settings") {
                props.navigation.goBack()
                return
            }

            props.navigation.navigate("ProfilePhoto")
            return
        }

        if (!codeSent) {
            setLoading(false);
            setFailure(true);
            return;
        }
    }

    const componentStyles = StyleSheet.create({
        container: {
            position: 'absolute',
            backgroundColor: colors.base,
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            paddingTop: 45,
            paddingBottom: "20%",
            width: "100%",
            height: "100%",
            paddingHorizontal: 20,
            paddingTop: "20%",
        },
    
        textInput: {
            ...styles.textInput,
            ...styles.h2,
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
                <Text style={[styles.h2, styles.bold, styles.pad]}>Pick a handle</Text>
                <TextInput 
                    placeholder="@maryjane" 
                    style={styles.textInput}
                    value={handle}
                    onChangeText={(text)=> setHandle(text)}
                    autoFocus={true}
                    autoCorrect= {false}
                />

                <Text style={styles.h3}>
                    Your @ will be seen by everyone!
                </Text>

                { failure ? <Text style={[styles.h3, {color: 'red'}]}>Error: {errorText}</Text> :null}

                <View style={{height:25}}/>
            </View>

            <KeyboardAvoidingView 
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                style={{width: "100%", marginBottom: "40%"}}
            >
                <PrimaryButton 
                    loading={loading} 
                    text={"Claim handle 👤 "} 
                    onPress={()=> _handleNextStep()} 
                    disabled={handle.length < 2}
                    fullWidth={true}
                    rounded={true}
                />
            </KeyboardAvoidingView>
        </View>
    );
};

// function mapStateToProps(state) {
//     return {
//         handle: state.profileReducer.handle
//     }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         updateHandle: (cons) => dispatch({ type: 'UPDATE_HANDLE', handle: cons }),
//     }
// }

// export default connect(mapStateToProps, null)(connect(mapStateToProps, mapDispatchToProps)(PhoneNumberScreen))
export default HandleScreen;