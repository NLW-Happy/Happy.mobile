import React, { useEffect, useState } from 'react';
import {
  Image,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import { Feather, FontAwesome } from '@expo/vector-icons';

import mapMarkerImg from '../../assets/marker.png';
import { RectButton } from 'react-native-gesture-handler';

import api from '../../services/api';

import styles from './style';
import IOrphanage from '../../entities/IOrphanage';
import { useRoute } from '@react-navigation/native';

interface OrphanageDetailsRouteParams {
  id: number;
}

const OrphanageDetails: React.FC = () => {
  const [orphanagesData, setOrphanagesData] = useState<IOrphanage>();
  const route = useRoute();
  const params = route.params as OrphanageDetailsRouteParams;

  function handleOpenGoogleMapsRoutes(): void {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${orphanagesData?.latitude}, ${orphanagesData?.longitude}`,
    );
  }

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`orphanage/${params.id}`);
      setOrphanagesData(response.data);
    }
    fetchData();
  }, [params.id]);

  if (!orphanagesData) {
    return (
      <View>
        <Text>Carregando!</Text>
      </View>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {orphanagesData && (
        <>
          <View style={styles.imagesContainer}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              pagingEnabled
            >
              {orphanagesData.images.map(image => (
                <Image
                  key={image.id}
                  style={styles.image}
                  source={{
                    uri: image.url,
                  }}
                />
              ))}
            </ScrollView>
          </View>

          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{orphanagesData?.name}</Text>
            <Text style={styles.description}>{orphanagesData?.about}</Text>

            <View style={styles.mapContainer}>
              <MapView
                initialRegion={{
                  latitude: orphanagesData.latitude,
                  longitude: orphanagesData.longitude,
                  latitudeDelta: 0.008,
                  longitudeDelta: 0.008,
                }}
                zoomEnabled={false}
                pitchEnabled={false}
                scrollEnabled={false}
                rotateEnabled={false}
                style={styles.mapStyle}
              >
                <Marker
                  icon={mapMarkerImg}
                  coordinate={{
                    latitude: orphanagesData.latitude,
                    longitude: orphanagesData.longitude,
                  }}
                />
              </MapView>

              <TouchableOpacity
                style={styles.routesContainer}
                onPress={handleOpenGoogleMapsRoutes}
              >
                <Text style={styles.routesText}>Ver rotas no Google Maps</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.separator} />
            <Text style={styles.title}>Instruções para visita</Text>
            <Text style={styles.description}>
              {orphanagesData.instructions}
            </Text>

            <View style={styles.scheduleContainer}>
              <View style={[styles.scheduleItem, styles.scheduleItemBlue]}>
                <Feather name="clock" size={40} color="#2AB5D1" />
                <Text style={[styles.scheduleText, styles.scheduleTextBlue]}>
                  Segunda {orphanagesData.opening_hours}
                </Text>
              </View>

              {orphanagesData.open_on_weekends ? (
                <View style={[styles.scheduleItem, styles.scheduleItemGreen]}>
                  <Feather name="info" size={40} color="#39CC83" />
                  <Text style={[styles.scheduleText, styles.scheduleTextGreen]}>
                    Atendemos fim de semana
                  </Text>
                </View>
              ) : (
                <View style={[styles.scheduleItem, styles.scheduleItemRed]}>
                  <Feather name="info" size={40} color="#ff669d" />
                  <Text style={[styles.scheduleText, styles.scheduleTextRed]}>
                    Não atendemos fim de semana
                  </Text>
                </View>
              )}
            </View>

            <RectButton style={styles.contactButton} onPress={() => {}}>
              <FontAwesome name="whatsapp" size={24} color="#FFF" />
              <Text style={styles.contactButtonText}>Entrar em contato</Text>
            </RectButton>
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default OrphanageDetails;
