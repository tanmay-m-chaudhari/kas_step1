const express = require('express');
const app = express();
app.get('/', (req, res) => res.json({ status: "healthy" }));
app.listen(4000);
