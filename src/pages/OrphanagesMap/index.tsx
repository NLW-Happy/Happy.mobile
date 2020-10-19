import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';

import styles from './style';
import mapMarker from '../../assets/marker.png';
import { RectButton } from 'react-native-gesture-handler';
import IOrphanages from '../../entities/IOrphanage';

const App: React.FC = () => {
  const navigation = useNavigation();

  const [orphanagesData, setOrphanagesData] = useState<IOrphanages[]>([]);

  useFocusEffect(() => {
    async function fetchData() {
      const response = await api.get('orphanage');
      setOrphanagesData(response.data);
    }
    fetchData();
  });

  const handleNavigateToDetails = (id: number): void => {
    navigation.navigate('OrphanageDetails', { id });
  };

  const handleNavigateToCreateOrphanage = (): void => {
    navigation.navigate('CreateOrphanage');
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -3.812394,
          longitude: -42.45123,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        {orphanagesData.map(orphanage => (
          <Marker
            key={orphanage.id}
            icon={mapMarker}
            calloutAnchor={{
              x: 2.7,
              y: 0.8,
            }}
            coordinate={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
            }}
          >
            <Callout
              tooltip
              onPress={() => handleNavigateToDetails(orphanage.id)}
            >
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>{orphanage.name}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {orphanagesData.length} orfanatos encontr ados
        </Text>
        <RectButton
          onPress={handleNavigateToCreateOrphanage}
          style={styles.createOrphanagesButton}
        >
          <Feather name="plus" size={20} color="#FFF" />
        </RectButton>
      </View>
    </View>
  );
};

export default App;
