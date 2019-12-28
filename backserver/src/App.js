import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'

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
		console.log(collapsed);
		this.setState({
			collapsed
		})
	}
  	render() {
    	return (
			<Layout style={{ minHeight: '100vh' }}>
				<Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
					<Menu theme="dark" defaultSelectKeys={['1']} mode="inline">
						<Menu.Item key="1">
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
							<Menu.Item key="3">新增文章</Menu.Item>
							<Menu.Item key="4">管理文章</Menu.Item>
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
							<Menu.Item key="6">新增分类</Menu.Item>
							<Menu.Item key="7">管理分类</Menu.Item>
						</SubMenu>
						<Menu.Item key="8">
							<Icon type="user"/>
							<span>用户</span>
						</Menu.Item>
					</Menu>
				</Sider>
			</Layout>
    	)
  	}
}
