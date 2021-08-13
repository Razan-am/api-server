'use strict';

const express = require('express');
const router = express.Router();
const {foodCollection} =  require('../models/index');

router.get('/status',(req,res)=>{
  res.send({
    domain:'https://api-serverr.herokuapp.com/food',
    status:'running',
    port:3000,
  });
});

router.get('/food',getFood);
router.post('/food',createFood);
router.put('/food/:id',updateFood);
router.delete('/food/:id',deleteFood);

async function getFood(req,res){
  let getting = await foodCollection.read();
  res.status(200).json(getting);
}

async function createFood(req,res){
  let obj =  req.body;
  let newfood = await foodCollection.create(obj);
  res.status(200).json(newfood);
}

async function updateFood(req,res){
  let id = parseInt(req.params.id);
  let obj = req.body;
  let updating = await foodCollection.update(id,obj);
  res.status(200).json(updating);
}

async function deleteFood(req,res){
  let id = parseInt(req.params.id);
  let deleting = await foodCollection.delete({where:{id:id}});
  res.status(204).json(deleting);
}

module.exports=router;