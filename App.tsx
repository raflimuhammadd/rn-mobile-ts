import 'react-native-gesture-handler'; // Ensure this is at the top
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import ImageScreen from './src/screens/ImageScreen';

// Create the stack navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Image">
        <Stack.Screen
          name="Image"
          component={ImageScreen}
          options={{ title: 'My App' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
