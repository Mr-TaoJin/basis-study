function sayWord() {
  var talk = [this.name, 'say', this.word].join(':');
  console.log(talk,'this:'+this);
}
var jason = {
  name: "jason",
  word: "I'm JASON"
}
// sayWord.call(jason);
Function.prototype.myCall = function (context) {

  // 将函数设为对象的属性
  // 注意：非严格模式下, 
  //   指定为 null 和 undefined 的 this 值会自动指向全局对象(浏览器中就是 window 对象)
  //   值为原始值(数字，字符串，布尔值)的 this 会指向该原始值的自动包装对象(用 Object() 转换）
  context = context ? Object(context) : window;
  console.log(this, 'this');
  context.fn = this;
  let args = [...arguments].slice(1);
  let result = context.fn(...args);
  console.log(context, 'context');
  console.log(arguments, 'arguments');
  console.log([...arguments], '[...arguments]');
  console.log(args, 'args');
  console.log(result, 'result');
  delete context.fn;
  // 注意：函数是可以有返回值的
  return result;
}
sayWord.myCall('jason');

Function.prototype.myApply = function (context, arr) {
  context = context ? Object(context) : window;
  context.fn = this;

  let result;
  if (!arr) {
    result = context.fn();
  } else {
    result = context.fn(...arr);
  }

  delete context.fn
  return result;
}