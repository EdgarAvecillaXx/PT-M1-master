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
    return this.counter;
  }

  //Metodo insert: agrega un nodo al arbol
  insert(value, tree) {
    const node = new BinarySearchTree(value);
    if (!tree) tree = this;
    if (this.value === null) {
      this.root = node;
    } else if (value < this.value) {
      !this.left ? (this.left = node) : this.left.insert(value, tree);
    } else if (value >= this.value) {
      !this.right ? (this.right = node) : this.right.insert(value, tree);
    }
    this.counter++;
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
  depthFirstForEach(values, value) {
    if (value === "pre-order") {
      //pre-order -> Parent, left, right
      values(this.value);
      if (this.left) this.left.depthFirstForEach(values, value);
      if (this.right) this.right.depthFirstForEach(values, value);
    } else if (value === "post-order") {
      //post-order -> left, right, parent
      if (this.left) this.left.depthFirstForEach(values, value);
      if (this.right) this.right.depthFirstForEach(values, value);
      values(this.value);
    } else {
      //in-order -> left, Parent, right
      if (this.left) this.left.depthFirstForEach(values, value);
      values(this.value);
      if (this.right) this.right.depthFirstForEach(values, value);
    }
  }

  //Metodo breadth: itera en orden BFS
  breadthFirstForEach(values) {
    const tree = [this];
    let pointer;

    while (tree.length) {
      pointer = tree.shift();
      values(pointer.value);

      if (pointer.left) tree.push(pointer.left);
      if (pointer.right) tree.push(pointer.right);
    }
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
