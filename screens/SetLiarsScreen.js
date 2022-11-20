import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Pressable,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

// Icons
import HouseIcon from '../assets/HouseIcon';
import GoBackIcon from '../assets/GoBackIcon';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { setLiar } from '../redux/actions/index';
import { setLiarIndex } from '../redux/actions/index';

export default function SetLiarsScreen({ navigation }) {
  const values = [];

  const dispatch = useDispatch();
  const player = useSelector(store => store.playInfo.playerNum);
  const liar = useSelector(store => store.playInfo.liarNum);

  for (let i = 1; i < player; i++) {
    values.push(i);
  }

  const handleLiarNumChange = liarNum => {
    dispatch(setLiar(liarNum));
  };

  const handleLiarIndexChange = liarIndex => {
    dispatch(setLiarIndex(liarIndex));
  };

  const chooseLiarsRandom = () => {
    const randomLiars = [];
    while (randomLiars.length < liar) {
      const num = Math.floor(Math.random() * player) + 1;
      if (!randomLiars.includes(num)) {
        randomLiars.push(num);
      }
    }
    handleLiarIndexChange(randomLiars);
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
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'pink',
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
    textContainter: {
      width: 90,
      flexDirection: 'row',
      alignItems: 'center',
      // backgroundColor: 'pink',
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
        <Pressable onPress={() => navigation.navigate('SetPlayersScreen')}>
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
        <Text style={styles.textHeader}>Set Number of Liars</Text>
      </View>

      <View style={styles.containerMid}>
        <View>
          <Text style={styles.plainText}>Liars</Text>
        </View>
        <View>
          <Picker
            style={{
              height: '100%',
              width: 200,
              dropdownIconColor: 'white',
              justifyContent: 'center',
            }}
            selectedValue={liar}
            onValueChange={(itemValue, itemIndex) =>
              handleLiarNumChange(itemValue)
            }>
            {values.map(value => {
              return (
                <Picker.Item
                  label={value.toString()}
                  value={value}
                  color="white"
                  key={value}
                />
              );
            })}
          </Picker>
        </View>
      </View>

      <View style={styles.bottomBtnContainter}>
        <TouchableHighlight
          onPress={() => {
            chooseLiarsRandom();
            navigation.navigate('SetTopicScreen');
          }}
          underlayColor={styles.btnsOnPress}
          style={styles.bottomBtn}>
          <Text style={styles.plainText}>Next</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
