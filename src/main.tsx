import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import '../node_modules/primeicons/primeicons.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './reducers/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
