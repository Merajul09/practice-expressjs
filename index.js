const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

app.use(logger); // Globally apply middleware

const checkToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (token === "12345") {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

app.get("/protected", checkToken, (req, res) => {
  res.send("You are authorized!");
});

app.get("/test", logger, checkToken, (req, res) => {
  res.send("Test successful!");
});

app.get("/", (req, res) => {
  res.send("Welcome to the homepage");
});

app.post("/users", (req, res) => {
  res.send("user created successfully");
});

app.get("/product/:productId", (req, res) => {
  const productId = req.params.productId;
  res.send(`Product ID is: ${productId}`);
});

// URL: /search?name=book&category=education
app.get("/search", (req, res) => {
  const { name, category } = req.query;
  res.send(`Search result for ${name} in ${category}`);
});

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
