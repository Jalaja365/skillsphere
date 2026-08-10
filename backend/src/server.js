const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to SkillSphere API"
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`SkillSphere backend running on http://localhost:${PORT}`);
});
