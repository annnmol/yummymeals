import { DefaultTheme } from "@react-navigation/native";
import { Theme } from "../utils";


export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary:Theme.PRIMARY,
    background: Theme.WHITE_LIGHT,
  },
};
