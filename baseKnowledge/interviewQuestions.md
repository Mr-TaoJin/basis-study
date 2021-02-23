1、晾衣杆上有 N 个衣架，有红黄绿蓝白黑颜色，现在要将衣架取下来，要求只能同时取相邻同色的衣架，写一个算法，要求用尽可能少的次数取下全部衣架

function solution(arr) {

}
console.log(
    solution(['红','黄','黄', '蓝', '蓝', '蓝', '白', '黑', '绿', '黑', '黑'])
);

2、用 JS 实现一个支持 Promise 的 jsonp 请求，2秒超时出 error
function request(options) {
    //todo
}

// 用法
request({src: 'test.jsonp', timeout: 2000}).then(data => {}).catch(err => {})

3、设计一个水平三栏布局的页面，要求自适应桌面/移动浏览器
<div>
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>
4、写出下面这段代码打印的结果
var result = [];
var a = 3;
var total = 0;
function foo(a) {
  var i = 0;
  for (; i < 3; i++) {
    result[i] = function() {
      total += i * a;
      console.log(total);
    }
  }
}

foo(1);
result[0]();
result[1]();
result[2]();
5、
输入: " the  sky is   blue "
输出: "blue is sky the"
说明：
无空格字符构成一个单词。
输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。

解题思路：使用双端队列解题
首先去除字符串左右空格
逐个读取字符串中的每个单词，依次放入双端队列的对头
再将队列转换成字符串输出（已空格为分隔符）