import React from 'react';
import { StylesProvider, MuiThemeProvider } from '@material-ui/core/styles';
import { generateClassName, theme } from './theme/theme';
import Header from './components/Header/Header';
import NavigationMenu from './components/Navigation/NavigationMenu';
import Footer from './components/Footer/Footer';
import Routes from './components/Routes';
import './style.scss';

function App() {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        {/* <Header /> */}
        {/* <NavigationMenu /> */}
        <Routes />
        <Footer />
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
