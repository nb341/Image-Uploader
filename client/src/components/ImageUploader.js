import React, {Component} from 'react';
import bgSVG from '../assets/image.svg';
import DropZone from './DropZone';
class ImageUploader extends Component {
    

    
    render(){
        return(
            <div className="upload-container">
            <h1 className="header">Upload your image</h1>
            <p className="file-type">File should be Jpeg, Png...</p>
            <DropZone goToUploading={this.props.uploadView}>
              <img className="img" src={bgSVG} alt="mountain behind clouds"/>
              <p className="drop-text">Drag & Drop your image here</p>
              </DropZone>
            <p className="or">Or</p>
            <button className="select-file">Choose a file</button>
        </div>
        );
    }
}

export default ImageUploader;