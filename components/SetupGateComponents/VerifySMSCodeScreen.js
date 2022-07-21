import React, { Component, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    Platform
} from 'react-native';

// var Global = require('assets/styles/global');
import { connect } from 'react-redux'

import UserAPI from 'clientAPI/users.js'

import PrimaryButton from 'components/elements/PrimaryButton'

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import {useTheme} from 'assets/styles/ThemeProvider';

const CELL_COUNT = 6;

const VerifySMSCodeScreen = (props) => {
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [failure, setFailure] = useState(false);
    const [errorText, setErrorText] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [iprops, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const {colors, styles} = useTheme(); // including styles here gives func comps access to styles

    const _handleNextStep = async (value) => {
        setLoading(true);
        let r = await UserAPI.verifyOTP(value);
        console.log(r)
        if (r.success){
            props.navigation.navigate("Handle")
            setLoading(false);
            return
        }

        if (!r.success){
            setLoading(false);
            setFailure(true);
            setErrorText(JSON.stringify(r.data.message))
        }
    }

    const componentStyles = StyleSheet.create({
        container: {
            position: 'absolute',
            backgroundColor: colors.base,
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            paddingTop: 45,
            paddingBottom: "20%",
            width: "100%",
            height: "100%",
            paddingHorizontal: 20,
            paddingTop: "20%",
        },
    
        root: {
            flex: 1,
            padding: 20,
        },
        codeFieldRoot: {
            marginVertical: 15,
            justifyContent: 'space-between',
            width: "100%"
        },
        cell: {
            width: 50,
            height: 50,
            lineHeight: 38,
            fontSize: 24,
            borderWidth: 2,
            borderColor: "rgba(0,0,0,0)",
            backgroundColor: "rgba(0,0,0,.07)",
            textAlign: 'center',
            marginHorizontal: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 5,
            borderRadius: 5,
            ...styles.h1
        },
        focusCell: {
            borderColor: colors.primary,
        },
    });

    return (
        <View style={componentStyles.container}>
            <View style={{width: "100%"}}>
                <View style={{height:25}}/>
                <Text style={[styles.h2, styles.bold]}>What's the four digit code?</Text>
                <CodeField
                    ref={ref}
                    {...props}
                    caretHidden={false}
                    onEndEditing={()=> _handleNextStep(value)}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={componentStyles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    autoFocus={true}
                    renderCell={({index, symbol, isFocused}) => (
                        <Text
                            key={index}
                            style={[componentStyles.cell, isFocused && componentStyles.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    )}
                />
                <Text style={styles.h3}>It may take a sec for the code to go through!</Text>
                {failure && <Text style={[styles.h3, {color: 'red'}]}>Error: {errorText}</Text>}
            </View>

            <KeyboardAvoidingView 
                    behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                    style={{width: "100%"}}
            >
                <PrimaryButton 
                    disabled={!(value.length == CELL_COUNT)} 
                    text={"Verify 🔒"} 
                    onPress={()=> _handleNextStep(value)}
                    fullWidth={true}
                    rounded={true}
                    loading={loading}
                />
            </KeyboardAvoidingView>
        </View>
    )


}

function mapStateToProps(state) {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increaseCounter: (cons) => dispatch({ type: 'INCREASE_COUNTER', constant: cons }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
    }
}

export default connect(mapStateToProps, null)(connect(mapStateToProps, mapDispatchToProps)(VerifySMSCodeScreen))