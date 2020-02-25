/* eslint-disable global-require */
import React, { useRef, useEffect } from 'react';
import {
  View, Text, StyleSheet, ScrollView, Image, Animated, TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';
import { Card } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { formatDate, getPhotoDimentions } from '../../../utils/methodFactory';
import useUploadPhoto from '../../../utils/useUploadPhoto';
import NavigationService from '../../../utils/NavigationService';

const {
  screenWidth,
  screenHeight,
  photoHeight,
  photoWidth,
} = getPhotoDimentions();

type Props = {
  uid: string;
  record: {
    uri: string;
    text: string;
    date: string;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgb(252, 251, 255)',
  },
  cardButtonContainer: {
    marginBottom: 0,
  },
  photoContainer: {
    alignSelf: 'center',
  },
  photo: {
    width: photoWidth,
    height: photoHeight,
  },
  comentContainer: {
    paddingTop: 15,
  },
  comentLabel: {
    color: '#141823',
    fontSize: 19,
  },
  coment: {
    fontSize: 18,
    color: '#4E5665',
    marginLeft: 10,
  },
  buttonContainer: {
    marginBottom: 25,
  },
  button: {
    height: 50,
    width: screenWidth * 0.75,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(79, 55, 256)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'rgb(255, 255, 255)',
  },
  progressContainer: {
    flex: 1,
    marginBottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(252, 251, 255)',
  },
  circleLoader: {
    height: screenWidth - 240,
    width: screenWidth - 240,
  },
  progressBar: {
    height: 5,
    width: '75%',
    backgroundColor: 'white',
    marginTop: screenHeight * 0.15,
  },
  backIconContainer: {
    alignItems: 'flex-end',
    width: screenWidth,
    paddingRight: 30,
  },
  backIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 35,
  },
});

const ProgressBar = ({ width }) => (
  <View style={styles.progressBar}>
    <Animated.View style={[StyleSheet.absoluteFill, {
      backgroundColor: 'tomato', width,
    }]}
    />
  </View>
);

const renderProgress = (width) => (
  <View style={styles.progressContainer}>
    <LottieView
      source={require('../../../../lotties/197-glow-loading.json')}
      style={styles.circleLoader}
      autoPlay
      loop
    />
    <ProgressBar width={width} />
  </View>
);

export const RecordCard = ({ recordState }) => {
  const { uri, date, text: coment } = recordState;
  return (
    <View style={styles.cardButtonContainer}>
      <Card
        title={date}
        containerStyle={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,
          elevation: 10,
        }}
      >
        <View style={styles.photoContainer}>
          <Image
            resizeMode="contain"
            source={{ uri: `${uri}` }}
            style={styles.photo}
          />
        </View>
        <View style={styles.comentContainer}>
          <Text style={styles.comentLabel}>コメント</Text>
          <Text style={styles.coment}>{coment}</Text>
        </View>
      </Card>
    </View>
  );
};

const renderConfirmation = (recordState, done) => (
  // https://stackoverflow.com/questions/32664397/react-native-vertical-centering-when-using-scrollview
  <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={styles.container}>
      <View style={styles.backIconContainer}>
        <TouchableOpacity style={styles.backIcon} onPress={() => NavigationService.navigate('Record', {})}>
          <AntDesign name="close" size={35} />
        </TouchableOpacity>
      </View>
      <RecordCard recordState={recordState} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => done()}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  </ScrollView>
);

type FormatedState = {
  uri?: string;
  date?: string;
  text?: string;
};

const ConfirmationScreen: NavigationStackScreenComponent<Props> = ({
  uid,
  recordState,
}) => {
  const { uri, date, text } = recordState;
  const formatedDate = formatDate(date);

  const formatedState: FormatedState = { ...recordState, date: formatedDate };

  const animation = useRef(new Animated.Value(0));
  const {
    isLoading,
    done,
    percentage,
  } = useUploadPhoto(uid, formatedState);

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: percentage,
      duration: 800,
    }).start();
  }, [percentage]);

  const width = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? renderProgress(width)
        : renderConfirmation(formatedState, done)}
    </View>
  );
};

ConfirmationScreen.navigationOptions = {
  header: null,
};

export default ConfirmationScreen;
