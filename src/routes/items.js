const express = require('express');
const router = express.Router();
const ItemController = require("../controllers/ItemController.js");


router.get('/', (req, res,next)=>{
    ItemController.getAllItems(req,res,next);
})

router.get('/:id', (req, res,next)=>{
    ItemController.findById(req, res,next);
})

router.post('/add', (req, res,next)=>{
    ItemController.newItem(req,res,next);
})

router.put('/edit/:id', (req, res,next)=>{
    ItemController.replaceItem(req,res,next);
})

router.patch('/edit/:id', (req, res,next)=>{
    ItemController.updateItem(req,res,next);
})

router.delete('/delete/:id', (req, res,next)=>{
    ItemController.deleteItem(req,res,next);
})
module.exports = router;