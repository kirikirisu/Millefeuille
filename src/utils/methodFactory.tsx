import firebase from './initializeFirebase';

const logout = () => {
  firebase.auth().signOut().then(() => {
    console.log('ログアウトしました');
  })
    .catch((error) => {
      console.log(`ログアウト時にエラーが発生しました (${error})`);
    });
};

const hoge = () => {
  console.log('ログアウトしました');
};

export { logout, hoge };
