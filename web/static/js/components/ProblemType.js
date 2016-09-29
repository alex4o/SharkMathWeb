import React, {Component} from "react"
import { DropTarget,DragSource,DragDropContext } from 'react-dnd';

let counter = -1

const Source = {
	beginDrag(props, monitor, component){
		//console.log(props, monitor, component)
		counter += 1
		return { name: props.name + "-" + counter , index: -1 }
	},
	endDrag(props, monitor, component) {
		if (!monitor.didDrop()) {
			return;
		}

		let item = monitor.getItem();

		let dropResult = monitor.getDropResult();
		//console.log(item)
	},
	isDragging(props, monitor){
		//console.log(props, monitor.getItem())
		return props.index === monitor.getItem().index
	}
		
}





@DragSource("Problem", Source, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging()
}))
export default class Type extends Component  {
	render(){
		return this.props.connectDragSource(<div className="type">{this.props.name}</div>)
	}
}
