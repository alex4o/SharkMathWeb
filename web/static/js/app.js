// import { Socket } from "phoenix";

// let socket = new Socket("/ws")
// socket.connect()
// let chan = socket.chan("topic:subtopic", {})
// chan.join().receive("ok", chan => {
//   console.log("Success!")
// })

import axios from "axios"

window.http = axios

import { render } from 'react-dom'
import React, { PropTypes, Component } from 'react'
import {hashHistory, Router, Route, Link} from "react-router"
import Home from "./pages/home"
import Login from "./pages/login"
import Register from "./pages/register"
import { Provider } from 'react-redux'

import reactor from "./reactor"

import configureStore from "./store"
import { syncHistoryWithStore } from 'react-router-redux'


let store = configureStore()

require("../css/normalize.scss")



class App extends Component {

	render(){
		return (
			<div>
				<heading>Math4All</heading> 
				<div id="body"> 
					{this.props.children} 
				</div>
			</div>
			)
	}
}

let history = syncHistoryWithStore(hashHistory, store)

let router = (
<Provider store={store}>
	<Router history={history}>
		<Route path="/" component={App}>
			<Route path="home" component={Home}/>
			<Route path="login" component={Login}/>
			<Route path="register" component={Register}/>
		</Route>
	</Router>
</Provider>)

render(router, document.getElementById('root'))
