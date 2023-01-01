import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import AuthNavigator from "./app/navigations/AuthNavigator";

import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </>
  );
}
