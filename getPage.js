"use strict";

const millistreamRequest = require("./getMsData");

module.exports = async function getPage() {
  const msData = await millistreamRequest();

  return { label: "DINO", msData };
};
