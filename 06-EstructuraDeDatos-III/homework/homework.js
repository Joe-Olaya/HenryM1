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

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function(){
  if(!this.left && !this.right){
    return 1;
  } else {
    if (this.left && !this.right){
      return this.left.size() + 1;
    } else if (!this.left && this.right) {
      return this.right.size() + 1;
    } else {
      return this.left.size() + this.right.size() + 1;
    }
  }
}

BinarySearchTree.prototype.insert = function(num){
 if(this.value > num){
  if(this.left == null){
    this.left = new BinarySearchTree(num)
  }
  else{
    this.left.insert(num);
  }
 }else{
  if(this.right == null){
    this.right = new BinarySearchTree(num)
  }
  else{
    this.right.insert(num);
 }
}
};

BinarySearchTree.prototype.contains = function(num){
  if(this.value === num){
    return true
  } 
  if (this.value > num){
    if(this.left === null){
      return false
    }else{
      return this.left.contains(num);
    }
  }
  if (this.value < num){
    if(this.right === null){
      return false
    }else{
      return this.right.contains(num);
    }
  }
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
 if(order == "post-order"){
  //  izq -> der -> root
  if(this.left !== null) this.left.depthFirstForEach(cb, order);
  if(this.right !== null) this.right.depthFirstForEach(cb, order);
  cb(this.value);
 }
 else if (order = "pre-order") {
  // root-> izq -> der
  cb(this.value);
  if(this.left !== null) this.left.depthFirstForEach(cb, order);
  if(this.right !== null) this.right.depthFirstForEach(cb, order);
 }
 else{
   //  izq -> root -> der
   if(this.left !== null) this.left.depthFirstForEach(cb, order);
   cb(this.value);
   if(this.right !== null) this.right.depthFirstForEach(cb, order);
 }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, queue = []){
 // guarda lo que hay en la izq
  if (this.left !== null){
  queue.push(this.left)
 }
 // guarda lo que hay en la der
 if (this.right !== null){
  queue.push(this.right)
 }
 //ejecutar root(raiz)
 cb(this.value)
 //revisa si hay elementos en la cola
 if(queue.length > 0){
  queue.shift().breadthFirstForEach(cb, queue)
 }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
