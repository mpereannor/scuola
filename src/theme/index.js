import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
import shadows from './shadows'
import typography from './typography';

const defaultPalette = { 
    dark: '#F4F6F8'
}

const lindseyPalette = { 
    white: '#e4f5ff',
    lightblue: '#96c7d5',
    blue: '#2d7a9c',
    dimblue: '#094f6e',
    darkblue: '#022534',
    orangealert: '#f17808'
}



const theme = createMuiTheme({ 
    palette: {
        background: { 
            dark: defaultPalette.dark,
            default: colors.common.white,
            paper: colors.common.white
        },
        primary: { 
            main: colors.indigo[500]
        },
        secondary: { 
            main: colors.indigo[500]
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