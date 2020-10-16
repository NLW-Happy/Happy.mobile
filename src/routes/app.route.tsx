import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OrphanagesMap from '../pages/OrphanagesMap';
import OrphanageDetails from '../pages/OrphanageDetails';

const App: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator headerMode="none">
      <Screen name="OrphanagesMap" component={OrphanagesMap} />
      <Screen name="OrphanageDetails" component={OrphanageDetails} />
    </Navigator>
  );
};

export default App;
