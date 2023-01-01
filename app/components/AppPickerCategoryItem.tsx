import React from "react";
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Theme } from "../customization/Theme";
import AppIcon from "./AppIcon";
import AppText from "./AppText";

interface Props {
  title: string;
  icon: string;
  iconBackgroundColor: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<any>;
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const AppPickerCategoryItem: React.FC<Props> = ({
  title,
  icon,
  iconBackgroundColor,
  onPress,
  style,
  children,
  ...otherProps
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={[styles.container, style && style]}>
        <AppIcon
          variant="avatar"
          name={icon}
          color={Theme.WHITE}
          size={36}
          backgroundColor={iconBackgroundColor}
          divStyle={{width:60,height:60}}
        />
      <AppText style={styles.pickerItem}>{title}</AppText>
      </View>
    </TouchableOpacity>
  );
};

export default AppPickerCategoryItem;

const styles = StyleSheet.create({
  container: {
    // flex:1,
    width: '100%',
    alignItems: 'center',
    justifyContent:'center',
    padding:20,
  },
  pickerItem: {
    alignSelf:'center',
    textAlign:'center',
    marginTop:8,
    fontSize: 16,
    // letterSpacing: 1,
  },
});
