const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 10000;;

let baseUrl = `http://localhost:${port}/`;

app.use(express.static(path.join(__dirname, 'public')));


const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: (req, file, cb)=>{
      cb(null, file.fieldname + '-' + Date.now().toString() + '-' + file.originalname);
  }
});

const upload = multer({
  storage: storage
}).single('image');

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, 'build')));


// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  baseUrl = `https://image-uploader-08jw.onrender.com/`;
  app.get('*', function(req, res) {
    console.log(baseUrl)
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}else{
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('/', function(req, res) {
    console.log(baseUrl)
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}


app.post('/postImage', (req, res) => {
  
  upload(req, res, (err) =>{
    
    if (err instanceof multer.MulterError) {
      console.log("instance of multer error")
      res.send({multerr: true});
      
    } else if (err) {
      console.log("error normal")
      res.send({err: true});
    }
    else{
       
        
      let imgUrl =  baseUrl+'uploads/' + req.file.filename;
      console.log(baseUrl)
      res.send({err:false,success: true, url: imgUrl })
    }
    
    

  })
  
});

app.listen(port, () => console.log(`Listening on port ${port} url;${baseUrl} dir:${__dirname}`));