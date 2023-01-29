import React, { useState, useRef, useContext, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Touchable
} from 'react-native';
import dayjs from 'dayjs';
import { Audio } from 'expo-av';

import awsConfig from '../utils/awsConfig';
import useInterval from '../utils/useInterval';
import Amplify from 'aws-amplify';
import { useQuery, useMutation } from '@apollo/client';
import * as customQueries from '../graphql/customQueries';
import * as customMutations from '../graphql/customMutations';

import LoadingBubbleIcon from '../assets/icons/bubble-icon-1';
import BubbleIcon from '../assets/icons/bubble-icon-2';
import ding from '../assets/audio/ding.mp3';
import PartyContainer from "../components/OrdersScreenComponents/PartyContainer";
import WhiteGradient from "../assets/images/toppings-print-white-gradient.png";
import { colors, font } from "./../styles";
import { useTheme } from "assets/styles/ThemeProvider";
import GroupCard from "../components/OrdersScreenComponents/LeftMenu/GroupCard";
import GroupOrderDetails from "../components/OrdersScreenComponents/GroupOrderDetails";

Amplify.configure(awsConfig);
dayjs().format();

const OrdersScreen = (props) => {
  const { colors } = useTheme();
  const { currentUser } = props.route.params;

  const [restaurant, setRestaurant] = useState<any>();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedRun, setSelectedRun] = useState(null);
  const [soundState, setSoundState] = useState<Audio.Sound>();

  const orderTimes = [10, 15, 20, 25, 30, 45, 60, 75];
  const dingTimer = 5000;

  const playSound = async () => {
    // const { sound } = await Audio.Sound.createAsync(ding, { shouldPlay: true });
    const { sound } = await Audio.Sound.createAsync(ding, { shouldPlay: true });
    setSoundState(sound);
    await sound.playAsync();
    //soundState.unloadAsync();
  };

  const updateRestaurant = (data) => {
    setRestaurant(data.getRestaurantByOwner);
  };

  let { data, error, loading } = useQuery(
    customQueries.GET_RESTAURANT_BY_OWNER,
    {
      skip: currentUser.username === "all@gmail.com",
      onCompleted: updateRestaurant,
    }
  );
  if (error) {
    console.log("get restaurant error", error);
  }

  let {
    data: partiesData,
    loading: partiesLoading,
    error: partiesError,
  } = useQuery(customQueries.LIST_PARTIES_BY_RESTAURANT, {
    variables: {
      restaurantId: data?.getRestaurantByOwner.id,
    },
    skip: !data?.getRestaurantByOwner.id,
    pollInterval: 60 * 1000,
  });

  let {
    data: allPartiesData,
    loading: allPartiesLoading,
    error: allPartiesError,
  } = useQuery(customQueries.LIST_IN_PROGRESS_PARTIES, {
    skip: currentUser.username !== "all@gmail.com",
    pollInterval: 60 * 1000,
  });
  console.log("all parties error: ", allPartiesError);
  let parties = [];
  let hasUnviewed = false;

  if (
    partiesData?.listPartiesByRestaurant ||
    allPartiesData?.listInProgressParties
  ) {
    let rawParties = partiesData?.listPartiesByRestaurant;
    if (allPartiesData?.listInProgressParties) {
      rawParties = allPartiesData.listInProgressParties;
    }
    parties = JSON.parse(JSON.stringify(rawParties));

    hasUnviewed = false;

    for (const party of parties) {
      if (!party.restaurantFinishedPreparingMinutes) {
        hasUnviewed = true;
        break;
      }
    }

    parties = parties.sort((a, b) => {
      if (
        a.restaurantFinishedPreparingMinutes &&
        !b.restaurantFinishedPreparingMinutes
      ) {
        return 1;
      } else if (
        !a.restaurantFinishedPreparingMinutes &&
        b.restaurantFinishedPreparingMinutes
      ) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  if (selectedRun === null) setSelectedRun(parties[0]);

  // useEffect(() => {
  //   if (selectedRun!==undefined) {
  //     console.log(selectedRun.id)
  //   }
  // }, [selectedRun]);

  const itemNameWithOptions = (item) => {
    let ret = `${item.menuItem.name}`;
    if (item.foodOptions?.length > 0) {
      let allOptions = [];
      item.foodOptions.map((foodOption) => {
        foodOption.options.map((option) => allOptions.push(option.name));
      });
      ret += allOptions.sort().join(",");
    }
    return ret;
  };

  const assembleSelectedRun = (party) => {
    // let allOrderItems = [];
    // let totalTax = 0;
    // let totalTip = 0;
    // let totalTotal = 0;
    // party.orders.map(order => {
    //   order.items.map(item => {
    //     let itemIndex = allOrderItems.findIndex(orderItem => {
    //       return itemNameWithOptions(orderItem) === itemNameWithOptions(item)
    //     });
    //     if (itemIndex === -1) {
    //       allOrderItems.push(JSON.parse(JSON.stringify(item)));
    //     } else {
    //       allOrderItems[itemIndex].quantity += item.quantity;
    //     }
    //   });
    //   totalTax += order.tax;
    //   totalTip += order.tip;
    //   totalTotal += order.totalPrice;
    // });
    setSelectedRun(
      party

      //   {
      //   ...party,
      //   orderItems: allOrderItems,
      //   totalTax,
      //   totalTip,
      //   totalTotal,
      // }
    );
  };

  let [updatePartyETA, { error: updatePartyError }] = useMutation(
    customMutations.UPDATE_PARTY_ETA,
    {
      onCompleted(data) {
        let newParty = JSON.parse(JSON.stringify(data.updatePartyETA));
        if (selectedRun?.id === newParty.id) {
          setSelectedRun({
            ...selectedRun,
            restaurantFinishedPreparingMinutes: 15,
          });
        }
      },
    }
  );

  const handleUpdatePartyETA = () => {
    updatePartyETA({
      variables: {
        partyId: selectedRun.id,
        partyFinishedPreparingMinutes: 15,
      },
    });
  };

  const handleButton = () => {
    props.navigation.navigate("History");
  };

  // useInterval(
  //   () => {
  //     playSound();
  //   },
  //   hasUnviewed ? dingTimer : null
  // );

  // useEffect(() => {
  //   return soundState
  //     ? () => {
  //         soundState.unloadAsync();
  //       }
  //     : undefined;
  // }, [soundState]);

  console.log("selectrun:", selectedRun);
  return (
    <View>
      {/* <ImageBackground source={WhiteGradient} resizeMode="cover" style={styles.background}> */}
      {loading || partiesLoading ? (
        <View>
          <LoadingBubbleIcon />
          <Text>Loading...</Text>
        </View>
      ) : (
        <View style={{ flexDirection: "row", height: "100%" }}>
          <View style={styles.leftMenu}>
            <View style={styles.leftMenuTextWrapper}>
              <Text style={font.h1}>{props.route.name}</Text>
              <Text style={[font.p, { color: colors.secondaryText }]}>
                Manage open order and view your past orders.{" "}
              </Text>
            </View>

            <ScrollView
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              {parties.map((party, index) => (
                <GroupCard
                  key={party.id}
                  index={index}
                  party={party}
                  // selectedOrder={selectedOrder}
                  // setSelectedOrder={setSelectedOrder}
                  selectedRun={selectedRun}
                  setSelectedRun={setSelectedRun}
                  assembleSelectedRun={assembleSelectedRun}
                  isAll={currentUser.username === "all@gmail.com"}
                />
              ))}
            </ScrollView>
          </View>
          <View style={{ flex: 3, backgroundColor: "#FFF" }}>
            {selectedRun !== null && selectedRun !== undefined && (
              <GroupOrderDetails
                selectedRun={selectedRun}
                handleUpdatePartyEta={handleUpdatePartyETA}
              />
            )}
          </View>
        </View>
        // <View>
        //   {(parties.length > 0) ? (
        //     <View style={styles.ordersSubcontainer}>
        //       <View style={styles.nameSubcontainer}>
        //         {/* <TouchableOpacity activeOpacity={0.5} onPress={handleButton}>
        //           <Text>View Past Orders</Text>
        //         </TouchableOpacity> */}
        //         <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        //           {parties.map((party) =>
        //             <PartyContainer
        //               key={party.id}
        //               party={party}
        //               selectedOrder={selectedOrder}
        //               setSelectedOrder={setSelectedOrder}
        //               selectedRun={selectedRun}
        //               setSelectedRun={setSelectedRun}
        //               assembleSelectedRun={assembleSelectedRun}
        //               isAll={currentUser.username === 'all@gmail.com'}
        //             />
        //           )}
        //         </ScrollView>
        //       </View>
        //       {(!selectedOrder && !selectedRun) && (
        //         <View style={styles.orderInfoSubcontainer}>
        //           <Text style={styles.infoText}>
        //             Click on a group to view all your orders in the group{"\n"}
        //             OR{"\n"}
        //             Click on an order in a group to view that order
        //             </Text>
        //         </View>
        //       )}
        //       {selectedRun && (
        //         <View style={{ width: '70%', padding: 25 }}>
        //           <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        //             <View style={styles.spaceBetween}>
        //               <Text style={styles.orderName}>
        //                 {selectedRun.deliverer.name}'s Group {currentUser.username === 'all@gmail.com' ? `at ${selectedRun.restaurant.name}` : ''}
        //               </Text>
        //               <Text style={styles.date}>
        //                 {dayjs(selectedRun.orders[0].orderSentTime).format('MM/DD/YY hh:mmA')}
        //               </Text>
        //             </View>

        //             <View style={{ borderBottomColor: 'black', borderBottomWidth: 2, marginVertical: 15 }} />

        //             {selectedRun.orderItems.map(item => (
        //               <View key={item.id} style={{ ...styles.spaceBetween, paddingBottom: 8 }}>
        //                 <View>
        //                   <Text style={styles.itemName}>
        //                     {item.quantity > 1 && `${item.quantity}x `}
        //                     {item.menuItem.name}
        //                   </Text>
        //                   {item.foodOptions.map(foodOption => (
        //                     foodOption.options.map((option, index) => <Text key={index} style={styles.itemTopping}>{option.name}</Text>)
        //                   ))}
        //                 </View>
        //                 <Text style={styles.itemPrice}>
        //                   {(item.quantity * item.price / 100).toFixed(2)}
        //                 </Text>
        //               </View>
        //             ))}

        //             <View style={{ ...styles.spaceBetween, paddingBottom: 8 }}>
        //               <Text style={{ ...styles.itemProperties, color: '#5F5E5E' }}>Tax</Text>
        //               <Text style={{ ...styles.itemPrice, color: '#5F5E5E' }}>{(selectedRun.totalTax / 100).toFixed(2)}</Text>
        //             </View>
        //             <View style={{ ...styles.spaceBetween, paddingBottom: 8 }}>
        //               <Text style={{ ...styles.itemProperties, color: '#5F5E5E' }}>Tip</Text>
        //               <Text style={{ ...styles.itemPrice, color: '#5F5E5E' }}>{(selectedRun.totalTip / 100).toFixed(2)}</Text>
        //             </View>
        //             <View style={styles.spaceBetween}>
        //               <Text style={styles.itemProperties}>Total</Text>
        //               <Text style={styles.itemPrice}>${(selectedRun.totalTotal / 100).toFixed(2)}</Text>
        //             </View>

        //             <View style={{ borderBottomColor: 'black', borderBottomWidth: 2, marginVertical: 15 }} />

        //             <Text style={styles.itemProperties}>Order Time (min)</Text>
        //             <Text style={{ ...styles.itemTopping, color: '#5F5E5E', marginTop: -5 }}>Click a button to select</Text>

        //             {selectedRun.restaurantFinishedPreparingMinutes ? (
        //               <Text style={styles.selectedText}>You have selected {selectedRun.restaurantFinishedPreparingMinutes} minutes.</Text>
        //             ) : (
        //               <View style={{ ...styles.spaceBetween, marginTop: 28 }}>
        //                 {orderTimes.map((orderTime, index) =>
        //                   <TouchableOpacity
        //                     activeOpacity={0.5}
        //                     key={orderTime}
        //                     style={index === 0 || index === 7 ? (index === 0 ? styles.left : styles.right) : styles.middle}
        //                     onPress={() => handleUpdatePartyETA(orderTime)}
        //                   >
        //                     <View style={styles.timeContainer}>
        //                       <Text style={styles.orderTimeText}>{orderTime}</Text>
        //                     </View>
        //                   </TouchableOpacity>
        //                 )}
        //               </View>
        //             )}
        //           </ScrollView>
        //         </View>
        //       )}
        //       {selectedOrder && (
        //         <View style={{ width: '70%', padding: 25 }}>
        //           <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        //             <View style={styles.spaceBetween}>
        //               <Text style={styles.orderName}>
        //               {selectedOrder.customer.name}  {currentUser.username === 'all@gmail.com' ? `at ${selectedOrder.restaurant.name}` : ''}
        //               </Text>
        //               <Text style={styles.date}>
        //               {dayjs(selectedOrder.orderSentTime).format('MM/DD/YY hh:mmA')}
        //               </Text>
        //             </View>

        //             <View style={{ borderBottomColor: 'black', borderBottomWidth: 2, marginVertical: 15 }} />

        //             {selectedOrder.items.map(item => (
        //               <View key={item.id} style={{ ...styles.spaceBetween, paddingBottom: 8 }}>
        //                 <View>
        //                   <Text style={styles.itemName}>
        //                     {item.quantity > 1 && `${item.quantity}x `}
        //                     {item.menuItem.name}
        //                   </Text>
        //                   {item.foodOptions.map(foodOption => (
        //                     foodOption.options.map((option, index) => <Text key={index} style={styles.itemTopping}>{option.name}</Text>)
        //                   ))}
        //                 </View>
        //                 <Text style={styles.itemPrice}>
        //                   {(item.quantity * item.price / 100).toFixed(2)}
        //                 </Text>
        //               </View>
        //             ))}

        //             <View style={{ ...styles.spaceBetween, paddingBottom: 8 }}>
        //               <Text style={{ ...styles.itemProperties, color: '#5F5E5E' }}>Tax</Text>
        //               <Text style={{ ...styles.itemPrice, color: '#5F5E5E' }}>{(selectedOrder.tax / 100).toFixed(2)}</Text>
        //             </View>
        //             <View style={{ ...styles.spaceBetween, paddingBottom: 8 }}>
        //               <Text style={{ ...styles.itemProperties, color: '#5F5E5E' }}>Tip</Text>
        //               <Text style={{ ...styles.itemPrice, color: '#5F5E5E' }}>{(selectedOrder.tip / 100).toFixed(2)}</Text>
        //             </View>
        //             <View style={styles.spaceBetween}>
        //               <Text style={styles.itemProperties}>Total</Text>
        //               <Text style={styles.itemPrice}>${(selectedOrder.totalPrice / 100).toFixed(2)}</Text>
        //             </View>
        //           </ScrollView>
        //         </View>
        //       )}
        //     </View>
        //   ) : (
        //     // <ImageBackground source={WhiteGradient} resizeMode="cover" style={styles.backgroundImage}>
        //     //   <BubbleIcon />
        //     //   <Text>You have no active orders.</Text>
        //     //   <Text style={{ fontWeight: 'bold' }}>Orders placed through the Toppings app today {"\n"} will appear hear.</Text>
        //     // </ImageBackground>
        //     <View style={styles.emptyContainer}>
        //       <BubbleIcon style={{ marginBottom: 5 }}/>
        //       <Text style={{ fontSize: 18, color: '#898989', fontWeight: 'bold', marginBottom: 5 }}>You have no active orders.</Text>
        //       <Text style={{ fontSize: 14, color: '#898989', fontWeight: 'bold', textAlign: 'center', }}>Orders placed through the Toppings app {"\n"}today will appear hear.</Text>
        //     </View>
        //   )}
        // </View>
      )}
      {/* </ImageBackground> */}
    </View>
  );
};

const styles = StyleSheet.create({
  leftMenuTextWrapper: {
    paddingLeft: 32,
    paddingRight: 16,
    paddingBottom: 28,
  },
  leftMenu: {
    backgroundColor: "#FFF",
    elevation: 20,
    shadowColor: "#000",
    flex: 1,
    paddingTop: 40,
    paddingBottom: 16,
  },
  body: {
    backgroundColor: "#FFF",
    flex: 3,
    paddingTop: 40,
    paddingRight: 32,
    paddingBottom: 32,
    paddingLeft: 40,
  },

  background: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },
  ordersSubcontainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ffffff",
  },
  nameSubcontainer: {
    width: "30%",
    //alignItems: 'center',
    borderRightWidth: 2,
    padding: 25,
  },
  orderInfoSubcontainer: {
    width: "70%",
    marginTop: 36,
    alignItems: "center",
  },
  infoText: {
    fontFamily: "raleway-extrabold",
    fontSize: 22,
    textAlign: "center",
  },
  spaceBetween: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  orderName: {
    fontFamily: "raleway-extrabold",
    fontSize: 26,
    color: "#000000",
  },
  date: {
    fontFamily: "cabin-medium",
    fontSize: 22,
    color: "#5F5E5E",
  },
  itemName: {
    fontFamily: "cabin-regular",
    fontSize: 20,
    marginBottom: -5,
  },
  itemTopping: {
    fontFamily: "cabin-regular",
    fontSize: 16,
  },
  itemPrice: {
    fontFamily: "source-code-pro-regular",
    fontSize: 20,
  },
  itemProperties: {
    fontFamily: "cabin-regular",
    fontSize: 20,
  },
  selectedText: {
    fontFamily: "cabin-semibold",
    fontSize: 23,
    color: "#0082FF",
    alignSelf: "center",
    marginTop: 20,
  },
  left: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#0082FF",
    marginTop: 10,
    marginRight: 5,
    marginBottom: 10,
  },
  right: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#0082FF",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
  },
  middle: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#0082FF",
    margin: 10,
  },
  timeContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  orderTimeText: {
    fontSize: 18,
    fontFamily: "cabin-bold",
    color: "#FFFFFF",
  },
  emptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "90%",
  },
});

export default OrdersScreen;