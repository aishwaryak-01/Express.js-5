const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const app=express();
const adminRouter=require('./routes/admin');
const shopRouter=require('./routes/shop');
const contactRouter=require('./routes/contactus');
const successRouter=require('./routes/success');
app.use(bodyParser.urlencoded({extended:false}));
app.use('/admin', adminRouter);
app.use(shopRouter);
app.use(contactRouter);
app.use(successRouter);
app.use( (request, response, next) => {
    response.status(404).setHeader('Content-Type', 'text/html').sendFile(path.join(__dirname, 'views', '404.html'));
});
app.listen(3000);