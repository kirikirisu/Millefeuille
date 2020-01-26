import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { Dimensions } from 'react-native';
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

const getPhotoDimentions = () => {
  const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
  // const photoHeight = height * 0.45;
  // console.log(height, photoHeight);
  const photoWidth = screenWidth - 100;
  const photoHeight = photoWidth * (3 / 4); // アスペクト比４：３
  return {
    screenWidth,
    screenHeight,
    photoHeight,
    photoWidth,
  };
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

// eslint-disable-next-line consistent-return
const formatDate = (objDate): string => {
  const YEAR = 3;
  const DAY = 2;
  const strDate = objDate.toString();
  const element = strDate.split(' ');

  switch (element[1]) {
    case 'Jan':
      return `${element[YEAR]}-${1}-${element[DAY]}`;
    case 'Feb':
      return `${element[YEAR]}-${2}-${element[DAY]}`;
    case 'Mar':
      return `${element[YEAR]}-${3}-${element[DAY]}`;
    case 'Apr':
      return `${element[YEAR]}-${4}-${element[DAY]}`;
    case 'May':
      return `${element[YEAR]}-${5}-${element[DAY]}`;
    case 'Jun':
      return `${element[YEAR]}-${6}-${element[DAY]}`;
    case 'Jul':
      return `${element[YEAR]}-${7}-${element[DAY]}`;
    case 'Aug':
      return `${element[YEAR]}-${8}-${element[DAY]}`;
    case 'Sep':
      return `${element[YEAR]}-${9}-${element[DAY]}`;
    case 'Oct':
      return `${element[YEAR]}-${10}-${element[DAY]}`;
    case 'Nov':
      return `${element[YEAR]}-${11}-${element[DAY]}`;
    case 'Dec':
      return `${element[YEAR]}-${12}-${element[DAY]}`;
    default:
  }
};

export {
  logout, takePhoto, pickPhoto, getPhotoDimentions, formatDate,
};
