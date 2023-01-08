import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useLayoutEffect } from "react";

import { StatusBar } from "expo-status-bar";
import { AppOfflineAlert } from "../components";
import useAuthService from "../services/authServices/useAuthService";
import AuthNavigator from "./AuthNavigator";
import TabsNavigator from "./TabsNavigator";

SplashScreen.preventAutoHideAsync();
const RootNavigator = () => {
 
  const { user, isAppReady } = useAuthService();

  const onLayoutRootView = useCallback(async () => {
    if (isAppReady) {
      await SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  useLayoutEffect(() => {
    onLayoutRootView();
  }, [isAppReady]);

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        {user ? <TabsNavigator /> : <AuthNavigator />}
      <AppOfflineAlert />
      </NavigationContainer>
    </>
  );
};

export default RootNavigator;
