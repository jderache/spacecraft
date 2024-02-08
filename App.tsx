import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NetworkProvider } from 'react-native-offline';

import { StarshipFeedScreen } from './src/screens/StarshipFeedScreen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ScreenContainer } from './src/components/ScreenContainer';

function App() {
  return (

    <QueryClientProvider client={(new QueryClient())}>
      <NetworkProvider>
        <PaperProvider>
          <ScreenContainer>
          {/* <LoginScreen/> */}
          {/* <TermsScreen /> */}
            <StarshipFeedScreen />
          </ScreenContainer>
        </PaperProvider>
      </NetworkProvider>
    </QueryClientProvider>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;