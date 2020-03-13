import React from 'react';
import PropTypes from 'prop-types';
import ButtonPF from '@material-ui/core/Button';

export default function Button({ label, disabled, handleClick }) {
    return (
        <ButtonPF onClick={handleClick} {...{ disabled }} variant="contained">
            {label}
        </ButtonPF>
    );
}

Button.defaultProps = {
    label: '',
    disabled: false,
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
};
