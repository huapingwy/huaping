var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req.request);
  res.render('index', { title: 'Express' });
});

module.exports = router;

//# sourceMappingURL=index-compiled.js.map