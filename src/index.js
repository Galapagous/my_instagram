import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
Amplify.configure(config);

TimeAgo.addDefaultLocale(en)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
