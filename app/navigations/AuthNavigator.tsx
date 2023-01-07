import { createStackNavigator } from '@react-navigation/stack';
import { AppViewImage } from '../components';
import ForgetPassword from '../screens/Auth/ForgetPassword';
import Login from '../screens/Auth/Login';
import Signup from '../screens/Auth/Signup';
import VerifyMobile from '../screens/Auth/VerifyMobile';

import WelcomeScreen from '../screens/Welcome/WelcomeScreen';
import DrawerNavigator from './DrawerNavigator';
import { ROUTES_NAMES } from './Routes';
import TabsNavigator from './TabsNavigator';

const Stack = createStackNavigator();

const AuthNavigator = () => {
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
    }} initialRouteName={ROUTES_NAMES.WELCOME}>
      <Stack.Screen name={ROUTES_NAMES.VIEW_IMAGE} component={AppViewImage} options={{ presentation:'modal' }}/>
      
    <Stack.Screen name={ROUTES_NAMES.WELCOME} component={WelcomeScreen} />
    <Stack.Screen name={ROUTES_NAMES.LOGIN} component={Login} />
    <Stack.Screen name={ROUTES_NAMES.SIGNUP} component={Signup}  options={{ title: 'Overview' }}/>
    <Stack.Screen name={ROUTES_NAMES.VERIFY_MOBILE} component={VerifyMobile} options={{headerShown:false}}/>
    <Stack.Screen name={ROUTES_NAMES.FORGET_PASSORD} component={ForgetPassword}/>
    
    <Stack.Screen name={ROUTES_NAMES.TABS_NAVIGATOR} component={TabsNavigator} />
    <Stack.Screen name={ROUTES_NAMES.DRAWER_NAVIGATOR} component={DrawerNavigator} />
  </Stack.Navigator>
  )
}

export default AuthNavigator;

