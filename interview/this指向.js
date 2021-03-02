var foo = {
  bar: function(){
    return this;
  }
}
console.log(foo.bar());

function testThis(){
  console.log(this);
  return this;
}
var aFun = testThis();
console.log(aFun);