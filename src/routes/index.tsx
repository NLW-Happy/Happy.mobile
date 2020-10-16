import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import App from './app.route';

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

export default Routes;
