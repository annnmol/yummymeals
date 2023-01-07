import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AppIcon } from "../components";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { Theme } from "../utils";

const TabbarCustomButton = (props: BottomTabBarButtonProps) => {
  // console.log("tabbuttonProps", props);
  const { children, onPress, accessibilityState, accessibilityLabel } = props;

  if (accessibilityState?.selected) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          {/* {children} */}
          {accessibilityLabel}
          <AppIcon name={"plus-circle"} size={30} color={Theme.WHITE} />
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        {/* {children} */}
        {/* {accessibilityLabel} */}
        <AppIcon name={"plus"} size={30} color={Theme.WHITE} />
      </View>
    </TouchableOpacity>
  );
};

export default TabbarCustomButton;

const styles = StyleSheet.create({
  container: {
    // flex:1,
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
