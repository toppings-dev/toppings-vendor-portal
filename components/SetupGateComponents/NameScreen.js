import React, { Component } from 'react';
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

import {ThemeContext} from 'assets/styles/ThemeProvider';

import PrimaryButton from 'components/elements/PrimaryButton'


class PhoneNumberScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            failure: false,
            error: "",
        };
    }

    static contextType = ThemeContext;

    async _handleNextStep() {
        this.setState({ loading: true, failure: false });
        let source = this.props.navigation.dangerouslyGetState().routes[0]?.params?.source || "Gate"

        // await LocalAPI.sleep(500)
        let nameOK = true; 
        if (nameOK) {
             // Go Back if In Settings + Update to Backend
            if (source == "Settings") {
                let r  = await UserAPI.updateUserAppSync({name: this.props.firstName})
                
                if (!r.success){
                    this.setState({ loading: false, failure: true, error: r.data });
                    return
                }
                
                this.setState({ loading: false, failure: false });
                this.props.navigation.goBack()
                return
            }
            this.setState({ loading: false, failure: false });
            this.props.navigation.navigate("PhoneNumber")
            return
        }

        if (!nameOK) {
            this.setState({ loading: false, failure: true });
            return;
        }
    }

    render() {
        const styles = StyleSheet.create({
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
                backgroundColor: this.context.colors.base
            },
        
            description: {
                width: "65%",
                textAlign: 'center',
                marginVertical: 15
            }
        });
        return (
            <View style={styles.container}>
                <View style={{width: "100%"}}>
                    <Text style={[this.context.styles.h2, this.context.styles.bold]}>What's your first name?</Text>
                    <TextInput 
                        placeholder="Mary" 
                        placeholderTextColor="#aaa"
                        style={{...this.context.styles.textInput,
                            ...this.context.styles.h2}}
                        textContentType="givenName"
                        value={this.props.firstName}
                        onChangeText={(text)=> this.props.updateFirstName(text)}
                        autoFocus={true}
                        autoCorrect= {false}
                    />

                    { this.state.failure ? <Text style={[this.context.styles.h3, {color: 'red'}]}>Oops! There was an error: {this.state.error}.</Text> :null}

                    <Text style={this.context.styles.h3}>Please use your real name. Thanks!</Text>
                    <View style={{height:15}}/>
                </View>

                <KeyboardAvoidingView 
                    behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                    style={{width: "100%", marginBottom: "40%"}}
                >
                    <PrimaryButton 
                        loading={this.state.loading}
                        text={"That’s me 😎"} 
                        onPress={()=> this._handleNextStep()}
                        disabled={(this.props.firstName.length < 1)}
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
        firstName: state.profileReducer.firstName,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateFirstName: (cons) => dispatch({ type: 'UPDATE_FIRSTNAME', firstName: cons }),
    }
}

export default connect(mapStateToProps, null)(connect(mapStateToProps, mapDispatchToProps)(PhoneNumberScreen))