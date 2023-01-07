import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import "react-native-gesture-handler";

import AuthNavigator from "./app/navigations/AuthNavigator";
import { AppOfflineAlert } from "./app/components";
import { store } from "./app/store/Store";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <AppOfflineAlert />
      
      <NavigationContainer>
      <Provider store={store}>
        <AuthNavigator />
      </Provider>
      </NavigationContainer>
    </>
  );
}
