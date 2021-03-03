import React, { Component } from 'react'
class DragAndDrop extends Component {
  state = {
    drag: false
  }
  dropRef = React.createRef()
  handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.setState({
      drag: true
    })
  }
  handleDragIn = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log("hello world drag in")
  }
  handleDragOut = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log("hello world from drag out")
    this.setState({drag: false})
  }
  handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log("hello world drop file")
  }
  componentDidMount() {
    let div = this.dropRef.current
    div.addEventListener('dragenter', this.handleDragIn)
    div.addEventListener('dragleave', this.handleDragOut)
    div.addEventListener('dragover', this.handleDrag)
    div.addEventListener('drop', this.handleDrop)
  }
  componentWillUnmount() {
    let div = this.dropRef.current
    div.removeEventListener('dragenter', this.handleDragIn)
    div.removeEventListener('dragleave', this.handleDragOut)
    div.removeEventListener('dragover', this.handleDrag)
    div.removeEventListener('drop', this.handleDrop)
  }
  render() {
    return (
      <div
        style={{display: 'inline-block', position: 'relative'}}
        ref={this.dropRef}
      >
        {this.state.drag &&
          <div 
            
          >
            <div 
              
            >
              <div>drop here :)</div>
            </div>
          </div>
        }
        {this.props.children}
      </div>
    )
  }
}
export default DragAndDrop