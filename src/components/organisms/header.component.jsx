import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButtonPR from '@material-ui/core/IconButton';
import { Grid } from '@material-ui/core';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import logoFile from './resources/extranet.png';
import Button from '../atoms/button.component';
import IconButton from '../atoms/icon-button.component';
import avatarFile from './resources/avatar.png';
import DropDownMenu from '../atoms/drop-down-menu.component';
import MenuItem from '../atoms/menu-item.component';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    name: {
        flexGrow: 1,
    },
    username: {
        paddingLeft: 5,
        color: '#000000',
        fontSize: 20,
    },
    menuTop: {
        backgroundColor: '#CCCCCC',
        minHeight: '40px',
    },
    menuBottom: {
        backgroundColor: '#F5F5F5',
        minHeight: '40px',
    },
    img: {
        height: '40px',
    },
}));

export default function Header({
    userName,
    photo,
    notifications,
    languages,
    menu,
    handleClickLogout,
    handleClickOpenHelp,
    handleClickChangeLanguage,
    literals,
}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.menuTop}>
                <Toolbar>
                    <IconButtonPR
                        edge="end"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu">
                        <img src={logoFile} />
                    </IconButtonPR>
                    <Typography className={classes.name} />
                    {photo && (
                        <img
                            src={`data:image/png;base64,${photo}`}
                            className={classes.img}
                        />
                    )}
                    <div className={classes.username}>{userName}</div>
                    <DropDownMenu
                        label={`(${notifications})`}
                        startIcon={<NotificationsNoneOutlinedIcon />}
                        options={[]}
                    />

                    <DropDownMenu
                        label={literals.language}
                        options={languages}
                        handleClick={handleClickChangeLanguage}
                    />

                    <IconButton handleClick={handleClickLogout} />
                </Toolbar>
                <Toolbar className={classes.menuBottom}>
                    <Grid item xs={4} />
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        className={classes.container}>
                        {menu &&
                            menu.map(option => (
                                <Grid item key={option.id}>
                                    <MenuItem path={option.path}>
                                        {option.label}
                                    </MenuItem>
                                </Grid>
                            ))}
                    </Grid>

                    <Grid item xs={4} className={classes.version}>
                        <Button
                            label={literals.help}
                            handleClick={handleClickOpenHelp}
                        />
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Header.defaultProps = {
    notifications: 0,
    languages: [],
    menu: [],
    literals: {
        help: "Ajuda'ns a millorar",
        language: 'Idioma',
    },
};

Header.propTypes = {
    userName: PropTypes.func.isRequired,
    notifications: PropTypes.number.isRequired,
    languages: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }).isRequired
    ),
    menu: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
        }).isRequired
    ),
    literals: PropTypes.shape({
        help: PropTypes.string.isRequired,
        language: PropTypes.string.isRequired,
    }).isRequired,
    handleClickLogout: PropTypes.func.isRequired,
    handleClickOpenHelp: PropTypes.func.isRequired,
    handleClickChangeLanguage: PropTypes.func.isRequired,
};
