import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { Input } from 'react-native-elements';
import { takePhoto, pickPhoto, getPhotoDimentions } from '../../../utils/methodFactory';
import usePermission from '../../../utils/usePermission';
import DatePicker from './IosDatePicker';

const {
  screenWidth,
  screenHeight,
  photoHeight,
  photoWidth,
} = getPhotoDimentions();

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
    paddingBottom: 20,
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
    padding: 5,
  },
  headerRight: {
    marginRight: 25,
  },
  headerRightText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
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

export const renderPhoto = (uri): React.ReactElement => (
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

const renderComentArea = (setText): React.ReactElement => (
  <View style={styles.comentContainer}>
    <Input
      inputContainerStyle={styles.input}
      placeholder="トレーニングメニューなど"
      onChangeText={(text): void => setText(text)}
      editable
      maxLength={200}
      multiline
    />
  </View>
);

const renderHeaderButton = (navigation): React.ReactElement => (
  <TouchableOpacity style={styles.headerRight} onPress={() => navigation.navigate('Confirmation')}>
    <Text style={styles.headerRightText}>完了</Text>
  </TouchableOpacity>
);

const Record = ({
  uri, date, setDate, setText,
}): React.ReactElement => {
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
        {renderComentArea(setText)}
        <View style={styles.datePickerContainer}>
          <DatePicker date={date} setDate={setDate} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

Record.navigationOptions = ({ navigation }) => ({
  title: '記録',
  headerRight: (): React.ReactElement => (<>{ renderHeaderButton(navigation) }</>),
});

export default Record;
