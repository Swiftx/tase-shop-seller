import * as React from 'react';
import { Document, Component, Group, Description, Demo, Preview } from '../../../modules/webpack-react-doc/src/index';

import { Header } from './index';

export default (
    <Component name="header" title="头部标题栏">
        <Description>{require('./readme.md')}</Description>
        <Demo title="基本" span={24}>
            <Preview>
                <Header>这里是标题</Header>
            </Preview>
            <Description>
                基础按钮表单
            </Description>
        </Demo>
    </Component>
);