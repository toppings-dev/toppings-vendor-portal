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

import {ThemeContext} from 'assets/styles/ThemeProvider';
import { connect } from 'react-redux'
import LocalAPI from 'clientAPI/local.js'
import UserAPI from 'clientAPI/users.js'

import PrimaryButton from 'components/elements/PrimaryButton'


class PhoneNumberScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            failure: false,
            errorText: '',
        };
    }

    static contextType = ThemeContext;

    async _handleNextStep() {
        let source = this.props.navigation.dangerouslyGetState().routes[0]?.params?.source || "Gate"

        this.setState({ loading: true, failure: false });

        let handleValid = true;
        if (handleValid) {
            let r  = await UserAPI.updateHandle(this.props.handle)
                
            if (!r.success){
                this.setState({ loading: false, failure: true, errorText: r.data });
                return
            }
            
            this.setState({ loading: false, failure: false });

            // Go Back if In Settings
            if (source == "Settings") {
                this.props.navigation.goBack()
                return
            }

            this.props.navigation.navigate("ProfilePhoto")
            return
        }

        if (!codeSent) {
            this.setState({ loading: false, failure: true });
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
                ...this.context.styles.h2,
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
                    <Text style={[this.context.styles.h2, this.context.styles.bold, this.context.styles.pad]}>Pick a handle</Text>
                    <TextInput 
                        placeholder="@maryjane" 
                        style={styles.textInput}
                        value={this.props.handle}
                        onChangeText={(text)=> this.props.updateHandle(text)}
                        autoFocus={true}
                        autoCorrect= {false}
                    />

                    <Text style={this.context.styles.h3}>
                        Your @ will be seen by everyone!
                    </Text>

                    { this.state.failure ? <Text style={[this.context.styles.h3, {color: 'red'}]}>Error: {this.state.errorText}</Text> :null}

                    <View style={{height:25}}/>
                </View>

                <KeyboardAvoidingView 
                    behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                    style={{width: "100%", marginBottom: "40%"}}
                >
                    <PrimaryButton 
                        loading={this.state.loading} 
                        text={"Claim handle 👤 "} 
                        onPress={()=> this._handleNextStep()} 
                        disabled={this.props.handle.length < 2}
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
        handle: state.profileReducer.handle
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateHandle: (cons) => dispatch({ type: 'UPDATE_HANDLE', handle: cons }),
    }
}

export default connect(mapStateToProps, null)(connect(mapStateToProps, mapDispatchToProps)(PhoneNumberScreen))