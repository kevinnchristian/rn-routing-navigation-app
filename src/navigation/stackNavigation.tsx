import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/home';
import CameraScreen from '../screens/camera';
import MapsScreen from '../screens/maps';
import NotificationsScreen from '../screens/notifications';
import SlideAnimationScreen from '../screens/slideAnimation';
import SlideHorizontalAnimationScreen from '../screens/slideHorizontalAnimation';
import DragEffect from '../screens/dragEffects';
import BreatheEffect from '../screens/breathe/Breathe';

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
        <Screen
          name="Slide Animation"
          component={SlideAnimationScreen}
        />
        <Screen
          name="Slide Horizontal Animation"
          component={SlideHorizontalAnimationScreen}
        />
        <Screen
          name="Drag Effect"
          component={DragEffect}
        />
        <Screen
          name="Breathe Effect"
          component={BreatheEffect}
        />
      </Navigator>
    </NavigationContainer>
  );
}