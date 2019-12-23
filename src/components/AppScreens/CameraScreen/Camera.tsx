import React, { useRef } from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import {
  View, StyleSheet, TouchableOpacity, Button, Text,
} from 'react-native';
import Constants from 'expo-constants';
import { MaterialIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import { Camera as ExpoCamera } from 'expo-camera';
import usePermission from '../../../utils/usePermission';
import { snap } from '../../../utils/methodFactory';
import ImagePicker from './ImagePicker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topBar: {
    flex: 0.2,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: Constants.statusBarHeight / 2,
  },
  toggleButton: {
    flex: 0.25,
    height: 40,
    marginHorizontal: 2,
    marginBottom: 10,
    marginTop: 20,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBar: {
    paddingBottom: 5,
    backgroundColor: 'transparent',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    flex: 0.12,
    flexDirection: 'row',
  },
});

type Props = {
  setUri: () => void;
  navigation: NavigationStackProp;
};

const Camera: React.FC<Props> = ({ setUri, navigation }) => {
  const { cameraPermission } = usePermission();
  const cameraRef = useRef(null);

  const renderTopBar = () => (
    <View style={styles.topBar}>
      <TouchableOpacity style={styles.toggleButton}>
        <AntDesign
          name="close"
          size={35}
          onPress={() => { navigation.navigate('Home'); }}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.toggleButton}>
        <MaterialIcons name="flash-on" size={32} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.toggleButton}>
        <Ionicons name="ios-reverse-camera" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );

  const renderBottomBar = () => (
    <View style={styles.bottomBar}>
      <View style={styles.toggleButton}>
        <ImagePicker setUri={setUri} />
      </View>
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={() => snap(cameraRef, setUri, navigation)}
      >
        <AntDesign name="camera" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );

  const renderCamera = (): React.ReactElement => {
    console.log(cameraPermission);
    if (cameraPermission === null) {
      return <View />;
    } if (cameraPermission !== 'granted') {
      navigation.navigate('Prompt');
    }
    return (
      <View style={{ flex: 1 }}>
        <ExpoCamera ref={cameraRef} style={styles.camera}>
          {renderTopBar()}
          {renderBottomBar()}
        </ExpoCamera>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderCamera()}
    </View>
  );
};

export default Camera;
