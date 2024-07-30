const express = require("express");
const router = express.Router();

const verses = [
  { id: 1, name: "Verse 1", description: "This is the first verse." },
  { id: 2, name: "Verse 2", description: "This is the second verse." },
];

router.get("/search", (req, res) => {
  const { query, pickup } = req.query;
  
  const filteredVerses = verses.filter(verse =>
    verse.name.toLowerCase().includes(query.toLowerCase()) || 
    verse.description.toLowerCase().includes(query.toLowerCase())
  );

  res.json(filteredVerses);
});

module.exports = router;
