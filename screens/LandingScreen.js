import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableHighlight,
} from 'react-native';

export default function LandingScreen({ navigation }) {
  const styles = StyleSheet.create({
    background: {
      backgroundColor: '#20262B',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerUpp: {
      alignItems: 'center',
      justifyContent: 'center',
      height: '30%',
      backgroundColor: 'pink',
    },
    containerMid: {
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '40%',
      backgroundColor: 'blue',
    },
    textHeader: {
      color: 'white',
      fontSize: 24,
    },
    plainText: {
      color: 'white',
      fontSize: 18,
    },
    midBtns: {
      width: 290,
      height: 46,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    midBtnsOnPress: '#DDDDDD',
    bottomBtn: {
      backgroundColor: '#42595F',
      width: 290,
      height: 46,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  return (
    <View style={styles.background}>
      <View style={styles.containerUpp}>
        <TouchableHighlight
          underlayColor={styles.midBtnsOnPress}
          style={styles.midBtns}
          onPress={() => console.log('hi')}>
          <Text style={styles.textHeader}>Welcome</Text>
        </TouchableHighlight>
      </View>

      <View style={styles.containerMid}>
        <TouchableHighlight
          underlayColor={styles.midBtnsOnPress}
          style={styles.midBtns}
          onPress={() => console.log('hi')}>
          <Text style={styles.plainText}>How to play</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={styles.midBtnsOnPress}
          style={styles.midBtns}
          onPress={() => console.log('hi')}>
          <Text style={styles.plainText}>Patch Note</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={styles.midBtnsOnPress}
          style={styles.midBtns}
          onPress={() => console.log('hi')}>
          <Text style={styles.plainText}>Settings</Text>
        </TouchableHighlight>
      </View>

      <TouchableHighlight
        // onPress={() => navigation.navigate('SetPlayerScreen')}
        underlayColor={styles.midBtnsOnPress}
        onPress={() => console.log('hi')}
        style={styles.bottomBtn}>
        <Text style={styles.plainText}>Play</Text>
      </TouchableHighlight>
    </View>
  );
}
