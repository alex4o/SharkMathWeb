import React, {Component} from "react"

export default class Property extends Component {
	render(){
		return <div><span className="label">{this.props.label}</span><input/></div>
	}
}