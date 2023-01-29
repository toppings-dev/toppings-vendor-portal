import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  RefreshControl,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
  Linking,
  ImageBackground,
  TextInput,
  NativeSyntheticEvent,
  NativeScrollEvent,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';

import GrayArrow from '../../assets/images/down-arrow-gray.png';
import BlueArrow from '../../assets/images/down-arrow-blue.png';
import { useTheme } from 'assets/styles/ThemeProvider';
import { font } from '../../styles';

type Props = {
  party: any,
  index: number,
  // selectedOrder: any,
  // setSelectedOrder: React.Dispatch<React.SetStateAction<any>>,
  // selectedRun: any,
  // setSelectedRun: React.Dispatch<React.SetStateAction<any>>,
  // assembleSelectedRun: (any) => void,
  isAll: boolean,
}
const PartyContainer: React.FC<Props> = (props:Props) => {
  const {
    party, 
    index,
    // selectedOrder, setSelectedOrder, selectedRun, setSelectedRun, assembleSelectedRun, 
    isAll 
  } = props;
  const {colors} = useTheme();
  let partyViewed = party.restaurantFinishedPreparingMinutes ? true : false;

  const [expanded, setExpanded] = useState(true);

  // const handleToggleExpand = (e) => {
  //   e.preventDefault();
  //   console.log('select party');
  //   // setExpanded(!expanded);
  //   assembleSelectedRun(party);
  //   setSelectedOrder(null);
  // };

  // const handleSelectOrder = (e, order) => {
  //   e.stopPropagation();

  //   console.log("select order");

  //   setSelectedRun(null);
  //   setSelectedOrder(order);
  // }

  console.log(party)

  return(
    <View style={[styles.container, { borderColor: colors.divider, borderTopWidth: index==0 ? 1 : 0 }]}>
      <TouchableOpacity activeOpacity={0.5} 
      // onPress={handleToggleExpand}
      >
        <Text style={font.menuH2}>#{party.id}</Text>
        <Text style={font.menuH3}>{party.deliverer.name}'s Group</Text>
        <Text style={[font.detail, {color: colors.secondaryText}]}>2 orders • 10:17 AM</Text>
        {/* {partyViewed ? (
          <View style={styles.partyNameContainer}>
            <Image source={GrayArrow} style={styles.arrow} />
            <Text style={selectedRun?.id === party.id ? { ...styles.name, fontFamily: 'cabin-bold' } : { ...styles.name, fontFamily: 'cabin-regular' }}>
              {party.deliverer.name}'s Group {isAll ? `at ${party.restaurant.name}` : ''}
            </Text>
          </View>
        ) : (
          <View style={styles.partyNameContainer}>
            <Image source={BlueArrow} style={styles.arrow} />
            <Text style={selectedRun?.id === party.id ? { ...styles.name, fontFamily: 'cabin-bold', color: '#0082FF' } : { ...styles.name, fontFamily: 'cabin-regular', color: '#0082FF' }}>
              {party.deliverer?.name}'s Group {isAll ? `at ${party.restaurant?.name}` : ''}
            </Text>
          </View>
        )} */}
      </TouchableOpacity>
      {/* {expanded && 
        <View>
          {party.orders.map(order => 
            <TouchableOpacity key={order.id} activeOpacity={0.5} onPress ={(e) => handleSelectOrder(e, order)}>
              <Text 
              style={selectedOrder?.id === order.id ? { ...styles.name, fontFamily: 'cabin-bold' } : { ...styles.name, fontFamily: 'cabin-regular' }}
              >
                {order.customer.name} 
              </Text>  
            </TouchableOpacity>
          )}
        </View>
      } */}
    </View>
  )
};

const styles = StyleSheet.create({

  dot: {

  },
  menuDetails: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  container: {
    paddingVertical: 20,
    paddingLeft: 32,
    paddingRight: 16,
    borderBottomWidth: 1
  },

  arrow: {
    width: 20,
    height: 11,
    marginRight: 12,
    marginTop: 3,
  },
  partyNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'cabin-regular',
    color: '#5F5E5E',
    fontSize: 22,
    textAlign: 'center',
  },
});

export default PartyContainer;