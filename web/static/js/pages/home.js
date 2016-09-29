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

	selectedType(type){
		// update props accordingly
	}

	render(){
		return <div id="home">
		<div className="typeList">
		
				<ProblemType name="EquationDescriptor"/>
				<ProblemType name="InequationDescriptor"/>
				<ProblemType name="ExpressionDescriptor"/>
				<ProblemType name="FracEquationDescriptor"/>
				<ProblemType name="CompoundInequationDescriptor"/>
		
		</div>
			<Document onSelected={(i) => {}}/>
			<div className="propertyList">
				<Proerty label="prop1"/>
				<Proerty label="prop 2"/>
				<Proerty label="onother property" />
			</div>
		</div>
	}
}
