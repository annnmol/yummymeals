import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import ImageLogo from "../../assets/images/ImageLogo";

import { AppOfflineAlert, AppSafeViewScreen } from "../../components";
import TopItemListings from "./TopItemsListings";

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  
  // const dispatch = useAppDispatch();
  // const {name} = useAppSelector(useNameStore)

  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(ChangeNameSlice({name:'anmol singh tanwar'}))
  //   }, 2000);
  //  console.log("name ftorm store", name)
  // }, [name])
 

  // get();
  useEffect(() => {
    // setAsyncValue('@storage_Key','anmol')
    // const result =getAsyncValue('@storage_Key')
    // console.log("result", result)
    // setAsyncData("kkkk", {id:1, name:'anmol'});
    // getAsyncData("kkkk");
  
    // console.log("dddddd",getAsyncData("kkkk"))
    // clearAll();
  }, []);

 
  return (
    <AppSafeViewScreen style={styles.container}>
      <ImageLogo/>
      <TopItemListings />

      {/* <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(ROUTES_NAMES.NEWSCARD)}
      >
        <Text>NewsCard</Text>
      </TouchableOpacity>

      <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
      <Animated.View
        style={[{ width: 100, height: 80, backgroundColor: 'black', margin: 30 }, style]}
      />
      <Button
        title="toggle"
        onPress={() => {
          randomWidth.value = Math.random() * 350;
        }}
      />
    </View>
      </View>
       */}
    </AppSafeViewScreen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
});
