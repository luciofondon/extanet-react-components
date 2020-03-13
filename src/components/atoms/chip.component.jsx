import React from 'react';
import PropTypes from 'prop-types';
import ChipPF from '@material-ui/core/Chip';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    info: {
        borderColor: '#3396FF',
        color: '#3396FF',
        width: '100%',
    },
}));

export default function Chip({ children }) {
    const classes = useStyles();

    return (
        <ChipPF
            avatar={<InfoIcon />}
            label={children}
            variant="outlined"
            className={classes.info}
        />
    );
}

Chip.defaultProps = {
    children: '',
};

Chip.propTypes = {
    children: PropTypes.string.isRequired,
};
