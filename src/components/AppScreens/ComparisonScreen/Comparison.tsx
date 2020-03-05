import React, { useEffect, useState } from 'react';
import { NavigationBottomTabScreenComponent } from 'react-navigation-tabs';
import {
  Text, View, StyleSheet, ScrollView, Dimensions, ImageBackground, Platform, Image,
} from 'react-native';
import { widthPercentageToDP as w, heightPercentageToDP as h } from 'react-native-responsive-screen';

const { width } = Dimensions.get('screen');

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
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  strongShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  infor: {
    flexDirection: 'column',
    alignSelf: 'center',
    position: 'absolute',
    borderRadius: 12,
    paddingHorizontal: 36,
    paddingVertical: 10,
    bottom: 20,
    backgroundColor: 'rgb(255, 255, 255)',
    width: width - (36 * 4),
    height: (width * 0.6) * 0.35,
    elevation: 7,
  },
  title: {
    fontSize: h(2.5),
    fontWeight: '500',
    paddingBottom: h(0.7),
  },
  subTitle: {
    fontSize: h(2),
  },
  noData: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataTitle: {
    fontSize: 20,
    color: '#a9a9a9',
  },
});

const Item = ({ date, coment, url }) => (
  <View>
    <ImageBackground
      style={[styles.imgContainer, styles.shadow]}
      imageStyle={{ borderRadius: 12 }}
      source={{ uri: url }}
    />
    <View style={[styles.infor, styles.strongShadow]}>
      <ScrollView>
        <Text style={styles.title}>
          {date}
        </Text>
        <Text style={styles.subTitle}>
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
            <ScrollView style={{ flex: 1, backgroundColor: 'rgb(252, 251, 255)' }}>
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
        : (
          <View style={styles.noData}>
            <Text style={styles.noDataTitle}>記録はありません</Text>
          </View>
        )}
    </View>
  );
};

ComparisonScreen.navigationOptions = {
  headerTitle: '一覧',
};

export default ComparisonScreen;
