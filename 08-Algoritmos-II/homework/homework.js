'use strict'
// No cambies los nombres de las funciones.
function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  const pivotIndex = Math.floor(Math.random() * (array.length - 1));
  const pivot = array[pivotIndex];
  const [arrayL, arrayR] = array.reduce(
    (arrays, value, i) => {
      if (value < pivot || (value === pivot && i !== pivotIndex)) {
        arrays[0].push(value);
      } else if (value > pivot) {
        arrays[1].push(value);
      }
      return arrays;
    },
    [[], []]
  );
  return (array = [...quickSort(arrayL), pivot, ...quickSort(arrayR)]);
  // Else the element can only be present
  // in right subarray
}

//Fnuncion Merge para MergeSort
const merge = (arrayL, arrayR, array = []) => {
  if (arrayL.length && arrayR.length) {
    array.push(arrayL[0] < arrayR[0] ? arrayL.shift() : arrayR.shift());
    return merge(arrayL, arrayR, array);
  }
  return array.concat(arrayL.splice(0).concat(arrayR.splice(0)));
};

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length < 2) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  const arrayL = mergeSort(array.splice(0, mid));
  const arrayR = mergeSort(array.splice(0, array.length));
  return merge(arrayL, arrayR);
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};