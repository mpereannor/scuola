import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
import shadows from './shadows'
import typography from './typography';

const defaultPalette = { 
    dark: '#F4F6F8'
}

const theme = createMuiTheme({ 
    palette: {
        background: { 
            dark: defaultPalette.dark,
            default: colors.common.white,
            paper: colors.common.white
        },
        primary: { 
            main: colors.lightBlue[700],
            secondary: colors.lightBlue[50]
        },
        secondary: { 
            main: colors.deepOrange[500]
        },
        tertiary: { 
            main: colors.cyan[500],
            secondary: colors.cyan[50]
        },
        text: { 
            primary: colors.blueGrey[900],
            secondary: colors.blueGrey[600]
         }
        },
        shadows,
        typography
})


export default theme;