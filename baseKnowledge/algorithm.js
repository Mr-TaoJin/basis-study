// var array = [9, 6, 8, 5, 2, 6, 1, 3, 5, 4, 8, 7, 4, 3, 6, 1]
// // 去重
// var arr = [...new Set(array)];
// // function funNum(a,b){
// //   return b-a;
// // }
// // var arr = array.sort(funNum);
// // 冒泡排序
// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr.length - 1 - i; j++)
//     if (arr[j] > arr[j + 1]) {
//       var mid = arr[j + 1];
//       arr[j+1] = arr[j];
//       arr[j] = mid;
//     }
// }
// console.log(arr);


// var arr = [[1,30], [12,61],[150,180],[80,180],[110,191],[77,8000]]
// function merge(arr){
//   //排序
//   arr.sort(function(a,b){
//     if(a[0] != b[0]){
//       return a[0] - b[0];
//     }
//     return a[1] -b[1];
//   })
//   let ans = [],start,end;
//   //排序之后，看看有没有重叠的，如果有，合并
//   for(let i=0;i<arr.length;i++){
//     let s = arr[i][0],e = arr[i][1];
//     if(start == undefined){
//       start = s;
//       end = e;
//     }else if(s<=end){
//       end = Math.max(e,end)
//     }else{
//       let part = [start,end];
//       ans.push(part);
//       start = s;
//       end = e;
//     }

//   }
//   if(start != undefined){
//       let part = [start,end]
//       ans.push(part);
//   }
//   return ans;
// }
// console.log(merge(arr));

// var arr1 = [4, 9, 9, 5, 8, 8], arr2 = [9, 4, 9, 8, 4];
// function intersection(arr1, arr2) {
//   var arr = [];
//   arr1.filter(item => {
//     console.log(arr2.includes(item));
//     if (arr2.includes(item)) {
//       arr.push(item);
//     }
//   })
//   return [...new Set(arr)].sort();
// }
// console.log(intersection(arr1, arr2));

// 二叉树前序遍历
// 递归实现
var RootNode = function(data){
  this.data = data;
  this.left = null;
  this.right = null;
  this.show = function(){
    return this.data;
  }
}
var arr = new RootNode([1,null,2,3]);
function traversal(root){
  console.log(root);
  let result =[];
  function traversalRoot(node){
    console.log(node);
    if(node){
      //先根节点
      result.push(node.data);
      //然后遍历左子树
      traversalRoot(node.left);
      //然后遍历右子树
      traversalRoot(node.right);
    }
  }
  traversalRoot(root);
  return result;
}
console.log(traversal(arr));