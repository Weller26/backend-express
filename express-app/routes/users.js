const express = require('express');
const router = express.Router();

/* GET users listing. */

items = [
  {"id": 1, "name": "Алсу"},
  {"id": 2, "name": "Илья"},
]
router.get('/', function(req, res, next) {
  res.status(200).json(items);
});

router.get('/:id', function(req, res, next) {
  const targetId = Number(req.params.id);
  const user = items.filter(item => item.id === targetId);
  if (user.length === 0) {
    res.status(404).json({"message": "User not found"});
  } else {
    res.status(200).json(user);
  }
})

module.exports = router;
