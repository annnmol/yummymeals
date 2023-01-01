import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleProp, StyleSheet, View } from "react-native";
import { Theme } from "../customization/Theme";

interface Props {
  name: any | string;
  size?: number;
  color?: string;
  style?: StyleProp<any>;
  divStyle?: StyleProp<any>;
  backgroundColor?: string;
  variant?: string;
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const AppIcon: React.FC<Props> = ({
  name,
  size = 16,
  color = Theme.GREY_DARK,
  style,
  divStyle,
  backgroundColor = Theme.WHITE,
  variant,
  children,
  ...otherProps
}) => {
  if (variant === "avatar")
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: backgroundColor },
          divStyle && divStyle,
        ]}
      >
        <MaterialCommunityIcons
          style={[styles.icon, style && style]}
          name={name}
          size={size}
          color={color}
        />
      </View>
    );

  if (variant === "MaterialCommunityIcons")
    return (
      <MaterialCommunityIcons
        style={[styles.icon, style && style]}
        name={name}
        size={size}
        color={color}
      />
    );

  return (
    <MaterialCommunityIcons
      style={[styles.icon, style && style]}
      name={name}
      size={size}
      color={color}
    />
  );
};

export default AppIcon;

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    borderRadius: 32,
    backgroundColor: Theme.WHITE_LIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {},
});
