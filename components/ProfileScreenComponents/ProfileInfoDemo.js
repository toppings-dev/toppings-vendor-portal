import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import {useTheme} from 'assets/styles/ThemeProvider';

import * as firebase from 'firebase';

const ProfileInfoDemo = (props) => {
    const [cash, setCash] = useState();

    useEffect(()=>{
        setupHighscoreListener();
    }, []);

    const {colors, styles} = useTheme(); // including styles here gives func comps access to styles

    const componentStyles = StyleSheet.create({
        container: {
            flex: 1,
        },
    });
    
    const addCash = (addCashAmount) => {
        // firebase
        //     .database()
        //     .ref('users/' + props.uid)
        //     .set({
        //         cash: cash + addCashAmount
        //     })
    }

    const setupHighscoreListener = () => {
        // firebase.database().ref('users/' + props.uid).on('value', (snapshot) => {
        //   let cash = snapshot.val().cash;
        //   console.log("New cash update: " + cash);
        //   setCash(cash);
        // });

      }

    return (
        <View style={componentStyles.container}>
            <Text style={[styles.h2, styles.bold]}>Name: {props.firstName}</Text>
            <Text style={[styles.h2, styles.bold]}>Phone Number:  {props.phoneNumber}</Text>
            <Text style={[styles.h2, styles.bold]}>Handle:  {props.handle}</Text>
            <Text style={[styles.h2, styles.bold]}>Cash:  {cash}</Text>
            <Button title={"Set Cash"} onPress={()=> addCash(10)}/>
            <Text style={[styles.h2, styles.bold]}>FB Status:  {JSON.stringify(firebase.auth().currentUser)}</Text>

        </View>
    );
};

// function mapStateToProps(state) {
//     return {
//         firstName: state.profileReducer.firstName,
//         lastName: state.profileReducer.lastName,
//         phoneNumber: state.profileReducer.phoneNumber,
//         handle: state.profileReducer.handle,
//         uid: state.profileReducer.firebaseAuthResult.user ? state.profileReducer.firebaseAuthResult.user.uid : null
//     }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         increaseCounter: (cons) => dispatch({ type: 'INCREASE_COUNTER', constant: cons }),
//         decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
//     }
// }


// export default connect(mapStateToProps, null)(connect(mapStateToProps, mapDispatchToProps)(ProfileInfoDemo))
export default ProfileInfoDemo;