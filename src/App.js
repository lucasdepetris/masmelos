import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import {Switch,Route} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import 'bulma/css/bulma.css'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';


const store = configureStore();

export const NotFound = () => (
  <div>
    <h1 className = 'title' >404!</h1>
    <h2 className = 'subtitle'>No existe la página</h2>
  </div>
)


function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Router>
        <Switch>
          <Route exact path = '/' component = {Login} />
          <Route exact path = '/home' component = {Home} />
          <Route component = {NotFound} />
        </Switch>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
