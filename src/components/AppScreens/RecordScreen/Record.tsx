import React, { useState } from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView,
} from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { takePhoto, pickPhoto } from '../../../utils/methodFactory';
import usePermission from '../../../utils/usePermission';
import DatePicker from './datePicker';


const { width: screenWidth } = Dimensions.get('screen');
// const photoHeight = height * 0.45;
// console.log(height, photoHeight);
const photoWidth = screenWidth - 100;
const photoHeight = photoWidth * (3 / 4);

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
  photoContainer: {
    flex: 3,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 40,
  },
  photo: {
    width: photoWidth,
    height: photoHeight,
  },
  datePickerContainer: {
    flex: 2,
    backgroundColor: 'red',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'stretch',
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

const renderComentArea = () => {
  console.log('hoge');
};

const Record = ({ uri, date, setDate }): React.ReactElement => {
  const { cameraPermission } = usePermission();

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        {renderPhoto(uri)}
        {renderPhotoicons(cameraPermission)}
        <View style={styles.datePickerContainer}>
          <DatePicker date={date} setDate={setDate} />
        </View>
      </View>
    </ScrollView>
  );
};

Record.navigationOptions = {
  title: '記録',
};

export default Record;
