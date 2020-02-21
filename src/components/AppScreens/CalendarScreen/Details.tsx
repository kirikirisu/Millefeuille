import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationStackScreenComponent, NavigationStackScreenProps } from 'react-navigation-stack';
import firebase from '../../../utils/initializeFirebase';
import { RecordCard } from '../RecordScreen/Confirmation';

type Props = {
  uid: string;
  navigation: NavigationStackScreenProps;
}

const DetailScreen = ({ record, navigation }) => (
  <View>
    {record !== null
      ? <RecordCard confirmationThunk={record} />
      : <View />}
  </View>
);

const Details: NavigationStackScreenComponent = ({ navigation, uid }) => {
  const [record, setRecord] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
      {isLoading
        ? <Text>now loading</Text>
        : <DetailScreen record={record} navigation={navigation} />}
    </View>
  );
};

Details.navigationOptions = {
  title: 'Details',
};

export default Details;
