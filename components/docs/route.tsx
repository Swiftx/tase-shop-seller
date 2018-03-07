import * as React from 'react';
import { Document, Component, Group, Description, Demo, Preview } from '../../modules/webpack-react-doc/src/index';

export default (
    <Document>
        <Group name="inputs" title="输入框">
            {require('../inputs/text/readme').default}
        </Group>
    </Document>
);