import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import {useTheme} from 'assets/styles/ThemeProvider';

const ReduxDemo = (props) => {
    const [counter, setCounter] = useState(0);
    const [counterMultiplied, setCounterMultiplied] = useState(0);
    const {colors, styles} = useTheme(); // including styles here gives func comps access to styles

    const containerStyles = StyleSheet.create({
        container: {
            flex: 1,
        },
    });
    const decreaseCounter = (amount=1) => {
        setCounterMultiplied(10*(counter-amount));
        setCounter(counter-amount);
    }
    const increaseCounter = (amount=1) => {
        setCounterMultiplied(10*(counter+amount));
        setCounter(counter+amount);
    }
    return (
        <View style={containerStyles.container}>
            <Text style={[styles.h1, styles.bold]}>Redux Demo</Text>
            <Text style={[styles.h3]}>Demonstrates Redux store usage + design system usage.</Text>
            <Text style={[styles.h2, styles.bold]}>Test Counter to Show Redux:  {counter}</Text>
            <Text style={styles.h2}>Counter Times 10: {counterMultiplied}</Text>
            <Button title="Decrease Counter by 1" onPress= {()=> decreaseCounter()}/>
            <Button title="Increase Counter by 10" onPress= {()=> increaseCounter(10)}/>
        </View>
    );
};

export default ReduxDemo;