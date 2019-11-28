import React, { useState, useEffect, useRef } from 'react';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { View, StyleSheet } from 'react-native';
import {
  Button, Container, Icon, Text,
} from 'native-base';
import { Camera as ExpoCamera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { upLoadImg } from '../../../utils/upLoadImg';

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
});

const Camera: NavigationStackScreenComponent = () => {
  const [cameraPermission, setCameraPermission] = useState<null|boolean>(null);

  const permission = async (): Promise<void> => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    const pms = (status === 'granted');
    setCameraPermission(pms);
  };
  useEffect(() => {
    permission();
  }, []);

  const cameraRef = useRef(null);

  const snap = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.current.takePictureAsync(); // uriはローカルイメージURIで一時的にローカルに保存される
      const response = await fetch(uri);
      const blob = await response.blob();
      const imgName = blob.data.name;
      // console.log(blob.data.name);
      upLoadImg(imgName, blob).then((url) => { console.log(url); });
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

  return (
    <>{renderCamera()}</>
  );
};

export default Camera;
