import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';

import { Feather } from '@expo/vector-icons';
import ProfileInfoDemo from 'components/ProfileScreenComponents/ProfileInfoDemo';

import {useTheme} from 'assets/styles/ThemeProvider';

export default function SettingsScreen(props) {
    const {colors, styles} = useTheme(); // including styles here gives func comps access to styles

    const containerStyles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.base,
            height: "100%",
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
        },
    
        settingsLabel: {
            flexDirection: "row-reverse",
            marginTop: 15,
        },
    });

    return (
        <SafeAreaView style={containerStyles.container} forceInset={{bottom:'never', top: 'always'}}>
            <View style={containerStyles.settingsLabel}>
                <TouchableOpacity onPress={()=> props.navigation.navigate("Modals" , {screen:"Settings"})}>
                    <Feather name="menu" size={30} color={colors.disabledText} />
                </TouchableOpacity>
            </View>
            <ProfileInfoDemo/>
        </SafeAreaView>

    );
}

