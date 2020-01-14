import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
} from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { Input } from 'react-native-elements';
import { takePhoto, pickPhoto } from '../../../utils/methodFactory';
import usePermission from '../../../utils/usePermission';
import DatePicker from './datePicker';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
// const photoHeight = height * 0.45;
// console.log(height, photoHeight);
const photoWidth = screenWidth - 100;
const photoHeight = photoWidth * (3 / 4);

const styles = StyleSheet.create({
  iconButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconButton: {
    padding: 5,
    margin: 5,
  },
  photoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 40,
  },
  photo: {
    width: photoWidth,
    height: photoHeight,
  },
  text: {
    fontSize: 20,
    color: '#a9a9a9',
    height: screenHeight / 10,
  },
  datePickerContainer: {
    alignItems: 'stretch',
  },
  comentContainer: {
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: '#a9a9a9',
    height: screenHeight / 5,
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
        <Image
          resizeMode="contain"
          source={{ uri: `${uri}` }}
          style={styles.photo}
        />
      )
        : <Text style={styles.text}>写真を選択してください</Text>
    }
  </View>
);

const renderComentArea = () => (
  <View style={styles.comentContainer}>
    <Input
      inputContainerStyle={styles.input}
      placeholder="トレーニングメニューなど"
      editable
      maxLength={200}
      multiline
    />
  </View>
);

const Record = ({ uri, date, setDate }): React.ReactElement => {
  const { cameraPermission } = usePermission();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="position"
      // contentContainerStyle={{ flex: 1 }}
      enabled
      // keyboardVerticalOffset={Platform.select({ ios: 20, android: 120 })}
    >
      <ScrollView>
        {renderPhoto(uri)}
        {renderPhotoicons(cameraPermission)}
        {renderComentArea()}
        <View style={styles.datePickerContainer}>
          <DatePicker date={date} setDate={setDate} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

Record.navigationOptions = {
  title: '記録',
};

export default Record;
