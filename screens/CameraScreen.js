import { View, Text, TouchableOpacity } from 'react-native'
import { Camera } from 'expo-camera';
import React, { useRef, useState, useEffect } from 'react';
import styledComponents from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileCamera = styledComponents(Camera)`
    width: 100%;
    height: 100%;
`;




const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
      //AsyncStorage
    }
  };
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })
  })
  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera </Text>
  }
  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={Camera.Constants.Type.front}
      >
      </ProfileCamera>
    </TouchableOpacity>
  )
};


// <TouchableOpacity onPress={snap}> permet à l'user de prendre une photo
// la fonction snap est définie async car le module caméra est en dehors du domaine de react

export default CameraScreen