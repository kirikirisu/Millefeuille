import React from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity, Dimensions,
} from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { takePhoto, pickPhoto } from '../../../utils/methodFactory';
import usePermission from '../../../utils/usePermission';

const { height, width: screenWidth } = Dimensions.get('screen');
// const photoHeight = height * 0.45;
// console.log(height, photoHeight);
const styles = StyleSheet.create({
  iconButtonContainer: {
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconButton: {
    padding: 5,
    margin: 5,
  },
  photoContainer: {
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: screenWidth,
    height: '100%',
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
  <View style={styles.photoContainer}>
    {
      uri ? (
        <View>
          <Image
            resizeMode="contain"
            source={{ uri: `${uri}` }}
            style={styles.photo}
          />
        </View>
      )
        : <Text>写真を選択してください</Text>
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
