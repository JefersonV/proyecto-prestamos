const data = require("./helperApp");
let info = [];

for (let i = 0; i < data.length; i++) {
  info.push([]);
  info[i].push(data[i].mes);
  info[i].push(data[i].intereses);
  info[i].push(data[i].amortizacion);
  info[i].push(data[i].total);
  info[i].push(data[i].saldo);
}

module.exports = info;
