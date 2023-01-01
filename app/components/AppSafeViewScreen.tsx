import Constants from "expo-constants";
import React from "react";
import { SafeAreaView, StyleProp, StyleSheet } from "react-native";
import { Theme } from "../customization/Theme";


interface Props {
  style?: StyleProp<any>;
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const AppSafeViewScreen: React.FC<Props> = ({
  style,
  children,
  ...otherProps
}) => {
  return (
    <SafeAreaView style={[styles.screen, style && style]} {...otherProps}>
      {children}
    </SafeAreaView>
  );
};

export default AppSafeViewScreen;

const styles = StyleSheet.create({
  screen: {
      paddingTop: Constants.statusBarHeight + 4,
      paddingHorizontal: Theme.PADDING_HORIZONTAL_SCREEN,
      paddingBottom: 8,
      flex: 1,
      backgroundColor: Theme.SECONDARY,
  },
});
