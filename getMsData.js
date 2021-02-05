const millistream = require("./millistream.json");
const fetch = require("node-fetch");

module.exports = async function millistreamRequest() {
  const url = millistream.msUrlDelayed;
  const user = millistream.msUserDelayed;
  const secret = millistream.msSecret;

  const request = `${url}?usr=${user}&pwd=${secret}&cmd=quote&filetype=json&insref=32380&fields=description%2Ccompany%2Cshortdescription%2Cceo%2Cchairman%2Cwebsite%2Caddress%2Ccity%2Corgnum&timezone=Europe%2FStockholm`;

  const msData = await fetch(request);

  return msData.json();
};
