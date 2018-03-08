import * as React from 'react';

interface HeaderProps {
    children?: any;
}

export const Header = (props:HeaderProps) => (
    <h1>{props.children}</h1>
);