const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Chapter route");
});

// Export the router instance
module.exports = router;
