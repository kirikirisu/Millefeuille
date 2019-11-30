import React, { useState } from 'react';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import firebase from '../../../utils/initializeFirebase';

const styles = StyleSheet.create({
  container: {
    width: 350,
  },
  validateText: {
    color: 'red',
    marginLeft: 15,
  },
  inputs: {
    marginBottom: 10,
  },
});

const RegisterScreen: NavigationStackScreenComponent = ({ navigation }) => {
  const [email, setEmail] = useState <string>('');
  const [password, setPassword] = useState<string>('');
  const [validateEmail, setEmailError] = useState<{emailError: string}>({ emailError: '' });
  const [validatePassword, setPasswordError] = useState<{passwordError: string}>({ passwordError: '' });

  const validate = () => {
    let errorMsgE;
    let errorMsgP;

    if (!email.includes('@')) {
      errorMsgE = 'invalid email';
    }
    if (!password) {
      errorMsgP = 'name can not be blank';
    }

    if (errorMsgE || errorMsgP) {
      setEmailError({ emailError: errorMsgE });
      setPasswordError({ passwordError: errorMsgP });
      return false;
    }
    return true;
  };

  const createAccount = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const hundleOnPress = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      setEmail('');
      setPassword('');
      setEmailError({ emailError: '' });
      setPasswordError({ passwordError: '' });
      createAccount();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <Input
          placeholder="e-mail"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        {validateEmail.emailError
          ? <Text style={styles.validateText}>{validateEmail.emailError}</Text>
          : null}
        <Input
          placeholder="password"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        {validatePassword.passwordError
          ? <Text style={styles.validateText}>{validatePassword.passwordError}</Text>
          : null}
      </View>
      <Button
        title="submit"
        type="outline"
        raised
        onPress={(e) => hundleOnPress(e)}
      />
    </View>
  );
};

export default RegisterScreen;
