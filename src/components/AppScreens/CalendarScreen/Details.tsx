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

const DetailScreen = ({ record, navigation }) => (
  <View>
    {record !== null
      ? <View style={styles.CardContainer}><RecordCard confirmationThunk={record} /></View>
      : <View />}
  </View>
);

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
