import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationStackProp } from 'react-navigation-stack';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type Props = {
  navigation: NavigationStackProp;
}

const Prompt: React.FC<Props> = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Please Permission on your phone setting</Text>
    <Button
      title="GO HOME"
      onPress={() => { navigation.navigate('Home'); }}
    />
  </View>
);

export default Prompt;
