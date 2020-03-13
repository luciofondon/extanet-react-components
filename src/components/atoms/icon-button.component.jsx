import React from 'react';
import PropTypes from 'prop-types';
import IconButtonPF from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default function IconButton({ handleClick, children }) {
    const classes = useStyles();

    return (
        <IconButtonPF onClick={handleClick} className={classes.margin}>
            {children}
        </IconButtonPF>
    );
}

IconButton.defaultProps = {
    children: <ExitToAppIcon />,
};

IconButton.propTypes = {
    children: PropTypes.node.isRequired,
    handleClick: PropTypes.func.isRequired,
};
