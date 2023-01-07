import React from "react";
import {
  Image,
  StyleProp,
  StyleSheet, TouchableOpacity,
  View
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import AppIcon from "./AppIcon";
import AppSafeViewScreen from "./AppSafeViewScreen";
import { Theme } from "../utils";

interface Props {
  style?: StyleProp<any>;
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const AppViewImage: React.FC<Props> = ({ style, children, ...otherProps }) => {
  const navigation = useNavigation<any>();
  return (
    <AppSafeViewScreen style={styles.container}>
      <View style={[styles.imageButtonContainer]}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(-1);
            console.log("tapped");
          }}
        >
          <AppIcon name="close" color="white" size={32} />
        </TouchableOpacity>
      </View>

      <Image
        style={[styles.image]}
        source={require("../assets/images/juice.jpeg")}
        resizeMode="contain"
      />
    </AppSafeViewScreen>
  );
};

export default AppViewImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Theme.BLACK,
  },
  image: {
    width: "100%",
    height: "100%",
    maxHeight: 600,
    borderRadius: 6,
  },

  imageButtonContainer: {
    // width: "100%",
    position: "absolute",
    alignSelf: "flex-start",
    // backgroundColor: "red",
    zIndex: 1,
    top: 60,
    paddingHorizontal: Theme.PADDING_HORIZONTAL_SCREEN,
  },
});
