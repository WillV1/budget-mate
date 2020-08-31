const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

