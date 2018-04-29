import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Form from './components/Form';
import Cart from './components/Cart';
import {teal500, teal800} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    textColor: teal800
},
appBar: {
    height: 100,
  }
});

const style = {
  height: 100,
  textAlign: 'center',
  fontFamily: 'Pacifico',
  fontSize: 40,
  backgroundColor: teal500
};

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBar showMenuIconButton = {false} title="New Age Pizza" style = {style} titleStyle={style} />
    <Form />
    <Cart/>
  </MuiThemeProvider>
);

export default App;
