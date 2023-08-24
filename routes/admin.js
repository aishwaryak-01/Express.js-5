const express=require('express');
const path=require('path');
const adminDir=require('../helper/path');
const router=express.Router();
router.get('/add-product', (request, response, next) => {
response.sendFile(path.join(adminDir, 'views', 'add-product.html'));
})
router.post('/add-product', (request, response, next) => {
console.log(request.body);
response.redirect('/');
})
module.exports=router;