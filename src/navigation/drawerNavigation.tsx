import {
  View,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/home';
import CameraScreen from '../screens/camera';
import MapsScreen from '../screens/maps';
import NotificationsScreen from '../screens/notifications';
import SlideAnimationScreen from '../screens/slideAnimation';
import SlideHorizontalAnimationScreen from '../screens/slideHorizontalAnimation';

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
          name='Notifications'
          component={NotificationsScreen}
        />

        <Drawer.Screen
          name='Slide Animation'
          component={SlideAnimationScreen}
        />

        <Drawer.Screen
          name='Slide Horizontal Animation'
          component={SlideHorizontalAnimationScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}