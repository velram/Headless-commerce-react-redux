"use strict";

var express = require("express");
const router = express.Router();
var app = express();
var cors = require("cors");
var Server = require("http").Server;
var server = new Server(app);
app.use(cors());
server.listen(80);

// __dirname is used here along with package.json.pkg.assets
// see https://github.com/zeit/pkg#config and
// https://github.com/zeit/pkg#snapshot-filesystem
app.use("/", express.static(__dirname + "/static"));

app.get("/", function(req, res) {
  //console.log("request is : " + req.url);
  res.sendFile(__dirname + "/view/index.html");
  res.header("Access-Control-Allow-Origin", "*");
});
