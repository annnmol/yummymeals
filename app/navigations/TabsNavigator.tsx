import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "../screens/Account/Account";
import HomeScreen from "../screens/Home/HomeScreen";
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
      }}
      initialRouteName={ROUTES_NAMES.HOMESCREEN_NAVIGATOR}
    >
      <Tab.Screen name={ROUTES_NAMES.HOMESCREEN_NAVIGATOR} component={HomeScreenNavigator} />
      <Tab.Screen name={ROUTES_NAMES.SEARCH} component={Search} />
      <Tab.Screen name={ROUTES_NAMES.ORDERS} component={Orders} />
      <Tab.Screen name={ROUTES_NAMES.ACCOUNT} component={Account} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
