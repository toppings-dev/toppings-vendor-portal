import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import {useTheme} from 'assets/styles/ThemeProvider';


const SearchScreenDemo =(props) => {

    const {colors, styles} = useTheme(); // including styles here gives func comps access to styles

    const containerStyles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
        },
        text: {
            textAlign: 'center',
            marginVertical: 5,
        },
    });
    
    return (
        <View style={containerStyles.container}>
            <Text style={[styles.h1, styles.bold, containerStyles.text]}>Search Screen</Text>
            <Text style={[styles.h2, containerStyles.text]}>This screen is left blank. Feel free to use this for quick prototyping/testing.</Text>
        </View>
    );
};

export default SearchScreenDemo;