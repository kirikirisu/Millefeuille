/* eslint-disable global-require */
import React from 'react';
import { withNavigation } from 'react-navigation';
import LottieView from 'lottie-react-native';
import Constants from 'expo-constants';
import {
  Text, View, StyleSheet, Dimensions, TouchableOpacity,
} from 'react-native';

const { height, width } = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  lottieContainer: {
    height: height / 1.5,
    width,
    marginTop: Constants.statusBarHeight,
  },
  buttonContainer: {
    marginVertical: 15,
    alignItems: 'center',
  },
  button: {
    height: 60,
    marginTop: 10,
    width: width * 0.75,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
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
        onPress={() => swipe(2)}
      >
        <Text style={{ ...styles.text, color: 'rgb(249, 66,50)' }}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ ...styles.button, backgroundColor: 'rgb(249, 66, 50)' }} onPress={() => swipe(1)}>
        <Text style={{ ...styles.text, color: 'rgb(255, 255, 255)' }}>Sign in</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default LoginTopScreen;
