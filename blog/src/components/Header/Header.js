import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Input, Menu, Icon, Button} from 'antd'
import "../../css/header.css"

const {Search} = Input;
const { SubMenu } = Menu;

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            current : window.location.href.split('/').pop()==='' ? 'home' : window.location.href.split('/').pop(),
        }
    }
    
    handleClick = e =>{
        console.log('click',e.key);
        this.setState({
            current : e.key
        })
        if(e.key === 'home'){
            window.location = '/'
        }else{
            window.location = '/' + e.key;
        }

    }

    render() {
        return (
            <div className="header">
                <div className="header-left">
                    <span>不爱吃萝卜的兔子的博客</span>
                </div>

                <div className="header-right">
                    <Search
                        style={{width:'30%',float:'left',paddingTop:'10px'}}
                        placeholder="搜索文章"
                        enterButton="Search"
                        size="default"
                        onSearch={value => console.log(value)}
                    />
                    <Menu style={{marginLeft:'20px',float:'left',width:'45%'}} onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                        <Menu.Item key='home'>
                            <Icon type="home"/>
                            首页
                        </Menu.Item>
                        <Menu.Item key='archives'>
                            <Icon type="hdd"/>
                            归档
                        </Menu.Item>
                        <Menu.Item key='classification'>
                            <Icon type="folder"/>
                            分类
                        </Menu.Item>
                        <Menu.Item key='about'>
                            <Icon type="user"/>
                            关于
                        </Menu.Item>
                    </Menu>
                    <div style={{width:'20%',float:'left'}}>
                        <Button style={{marginRight:'8px',marginTop:'10px',marginLeft:'15px'}} type="primary">登录</Button>
                        <Button type="danger">注册</Button>
                    </div>
                </div>
            </div>
        )
    }
}
