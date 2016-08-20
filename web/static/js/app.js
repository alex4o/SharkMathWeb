// import { Socket } from "phoenix";

// let socket = new Socket("/ws")
// socket.connect()
// let chan = socket.chan("topic:subtopic", {})
// chan.join().receive("ok", chan => {
//   console.log("Success!")
// })


Array.prototype.spliceImmutable = function(startIndex, length, item){
	let copy = [...this]
	copy.splice(startIndex, length, item)
	return copy
}

import { render } from 'react-dom'
import React, { PropTypes, Component } from 'react'
import {hashHistory, Router, Route, Link} from "react-router"
import Home from "./home"
import { Provider } from 'react-redux'

import reactor from "./reactor"

import configureStore from "./store"

let store = configureStore()

require("../css/normalize.scss")



class App extends Component {

	render(){
		return (
			<Provider store={store}>
			<div>
				<heading>Hello world</heading> 
				<div id="body"> 
					{this.props.children} 
				</div>
			</div>
			</Provider>)
	}
}

var router = (
<Router history={hashHistory}>
	<Route path="/" component={App}>
		<Route path="home" component={Home}/>
	</Route>
</Router>)

render(router, document.getElementById('root'))
