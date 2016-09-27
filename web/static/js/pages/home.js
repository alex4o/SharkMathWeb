import React, {Component} from "react"

import ReactDOM,{ findDOMNode } from 'react-dom'
import { DropTarget,DragSource,DragDropContext } from 'react-dnd';
import update from 'react/lib/update';

import Document from "../components/Document"
import ProblemType from "../components/ProblemType"
import Proerty from "../components/property"

window.update = update

var HTML5Backend = require('react-dnd-html5-backend');

const Types = {
	TYPE: 'type'
};



@DragDropContext(HTML5Backend)
export default class Home extends Component {

	render(){
		return <div id="home">
		<div className="typeList">
		
				<ProblemType name="Hello"/>
				<ProblemType name="World"/>
				<ProblemType name="Bulgaria"/>
				<ProblemType name="Complex"/>
				<ProblemType name="Simple"/>
		
		</div>
			<Document />
			<div className="propertyList">
				<Proerty label="prop1"/>
				<Proerty label="prop 2"/>
				<Proerty label="onother property" />
			</div>
		</div>
	}
}
