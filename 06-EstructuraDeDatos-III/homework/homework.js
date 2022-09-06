"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

class BinarySearchTree {
  //constructor de la clase;
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.counter = 1;
  }

  //Metodo size : returna #nodos
  size() {
    let size = 1;
    if (this.size === null) size === 0;
    if (this.left === null && this.right === null) size = 1;
    if (this.left === null && this.right !== null) size += this.right.size();
    if (this.left !== null && this.right === null) size += this.left.size();
    if (this.left !== null && this.right !== null)
      size += this.right.size() + this.left.size();
    return size;
  }

  //Metodo insert: agrega un nodo al arbol
  insert(value, tree = this) {
    const node = new BinarySearchTree(value);
    if (value < this.value)
      this.left ? this.left.insert(value, tree) : (this.left = node);
    if (value >= this.value)
      this.right ? this.right.insert(value, tree) : (this.right = node);
  }

  //Metodo contains: retorna true o false si existe el valor
  contains(value) {
    if (value === this.value) return true;
    if (value < this.value && this.left !== null)
      return this.left.contains(value);
    if (value >= this.value && this.right !== null)
      return this.right.contains(value);
    return false;
  }

  //Metodo depth: itera el arbol en orden DFS(post/pre/in-order), inorder por default
  depthFirstForEach(cb, value) {
    switch (value) {
      //pre-order -> Parent, left, right
      case "pre-order":
        cb(this.value);
        this.left?.depthFirstForEach(values, value);
        this.right?.depthFirstForEach(values, value);
        break;
      //post-order -> left, right, parent
      case "post-order":
        this.left?.depthFirstForEach(values, value);
        this.right?.depthFirstForEach(values, value);
        cb(this.value);
        break;
      //in-order -> left, Parent, right
      default:
        this.left?.depthFirstForEach(values, value);
        cb(this.value);
        this.right?.depthFirstForEach(values, value);
        break;
    }
  }

  //Metodo breadth: itera en orden BFS
  breadthFirstForEach(cb, tree = []) {
    if (this.left) tree.push(this.left);
    if (this.right) tree.push(this.right);
    cb(this.value);
    if (tree.length) {
      tree.shift().breadthFirstForEach(values, tree);
    }
  }
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
