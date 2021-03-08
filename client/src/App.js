// import bgSVG from './assets/image.svg'
import './App.css';
import React, {Component} from 'react';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { ConfigureStore } from './Redux/store';
const store = ConfigureStore();




class App extends Component {

 

  render(){
    return(
      <div>
    <Provider store={store}>
      <Main/>
    </Provider>  
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