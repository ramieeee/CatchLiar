import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Pressable,
} from 'react-native';

// Icons
import HouseIcon from '../assets/HouseIcon';
import GoBackIcon from '../assets/GoBackIcon';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { setPlayerCnt } from '../redux/actions/index';

export default function GameStartScreen({ navigation }) {
  const dispatch = useDispatch();
  const playerCnt = useSelector(store => store.playInfo.playerCnt);
  const liarIndex = useSelector(store => store.playInfo.liarIndex);

  const handlePlayerCntChange = playerCnt => {
    dispatch(setPlayerCnt(playerCnt));
  };

  const changePlayerCnt = () => {
    if (playerCnt === 1) {
      return playerCnt + 'st';
    } else if (playerCnt === 2) {
      return playerCnt + 'nd';
    } else if (playerCnt === 3) {
      return playerCnt + 'rd';
    } else {
      return playerCnt + 'th';
    }
  };

  const playerCntWithLetter = changePlayerCnt();

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
      if (liarIndex.includes(playerCnt)) {
        navigation.navigate('WordScreenLiar');
      } else {
        navigation.navigate('WordScreenPlayer');
      }
    } else {
      // do nothing
    }
    this.lastPress = time;
  };

  return (
    <View style={styles.background}>
      <View style={styles.containerTop}>
        <Pressable
          onPress={() => {
            handlePlayerCntChange(1);
            navigation.navigate('SetTopicScreen');
          }}>
          <GoBackIcon />
        </Pressable>
        <View style={styles.textContainter}>
          <Text style={styles.text1}>Catch</Text>
          <Text style={styles.text2}>Liar</Text>
        </View>
        <Pressable
          onPress={() => {
            handlePlayerCntChange(1);
            navigation.navigate('LandingScreen');
          }}>
          <HouseIcon />
        </Pressable>
      </View>
      <View style={styles.containerUpp}>
        <Text style={styles.textHeader}>player {playerCnt}</Text>
      </View>

      {/* Game Start */}
      <View style={styles.containerMid}>
        <View style={styles.containerMidInner}>
          <View>
            <Text style={styles.plainText}>Double Tap the Reveal button</Text>
            <Text style={styles.plainText}>
              if you are the {playerCntWithLetter} player
            </Text>
          </View>

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
