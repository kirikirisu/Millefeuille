import * as MediaLibrary from 'expo-media-library';
import * as ImageManipulator from 'expo-image-manipulator';
import * as ImagePicker from 'expo-image-picker';
import firebase from './initializeFirebase';
import store from '../../store';

const logout = () => {
  firebase.auth().signOut().then(() => {
    console.log('ログアウトしました');
  })
    .catch((error) => {
      console.log(`ログアウト時にエラーが発生しました (${error})`);
    });
};

const snap = async (cameraRef, setUri, navigation) => {
  const aspectRatio = 4 / 3; // iPhoneで写真撮った時と一緒
  const origin = 0;

  if (cameraRef) {
    const {
      uri, width: cropWidth,
    } = await cameraRef.current.takePictureAsync(); // uriはローカルイメージURIで一時的にローカルに保存される
    console.log(cropWidth);
    const cropHeigh = cropWidth * aspectRatio;
    const { uri: resized } = await ImageManipulator.manipulateAsync(
      uri,
      [
      ],
      { compress: 1 },
    );
    MediaLibrary.saveToLibraryAsync(resized);
    setUri(uri);
    navigation.navigate('Edit');
  }
};

const pickImage = async () => {
  const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });
  console.log(uri);

  if (!cancelled) {
    // setUri(uri);
    // navigation.navigate('Edit');
  }
};

type Props = {
  blob: {
    _data: {
      blobId: string;
      name: string;
      offset: number;
      size: number;
      type: boolean;
    };
  };
}

export { logout, snap };
