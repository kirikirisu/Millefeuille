/* eslint-disable global-require */
import React, { useRef, useEffect } from 'react';
import {
  View, Text, StyleSheet, ScrollView, Image, Animated,
} from 'react-native';
import LottieView from 'lottie-react-native';
import { Card, Button } from 'react-native-elements';
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
    height: screenWidth - 250,
    width: screenWidth - 250,
  },
  progressBar: {
    height: 10,
    width: '90%',
    backgroundColor: 'white',
    borderColor: '#56423D',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 25,
  },
});

const ProgressBar = ({ width }) => (
  <View style={styles.progressBar}>
    <Animated.View style={[StyleSheet.absoluteFill, {
      backgroundColor: '#BEA6A0', width, borderRadius: 5,
    }]}
    />
  </View>
);

const renderProgress = (width) => (
  <View style={styles.progressContainer}>
    <LottieView
      source={require('../../../../lotties/4383-circle-loader.json')}
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

const Confirmation: React.FC<Props> = ({ uid, record }) => {
  const { uri, date, text: coment } = record;

  const animation = useRef(new Animated.Value(0));
  const {
    isLoading,
    done,
    percentage,
    imgUrl,
  } = useUploadPhoto(uid, uri);

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: percentage,
      duration: 100,
    }).start();
  }, [percentage]);

  const width = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });
  const formatedDate = formatDate(date);

  return (
    <View style={{ flex: 1 }}>
      {!isLoading ? renderProgress(width)
        : renderCard(uri, formatedDate, coment, done)}
    </View>
  );
};

export default Confirmation;
