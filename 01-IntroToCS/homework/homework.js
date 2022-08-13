"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  let binary = [...String(num)].reverse();
  let decimal = 0;
  for (let i = 0; i < binary.length; i++) {
    decimal += parseInt(binary[i]) * Math.pow(2, i);
  }
  return decimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  let decimal = num;
  let binary = "";
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = parseInt(decimal / 2);
  }
  return binary;
  //return num.toString(2);
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
