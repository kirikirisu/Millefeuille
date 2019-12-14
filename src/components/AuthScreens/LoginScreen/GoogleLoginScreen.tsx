import React from 'react';
import { View, Text } from 'react-native';
import * as Google from 'expo-google-app-auth';
import { Button } from 'react-native-elements';

const GoogleLoginScreen = () => {
  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: '1069899410723-nph3ih43ibltp2j8430khcr9jv4nfs3r.apps.googleusercontent.com',
        iosClientId: '1069899410723-1od51hugrdvrqrs0nrjdo1em747d6cst.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        console.log(result.accessToken);
        return result.accessToken;
      }
      return { cancelled: true };
    } catch (e) {
      return { error: true };
    }
  };
  return (
    <View style={{ width: 350 }}>
      <Button
        title="Login With Google"
        type="outline"
        onPress={() => signInWithGoogleAsync()}
      />
    </View>
  );
};

export default GoogleLoginScreen;
