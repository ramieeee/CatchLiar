import React from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

//pages
import SplashScreen from './screens/SplashScreen';
import LandingScreen from './screens/LandingScreen';
import SetPlayerScreen from './screens/SetPlayerScreen';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#20262B',
  },
  textHead: {
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    textAlign: 'center',
    top: 100,
    color: 'white',
  },
});

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: '#20262B',
            },
          }}
        />
        <Stack.Screen
          name="SetPlayerScreen"
          component={SetPlayerScreen}
          options={{
            headerShown: false,

            headerStyle: {
              backgroundColor: '#20262B',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
