const express = require('express');
const router = express.Router();

/* GET users listing. */

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('mydb.db');
db.run(`CREATE TABLE IF NOT EXISTS users (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   name text)`);

router.get('/', function(req, res, next) {
  db.all("SELECT id, name FROM users", [], (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(rows);
    }
  });
});

router.post('/', function(req, res) {
  const name = req.body.name;
  const insert = "INSERT INTO users (name) VALUES (?)";
  db.run(insert, [name]);
  res.status(201).json({"message": "User was created"});
})

router.get('/:id', function(req, res, next) {
  const targetId = Number(req.params.id);
  // const user = items.filter(item => item.id === targetId);
  // if (user.length === 0) {
  //   res.status(404).json({"message": "User not found"});
  // } else {
  //   res.status(200).json(user);
  // }
  db.all("SELECT id, name FROM users WHERE id = (?)", [targetId], (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(rows);
    }
  });
})

module.exports = router;
