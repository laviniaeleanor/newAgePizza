import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Form from './components/Form';
import Cart from './components/Cart';
import {teal500} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    textColor: teal500,
  },
  appBar: {
    height: 50,
  },
});

const App = () => (
  <MuiThemeProvider>
    <AppBar title="New Age Pizza" />
    <Form />
    <Cart/>
  </MuiThemeProvider>
);

export default App;
