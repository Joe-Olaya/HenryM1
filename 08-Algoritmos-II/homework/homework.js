'use strict'
// No cambies los nombres de las funciones.

// [5, 1, 4, 2, 3,7] 8 [11,24]
// [1,2,3] 4 [5,7] - 11 [24]
// [1] 2 [3] - 5 [7]

// [5, 1, 4, 2,  8 ,11,3,24,7]
function quickSort(array) {
//   // Implementar el método conocido como quickSort para ordenar de menor a mayor
//   // el array recibido como parámetro
//   // Devolver el array ordenado resultante
//   // Tu código:
if(array.length <= 1){
  return array
}
let pivot = array[0];
let izq = [];
let der = [];
let auxArray = [];
  for (let i = 1; i < array.length; i++) {
    if(array[i] > pivot){
      der.push(array[i]);
    } else {
      izq.push(array[i]);
    } 
  }
  return auxArray.concat(quickSort(izq),pivot,quickSort(der))
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) {
    return array;
  }

  let division = middle(array);
  let left = division[0];
  let right = division[1];
  return paste(mergeSort(left), mergeSort(right));
}

function middle(array) {
  let mitad = Math.floor(array.length / 2);
  let izq = array.slice(0, mitad);
  let der = array.slice(mitad);

  return [izq, der];

}

function paste(left, right) {
  let array = []
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array.push(left[leftIndex]);
      leftIndex++;
    } else {
      array.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
