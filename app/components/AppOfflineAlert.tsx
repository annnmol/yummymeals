import { useNetInfo } from "@react-native-community/netinfo";
import Constants from "expo-constants";
import React from "react";
import { StyleSheet, View } from "react-native";

import { Theme } from "../utils";
import AppText from "./AppText";

interface Props {
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const AppOfflineAlert: React.FC<Props> = ({ children, ...otherProps }) => {
  const netInfo = useNetInfo();

  if (netInfo?.type !== "unknown" && netInfo?.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No internet connection detected</AppText>
      </View>
    );

  return null;
};

export default AppOfflineAlert;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 111,
    height: 32,
    width: "120%",
    top: Constants.statusBarHeight,
    left: 0,
    right:0,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: Theme.ERROR,
  },
  text: {
    textAlign: "center",
    color: Theme.WHITE,
    fontWeight: "500",
    letterSpacing:1,
  },
});
