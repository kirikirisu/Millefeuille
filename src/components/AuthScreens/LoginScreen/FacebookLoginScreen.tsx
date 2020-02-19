import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
// import { NavigationStackScreenComponent } from 'react-navigation-stack';
import * as Facebook from 'expo-facebook';
import firebase from '../../../utils/initializeFirebase';

const FacebookLoginScreen: React.FC = () => {
  const loginWithFaceBook = async () => {
    try {
      await Facebook.initializeAsync('567552277140467');
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      console.log(`Facebook Login Error: ${message}`);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={() => loginWithFaceBook()}>
        <Text style={{ color: 'rgb(57, 62, 70)' }}>Login Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FacebookLoginScreen;
