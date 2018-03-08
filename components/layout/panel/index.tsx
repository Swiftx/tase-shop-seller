import * as React from 'react';

interface PanelProps {
    children?: any;
}

const boxStyle: React.CSSProperties = {
    backgroundColor: "#FFFFFF",
    border: "1px solid #e8e8e8",
    padding: "24px"
}

export const Panel = (props:PanelProps) => (
    <div style={boxStyle}>
        {props.children}
    </div>
);