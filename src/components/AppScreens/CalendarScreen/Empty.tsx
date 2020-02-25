import React from 'react';
import LottieView from 'lottie-react-native';
import {
  View, Text, StyleSheet, Dimensions,
} from 'react-native';

const { height, width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(252, 251, 255)',
  },
  lottieContainer: {
    height: height / 2,
    justifyContent: 'center',
  },
  lottie: {
    width,
    height: height / 3,
  },
  textContainer: {
    padding: 36,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 20,
  },
});

const Empty = () => (
  <View style={styles.container}>
    <View style={styles.lottieContainer}>
      <LottieView
        // eslint-disable-next-line global-require
        source={require('../../../../lotties/11646-no-activity-animation (1).json')}
        autoPlay
        style={styles.lottie}
      />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.title}>Empty!</Text>
      <Text style={styles.subTitle}>この日の記録はありません</Text>
    </View>
  </View>
);

export default Empty;
