import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {useTheme} from 'assets/styles/ThemeProvider';
import TemplateComponent from 'components/TemplateComponent'

const SampleModalComponent = (props) => {
    const {colors, styles} = useTheme(); // including styles here gives func comps access to styles
    const containerStyles = StyleSheet.create({
        container: {
            flex: 1,
        },
    });
    
    return (
        <View style={containerStyles.container}>
            <Text style={styles.h1}>Modal Screen!</Text>
            <TemplateComponent/>
        </View>
    );
};

export default SampleModalComponent;