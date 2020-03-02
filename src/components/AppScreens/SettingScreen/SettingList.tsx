import React from 'react';
import {
  View, Text, FlatList, StyleSheet, TouchableOpacity,
} from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { AntDesign } from '@expo/vector-icons';
import NavigationService from '../../../utils/NavigationService';
import { logout } from '../../../utils/methodFactory';

const listItem = ['お問い合わせ', '利用規約', 'プライバシー・ポリシー'];

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
  signOut: {
    position: 'absolute',
    right: 0,
    bottom: 60,
    height: 50,
    backgroundColor: 'tomato',
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  signOutTitle: {
    fontSize: 19,
    color: 'white',
  },
});

const navigateOptions = (title) => {
  let navigateRouteName = '';
  switch (title) {
    case 'お問い合わせ':
      navigateRouteName = 'Contact';
      break;
    case '利用規約':
      navigateRouteName = 'Rule';
      break;
    case 'プライバシー・ポリシー':
      navigateRouteName = 'PrivacyPolicy';
      break;
    default:
  }
  NavigationService.navigate(navigateRouteName, {});
};

const Item = ({ title, index }) => (
  <TouchableOpacity
    style={{ ...styles.itemContainer, borderTopWidth: index === 0 ? 1 : 0 }}
    onPress={() => navigateOptions(title)}
  >
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
    <TouchableOpacity style={styles.signOut} onPress={() => logout()}>
      <Text style={styles.signOutTitle}>Sign Out</Text>
    </TouchableOpacity>
  </View>
);

SettingList.navigationOptions = {
  title: '設定',
};

export default SettingList;
