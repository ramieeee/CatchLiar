import React, { useState } from 'react';
import { StyleSheet, Pressable, Text, View, Image } from 'react-native';
// import LOGO_HAT from '../assets/LOGO_HAT.svg';
// import Hat from '../assets/Hat.png';

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
  text1: {
    color: 'white',
    fontSize: 30,
  },
  text2: {
    color: 'red',
    fontSize: 30,
  },
  img: {
    flex: 1,
    height: 500,
    width: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function LoadingScreen({ navigation }) {
  const [isloading, setIsLoading] = useState(false);

  return (
    <View style={styles.background}>
      {/* <Pressable onPress={() => navigation.navigate('LandingScreen')}> */}
      {/* <Image source={Hat} style={styles.img} /> */}
      <View style={styles.textContainter}>
        <Text style={styles.text1}>Catch</Text>
        <Text style={styles.text2}>Liar</Text>
      </View>
      {/* </Pressable> */}
    </View>
  );
}
