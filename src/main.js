import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import injectTapEventPlugin from 'react-tap-event-plugin';
// // Needed for onTouchTap
// // http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();

// // Layout
// import ExampleLayout from 'layout/example';
// import data from "ui/data";
// // UI
import MainApp from 'ui/MainApp';

var style = require("layout/styles.scss")


const Site = (
  <MuiThemeProvider>
    <Router history={hashHistory}>
        <Route path="/" component={MainApp} />
    </Router>
  </MuiThemeProvider>
);

render(Site, document.getElementById('app'));