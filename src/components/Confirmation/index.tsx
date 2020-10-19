import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './style';
import ConfirmLogo from '../../assets/confirm-logo.png';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
  onPress: () => void;
}

const Confirmation: React.FC<ButtonProps> = ({ onPress }) => {
  return (
    <>
      <View style={styles.container}>
        <Image source={ConfirmLogo} />
        <Text style={styles.confirmationTitle}>Ebaaa!</Text>
        <Text style={styles.confirmationText}>
          O cadastro deu certo e foi enviado ao administrador para ser aprovado.
          Agora é só esperar :)
        </Text>
      </View>
      <RectButton onPress={onPress} style={styles.confirmationButton}>
        <Text style={styles.confirmationButtonText}>Confirmar</Text>
      </RectButton>
    </>
  );
};

export default Confirmation;
