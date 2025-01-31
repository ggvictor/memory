 const express = require("express");

 const upload = require("./helpers/upload")

 const router = express.Router()

 const {
    createMemory
 }= require("./contollers/MemoryController")

 router.post("/",upload.single("image"),(req, res, next) =>{
   const image = req.file

   if(!image){
      return res.status(400).json({msg: "Por favor, envie um arquivo."})
   }
   next()
 } , (req, res) => createMemory(req, res) )

 module.exports = router