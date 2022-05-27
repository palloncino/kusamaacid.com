import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container as HTMLElement);

root.render(<App />);

reportWebVitals();
