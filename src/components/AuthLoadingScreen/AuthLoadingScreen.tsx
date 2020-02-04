/* eslint-disable global-require */
import React, { useEffect } from 'react';
import {
  ActivityIndicator, View, StyleSheet, StatusBar,
} from 'react-native';
import { NavigationSwitchScreenComponent, NavigationSwitchProp } from 'react-navigation';
import LottieView from 'lottie-react-native';
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
  setRecordThunk: (thunk) => void;
}

const AuthLoadingScreen: React.FC<Props> = ({ navigation, setUser, setRecordThunk }) => {
  useEffect(() => {
    // https://firebase.google.com/docs/reference/android/com/google/firebase/auth/FirebaseAuth.AuthStateListener
    console.log('loadingAuth!!');
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log('authenticated');

        setUser(user);
        const recordRef = firebase.database().ref(`users/${user.uid}`);
        recordRef.on('value', (snapshot) => {
          setRecordThunk(snapshot.val());
          navigation.navigate('App');
        });
      } else {
        console.log('need authenticat!');
        navigation.navigate('Auth');
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../../lotties/6288-dino-loading.json')}
        autoPlay
        loop
      />
      <StatusBar barStyle="default" />
    </View>
  );
};

export default AuthLoadingScreen;
