import firebase from './initializeFirebase';


export const logout = () => {
  firebase.auth().signOut().then(() => {
    console.log('ログアウトしました');
  })
    .catch((error) => {
      console.log(`ログアウト時にエラーが発生しました (${error})`);
    });
};

export const hoge = () => {
  console.log('ログアウトしました');
};
