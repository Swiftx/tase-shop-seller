import * as React from 'react';
import { Tabs, Row, Col, Tree, Tag, Button, Input, Icon, Dropdown,Menu,Checkbox,Pagination } from 'antd';
import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';

import { mock, Random } from 'mockjs';


const topToolsButtonStyle : React.CSSProperties = {
  marginLeft:"8px",
  border:'none',
  fontWeight:'bold',
  fontSize:"16px"
}


export interface Props {

}

interface File {
  name : string;
  url  : string;
  date : string;
  size : number; 
}

interface Pager {
  current : number;
  size    : number;
}

interface Order {
  fileName : 0|1|-1;
  size     : 0|1|-1;
  time     : 0|1|-1;
}

interface State {
  files  : File[];
  isList : boolean;
  search : string;
  order  : Order;
  pager  : Pager;
}

export default class extends React.Component<Props,any> {

  /**
   * 组件状态
   */
  public state : State;

  /**
   * 构造函数
   * @param props
   */
  public constructor(props:Props){
    super(props);
    this.state = { 
      files : [],
      isList  : false,
      order   : {
        fileName : 0,
        size : 0,
        time : 0
      },
      search  : "",
      pager   : {
        current : 1,
        size    : 24
      }
    };

    this.onDisplayModeChange = this.onDisplayModeChange.bind(this);
    this.onSearchUpdate = this.onSearchUpdate.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
    this.onOrderFilenameChange = this.onOrderFilenameChange.bind(this);
    this.onOrderSizeChange = this.onOrderSizeChange.bind(this);
    this.onOrderTimeChange = this.onOrderTimeChange.bind(this);

    /** 模拟数据生成 */
    const suffex:any = ['.jpg','.png','.gif'];
    suffex.random = function(){
      let index = Math.floor(this.length * Math.random());
      return this[index];
    }

    for(let i=0; i<50; i++){
      this.state.files.push({
          name : Random.word(3, 5)+suffex.random(),
          url  : Random.image(),
          date : Random.date('yyyy-MM-dd h:ss'),
          size : Math.floor(Math.random()*100000)/100
      });
    }

  }

  /**
   * 修改列表显示模式
   */
  public onDisplayModeChange(){
    this.setState({isList : !this.state.isList});
  }

  /**
   * 输入框内容改变
   * @param e 
   */
  public onSearchUpdate(e){
    this.setState({search : e.target.value});
  }

  /**
   * 页码改变
   * @param page 
   * @param pageSize 
   */
  public onPageChange(page, pageSize){
    this.setState({pager : {
      current : page,
      size : pageSize
    }});
  }

  /**
   * 修改文件名称排序规则 
   */
  public onOrderFilenameChange(){
    const order = { ... this.state.order };
    if(this.state.order.fileName === 0)
      order.fileName = 1;
    else order.fileName *= -1;
    this.setState({order : order});
  }

  /**
   * 修改文件大小排序规则 
   */
  public onOrderSizeChange(){
    const order = { ... this.state.order };
    if(this.state.order.size === 0)
      order.size = 1;
    else order.size *= -1;
    this.setState({order : order});
    
  }

  /**
   * 修改文件大小排序规则 
   */
  public onOrderTimeChange(){
    const order = { ... this.state.order };
    if(this.state.order.time === 0)
      order.time = 1;
    else order.time *= -1;
    this.setState({order : order});
  }

  /**
   * 筛选数据
   */
  public filterData(data : File[]){
    const result : File[] = [];
    for(let file of data){
      let rule = new RegExp(this.state.search);
      if(!rule.test(file.name)) continue;
      result.push(file);
    }
    return result;
  }

  /**
   * 数据分页
   * @param data 
   */
  public pagerData(data : File[]){
    const result : File[] = [];
    let start = (this.state.pager.current-1)*this.state.pager.size;
    for(let file of data){
      if(start-- > 0) continue;
      result.push(file);
      if(result.length >= this.state.pager.size) break;
    }
    return result;
  }

