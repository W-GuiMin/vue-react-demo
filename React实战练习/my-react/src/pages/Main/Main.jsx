import React from 'react'
import './Main.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import AMain from '../../components/AMain/AMain';
import Shop from '../../components/Shop/Shop'
import Client from '../../components/Client/Client'
import Add from '../../components/Add/Add'
import Update from '../../components/Update/Update'
import UpdateShop from '../../components/UpdateShop/UpdateShop'
import Delete from '../../components/Delete/Delete'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const router2 = [
    {
        path: '/main',
        component: <AMain />
    },
    {
        path: '/shop',
        component: <Shop />
    }, {
        path: '/client',
        component: <Client />
    }, {
        path: '/add',
        component: <Add />
    }, {
        path: '/update',
        component: <Update />
    },
    {
        path: '/updateshop',
        component: <UpdateShop />
    }, {
        path: '/delete',
        component: <Delete />
    }]
export default class Main extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    clear() {
        window.sessionStorage.clear()
        this.props.history.push('/login')
    }
    render() {
        return (
            <>
                <Router>
                    <Layout style={{ minHeight: '100vh' }}>
                        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                            <div className="logo" >
                                {/* <img src="../../asstes.gif" alt="" /> */}
                            </div>
                            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                                <Menu.Item key="1">
                                    <Link to="/main">
                                        <Icon type="home" />
                                        <span>首页</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to="/shop">
                                        <Icon type="shop" />
                                        <span>店铺信息</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Link to="/client">
                                        <Icon type="user" />
                                        <span>客户订单</span>
                                    </Link>
                                </Menu.Item>
                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span>
                                            <Icon type="shopping-cart" />
                                            <span>产品管理</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="4"><Link to="/add">产品上新</Link></Menu.Item>
                                    <Menu.Item key="5"><Link to="/update">修改产品信息</Link></Menu.Item>
                                    <Menu.Item key="6"><Link to="/delete">删除产品信息</Link></Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout>
                            <Header style={{ background: '#c53c56', color: '#fff', fontSize: '20px' }} >  家有购物后台管理系统
                                <div className="admin">
                                    {window.sessionStorage.getItem('adminName')}
                                    <span onClick={this.clear.bind(this)}>退出</span>
                                </div>
                            </Header>
                            <Content style={{ margin: '0 16px' }}>
                                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                                    <Breadcrumb.Item>User</Breadcrumb.Item>
                                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                                </Breadcrumb> */}
                                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>

                                    <Switch>
                                        {router2.map((item, index) => {
                                            return <Route key={index} path={item.path} >
                                                {item.component}
                                            </Route>
                                        })}
                                    </Switch>

                                </div>
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>JiaYou Shopping ©2018 Created by JiaYaouHui</Footer>
                        </Layout>
                    </Layout>
                </Router>
                <Redirect from="main" to="/main" />
            </>
        );
    }
}