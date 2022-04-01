const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
router.get("/notes", (req, res) => {
  const data = JSON.parse(fs.readFileSync("db/db.json"));
  res.json(data);
});

router.post("/notes", (req, res) => {
  const data = JSON.parse(fs.readFileSync("db/db.json"));
  const newNote = req.body
  newNote.id=uuidv4()
  data.push(newNote)
  fs.writeFileSync("db/db.json",JSON.stringify(data))
  res.json(newNote)
});

module.exports = router;
