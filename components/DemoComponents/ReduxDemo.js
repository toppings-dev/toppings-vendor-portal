import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import { connect } from 'react-redux'
import {ThemeContext} from 'assets/styles/ThemeProvider';

class ReduxDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };
    static contextType = ThemeContext;

    render() {

        const styles = StyleSheet.create({
            container: {
                flex: 1,
            },
        });

        return (
            <View style={styles.container}>
                <Text style={[this.context.styles.h1, this.context.styles.bold]}>Redux Demo</Text>
                <Text style={[this.context.styles.h3]}>Demonstrates Redux store usage + design system usage.</Text>
                <Text style={[this.context.styles.h2, this.context.styles.bold]}>Test Counter to Show Redux:  {this.props.counter}</Text>
                <Text style={this.context.styles.h2}>Counter Times 10: {this.props.counterMultiplied}</Text>
                <Button title="Decrease Counter by 1" onPress= {()=> this.props.decreaseCounter()}/>
                <Button title="Increase Counter by 10" onPress= {()=> this.props.increaseCounter(10)}/>
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

export default connect(mapStateToProps, null)(connect(mapStateToProps, mapDispatchToProps)(ReduxDemo))