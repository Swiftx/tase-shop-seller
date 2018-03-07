import * as React from 'react';
import * as ReactDOM from 'react-dom';
import route from './route';
import "antd/dist/antd.css";

const mountNode = document.getElementById("mountNode");
ReactDOM.render(route, mountNode);