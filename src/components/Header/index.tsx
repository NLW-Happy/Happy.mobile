import React from 'react';
import { View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

interface HeaderProps {
  title: string;
  hasCLose?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, hasCLose = true }) => {
  const navigaton = useNavigation();

  const handleGoBackToHomeScreen = (): void => {
    navigaton.navigate('OrphanagesMap');
  };

  return (
    <SafeAreaView style={styles.container}>
      <BorderlessButton onPress={navigaton.goBack}>
        <Feather name="arrow-left" size={26} color="#15b6d5" />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>
      {hasCLose ? (
        <BorderlessButton onPress={handleGoBackToHomeScreen}>
          <Feather name="x" size={26} color="#ff669d" />
        </BorderlessButton>
      ) : (
        <View></View>
      )}
    </SafeAreaView>
  );
};

export default Header;
