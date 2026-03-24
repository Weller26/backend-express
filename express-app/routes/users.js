const express = require('express');
const router = express.Router();

/* GET users listing. */

items = [
  {"id": 1, "name": "Алсу"},
  {"id": 2, "name": "Илья"},
]
let LAST_ID = 2;
router.get('/', function(req, res, next) {
  res.send('Hello, world!');
});

router.post('/', function(req, res) {
  LAST_ID++;
  const newUser = {"id": LAST_ID, "name": req.body.name};
  items.push(req.body);
  res.status(201).json(newUser);
})

module.exports = router;
