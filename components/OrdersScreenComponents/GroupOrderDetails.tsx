import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import dayjs from "dayjs";

import { font, colors } from "../../styles";
import { uuidTo5Digits } from "./utils/uuidTo5Digits";
import Avatar from "./Avatar";
import ItemsTable from "./ItemsTable";
import { nameToInitials } from "./utils/nameToInitials";
import Pill from "./Pill";
import PaymentBreakdownModal from "./PaymentBreakdownModal";
import { RunStatus } from "../../enums";
import MarkStatusButton from "./MarkStatusButton";

type Props = {
  selectedRun: any;
  handleUpdatePartyEta: () => void;
};
const GroupOrderDetails: React.FC<Props> = (props: Props) => {
  const { selectedRun, handleUpdatePartyEta } = props;
  const [isPaymentBreakdownModalOpen, setPaymentBreakdownModalOpen] =
    useState(false);
  const handlePaymentBreakdownClose = () => {
    setPaymentBreakdownModalOpen(false);
  };

  // Set run status depending on if restaurantFinishedPreparingMinutes is set
  const STATUS: RunStatus = selectedRun.restaurantFinishedPreparingMinutes
    ? RunStatus.IN_PROGRESS
    : RunStatus.PENDING;

  const TOTAL_PRICE = selectedRun.orders.reduce(function (acc, order) {
    return acc + order.totalPrice;
  }, 0); // in cents
  const COMMISSION_PERCENT = selectedRun.restaurant.commission;
  const RECEIVE_RESTAURANT = ((100 - COMMISSION_PERCENT) * TOTAL_PRICE) / 10000;
  const RECEIVE_TOPPINGS = (COMMISSION_PERCENT * TOTAL_PRICE) / 10000;

  // Calculates total number of items in run
  const numItems = selectedRun.orders.reduce((allTotal, order) => {
    const sum = order.items.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    return allTotal + sum;
  }, 0);

  return (
    <View style={[styles.container]}>
      <PaymentBreakdownModal
        modalVisible={isPaymentBreakdownModalOpen}
        handleModalClose={handlePaymentBreakdownClose}
        TOTAL_PRICE={TOTAL_PRICE}
        RECEIVE_RESTAURANT={RECEIVE_RESTAURANT}
        RECEIVE_TOPPINGS={RECEIVE_TOPPINGS}
      />
      {selectedRun?.id !== undefined && (
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={[font.h1, { marginRight: 22 }]}>
                #{uuidTo5Digits(selectedRun.id)}
              </Text>
              <Pill
                status={
                  selectedRun.restaurantFinishedPreparingMinutes
                    ? RunStatus.IN_PROGRESS
                    : RunStatus.PENDING
                }
              />
            </View>
            <Text style={font.h1}>${RECEIVE_RESTAURANT.toFixed(2)}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={font.h2}>
              {selectedRun.deliverer.name}'s Group Order
            </Text>
            <Text style={[font.p, font.gray]}>you receive</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/icons/ClockIcon.png")}
                style={[{ width: 20, height: 20, marginRight: 8 }]}
              />
              <Text style={font.secondaryP}>
                {dayjs(selectedRun.windowCloseTime).format("M/D/YYYY h:mm A")}
              </Text>
              <Image
                source={require("../../assets/icons/UsersIcon.png")}
                style={[
                  { width: 23, height: 14, marginLeft: 18, marginRight: 8 },
                ]}
              />
              <Text style={font.secondaryP}>
                {selectedRun.orders.length}{" "}
                {selectedRun.orders.length > 1 ? "people" : "person"} in order:
              </Text>
              {selectedRun.orders.map((order, index) => (
                <View style={{ marginLeft: 8 }} key={order.id}>
                  <Avatar
                    initials={nameToInitials(order.customer?.name)}
                    color={colors.avatarColors[index]}
                  />
                </View>
              ))}
            </View>
            <TouchableOpacity
              onPress={() => setPaymentBreakdownModalOpen(true)}
            >
              <Text style={[font.p, font.underline, font.gray]}>
                View payment breakdown
              </Text>
            </TouchableOpacity>
          </View>
          <MarkStatusButton status={STATUS} onPress={handleUpdatePartyEta} />
          <View style={styles.divider} />
          <View style={{ flexDirection: "row", marginBottom: 4 }}>
            <View style={{ flex: 8 }}>
              <Text style={font.columnHeaders}>ITEMS({numItems})</Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Text style={font.columnHeaders}>PRICE</Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Text style={font.columnHeaders}>PERSON</Text>
            </View>
          </View>
          {selectedRun.orders !== undefined && (
            <ItemsTable orders={selectedRun.orders} />
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: 0.5,
    backgroundColor: "#707070",
    marginVertical: 24,
  },
  container: {
    paddingTop: 40,
    paddingRight: 32,
    paddingBottom: 32,
    paddingLeft: 40,
  },
});

export default GroupOrderDetails;
