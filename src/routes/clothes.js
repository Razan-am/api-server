'use strict';

const express =  require('express');

const router = express.Router();
const {clothesCollection} = require('../models/index');

router.get('/status',(req,res)=>{
  res.send({
    domain:'https://api-serverr.herokuapp.com/food',
    status:'running',
    port:3000,
  });
});

router.get('/clothes',getClothes);
router.post('/clothes',createClothes);
router.put('/clothes/:id',updateClothes);
router.delete('/clothes/:id',deleteClothes);

async function getClothes(req,res){
  let getting = await clothesCollection.read();
  res.status(200).json(getting);
}

async function createClothes(req,res){
  let obj =  req.body;
  let newClothes = await clothesCollection.create(obj);
  res.status(200).json(newClothes);
}

async function updateClothes(req,res){
  let id = parseInt(req.params.id);
  let obj = req.body;
  let updating = await clothesCollection.update(id,obj);
  res.status(200).json(updating);
}

async function deleteClothes(req,res){
  let id = parseInt(req.params.id);
  let deleting = await clothesCollection.delete({where:{id:id}});
  res.status(204).json(deleting);
}

module.exports=router;