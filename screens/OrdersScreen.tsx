import React, { useState, useRef, useContext, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Touchable
} from 'react-native';

import awsConfig from '../utils/awsConfig';
import Amplify from 'aws-amplify';
import { useQuery } from '@apollo/client';
import * as customQueries from '../graphql/customQueries';
import * as customMutations from '../graphql/customMutations';

import LoadingBubbleIcon from '../assets/icons/bubble-icon-1';
import BubbleIcon from '../assets/icons/bubble-icon-2';

import { setCurrentUser, getCurrentPage, setCurrentPage, setTokens } from '../utils/session';

Amplify.configure(awsConfig);

const OrdersScreen = (props) => {
  const { restaurant, currentUser } = props.route.params;
  console.log("restaurant", restaurant);

  // let { data: partiesData, loading: partiesLoading, error: partiesError } = useQuery(customQueries.LIST_PARTIES_BY_RESTAURANT, {
  //   variables: {
  //     restaurantId: restaurant?.id,
  //   },
  //   skip: !(restaurant?.id),
  //   pollInterval: 60 * 1000,
  // });
  // let { data: allPartiesData, loading: allPartiesLoading, error: allPartiesError } = useQuery(customQueries.LIST_IN_PROGRESS_PARTIES, {
  //   skip: currentUser.username !== 'all@gmail.com',
  //   pollInterval: 60 * 1000,
  // });
  // useEffect(() => {
  //   console.log("party data", partiesData);
  // }, [partiesData]);

  // let parties = [];
  // let hasUnviewed = false;

  // if (partiesData?.listPartiesByRestaurant || allPartiesData?.listInProgressParties) {
  //   let rawParties = partiesData?.listPartiesByRestaurant;
  //   if (allPartiesData?.listInProgressParties) {
  //     rawParties = allPartiesData.listInProgressParties;
  //   }
  //   parties = JSON.parse(JSON.stringify(rawParties));

  //   hasUnviewed = false;

  //   for (const party of parties) {
  //     if (!party.restaurantFinishedPreparingMinutes) {
  //       hasUnviewed = true;
  //       break;
  //     }
  //   }

  //   parties = parties.sort((a, b) => {
  //     if (a.restaurantFinishedPreparingMinutes && !b.restaurantFinishedPreparingMinutes) {
  //       return 1;
  //     } else if (!a.restaurantFinishedPreparingMinutes && b.restaurantFinishedPreparingMinutes) {
  //       return -1;
  //     } else {
  //       return 0;
  //     }
  //   });
  // }

 return (
  <View style={styles.loginDiv}>
    <View>
      <LoadingBubbleIcon />
      <Text>Loading...</Text>
    </View>
    {/* {partiesLoading ? (
      <View>
        loading...
      </View>
    ) : (
      <View>
        <LoadingBubbleIcon />
        <Text>Loading...</Text>
      </View>
    )} */}
    {/* ) : (
      <View>
        <View>
        </View>
        {parties.length > 0 ? (
          <View>
          </View>
        ) : (
          <View>
            <BubbleIcon />
            <Text>You have no active orders.</Text>
            <Text style={styles.boldText}>Orders placed through the Toppings app today {"\n"} will appear hear.</Text>
          </View>
        )}
      </View>
    )} */}
  </View>
 )
}

const styles = StyleSheet.create({
  loginDiv: {
    backgroundColor: '#ffffff',
    color: '#ffffff',
    width: '100%',
    height: '100%',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: 25,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default OrdersScreen;