import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import TermsScreen from '../screens/TermsScreen';
import { Routes } from './Routes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
          {/* <LoginScreen/> */}
          {/* <TermsScreen /> */}
          {/* <StarshipFeedScreen /> */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
          <Stack.Screen name={Routes.TERMS_SCREEN} component={TermsScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}