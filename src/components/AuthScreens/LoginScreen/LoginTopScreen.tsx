/* eslint-disable global-require */
import React from 'react';
import {
  Text, View, StyleSheet, Dimensions,
} from 'react-native';
import { NavigationStackScreenComponent, NavigationStackProp } from 'react-navigation-stack';
import { Button } from 'react-native-elements';
import LottieView from 'lottie-react-native';
import Constants from 'expo-constants';
import Swiper from 'react-native-swiper';

import EmailPasswordLoginScreen from './EmailPasswordLoginScreen';
import RegisterScreen from './RegisterScreen';
import FacebookLoginScreen from './FacebookLoginScreen';
// import GoogleLoginScreen from './GoogleLoginScreen';

const styles = StyleSheet.create({
  container: {
  },
  button: {
    width: 350,
  },
  nomalLogin: {
    marginBottom: 15,
  },
  slide1: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgb(251, 250, 245)',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(251,250,245)',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(52, 55, 63)',
  },
  textContainer: {
    marginVertical: 40,
    alignItems: 'center',
  },
  text: {
    color: 'rgb(27,26,25)',
    fontSize: 27,
    fontWeight: 'bold',
  },
});

type Props = {
  navigation: NavigationStackProp;
}

const renderRegisterButton = (navigation): React.ReactElement => (
  <View>
    <Button
      style={styles.button}
      title="Create Account"
      type="outline"
      onPress={() => navigation.navigate('Register')}
    />
  </View>
);

const { height, width } = Dimensions.get('screen');
const renderSlide1 = () => (
  <View>
    <View style={{
      height: height / 1.5, width, marginTop: Constants.statusBarHeight,
    }}
    >
      <LottieView
        source={require('../../../../lotties/3619-profile.json')}
        autoPlay
        loop
      />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.text}>ログインしてください</Text>
    </View>
  </View>
);

const LoginTopScreen: NavigationStackScreenComponent<Props> = ({ navigation }) => (
  <Swiper style={styles.container} loop={false} showsHorizontalScrollIndicator>
    <View style={styles.slide1}>
      {renderSlide1()}
    </View>
    <View style={styles.slide2}>
      <EmailPasswordLoginScreen />
    </View>
    <View style={styles.slide3}>
      <RegisterScreen />
    </View>
  </Swiper>
);

LoginTopScreen.navigationOptions = {
  header: null,
};

export default LoginTopScreen;
