import React from "react";
import { View, Text } from "react-native";

import Avatar from "./Avatar";
import { font, colors } from "../../styles";
import { nameToInitials } from "./utils/nameToInitials";
import { foodOptionsToString } from "./utils/foodOptionsToString";

type Props = {
  orders: any;
};

const ItemsTable: React.FC<Props> = (props: Props) => {
  const { orders } = props;

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
                    {(item.price / 100).toFixed(2)}
                  </Text>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                  <Avatar
                    initials={nameToInitials(order.customer?.name)}
                    color={colors.avatarColors[orderIndex % colors.avatarColors.length]}
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

export default ItemsTable;
