import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Theme } from "../../utils";
import Constants from "expo-constants";
import AppSafeViewScreen from "../AppSafeViewScreen";

export interface AppActivityLoaderProps {
  setLoading: (status: boolean) => void;
}

export const AppActivityLoader = (
  WrappedComponent: any,
  loadingMessage?: string
) => {
  function AppActivityLoader(props: any) {
    const debounceDelay = 300;
    let isLoadingIntermediate: boolean = true;

    const [isLoading, setIsLoading] = useState<boolean>(false);
    let timeoutVar: any = null;

    const setLoadingState = (isComponentLoading: boolean) => {
      isLoadingIntermediate = isComponentLoading;
      if (!timeoutVar) {
        timeoutVar = setTimeout(() => {
          setIsLoading(isLoadingIntermediate);
          timeoutVar = null;
        }, debounceDelay);
      }
    };

    return (
      <>
        {isLoading && (
          <AppSafeViewScreen style={styles.container}>
            <View style={styles.loaderContainer}>

            <ActivityIndicator size="large" color={Theme.PRIMARY} />
            </View>
          </AppSafeViewScreen>
        ) }
          <WrappedComponent {...props} setLoading={setLoadingState} />

      </>
    );
  }
  return AppActivityLoader;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 10,
    flex: 1,
    top:0,
    right:0,
    left:0,
    bottom:0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:Theme.TRANSPARENT,
  },

  loaderContainer: {
    width: 40,
    height: 40,
    borderRadius:24,
    backgroundColor: Theme.WHITE,
    justifyContent: "center",
    alignItems: "center",
    elevation:1,
  }
});
