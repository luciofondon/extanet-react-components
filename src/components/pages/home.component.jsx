import React from 'react';
import PropTypes from 'prop-types';
import Home from '../templates/home.component';
import Layout from '../organisms/layout.component';

export default function HomePage({
    version,
    languages,
    favoriteLines,
    favoriteStops,
    userName,
    handleClickLogout,
    handleClickOpenHelp,
}) {
    return (
        <>
            <Layout
                {...{ userName }}
                {...{ version }}
                {...{ languages }}
                {...{ handleClickLogout }}
                {...{ handleClickOpenHelp }}>
                <Home {...{ favoriteStops }} {...{ favoriteLines }} />
            </Layout>
        </>
    );
}

HomePage.defaultProps = {
    userName: '',
    version: '',
};

HomePage.propTypes = {
    userName: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }).isRequired
    ),
};
