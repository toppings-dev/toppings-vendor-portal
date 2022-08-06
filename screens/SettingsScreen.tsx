import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    Switch
} from 'react-native';

import { connect } from 'react-redux'
import {ThemeContext} from 'assets/styles/ThemeProvider';

import * as Application from 'expo-application';
import * as Updates from 'expo-updates';
var UserAPI = require('clientAPI/users');

import { Ionicons } from '@expo/vector-icons';

import SafeAreaView from 'react-native-safe-area-view';

// var Global = require('../assets/styles/global');

const settingsOptions = [{
        display: "Change Handle",
        navigation: "Handle"
    },

    {
        display: 'Update Name',
        navigation: "Name"
    },

    {
        display: 'Update Photo',
        navigation: "ProfilePhoto"
    },
]

class SettingsScreen extends React.Component {
	public state: any;
	public props: any;
	public context: any;

    constructor(props) {
        super(props)
        this.state = {}
    }

    static contextType = ThemeContext;

    _handleNavigateToScreen(nav) {
        this.props.navigation.navigate("Setup", { screen: nav, params: {source: "Settings"} })
    }

    async _handleSignOut(){
        let r  = await UserAPI.signOut();
        await Updates.reloadAsync()
    }

    async _handleToggleAppearance(){
        let nextAppearance = this.context.isDark ? "light" : "dark"
        this.context.setScheme(nextAppearance)
    }

    render() {
        const styles = StyleSheet.create({

            container: {
                flex: 1,
                backgroundColor: this.context.colors.base,
                flexDirection: 'column',
                justifyContent: 'space-between',
                paddingHorizontal: 20
            },
        
            optionsContainer: {
                backgroundColor: this.context.colors.surface,
                marginTop: 15,
                borderRadius: 10
            },
        
            option: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 15,
                paddingVertical: 10
            },
        });

        const Option = (data) => {
            return (
                <TouchableOpacity style={styles.option} onPressIn={()=> this._handleNavigateToScreen(data.item.navigation)} delayPressIn={10}>
                    <Text style={[this.context.styles.h2]}>{data.item.display}</Text>
                    <Ionicons name="ios-arrow-forward" size={18} color={this.context.colors.disabledText} />
                </TouchableOpacity>
            )
        }


        return (
            <SafeAreaView style={styles.container} forceInset={{bottom:'always', top: 'never'}}>
                
                <View style={styles.optionsContainer}>
                    <FlatList
                        data={settingsOptions}
                        renderItem={Option}
                        ItemSeparatorComponent={()=> <View style={{marginLeft: 15,borderTopWidth: .7, borderTopColor: 'rgba(0,0,0,.2)'}}/>}
                        scrollEnabled={false}
                        keyExtractor={(item) => item.navigation}
                    />

                    <View style={{marginLeft: 15,borderTopWidth: .7, borderTopColor: 'rgba(0,0,0,.2)'}}/>

                    <TouchableOpacity style={styles.option} onPressIn={()=> this._handleToggleAppearance()} delayPressIn={10}>
                        <Text style={[this.context.styles.h2]}>Dark Mode</Text>
                        <Switch
                            onValueChange={() => this._handleToggleAppearance()}
                            trackColor={{ false: this.context.colors.overlayDark, true: this.context.colors.overlayDark }}
                            thumbColor={this.props.darkMode ? this.context.colors.overlay : "#f4f3f4"}
                            value={this.context.isDark}
                        />
                    </TouchableOpacity>
                </View>                  

                <View>
                    <Text 
                        style={this.context.styles.h3}
                        onPress={()=> {this._handleSignOut()}}
                    >
                        Sign Out
                    </Text>

                    <Text style={this.context.styles.h3}>Phone Number: {this.props.phoneNumber}</Text>
                    <Text style={this.context.styles.h3}>App Version: {Application.nativeApplicationVersion}</Text>
                    <Text style={this.context.styles.h3}>Build Version: {Application.nativeBuildVersion}</Text>
                </View>
            </SafeAreaView>

        );
    }
}

function mapStateToProps(state) {
    return {
        phoneNumber: state.profileReducer.phoneNumber,
        cognitoUserID: state.profileReducer.cognitoUserID,
        darkMode: state.appStateReducer.darkMode,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleAppearance: () => dispatch({ type: 'TOGGLE_APPEARANCE'}),
    }
}


export default connect(mapStateToProps, null)(connect(mapStateToProps, mapDispatchToProps)(SettingsScreen))