import { createStackNavigator } from '@react-navigation/stack';
import CardDetails from '../components/cards/CardDetails';
import HomeScreen from '../screens/Home/HomeScreen';
import { ROUTES_NAMES } from './Routes';


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
      headerBackTitleStyle: false,
      headerShown: false,
    }} initialRouteName={ROUTES_NAMES.HOMESCREEN} >
      <Stack.Screen name={ROUTES_NAMES.HOMESCREEN} component={HomeScreen}/>
    <Stack.Screen name={ROUTES_NAMES.CARD_DETAILS} component={CardDetails}  options={{ title: 'Overview', presentation:'modal' }}/>
  </Stack.Navigator>
  )
}

export default HomeScreenNavigator;

