import React, { Component } from 'react'

class DropZone extends Component {
  state = {
    drag: false
  }
  dropRef = React.createRef()
  handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.setState({
      drag: false
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
    this.props.goToUploading();
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
        <div style={{margin: 'auto'}} ref={this.dropRef} className="drop-zone">
         {this.props.children}
      </div>
    )
  }
}
export default DropZone