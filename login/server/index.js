require('dotenv').config();
const express = require('express');
const app = express();
const connection = require("./db")

// middleware
app.use(express.json())
app.use(cors());


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listing on port ${port}...`))