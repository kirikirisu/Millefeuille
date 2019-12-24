import React from 'react';
import { withNavigation } from 'react-navigation';
import { Button, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImagePick = ({ setUri, navigation }): React.ReactElement => {
  const pickImage = async () => {
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(uri);

    if (!cancelled) {
      setUri(uri);
      navigation.navigate('Edit');
    }
  };
  return (
    <View>
      <Button
        title="Liblary"
        color="white"
        onPress={() => pickImage()}
      />
    </View>
  );
};

export default withNavigation(ImagePick);
