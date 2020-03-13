import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '0px 8px 8px 0px',
        color: '#A7A7A7',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '40px',
    },
    version: {
        textAlign: 'right',
    },
}));

export default function Footer({ literals, version }) {
    const classes = useStyles();
    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={4}>
                <Typography>{literals.consortium}</Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography>
                    <a href="">{literals.cookies}</a> |
                    <a href="">{literals.privacy}</a>
                </Typography>
            </Grid>
            <Grid item xs={4} className={classes.version}>
                <Typography>v{version}</Typography>
            </Grid>
        </Grid>
    );
}

Footer.defaultProps = {
    version: '',
    literals: {
        cookies: 'Política de cookies',
        privacy: 'Información legal y política de privacidad',
        consortium: '© Consorci de Transports de Mallorca',
    },
};

Footer.propTypes = {
    version: PropTypes.string.isRequired,
    literals: PropTypes.shape({
        consortium: PropTypes.string,
        cookies: PropTypes.string,
        privacy: PropTypes.string,
    }),
};
