import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

import { font } from "../../styles";

type Props = {
  modalVisible: boolean;
  handleModalClose: () => void;
  TOTAL_PRICE: number;
  RECEIVE_RESTAURANT: number;
  RECEIVE_TOPPINGS: number;
};

const PaymentBreakdownModal: React.FC<Props> = ({
  modalVisible,
  handleModalClose,
  TOTAL_PRICE, // cents
  RECEIVE_RESTAURANT,
  RECEIVE_TOPPINGS,
}) => {
  return (
    <Modal
      isVisible={modalVisible}
      useNativeDriverForBackdrop
      backdropOpacity={0.4}
      style={{ margin: 0 }}
    >
      <View style={styles.container}>
        <View style={styles.roundedCornersContainer}>
          <TouchableOpacity onPress={handleModalClose} style={styles.x}>
            <Image
              source={require("../../assets/icons/BlackX.png")}
              style={[{ width: 14, height: 14 }]}
            />
          </TouchableOpacity>
          <Text style={[font.h2, font.bold, { marginBottom: 16 }]}>
            Payment breakdown
          </Text>
          <View style={styles.row}>
            <Text style={font.p}>Customer pays</Text>
            <Text style={[font.p, font.bold]}>
              ${(TOTAL_PRICE / 100).toFixed(2)}
            </Text>
          </View>
          <View style={[styles.row, { marginTop: 8, marginBottom: 24 }]}>
            <Text style={font.p}>Toppings receives</Text>
            <Text style={[font.p, font.bold]}>
              ${RECEIVE_TOPPINGS.toFixed(2)}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={font.p}>You receive</Text>
            <Text style={[font.p, font.bold]}>
              ${RECEIVE_RESTAURANT.toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  x: {
    position: "absolute",
    right: 21,
    top: 21,
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  roundedCornersContainer: {
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "25%",
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 40,
  },
});

export default PaymentBreakdownModal;
