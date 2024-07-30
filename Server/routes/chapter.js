const express = require("express");
const app = express();
const port = 3000;

const pickupOptionsRoute = require("./routes/pickupOptions");
const searchRoute = require("./routes/search");

app.use(express.json()); 

app.use("/api/v1/chapters", pickupOptionsRoute);
app.use("/api/v1/chapters", searchRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
