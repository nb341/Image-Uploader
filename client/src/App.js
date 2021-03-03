// import bgSVG from './assets/image.svg'
  import './App.css';
 import React, {Component} from 'react';
 import ImageUploader from './components/ImageUploader';
 import Uploading from './components/Uploading';
 import UploadFinised from './components/UploadFinished';


class App extends Component {

  state = { 
    showImageUpload: true,
    showUploading: false,
    showUploadFinised: false
  }

  updateHandler(state){
     this.setState(
       {
        showImageUpload: state.showImageUpload,
        showUploading: state.showUploading,
        showUploadFinised: state.showUploadFinised
       }
     )
  }

  render(){
    return(
      <div>
      {this.state.showImageUpload && <ImageUploader/>}
      {this.state.Uploading && <Uploading/>}
      {this.state.UploadFinised && <UploadFinised/>}
      </div>
    )
  }

}

export default App;

/*
 

const ImageUploader = ()=>{
  
  return (
    <div className="upload-container">
        <h1 className="header">Upload your image</h1>
        <p id="file-type">File should be Jpeg, Png...</p>
        <div onDrop={()=> console.log("Hello")} id="drop-zone">
          <img id="img" src={bgSVG} alt="mountain behind clouds"/>
          <p id="drop-text">Drag & Drop your image here</p>
        </div>
        <p id="or">Or</p>
        <button id="select-file">Choose a file</button>
    </div>
  );
}

function App(){
  return(
    <div className="ab">
    <ImageUploader/>
    </div>
    
  )
}

export default App;

*/