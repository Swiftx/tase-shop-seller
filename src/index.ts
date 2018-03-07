import { App } from '../modules/swiftx-foundation/src/Index';
import route from './route';

const app = new App();
app.router(route);

app.start('#mountNode');