import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { RunStatus } from "../../enums";
import BlueCheck from "assets/icons/BlueCheck.png";
import WhiteCheck from "assets/icons/WhiteCheck.png";
import { font, colors } from "../../styles";

type Props = {
  status: RunStatus;
  onPress?: () => void;
};

const StatusInfo = {
  PENDING: {
    text: "Mark as ",
    backgroundColor: colors.blue,
    textColor: "#FFF",
    borderWidth: 0,
    icon: WhiteCheck,
    disabled: false,
  },
  IN_PROGRESS: {
    text: "",
    backgroundColor: "#FFF",
    textColor: colors.blue,
    borderWidth: 1,
    icon: BlueCheck,
    disabled: true,
  },
};
const MarkStatusButton: React.FC<Props> = (props: Props) => {
  const { status, onPress } = props;

  return (
    // The View is necessary becuase otherwise the button is full width
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: StatusInfo[status].backgroundColor,
            borderWidth: StatusInfo[status].borderWidth,
            borderColor: colors.blue,
          },
        ]}
        onPress={onPress}
        disabled={StatusInfo[status].disabled}
      >
        <Image
          source={StatusInfo[status].icon}
          style={[{ width: 20, height: 20, marginRight: 8 }]}
        />
        <Text style={[font.p, { color: StatusInfo[status].textColor }]}>
          {StatusInfo[status].text}
          <Text style={font.bold}>In Progress</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
  },
});

export default MarkStatusButton;
