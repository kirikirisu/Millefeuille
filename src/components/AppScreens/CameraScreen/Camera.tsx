import React, { useRef } from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import { View, StyleSheet } from 'react-native';
import {
  Button, Container, Icon, Text,
} from 'native-base';
import { AntDesign } from '@expo/vector-icons';
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
  backIcon: {
    marginTop: 35,
    marginLeft: 30,
  },
});

type Props = {
  setBlob: () => void;
  navigation: NavigationStackProp;
};

const Camera: React.FC<Props> = ({ setBlob, navigation }) => {
  const { cameraPermission } = usePermission();
  const cameraRef = useRef(null);

  const renderCamera = (): React.ReactElement => {
    console.log(cameraPermission);
    if (cameraPermission === null) {
      return <View />;
    } if (cameraPermission !== 'granted') {
      navigation.navigate('Prompt');
    }
    return (
      <Container style={styles.flexOne}>
        <ExpoCamera style={styles.flexOne} ref={cameraRef}>
          <View style={styles.flexOne}>
            <AntDesign
              name="close"
              size={40}
              style={styles.backIcon}
              onPress={() => { navigation.navigate('Home'); }}
              color="white"
            />
            <Button
              rounded
              icon
              onPress={() => snap(cameraRef, setBlob, navigation)}
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
