import React, { Component } from 'react'
import Header from './components/Header/Header'
import Sider from './components/Sider/Sider'


export default class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				<Sider/>
			</div>
		)
	}
}

