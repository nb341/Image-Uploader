import React, {Component} from 'react';
import bgSVG from '../assets/image.svg';
import DropZone from './DropZone';

class ImageUploader extends Component {
    constructor(props){
        super(props);
    }

    selectRef = React.createRef();

    onFileChange = event => {
    
        // Update the state
        event.preventDefault();
        const files = event.target.files
        console.log(files[0])
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

     
          
      

    componentDidMount(){
        let input = this.selectRef.current;
        input.addEventListener('change', this.onFileChange);

    }
    componentWillUnmount(){
        let input = this.selectRef.current;
        input.removeEventListener('change', this.onFileChange);
    }
   
    render(){
        return(
            <div className="upload-container">
            <h1 className="header">Upload your image</h1>
            <p className="file-type">File should be Jpeg, Png...</p>
            <DropZone fileChange={this.onFileChange} uploadedView={this.props.uploadedView} selectView = {this.props.selectView} uploadView={this.props.uploadView}>
              <img className="img" src={bgSVG} alt="mountain behind clouds"/>
              <p className="drop-text">Drag & Drop your image here</p>
              </DropZone>
            <p className="or">Or</p>
            <label className="select-file">
            <input type="file" onClick={(e)=>{console.log("waddup")}} ref={this.selectRef} className="select-file"/>
            Choose file
            </label>
        </div>
        );
    }
}

export default ImageUploader;