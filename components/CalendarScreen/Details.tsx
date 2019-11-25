import React from 'react';
import { View, Text } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

const Details: NavigationStackScreenComponent = () => (
  <View><Text>hello</Text></View>
);

Details.navigationOptions = {
  title: 'Details',
};

export default Details;
