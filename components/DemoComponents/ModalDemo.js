import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { connect } from 'react-redux'

import {ThemeContext} from 'assets/styles/ThemeProvider';

import PrimaryButton from 'components/elements/PrimaryButton.js'

class ModalDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static contextType = ThemeContext;

    _handleNextStep() {
        this.props.navigation.navigate("Modals" , {screen:"SampleModal"})
    }

    render() {
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

        return (
            <View style={styles.container}>
                <Text style={[this.context.styles.h1, this.context.styles.bold, styles.text]}>Modal Demo</Text>
                <Text style={[this.context.styles.h2, styles.text]}>You can navigate to modals from anywhere within the app. Try it: </Text>
                <PrimaryButton
                    loading={this.state.loading}
                    text={"Open Modals"}
                    onPress={()=> this._handleNextStep()}
                    fullWidth={true}
                    rounded={true}
                    noMarginVertical={false}
                />
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

export default connect(mapStateToProps, null)(connect(mapStateToProps, mapDispatchToProps)(ModalDemo))