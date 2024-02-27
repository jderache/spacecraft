import react from 'react';
import { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NetworkProvider } from 'react-native-offline';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navigator from './src/navigation/Navigator';
import { AuthContextProvider } from './src/contexts/AuthContext';

function App() {

  return (
    <AuthContextProvider>
          <QueryClientProvider client={(new QueryClient())}>
            <NetworkProvider>
              <PaperProvider>
                  <Navigator />
              </PaperProvider>
            </NetworkProvider>
          </QueryClientProvider>
    </AuthContextProvider>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;

// return Storybook's UI
// export { default } from "./.storybook";