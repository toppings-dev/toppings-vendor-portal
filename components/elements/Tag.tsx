import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

import {useTheme} from 'assets/styles/ThemeProvider';

var _ = require('lodash');

const PrimaryButton = (props) => {
    const {colors, styles} = useTheme(); // including styles here gives func comps access to styles

    const componentStyles = {
        button: {
            backgroundColor: _.sample(styles.pastelsArray),
            borderRadius: 3,
            paddingHorizontal: 5,
            paddingVertical: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'baseline',
            marginRight: 0
        },
    }

    return (
        <TouchableOpacity 
            disabled={props.pressable || true} 
            style={[
                componentStyles.button, 
                props.backgroundColor ? {backgroundColor: props.backgroundColor} : null,
                props.disabled ? {backgroundColor: 'grey'} : null
            ]} 
            delayPressIn={0} 
            onPress={()=> props.onPress()}
        >
            { props.loading ? 
                <ActivityIndicator size="small" color="#fff" /> :
                <Text 
                    style={[
                        styles.h3, 
                        props.textColor ? {color: props.textColor} : null,
                        props.disabled ? {color: colors.disabledText} : null]}
                >
                    {props.text}
                </Text> 
            }
        </TouchableOpacity>
    )
}

export default PrimaryButton