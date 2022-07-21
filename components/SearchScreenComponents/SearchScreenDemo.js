import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import { connect } from 'react-redux'
import {ThemeContext} from 'assets/styles/ThemeProvider';


class SearchScreenDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static contextType = ThemeContext;

    render() {
        return (
            <View style={styles.container}>
                <Text style={[this.context.styles.h1, this.context.styles.bold, styles.text]}>Search Screen</Text>
                <Text style={[this.context.styles.h2, styles.text]}>This screen is left blank. Feel free to use this for quick prototyping/testing.</Text>
            </View>
        );
    }
};

function mapStateToProps(state) {
    return {
        counter: state.testReducer.counter,
        counterMultiplied: state.testReducer.counterMultiplied
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increaseCounter: (cons) => dispatch({ type: 'INCREASE_COUNTER', constant: cons }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        marginVertical: 5,
    },
});

export default connect(mapStateToProps, null)(connect(mapStateToProps, mapDispatchToProps)(SearchScreenDemo))