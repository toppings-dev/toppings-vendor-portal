import React from 'react';
import {
    StyleSheet,
} from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';

import ModalDemo from '../components/DemoComponents/ModalDemo';
import ReduxDemo from '../components/DemoComponents/ReduxDemo';

import {useTheme} from 'assets/styles/ThemeProvider';

export default function HomeScreen(props) {
    const {colors} = useTheme();

    const styles = StyleSheet.create({
        container: {
            backgroundColor: colors.base,
            flex: 1,
            padding: 20,
        },
    });

    return (
        <SafeAreaView style={styles.container} forceInset={{bottom:'never', top:'always'}}>
            <ModalDemo {...props} />
            <ReduxDemo/>
        </SafeAreaView>
    );
}