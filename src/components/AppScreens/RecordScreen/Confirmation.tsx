import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, Image,
} from 'react-native';
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
  },
  progressContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const renderProgress = (percentage, indeterminate) => (
  <View style={styles.progressContainer}>
    <View>hoge</View>
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
          style={styles.button}
          title="保存する"
          onPress={() => done()}
        />
      </View>
    </View>
  </ScrollView>
);


const Confirmation: React.FC<Props> = ({ uid, record }) => {
  const { uri, date, text: coment } = record;

  const {
    isLoading,
    done,
    percentage,
    imgUrl,
    indeterminate,
  } = useUploadPhoto(uid, uri);

  const formatedDate = formatDate(date);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? renderProgress(percentage, indeterminate)
        : renderCard(uri, formatedDate, coment, done)}
    </View>
  );
};

export default Confirmation;
