import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {ThemeContext} from 'assets/styles/ThemeProvider';
import { connect } from 'react-redux'
import TemplateComponent from 'components/TemplateComponent'

class SampleModalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static contextType = ThemeContext;

    render() {
        return (
            <View style={styles.container}>
                <Text style={this.context.styles.h1}>Modal Screen!</Text>
                <TemplateComponent/>
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
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default connect(mapStateToProps, null)(connect(mapStateToProps, mapDispatchToProps)(SampleModalComponent))