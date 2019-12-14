import { useState, useEffect } from 'react';
import * as Permissions from 'expo-permissions';

const usePermission = () => {
  const [cameraPermission, setCameraPermission] = useState<null|boolean>(null);

  const permission = async (): Promise<void> => {
    const { status } = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL,
    );
    const pms = (status === 'granted');
    setCameraPermission(pms);
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
