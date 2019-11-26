import React from 'react';
import { Button } from 'react-native-elements';
import {
  StyleSheet,
  View,
} from 'react-native';
import { logout } from '../../../utils/loginMethods';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const LogoutScreen: React.FC = () => (
  <View style={styles.container}>
    <Button
      title="Logout"
      type="outline"
      onPress={() => logout()}
    />
  </View>
);

export default LogoutScreen;
