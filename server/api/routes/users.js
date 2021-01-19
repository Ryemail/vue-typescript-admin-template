var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // res.send('respond with a resource 66666666666');
    res.json({ title: 'Express  ', name: '阮垚' });
});

module.exports = router;
