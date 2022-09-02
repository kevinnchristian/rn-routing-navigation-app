import {
  View,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import HomeScreen from './screens/home';
import CameraScreen from './screens/camera';
import MapsScreen from './screens/maps';

export default function BottomNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'red'
        }}
      >
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                name='home'
                color={color}
                size={size}
              />
            )
          }}
        />

        <Tab.Screen
          name='Camera'
          component={CameraScreen}
          options={{
            tabBarLabel: 'Camera',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                name='camera-alt'
                color={color}
                size={size}
              />
            )
          }}
        />

        <Tab.Screen
          name='Maps'
          component={MapsScreen}
          options={{
            tabBarLabel: 'Maps',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                name='location-on'
                color={color}
                size={size}
              />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}