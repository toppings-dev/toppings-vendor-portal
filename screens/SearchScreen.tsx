import React, { Component } from 'react';
import {
    StyleSheet,
    StyleProp,
    ViewStyle,
} from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';
import {useTheme} from 'assets/styles/ThemeProvider';

import SearchScreenDemo from '../components/SearchScreenComponents/SearchScreenDemo';

interface Styles {
  container: ViewStyle
}

interface IProps {
  viewStyle?: StyleProp<ViewStyle>;
}

export default function SearchScreen(props) {
    const {colors, styles} = useTheme(); // including styles here gives func comps access to styles

    const containerStyles = StyleSheet.create<Styles>({
        container: {
            flex: 1,
            padding: 20,
            backgroundColor: colors.base
        },
    });

    return (
        <SafeAreaView style={containerStyles.container} forceInset={{bottom:'never', top:'always'}}>
            <SearchScreenDemo />
        </SafeAreaView>
    );
}