import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import React from "react";
import {
    StyleSheet, TouchableOpacity,
    View
} from "react-native";
import { AppIcon } from "../components";
import { Theme } from "../utils";


const TabbarCtaButton = (props: BottomTabBarButtonProps) => {
  //   console.log("tabbuttonProps", props);
  const { children, onPress, accessibilityState, accessibilityLabel } = props;

  if (accessibilityState?.selected) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <AppIcon name={"plus-circle"} size={30} color={Theme.WHITE} />
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <AppIcon name={"plus"} size={30} color={Theme.WHITE} />
      </View>
    </TouchableOpacity>
  );
};

export default TabbarCtaButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.PRIMARY,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 60,
    borderRadius: 40,
    bottom: 20,
    borderWidth: 8,
    borderColor: Theme.WHITE,
  },
});
