import React from 'react';
import LottieView from 'lottie-react-native';
import {
  View, Text, StyleSheet, Dimensions,
} from 'react-native';
import { widthPercentageToDP as w, heightPercentageToDP as h } from 'react-native-responsive-screen';

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
    width: w(100),
    height: h(33),
    alignSelf: 'center',
  },
  textContainer: {
    padding: h(6),
    alignItems: 'center',
  },
  title: {
    fontSize: h(4),
    fontWeight: '600',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: h(2.7),
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
