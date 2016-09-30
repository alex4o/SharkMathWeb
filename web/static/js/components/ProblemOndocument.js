import React, {Component} from "react"
import { DropTarget,DragSource,DragDropContext } from 'react-dnd';
import classnames from "classnames"



const Target = {
	hover(props, monitor, component) {
		//console.log("Hover", props)
		const dragIndex = monitor.getItem().index;
		const hoverIndex = props.index;

		// Don't replace items with themselves
		if (dragIndex === hoverIndex) {
			return;
		}

		if(monitor.isOver({ shallow: true })){

			props.move(dragIndex, hoverIndex, monitor.getItem().name);
			monitor.getItem().index = hoverIndex;
		}

	}
}

const Source = {
	beginDrag(props, monitor, component){
		//console.log(props, monitor, component)
		return { name: props.name, index: props.index }
	},
	isDragging(props, monitor){
		//console.log("is-dragging: ", props, monitor.getItem())
		return props.index === monitor.getItem().index
	}
}

@DropTarget("Problem", Target, (connect,monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	isOverCurrent: monitor.isOver({ shallow: true })
}))
@DragSource("Problem", Source, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging()
}))
export default class ProblemOnDocument extends Component {
	render(){
		const { text, isDragging, connectDragSource, connectDropTarget,isOverCurrent,remove,isSelected } = this.props;
		//let opacity = isDragging ? 0 : 1;
		//console.log(isDragging)
		return connectDragSource(connectDropTarget(
			<div className={classnames({"item": true, "item-isdragging": isDragging, "selected": isSelected})}><span onClick={e => this.props.select(this.props)} >{this.props.name}<div onClick={e => { if (e.stopPropagation) e.stopPropagation(); remove(e) } } className="remove">X</div></span></div>
			))
	}
}