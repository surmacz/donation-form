import ReactDOM from 'react-dom/client';
import React from 'react';
import { App } from './app.tsx';

const rootElement = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
