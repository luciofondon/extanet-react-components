import React from 'react';
import PropTypes from 'prop-types';
import { Panel as PanelPF } from 'primereact/panel';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#92D128 !important',
    },
}));
const Container = styled.div`
    .p-panel-titlebar {
        background-color: #92d128 !important;
        border-top-left-radius: 3px !important;
        border-top-right-radius: 3px !important;
    }
`;

export default function Panel({ title, children }) {
    const classes = useStyles();

    return (
        <Container>
            <PanelPF header={title}>{children}</PanelPF>
        </Container>
    );
}

Panel.defaultProps = {
    title: '',
};

Panel.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
