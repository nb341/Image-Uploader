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
  handleDrop = (event) => {
    
    event.stopPropagation()
    console.log("hello world drop file")
   
    
      // Update the state
      event.preventDefault();
      const files = event.dataTransfer.files;
      //console.log(files[0])
      const formData = new FormData();
      formData.append('image', files[0]);
      console.log(formData.get('image'))
      this.props.uploadView();
      fetch('http://localhost:5000/postImage/', {
          method: 'POST',
          mode: "cors",
          cache: "no-cache", 
          credentials: "same-origin",
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data.err + "Response Here")
          if(data.err) this.props.selectView();
          else{
            
            console.log("Look for this "+data.url)
            console.log(typeof data.url)
          this.props.uploadedView(data.url);
          
          }
        })
        .catch(error => {
          console.error(error);
          this.props.selectView();
        })

    
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