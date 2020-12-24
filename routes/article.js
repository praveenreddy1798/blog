const express = require('express');
const router = express.Router();
const Articles = require('../models/article')

//get all articles

router.get('/',(req,res)=>{
    Articles.find()
    .then(article=>res.json(article))
    .catch(err=>res.status(400).json(`Error occured: ${err}`))
})
//get a single article by id

router.get('/article/:id',(req,res)=>{
    Articles.findById(req.params.id)
    .then(article=>res.json(article))
    .catch(err=>res.status(400).json(`Error occured: ${err}`))
})

//post a article

router.post('/add', (req,res)=>{
    const newArticle = new Articles({
       title:req.body.title,
       article:req.body.article,
       authorname:req.body.authorname,
    })
    
    newArticle.save()
    .then(()=>res.json('article is successfully posted'))
    .catch(err=>res.status(400).json(`error:${err}`))
})

//find by id and update a article

router.put('/update/:id',(req,res)=>{

    Articles.findById(req.params.id)
    .then(article=>{
        article.title=req.body.title,
        article.article=req.body.article,
        article.authorname=req.body.authorname,
    article.save()
    .then(()=>res.json('The article is updated successfully'))
    .catch(err=>res.status(400).json(`error:${err}`))
})
.catch(err=>res.status(400).json(`error:${err}`))
})

// find by id and delete


router.delete('/:id',(req,res)=>{
    Articles.findByIdAndDelete(req.params.id)
    .then(()=>res.json('The article is successfully deleted'))
    .catch(err=>res.status(400).json(`error:${err}`))
})

module.exports=router;