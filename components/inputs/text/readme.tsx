import * as React from 'react';
import { Document, Component, Group, Description, Demo, Preview } from '../../../modules/webpack-react-doc/src/index';

import { Button } from 'antd';

export default (
    <Component name="text" title="文本输入框">
        <Description>{require('./readme.md')}</Description>
        <Demo title="基本" span={12}>
            <Preview>
                <Button>Demo</Button>
            </Preview>
            <Description>
                基础按钮表单
            </Description>
        </Demo>
    </Component>
);