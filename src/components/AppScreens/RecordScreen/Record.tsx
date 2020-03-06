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
  InputAccessoryView,
} from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { widthPercentageToDP as w, heightPercentageToDP as h } from 'react-native-responsive-screen';
import { Input } from 'react-native-elements';
import { takePhoto, pickPhoto, getPhotoDimentions } from '../../../utils/methodFactory';
import usePermission from '../../../utils/usePermission';
import IosDatePicker from './IosDatePicker';
import AndroidDatePicker from './AndroidDatePicker';
import CheckIcon from './CheckIcon';

const {
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
  textContainer: {
    width: photoWidth,
    height: photoHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: h(3),
    color: '#a9a9a9',
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
    height: h(17),
    padding: 5,
  },
  headerRight: {
    marginRight: h(3.5),
  },
  picker: {
    marginBottom: h(4),
  },
});

const renderPhotoicons = (cameraPermission): React.ReactElement => (
  <View style={styles.iconButtonContainer}>
    <TouchableOpacity style={styles.iconButton}>
      <MaterialIcons onPress={(): Promise<void> => takePhoto(cameraPermission)} name="photo-camera" size={h(5.5)} color="#a9a9a9" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconButton}>
      <FontAwesome onPress={(): Promise<void> => pickPhoto(cameraPermission)} name="photo" size={h(5.5)} color="#a9a9a9" />
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
        : <View style={styles.textContainer}><Text style={styles.text}>写真を選択してください</Text></View>
    }
  </View>
);

const renderComentArea = (setText, coment): React.ReactElement => (
  <View style={styles.comentContainer}>
    <Input
      inputContainerStyle={styles.input}
      placeholder="メモ"
      value={coment}
      onChangeText={(txt): void => setText(txt)}
      editable
      maxLength={200}
      returnKeyType="done"
      multiline
    />
  </View>
);

const Record = ({
  recordState, setDate, setText,
}): React.ReactElement => {
  const { cameraPermission } = usePermission();
  const { uri, date, coment } = recordState;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: 'rgb(252, 251, 255)' }}
      behavior="position"
      // contentContainerStyle={{ flex: 1 }}
      enabled
      // keyboardVerticalOffset={Platform.select({ ios: 20, android: 120 })}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {renderPhoto(uri)}
        {renderPhotoicons(cameraPermission)}
        {renderComentArea(setText, coment)}
        <View style={styles.picker}>
          {Platform.OS === 'ios'
            ? <IosDatePicker date={date} setDate={setDate} />
            : <AndroidDatePicker date={date} setDate={setDate} />}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

Record.navigationOptions = ({ navigation }) => ({
  headerTitle: '追加',
  headerRight: (): React.ReactElement => (
    <View style={{ paddingRight: 20 }}>
      <CheckIcon navigation={navigation} />
    </View>
  ),
});

export default Record;
