"use strict";

const millistreamRequest = require("./getMsData");

module.exports = async function getPage() {
  const msData = await millistreamRequest();
  console.log(msData);
  return { label: "DINO", msData };
};
