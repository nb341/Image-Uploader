const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

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

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

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
      res.send({success: true})
    }
    
    

  })
  
});

app.listen(port, () => console.log(`Listening on port ${port}`));