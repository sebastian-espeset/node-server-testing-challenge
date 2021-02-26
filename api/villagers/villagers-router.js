const express = require("express");
const router = express.Router();
const Villagers = require('./villagers-model')

router.get('/',async (req,res)=>{
   Villagers.getAll()
    .then(villagers=>{
        res.status(200).json(villagers)
    }).catch(error=>{
        res.status(400).json({message:error.message})
    })
})
module.exports = router;