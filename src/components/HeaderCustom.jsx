
import React, { Component } from 'react';
import avater from '../style/imgs/b1.jpg';
import { Menu, Icon, Layout } from 'antd';

import { queryString } from '../utils';
import { withRouter } from 'react-router-dom';



const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class HeaderCustom extends Component {
    state = {
        user: '',
        password:'',
        newClckModalVisible: false
    };
    componentDidMount() {
        const QueryString = queryString();

    };

    menuClick = e => {
        console.log(e);
        e.key === 'logout' && this.logout();
    };
    showNewClickModal(){
        this.setState({
            newClckModalVisible: true
        });
    }
    render() {
        const userlist = JSON.parse(localStorage.getItem('userlist'));
        return (
            <Header  className="grey-theme header" >
                <span style={{color:'#ff1e26',fontSize: '25px',verticalAlign:'sub'}}></span>
                <Menu
                    mode="horizontal"
                    style={{ lineHeight: '64px', float: 'left' }}
                    onClick={this.menuClick}
                >
                    <SubMenu title={<span>链接</span>}>
                        {
                            userlist.map((v,i)=>{
                                return  <Menu.Item key={i}>{v.title}</Menu.Item>;
                            })
                        }


                        <Menu.Item key="logout"><span onClick={this.showNewClickModal.bind(this)}>新建</span></Menu.Item>


                    </SubMenu>
                    <Menu.Item key="pwa">
                        <Icon type="shrink" /><span >链接</span>
                    </Menu.Item>
                    <Menu.Item key="pwa">
                        <Icon type="search" /><span>查询</span>
                    </Menu.Item>

                </Menu>
                <Menu
                    mode="horizontal"
                    style={{ lineHeight: '64px', float: 'right' }}
                    onClick={this.menuClick}
                >

                    <SubMenu title={<span className="avatar"><img src={avater} alt="头像" /><i className="on bottom b-white" /></span>}>
                        <MenuItemGroup title="用户中心">
                            <Menu.Item key="setting:1">你好 - 系统管理员</Menu.Item>

                            <Menu.Item key="logout"><span onClick={this.logout}>退出登录</span></Menu.Item>
                        </MenuItemGroup>

                    </SubMenu>
                </Menu>
            </Header>
        );
    }
}

export default withRouter(HeaderCustom);
