import CameraRoll from '@react-native-community/cameraroll';
import firebase from './initializeFirebase';

const logout = () => {
  firebase.auth().signOut().then(() => {
    console.log('ログアウトしました');
  })
    .catch((error) => {
      console.log(`ログアウト時にエラーが発生しました (${error})`);
    });
};

const snap = async (cameraRef, setUri, navigation) => {
  if (cameraRef) {
    const { uri } = await cameraRef.current.takePictureAsync(); // uriはローカルイメージURIで一時的にローカルに保存される
    const size = await cameraRef.current.getAvailablePictureSizesAsync('4:3');
    console.log(size);
    CameraRoll.saveToCameraRoll(uri);
    setUri(uri);
    navigation.navigate('Edit');
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
