'use strict'
function BinarioADecimal(num) {
  // tu codigo aca
  let nuevoNum = num.toString().split('').reverse().join('');
  let suma = 0;
  for (let i = 0; i < nuevoNum.length; i++ ){
    if (nuevoNum.charAt(i) == 1){
      suma += Math.pow(2,i);
    }
  }
  return suma
}

function DecimalABinario(num) {
  // tu codigo aca
  let binario = '';
  while (num > 0){
    binario += (num%2).toString();
    num = Math.floor(num/2);
  }
  return binario.split('').reverse().join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}