'use strict'
function BinarioADecimal(num) {
  // tu codigo aca
  var array = num.split('').reverse().join('');
  var suma = 0;
  for (let i = 0; i < array.length; i++ ){
    if (array.charAt(i) == 1){
      suma += Math.pow(2,i);
    }
  }
  return suma
 
}

function DecimalABinario(num) {
  // tu codigo aca
  var binario = '';
  while (num != 0){
    binario += (num%2).toString();
    num = Math.floor(num/2);
  }
  return binario.split('').reverse().join('');

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}