import React from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

//pages
import SplashScreen from './screens/SplashScreen';
import LandingScreen from './screens/LandingScreen';
import SetPlayersScreen from './screens/SetPlayersScreen';
import SetLiarsScreen from './screens/SetLiarsScreen';
import SetTopicScreen from './screens/SetTopicScreen';
import GameStartScreen from './screens/GameStartScreen';

// redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

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
    <Provider store={store}>
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
            name="SetPlayersScreen"
            component={SetPlayersScreen}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: '#20262B',
              },
            }}
          />
          <Stack.Screen
            name="SetLiarsScreen"
            component={SetLiarsScreen}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: '#20262B',
              },
            }}
          />
          <Stack.Screen
            name="SetTopicScreen"
            component={SetTopicScreen}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: '#20262B',
              },
            }}
          />
          <Stack.Screen
            name="GameStartScreen"
            component={GameStartScreen}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: '#20262B',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
