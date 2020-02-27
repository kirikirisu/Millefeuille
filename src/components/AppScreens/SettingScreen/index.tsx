import React, { useState } from 'react';
import { Button } from 'react-native-elements';
import {
  StyleSheet,
  View,
} from 'react-native';
import LottieView from 'lottie-react-native';
import Setting from './SettingList';
import { logout } from '../../../utils/methodFactory';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lottie: {
    ...StyleSheet.absoluteFillObject,
  },
});

const LogoutScreen: React.FC = () => {
  const [lottieScreen, setScreen] = useState(true);
  const toggleScreen = () => setScreen(!lottieScreen);
  return (
    <View style={styles.container}>
      {lottieScreen
        ? (
          <LottieView
            style={styles.lottie}
            // eslint-disable-next-line global-require
            source={require('../../../../lotties/202-setting.json')}
            autoPlay
            loop={false}
            speed={0.8}
            onAnimationFinish={() => { toggleScreen(); }}
          />
        )
        : <Setting /> }
    </View>
  );
};

export default LogoutScreen;
