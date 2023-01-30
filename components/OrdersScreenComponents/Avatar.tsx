import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { font } from "../../styles";

type Props = {
  initials: string;
  color: string;
};
const Avatar: React.FC<Props> = (props: Props) => {
  const { initials, color } = props;
  return (
    <View
      style={[
        styles.avatar,
        {
          backgroundColor: color,
        },
      ]}
    >
      <Text style={[font.small, { color: "#FFF" }]}>{initials}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Avatar;
