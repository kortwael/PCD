import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import loginScreen from './Screens/loginScreen'
import profileScreen from './Screens/profileScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions = {{
          headerShown: false
        }}
        initialRouteName = "Login"
      >
        <Stack.Screen
          name="Login"
          headerMode="none"
          component={loginScreen}
        />
        <Stack.Screen
          name="Profile"
          component={profileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


