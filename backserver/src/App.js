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
	constructor(props){
		super(props);
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
		window.location = e.key
	}
  	render() {
    	return (
			<Router>
			<Layout style={{ minHeight: '100vh' }}>
				<Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
					<Menu theme="dark" defaultSelectKeys={['1']} mode="inline">
						<Menu.Item onClick={this.onClick} key="/">
							<Icon type="home"/>
							<span>首页</span>
						</Menu.Item>
						<Menu.Item onClick={this.onClick} key="/addArticle">
							<Icon type="edit"/>
							<span>新增文章</span>
						</Menu.Item>
						<Menu.Item onClick={this.onClick} key="/manageArticle">
							<Icon type="folder"/>
							<span>管理文章</span>
						</Menu.Item>
						<Menu.Item onClick={this.onClick} key="/addTag">
							<Icon type="tag"/>
							<span>新增分类</span>
						</Menu.Item>
						<Menu.Item onClick={this.onClick} key="/manageTag">
							<Icon type="tags"/>
							<span>管理分类</span>
						</Menu.Item>
						<Menu.Item onClick={this.onClick} key="/user">
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
