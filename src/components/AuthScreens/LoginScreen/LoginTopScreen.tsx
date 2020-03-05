/* eslint-disable global-require */
import React from 'react';
import LottieView from 'lottie-react-native';
import Constants from 'expo-constants';
import {
  Text, View, StyleSheet, Dimensions, TouchableOpacity,
} from 'react-native';
import NavigationService from '../../../utils/NavigationService';

const { height, width } = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(252, 251, 255)',
  },
  lottieContainer: {
    flex: 3,
    width,
    marginTop: Constants.statusBarHeight,
    alignSelf: 'center',
  },
  buttonContainer: {
    flex: 1,
    marginVertical: 15,
    alignItems: 'center',
  },
  button: {
    flex: 0.5,
    marginTop: 10,
    width: width * 0.75,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
  },
  warning: {
    flex: 0.5,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  warningText: {
    fontSize: 13,
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
    <View style={styles.warning}>
      <Text style={styles.warningText}>登録は</Text>
      <Text style={{ ...styles.warningText, color: 'red' }} onPress={() => NavigationService.navigate('LoginPrivacyPolicy', {})}>プライバシーポリシー</Text>
      <Text style={styles.warningText}>に同意したものとします。</Text>
    </View>
  </View>
);

export default LoginTopScreen;
