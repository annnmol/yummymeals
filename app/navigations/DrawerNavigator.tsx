import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from '../screens/Settings/Settings';
import { ROUTES_NAMES } from './Routes';

import TabsNavigator from './TabsNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator useLegacyImplementation={false} initialRouteName={ROUTES_NAMES.SETTINGS}>
    <Drawer.Screen name={ROUTES_NAMES.SETTINGS} component={Settings} />
  </Drawer.Navigator>
  )
}

export default DrawerNavigator

