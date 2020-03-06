import React from 'react';
import {
  View, Text, FlatList, StyleSheet, TouchableOpacity,
} from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { AntDesign } from '@expo/vector-icons';
import { widthPercentageToDP as w, heightPercentageToDP as h } from 'react-native-responsive-screen';
import NavigationService from '../../../utils/NavigationService';
import { logout } from '../../../utils/methodFactory';

const APP_VERSION = '1.0.0';
const listItem = ['お問い合わせ', 'プライバシー・ポリシー', 'バーション'];

type ItemElement = {
  title: string;
  index: number;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    height: h(6.5),
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
    bottom: h(10),
    height: h(7),
    backgroundColor: 'tomato',
    borderTopLeftRadius: h(5),
    borderBottomLeftRadius: h(5),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  signOutTitle: {
    fontSize: h(2.8),
    color: 'white',
  },
});

const navigateOptions = (title) => {
  let navigateRouteName = '';
  switch (title) {
    case 'お問い合わせ':
      navigateRouteName = 'Contact';
      break;
    case 'プライバシー・ポリシー':
      navigateRouteName = 'PrivacyPolicy';
      break;
    default:
  }
  NavigationService.navigate(navigateRouteName, {});
};

const Item = React.memo(({ title, index }: ItemElement) => (
  <View>
    {index !== 2
      ? (
        <TouchableOpacity
          style={{ ...styles.itemContainer, borderTopWidth: index === 0 ? 1 : 0 }}
          onPress={() => navigateOptions(title)}
        >
          <Text style={styles.title}>{title}</Text>
          <AntDesign name="right" color="#a9a9a9" size={24} />
        </TouchableOpacity>
      )
      : (
        <View style={{ ...styles.itemContainer, justifyContent: 'flex-start' }}>
          <Text style={styles.title}>{`${title}:`}</Text>
          <Text style={{ ...styles.title, paddingLeft: 10 }}>{`${APP_VERSION}`}</Text>
        </View>
      )}
  </View>
));

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
