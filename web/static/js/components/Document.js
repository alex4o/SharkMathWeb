import React, {Component} from "react"
import { DropTarget,DragSource,DragDropContext } from 'react-dnd';
import update from 'react/lib/update';

import Problem from "./ProblemOndocument"

import { connect } from 'react-redux';
import actions from "../actions/"

let { addProblem, moveProblem, removeProblem, selectProblem } = actions

console.log(addProblem())
const Target = {
	// drop(props, monitor, component){
	// 	if(component.props.isOverCurrent){
	// 		component.add(monitor.getItem().name)
	// 	}
	// 	console.log(props,component, monitor.getItem())
	// }
	hover(props, monitor, component) {
		//console.log("Hover", props)
		//console.log(props, monitor, component)
		let dragIndex = monitor.getItem().index;
		let hoverIndex

		if(dragIndex == -1){
			hoverIndex = props.index == null ? component.state.list.length : props.index ;
			
		}else{
			//console.log(props)
			return
		}


		// Don't replace items with themselves
		if (dragIndex === hoverIndex) {
			return;
		}

		if(monitor.isOver({ shallow: true })){
			component.move(dragIndex, hoverIndex, monitor.getItem().name);
			monitor.getItem().index = hoverIndex;
			console.log("New index: ", hoverIndex, dragIndex, props)
		}

	}
}

@connect((state) => ({problems: state.document}))
@DropTarget("Problem", Target, (connect, monitor) => ({
	// Call this function inside render()
	// to let React DnD handle the drag events:
	connectDropTarget: connect.dropTarget(),
	// You can ask the monitor about the current drag state:
	isOver: monitor.isOver(),
	isOverCurrent: monitor.isOver({ shallow: true }),
	canDrop: monitor.canDrop(),
	itemType: monitor.getItemType()
}))
export default class Document extends Component  {
	constructor(props){
		super(props)

		this.state = {
			...this.props.problems,
			counter: 0
		}
	}

	move(dragIndex, hoverIndex, item){
		if(dragIndex == -1){
			let toadd = { name: item, key: item + "-" + this.state.list.length }
			this.props.dispatch(addProblem(toadd, hoverIndex))
		}else{
			this.props.dispatch(moveProblem(dragIndex, hoverIndex))
		}
	}

	remove(index){
		this.props.dispatch(removeProblem(index))

	}
	componentWillReceiveProps(newProps){
		console.log(arguments)
		this.setState({ ...newProps.problems })
	}

	select(problemType){
		this.props.dispatch(selectProblem(problemType.index))


		console.log("Problem: ", problemType)
	}

	render(){
		return this.props.connectDropTarget(
			<div className="sheet" >
				{this.state.list.map((item,index) => <Problem key={item.key} index={index} select={this.select.bind(this)} isSelected={index==this.state.selected} remove={this.remove.bind(this, index)} name={item.name} move={this.move.bind(this)}/>)}
			</div>)
	}
}
