const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Hare Krishna ");
});

app.get("/register", (req, res) => {
  res.status(200).json({ msg: "registration successful" });
});

app.get("/about", (req1, res1) => {
  res1.status(200).send("Welcome to About Page Hare Krishna Hari Bol ");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running at port: ${PORT}`);
});