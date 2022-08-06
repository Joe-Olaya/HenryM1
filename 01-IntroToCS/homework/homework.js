'use strict'
function BinarioADecimal(num) {
  // tu codigo aca
  let nuevoNum = num.toString().split('').reverse().join('');//esto para dar vuelta el binario
  let suma = 0;//resultado de las sumas
  for (let i = 0; i < nuevoNum.length; i++ ){//for para recorrer
    if (nuevoNum.charAt(i) == 1){//con esto salto los 0 porque no los necesito
      suma += Math.pow(2,i);//elevo 2 por el indice donde haya 1
    }
  }
  return suma//devuelvo el binario terminado
}

function DecimalABinario(num) {
  // tu codigo aca
  let binario = ''; // declaro variable como un string vacio para guardar cada numero del while
  while (num > 0){//abro el loop
    binario += (num%2).toString();// saco el resto y lo transformo en string para que se concatenen y no se sumen
    num = Math.floor(num/2);//hago la division de num para seguir operando el loop y no sea infinito
  }
  return binario.split('').reverse().join(''); //basicamente doy vuelta el numero que tengo en "binario"
}




module.exports = {
  BinarioADecimal,
  DecimalABinario,
}