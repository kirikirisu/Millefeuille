import React from 'react';
import { View, Text } from 'react-native';

type Props = {
  uid: string;
  record: {
    uri: string;
    text: string;
    date: string;
  };
}

const Confirmation: React.FC<Props> = ({ uid, record }) => {
  console.log(uid, record);
  return (
    <View>
      <Text>
        hello
      </Text>
    </View>
  );
};
export default Confirmation;
