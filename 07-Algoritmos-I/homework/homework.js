'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  // num % factor === 0 lo repetimos, anotamos el factor;
  // factor++;
  // factor % factor === 0, no puede ser divisible entre otro numero
  // medir tiempo;
  //calculo complejidad

  const factores = [1];
  let factor = 2;
  while (num > 1) {
    if (!(num % factor)) {
      factores.push(factor);
      num /= factor;
    } else {
      factor++;
    }
  }
  return factores;
  /*
  if (num > 0) {
    if (!(num % factor)) {
      factores.push(factor);
      factorear(num / factor, factor);
    } else {
      factor++;
      factorear(num, factor);
    }
  }
  return factores;
  */
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let swap = true;
  let sorted = 0;
  while (swap) {
    swap = false;
    for (let i = 0; i < array.length - sorted; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swap = true;
      }
    }
    sorted++;
  }

  return array;
}

function insertionSort(array) {
  //[1,5,6,10,15,20,45] 5 2     val = 1
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    const value = array[i];
    let x = i - 1;
    while (x >= 0 && value < array[x]) {
      array[x + 1] = array[x];
      x--;
    }
    array[x + 1] = value;
  }

  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let x = i + 1; j < array.length; x++) {
      if (array[min] > array[x]) min = x;
    }

    if (min !== i) [array[i], array[min]] = [array[min], array[i]];
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
