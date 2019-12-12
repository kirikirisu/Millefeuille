import React, { useRef, useState } from 'react';
// import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import {
  Button, Container, Icon, Text,
} from 'native-base';
import { Camera as ExpoCamera } from 'expo-camera';
import { upLoadImg } from '../../../utils/upLoadImg';
import usePermission from '../../../utils/usePermission';

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 100,
    zIndex: 1,
    alignSelf: 'center',
    height: 80,
    width: 80,
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    fontSize: 50,
  },
  flexOne: {
    flex: 1,
  },
  activityIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type Props = { uid: string };

const Camera: React.FC<Props> = ({ uid }) => {
  const { cameraPermission } = usePermission();
  const [isLoading, setIsLoading] = useState(false);

  const cameraRef = useRef(null);

  const snap = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.current.takePictureAsync(); // uriはローカルイメージURIで一時的にローカルに保存される
      const response = await fetch(uri);
      const blob = await response.blob();
      const imgName = blob.data.name;
      // console.log(blob.data.name);
      setIsLoading(true);
      upLoadImg(imgName, blob, uid)
        .then((url) => {
          console.log(url);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          console.log('store faild');
        });
    }
  };

  const renderCamera = (): React.ReactElement => {
    // console.log(cameraPermission);
    if (cameraPermission === null) {
      return <View />;
    } if (cameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <Container style={styles.flexOne}>
        <ExpoCamera style={styles.flexOne} ref={cameraRef}>
          <View style={styles.flexOne}>
            <Button
              rounded
              icon
              onPress={() => snap()}
              style={styles.button}
            >
              <Icon name="camera" style={styles.icon} />
            </Button>
          </View>
        </ExpoCamera>
      </Container>
    );
  };

  const renderActivityIndicator = () => (
    <View style={styles.activityIndicator}>
      <ActivityIndicator />
    </View>
  );

  return (
    <>
      {
        isLoading
          ? renderActivityIndicator()
          : renderCamera()
      }
    </>
  );
};

export default Camera;
