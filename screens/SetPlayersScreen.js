import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableHighlight,
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer';
import { faGamepad } from '@fortawesome/free-solid-svg-icons/faGamepad';
import { faMessage } from '@fortawesome/free-solid-svg-icons/faMessage';
import { faWrench } from '@fortawesome/free-solid-svg-icons/faWrench';

export default function LandingScreen({ navigation }) {
  const styles = StyleSheet.create({
    background: {
      backgroundColor: '#20262B',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
    containerUpp: {
      alignItems: 'center',
      justifyContent: 'center',
      height: '20%',
      paddingTop: 70,
    },
    containerMid: {
      height: '60%',
      justifyContent: 'center',
    },
    containerInnerMid: {
      height: '50%',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    bottomBtnContainter: {
      height: '20%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 70,
    },

    textHeader: {
      color: 'white',
      fontSize: 24,
    },
    plainText: {
      color: 'white',
      fontSize: 18,
    },
    btnsOnPress: '#88AEB6',
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
        <Text style={styles.textHeader}>Set Number of Players</Text>
      </View>

      <View style={styles.containerMid}></View>

      <View style={styles.bottomBtnContainter}>
        <TouchableHighlight
          // onPress={() => navigation.navigate('SetPlayerScreen')}
          underlayColor={styles.btnsOnPress}
          onPress={() => console.log('hi')}
          style={styles.bottomBtn}>
          <Text style={styles.plainText}>Next</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
