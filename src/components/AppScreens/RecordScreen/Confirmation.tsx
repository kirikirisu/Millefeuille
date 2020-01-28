/* eslint-disable global-require */
import React, { useRef, useEffect } from 'react';
import {
  View, Text, StyleSheet, ScrollView, Image, Animated,
} from 'react-native';
import LottieView from 'lottie-react-native';
import { Card, Button } from 'react-native-elements';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { formatDate, getPhotoDimentions } from '../../../utils/methodFactory';
import useUploadPhoto from '../../../utils/useUploadPhoto';

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
    justifyContent: 'center',
    marginBottom: 25,
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
    marginTop: 15,
  },
  button: {
    width: screenWidth - 200,
    backgroundColor: '#00B2EC',
  },
  progressContainer: {
    flex: 1,
    marginBottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleLoader: {
    height: screenWidth - 240,
    width: screenWidth - 240,
  },
  progressBar: {
    height: 5,
    width: '75%',
    backgroundColor: 'white',
    marginTop: 45,
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

const renderCard = (uri, formatedDate, coment, done) => (
  // https://stackoverflow.com/questions/32664397/react-native-vertical-centering-when-using-scrollview
  <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={styles.container}>
      <Card title={formatedDate}>
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
      <View style={styles.buttonContainer}>
        <Button
          buttonStyle={styles.button}
          title="保存する"
          onPress={() => done()}
        />
      </View>
    </View>
  </ScrollView>
);

const Confirmation: NavigationStackScreenComponent<Props> = ({ uid, record }) => {
  const { uri, date, text: coment } = record;
  const formatedDate = formatDate(date);

  const animation = useRef(new Animated.Value(0));
  const {
    isLoading,
    done,
    percentage,
  } = useUploadPhoto(uid, uri, formatedDate, coment);

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
        : renderCard(uri, formatedDate, coment, done)}
    </View>
  );
};

Confirmation.navigationOptions = {
  header: null,
};

export default Confirmation;
