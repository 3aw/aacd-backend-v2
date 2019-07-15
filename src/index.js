const express = require("express");
const cors = require("cors");

const app = express();

const server = require("http").Server(app);

app.use(cors());
app.use(require("./routes"));

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
