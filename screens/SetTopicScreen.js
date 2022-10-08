import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Pressable,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native';

// Icons
import HouseIcon from '../assets/HouseIcon';
import GoBackIcon from '../assets/GoBackIcon';

// topic data list
import topicList from '../jsonData/topicList.json';

// redux
import { useSelector, useDispatch } from 'react-redux';

const Item = ({ title, id }) => (
  <TouchableHighlight
    onPress={() => console.log(id)}
    underlayColor={styles.btnsOnPress}
    style={styles.topicBtn}>
    <Text style={styles.plainText}>{title}</Text>
  </TouchableHighlight>
);

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
    flex: 1,
    flexDirection: 'row',
    height: '80%',
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
  btnsOnPress: '#88AEB6',
  topicBtn: {
    marginVertical: 20,
    marginHorizontal: 20,
    backgroundColor: '#42595F',
    width: 140,
    height: 80,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default function SetLiarsScreen({ navigation }) {
  const test = useSelector(store => store.playInfo);

  const renderItem = ({ item }) => (
    <Item title={item.topic} id={item.id} style={{ width: '45%' }} />
  );

  return (
    <View style={styles.background}>
      <View style={styles.containerTop}>
        <Pressable onPress={() => navigation.navigate('SetLiarsScreen')}>
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
        <Text style={styles.textHeader}>Choose Topic</Text>
      </View>
      <View style={styles.containerMid}>
        <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
          <FlatList
            data={topicList}
            renderItem={renderItem}
            numColumns={2}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}
