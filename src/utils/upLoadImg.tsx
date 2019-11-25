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

export const upLoadImg = (imgName, blob): Promise<string> => new Promise((resolve) => {
  const storageRef = firebase.storage().ref();
  const cloudStoragePath = storageRef.child(imgName);
  cloudStoragePath.put(blob).then((snapshot): void => { // firebaseに保存
    cloudStoragePath.getDownloadURL().then((url) => { // 保存したらその画像のurlを入手
      console.log('ok');
      resolve(url);
    }).catch((error) => {
      console.log(error);
    });
  });
});
