import React from 'react';
import LottieView from 'lottie-react-native';
import { View, StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('screen');
const styles = StyleSheet.create({
  lottieContainer: {
    height,
    width,
  },
});

const DoneScreen = () => (
  <View style={styles.lottieContainer}>
    <LottieView
      // eslint-disable-next-line global-require
      source={require('../../../../lotties/7155-confetti.json')}
      autoPlay
    />
  </View>
);

export default DoneScreen;
