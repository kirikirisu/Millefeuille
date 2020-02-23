import { useState } from 'react';
import firebase from './initializeFirebase';
import NavigationService from './NavigationService';

const useUploadPhoto = (uid, upLoadThunk) => {
  const [isLoading, setIsLoading] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false);

  const done = async () => {
    console.log('done');
    setIsLoading(true);
    setIsUploadingPhoto(true);
    const response = await fetch(upLoadThunk.uri); // uriをblobに変換
    const blob = await response.blob();
    const imgName = blob.data.name;
    const path = `images/users/${uid}/${imgName}`; // strageの参照を作成
    const storageRef = firebase.storage().ref();
    const cloudStoragePath = storageRef.child(path);
    const uploadTask = cloudStoragePath.put(blob); // 参照にアップロード
    uploadTask.on('state_changed', (snapshot) => { // アップロード状態
      console.log('second done');
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      if (progress === 100) setIsUploadingPhoto(false);
      setPercentage(progress);
      // console.log(`Upload is ${progress}% done`);
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED:
          console.log('アップロードが中断されました');
          setIsLoading(false);
          break;
        case firebase.storage.TaskState.RUNNING:
          console.log('アップロード中');
          break;
        default:
      }
    }, (error) => {
      setIsLoading(false);
      console.log(error);
    }, () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log('アップロード完了');

        const recordThunk = {
          url: downloadURL,
          date: upLoadThunk.date,
          coment: upLoadThunk.coment,
        };
        firebase.database().ref(`users/${uid}/${upLoadThunk.date}`).set(recordThunk);
        NavigationService.navigate('Done', {});
        setIsLoading(false);
      });
    });
  };

  return {
    isLoading,
    done,
    percentage,
    isUploadingPhoto,
  };
};

export default useUploadPhoto;
