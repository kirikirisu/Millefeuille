import { useState } from 'react';
import firebase from './initializeFirebase';

const useUploadPhoto = (uid, uri) => {
  const [isLoading, setIsLoading] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [imgUrl, setImgUrl] = useState(null);
  const [indeterminate, setIndeterminate] = useState(true);

  const snap = async () => {
    setIsLoading(true);
    setIndeterminate(false);
    const response = await fetch(uri); // uriをblobに変換
    const blob = await response.blob();
    const imgName = blob.data.name;
    const path = `images/users/${uid}/${imgName}`; // strageの参照を作成
    const storageRef = firebase.storage().ref();
    const cloudStoragePath = storageRef.child(path);
    const uploadTask = cloudStoragePath.put(blob); // 参照にアップロード
    uploadTask.on('state_changed', (snapshot) => { // アップロード状態
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      if (progress === 100) setIndeterminate(true);
      setPercentage(progress);
      // console.log(`Upload is ${progress}% done`);
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED:
          console.log('アップロードが中断されました');
          setIsLoading(false);
          break;
        case firebase.storage.TaskState.RUNNING:
          // console.log('アップロード中');
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
        setImgUrl(downloadURL);
        setIsLoading(false);
        console.log('アップロード完了');
      });
    });
  };

  return {
    isLoading,
    snap,
    percentage,
    imgUrl,
    indeterminate,
  };
};

export default useUploadPhoto;
