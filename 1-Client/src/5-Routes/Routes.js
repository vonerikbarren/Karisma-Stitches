import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core';
import Theme from '../2-Design/2.01-Theme/Theme';

import Home from "../7-Pages/1-Home/Home";




export default function Routes() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>

          <Route exact path="/" component={Home} />


        </Switch>
      </Router>
    </ThemeProvider>

  );
}