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
  textStyle?: StyleProp<any>;
  variant?: string;
  style?: StyleProp<any>;
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
    <TouchableHighlight activeOpacity={0.7} style={[styles.primaryButton, style && style]} {...otherProps}>
      <Text style={[styles.primarytext, textStyle && textStyle]}>{children}</Text>
    </TouchableHighlight>
  );

  if( variant === 'outline')
  return (
    <TouchableHighlight underlayColor={Theme.PRIMARY} activeOpacity={0.7} style={[styles.outlineButton, style && style]} {...otherProps}>
    <Text style={[styles.outlineText, textStyle && textStyle]}>{children}</Text>
  </TouchableHighlight>
  );

  if( variant === 'outlineRound')
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.outlineButton, {borderRadius:40},style && style]} {...otherProps}>
    <Text style={[styles.outlineText, textStyle && textStyle]}>{children}</Text>
  </TouchableOpacity>
  );

  if( variant === 'round')
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.primaryButton,{borderRadius:40}, style && style]} {...otherProps}>
    <Text style={[styles.primarytext, textStyle && textStyle]}>{children}</Text>
  </TouchableOpacity>
  );

  if( variant === 'text')
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.textButton, style && style]} {...otherProps}>
    <Text style={[styles.outlineText, textStyle && textStyle]}>{children}</Text>
  </TouchableOpacity>
  );

  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.primaryButton, style && style]} {...otherProps}>
      <Text style={[styles.primarytext, textStyle && textStyle]}>{children}</Text>
    </TouchableOpacity>
  );

};

export default AppButton;

const styles = StyleSheet.create({

  //* primary btn
  primarytext: {
    color: Theme.WHITE,
    fontSize: 16,
    letterSpacing: 1,
    fontWeight:'500',
  },

  primaryButton: {
    backgroundColor: Theme.PRIMARY,
    width: '100%',
    height: 48,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginVertical:4,
  },

  //*outline
  outlineButton: {
    backgroundColor: Theme.TRANSPARENT,
    width: '100%',
    height: 48,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 4,
    borderColor: Theme.PRIMARY,
    borderStyle: 'solid',
    borderWidth: 1,
  },

  outlineText: {
    color: Theme.PRIMARY,
    fontSize: 16,
    letterSpacing: 1,
    fontWeight:'500',
  },

  textButton: {
    backgroundColor: Theme.TRANSPARENT,
    width: '100%',
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 4,
    borderRadius: 6,
  },
 
});
