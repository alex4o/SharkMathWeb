import React, {Component} from "react"

export default class Register extends Component {
	render(){
		return <div id="register">
			<div>
				Register
				<div className="form">
					<div className="row"><span className="lable">username:</span><input type="text"/></div>
					<div className="row"><span className="lable">e-mail:</span> <input type="text"/></div>
					<div className="row"><span className="lable">password:</span>  <input type="text"/></div>
					<div className="row"><span className="lable">repeat password:</span> <input type="text"/></div>
				</div>
				<input type="button" value="Submit"/>
			</div>
			
		</div>
	}
}