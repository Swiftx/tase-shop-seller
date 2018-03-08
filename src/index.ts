import { App } from '../modules/swiftx-foundation/src/Index';
import route from './route';
import "antd/dist/antd.css";
import "./style.css";

const app = new App();
app.router(route);

app.start('#mountNode');