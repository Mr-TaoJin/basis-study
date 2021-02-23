console.log("------------------prototype start------------------------");
// 1、构造函数 原型 和实例之间的关系---------------------------------------------
var obj = new Object();
// 对象是由原型对象的，原型对象也有原型对象
// obj._proto_._proto_._proto_
// 原型对象也有原型对象，对象的原型对象一直往上找，会找到一个null

var arr = [];
// arr -> Array.prototype ->Object.prototype -> null
var o = {};
// o -> Object.prototype -> null;

function Foo1() {
  this.name1 = 1;
}
function Foo2() {
  this.name1 = 2;
}
function Foo3() {
  this.name1 = 3;
}
Foo2.prototype = new Foo1();
Foo3.prototype = new Foo2();
var Foo = new Foo3();
// console.log(Foo);
// 继承
function Animal(name) {
  this.name = name;
}
function Tiger(color) {
  this.color = color;
}
// 原型继承
// Tiger.prototype = new Animal("老虎")
let tiger = new Tiger("yellow");
Object.prototype.name = "大老虎"
// console.log(tiger.name);

// js面向对象
// 工厂模式
// function Person(name, age) {
//   let obj = {};
//   obj.name = name;
//   obj.age = age;
//   obj.say = function () {
//     console.log('hello:' + this.name)
//   }
//   return obj;
// }
// var p1 = Person("陶锦","26");
// console.log(p1.name);
// console.log(p1.age);
// p1.say();
// 构造函数模式
function Person(name, age) {
  this.name = name;
  this.age = age;
  // this.say = function () {
  //   console.log('hello:' + this.name)
  // }
}
Person.prototype.say = function(){
  console.log('Hi:' + this.name)
}
var p2 = new Person('taojin', 'twenty-six');
console.log(p2.name);
console.log(p2.age);
p2.say();
console.log("------------------prototype end------------------------");