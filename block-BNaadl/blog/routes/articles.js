var express = require('express');
var router = express.Router();
var Article=require('../models/article');

/* GET users listing. */
router.get('/new', (req, res, next)=> {
  
  res.render('createArticleForm');
 
  
});

router.get('/',(req,res,next)=>{
 
  Article.find({},(err,data)=>{

    if(err)return next(err);
    res.render('articleList',{articles:data});
  })
 
 
})

router.get('/:id',(req,res,next)=>{
  const id=req.params.id;
  Article.findById(id,(err,data)=>{
    res.render('articleDetails',{article:data});
  })
  
 
})

router.get('/:id/edit',(req,res,next)=>{
  const id=req.params.id;
  Article.findById(id,(err,data)=>{
    if(err)return next(err);
    res.render('updateArticleForm',{article:data});
  })

})

router.post('/',(req,res,next)=>{
  Article.create(req.body,(err,data)=>{
    if(err)return next(err);
    res.redirect('/articles');
  })
})




router.post('/:id',(req,res,next)=>{
  const id=req.params.id;
  console.log(id);
  Article.findByIdAndUpdate(id,req.body,(err,data)=>{
    if(err)return next(err);
    res.redirect(`/articles/`+id);
  })

})






router.get('/:id/delete',(req,res,next)=>{
  const id=req.params.id;
  Article.findByIdAndDelete(id,(err,data)=>{
    if(err)return next(err);
     res.redirect('/articles');
  })

})


router.get('/:id/inclikes',(req,res,next)=>{
  const id=req.params.id;
  Article.findByIdAndUpdate(id,{ $inc:{ likes:1}},(err,data)=>{
    if(err)return next(err);
     res.redirect(`/articles/`+id);
  })

})

router.get('/:id/declikes',(req,res,next)=>{
  const id=req.params.id;
  Article.findByIdAndUpdate(id,{ $inc:{ likes:-1}},(err,data)=>{
    if(err)return next(err);
     res.redirect(`/articles/`+id);
  })

})


module.exports = router;
