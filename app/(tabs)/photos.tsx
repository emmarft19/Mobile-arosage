import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { CameraType } from 'expo-camera';
import * as FileSystem from 'expo-file-system';

export default function PhotosScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const cameraRef = useRef<Camera | null>(null);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        if (photo && photo.uri) {
          console.log("Photo prise :", photo.uri);
          savePhoto(photo.uri);
        } else {
          console.error("Erreur lors de la prise de la photo : la réponse est null ou ne contient pas d'URI.");
        }
      } catch (error) {
        console.error("Erreur lors de la prise de la photo :", error);
      }
    }
  };

  const savePhoto = async (uri: string) => {
    try {
      const destinationUri = `${FileSystem.documentDirectory}/image.jpg`;
      await FileSystem.copyAsync({ from: uri, to: destinationUri });
      console.log('Photo enregistrée dans :', destinationUri);
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de la photo :', error);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (!hasPermission) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={CameraType.back}
      />

      <TouchableOpacity style={styles.button} onPress={takePicture}>
        <Text style={styles.text}>Prendre une photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
