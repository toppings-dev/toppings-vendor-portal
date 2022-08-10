import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import {useTheme} from 'assets/styles/ThemeProvider';

import PrimaryButton from 'components/elements/PrimaryButton'

const ModalDemo = (props) => {
    const {colors, styles} = useTheme(); // including styles here gives func comps access to styles

    const _handleNextStep = () => {
        props.navigation.navigate("Modals" , {screen:"SampleModal"})
    }

    const componentStyles = StyleSheet.create({
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
        <View style={componentStyles.container}>
            <Text style={[styles.h1, styles.bold, componentStyles.text]}>Modal Demo</Text>
            <Text style={[styles.h2, componentStyles.text]}>You can navigate to modals from anywhere within the app. Try it: </Text>
            <PrimaryButton
                text={"Open Modals"}
                onPress={()=> _handleNextStep()}
                fullWidth={true}
                rounded={true}
                noMarginVertical={false}
            />
        </View>
    );
};

export default ModalDemo;