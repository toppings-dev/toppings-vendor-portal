import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView
} from 'react-native';

import { connect } from 'react-redux'
import LocalAPI from 'clientAPI/local.js'
import UserAPI from 'clientAPI/users.js'

import PrimaryButton from 'components/elements/PrimaryButton'
import * as FirebaseRecaptcha from 'expo-firebase-recaptcha';

import { firebaseConfig } from 'clientAPI/API_KEYS/firebaseConfig';

import {ThemeContext} from 'assets/styles/ThemeProvider';

class PhoneNumberScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            failure: false,
            errorText: "",
        };

        this.recaptchaVerifier = React.createRef();
    }

    static contextType = ThemeContext;

    async _handleNextStep() {
        this.setState({ loading: true, failure: false });

        let r = await UserAPI.signUp(this.props.phoneNumber, this.recaptchaVerifier)
        
        let codeSent = r.success;
        if (codeSent) {
            this.setState({ loading: false, failure: false });
            this.props.navigation.navigate("VerifySMSCode")
            return
        }

        if (!codeSent) {
            this.setState({ loading: false, failure: true, errorText: r.data });
            console.log("FAILED: ")
            console.log(r.data)
            return;
        }
    }

    render() {
        const styles = StyleSheet.create({
            container: {
                position: 'absolute',
                backgroundColor: this.context.colors.base,
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
                ...this.context.styles.textInput,
                ...this.context.styles.h2
            }
        });


        return (
            <View style={styles.container}>
                <View style={{width: "100%"}}>
                    <View style={{height:25}}/>
                    <Text style={[this.context.styles.h2, this.context.styles.bold]}>What's your phone number?</Text>
                    <FirebaseRecaptcha.FirebaseRecaptchaVerifierModal
                        ref={this.recaptchaVerifier}
                        firebaseConfig={firebaseConfig}
                        attemptInvisibleVerification={true}
                    />
                    <TextInput 
                        keyboardType="number-pad"
                        placeholder="818.401.3963" 
                        style={styles.textInput}
                        textContentType="telephoneNumber"
                        value={this.props.phoneNumber}
                        onChangeText={(text)=> this.props.updatePhoneNumber(text)}
                        autoFocus={true}
                    />

                    { this.state.failure ? <Text style={[this.context.styles.h3, {color: 'red'}]}>{this.state.errorText}</Text> :null}

                    <Text style={this.context.styles.h3}>Your number is how we verify your identity. We keep it fully private.</Text>
                </View>

                <KeyboardAvoidingView 
                    behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                    style={{width: "100%"}}
                >
                    <PrimaryButton 
                        loading={this.state.loading} 
                        text={"Send me a code 📱"} 
                        onPress={()=> this._handleNextStep()} 
                        disabled={this.props.phoneNumber.length < 10}
                        fullWidth={true}
                        rounded={true}
                    />
                </KeyboardAvoidingView>
            </View>
        );
    }
};

function mapStateToProps(state) {
    return {
        phoneNumber: state.profileReducer.phoneNumber,
        AWS_USERDATA: state.profileReducer.AWS_USERDATA
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updatePhoneNumber: (cons) => dispatch({ type: 'UPDATE_PHONENUMBER', phoneNumber: cons }),
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(TemplateComponent);
export default connect(mapStateToProps, null)(connect(mapStateToProps, mapDispatchToProps)(PhoneNumberScreen))