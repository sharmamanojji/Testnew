import {
    createGenerateClassName,
    createMuiTheme
  } from '@material-ui/core/styles';


export const generateClassName = createGenerateClassName({
    productionPrefix: 'scm_lp',
    disableGlobal: true,
    seed: 'sew'
  });

export const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#29BBAE',
        contrastText:'#fff'
      },
      secondary: {
        main: '#1982C5'
      }
    },
    typography: {
      fontFamily: "OpenSans-Regular",
      h6: {
        fontFamily: "OpenSans-semibold",
      }
    },
    overrides: {
      PrivateRadioButtonIcon: {
        layer: {
          left: 0
        }
      },
      MuiPaper: {
          boxShadow: 'none'
      }
    },
    props: {
      MuiListItem: {
        disableRipple: true
      },
      MuiAppBarRoot: {
        shadow: 'none'
      }
    }
  })