  /**
   * 数据排序
   * @param data 
   */
  public orderData(data : File[]){
    return data.sort((a:File, b:File)=>{
      let result = a.name.localeCompare(b.name)*this.state.order.fileName;

      if(a.size > b.size)
        result += this.state.order.size;
      if(a.size < b.size)
        result -= this.state.order.size;
  
      return result;
    });
  }


  /**
   * 列表方式显示
   */
  public renderFileListToList = (image:File, index:number) => (
    <Row gutter={16} style={{borderBottom:"1px solid #f2f6fd",lineHeight:"36px"}}>
      <Col span={12}><Checkbox style={{color:"#666", fontSize:"12px"}}> <Icon style={{color:"#1890ff"}} type="picture" /> {image.name}</Checkbox></Col>
      <Col span={6}><span style={{color:"#666", fontSize:"12px"}}>{image.size} M</span></Col>
      <Col span={6}><span style={{color:"#666", fontSize:"12px"}}>{image.date}</span></Col>
    </Row>
  );

  /**
   * 块状方式显示
   */
  public renderFileItemToBlock = (image:File, index:number) => (
    <Col key={index} span={4} style={{marginBottom:'5px', padding:"5px"}}>
      <Image src={image.url} imageFit={ImageFit.cover} height={100} />
      <h4 style={{textAlign:"center"}}>{image.name}</h4>
    </Col>
  );

  public renderOrderIcon(name:'fileName'|'size'|'time'){
    if(this.state.order[name]>0)
      return <Icon type="arrow-down" />
    if(this.state.order[name]<0)
      return <Icon type="arrow-up" />
  }

  /**
   * 渲染组件 
   */
  public render() {
    let data = this.filterData(this.state.files);
    const dataTotal = data.length;
    data = this.orderData(data);
    data = this.pagerData(data);
    const menu = (
      <Menu>
        <Menu.Item><a onClick={this.onOrderFilenameChange}>文件名 {this.renderOrderIcon('fileName')}</a></Menu.Item>
        <Menu.Item><a onClick={this.onOrderSizeChange}>大小 {this.renderOrderIcon('size')}</a></Menu.Item>
        <Menu.Item>
          <a>修改日期</a>
        </Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Row gutter={16}>
          <Col span={18}>
            <Button type="primary" icon="upload">上传</Button>
          </Col>
          <Col span={6} style={{textAlign:"right",display: "flex",justifyContent: "space-between"}}>
            <Input.Search placeholder="搜索您的文件" style={{flex:"auto"}} onChange={this.onSearchUpdate} />
            <Dropdown overlay={menu} placement="bottomLeft">
              <Button style={topToolsButtonStyle} icon="ellipsis"/>
            </Dropdown>
            <Button
              style={topToolsButtonStyle}
              onClick={this.onDisplayModeChange}
              icon={this.state.isList?"appstore-o":"bars"}/>
          </Col>
        </Row>

        <Row gutter={16} style={{marginTop:"8px", borderBottom:"1px solid #f2f6fd",lineHeight:"36px"}}>          
          {this.state.isList?(
            <Col span={12}><Checkbox style={{color:"#888", fontSize:"12px"}}>文件名 <Icon type="arrow-down" /></Checkbox></Col>
          ):(
            <Col span={12}><Checkbox style={{color:"#888", fontSize:"12px"}}>全选 </Checkbox></Col>
          )}
          {this.state.isList?(
            <Col span={6}>
              <a onClick={this.onOrderSizeChange} style={{color:"#888", fontSize:"12px"}}>大小</a> 
              {this.renderOrderIcon('size')}
            </Col>
          ):null}
          {this.state.isList?(<Col span={6}><span style={{color:"#888", fontSize:"12px"}}>修改日期</span> <Icon type="arrow-down" /></Col>):null}
        </Row>
        
        {this.state.isList?data.map(function(image:File, index:number){
          return this.renderFileListToList(image,index);
        },this):<Row style={{marginTop:"8px"}} gutter={16}>{data.map(function(image:File, index:number){
          return this.renderFileItemToBlock(image,index);
        },this)}</Row>}


        <div style={{textAlign:"right",marginTop:'8px'}}>
          <Pagination current={this.state.pager.current} total={dataTotal} pageSize={this.state.pager.size} onChange={this.onPageChange} />
        </div>

      </div>
    );
  }

}