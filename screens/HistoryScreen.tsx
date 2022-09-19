import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import { useQuery } from '@apollo/client';
import * as customQueries from '../graphql/customQueries';

import awsConfig from '../utils/awsConfig';
import Amplify from 'aws-amplify';

import PastPartyContainer from '../components/HistoryScreenComponents/PastPartyContainer';
import LoadingBubbleIcon from '../assets/icons/bubble-icon-1';
import BubbleIcon from '../assets/icons/bubble-icon-2';
import WhiteGradient from '../assets/images/toppings-print-white-gradient.png';

import dayjs from 'dayjs';

import { setCurrentUser, getCurrentPage, setCurrentPage, setTokens } from '../utils/session';

dayjs().format();

Amplify.configure(awsConfig);

const HistoryScreen = (props) => {
  const { currentUser } = props.route.params;

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedRun, setSelectedRun] = useState(null);

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

    // parties = parties.sort((a, b) => {
    //   if (a.createdAt >=  b.createdAt) {
    //     return -1;
    //   } else {
    //     return 1;
    //   };
    // });
  }

  console.log("parties", parties);

  const itemNameWithOptions = item => {
    let ret = `${item.menuItem.name}`;
    if (item.foodOptions?.length > 0) {
      let allOptions = [];
      item.foodOptions.map(foodOption => {
        foodOption.options.map(option => allOptions.push(option.name));
      });
      ret += allOptions.sort().join(',');
    }
    return ret;
  };

  const assembleSelectedRun = party => {
    let allOrderItems = [];
    let totalTax = 0;
    let totalTip = 0;
    let totalTotal = 0;
    party.orders.map(order => {
      order.items.map(item => {
        let itemIndex = allOrderItems.findIndex(orderItem => {
          return itemNameWithOptions(orderItem) === itemNameWithOptions(item)
        });
        if (itemIndex === -1) {
          allOrderItems.push(JSON.parse(JSON.stringify(item)));
        } else {
          allOrderItems[itemIndex].quantity += item.quantity;
        }
      });
      totalTax += order.tax;
      totalTip += order.tip;
      totalTotal += order.totalPrice;
    });
    setSelectedRun({
      ...party,
      orderItems: allOrderItems,
      totalTax,
      totalTip,
      totalTotal,
    });
  };

  const handleButton = () => {
    props.navigation.navigate("Orders");
  }

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
            <View style={styles.ordersSubcontainer}>
              <View style={styles.nameSubcontainer}>
                <TouchableOpacity activeOpacity={0.5} onPress={handleButton}>
                  <Text>View Current Orders</Text>
                </TouchableOpacity>
                <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                  {parties.map((party) => 
                    <PastPartyContainer 
                      key={party.id}
                      party={party}
                      selectedOrder={selectedOrder}
                      setSelectedOrder={setSelectedOrder}
                      selectedRun={selectedRun}
                      setSelectedRun={setSelectedRun}
                      assembleSelectedRun={assembleSelectedRun}
                      isAll={currentUser.username === 'all@gmail.com'}
                    />
                  )}
                </ScrollView>
              </View>
              {(!selectedOrder && !selectedRun) && (
                <View style={styles.orderInfoSubcontainer}>
                  <Text style={styles.infoText}>
                    Click on a group to view all your orders in the group{"\n"}
                    OR{"\n"}
                    Click on an order in a group to view that order
                    </Text>
                </View>
              )}
              {selectedRun && (
                <View style={{ width: '70%', padding: 25 }}>
                  <View style={styles.spaceBetween}>
                    <Text style={styles.orderName}>
                      {selectedRun.deliverer.name}'s Group {currentUser.username === 'all@gmail.com' ? `at ${selectedRun.restaurant.name}` : ''}
                    </Text>
                    <Text style={styles.date}>
                      {dayjs(selectedRun.orders[0].orderSentTime).format('MM/DD/YY hh:mmA')}
                    </Text>
                  </View>

                  <View style={{ borderBottomColor: 'black', borderBottomWidth: 2, marginVertical: 15 }} />

                  {selectedRun.orderItems.map(item => (
                    <View key={item.id} style={{ ...styles.spaceBetween, paddingBottom: 8 }}>
                      <View>
                        <Text style={styles.itemName}>
                          {item.quantity > 1 && `${item.quantity}x `}
                          {item.menuItem.name}
                        </Text>
                        {item.foodOptions.map(foodOption => (
                          foodOption.options.map((option, index) => <Text key={index} style={styles.itemTopping}>{option.name}</Text>)
                        ))}
                      </View>
                      <Text style={styles.itemPrice}>
                        {(item.quantity * item.price / 100).toFixed(2)}
                      </Text>
                    </View>
                  ))}

                  <View style={{ ...styles.spaceBetween, paddingBottom: 8 }}>
                    <Text style={{ ...styles.itemProperties, color: '#5F5E5E' }}>Tax</Text>
                    <Text style={{ ...styles.itemPrice, color: '#5F5E5E' }}>{(selectedRun.totalTax / 100).toFixed(2)}</Text>
                  </View>
                  <View style={{ ...styles.spaceBetween, paddingBottom: 8 }}>
                    <Text style={{ ...styles.itemProperties, color: '#5F5E5E' }}>Tip</Text>
                    <Text style={{ ...styles.itemPrice, color: '#5F5E5E' }}>{(selectedRun.totalTip / 100).toFixed(2)}</Text>
                  </View>
                  <View style={styles.spaceBetween}>
                    <Text style={styles.itemProperties}>Total</Text>
                    <Text style={styles.itemPrice}>${(selectedRun.totalTotal / 100).toFixed(2)}</Text>
                  </View>

                  
                  {selectedRun.restaurantFinishedPreparingMinutes && (
                    <View>
                      <View style={{ borderBottomColor: 'black', borderBottomWidth: 2, marginVertical: 15 }} />
                      <Text style={styles.itemProperties}>Order Time (min)</Text>

                      <Text style={styles.selectedText}>You selected {selectedRun.restaurantFinishedPreparingMinutes} minutes.</Text>
                    </View>
                  )}
                </View>
              )}
              {selectedOrder && (
                <View style={{ width: '70%', padding: 25 }}>
                  <View style={styles.spaceBetween}>
                    <Text style={styles.orderName}>
                    {selectedOrder.customer.name}  {currentUser.username === 'all@gmail.com' ? `at ${selectedOrder.restaurant.name}` : ''}
                    </Text>
                    <Text style={styles.date}>
                    {dayjs(selectedOrder.orderSentTime).format('MM/DD/YY hh:mmA')}
                    </Text>
                  </View>

                  <View style={{ borderBottomColor: 'black', borderBottomWidth: 2, marginVertical: 15 }} />

                  {selectedOrder.items.map(item => (
                    <View key={item.id} style={{ ...styles.spaceBetween, paddingBottom: 8 }}>
                      <View>
                        <Text style={styles.itemName}>
                          {item.quantity > 1 && `${item.quantity}x `}
                          {item.menuItem.name}
                        </Text>
                        {item.foodOptions.map(foodOption => (
                          foodOption.options.map((option, index) => <Text key={index} style={styles.itemTopping}>{option.name}</Text>)
                        ))}
                      </View>
                      <Text style={styles.itemPrice}>
                        {(item.quantity * item.price / 100).toFixed(2)}
                      </Text>
                    </View>
                  ))}

                  <View style={{ ...styles.spaceBetween, paddingBottom: 8 }}>
                    <Text style={{ ...styles.itemProperties, color: '#5F5E5E' }}>Tax</Text>
                    <Text style={{ ...styles.itemPrice, color: '#5F5E5E' }}>{(selectedOrder.tax / 100).toFixed(2)}</Text>
                  </View>
                  <View style={{ ...styles.spaceBetween, paddingBottom: 8 }}>
                    <Text style={{ ...styles.itemProperties, color: '#5F5E5E' }}>Tip</Text>
                    <Text style={{ ...styles.itemPrice, color: '#5F5E5E' }}>{(selectedOrder.tip / 100).toFixed(2)}</Text>
                  </View>
                  <View style={styles.spaceBetween}>
                    <Text style={styles.itemProperties}>Total</Text>
                    <Text style={styles.itemPrice}>${(selectedOrder.totalPrice / 100).toFixed(2)}</Text>
                  </View>
                </View>
              )}
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
  ordersSubcontainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  nameSubcontainer: {
    width: '30%',
    //alignItems: 'center',
    borderRightWidth: 2,
    padding: 25,
  },
  orderInfoSubcontainer: {
    width: '70%',
    marginTop: 36,
    alignItems: 'center',
  },
  infoText: {
    fontFamily: 'raleway-extrabold',
    fontSize: 22,
    textAlign: 'center',
  },
  spaceBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderName: {
    fontFamily: 'raleway-extrabold',
    fontSize: 26,
    color: '#000000'
  },
  date: {
    fontFamily: 'cabin-medium',
    fontSize: 22,
    color: '#5F5E5E',
  },
  itemName: {
    fontFamily: 'cabin-regular',
    fontSize: 20,
    marginBottom: -5,
  },
  itemTopping: {
    fontFamily: 'cabin-regular',
    fontSize: 16,
  },
  itemPrice: {
    fontFamily: 'source-code-pro-regular',
    fontSize: 20,
  },
  itemProperties: {
    fontFamily: 'cabin-regular',
    fontSize: 20,
  },
  selectedText: {
    fontFamily: 'cabin-semibold',
    fontSize: 23,
    color: '#0082FF',
    alignSelf: 'center',
    marginTop: 20,
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#0082FF',
    marginTop: 10,
    marginRight: 5,
    marginBottom: 10,
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#0082FF',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
  },
  middle: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#0082FF',
    margin: 10,
  },
  timeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderTimeText: {
    fontSize: 18,
    fontFamily: 'cabin-bold',
    color: '#FFFFFF',
  },
});

export default HistoryScreen;