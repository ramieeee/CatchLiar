import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
} from 'react-native';

export default function LandingScreen({ navigation }) {
  const styles = StyleSheet.create({
    background: {
      backgroundColor: '#20262B',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textContainter: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      width: 140,
      justifyContent: 'space-between',
    },
    textHeader: {
      color: 'white',
      fontSize: 24,
    },
    plainText: {
      color: 'white',
      fontSize: 18,
    },
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
      <View>
        <Text style={styles.textHeader}>Welcome</Text>
        <Text style={styles.plainText}>How to play</Text>
        <Text style={styles.plainText}>Patch Note</Text>
        <Text style={styles.plainText}>Who Made It</Text>
      </View>
      <Pressable onPress={() => navigation.navigate('SetPlayerScreen')}>
        <View style={styles.bottomBtn}>
          <Text style={styles.plainText}>Play</Text>
        </View>
      </Pressable>
    </View>
  );
}
