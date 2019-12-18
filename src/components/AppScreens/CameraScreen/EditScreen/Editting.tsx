import React from 'react';
import { View, Text, Image } from 'react-native';

type Props = {
  blob: Blob;
}

const Edit: React.FC<Props> = ({ blob }) => {
  console.log(blob);
  return (
    <View><Text>hello</Text></View>
  );
};

export default Edit;
