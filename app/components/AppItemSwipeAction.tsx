import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import AppIcon from "./AppIcon";
import { Theme } from "../utils";


interface Props {
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<any>;
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const AppItemSwipeAction: React.FC<Props> = ({
  onPress,
  style,
  children,
  ...otherProps
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <AppIcon name="trash-can" size={35} color={Theme.WHITE} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppItemSwipeAction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.ERROR,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
