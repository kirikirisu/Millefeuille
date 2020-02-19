import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Dimensions, KeyboardAvoidingView,
} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Input, Button } from 'react-native-elements';
import firebase from '../../../utils/initializeFirebase';
import useForm from '../../../utils/formHooks/useForm';
import validate from '../../../utils/formHooks/validationRules';
import FacebookLogin from './FacebookLoginScreen';

const { height, width } = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255,255,255)',
  },
  validateText: {
    color: 'red',
    marginLeft: 15,
  },
  titleContainer: {
    height: height / 1.8,
    paddingRight: 35,
    paddingLeft: 35,
    paddingTop: 10,
    width,
  },
  title: {
    color: 'rgb(57,62,70)',
    fontSize: 40,
    fontWeight: 'bold',
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: width * 0.85,
  },
  formBottom: {
    width,
    marginTop: 30,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'rgb(57, 62, 70)',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: 70,
    backgroundColor: 'rgb(57,62,70)',
    borderColor: 'rgb(57, 62, 70)',
    borderRadius: 40,
  },
  facebook: {
    paddingTop: 25,
    alignItems: 'center',
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
    <KeyboardAvoidingView style={{ flex: 1 }} enabled behavior="position" keyboardVerticalOffset={-height / 7}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={{ ...styles.title, paddingTop: height / 7 }}>Welcome</Text>
          <Text style={{ ...styles.title }}>Back</Text>
        </View>
        <View style={styles.form}>
          <View>
            <Input
              containerStyle={styles.inputContainer}
              placeholder="e-mail"
              onChangeText={(t) => handleChange(email, t)}
              value={values.email}
            />
            {errors.email
              ? <Text style={styles.validateText}>{errors.email}</Text>
              : null}
            <Input
              containerStyle={{ ...styles.inputContainer, marginTop: 25 }}
              placeholder="password"
              onChangeText={(t) => handleChange(password, t)}
              value={values.password}
            />
            {errors.password
              ? <Text style={styles.validateText}>{errors.password}</Text>
              : null}
          </View>
          <View style={styles.formBottom}>
            <Text style={styles.bottomText}>Sign in</Text>
            <TouchableOpacity style={styles.button} onPress={(e) => handleSubmit(e)}>
              <SimpleLineIcons name="login" size={25} color="rgb(250, 251, 245)" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.facebook}>
          <FacebookLogin />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default EmailPasswordLoginScreen;
