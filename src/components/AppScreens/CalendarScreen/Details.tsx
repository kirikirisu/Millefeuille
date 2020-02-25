import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationStackScreenComponent, NavigationStackScreenProps } from 'react-navigation-stack';
import firebase from '../../../utils/initializeFirebase';
import { RecordCard } from '../RecordScreen/Confirmation';

type Props = {
  uid: string;
  navigation: NavigationStackScreenProps;
}

const styles = StyleSheet.create({
  CardContainer: {
  },
});

type UrlToUri = {
  uri?: string;
  date?: string;
  text?: string;
};

const DetailScreen = ({ record, navigation }) => {
  const urlToUri: UrlToUri = {};
  if (record !== null) {
    const { date, coment, url } = record;
    urlToUri.uri = url;
    urlToUri.date = date;
    urlToUri.text = coment;
  }
  return (
    <View>
      {record !== null
        ? <View><RecordCard recordState={urlToUri} /></View>
        : <View />}
    </View>
  );
};

const Details: NavigationStackScreenComponent = ({ navigation, uid }) => {
  const [record, setRecord] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const { dateString } = navigation.getParam('pressedDay');
    const ref = firebase.database().ref(`users/${uid}/${dateString}`);
    ref.on('value', (snapshot) => {
      if (snapshot.val()) {
        console.log(snapshot.val());
        setIsLoading(false);
        setRecord(snapshot.val());
      } else {
        setRecord(null);
      }
    });
  }, []);
  return (
    <View style={{
      flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(252, 251, 255)',
    }}
    >
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
