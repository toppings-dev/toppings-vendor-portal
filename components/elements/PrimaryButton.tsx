import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
} from 'react-native';
import * as Haptics from 'expo-haptics';

import { LinearGradient } from 'expo-linear-gradient';
import {useTheme} from 'assets/styles/ThemeProvider';

const PrimaryButton = (props) => {
    const _handlePress = (onPress) => {
        Haptics.selectionAsync();
        onPress();
    }
    const {colors, styles} = useTheme(); // including styles here gives func comps access to styles

    const componentStyles = StyleSheet.create({
        button: {
            width: "100%",
            backgroundColor: "black",
            borderRadius: 10,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 15,
            minHeight: 50
        },
    
        buttonText: {
            fontSize: 17,
            color: colors.primaryText,
            fontFamily: "nunito-bold",
            textAlign: 'center',
        },
    
        content: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flex: 0,
        },
    });

    return (
        <TouchableOpacity 
            disabled={props.disabled || false} 
            style={
                props.fullWidth ? {width: "100%"} : null} 
            delayPressIn={0} 
            onPress={()=> _handlePress(props.onPress)}>
            <LinearGradient
                // Button Linear Gradient
                colors={props.disabled ? ['#CCC', '#CCC'] : ['#C542BE',  '#F0924F']}
                style={[componentStyles.button, props.rounded ? {borderRadius: 24} : {borderRadius: 10}, props.noMarginVertical ? {marginVertical: 0} : null]}
                start={[0,1]}
                end={[1,0]}
            >
            { props.loading ? 
                <ActivityIndicator size="small" color="#fff" /> :
                <View style={componentStyles.content}>
                    {props.leftIcon}
                    <Text style={[componentStyles.buttonText, props.disabled ? {color: colors.disabledText} : null]}>{props.text}</Text> 
                </View>
            }
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default PrimaryButton