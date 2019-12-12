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
  const path = `images/users/${uid}/${imgName}`;
  const cloudStoragePath = storageRef.child(path);
  cloudStoragePath.put(blob).then((snapshot): void => { // firebaseに保存
    resolve('store success');
  });
});
