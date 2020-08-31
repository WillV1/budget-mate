const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

app.get('/', (req, res) => res.send('API Running'));

//Define Routes
app.use('api/users', require('./routes/api/users'));
app.use('api/auth', require('./routes/api/auth'));
app.use('api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true,
useUnifiedTopology: true})
.then(() => console.log("MongoDB successfully connected"))
.catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

