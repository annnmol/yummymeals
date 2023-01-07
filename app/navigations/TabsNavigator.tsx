import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from 'react-native';

import { AppIcon } from "../components";
import AccountScreen from "../screens/Account/AccountScreen";
import AddItemScreen from "../screens/AddListings/AddItemScreen";
import MessageList from "../screens/Messages/MessagesList";

import Search from "../screens/Search/Search";
import { Theme } from "../utils";


import HomeScreenNavigator from "./HomeScreenNavigator";
import { ROUTES_NAMES } from "./Routes";
import TabbarCtaButton from "./TabbarCtaButton";

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
        tabBarActiveBackgroundColor: Theme.TRANSPARENT,
        tabBarActiveTintColor: Theme.PRIMARY,
        tabBarInactiveBackgroundColor: Theme.WHITE,
        tabBarInactiveTintColor: Theme.GREY_DARK,
        tabBarShowLabel: true,
       tabBarStyle:styles.customTabBarStyle,
      }}
      initialRouteName={ROUTES_NAMES.HOMESCREEN_NAVIGATOR}
    >
      <Tab.Screen
        name={ROUTES_NAMES.HOMESCREEN_NAVIGATOR}
        component={HomeScreenNavigator}
        options={{
          tabBarIcon: ({ focused, size, color }) => <AppIcon name={focused ? 'home' : "home-outline"} size={size} color={color} />,
        }}
      />
      <Tab.Screen name={ROUTES_NAMES.SEARCH} component={Search}  options={{
          tabBarIcon: ({ focused, size, color }) => <AppIcon name={focused ? 'heart' : "heart-outline"} size={size} color={color} />,
        }} />
      <Tab.Screen name={ROUTES_NAMES.ADD_ITEM} component={AddItemScreen} options={{
        tabBarButton: (props) => <TabbarCtaButton {...props} />,
          // tabBarIcon: ({ focused, size, color }) => <AppIcon name={focused ? 'plus-circle' : "plus"} size={size} color={color} />,
        }}/>
      <Tab.Screen name={ROUTES_NAMES.MESSAGE} component={MessageList}  options={{
          tabBarIcon: ({ focused, size, color }) => <AppIcon name={focused ? 'chat' : "chat-outline"} size={size} color={color} />,
        }}/>
      <Tab.Screen name={ROUTES_NAMES.ACCOUNT} component={AccountScreen}  options={{
          tabBarIcon: ({ focused, size, color }) => <AppIcon name={focused ? 'account' : "account-outline"} size={size} color={color} />,
        }}/>
    </Tab.Navigator>
  );
};

export default TabsNavigator;

const styles = StyleSheet.create({
  customTabBarStyle: {
   borderTopWidth:0,
  }
});
