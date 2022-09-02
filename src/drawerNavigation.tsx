import {
  View,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/home';
import CameraScreen from './screens/camera';
import MapsScreen from './screens/maps';
import NotificationsScreen from './screens/notifications';

export default function DrawerNavigation() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer

    >
      <Drawer.Navigator
        initialRouteName='Home'
      >
        <Drawer.Screen
          name='Home'
          component={HomeScreen}
        />

        <Drawer.Screen
          name='Camera'
          component={CameraScreen}
        />

        <Drawer.Screen
          name='Maps'
          component={MapsScreen}
        />

        <Drawer.Screen
          name='Notification'
          component={NotificationsScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}