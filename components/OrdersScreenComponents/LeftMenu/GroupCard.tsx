import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import dayjs from "dayjs";

import { useTheme } from "assets/styles/ThemeProvider";
import { font } from "../../../styles";
import { uuidTo5Digits } from "../utils/uuidTo5Digits";
import Pill from "../Pill";
import { RunStatus } from "../../../enums";

type Props = {
  party: any;
  index: number;
  selectedRun: any;
  setSelectedRun: React.Dispatch<React.SetStateAction<any>>;
};
const GroupCard: React.FC<Props> = (props: Props) => {
  const { party, index, selectedRun, setSelectedRun } = props;
  const { colors } = useTheme();

  const handleSelectGroupCard = () => {
    setSelectedRun(party);
  };
  return (
    <View
      style={[
        styles.container,
        {
          borderColor: colors.divider,
          borderTopWidth: index == 0 ? 1 : 0,
          backgroundColor: party.id === selectedRun?.id ? "#F3F3F3" : "#FFF",
        },
      ]}
    >
      <TouchableOpacity activeOpacity={0.5} onPress={handleSelectGroupCard}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={font.menuH2}>#{uuidTo5Digits(party.id)}</Text>
          <Pill
            status={
              party.restaurantFinishedPreparingMinutes
                ? RunStatus.IN_PROGRESS
                : RunStatus.PENDING
            }
          />
        </View>
        <Text style={font.menuH3}>{party.deliverer.name}'s Group</Text>
        <Text style={[font.detail, { color: colors.secondaryText }]}>
          {party.orders.length} orders •{" "}
          {dayjs(party.windowCloseTime).format("h:mm A")}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingLeft: 32,
    paddingRight: 16,
    borderBottomWidth: 1,
  },
});

export default GroupCard;
