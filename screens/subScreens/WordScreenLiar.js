import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Pressable,
} from 'react-native';

// Icons
import HouseIcon from '../../assets/HouseIcon';
import { useSelector, useDispatch } from 'react-redux';

// redux
import { setPlayerCnt } from '../../redux/actions/index';

export default function WordScreeLiar({ navigation }) {
  const dispatch = useDispatch();
  const playerCnt = useSelector(store => store.playInfo.playerCnt);
  const playerNum = useSelector(store => store.playInfo.playerNum);
  const liarNum = useSelector(store => store.playInfo.liarNum);

  const handlePlayerCntChange = playerCnt => {
    dispatch(setPlayerCnt(playerCnt));
  };

  const handlePress = () => {
    console.log('playercnt ' + playerCnt);
    console.log('playernum ' + playerNum);
    console.log('liarNum ' + liarNum);

    if (playerCnt !== playerNum) {
      handlePlayerCntChange(playerCnt + 1);
      navigation.navigate('GameStartScreen');
    } else {
      handlePlayerCntChange(1);
      navigation.navigate('FinalScreen');
    }
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
    midSubContainerTop: {
      height: '80%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    wordBox: {
      height: 120,
      width: 300,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#7F35C9',
    },
    midSubContainerBottom: {
      height: '20%',
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
        <Text style={styles.textHeader}>Player {playerCnt}</Text>
      </View>

      <View style={styles.containerMid}>
        <View style={styles.midSubContainerTop}>
          <Text style={[styles.plainText, { marginBottom: 30 }]}>You are</Text>
          <View style={styles.wordBox}>
            <Text style={styles.theWordText}>a Liar</Text>
          </View>
        </View>
        <View style={styles.midSubContainerBottom}>
          <Text style={styles.plainText}>Press next to hide</Text>
        </View>
      </View>

      <View style={styles.bottomBtnContainter}>
        <TouchableHighlight
          onPress={handlePress}
          underlayColor={styles.btnsOnPress}
          style={styles.bottomBtn}>
          <Text style={styles.plainText}>Next</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
