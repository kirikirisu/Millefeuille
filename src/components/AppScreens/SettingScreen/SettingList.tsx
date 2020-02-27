import React from 'react';
import {
  View, Text, FlatList, StyleSheet,
} from 'react-native';

const listItem = ['お問い合わせ', '利用規約', 'プライバシー・ポリシー', 'ログアウト'];

const Item = ({ title }) => (
  <View><Text>{title}</Text></View>
);

const SettingList = () => (
  <View style={{ flex: 1 }}>
    <FlatList
      data={listItem}
      renderItem={({ item, index }) => <Item title={item} />}
      keyExtractor={(item) => item}
    />
  </View>
);

export default SettingList;
