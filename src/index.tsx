import ReactDOM from 'react-dom/client';
import { App } from './app';

const rootElement = document.querySelector('#root') as Element;
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
