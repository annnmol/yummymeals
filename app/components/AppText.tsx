import { StyleProp, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Theme } from "../customization/Theme";

interface Props {
  style?: any;
  variant?: string;
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const AppText: React.FC<Props> = ({
  style,
  variant,
  children,
  ...otherProps
}) => {

  
  if (variant === "label" || variant === "Label") {
    return (
      <Text style={[styles.label, style && style]} {...otherProps}>
        {children}
      </Text>
    );
  }

  return (
    <Text style={[styles.text, style && style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: Theme.FONT_MEDIUM,
  },

  label: {
    fontSize: 14,
    letterSpacing: 1,
    color: Theme.GREY_DARK,
    fontFamily: Theme.FONT_MEDIUM,
    marginBottom: 4,
  },
});
