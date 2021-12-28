// import bgSVG from './assets/image.svg'
import './App.css';
import React from 'react';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { ConfigureStore } from './Redux/store';
const store = ConfigureStore();




function App() {

 

  
    return(
      <div>
    <Provider store={store}>
      <Main/>
    </Provider>  
      </div>
    )
  }



export default App;
