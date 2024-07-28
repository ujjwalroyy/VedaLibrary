const express = require("express");
const db = require("./config/dbConnection");
const app = express();
const port = process.env.PORT || 3000;
const chapter = require("./routes/chapter");

// app.get("/", (req, res) => {
//   res.send("hello world");
// });


app.use("/api/v1", chapter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
