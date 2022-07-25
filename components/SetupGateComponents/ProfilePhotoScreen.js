import React, { useState } from 'react';
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
import LocalAPI from 'clientAPI/local.js'

import PrimaryButton from 'components/elements/PrimaryButton'
import * as ImagePicker from 'expo-image-picker';

import {useTheme} from 'assets/styles/ThemeProvider';

const ProfilePhotoScreen =(props) => {
    const [loading, setLoading] = useState(false);
    const [failure, setFailure] = useState(false);
    const [image, setImage] = useState();
    const [profilePic, setProfilePic] = useState();

    const {colors, styles} = useTheme(); // including styles here gives func comps access to styles

    const _handleNextStep = async () => {
        let source = props.navigation.dangerouslyGetState().routes[0]?.params?.source || "Gate"
        setLoading(true);
        setFailure(false);

        await LocalAPI.sleep(1000)
        let codeSent = true;
        if (codeSent) {
            setLoading(false);
            setFailure(false);

            // Go Back if In Settings
            if (source == "Settings") {
                props.navigation.goBack()
                return
            }

            
            props.route.params._handleSetupGatePassed()
            return
        }

        if (!codeSent) {
            setLoading(false);
            setFailure(true);
            return;
        }
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
            setProfiliePic(result.uri)
        }
    }

    const imageSRC = profilePic ? { uri: profilePic } : require('assets/images/profile-placeholder.png')
    const componentStyles = StyleSheet.create({
        container: {
            position: 'absolute',
            backgroundColor: colors.base,
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
            backgroundColor: colors.surface,
            padding: 10,
            width: "100%",
            ...styles.h2,
            borderRadius: 7,
            textAlign: 'center',
            borderColor: colors.primaryColor,
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
            <Text style={[styles.h2, styles.bold, styles.pad]}>Pick a photo!</Text>

            <TouchableOpacity onPress={() => pickImage()}>
                <Image source={imageSRC} style={{ width: 150, height: 150, borderRadius: 100 }} />
            </TouchableOpacity>

            { failure ? <Text style={[styles.h3, {color: 'red'}]}>Couldn't upload image. Try again?</Text> :null}

            <View style={{height:25}}/>
            <Text style={styles.h3}>
                This will help us verify that you're real.
            </Text>

            <PrimaryButton 
                loading={loading} 
                text={"That's me 👐"} 
                onPress={()=> t_handleNextStep()} 
                disabled={!image}
                fullWidth={true}
                rounded={true}
            />
        </View>
    );
};

export default ProfilePhotoScreen;