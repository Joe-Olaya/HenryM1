'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
let array = [1];
let cuenta = num;
let primo = 2;
  while (cuenta > 1) {
    if(cuenta%primo===0){
    array.push(primo);
    cuenta /= primo;
    } else {
    primo ++
    }
  }
  return array
}


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //let bandera = true;
  //let guardar = 0;
  //   while(bandera) {
  //     bandera = false
  //     for(let i = 0; i < array.length; i++){
  //     if(array[i] > array[i+1]){
  //       guardar = array[i];
  //       array[i] = array[i+1];
  //       array[i+1] = guardar;
  //       bandera = true
  //     }
  //   } 
  // }
  // return array
  
  for (let j = 0; j < array.length; j++){
    for(let i = 0; i < array.length; i++){
      if(array[i] > array[i+1]){
        let guardar = array[i];
        array[i] = array[i+1];
        array[i+1] = guardar;
      }
    }
  }
  return array
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    let prev = i-1
    let temp = array[i]
      while(prev >= 0 && temp < array[prev]){
        array[prev+1] = array[prev]
        prev--
      }
    array[prev+1] = temp
  }
  return array


}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {//asumno que el num mas chico esta en el i
    let min = i;
    for (let j = i+1; j < array.length; j++) {//reocrre el array buscando el numero mas chico
      if(array[min] > array[j]){//actualizamos el index numero mas chico
        min = j
      }
    }
    if(i !== min){//intercambiamos valores entre el numero mas chico y el "primer" valor
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp
    }
  }
  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
