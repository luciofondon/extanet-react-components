import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    activeBorderBottom: {
        borderBottom: `2px solid #072244`,
    },
    activeColor: {
        color: '#072244',
    },
    inactiveColor: {
        color: '#444444',
        '&:hover': {
            color: '#072244',
        },
    },
    link: {
        'text-decoration': 'none',
        borderRadius: '0',
        textTransform: 'uppercase',
        fontSize: '1em',
    },
    linkWrapper: {
        padding: theme.spacing(1.6, 2),
    },
}));

export default function MenuItem({ active, path, children }) {
    const classes = useStyles();

    return (
        <div
            className={`${classes.linkWrapper} ${
                active ? classes.activeBorderBottom : ''
            }`}>
            <Link
                to={path}
                className={`${classes.link} ${
                    active ? classes.activeColor : classes.inactiveColor
                }`}>
                {children}
            </Link>
        </div>
    );
}

MenuItem.defaultProps = {
    active: false,
    children: '',
    path: '/',
};

MenuItem.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.string.isRequired,
    path: PropTypes.string,
};
