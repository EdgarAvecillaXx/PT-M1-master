"use strict";

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

return n | 0 y 1 | n-1 y n-2 |

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  n = parseInt(n);
  if (!Number.isInteger(n))
    throw "Error! nFactorial must receive an integer number";
  if (n < 0) throw "Error! Factorial for negative numbers does not exist";
  return n <= 2 ? n : n * nFactorial(n - 1);
}

// fn = fn-1 + fn-2;
/*function nFibonacci(n) {
  parseInt(n);
  if (n < 0) throw "Error!";
  if (n <= 1) return n;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
}*/

function nFibonacci(n, memo = {}) {
  parseInt(n);
  if (n < 0) throw "Error!";

  //memoization
  if (!memo[n]) {
    n <= 1
      ? (memo[n] = n)
      : (memo[n] = nFibonacci(n - 1, memo) + nFibonacci(n - 2, memo));
  }
  return memo[n];
}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  //#elements = {};
  constructor() {
    this.head = null;
    this.tail = null;
    this.len = 0;
  }

  enqueue(data) {
    const newNode = new Node(data);
    this.len === 0 ? (this.head = newNode) : (this.tail.next = newNode);
    this.tail = newNode;
    this.len++;
    //this.#elements[this.tail] = data;
    //this.tail++;
    //this.len++;
  }

  dequeue() {
    if (this.len === 0) {
      this.tail = null;
      return undefined;
    }
    //const element = this.#elements[this.head];
    //delete this.#elements[this.head];
    //this.head++;
    //this.len--;
    //return element;
    const exitNode = this.head;
    this.head = exitNode.next;
    this.len--;
    return exitNode.data;
  }

  size() {
    return this.len;
  }
}

function Queue() {
  this.arr = [];
  this.enqueue = function (data) {
    this.arr.push(data);
  };
}

Queue.prototype.dequeue = function () {
  return this.arr.shift();
};
Queue.prototype.size = function () {
  return this.arr.length;
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};
