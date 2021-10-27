var express = require('express');
var router = express.Router();
var Book=require('../models/book');

/* GET users listing. */
router.get('/', (req, res, next)=> {
  Book.find({},(err,books)=>{
    if(err)return next(err);

    res.render('bookstore',{books});
  })
 
});

//createbook form
router.get('/new',(req,res,next)=>{
  res.render('createBookForm');
})



//createList
router.post('/',(req,res,next)=>{

  console.log(req.body);
  Book.create(req.body,(err,book)=>{
    if(err)return next(err);
    res.redirect('/books');
  })
 
})

module.exports = router;
