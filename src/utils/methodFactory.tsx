import { CameraRoll } from 'react-native';
import firebase from './initializeFirebase';

const logout = () => {
  firebase.auth().signOut().then(() => {
    console.log('ログアウトしました');
  })
    .catch((error) => {
      console.log(`ログアウト時にエラーが発生しました (${error})`);
    });
};

const snap = async (cameraRef, setBlob, navigation) => {
  if (cameraRef) {
    const { uri } = await cameraRef.current.takePictureAsync(); // uriはローカルイメージURIで一時的にローカルに保存される
    CameraRoll.saveToCameraRoll(uri);
    const response = await fetch(uri);
    const blob = await response.blob();
    setBlob(blob);
    navigation.navigate('Edit');
  }
};

export { logout, snap };
