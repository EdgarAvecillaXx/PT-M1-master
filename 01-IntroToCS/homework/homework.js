'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  const binary = [...String(num)].reverse();
  let decimal = 0;
  for (let i = 0; i < binary.length; i++) {
    decimal += binary[i] * 2 ** i;
  }
  return decimal;
}

BinarioADecimal();

function DecimalABinario(num) {
  // tu codigo aca
  return num.toString(2); 
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}