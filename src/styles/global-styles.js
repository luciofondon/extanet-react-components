import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        color: '#FFFFFF',
        h1: {
            color: '#000000',
            fontWeight: 'bold',
        },
        h2: {
            color: '#000000',
            fontWeight: 'bold',
            padding: '.5rem',
        },
        h3: {
            color: '#000000',
            fontWeight: 'bold',
            textTransform: 'uppercase',
        },
        h4: {
            color: '#000000',
        },
        h5: {
            color: '#000000',
        },
        h6: {
            color: '#000000',
        },
    },
});

export default theme;
