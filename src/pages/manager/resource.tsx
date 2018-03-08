import * as React from 'react';
import { Tabs, Row, Col, Tree, Tag, Button, Input, Icon, Dropdown,Menu,Checkbox } from 'antd';
import { Page } from '../../skeleton';

import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';

import { Header } from '../../../components/layout/header';
import { Panel } from '../../../components/layout/panel';




import { mock, Random } from 'mockjs';

console.log(mock);

const images: any[] = [];
for(let i=0; i<20; i++){
  images.push({
    id :i,
    title : "文件名 "+(i+1),
    src:Random.image()
  });
}

const testStyle = {
  float: "left",
  width: "21%",
  margin: "10px 2%",
  height: "0",
  paddingBottom: "10.98%",
  backgroundColor: "#dbe0e4"
}

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">文件名</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">大小</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">修改日期</a>
    </Menu.Item>
  </Menu>
);

/**
 * 资源管理页面
 */
export default (
  <Page title="素材管理" name="resource">
    <Header>素材管理</Header>
    <Tabs defaultActiveKey="1">
      <Tabs.TabPane tab="图片" key="1">  
        <Panel>
          <Row gutter={16}>
            <Col span={18}>
              <Button type="primary" icon="upload">上传</Button>
            </Col>
            <Col span={6} style={{textAlign:"right",display: "flex",justifyContent: "space-between"}}>
              <Input.Search placeholder="搜索您的文件" style={{flex:"auto"}}/>
              <Dropdown overlay={menu} placement="bottomLeft">
                <Button style={{marginLeft:"8px",border:'none',fontWeight:'bold',fontSize:"16px"}} icon="bars"/>
              </Dropdown>
              <Button style={{marginLeft:"8px",border:'none',fontWeight:'bold',fontSize:"16px"}} icon="appstore-o"/>
            </Col>
          </Row>

          <Row gutter={16} style={{marginTop:"8px"}}>
            <Col span={12}><h5>全部文件</h5></Col>
            <Col span={12} style={{textAlign:"right"}}><h5>已加载101个</h5></Col>
          </Row>

          <Row gutter={16} style={{marginTop:"8px", borderBottom:"1px solid #f2f6fd",lineHeight:"36px"}}>
            <Col span={12}><Checkbox style={{color:"#888", fontSize:"12px"}}>文件名 <Icon type="arrow-down" /></Checkbox></Col>
            <Col span={6}><span style={{color:"#888", fontSize:"12px"}}>大小</span> <Icon type="arrow-down" /></Col>
            <Col span={6}><span style={{color:"#888", fontSize:"12px"}}>修改日期</span> <Icon type="arrow-down" /></Col>
          </Row>
          


          <Row style={{marginTop:"8px"}} gutter={16}>
            {images.map((image:any) => (
                  <Col span={4} style={{marginBottom:'5px', padding:"5px"}}>
                    <Image src={image.src} imageFit={ImageFit.cover} height={100} />
                    <h4 style={{textAlign:"center"}}>{image.title}</h4>
                  </Col>
            ))} 
          </Row>


        </Panel>
      </Tabs.TabPane>
      <Tabs.TabPane tab="语音" key="2">
            bbb
      </Tabs.TabPane>
      <Tabs.TabPane tab="视频" key="3">
            ccc
      </Tabs.TabPane>
    </Tabs>
  </Page>
);