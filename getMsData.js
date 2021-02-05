const millistream = require("./millistream.json");
const fetch = require("node-fetch");

module.exports = async function millistreamRequest() {
  const url = millistream.msUrlDelayed;
  const user = millistream.msUserDelayed;
  const secret = millistream.msSecret;

  const request = `${url}?usr=${user}&pwd=${secret}&cmd=quote&filetype=json&instrumenttype=4&list=35206&limit=10&orderby=diff1dprc&order=asc&fields=insref%2Cname%2Csymbol%2Clastprice%2Cdiff1dprc%2Cdate%2Ctime&timezone=Europe%2FStockholm`;

  const msData = await fetch(request);

  return msData.json();
};

//cmd=quote&filetype=json&instrumenttype=4&list=35206&limit=10&orderby=diff1dprc&order=desc&fields=insref%2Cname%2Csymbol%2Clastprice%2Cdiff1dprc%2Cdate%2Ctime&timezone=Europe%2FStockholm
