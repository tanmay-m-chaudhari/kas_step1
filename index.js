const express = require("express");
const app = express();
app.get("/", (req, res) => res.json({ status: "active" }));
app.listen(3000);
