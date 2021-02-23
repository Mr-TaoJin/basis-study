// 单字符转换
const num = 36;
const str = "哈";
const ary = str.charCodeAt().toString(num);
console.log(ary);
const result = String.fromCharCode(parseInt(ary,num));
console.log(result)


// 多字符串转换
const num2 = 16; //num可以设置为2-36进制之间
const strLong = '哈哈哈哈哈哈，大家好！';
let aryLong = '';
let result2 = '';

for (const item of strLong) {
  if (aryLong.length > 0) aryLong += '|';
  aryLong += item.charCodeAt().toString(num2);
}

console.log(aryLong); //aryLong是转化为16进制的结果 用|隔开

for (const item of aryLong.split('|')) {
  result2 += String.fromCharCode(parseInt(item, num2));
}

console.log(result2); //哈哈哈哈哈哈，大家好！