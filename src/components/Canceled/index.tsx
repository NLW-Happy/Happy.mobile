import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './style';
import CancelLogo from '../../assets/cancel-logo.png';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
  onPress: () => void;
}

const Canceled: React.FC<ButtonProps> = ({ onPress }) => {
  return (
    <>
      <View style={styles.container}>
        <Image source={CancelLogo} />
        <Text style={styles.canceledTitle}>Cancelar cadastro</Text>
        <Text style={styles.canceledText}>
          Tem certeza que quer cancelar esse cadastro?
        </Text>
      </View>
      <View style={styles.containerButtons}>
        <RectButton style={styles.canceledButton}>
          <Text style={[styles.canceledButtonText, { color: '#D6487B' }]}>
            Não
          </Text>
        </RectButton>
        <RectButton
          style={[styles.canceledButton, { backgroundColor: '#D6487B' }]}
        >
          <Text style={styles.canceledButtonText}>Sim</Text>
        </RectButton>
      </View>
    </>
  );
};

export default Canceled;
