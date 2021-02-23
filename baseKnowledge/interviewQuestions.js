// 第四题解答
function reverseCharacter(str){
  let value = str.trim();
  let arr = value.split(" ");
  let copy = [];
  arr.forEach((item,index) => {
    if(item){
      copy.push(item);
    }
  });
 
  copy.reverse();
  return copy.join(" ");
}
let str = " the  sky is         blue ";
console.log(str);
console.log(reverseCharacter(str));