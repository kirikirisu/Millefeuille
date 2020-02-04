import React, { useEffect, useState } from 'react';
import { NavigationBottomTabScreenComponent } from 'react-navigation-tabs';
import {
  Text, View, StyleSheet, ScrollView,
} from 'react-native';

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
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
  },
});

function Item({ data }) {
  console.log(data);
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{data.date}</Text>
    </View>
  );
}

// eslint-disable-next-line max-len
const conversionForSection = (thunk): Promise<{ title: string; data: Record }[]> => new Promise((resolve) => {
  const sectionData = [];
  Object.keys(thunk).forEach((key, index) => {
    sectionData.push({ title: key, data: thunk[key] });
  });
  resolve(sectionData);
});

const ComparisonScreen: React.FC<Props> = ({ recordThunk }) => {
  console.log('mount');
  const [data, setData] = useState([]);

  useEffect(() => {
    conversionForSection(recordThunk)
      .then((value: { title: string; data: Record }[]) => { setData(value); });
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        {
          data.map((item, index) => {
            console.log(item.title);
            return (
              <Item key={item.title} data={item.data} />
            );
          })
        }
      </View>
    </ScrollView>
  );
};
export default ComparisonScreen;
