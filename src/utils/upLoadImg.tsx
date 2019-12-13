import firebase from './initializeFirebase';

export const createRandomStrings = (): string => {
  const l = 15;
  const t = new Date().getTime().toString();
  const c = `abcdefghijklmn${t}`;
  const cl = c.length;
  let r = '';

  for (let i = 0; i < l; i += 1) {
    r += c[Math.floor(Math.random() * cl)];
  }
  return r;
};

export const upLoadImg = (imgName, blob, uid): Promise<string> => new Promise((resolve) => {
  const storageRef = firebase.storage().ref();
  const path = `images/users/${uid}/${imgName}`; // strageの参照を作成
  const cloudStoragePath = storageRef.child(path);
  const uploadTask = cloudStoragePath.put(blob);
  uploadTask.on('state_changed', (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total
    // number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log(`Upload is ${progress}% done`);
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
      default:
    }
  }, (error) => {
    console.log(error);
  }, () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      console.log('File available at', downloadURL);
      resolve(downloadURL);
    });
  });
});
