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

export default function SetPlayersScreen({ navigation }) {
  const [selectedPlayers, setSelectedPlayers] = useState();
  const values = [
    3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

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
      width: '100%',
    },
    containerTop: {
      width: '90%',
      flexDirection: 'row',
      // backgroundColor: 'pink',
      justifyContent: 'space-between',
      paddingBottom: 20,
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
      <View style={styles.containerUpp}>
        <View style={styles.containerTop}>
          <Pressable onPress={() => navigation.navigate('LandingScreen')}>
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
        <View>
          <Text style={styles.textHeader}>Set Number of Players</Text>
        </View>
      </View>

      <View style={styles.containerMid}>
        <View>
          <Text style={styles.plainText}>Players</Text>
        </View>
        <View>
          <Picker
            style={{
              height: '100%',
              width: 200,
              dropdownIconColor: 'white',
              justifyContent: 'center',
            }}
            selectedValue={selectedPlayers}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedPlayers(itemValue)
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
          // onPress={() => navigation.navigate('SetPlayerScreen')}
          underlayColor={styles.btnsOnPress}
          onPress={() => console.log(selectedPlayers)}
          style={styles.bottomBtn}>
          <Text style={styles.plainText}>Next</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
