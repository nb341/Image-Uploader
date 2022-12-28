import React, {useRef, useEffect, useCallback} from 'react';
import bgSVG from '../assets/image.svg';
import DropZone from './DropZone';



function ImageUploader(props){
  const selectRef = useRef(null);

  

  const onFileChange = useCallback(
    (event) => {
      
    
        // Update the state
        event.preventDefault();
        const files = event.target.files
        console.log(files[0])
        const formData = new FormData();
        formData.append('image', files[0]);
        console.log(formData.get('image'))
        props.uploadView();
        fetch('https://image-uploader-08jw.onrender.com/postImage/', {
            method: 'POST',
            mode: "cors",
            cache: "no-cache", 
            credentials: "same-origin",
            body: formData
          })
          .then(response => response.json())
          .then(data => {
            console.log(data.err + "Response Here")
            if(data.err) props.selectView();
            else{
              
              console.log("Look for this "+data.url)
              console.log(typeof data.url)
            props.uploadedView(data.url);
            
            }
          })
          .catch(error => {
            console.error(error);
            props.selectView();
          })
      
      
    },
    [props],
  )


  useEffect(()=>{
    const input = selectRef.current;
    input.addEventListener('change', onFileChange);

    return ()=>{
      //let input = selectRef.current;
      input.removeEventListener('change', onFileChange);
    }
  }, [selectRef, onFileChange])

    return(
            <div className="upload-container">
              <h1 className="header">Upload your image</h1>
              <p className="file-type">File should be Jpeg, Png...</p>
              <DropZone uploadedView={props.uploadedView} selectView = {props.selectView} uploadView={props.uploadView}>
                <img className="img" src={bgSVG} alt="mountain behind clouds"/>
                <p className="drop-text">Drag & Drop your image here</p>
              </DropZone>
              <p className="or">Or</p>
              <label className="select-file">
              <input type="file" ref={selectRef} className="select-file"/>
                Choose file
              </label>
            </div>
          );
}




export default ImageUploader;