'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var suma = 0;
  var array = Array.from(num);
  for (i = array.length; i >= 0; i-- ){
    if (array[i] === 1){
      suma += Math.pow(2,i);
    }
  }
  return suma
}

function DecimalABinario(num) {
  // tu codigo aca
  

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}