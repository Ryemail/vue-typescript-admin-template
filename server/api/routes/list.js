var express = require('express');
var router = express.Router();

var Mock = require('mockjs');

var Random = Mock.Random;

const List = [];
const count = 100;

for (let i = 0; i < count; i++) {
    List.push(
        Mock.mock({
            id: '@increment',
            name: Random.cname(),
        })
    );
}

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Express', name: '阮垚' });
    const { page = 1, limit = 10 } = req.query;

    console.log(req.query);

    const pageList = List.filter((item, index) => index < limit * page && index >= limit * (page - 1));

    const data = {
        code: 200,
        data: {
            total: List.length,
            data: pageList,
            message: '请求成功',
        },
    };

    res.json(data);
});

module.exports = router;
