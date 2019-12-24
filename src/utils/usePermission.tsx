import { useState, useEffect } from 'react';
import * as Permissions from 'expo-permissions';

const usePermission = () => {
  const [cameraPermission, setCameraPermission] = useState<null|string>(null);

  const permission = async (): Promise<void> => {
    const { status: existingStatus, permissions } = await Permissions.getAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL,
    );
    console.log(permissions);
    setCameraPermission(existingStatus);

    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.CAMERA_ROLL,
      );
      setCameraPermission(status);
      // console.log(status);
    }

    if (cameraPermission !== 'granted') {
      // console.log('nope');
    }
  };

  useEffect(() => {
    console.log('permission');
    permission();
  }, []);

  return {
    cameraPermission,
  };
};

export default usePermission;
