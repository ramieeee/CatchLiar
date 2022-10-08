import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Pressable,
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
import { setTopic } from '../redux/actions/index';

// item component
function Item({ title, id }) {
  const dispatch = useDispatch();

  const handleTopic = topicId => {
    dispatch(setTopic(topicId));
  };

  return (
    <TouchableHighlight
      onPress={() => {
        handleTopic(id);
      }}
      underlayColor={styles.btnsOnPress}
      style={styles.topicBtn}>
      <Text style={styles.plainText}>{title}</Text>
    </TouchableHighlight>
  );
}

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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
    marginHorizontal: 10,
    backgroundColor: '#42595F',
    width: 160,
    height: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default function SetLiarsScreen({ navigation }) {
  const test = useSelector(store => store.playInfo);

  const renderItem = ({ item }) => <Item title={item.topic} id={item.id} />;

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
        <SafeAreaView>
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
