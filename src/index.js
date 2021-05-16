import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';


ReactDOM.render(
  <BrowserRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Switch>
        <Route path="/:active_tab?" component={App} />
      </Switch>
    </StateProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
