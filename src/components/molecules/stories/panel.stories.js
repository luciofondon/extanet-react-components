import React from 'react';
import { storiesOf } from '@storybook/react';
import Panel from '../panel.component';

storiesOf('Molecules|Panel', module).add('default', () => (
    <Panel title="Titulo">
        <div>Contenido</div>
    </Panel>
));
