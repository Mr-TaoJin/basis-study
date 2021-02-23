// Person是一个构造函数
function Person(){

}
// prototype是函数才会有的属性
Person.prototype.name = "jason";
let person1 = new Person();
let person2 = new Person();
console.log('Person.prototype:',Person.prototype);
console.log('Person.__proto__:',Person.__proto__);
console.log(person1,person1.__proto__,Person.prototype,person1.name,person2.name1);
var obj = new Object();
obj.name = "jason"
console.log(obj.name);
console.log('Object.prototype.__proto__:',Object.prototype.__proto__) // true

// 总结
// 当访问某个实例的属性时，若实例有该属性直接返回，若没有就去
// 实例的原型对象上面找（_proto_）,原型上没有就去Object找，Object.prototype.__proto__ == null