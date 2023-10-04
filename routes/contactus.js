const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/contactus', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
})

router.post('/contactus', (req, res, next) => {
    console.log(`Username : ${req.body.name},`, `E-mail ID : ${req.body.email},`, `Message : ${req.body.message}`);
    res.redirect('/success');
})

module.exports = router;
