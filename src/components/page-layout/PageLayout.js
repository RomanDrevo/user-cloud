import React, {useState} from 'react';
import style from './PageLayout.module.scss';
import {Layout, Menu} from 'antd';
import {UserAddOutlined, UserOutlined,} from '@ant-design/icons';
import {Link} from 'react-router-dom';

const {Header, Content, Sider} = Layout;

const PageLayout = ({children}) => {
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };

    return (
      <Layout className={style['page-layout-wrapper']} style={{minHeight: '100vh'}}>
        <Header className="site-layout-background" style={{padding: 0}}>
          {/* <Logo/>*/}
        </Header>
        <Layout className="site-layout">
          <Sider width={150} collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="7" icon={<UserOutlined />} >
                <Link to='/'>
                  Users
                </Link>
              </Menu.Item>
              <Menu.Item key="8" icon={<UserAddOutlined />} >
                <Link to='/add-user'>
                  Add User
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{margin: '0 16px'}}>
            <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>

    );
};

export default PageLayout;

