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

type Props = {
  navigation: NavigationSwitchProp;
  setUser: (user) => void;
}

const AuthLoadingScreen: React.FC<Props> = ({ navigation, setUser }) => {
  console.log('loadingAuth!!');
  // パブリックメソッド
  // https://firebase.google.com/docs/reference/android/com/google/firebase/auth/FirebaseAuth.AuthStateListener
  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      // console.log(user.uid);
      setUser(user);
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
