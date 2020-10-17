import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { OrphanageData, SeletctMapPosition } from '../pages/CreateOrphanage';
import Header from '../components/Header';

const CreateRoute: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="SeletctMapPosition">
      <Screen
        name="SeletctMapPosition"
        component={SeletctMapPosition}
        options={{
          headerShown: true,
          header: () => <Header title="Selecione no Mapa" />,
        }}
      />
      <Screen
        name="OrphanageData"
        component={OrphanageData}
        options={{
          headerShown: true,
          header: () => <Header title="Informe os dados" />,
        }}
      />
    </Navigator>
  );
};

export default CreateRoute;
