const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const chapter = require('./routes/chapter');

app.use(cors());
app.use(express.json());
app.use('/api/v1/chapters', chapter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
