import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Pressable,
} from 'react-native';

// Icons
import HouseIcon from '../assets/HouseIcon';

// redux
import { useDispatch } from 'react-redux';
import { setPlayerCnt } from '../redux/actions/index';

export default function WordScreePlayer({ navigation }) {
  const dispatch = useDispatch();
  const handlePlayerCntChange = playerCnt => {
    dispatch(setPlayerCnt(playerCnt));
  };

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
      height: '60%',
      justifyContent: 'center',
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
    theWordText: {
      color: 'white',
      fontSize: 30,
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
      <View style={styles.containerTop}>
        <Pressable>
          {/* view that does nothing but takes space */}
          <View style={{ width: 20 }} />
        </Pressable>

        <Pressable
          onPress={() => {
            handlePlayerCntChange(1);
            navigation.navigate('LandingScreen');
          }}>
          <HouseIcon />
        </Pressable>
      </View>
      <View style={styles.containerUpp}>
        <Text style={styles.textHeader}>Guess who?</Text>
      </View>

      <View style={styles.containerMid}>
        <View style={styles.textContainter}>
          <Text style={styles.text1}>Catch</Text>
          <Text style={styles.text2}>Liar</Text>
        </View>
      </View>

      <View style={styles.bottomBtnContainter}>
        <TouchableHighlight
          onPress={() => {
            handlePlayerCntChange(1);
            navigation.navigate('LandingScreen');
          }}
          underlayColor={styles.btnsOnPress}
          style={styles.bottomBtn}>
          <Text style={styles.plainText}>Return Home</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
