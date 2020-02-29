import React from 'react';
import {
  View, Text, FlatList, StyleSheet, TouchableOpacity,
} from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { AntDesign } from '@expo/vector-icons';

const listItem = ['お問い合わせ', '利用規約', 'プライバシー・ポリシー', 'ログアウト'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: '#a9a9a9',
    borderBottomWidth: 1,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 16,
    color: 'rgb(57, 62, 70)',
  },
});

const Item = ({ title, index }) => (
  <TouchableOpacity style={{ ...styles.itemContainer, borderTopWidth: index === 0 ? 1 : 0 }}>
    <Text style={styles.title}>{title}</Text>
    <AntDesign name="right" color="#a9a9a9" size={24} />
  </TouchableOpacity>
);

const SettingList: NavigationStackScreenComponent = () => (
  <View style={styles.container}>
    <FlatList
      data={listItem}
      renderItem={({ item, index }) => <Item title={item} index={index} />}
      keyExtractor={(item) => item}
    />
  </View>
);

SettingList.navigationOptions = {
  title: '設定',
};

export default SettingList;