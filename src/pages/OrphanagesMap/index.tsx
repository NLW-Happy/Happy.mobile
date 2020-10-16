import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';

import styles from './style';
import mapMarker from '../../assets/marker.png';

const App: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateToDetails = (): void => {
    navigation.navigate('OrphanageDetails');
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
        <Marker
          icon={mapMarker}
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
          coordinate={{
            latitude: -3.812394,
            longitude: -42.45123,
          }}
        >
          <Callout tooltip onPress={handleNavigateToDetails}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar das meninas</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>2 orfanatos encontrados</Text>
        <TouchableOpacity
          onPress={() => {}}
          style={styles.createOrphanagesButton}
        >
          <Feather name="plus" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
