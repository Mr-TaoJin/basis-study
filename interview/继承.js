// function Parent () {
//   this.names = ['kevin', 'daisy'];
// }
// function Child (){

// }
// Child.prototype = new Parent();
// var child1 = new Child();
// child1.names.push('jason');
// var child2 = new Child();
// console.log(child1.names,child2.names);
// 借用构造函数(经典继承)
// function Parent () {
//   this.names = ['kevin', 'daisy'];
// }
// function Child (){
//   Parent.call(this)
// }
// var child1 = new Child();
// child1.names.push('jason');
// console.log(child1.names);
// var child2 = new Child();
// console.log(child2.names);

// 组合继承
function Parent (name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function(){
  console.log(this.name);
}

function Child (name, age) {
  Parent.call(this, name);
  this.age = age;
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;
var child1 = new Child('陶锦',18);
child1.colors.push('black');
console.log(child1);
console.log(child1.getName());
console.log(child1.name);
console.log(child1.age);
console.log(child1.colors);

// 当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级(词法层面上的父级)执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做作用域链。