const express = require("express");
const app = express();
const userRoutes = require("./routes/user.route");

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to the homepage");
});
app.use("/api/users", userRoutes);

module.exports = app;
