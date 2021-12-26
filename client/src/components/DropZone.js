import React, { useEffect, useState } from 'react';

function DropZone(props){
  const [drag, setDrag] = useState({drag: false});
  const dropRef = React.createRef();
  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDrag({
      drag: false
    })
  }
  const handleDragIn = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log("hello world drag in")
  }
  const handleDragOut = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log("hello world from drag out")
    setDrag({drag: false})
  }
  const handleDrop = (event) => {
    
    event.stopPropagation()
    console.log("hello world drop file")
   
    
      // Update the state
      event.preventDefault();
      const files = event.dataTransfer.files;
      //console.log(files[0])
      const formData = new FormData();
      formData.append('image', files[0]);
      console.log(formData.get('image'))
      props.uploadView();
      fetch('postImage/', {
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

    
  }

  useEffect(()=>{
    let div = dropRef.current
    div.addEventListener('dragenter', handleDragIn)
    div.addEventListener('dragleave', handleDragOut)
    div.addEventListener('dragover', handleDrag)
    div.addEventListener('drop', handleDrop)
    return ()=>{
      div.removeEventListener('dragenter', handleDragIn)
      div.removeEventListener('dragleave', handleDragOut)
      div.removeEventListener('dragover', handleDrag)
      div.removeEventListener('drop', handleDrop)
    }
  }, [dropRef])
  return (
    <div style={{margin: 'auto'}} ref={dropRef} className="drop-zone">
      {props.children}
    </div>
)
}

export default DropZone