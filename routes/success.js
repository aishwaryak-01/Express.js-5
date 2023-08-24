const express=require('express');
const path=require('path');
const successDir=require('../helper/path');
const router=express.Router();
router.get('/success', (request, response, next) => {
response.sendFile(path.join(successDir,'views','success.html'));
})
module.exports=router;