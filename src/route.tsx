import * as React from 'react';
import { Switch,Route, Redirect } from 'react-router-dom';
import { Layout, Group, Page } from './skeleton';

const LoginPage = () => (
    <h1>我是登陆页面</h1>
);

const NoFoundPage = () => (
    <h1>我是404页面</h1>
);

const SellerPage = () => (
    <Layout prefix="/seller">
        <Page title="主页" name="home" icon="home">
            <h1>Hello World</h1>
        </Page>
        <Group name="manager" title="管理" icon="hdd">
            {require("./pages/manager/resource").default}
        </Group>
    </Layout>
);

export default () => (
    <Switch>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/404" component={NoFoundPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/seller" component={SellerPage}/>
        <Redirect to="/seller" />
    </Switch>
);