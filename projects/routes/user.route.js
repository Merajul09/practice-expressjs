const express = require("express");
const router = express.Router();

// All User Routes
router.get("/", (req, res) => {
  res.send("Get all users");
});

router.post("/", (req, res) => {
  res.send("Create new user");
});

router.get("/:id", (req, res) => {
  res.send(`Get user with ID: ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`delete user with ID: ${req.params.id}`);
});

module.exports = router;
