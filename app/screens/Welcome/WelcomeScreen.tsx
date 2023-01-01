import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  ImageBackground,
  StyleProp,
  StyleSheet,
  View,
} from "react-native";
import { AppButton, AppText } from "../../components";
import { Theme } from "../../customization/Theme";
import { ROUTES_NAMES } from "../../utils/defaults";

interface Props {
  style?: StyleProp<any>;
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const WelcomeScreen: React.FC<Props> = ({ style, children, ...otherProps }) => {

  const navigation = useNavigation<any>();

  return (
    // <AppSafeViewScreen>
    <ImageBackground
      style={[styles.background]}
      source={require("../../assets/images/egg.jpeg")}
    >
      <View style={[styles.logoContainer]}>
        <Image
          style={[styles.logoImage]}
          source={require("../../assets/images/logo.png")}
        />
        <AppText style={styles.LogoCaption}>Get Healthy food in 15mins</AppText>
      </View>
      <View style={[styles.buttonContainer]}>
        <AppButton variant="round"  style={{marginBottom:12}} onPress={() => navigation.navigate(ROUTES_NAMES.LOGIN)}>
          Login
        </AppButton>
        <AppButton variant="round" onPress={() => navigation.navigate(ROUTES_NAMES.TABS_NAVIGATOR)}>
          Register
        </AppButton>
      </View>
    </ImageBackground>
    // </AppSafeViewScreen>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: Theme.PADDING_HORIZONTAL_SCREEN,
    paddingBottom: Theme.PADDING_HORIZONTAL_SCREEN + 6,
  },
  buttonContainer: {
    width: "100%",
  },
 
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    top: "-57%",
    zIndex: 1,
  },
  logoImage: {
    width: 100,
    height: 100,
    marginBottom: 12,
  },
  LogoCaption: {
    fontSize: 22,
    letterSpacing: 1,
    fontWeight: "500",
    color: Theme.TEXT,
  },
});
