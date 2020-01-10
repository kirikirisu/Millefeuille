import React from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity,
} from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { takePhoto, pickPhoto } from '../../../utils/methodFactory';
import usePermission from '../../../utils/usePermission';

const styles = StyleSheet.create({
  iconButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconButton: {
    padding: 5,
    margin: 5,
  },
  photo: {
    width: 300,
    height: 300,
  },
});

const renderPhotoicons = (cameraPermission): React.ReactElement => (
  <View style={styles.iconButtonContainer}>
    <TouchableOpacity style={styles.iconButton}>
      <MaterialIcons onPress={(): Promise<void> => takePhoto(cameraPermission)} name="photo-camera" size={40} color="#a9a9a9" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconButton}>
      <FontAwesome onPress={(): Promise<void> => pickPhoto(cameraPermission)} name="photo" size={40} color="#a9a9a9" />
    </TouchableOpacity>
  </View>
);

const renderPhoto = (uri) => (
  <View>
    {
      uri ? (
        <Image
          resizeMode="contain"
          source={{ uri: `${uri}` }}
          style={styles.photo}
        />
      )
        : <View />
    }
  </View>
);

const Record = ({ uri }): React.ReactElement => {
  const { cameraPermission } = usePermission();
  return (
    <View style={{ flex: 1 }}>
      {renderPhotoicons(cameraPermission)}
      {renderPhoto(uri)}
    </View>
  );
};

Record.navigationOptions = {
  title: '記録',
};

export default Record;
