import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <React.StrictMode>
    <Container>
    <App />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);
