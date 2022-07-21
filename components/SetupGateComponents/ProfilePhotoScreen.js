import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Button,
    Image
} from 'react-native';

// var Global = require('assets/styles/global');
import { connect } from 'react-redux'
import LocalAPI from 'clientAPI/local.js'

import PrimaryButton from 'components/elements/PrimaryButton'
import * as ImagePicker from 'expo-image-picker';

import {ThemeContext} from 'assets/styles/ThemeProvider';

class PhoneNumberScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            failure: false,
            image: null,
        };
    }

    static contextType = ThemeContext;

    async _handleNextStep() {
        let source = this.props.navigation.dangerouslyGetState().routes[0]?.params?.source || "Gate"
        this.setState({ loading: true, failure: false });

        await LocalAPI.sleep(1000)
        let codeSent = true;
        if (codeSent) {
            this.setState({ loading: false, failure: false });

            // Go Back if In Settings
            if (source == "Settings") {
                this.props.navigation.goBack()
                return
            }

            
            this.props.route.params._handleSetupGatePassed()
            return
        }

        if (!codeSent) {
            this.setState({ loading: false, failure: true });
            return;
        }
    }

    async pickImage() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri })
            this.props.updateProfiliePic(result.uri)
        }
    }

    render() {
        const imageSRC = this.props.profilePic ? { uri: this.props.profilePic } : require('assets/images/profile-placeholder.png')
        const styles = StyleSheet.create({
            container: {
                position: 'absolute',
                backgroundColor: this.context.colors.base,
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingTop: 45,
                paddingBottom: "20%",
                width: "100%",
                height: "100%",
                paddingHorizontal: 20,
                paddingTop: "20%",
            },
        
            textInput: {
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: this.context.colors.surface,
                padding: 10,
                width: "100%",
                ...this.context.styles.h2,
                borderRadius: 7,
                textAlign: 'center',
                borderColor: this.context.colors.primaryColor,
                borderWidth: 1
            },
        
            description: {
                textAlign: 'center',
                marginVertical: 15
            }
        });

        return (
            <View style={styles.container}>
                <View style={{height:25}}/>
                <Text style={[this.context.styles.h2, this.context.styles.bold, this.context.styles.pad]}>Pick a photo!</Text>

                <TouchableOpacity onPress={() => this.pickImage()}>
                    <Image source={imageSRC} style={{ width: 150, height: 150, borderRadius: 100 }} />
                </TouchableOpacity>

                { this.state.failure ? <Text style={[this.context.styles.h3, {color: 'red'}]}>Couldn't upload image. Try again?</Text> :null}

                <View style={{height:25}}/>
                <Text style={this.context.styles.h3}>
                    This will help us verify that you're real.
                </Text>

                <PrimaryButton 
                    loading={this.state.loading} 
                    text={"That's me 👐"} 
                    onPress={()=> this._handleNextStep()} 
                    disabled={!this.state.image}
                    fullWidth={true}
                    rounded={true}
                />
            </View>
        );
    }
};

function mapStateToProps(state) {
    return {
        profilePic: state.profileReducer.profilePic
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateProfiliePic: (cons) => dispatch({ type: 'UPDATE_PROFILEPIC', profilePic: cons }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
        
    }
}

export default connect(mapStateToProps, null)(connect(mapStateToProps, mapDispatchToProps)(PhoneNumberScreen))