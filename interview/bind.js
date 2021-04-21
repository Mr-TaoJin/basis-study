// bind() 方法会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。(来自于 MDN )


// bind 函数的两个特点：

// 返回一个函数
// 可以传入参数


// call apply
// 它们的共同点是，都能够改变函数执行时的上下文，将一个对象的方法交给另一个对象来执行，并且是立即执行的。
// 调用 call 和 apply 的对象，必须是一个函数 Function
// 第一个参数，是一个对象。
// call 第二个参数开始，可以接收任意个参数。
// apply 第二个参数，必须是数组或者类数组，

// 什么是类数组？
// 先说数组，这我们都熟悉。它的特征有：可以通过角标调用，如 array[0]；具有长度属性length；可以通过 for 循环或forEach方法，进行遍历。

Function.prototype.bind2 = function (context) {

  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }

  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  var fNOP = function () { };

  var fBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
  }

  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
}

var foo = {
  value: 10
}
function bar() {
  console.log(arguments);
  console.log(this.value);
}
var barFun = bar.bind2(foo);
barFun();
console.log(barFun);


var obj = { a: 10 }
function func(a, b, c) {
  console.log(a+b+c);
}
// func.call(obj, 1, 2, 3)
func.apply(obj,[1,2,3])

