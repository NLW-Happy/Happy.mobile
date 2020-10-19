import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Image,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import styles from './style';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../../services/api';

interface OrphanagesDataRouteParams {
  position: { latitude: number; longitude: number };
}

const OrphanageData: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const params = route.params as OrphanagesDataRouteParams;

  const [name, setName] = useState<string>('');
  const [about, setAbout] = useState<string>('');
  const [instructions, setInstructions] = useState<string>('');
  const [opening_hours, setOpeningHours] = useState<string>('');
  const [open_on_weekends, setOpenOnWeekends] = useState<boolean>(true);
  const [images, setImages] = useState<string[]>([]);

  const handleSelectImages = async (): Promise<void> => {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('É necessário permissão para acessar sua galeria de fotos!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaType: ImagePicker.MediaTypeOptions.Images,
    });

    if (result.cancelled) {
      return;
    }

    setImages([...images, result.uri]);
  };

  const handleCreateOrphanage = async (): Promise<void> => {
    const { latitude, longitude } = params.position;

    const form = new FormData();

    form.append('name', name);
    form.append('user_id', '1');
    form.append('about', about);
    form.append('instructions', instructions);
    form.append('opening_hours', opening_hours);
    form.append('open_on_weekends', String(open_on_weekends));
    form.append('latitude', String(latitude));
    form.append('longitude', String(longitude));

    images.forEach((image, index) => {
      form.append('images', {
        type: 'image/jpg',
        uri: image,
        name: `image_${index}.jpg`,
      } as any);
    });

    await api.post('orphanage', form);

    navigation.navigate('OrphanagesMap');
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 24 }}
    >
      <Text style={styles.title}>Dados</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Sobre</Text>
      <TextInput
        style={[styles.input, { height: 110 }]}
        value={about}
        onChangeText={setAbout}
        multiline
      />

      {/* <Text style={styles.label}>Whatsapp</Text>
      <TextInput style={styles.input} />*/}

      <Text style={styles.label}>Fotos</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.uploadedImagesContainner}
      >
        {images.map(image => (
          <Image
            key={image}
            style={styles.uploadedImage}
            source={{ uri: image }}
          />
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.imagesInput} onPress={handleSelectImages}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </TouchableOpacity>

      <Text style={styles.title}>Visitação</Text>

      <Text style={styles.label}>Instruções</Text>
      <TextInput
        style={[styles.input, { height: 110 }]}
        multiline
        value={instructions}
        onChangeText={setInstructions}
      />

      <Text style={styles.label}>Horario de visitas</Text>
      <TextInput
        style={styles.input}
        value={opening_hours}
        onChangeText={setOpeningHours}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Atende final de semana?</Text>
        <Switch
          thumbColor="#fff"
          trackColor={{ false: '#ccc', true: '#39CC83' }}
          value={open_on_weekends}
          onValueChange={setOpenOnWeekends}
        />
      </View>

      <RectButton style={styles.nextButton} onPress={handleCreateOrphanage}>
        <Text style={styles.nextButtonText}>Cadastrar</Text>
      </RectButton>
    </ScrollView>
  );
};

export default OrphanageData;
