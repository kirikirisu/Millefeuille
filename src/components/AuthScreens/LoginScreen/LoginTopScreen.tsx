import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationStackScreenComponent, NavigationStackProp } from 'react-navigation-stack';
import { Button } from 'react-native-elements';

import EmailPasswordLoginScreen from './EmailPasswordLoginScreen';
import FacebookLoginScreen from './FacebookLoginScreen';
// import GoogleLoginScreen from './GoogleLoginScreen';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  button: {
    width: 350,
  },
  nomalLogin: {
    marginBottom: 15,
  },
});

type Props = {
  navigation: NavigationStackProp;
}


const LoginTopScreen: NavigationStackScreenComponent<Props> = ({ navigation }) => {
  const renderRegisterButton = (): React.ReactElement => (
    <View>
      <Button
        style={styles.button}
        title="Create Account"
        type="outline"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.nomalLogin}>
        <EmailPasswordLoginScreen />
      </View>
      <FacebookLoginScreen />
      {renderRegisterButton()}
    </View>
  );
};

export default LoginTopScreen;
