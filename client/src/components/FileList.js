import React, { Component } from 'react'
import DragAndDrop from './DragandDrop'
class FileList extends Component {
state = {
    files: [
      'nice.pdf',
      'verycool.jpg',
      'amazing.png',
      'goodstuff.mp3',
      'thankyou.doc'
    ]
  }
 handleDrop = (files,e) => {
  e.preventDefault()
  e.stopPropagation()
     console.log("hello world dropped")
  }
render() {
    return (
      <DragAndDrop handleDrop={this.handleDrop}>
        <div style={{height: 300, width: 250}}>
          {this.state.files.map((file,i) =>
            <div key={i++}>{file}</div>
          )}
        </div>
      </DragAndDrop>
    )
  }
}
export default FileList