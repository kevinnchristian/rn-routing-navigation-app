import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/home';
import CameraScreen from '../screens/camera';
import MapsScreen from '../screens/maps';
import NotificationsScreen from '../screens/notifications';

const { Navigator, Screen } = createStackNavigator();

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: true,
        }}
      >
        <Screen
          name="Home"
          component={HomeScreen}
        />
        <Screen
          name="Camera"
          component={CameraScreen}
        />
        <Screen
          name="Maps"
          component={MapsScreen}
        />
        <Screen
          name="Notifications"
          component={NotificationsScreen}
        />
      </Navigator>
    </NavigationContainer>
  );
}