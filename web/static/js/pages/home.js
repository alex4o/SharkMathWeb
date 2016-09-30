import React, {Component} from "react"

import ReactDOM,{ findDOMNode } from 'react-dom'
import { DropTarget,DragSource,DragDropContext } from 'react-dnd';
import update from 'react/lib/update';
import { connect } from 'react-redux';

import Document from "../components/Document"
import ProblemType from "../components/ProblemType"
import Proerty from "../components/property"

window.update = update

var HTML5Backend = require('react-dnd-html5-backend');

const Types = {
	TYPE: 'type'
};


@connect((state) => ({selectedItem: state.document.list[state.document.selected], selectedIndex: state.document.selected}))
@DragDropContext(HTML5Backend)
export default class Home extends Component {

	constructor(props){
		super(props)

		this.state = {
			selectedItem: null,
			selectedIndex: -1
		} 

	}

	componentWillReceiveProps(newProps){
		//console.log(newProps)
		this.setState(newProps)
	}

	render(){
		let name = ""
		if(this.state.selectedItem != null){
			name = this.state.selectedItem.name
		}

		return <div id="home">
		<div className="typeList">
		
				<ProblemType name="EquationDescriptor"/>
				<ProblemType name="InequationDescriptor"/>
				<ProblemType name="ExpressionDescriptor"/>
				<ProblemType name="FracEquationDescriptor"/>
				<ProblemType name="CompoundInequationDescriptor"/>
		
		</div>

			<Document/>

			<div className="propertyList">
				<Proerty label={name}/>

				<Proerty label="prop 1"/>
				<Proerty label="prop 2"/>
				<Proerty label="onother property" />
			</div>
		</div>
	}
}
