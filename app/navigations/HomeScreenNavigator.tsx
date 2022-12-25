import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import NewsCard from '../screens/NewsCard/NewsCard';
import { ROUTES_NAMES } from '../utils/defaults';

const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerTintColor: 'white',
      headerTitleAlign: "center",
      headerPressOpacity:1,
      headerStyle: {
        backgroundColor: 'green',     
      },
      headerBackTitleStyle:false,
    }} initialRouteName={ROUTES_NAMES.HOMESCREEN}>
    <Stack.Screen name={ROUTES_NAMES.HOMESCREEN} component={HomeScreen} />
    <Stack.Screen name={ROUTES_NAMES.NEWSCARD} component={NewsCard}  options={{ title: 'Overview', presentation:'modal' }}/>
  </Stack.Navigator>
  )
}

export default HomeScreenNavigator;

