const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("👋 Hello from User Service running on AKS!");
});

app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});
