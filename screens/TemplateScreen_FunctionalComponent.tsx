import React, { Component } from 'react';
import {
    StyleSheet,
    Switch
} from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';

import ModalDemo from '~/components/DemoComponents/ModalDemo';

import {useTheme} from 'assets/styles/ThemeProvider';

export default function TemplateScreen(props) {
    const {colors, styles} = useTheme(); // including styles here gives func comps access to styles

    const newStyles = StyleSheet.create({
        container: {
            backgroundColor: colors.background,
            flex: 1,
            padding: 20,
        },
    });

    const {setScheme, isDark} = useTheme(); // this is a hook
    // useState is also a hook (see practice examples)

    const toggleScheme = () => {
        /* 
        * setScheme will change the state of the context
        * thus will cause childrens inside the context provider to re-render
        * with the new color scheme
        */
        isDark ? setScheme('light') : setScheme('dark');
    }

    return ( 
        // there's no render and there's no constructor props stuff above
        // reason: this a react functional component (vs a react class component)
        // some libraries can only use func or class components, so we chose functional in this
        // because of toggle icon library to switch from light to dark mode, which is only available
        // in react functional components. 
        // NEED TO UNDERSTAND RIGHT AWAY: IS THIS COMPONENT FUNC OR CLASS?
        // if it's a functional component, you can use hooks. (class component canNOT use hooks)
        <SafeAreaView style={newStyles.container} forceInset={{bottom:'never', top:'always'}}>
            <ModalDemo {...props} />
            <Switch value={isDark} onValueChange={toggleScheme}/>
        </SafeAreaView>


    );
}