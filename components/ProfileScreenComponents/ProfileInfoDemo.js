import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import {ThemeContext} from 'assets/styles/ThemeProvider';
import { connect } from 'react-redux'

import * as firebase from 'firebase';

class ProfileInfoDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cash: null
        };

        this.setupHighscoreListener();
    }

    static contextType = ThemeContext;

    addCash(addCashAmount) {
        firebase
            .database()
            .ref('users/' + this.props.uid)
            .set({
                cash: this.state.cash + addCashAmount
            })
    }

    setupHighscoreListener() {
        firebase.database().ref('users/' + this.props.uid).on('value', (snapshot) => {
          let cash = snapshot.val().cash;
          console.log("New cash update: " + cash);
          this.setState({cash: cash})
        });

      }

    render() {
        return (
            <View style={styles.container}>
                <Text style={[this.context.styles.h2, this.context.styles.bold]}>Name: {this.props.firstName}</Text>
                <Text style={[this.context.styles.h2, this.context.styles.bold]}>Phone Number:  {this.props.phoneNumber}</Text>
                <Text style={[this.context.styles.h2, this.context.styles.bold]}>Handle:  {this.props.handle}</Text>
                <Text style={[this.context.styles.h2, this.context.styles.bold]}>Cash:  {this.state.cash}</Text>
                <Button title={"Set Cash"} onPress={()=> this.addCash(10)}/>
                <Text style={[this.context.styles.h2, this.context.styles.bold]}>FB Status:  {JSON.stringify(firebase.auth().currentUser)}</Text>
 
            </View>
        );
    }
};

function mapStateToProps(state) {
    return {
        firstName: state.profileReducer.firstName,
        lastName: state.profileReducer.lastName,
        phoneNumber: state.profileReducer.phoneNumber,
        handle: state.profileReducer.handle,
        uid: state.profileReducer.firebaseAuthResult.user ? state.profileReducer.firebaseAuthResult.user.uid : null
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
    },
});

export default connect(mapStateToProps, null)(connect(mapStateToProps, mapDispatchToProps)(ProfileInfoDemo))