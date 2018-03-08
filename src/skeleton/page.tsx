import * as React from 'react';
import { Route, Link, withRouter,RouteComponentProps } from 'react-router-dom';
import { Row , Icon } from 'antd';

const itemStyle : React.CSSProperties = {
    paddingLeft:"60px"
};

export interface ComponentProps {
    title    : string;
    name     : string;
    prefix?  : string;
    menu?    : boolean;
    icon?    : string;
    children?: any;
}

interface InnerProps extends RouteComponentProps<any>,ComponentProps {}

export const Page = withRouter<InnerProps>((props:InnerProps) => {
    const path = props.prefix + props.name;
    if(props.menu){
        const style = props.location.pathname===path? {color:'#1890ff'}:{};
        const icon = props.icon?<Icon type={props.icon} />:null;
        const listStyle = { ... itemStyle };
        if(props.icon) listStyle.paddingLeft = '36px';
        return (
            <li className="ant-menu-item" style={listStyle}>
                <Link style={style} to={path}>{icon}{props.title}</Link>
            </li>
        );
    }
    const Page = () => <div>{props.children}</div>;
    return <Route exact path={path} component={Page}/>;
});