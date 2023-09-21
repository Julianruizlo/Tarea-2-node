const express = require("express");
const ProductRoute = require("./Routes/Routes");
const app = express();

app.use(express.json());
app.use(ProductRoute);

module.exports = app;