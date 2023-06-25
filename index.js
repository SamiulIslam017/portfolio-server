const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const data = require("./data.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/portfolio", (req, res) => {
  res.send(data);
});
app.get("/portfolio/:id", (req, res) => {
  const id = req.params.id;
  const SingleData = data.find((singleData) => singleData.index == id);
  res.send(SingleData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
