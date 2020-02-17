import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: Constants.statusBarHeight,
    height: 70,
    marginRight: 20,
    marginLeft: 20,
    borderBottomColor: '#a9a9a9',
    borderBottomWidth: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 28,
    fontWeight: '500',
    marginLeft: 10,
  },
  headerIcon: {
    marginRight: 10,
  },
});

type HeaderProps = {
  title: string;
  icon?: React.ReactElement;
};

const Header: React.FC<HeaderProps> = ({ title, icon }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{title}</Text>
    {
      icon && (
        <View style={styles.headerIcon}>{icon}</View>
      )
    }
  </View>
);

export default Header;
