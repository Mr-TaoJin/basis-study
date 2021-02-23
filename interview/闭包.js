// 闭包共有两部分组成：
// 闭包 = 函数 + 函数能够访问的自由变量

// 必刷题
var data = [];
for (var i = 0; i < 3; i++) {
  data[i] = function () {
    console.log(i);
  };
}
data[0]();
data[1]();
data[2]();
// 当执行到 data[0] 函数之前，此时全局上下文的 VO 为：
/**
 * VO：执行环境(环境)
 * */
// globalContext = {
//   VO: {
//       data: [...],
//       i: 3
//   }
// }

var data = [];
for (var i = 0; i < 3; i++) {
  data[i] = (function (i) {
        return function(){
            console.log(i);
        }
  })(i);
}
data[0]();
data[1]();
data[2]();