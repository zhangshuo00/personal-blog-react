import React, { Component } from 'react'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import Data from './components/Data'
import Addarticle from './components/Addarticle'
import Addtag from './components/Addtag'
import Managearticle from './components/Managearticle'
import Managetag from './components/Managetag'
import User from './components/User'

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default class App extends Component {
	constructor(){
		super();
		this.state = {
			collapsed : false
		}
	}
	onCollapse = collapsed =>{
		console.log(collapsed,this.key);
		this.setState({
			collapsed
		})
	}
	onClick = (e)=>{
		console.log(e.key)
		switch(e.key){
			case '1':
				window.location = '/';
				break;
			case '3':
				window.location = '/addArticle';
				break;
			case '4':
				window.location = '/manageArticle';
				break;
			case '6':
				window.location = '/addTag';
				break;
			case '7':
				window.location = '/manageTag';
				break;
			case '8':
				window.location = '/user';
				break;
		}
	}
  	render() {
    	return (
			<Router>
			<Layout style={{ minHeight: '100vh' }}>
				<Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
					<Menu theme="dark" defaultSelectKeys={['1']} mode="inline">
						<Menu.Item onClick={this.onClick} key="1">
							<Icon type="home"/>
							<span>首页</span>
						</Menu.Item>
						<SubMenu
							key="2"
							title={
								<span>
									<Icon type="file"/>
									<span>文章</span>
								</span>
							}
						>
							<Menu.Item onClick={this.onClick} key="3">新增文章</Menu.Item>
							<Menu.Item onClick={this.onClick} key="4">管理文章</Menu.Item>
						</SubMenu>
						<SubMenu 
							key="5"
							title={
								<span>
									<Icon type="pie-chart"/>
									<span>分类</span>
								</span>
							}
						>
							<Menu.Item onClick={this.onClick} key="6">新增分类</Menu.Item>
							<Menu.Item onClick={this.onClick} key="7">管理分类</Menu.Item>
						</SubMenu>
						<Menu.Item onClick={this.onClick} key="8">
							<Icon type="user"/>
							<span>用户</span>
						</Menu.Item>
					</Menu>
				</Sider>
				<Content>
					<Route exact path="/" component={Data}/>
					<Route path="/addArticle" component={Addarticle}/>
					<Route path="/addTag" component={Addtag}/>
					<Route path="/manageArticle" component={Managearticle}/>
					<Route path="/manageTag" component={Managetag}/>
					<Route path="/user" component={User}/>
				</Content>
			</Layout>
			</Router>
    	)
  	}
}
