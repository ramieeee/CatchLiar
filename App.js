import React from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//pages
import LoadingScreen from './screens/LoadingScreen';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#191F2D',
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

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="hello" component={LoadingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
