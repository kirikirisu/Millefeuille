/* eslint-disable global-require */
import React from 'react';
import LottieView from 'lottie-react-native';
import Constants from 'expo-constants';
import {
  Text, View, StyleSheet, TouchableOpacity,
} from 'react-native';
import { widthPercentageToDP as w, heightPercentageToDP as h } from 'react-native-responsive-screen';
import NavigationService from '../../../utils/NavigationService';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(252, 251, 255)',
    justifyContent: 'space-evenly',
  },
  lottieContainer: {
    height: h(50),
    width: w(100),
    marginTop: Constants.statusBarHeight,
    alignSelf: 'center',
  },
  buttonContainer: {
    marginVertical: h(1.5),
    alignItems: 'center',
  },
  button: {
    height: h(8),
    marginTop: h(1.5),
    width: w(75),
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: h(3.5),
  },
  warning: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 15,
    marginTop: h(1.5),
  },
  warningText: {
    fontSize: h(1.7),
  },
});

type Props = {
  swipe: (n) => void;
};

const LoginTopScreen: React.FC<Props> = ({ swipe }) => (
  <View style={styles.container}>
    <View style={styles.lottieContainer}>
      <LottieView
        source={require('../../../../lotties/3619-profile.json')}
        autoPlay
        loop
      />
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={{
          ...styles.button, borderWidth: 1, borderColor: 'rgb(249, 66, 50)', backgroundColor: 'rgb(255, 255, 255)',
        }}
        onPress={(): void => swipe(2)}
      >
        <Text style={{ ...styles.text, color: 'rgb(249, 66,50)' }}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ ...styles.button, backgroundColor: 'rgb(249, 66, 50)' }} onPress={(): void => swipe(1)}>
        <Text style={{ ...styles.text, color: 'rgb(255, 255, 255)' }}>Sign in</Text>
      </TouchableOpacity>
      <View style={styles.warning}>
        <Text style={styles.warningText}>登録は</Text>
        <Text style={{ ...styles.warningText, color: 'red' }} onPress={(): void => NavigationService.navigate('LoginPrivacyPolicy', {})}>プライバシーポリシー</Text>
        <Text style={styles.warningText}>に同意したものとします。</Text>
      </View>
    </View>
  </View>
);

export default LoginTopScreen;
