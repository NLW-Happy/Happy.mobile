import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from '../pages/OrphanagesMap';
import OrphanageDetails from '../pages/OrphanageDetails';
import CreateOrphanage from './create.route';
import Header from '../components/Header';

const AppRoute: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="OrphanagesMap" component={OrphanagesMap} />
      <Screen
        name="OrphanageDetails"
        component={OrphanageDetails}
        options={{
          headerShown: true,
          header: () => <Header title="Orfaato" hasCLose={false} />,
        }}
      />

      <Screen name="CreateOrphanage" component={CreateOrphanage} />
    </Navigator>
  );
};

export default AppRoute;
