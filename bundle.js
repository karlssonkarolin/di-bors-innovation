'use strict';

require("marko/node-require"); // Allow Node.js to require and load `.marko` files

const express = require("express");
const template = require("./template.marko");
const getPage = require("./getPage");

const app = express();

app.get("/", (req, res) => {
  const pageData = getPage();
  res.send(template.renderToString(pageData));
});

app.listen(8080);
