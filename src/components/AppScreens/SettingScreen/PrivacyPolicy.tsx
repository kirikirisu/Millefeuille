import React from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

const PrivacyPolicy: NavigationStackScreenComponent = () => (
  <View style={styles.container}>
    <WebView
      source={{ uri: 'https://docs.google.com/document/d/15VWVR12nD-n7lMNqwdQtv6zf0g3TEWUKWj5z18ekUvI/edit?usp=sharing' }}
    />
  </View>
);

PrivacyPolicy.navigationOptions = {
  title: 'プライバシーポリシー',
};

export default PrivacyPolicy;
