import React, { useEffect } from 'react';
import { NavigationBottomTabScreenComponent } from 'react-navigation-tabs';
import { Text, View } from 'react-native';
import firebase from '../../../utils/initializeFirebase';

type Props = {
  uid: string;
};

const ComparisonScreen: React.FC<Props> = ({ uid }) => {
  useEffect(() => {
    const recordRef = firebase.database().ref(`users/${uid}`);
    recordRef.on('value', (snapshot) => {
      console.log(snapshot.val());
    });
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ComparisonScreen</Text>
    </View>
  );
};
export default ComparisonScreen;
