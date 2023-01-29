import React, { useState } from "react";
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
} from "react-native";

import { useTheme } from "assets/styles/ThemeProvider";
import Avatar from "./Avatar";
import { font, colors } from "../../styles";
import { nameToInitials } from "./utils/nameToInitials";
import { foodOptionsToString } from "./utils/foodOptionsToString";

type Props = {
  orders: any;
};

const TAX = 7;
const ItemsTable: React.FC<Props> = (props: Props) => {
  const { orders } = props;
  // console.log("options:", orders[0].items[0]);
  // console.log("options:", orders[0].items[0].foodOptions[0].options[0].name);

  console.log("orders", orders[0].items);
  if (orders[0].items === undefined) {
    return <View />;
  }
  return (
    <View>
      {orders.map((order, orderIndex) => (
        <View key={order.id}>
          {order.items.map((item) => (
            <View style={{ marginTop: 12 }} key={order.id + item.id}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ flex: 8 }}>
                  <Text style={font.p}>
                    <Text style={font.bold}>{item.quantity}x</Text>{" "}
                    {item.menuItem.name}
                  </Text>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                  <Text style={[font.p, font.bold]}>
                    {(item.menuItem.price / 100).toFixed(2)}
                  </Text>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                  <Avatar
                    initials={nameToInitials(order.customer?.name)}
                    color={colors.avatarColors[orderIndex]}
                  />
                </View>
              </View>
              {item.foodOptions.length > 0 && (
                <Text style={[font.p, font.gray]}>
                  {foodOptionsToString(item.foodOptions)}
                </Text>
              )}
            </View>
          ))}
        </View>
      ))}
      <View style={{ flexDirection: "row", marginTop: 24 }}>
        <View style={{ flex: 8 }}>
          <Text style={[font.p, font.bold, font.gray]}>Tax</Text>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Text style={[font.p, font.bold, font.gray]}>
            {(
              orders.reduce(function (acc, order) {
                return acc + order.tax;
              }, 0) / 100
            ).toFixed(2)}
          </Text>
        </View>
        <View style={{ flex: 1 }} />
      </View>
      <View style={{ flexDirection: "row", marginTop: 24 }}>
        <View style={{ flex: 8 }}>
          <Text style={[font.p, font.bold, font.gray]}>Total</Text>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Text style={[font.p, font.bold, font.gray]}>
            $
            {(
              orders.reduce(function (acc, order) {
                return acc + order.totalPrice;
              }, 0) / 100
            ).toFixed(2)}
          </Text>
        </View>
        <View style={{ flex: 1 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuDetails: {
    flexDirection: "row",
    justifyContent: "center",
  },
  container: {
    paddingVertical: 20,
    paddingLeft: 32,
    paddingRight: 16,
    borderBottomWidth: 1,
  },
});

export default ItemsTable;
