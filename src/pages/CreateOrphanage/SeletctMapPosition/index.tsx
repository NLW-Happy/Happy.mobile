import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { Marker, MapEvent } from 'react-native-maps';

import mapMarkerImg from '../../../assets/marker.png';
import styles from './style';

const SelectMapPosition: React.FC = () => {
  const navigation = useNavigation();
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const handleNextStep = (): void => {
    navigation.navigate('OrphanageData', { position });
  };

  const handleSelectMapPosition = (event: MapEvent): void => {
    setPosition(event.nativeEvent.coordinate);
  };

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: -3.812394,
          longitude: -42.45123,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        style={styles.mapStyle}
        onPress={handleSelectMapPosition}
      >
        {position.latitude !== 0 && (
          <Marker
            icon={mapMarkerImg}
            coordinate={{
              latitude: position.latitude,
              longitude: position.longitude,
            }}
          />
        )}
      </MapView>

      {position.latitude !== 0 && (
        <RectButton style={styles.nextButton} onPress={handleNextStep}>
          <Text style={styles.nextButtonText}>Próximo</Text>
        </RectButton>
      )}
    </View>
  );
};

export default SelectMapPosition;
