import React from 'react';
import {
  View, Text, StyleSheet, Dimensions, TouchableOpacity,
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import firebase from '../../../utils/initializeFirebase';
import useForm from '../../../utils/formHooks/useForm';
import validate from '../../../utils/formHooks/validationRules';

const { height, width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  validateText: {
    color: 'red',
    marginLeft: 15,
  },
  titleContainer: {
    height: height / 2,
    paddingRight: 35,
    paddingLeft: 35,
    width,
  },
  title: {
    color: 'rgb(251, 250, 245)',
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
    color: 'rgb(251,250,245)',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: 70,
    backgroundColor: 'rgb(251,250,245)',
    borderColor: 'rgb(251,250,245)',
    borderRadius: 40,
  },
});


const RegisterScreen: React.FC = () => {
  const createUser = () => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const { email, password } = values;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((credentials) => { console.log('create user success'); })
      .catch((error) => { console.log(error); });
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
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{ ...styles.title, paddingTop: height / 7 }}>Create</Text>
        <Text style={{ ...styles.title }}>Account</Text>
      </View>
      <View style={styles.form}>
        <View>
          <Input
            containerStyle={styles.inputContainer}
            inputStyle={{ color: 'rgb(251, 250, 245)' }}
            placeholder="e-mail"
            placeholderTextColor="gray"
            onChangeText={(t) => handleChange(email, t)}
            value={values.email}
          />
          {errors.email
            ? <Text style={styles.validateText}>{errors.email}</Text>
            : null}
          <Input
            containerStyle={{ ...styles.inputContainer, marginTop: 25 }}
            placeholder="password"
            placeholderTextColor="gray"
            onChangeText={(t) => handleChange(password, t)}
            value={values.password}
          />
          {errors.password
            ? <Text style={styles.validateText}>{errors.password}</Text>
            : null}
        </View>
        <View style={styles.formBottom}>
          <Text style={styles.bottomText}>Sign up</Text>
          <TouchableOpacity style={styles.button} onPress={(e) => handleSubmit(e)}>
            <AntDesign name="arrowright" size={25} color="rgb(52, 55, 63)" />
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};

export default RegisterScreen;
