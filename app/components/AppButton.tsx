import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Theme } from "../customization/Theme";

interface Props {
  style?: StyleProp<any>;
  textStyle?: StyleProp<any>;
  variant?: string;
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const AppButton: React.FC<Props> = ({
  style,
  textStyle,
  variant,
  children,
  ...otherProps
}) => {
  if( variant === 'TouchableHighlight')
  return (
    <TouchableHighlight style={[styles.primaryButton, style && style]} {...otherProps}>
      <Text style={[styles.primarytext, textStyle && textStyle]}>{children}</Text>
    </TouchableHighlight>
  );
  return (
    <TouchableOpacity style={[styles.primaryButton, style && style]} {...otherProps}>
      <Text style={[styles.primarytext, textStyle && textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  primarytext: {
    fontSize: 14,
    fontFamily: Theme.FONT_MEDIUM,
    color: Theme.WHITE,
    
  },

  primaryButton: {
    backgroundColor: Theme.PRIMARY,
    width: 340,
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginVertical:4,
  },
});
