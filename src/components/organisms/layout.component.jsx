import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, CssBaseline, Container } from '@material-ui/core';
import Footer from './footer.component';
import Header from './header.component';
import theme from '../../styles/global-styles';

const useStyles = makeStyles(theme => ({
    main: {
        padding: theme.spacing(3, 0),
        marginBottom: '15rem',
        minHeight: 'auto',
    },
}));

export default function Layout({
    version,
    menu,
    userName,
    photo,
    languages,
    notifications,
    literals,
    handleClickLogout,
    handleClickOpenHelp,
    handleClickChangeLanguage,
    children,
}) {
    const classes = useStyles();

    return (
        <ThemeProvider {...{ theme }}>
            <CssBaseline />
            <Header
                {...{ languages }}
                {...{ menu }}
                {...{ handleClickLogout }}
                {...{ handleClickOpenHelp }}
                {...{ handleClickChangeLanguage }}
                {...{ userName }}
                {...{ literals }}
                {...{notifications}}
                {...{ photo }}
            />
            <Container maxWidth="lg" className={classes.main}>
                {children}
            </Container>
            <Footer {...{ version }} {...{ literals }} />
        </ThemeProvider>
    );
}

Layout.defaultProps = {
    version: '',
};

Layout.propTypes = {
    userName: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    handleClickLogout: PropTypes.func.isRequired,
    handleClickOpenHelp: PropTypes.func.isRequired,
    handleClickChangeLanguage: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};
