import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';
import 'simplebar/src/simplebar.css';

// third-party
import { Provider as ReduxProvider } from 'react-redux';
import { persistor, store } from './app/store';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <PersistGate loading={null} persistor={persistor}>
            <ReduxProvider store={store}>
                <BrowserRouter basename="/">
                    <App />
                </BrowserRouter>
            </ReduxProvider>
        </PersistGate>
    </React.StrictMode>
);

reportWebVitals();
