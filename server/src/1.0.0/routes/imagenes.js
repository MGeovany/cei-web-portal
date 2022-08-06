
const express= require('express');
const multer = require("multer");
const sharp = require("sharp");
const router = express.Router();

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,"./uploads");
    },
    filename:(req,file,cb)=>{
      const ext= file.originalname.split(".").slice(-1)[0];
      cb(null,`${file.fieldname}-${Date.now()}.${ext}`); //resumir imagen a 50 caracteres
    }
  })

const upload=multer({storage});
  
router.post('/upload',upload.single('file'),(req,res)=>{
  let uriFile =`http://${req.hostname}:${req.socket.localPort}/images/${req.file.filename}`;
    res.send({
      url:uriFile
    });
});
  
module.exports=router;