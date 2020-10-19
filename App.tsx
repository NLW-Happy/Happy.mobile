import React from 'react';

import {
  useFonts,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from '@expo-google-fonts/nunito';

import { AppLoading } from 'expo';
import Routes from './src/routes';
import ScreenDeveloping from './src/components/Confirmation';

const App: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <ScreenDeveloping onPress={() => {}} />;
  // return <Routes />;
};

export default App;
