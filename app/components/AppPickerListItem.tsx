import React from "react";
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet, TouchableOpacity
} from "react-native";
import { Theme } from "../utils";


import AppText from "./AppText";

interface Props {
  title: string;
  icon?: string;
  iconBackgroundColor?: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<any>;
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const AppPickerListItem: React.FC<Props> = ({
  title,
  onPress,
  style,
  children,
  ...otherProps
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
    >
      <AppText style={styles.pickerItem}>{title}</AppText>
    </TouchableOpacity>
  );
};

export default AppPickerListItem;

const styles = StyleSheet.create({
  container: {
  
  },
  pickerItem: {
    flex: 1,
    width: "100%",
    padding: 12,
    backgroundColor: Theme.WHITE_LIGHT,
    justifyContent: "center",
    fontSize: 16,
    letterSpacing: 1,
    color: Theme.GREY_DARK,
    borderRadius: Theme.BORDER_RADIUS,
  },
});


