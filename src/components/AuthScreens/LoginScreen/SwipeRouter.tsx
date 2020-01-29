import React, { useRef } from 'react';
import {
  Text, View, StyleSheet, Dimensions,
} from 'react-native';
import { NavigationStackScreenComponent, NavigationStackProp } from 'react-navigation-stack';
import { Button } from 'react-native-elements';
import Swiper from 'react-native-swiper';

import LoginTopScreen from './LoginTopScreen';
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
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type Props = {
  navigation: NavigationStackProp;
}

const SwipeRouter: NavigationStackScreenComponent<Props> = ({ navigation }) => {
  const ref = useRef(null);
  const swipe = (n) => {
    if (ref) ref.current.scrollBy(n);
  };

  return (
    <Swiper
      style={styles.container}
      ref={ref}
      loop={false}
      showsPagination={false}
      showsHorizontalScrollIndicator
    >
      <View style={styles.slide1}>
        <LoginTopScreen swipe={swipe} />
      </View>
      <View style={styles.slide2}>
        <EmailPasswordLoginScreen />
      </View>
      <View style={styles.slide3}>
        <RegisterScreen />
      </View>
    </Swiper>
  );
};

SwipeRouter.navigationOptions = {
  header: null,
};

export default SwipeRouter;
