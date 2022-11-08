import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Pressable,
  Animated,
} from 'react-native';

// Icons
import HouseIcon from '../assets/HouseIcon';
import GoBackIcon from '../assets/GoBackIcon';

export default function GameStartScreen({ navigation }) {
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
      height: '10%',
      width: '100%',
    },
    containerTop: {
      height: '10%',
      width: '90%',
      paddingTop: 50,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    containerMid: {
      height: '80%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerMidInner: {
      height: '60%',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textHeader: {
      color: 'white',
      fontSize: 24,
    },
    plainText: {
      color: 'white',
      fontSize: 18,
    },
    textContainter: {
      width: 90,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    text1: {
      color: 'white',
      fontSize: 18,
    },
    text2: {
      color: 'red',
      fontSize: 18,
    },
    btnsOnPress: '#E47878',
    btn: {
      backgroundColor: '#C54A4A',
      width: 270,
      height: 210,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnInner: {
      height: '50%',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });

  onDoublePress = () => {
    const time = new Date().getTime();
    const delta = time - this.lastPress;

    const DOUBLE_PRESS_DELAY = 400;
    if (delta < DOUBLE_PRESS_DELAY) {
      doubleClickAnimationReveal();
    } else {
      // do nothing
    }
    this.lastPress = time;
  };

  // fading Game Start
  const textFadeFirst = useRef(new Animated.Value(1)).current;
  const textFadeSecond = useRef(new Animated.Value(0)).current;
  const btnAnimationY = useRef(new Animated.Value(1)).current;
  const bottmBtnAnimationY = useRef(new Animated.Value(0)).current;

  // btn animation
  const doubleClickAnimationReveal = () => {
    Animated.sequence([
      Animated.timing(textFadeFirst, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(btnAnimationY, {
          toValue: -200,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(bottmBtnAnimationY, {
          toValue: 46,
          duration: 200,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(textFadeSecond, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const [playerCnt, setPlayerCnt] = useState(1);

  return (
    <View style={styles.background}>
      <View style={styles.containerTop}>
        <Pressable onPress={() => navigation.navigate('SetTopicScreen')}>
          <GoBackIcon />
        </Pressable>
        <View style={styles.textContainter}>
          <Text style={styles.text1}>Catch</Text>
          <Text style={styles.text2}>Liar</Text>
        </View>
        <Pressable onPress={() => navigation.navigate('LandingScreen')}>
          <HouseIcon />
        </Pressable>
      </View>
      <View style={styles.containerUpp}>
        <Text style={styles.textHeader}>player count</Text>
      </View>

      {/* Game Start */}
      <View style={styles.containerMid}>
        <View style={styles.containerMidInner}>
          <Text style={styles.plainText}>Double Tap the Reveal button</Text>
          <Text style={styles.plainText}>if you are the 1st player</Text>

          {/* btn */}
          <TouchableHighlight
            onPress={() => {
              onDoublePress();
            }}
            underlayColor={styles.btnsOnPress}
            style={styles.btn}>
            <View>
              <Text style={styles.plainText}>Reveal</Text>
              <Text style={styles.plainText}>Liar or not?</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}
