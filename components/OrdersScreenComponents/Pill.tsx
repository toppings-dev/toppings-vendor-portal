import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { font, colors } from "../../styles";
import { RunStatus } from "../../enums";
type Props = {
  status: RunStatus;
};

const StatusInfo = {
  PENDING: {
    text: "Pending",
    backgroundColor: "#FBD2EF",
    textColor: "#985284",
  },
  IN_PROGRESS: {
    text: "In Progress",
    backgroundColor: "#DCE6FF",
    textColor: colors.blue,
  },
};
const Pill: React.FC<Props> = (props: Props) => {
  const { status } = props;

  return (
    <View
      style={[
        styles.pill,
        {
          backgroundColor: StatusInfo[status].backgroundColor,
        },
      ]}
    >
      <Text style={[font.small, { color: StatusInfo[status].textColor }]}>
        {StatusInfo[status].text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: 24,
    height: 22,
    justifyContent: "center",
    borderRadius: 50,
  },
});

export default Pill;
