import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  firstText: {
    marginHorizontal: 25,
    marginVertical: 30,
    color: 'rgb(57, 62, 70)',
    fontSize: 16,
  },
  secondText: {
    marginHorizontal: 25,
    color: 'rgb(57, 62, 70)',
    fontSize: 16,
  },
  button: {
    position: 'absolute',
    right: 0,
    bottom: 60,
    height: 50,
    backgroundColor: 'tomato',
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonTitle: {
    fontSize: 19,
    color: 'white',
  },
});

const Contact: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.firstText}>
      ご意見・ご要望がありましたら製作者のTwitterアカウントまでお問い合わせください。
    </Text>
    <Text style={styles.secondText}>
      頂いたご意見やご要望には目を通しておりますが、全てのお問い合わせにお返事できないことをご了承ください。
    </Text>
    <TouchableOpacity style={styles.button} onPress={() => console.log('go twitter')}>
      <Text style={styles.buttonTitle}>Twitterで問い合わせ</Text>
    </TouchableOpacity>
  </View>
);

export default Contact;
