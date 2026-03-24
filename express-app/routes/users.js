const express = require('express');
const router = express.Router();

/* GET users listing. */

items = [
  {"id": 1, "name": "Алсу"},
  {"id": 2, "name": "Илья"},
]
router.get('/', function(req, res, next) {
  res.send(items);
});

module.exports = router;
