import React from "react";
import "./styles.scss"
import { Layout, Menu } from 'antd';
import { Link, Route, Switch } from 'wouter';
import { Home } from "./page/Home";

const { Header, Content } = Layout;

const Application: React.FC = () => {
    return <Layout className="body-wrapper">
        <Header>
          <Menu theme="dark" mode="horizontal" >
            <Menu.Item key="home">
              <Link href="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="login">
              <Link href="/login">Login</Link>
            </Menu.Item>
          
          </Menu>
        </Header>
        <Content>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Content>
      </Layout>;
  };

export default Application;