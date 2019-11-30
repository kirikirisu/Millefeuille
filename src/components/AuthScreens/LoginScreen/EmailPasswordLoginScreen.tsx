import React, { useState } from 'react';
import {
  View, Text, StyleSheet, Dimensions,
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import firebase from '../../../utils/initializeFirebase';
import useForm from '../../../utils/formHooks/useForm';
import validate from '../../../utils/formHooks/validationRules';

const { height, width } = Dimensions.get('window');

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

const EmailPasswordLoginScreen: React.FC = () => {
  const loginWithEmailAndPassword = () => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const { email, password } = values;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('login with email and password success');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(loginWithEmailAndPassword, validate);

  // useFormのsetValuesで特定のkeyで入力値を保存したい
  const email = 'email';
  const password = 'password';
  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <Input
          placeholder="e-mail"
          onChangeText={(t) => handleChange(t, email)}
          value={values.email}
        />
        {errors.email
          ? <Text style={styles.validateText}>{errors.email}</Text>
          : null}
        <Input
          placeholder="password"
          onChangeText={(t) => handleChange(t, password)}
          value={values.password}
        />
        {errors.password
          ? <Text style={styles.validateText}>{errors.password}</Text>
          : null}
      </View>
      <Button
        title="submit"
        type="outline"
        raised
        onPress={(e) => handleSubmit(e)}
      />
    </View>
  );
};

export default EmailPasswordLoginScreen;
