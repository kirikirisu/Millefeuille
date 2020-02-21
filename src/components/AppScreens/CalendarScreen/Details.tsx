import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationStackScreenComponent, NavigationStackScreenProps } from 'react-navigation-stack';
import firebase from '../../../utils/initializeFirebase';

type Props = {
  uid: string;
  navigation: NavigationStackScreenProps;
}

const Details: NavigationStackScreenComponent = ({ navigation, uid }) => {
  const [record, setRecord] = useState(null);
  useEffect(() => {
    const { dateString } = navigation.getParam('pressedDay');
    const ref = firebase.database().ref(`users/${uid}/${dateString}`);
    ref.on('value', (snapshot) => {
      if (snapshot.val()) {
        console.log(snapshot.val());
        setRecord(snapshot.val());
      } else {
        setRecord(null);
      }
    });
  }, []);
  return (
    <View>
      {record !== null
        ? <Text>{record.coment}</Text>
        : <View />}
    </View>
  );
};

Details.navigationOptions = {
  title: 'Details',
};

export default Details;
