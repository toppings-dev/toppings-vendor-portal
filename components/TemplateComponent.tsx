import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import { connect } from 'react-redux'
import {ThemeContext} from 'assets/styles/ThemeProvider';

class TemplateComponent extends React.Component {
	declare state: any;
	context: any = {};

    constructor(props) {
        super(props);
        this.state = {};
    };
    static contextType = ThemeContext;

    render() {

        const styles = StyleSheet.create({
            container: {
                // backgroundColor: this.context.colors.background,
                flex: 1,
            },
        });

        return (
            <View style={styles.container}>
                <Text style={[this.context.styles.h1, this.context.styles.bold]}>Template Component</Text>
                <Text style={[this.context.styles.h3]}>Do whatever you want to do with this.</Text>
            </View>
        );
    }
};

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

export default connect(mapStateToProps, null)(connect(mapStateToProps, mapDispatchToProps)(TemplateComponent))