"use strict";
exports.__esModule = true;
var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.listen(3000);
