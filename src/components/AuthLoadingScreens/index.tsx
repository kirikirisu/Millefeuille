import React from 'react';
import {
  ActivityIndicator, View, StyleSheet, StatusBar,
} from 'react-native';
import { NavigationSwitchScreenComponent, NavigationSwitchProp } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface Props {
  navigation: NavigationSwitchProp;
}

const AuthLoadingScreen: NavigationSwitchScreenComponent<Props> = ({ navigation }) => {
  console.log('hello');

  const transition = () => {
    navigation.navigate('App');
  };

  setTimeout(transition, 2000);
  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
};

export default AuthLoadingScreen;
