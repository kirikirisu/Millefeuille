import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';

type Props = {
  navigation: NavigationStackScreenProps;
}

const CheckIcon = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('Confirmation')}>
    <MaterialIcons name="done" size={35} color="rgb(255, 255, 255)" />
  </TouchableOpacity>
);

export default CheckIcon;
