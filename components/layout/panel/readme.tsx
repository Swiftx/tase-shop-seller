import * as React from 'react';
import { Document, Component, Group, Description, Demo, Preview } from '../../../modules/webpack-react-doc/src/index';

import { Panel } from './index';

export default (
    <Component name="header" title="头部标题栏">
        <Description>{require('./readme.md')}</Description>
        <Demo title="基本" span={24}>
            <Preview>

            </Preview>
            <Description>
                基础按钮表单
            </Description>
        </Demo>
    </Component>
);