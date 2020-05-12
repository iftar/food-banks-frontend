import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FoodBankView from './views/FoodBankView/FoodBankView';
import FoodBankDirectoryView from './views/FoodBankDirectoryView/FoodBankDirectoryView';


const routing = (
  <Router>
    <Switch>
      <Route path="/:foodBankId" exact component={FoodBankView} />
      <Route component={FoodBankDirectoryView} />
    </Switch>
  </Router>
);

ReactDOM.render(
  routing, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
