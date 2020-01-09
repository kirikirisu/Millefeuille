import React, { useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

const renderPhoto = () => (
  <View style={styles.container}>
    <MaterialIcons name="photo-camera" size={40} color="#a9a9a9" />
    <FontAwesome name="photo" size={40} color="#a9a9a9" />
  </View>
);

const Record = () => {
  console.log();
  return (
    <View style={{ flex: 1 }}>
      {renderPhoto()}
    </View>
  );
};

Record.navigationOptions = {
  title: '記録',
};

export default Record;
