import * as React from 'react';
import { Switch } from 'react-router-dom';
import { Layout as AntLayout, Menu, Breadcrumb, Icon } from 'antd';
import { Page } from './page';
import { Group } from './group';
const { Header, Content, Footer, Sider } = AntLayout;
const { SubMenu } = Menu;

const mainStyle : React.CSSProperties = {
    padding: '0 50px'
}
const siderStyle : React.CSSProperties = {
    background: 'none'
}
const menuStyle : React.CSSProperties = {
    background: 'none'
}
const contentStyle : React.CSSProperties = {
    padding: '0 24px', 
    minHeight: 280
}
const layoutStyle : React.CSSProperties = {
    padding: '24px 0'
}
const footerStyle : React.CSSProperties = {
    textAlign: 'center'
}

export interface LayoutProps {
    prefix? : string;
    children? : any;
}

export const Layout = (props:LayoutProps) => (
    <AntLayout>
        <Header className="header"></Header>
        <Content style={mainStyle}>
            <AntLayout style={layoutStyle}>
                <Sider width={200} style={siderStyle}>
                <div style={menuStyle} className="ant-menu aside-container menu-site ant-menu-light ant-menu-root ant-menu-inline">
                    {React.Children.map(props.children, (child:React.ReactElement<any>) => {
                        if(child.type !== Group && child.type !== Page ) return;
                        return React.cloneElement(child, {
                            prefix : props.prefix?(props.prefix+'/'):"/", 
                            menu:true
                        });
                    })}
                </div>
                </Sider>
                <Content style={contentStyle}>
                    <Switch>
                    {React.Children.map(props.children, (child:React.ReactElement<any>) => {
                        if(child.type !== Group && child.type !== Page ) return child;
                        return React.cloneElement(child, {
                            prefix : props.prefix?(props.prefix+'/'):"/", 
                            menu:false
                        });
                    })}
                    </Switch>
                </Content>
            </AntLayout>
        </Content>
        <Footer style={footerStyle}>
            Ant Design ©2016 Created by Ant UED
        </Footer>
    </AntLayout>
);


export class Document extends React.Component{

    public render() {
        return (

                <AntLayout>
                    <Header className="header"></Header>
                    <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <AntLayout style={{ padding: '24px 0', background: '#fff' }}>
                            <Sider width={200} style={{ background: '#fff' }}>
                                <div className="ant-menu aside-container menu-site ant-menu-light ant-menu-root ant-menu-inline">
                                {React.Children.map(this.props.children, (child:React.ReactElement<any>) => {
                                    if(child.type !== Group && child.type !== Page ) return;
                                    return React.cloneElement(child, {prefix : '/', menu:true});
                                })}
                                </div>
                            </Sider>
                            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                                <Switch>
                                {React.Children.map(this.props.children, (child:React.ReactElement<any>) => {
                                    if(child.type !== Group && child.type !== Page ) return child;
                                    return React.cloneElement(child, {prefix : '/', menu:false});
                                })}
                                </Switch>
                            </Content>
                        </AntLayout>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </AntLayout>

        );
    }

} 