const express = require("express");
const app = express();
const usersControler = require("./controllers/users.controllers");

const usersRouter = require("./router/users.router");
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { showDetails: true });
});



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

