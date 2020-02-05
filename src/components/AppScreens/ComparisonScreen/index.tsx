import React, { useEffect, useState } from 'react';
import { NavigationBottomTabScreenComponent } from 'react-navigation-tabs';
import {
  Text, View, StyleSheet, ScrollView, Dimensions, ImageBackground, Platform,
} from 'react-native';

const { height, width } = Dimensions.get('screen');

type Props = {
  recordThunk: Record;
};

type Record = {
  coment: string;
  date: string;
  url: string;
};

const styles = StyleSheet.create({
  imgContainer: {
    width: width - 72,
    height: width * 0.6,
    marginHorizontal: 36,
    paddingHorizontal: 36,
    paddingVertical: 36 * 0.66,
    marginVertical: 20,
    borderRadius: 12,
    marginBottom: (width * 0.6) * 0.35,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  infor: {
    flexDirection: 'column',
    alignSelf: 'center',
    position: 'absolute',
    borderRadius: 12,
    paddingHorizontal: 36,
    paddingVertical: 10,
    bottom: 20,
    backgroundColor: '#a9a9a9',
    width: width - (36 * 4),
    height: (width * 0.6) * 0.35,
  },
  title: {
    fontSize: 14 * 1.25,
    fontWeight: '500',
    paddingBottom: 5,
  },
});

const Item = ({ title, data }) => {
  console.log(title, data);
  return (
    <View>
      <ImageBackground
        style={[styles.imgContainer, styles.shadow]}
        imageStyle={{ borderRadius: 12 }}
        source={{ uri: data.url }}
      />
      <View style={styles.infor}>
        <ScrollView>
          <Text style={styles.title}>
            {data.date}
          </Text>
          <Text>
            {data.coment}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

const conversionForSection = (thunk): Promise<{ title: string; data: Record }[]> => new Promise(
  (resolve) => {
    const sectionData = [];
    Object.keys(thunk).forEach((key, index) => {
      sectionData.push({ title: key, data: thunk[key] });
    });
    resolve(sectionData);
  },
);

const ComparisonScreen: React.FC<Props> = ({ recordThunk }) => {
  console.log('mount');
  const [data, setData] = useState([]);

  useEffect(() => {
    conversionForSection(recordThunk)
      .then((value: { title: string; data: Record }[]) => { setData(value); });
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'rgb(255, 255, 255)' }}>
      {
        data.map((item, index) => {
          const { title, data: recordData } = item;
          return (
            <Item key={title} title={title} data={recordData} />
          );
        })
      }
    </ScrollView>
  );
};
export default ComparisonScreen;
