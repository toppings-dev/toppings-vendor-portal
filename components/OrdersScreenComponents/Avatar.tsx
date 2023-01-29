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
import { font } from "../../styles";

type Props = {
  initials: string;
  color: string;
};
const Avatar: React.FC<Props> = (props: Props) => {
  const { initials, color } = props;
  const { colors } = useTheme();

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
  container: {
    paddingVertical: 20,
    paddingLeft: 32,
    paddingRight: 16,
    borderBottomWidth: 1,
  },
});

export default Avatar;
