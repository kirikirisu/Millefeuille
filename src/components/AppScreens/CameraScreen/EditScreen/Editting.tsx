import React from 'react';
import {
  View, Image, ImageSourcePropType, StyleSheet,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

type Props = {
  uri: ImageSourcePropType;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Edit: React.FC<Props> = ({ uri }) => {
  console.log(uri);
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `${uri}` }}
        style={{ width: 300, height: 300 }}
      />
    </View>
  );
};

export default Edit;
