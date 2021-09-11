import React from 'react';
import './App.css';
import { 
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';

import { theme } from './Theme/theme';
import Home from './pages/Home/Home';
import Watch from './pages/Watch/Watch';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

function App(): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movies">
            <Home type="movies" />
          </Route>
          <Route path="/series">
            <Home type="series" />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/watch">
            <Watch />
          </Route>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
