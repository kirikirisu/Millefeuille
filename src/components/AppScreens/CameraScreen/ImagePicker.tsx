import React from 'react';
import { Button, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImagePick = ({ setUri }): React.ReactElement => {
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
    }
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Pick an image from camera roll"
        onPress={() => pickImage()}
      />
    </View>
  );
};
export default ImagePick;
