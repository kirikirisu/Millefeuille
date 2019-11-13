import React from 'react';
import { View, Text } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

const DetailsScreen: NavigationStackScreenComponent = () => (
  <View><Text>hello</Text></View>
);

DetailsScreen.navigationOptions = {
  title: 'Details',
};

export default DetailsScreen;
