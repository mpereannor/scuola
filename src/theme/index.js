import { createMuiTheme } from '@material-ui/core/styles';

const lindseyPalette = { 
    //#https://twitter.com/Lindsey_design/status/1269297518426361863
    white: '#e4f5ff',
    lightblue: '#96c7d5',
    blue: '#2d7a9c',
    dimblue: '#094f6e',
    darkblue: '#022534',
    orangealert: '#f17808'
}

export const theme = createMuiTheme({ 
    palette: {
        type: 'light',
        primary: {
            main: lindseyPalette.white,
        },
        secondary: {
            main: lindseyPalette.lightblue
        },
        error:{ 
            main: lindseyPalette.orangealert
        }
    }
})

