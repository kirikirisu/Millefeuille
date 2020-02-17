import React from 'react';
import { withNavigation } from 'react-navigation';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';

type Props = {
  navigation: NavigationStackScreenProps;
}

const CheckIcon = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('Confirmation')}>
    <MaterialIcons name="done" size={35} color="red" />
  </TouchableOpacity>
);

export default withNavigation(CheckIcon);
