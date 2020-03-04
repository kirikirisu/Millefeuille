import React from 'react';
import LottieView from 'lottie-react-native';
import {
  Text, View, StyleSheet, Dimensions, TouchableOpacity,
} from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import { AntDesign } from '@expo/vector-icons';

const { height, width } = Dimensions.get('screen');
const filler = { ...StyleSheet.absoluteFillObject, top: 100 }; // 最後に残るやつを消すために１００プラス

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(252, 251, 255)',
  },
  lottie: {
    ...filler,
  },
  displayContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height,
    width,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 20,
  },
  arrowRight: {
    height: 50,
    width: 50,
    backgroundColor: 'rgb(126, 237, 150)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
});

const DoneScreen: NavigationStackScreenComponent = ({ navigation }) => {
  const goBack = () => {
    navigation.popToTop();
  };
  return (
    <View style={styles.container}>
      <LottieView
        // eslint-disable-next-line global-require
        source={require('../../../../lotties/7155-confetti.json')}
        style={styles.lottie}
        autoPlay
        loop={false}
        speed={0.6}
      />
      <View style={styles.displayContainer}>
        <AntDesign name="checkcircleo" size={width / 3} color="rgb(126, 237, 150)" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Success!!</Text>
          <Text style={styles.subTitle}>おめでとうございます。追加されました！</Text>
        </View>
        <TouchableOpacity style={styles.arrowRight} onPress={() => goBack()}><AntDesign name="arrowright" size={35} color="white" /></TouchableOpacity>
      </View>
    </View>
  );
};
DoneScreen.navigationOptions = {
  header: null,
};

export default withNavigation(DoneScreen);
