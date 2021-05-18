import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { QueryClientProvider, QueryClient } from 'react-query';
import { PersistGate } from 'redux-persist/integration/react';

import 'assets/styles/tailwind.css';
import { persistor, store } from './app/store';

import App from './App';
import ThemedSuspense from 'components/ThemeSuspense';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

let app = document.getElementById('root');

ReactDOM.render(
  <React.Suspense fallback={<ThemedSuspense />}>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={<ThemedSuspense />} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </React.Suspense>,
  app
);
