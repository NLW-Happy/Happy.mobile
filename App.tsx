import React from 'react';

import {
  useFonts,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from '@expo-google-fonts/nunito';

import { AppLoading } from 'expo';
import Routes from './src/routes';

const App: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Routes />;
};

export default App;
