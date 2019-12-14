import React, { useRef } from 'react';
// import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { View, StyleSheet } from 'react-native';
import {
  Button, Container, Icon, Text,
} from 'native-base';
import * as Progress from 'react-native-progress';
import { Camera as ExpoCamera } from 'expo-camera';
import useTakePicuture from '../../../utils/useTakePicuture';
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
  progress: {
    margin: 10,
  },
});

type Props = { uid: string };

const Camera: React.FC<Props> = ({ uid }) => {
  const { cameraPermission } = usePermission();
  const cameraRef = useRef(null);
  const {
    isLoading,
    snap,
    percentage,
    imgUrl,
    indeterminate,
  } = useTakePicuture(uid, cameraRef);

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
  const renderProgress = () => (
    <View style={styles.activityIndicator}>
      <Progress.Circle
        style={styles.progress}
        progress={percentage}
        indeterminate={indeterminate}
        size={120}
        showsText
      />
    </View>
  );

  return (
    <>
      {
        isLoading
          ? renderProgress()
          : renderCamera()
      }
    </>
  );
};

export default Camera;
