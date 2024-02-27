import React from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import AuthNavigator from './AuthNavigator';
import RootNavigator from './RootNavigator';



export default function Navigator() {
  const { isSignedIn, toggleIsSignedIn } = useAuthContext();

  if (isSignedIn) {
      return (<RootNavigator />);
  }

  return (<AuthNavigator />);
}
