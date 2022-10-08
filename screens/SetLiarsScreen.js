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

export default function SetLiarsScreen({ navigation }) {
  //   다음에 할때 밸류 정하는 알고리즘 정할 것. 플레이어 수에 따라서 벨류를 넣어야함
  const values = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const dispatch = useDispatch();
  const liar = useSelector(store => store.playInfo.liar);
  const test = useSelector(store => store.playInfo);

  const handleLiarNumChange = liarNum => {
    dispatch(setLiar(liarNum));
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
          onPress={() => navigation.navigate('SetTopicScreen')}
          underlayColor={styles.btnsOnPress}
          style={styles.bottomBtn}>
          <Text style={styles.plainText}>Next</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
