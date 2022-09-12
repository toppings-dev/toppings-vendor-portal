import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { useQuery } from '@apollo/client';
import * as customQueries from '../graphql/customQueries';

import awsConfig from '../utils/awsConfig';
import Amplify from 'aws-amplify';

import LoadingBubbleIcon from '../assets/icons/bubble-icon-1';
import BubbleIcon from '../assets/icons/bubble-icon-2';
import WhiteGradient from '../assets/images/toppings-print-white-gradient.png';

import dayjs from 'dayjs';

import { setCurrentUser, getCurrentPage, setCurrentPage, setTokens } from '../utils/session';

dayjs().format();

Amplify.configure(awsConfig);

const HistoryScreen = (props) => {
  const { currentUser } = props.route.params;

  let { data, error, loading } = useQuery(customQueries.GET_RESTAURANT_BY_OWNER, {
    skip: currentUser.username === 'all@gmail.com',
  });
  if (error) {
    console.log("get restaurant error", error);
  }

  let { data: pastPartiesData, loading: pastPartiesLoading, error: pastPartiesError } = useQuery(customQueries.LIST_PAST_PARTIES_BY_RESTAURANT, { variables: {
    restaurantId: data?.getRestaurantByOwner.id,
  },
    skip: !(data?.getRestaurantByOwner.id),
    pollInterval: 60 * 1000,
  });

  let parties = [];

  if (pastPartiesData?.listPastPartiesByRestaurant) {
    let rawParties = pastPartiesData?.listPastPartiesByRestaurant;
    parties = JSON.parse(JSON.stringify(rawParties));

    parties = parties.sort((a, b) => {
      if (a.updatedAt >=  b.updatedAt) {
        return -1;
      } else {
        return 1;
      };
    });
  }

  console.log("parties", parties)

 return (
    <View>
     <ImageBackground source={WhiteGradient} resizeMode="cover" style={styles.background}>
      {(loading || pastPartiesLoading) ? (
        <View>
          <LoadingBubbleIcon />
          <Text>Loading...</Text>
        </View>
      ) : (
        <View>
          {(parties.length > 0) ? (
            <View>
              <Text>party</Text>
            </View>
          ) : (
            <View style={styles.emptyContainer}>
              <BubbleIcon style={{ marginBottom: 5 }}/>
              <Text style={{ fontSize: 18, color: '#898989', fontWeight: 'bold', marginBottom: 5 }}>You have had no past orders this week.</Text>
              <Text style={{ fontSize: 14, color: '#898989', fontWeight: 'bold', textAlign: 'center', }}>Orders placed up to a week {"\n"} ago will appear hear.</Text>
            </View>
          )}
        </View>
      )}
     </ImageBackground>
    </View>
 )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%',
  },
});

export default HistoryScreen;