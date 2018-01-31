import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Form from './form'

ReactDOM.render(
  <Provider>
    <Form />
  </Provider>,
document.getElementById('root'));