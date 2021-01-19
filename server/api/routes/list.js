var express = require('express');
var router = express.Router();

var Mock = require('mockjs');

const List = [];
const count = 100;

for (let i = 0; i < count; i++) {
    List.push(
        Mock.mock({
            id: '@increment',
            timestamp: +Mock.Random.date('T'),
            author: '@first',
            reviewer: '@first',
            title: '@title(5, 10)',
            content_short: 'mock data',
            forecast: '@float(0, 100, 2, 2)',
            importance: '@integer(1, 3)',
            'type|1': ['CN', 'US', 'JP', 'EU'],
            'status|1': ['published', 'draft'],
            display_time: '@datetime',
            comment_disabled: true,
            pageviews: '@integer(300, 5000)',
            platforms: ['a-platform'],
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
