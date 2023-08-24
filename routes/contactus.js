const express=require('express');
const path=require('path');
const contactDir=require('../helper/path');
const router=express.Router();
router.get('/contactus', (request, response, next) => {
response.sendFile(path.join(contactDir, 'views', 'contactus.html'));
})
router.post('/contactus', (request, response, next) => {
console.log(request.body);
response.redirect('/success');
})
module.exports=router;