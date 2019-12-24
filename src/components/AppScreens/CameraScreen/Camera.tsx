import React, { useRef } from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import {
  View, StyleSheet, TouchableOpacity, Dimensions,
} from 'react-native';
import Constants from 'expo-constants';
import { MaterialIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import { Camera as ExpoCamera } from 'expo-camera';
import usePermission from '../../../utils/usePermission';
import { snap } from '../../../utils/methodFactory';
import ImagePicker from './ImagePicker';

const { height, width } = Dimensions.get('window');
const aspectRatio = 4 / 3;
const cameraHeight = width * aspectRatio;
const barHeight = (height - cameraHeight) / 2;

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
    height: barHeight,
    backgroundColor: 'black',
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
    backgroundColor: 'black',
    height: barHeight,
    justifyContent: 'space-between',
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
        <MaterialIcons name="flash-on" size={32} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.toggleButton}>
        <Ionicons name="ios-reverse-camera" size={32} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.toggleButton}>
        <AntDesign
          name="close"
          size={35}
          onPress={() => { navigation.navigate('Home'); }}
          color="white"
        />
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
    console.log(barHeight);

    if (cameraPermission === null) {
      return <View />;
    } if (cameraPermission !== 'granted') {
      navigation.navigate('Prompt');
    }
    return (
      <View style={{ flex: 1 }}>
        <ExpoCamera
          ref={cameraRef}
          style={styles.camera}
        >
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
