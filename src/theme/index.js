import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
import typography from './typography';

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
            dark: lindseyPalette.darkblue,
            default: colors.common.white,
            paper: colors.common.white
        },
        primary: { 
            main: lindseyPalette.darkblue
        },
        secondary: { 
            main: lindseyPalette.lightblue
        },
        text: { 
            primary: colors.blueGrey[900],
            secondary: colors.blueGrey[600]
         }
        },
        typography 
})


export default theme;