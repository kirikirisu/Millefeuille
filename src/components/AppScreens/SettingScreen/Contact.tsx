import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Linking,
} from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { widthPercentageToDP as w, heightPercentageToDP as h } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  firstText: {
    marginHorizontal: h(3.5),
    marginVertical: h(3.5),
    color: 'rgb(57, 62, 70)',
    fontSize: h(2.2),
  },
  secondText: {
    marginHorizontal: h(3.5),
    color: 'rgb(57, 62, 70)',
    fontSize: h(2.2),
  },
  button: {
    position: 'absolute',
    right: 0,
    bottom: h(10),
    height: h(7),
    backgroundColor: 'tomato',
    borderTopLeftRadius: h(5),
    borderBottomLeftRadius: h(5),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: h(4),
  },
  buttonTitle: {
    fontSize: h(2.8),
    color: 'white',
  },
});

const linkToTwitter = () => {
  const url = 'https://twitter.com/s6rmcuA3qqOMM4m';
  Linking.openURL(url).catch((err) => console.error('An error occured', err));
};

const Contact: NavigationStackScreenComponent = () => (
  <View style={styles.container}>
    <Text style={styles.firstText}>
      ご意見・ご要望がありましたら製作者のTwitterアカウントまでお問い合わせください。
    </Text>
    <Text style={styles.secondText}>
      頂いたご意見やご要望には目を通しておりますが、全てのお問い合わせにお返事できないことをご了承ください。
    </Text>
    <TouchableOpacity style={styles.button} onPress={(): void => linkToTwitter()}>
      <Text style={styles.buttonTitle}>Twitterで問い合わせ</Text>
    </TouchableOpacity>
  </View>
);

Contact.navigationOptions = {
  title: 'お問い合わせ',
};

export default Contact;
