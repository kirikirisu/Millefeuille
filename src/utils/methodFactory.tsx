import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import firebase from './initializeFirebase';
import store from '../../store';
import usePermission from './usePermission';
import { setUri } from '../actions/index';

const logout = () => {
  firebase.auth().signOut().then(() => {
    console.log('ログアウトしました');
  })
    .catch((error) => {
      console.log(`ログアウト時にエラーが発生しました (${error})`);
    });
};

const takePhoto = async (cameraPermission): Promise<void> => {
  if (cameraPermission) {
    const { cancelled, uri } = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!cancelled) {
      MediaLibrary.saveToLibraryAsync(uri);
      store.dispatch(setUri(uri));
    }
  }
};

const pickPhoto = async (cameraPermission): Promise<void> => {
  if (cameraPermission) {
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!cancelled) {
      store.dispatch(setUri(uri));
    }
  }
};

const setDate = (setDt) => {
  console.log();
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

export {
  logout, takePhoto, pickPhoto, setDate,
};
