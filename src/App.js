import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Form from './components/Form';
import Cart from './components/Cart';
import {deepOrange900} from 'material-ui/styles/colors';
import './App.css';

const muiTheme = getMuiTheme({
appBar: {
    height: 100,
  }
});

const style = {
  height: 100,
  textAlign: 'center',
  fontFamily: 'Pacifico',
  fontSize: 40,
  backgroundColor: deepOrange900
};

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBar showMenuIconButton = {false} title="~ New Age Pizza ~" style = {style} titleStyle={style} />
    <h1 className = "header">Make your own pizza</h1>
    <div className = "Page">
    <Form />
    <Cart/>
    </div>
  </MuiThemeProvider>
);

export default App;
