const express=require('express');
const path=require('path');
const shopDir=require('../helper/path');
const router=express.Router();
router.get('/', (request, response, next) => {
response.sendFile(path.join(shopDir,'views','shop.html'));
})
module.exports=router;