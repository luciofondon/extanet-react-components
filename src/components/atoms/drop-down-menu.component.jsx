import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, Menu, Button } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function DropDownMenu({
    label,
    options,
    handleClick,
    startIcon,
}) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClickOpen = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClickClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                endIcon={<ArrowDropDownIcon />}
                startIcon={startIcon && startIcon}
                onClick={handleClickOpen}>
                {label}
            </Button>
            {options && options.length > 0 && (
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClickClose}>
                    {options &&
                        options.map(item => (
                            <MenuItem
                                key={item.id}
                                onClick={() => {
                                    handleClickClose();
                                    handleClick(item);
                                }}>
                                {item.label}
                            </MenuItem>
                        ))}
                </Menu>
            )}
        </div>
    );
}

DropDownMenu.defaultProps = {
    options: [],
};

DropDownMenu.propTypes = {
    startIcon: PropTypes.node,
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }).isRequired
    ),
    handleClick: PropTypes.func.isRequired,
};
