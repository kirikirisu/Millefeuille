import React, { useRef } from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import { View, StyleSheet } from 'react-native';
import {
  Button, Container, Icon, Text,
} from 'native-base';
import { Camera as ExpoCamera } from 'expo-camera';
import usePermission from '../../../utils/usePermission';
import { snap } from '../../../utils/methodFactory';

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

type Props = {
  setImgData: () => void;
  navigation: NavigationStackProp;
};

const Camera: React.FC<Props> = ({ setImgData, navigation }) => {
  const { cameraPermission } = usePermission();
  const cameraRef = useRef(null);

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
              onPress={() => snap(cameraRef, setImgData, navigation)}
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
    <>
      {renderCamera()}
    </>
  );
};

export default Camera;
