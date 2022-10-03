import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableHighlight,
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
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
      // backgroundColor: 'pink',
      paddingTop: 70,
    },
    containerMid: {
      height: '60%',
      justifyContent: 'center',
      // backgroundColor: 'blue',
    },
    containerInnerMid: {
      // backgroundColor: 'blue',
      height: '50%',
      justifyContent: 'space-between',
      alignItems: 'center',
      // backgroundColor: 'gold',
    },
    bottomBtnContainter: {
      height: '20%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 70,
    },
    midBtns: {
      width: 290,
      height: 46,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: 'green',
    },
    midBtnsInnerContainer: {
      width: '80%',
      flexDirection: 'row',
      alignItems: 'center',
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
        <Text style={styles.textHeader}>Welcome</Text>
      </View>

      <View style={styles.containerMid}>
        <View style={styles.containerInnerMid}>
          {/* how to play */}
          <TouchableHighlight
            underlayColor={styles.btnsOnPress}
            style={styles.midBtns}
            onPress={() => console.log('')}>
            <View style={styles.midBtnsInnerContainer}>
              <Text style={styles.plainText}>How to play</Text>
              <FontAwesomeIcon icon={faGamepad} color="white" size={20} />
            </View>
          </TouchableHighlight>

          {/* patch note */}
          <TouchableHighlight
            underlayColor={styles.btnsOnPress}
            style={styles.midBtns}
            onPress={() => console.log('')}>
            <View style={styles.midBtnsInnerContainer}>
              <Text style={styles.plainText}>Patch Note</Text>
              <FontAwesomeIcon icon={faMessage} color="white" />
            </View>
          </TouchableHighlight>

          {/* settings */}
          <TouchableHighlight
            underlayColor={styles.btnsOnPress}
            style={styles.midBtns}
            onPress={() => console.log('')}>
            <View style={styles.midBtnsInnerContainer}>
              <Text style={styles.plainText}>Settings</Text>
              <FontAwesomeIcon icon={faWrench} color="white" />
            </View>
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.bottomBtnContainter}>
        <TouchableHighlight
          underlayColor={styles.btnsOnPress}
          onPress={() => navigation.navigate('SetPlayersScreen')}
          style={styles.bottomBtn}>
          <Text style={styles.plainText}>Play</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
