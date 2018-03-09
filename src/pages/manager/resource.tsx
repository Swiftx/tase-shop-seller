import * as React from 'react';
import { Tabs } from 'antd';
import { Page } from '../../skeleton';
import { Header } from '../../../components/layout/header';
import { Panel } from '../../../components/layout/panel';
import ImageManager from '../../control/ImageManager';

/**
 * 资源管理页面
 */
export default (
  <Page title="素材管理" name="resource">
    <Header>素材管理</Header>
    <Tabs defaultActiveKey="1">
      <Tabs.TabPane tab="图片" key="1">  
        <Panel><ImageManager/></Panel>
      </Tabs.TabPane>
      <Tabs.TabPane tab="语音" key="2">
        <Panel>暂不支持语音文件管理</Panel>
      </Tabs.TabPane>
      <Tabs.TabPane tab="视频" key="3">
        <Panel>暂不支持视频文件管理</Panel>
      </Tabs.TabPane>
    </Tabs>
  </Page>
);