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

type ImgData = {
  blob?: Blob;
  imgName?: string;
}

const snap = async (cameraRef, setImgData, navigation) => {
  if (cameraRef) {
    const imgData: ImgData = {};
    const { uri } = await cameraRef.current.takePictureAsync(); // uriはローカルイメージURIで一時的にローカルに保存される
    CameraRoll.saveToCameraRoll(uri);
    const response = await fetch(uri);
    const blob = await response.blob();
    const imgName = blob.data.name;
    imgData.blob = blob;
    imgData.imgName = imgName;
    console.log(imgData);
    setImgData(imgData);
    navigation.navigate('Edit');
  }
};

export { logout, snap };
