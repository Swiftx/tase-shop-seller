import * as React from 'react';
import { Route } from 'react-router-dom';
import { Page } from './page';
import { Icon } from 'antd';

const boxStyle : React.CSSProperties = {
    background:'none'
};
const titleStyle : React.CSSProperties = {
    paddingLeft : "60px"
};
const iconStyle : React.CSSProperties = {
    marginRight : "10px"
};

export interface GroupProps {
    title    : string;
    name     : string;
    prefix?  : string;
    menu?    : boolean;
    icon?    : string;
    children?: any;
}

export const Group = (props:GroupProps) => {
    const prefix = props.prefix+props.name+'/';
    if(props.menu){
        const icon = props.icon?<span style={iconStyle}><Icon type={props.icon} /></span>:null;
        const myTitleStyle = { ... titleStyle };
        if(props.icon) myTitleStyle.paddingLeft = "36px";
        return (
            <div style={boxStyle} className="ant-menu ant-menu-sub ant-menu-inline">
                <h3 className="ant-menu-item-group-title" style={myTitleStyle}>{icon}{props.title}</h3>
                <ul className="ant-menu-item-group-list">
                {React.Children.map(props.children, (child:React.ReactElement<any>) => {
                    if(child.type === Group || child.type === Page )
                        return React.cloneElement(child, {prefix : prefix, menu:true});
                    return child;
                })}
                </ul>
            </div>
        );
    } else {
        return (
        <div>{React.Children.map(props.children, (child:React.ReactElement<any>) => {
            if(child.type === Group || child.type === Page )
                return React.cloneElement(child, {prefix : prefix});
            return child;
        })}</div>);

    }
};