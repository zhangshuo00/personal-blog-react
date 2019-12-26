import React, { Component } from 'react'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Sider from './components/Sider/Sider'
import Home from './components/Content/Home'
import Archives from './components/Content/Archives'
import Classification from './components/Content/Classification'
import About from './components/Content/About'


export default class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Header/>
					<Sider/>
					<div className="content">
						<Route exact path="/" component={Home}/>
						<Route path="/archives" component={Archives}/>
						<Route path="/classification" component={Classification}/>
						<Route path="/about" component={About}/>
					</div>
				</div>
			</Router>
		)
	}
}

