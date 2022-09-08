/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

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
  },
  textHead: {
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    textAlign: "center",
    top:100,
  }
  
});

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <View style={styles.view}>
      <Text style={styles.textHead}>Set number of Players</Text>
    </View>
  );
};

export default App;
