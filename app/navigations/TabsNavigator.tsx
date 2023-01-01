import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/Account/AccountScreen";
import AddItemScreen from "../screens/AddListings/AddItemScreen";
import MessageList from "../screens/Messages/MessagesList";

import Orders from "../screens/Orders/Orders";
import Search from "../screens/Search/Search";

import { ROUTES_NAMES } from "../utils/defaults";
import HomeScreenNavigator from "./HomeScreenNavigator";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerPressOpacity: 1,
        headerStyle: {
          backgroundColor: "green",
        },
        headerShown: false,
      }}
      initialRouteName={ROUTES_NAMES.HOMESCREEN_NAVIGATOR}
    >
      <Tab.Screen name={ROUTES_NAMES.HOMESCREEN_NAVIGATOR} component={HomeScreenNavigator} />
      {/* <Tab.Screen name={ROUTES_NAMES.SEARCH} component={Search} /> */}
      <Tab.Screen name={ROUTES_NAMES.ADD_ITEM} component={AddItemScreen} />
      <Tab.Screen name={ROUTES_NAMES.MESSAGE} component={MessageList} />
      <Tab.Screen name={ROUTES_NAMES.ACCOUNT} component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
