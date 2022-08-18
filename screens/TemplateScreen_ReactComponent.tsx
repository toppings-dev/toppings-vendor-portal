import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'
import SafeAreaView from 'react-native-safe-area-view';

var ClientAPI = require('../clientAPI');
import {ThemeContext} from 'assets/styles/ThemeProvider';


// export default function OneContactScreen(props) {
class TemplateScreen extends React.Component {
	declare state: any;
	declare context: any;

    constructor(props) {
        super(props)
        this.state = {}
    }

    static contextType = ThemeContext;

    async componentWillMount() {}
    
    render() {
        const styles = StyleSheet.create({

            container: {
                backgroundColor: this.context.colors.base,
                flexDirection: 'column',
                justifyContent: 'space-between',
        
            },
        });
        
        return (
            <SafeAreaView style={styles.container} forceInset={{bottom:'never', top:'always'}}>                
            </SafeAreaView>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.testReducer.counter,
        counterMultiplied: state.testReducer.counterMultiplied,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

export default connect(mapStateToProps, null)(connect(mapStateToProps, mapDispatchToProps)(TemplateScreen))