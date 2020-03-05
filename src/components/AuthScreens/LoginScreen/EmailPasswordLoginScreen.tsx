import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView,
} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Input } from 'react-native-elements';
import { widthPercentageToDP as w, heightPercentageToDP as h } from 'react-native-responsive-screen';
import firebase from '../../../utils/initializeFirebase';
import useForm from '../../../utils/formHooks/useForm';
import validate from '../../../utils/formHooks/validationRules';
import FacebookLogin from './FacebookLoginScreen';

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
    height: h(50),
    paddingHorizontal: h(5),
    paddingTop: h(1.7),
    width: w(100),
  },
  title: {
    color: 'rgb(57,62,70)',
    fontSize: h(6),
    fontWeight: 'bold',
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: h(3),
  },
  inputContainer: {
    width: w(85),
  },
  formBottom: {
    width: w(100),
    marginTop: h(4.5),
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomText: {
    fontWeight: 'bold',
    fontSize: h(3.7),
    color: 'rgb(57, 62, 70)',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: h(10.2),
    width: h(10.2),
    backgroundColor: 'rgb(57,62,70)',
    borderColor: 'rgb(57, 62, 70)',
    borderRadius: 40,
  },
  facebook: {
    paddingTop: h(4.5),
    alignItems: 'center',
  },
});

const EmailPasswordLoginScreen: React.FC = () => {
  const loginWithEmailAndPassword = (): void => {
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
    <KeyboardAvoidingView style={{ flex: 1 }} enabled behavior="position" keyboardVerticalOffset={-h(1)}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={{ ...styles.title, paddingTop: h(13) }}>Welcome</Text>
          <Text style={{ ...styles.title }}>Back</Text>
        </View>
        <View style={styles.form}>
          <View>
            <Input
              containerStyle={styles.inputContainer}
              placeholder="e-mail"
              onChangeText={(t): void => handleChange(email, t)}
              value={values.email}
            />
            {errors.email
              ? <Text style={styles.validateText}>{errors.email}</Text>
              : null}
            <Input
              containerStyle={{ ...styles.inputContainer, marginTop: h(4.5) }}
              placeholder="password"
              onChangeText={(t): void => handleChange(password, t)}
              value={values.password}
            />
            {errors.password
              ? <Text style={styles.validateText}>{errors.password}</Text>
              : null}
          </View>
          <View style={styles.formBottom}>
            <Text style={styles.bottomText}>Sign in</Text>
            <TouchableOpacity style={styles.button} onPress={(e): void => handleSubmit(e)}>
              <SimpleLineIcons name="login" size={h(3.7)} color="rgb(250, 251, 245)" />
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
