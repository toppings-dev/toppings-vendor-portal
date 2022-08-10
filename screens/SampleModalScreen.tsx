import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import { connect } from 'react-redux'
import {ThemeContext} from 'assets/styles/ThemeProvider';
import SampleModalComponent from 'components/SampleModalScreenComponents/SampleModalComponent'

class TemplateScreen extends React.Component {
	public state: any;
	public context: any;

    constructor(props) {
        super(props)
        this.state = {}
    }

    static contextType = ThemeContext;

    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: this.context.colors.surface,
                flexDirection: 'column',
                justifyContent: 'space-between',
                paddingTop: 25,
            },
        });

        return (
            <View style={styles.container}>
                <SampleModalComponent/>
            </View>

        );
    }
}

function mapStateToProps(state) {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}


export default connect(mapStateToProps, null)(connect(mapStateToProps, mapDispatchToProps)(TemplateScreen))