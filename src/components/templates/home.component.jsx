import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { DataTable, Column } from 'primereact/datatable';
import Panel from '../molecules/panel.component';
import Chip from '../atoms/chip.component';

export default function Home({ literals, favoriteStops, favoriteLines }) {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Panel title={literals.abonaments}>
                        <Chip>No hay contendio</Chip>
                    </Panel>
                </Grid>
                <Grid item xs={6}>
                    <Panel title={literals.notifications}>
                        <Chip>No hay contendio</Chip>
                    </Panel>
                </Grid>
                <Grid item xs={6}>
                    <Panel title={literals.nextHour}>
                        <DataTable value={favoriteStops}>
                            <Column field="id" header="Stop" />
                        </DataTable>
                    </Panel>
                </Grid>
                <Grid item xs={6}>
                    <Panel title={literals.favoriteLine}>
                        <DataTable value={favoriteLines}>
                            <Column field="id" header="Línea" />
                            <Column field="name" header="Nombre" />
                        </DataTable>
                    </Panel>
                </Grid>
            </Grid>
        </div>
    );
}

Home.defaultProps = {
    literals: {
        favoriteLine: 'Linies favorites',
        nextHour: 'Próximes hores de pas',
        notifications: 'Notifications',
        abonaments: 'Abonaments GE333417',
    },
};

Home.propTypes = {
    literals: PropTypes.shape({
        favoriteLine: PropTypes.string,
        nextHour: PropTypes.string,
        notifications: PropTypes.string,
        abonaments: PropTypes.string,
    }),
    favoriteLines: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired
    ),
    favoriteStops: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired
    ),
};
