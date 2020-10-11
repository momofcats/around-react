import React from 'react';
import ReactDOM from 'react-dom';
import './pages/index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
     </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
