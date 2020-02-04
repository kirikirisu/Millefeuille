import React from 'react';
import { NavigationBottomTabScreenComponent } from 'react-navigation-tabs';
import {
  Text, View, StyleSheet, SectionList,
} from 'react-native';

type Props = {
  recordThunk: {
    coment: string;
    date: string;
    url: string;
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ComparisonScreen: React.FC<Props> = ({ recordThunk }) => {
  console.log(typeof [recordThunk]);
  return (
    <View style={styles.container}>
      <View />
    </View>
  );
};
export default ComparisonScreen;
