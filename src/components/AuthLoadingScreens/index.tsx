import React from 'react';
import {
  ActivityIndicator, View, StyleSheet, StatusBar,
} from 'react-native';
import { NavigationSwitchScreenComponent, NavigationSwitchProp } from 'react-navigation';
import firebase from '../../utils/initializeFirebase';

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
  console.log('loadingAuth!!');

  firebase.auth().onAuthStateChanged((user) => {
    // console.log(user);
    if (user != null) {
      console.log('authenticated');
      navigation.navigate('App');
    } else {
      console.log('need authenticat!');
      navigation.navigate('Auth');
    }
  });

  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
};

export default AuthLoadingScreen;
