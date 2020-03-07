import React, { useRef } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView,
} from 'react-native';
import { Input } from 'react-native-elements';
import { widthPercentageToDP as w, heightPercentageToDP as h } from 'react-native-responsive-screen';
import Toast from 'react-native-easy-toast';
import { MaterialIcons } from '@expo/vector-icons';
import firebase from '../../../utils/initializeFirebase';
import useForm from '../../../utils/formHooks/useForm';
import validate from '../../../utils/formHooks/validationRules';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(57, 62, 70)',
  },
  validateText: {
    color: 'red',
    marginLeft: 15,
  },
  titleContainer: {
    height: h(50),
    paddingHorizontal: h(5),
    width: w(100),
  },
  title: {
    color: 'rgb(251, 250, 245)',
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
    color: 'rgb(255,255,255)',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: h(10.2),
    width: h(10.2),
    backgroundColor: 'rgb(255,255,255)',
    borderColor: 'rgb(255,255,255)',
    borderRadius: 40,
  },
  toast: {
    marginHorizontal: h(3),
    paddingHorizontal: h(2),
    backgroundColor: 'tomato',
  },
});

const RegisterScreen: React.FC = () => {
  const toastRef = useRef(null);

  const createUser = () => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const { email, password } = values;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((credentials) => {
        if (toastRef) toastRef.current.show('登録完了', 3000);
      })
      .catch((error) => {
        if (toastRef) toastRef.current.show('失敗しました', 3000);
      });
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(createUser, validate);

  // useFormのsetValuesで特定のkeyで入力値を保存したい
  const email = 'email';
  const password = 'password';
  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: 'rgb(57, 62, 70)' }} enabled behavior="position" keyboardVerticalOffset={-h(1)}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={{ ...styles.title, paddingTop: h(13) }}>Create</Text>
          <Text style={{ ...styles.title }}>Account</Text>
        </View>
        <View style={styles.form}>
          <View>
            <Input
              containerStyle={styles.inputContainer}
              inputStyle={{ color: 'rgb(251, 250, 245)' }}
              placeholder="e-mail"
              placeholderTextColor="gray"
              onChangeText={(t): void => handleChange(email, t)}
              value={values.email}
            />
            {errors.email
              ? <Text style={styles.validateText}>{errors.email}</Text>
              : null}
            <Input
              containerStyle={{ ...styles.inputContainer, marginTop: h(4.5) }}
              placeholder="password"
              placeholderTextColor="gray"
              onChangeText={(t): void => handleChange(password, t)}
              value={values.password}
            />
            {errors.password
              ? <Text style={styles.validateText}>{errors.password}</Text>
              : null}
          </View>
          <View style={styles.formBottom}>
            <Text style={styles.bottomText}>Sign up</Text>
            <TouchableOpacity style={styles.button} onPress={(e): void => handleSubmit(e)}>
              <MaterialIcons name="done" size={h(3.7)} color="rgb(52, 55, 63)" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Toast
        ref={toastRef}
        style={styles.toast}
      />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
