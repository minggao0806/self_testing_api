var express = require('express');
var router = express.Router();
let {query} = require('../config/mysqlContent')
/* GET users listing. */
router.get('/api/draw', function(req, res, next) {
  var sql = `select count(*) from zice2`;
  let {count,pageSize} = req.query;
  var obj = {};
  query(sql).then((rows) => {
    console.log(rows);
    obj.total = rows[0]['count(*)'];
    
  })
  var start = (count-1)*pageSize;
  var sql1 = `select * from zice2 limit ${start},${pageSize}`;
  query(sql1).then((rows) => {
    obj.data = rows;
    res.send(obj);
  })

});

module.exports = router;
