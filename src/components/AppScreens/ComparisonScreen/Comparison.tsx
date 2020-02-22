import React, { useEffect, useState } from 'react';
import { NavigationBottomTabScreenComponent } from 'react-navigation-tabs';
import {
  Text, View, StyleSheet, ScrollView, Dimensions, ImageBackground, Platform, Image,
} from 'react-native';
import Header from '../Header';

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
  container: {
    flex: 1,
    backgroundColor: 'rgb(252, 251, 255)',
  },
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
    elevation: 10,
  },
  title: {
    fontSize: 14 * 1.25,
    fontWeight: '500',
    paddingBottom: 5,
  },
});

const Item = ({ date, coment, url }) => (
  <View>
    <ImageBackground
      style={[styles.imgContainer, styles.shadow]}
      imageStyle={{ borderRadius: 12 }}
      source={{ uri: url }}
    />
    <View style={styles.infor}>
      <ScrollView>
        <Text style={styles.title}>
          {date}
        </Text>
        <Text>
          {coment}
        </Text>
      </ScrollView>
    </View>
  </View>
);

const ComparisonScreen: React.FC<Props> = ({ recordThunk }) => {
  console.log('mount');

  return (
    <View style={{ flex: 1 }}>
      {recordThunk
        ? (
          <View style={styles.container}>
            <ScrollView style={{ flex: 1, backgroundColor: 'rgb(255, 255, 255)' }}>
              {
                Object.keys(recordThunk).map((key, index) => {
                  const { date, coment, url } = recordThunk[key];
                  return (
                    <Item key={date} date={date} coment={coment} url={url} />
                  );
                })
              }
            </ScrollView>
          </View>
        )
        : <View />}
    </View>
  );
};

ComparisonScreen.navigationOptions = {
  headerTitle: '一覧',
};

export default ComparisonScreen;
