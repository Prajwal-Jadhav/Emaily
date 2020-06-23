const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("server started on port " + PORT);
});
