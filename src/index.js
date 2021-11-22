import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import {Container} from 'semantic-ui-react';
import App from './App';



ReactDOM.render( <React.StrictMode>
    <Container>
    <App/>
    </Container>
    </React.StrictMode>,
    document.getElementById('root')
);