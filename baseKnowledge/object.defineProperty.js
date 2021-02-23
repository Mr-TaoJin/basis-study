// value： 该属性的值；
// writable： 仅当值为 true 时表示该属性可以被改变；
// get： getter （读取器）；
// set： setter （设置器）；
// configurable： 仅当值为 true 时，该属性可以被删除以及属性描述符可以被改变；
// enumerable： 仅当值为 true 时，该属性可以被枚举。

// Object.defineProperty(obj, prop, descriptor)
// obj
// 要定义属性的对象。
// prop
// 要定义或修改的属性的名称或 Symbol 。
// descriptor
// 要定义或修改的属性描述符。
// 1、先定义一个对象

// 数据劫持
// 发布订阅模式

let obj = {
  name: 'jason',
  age: {
    old: 27
  }
}
console.log(obj);
// 2、定义一个监听监听函数
/**
* 判断监听的是否是对象
* 如果是对象，就遍历，并且对每个属性进行定义get 和 set
*/
function observer(obj) {
  if (typeof obj == "object") {
    // for (let key in obj) {
    //   defineReactive(obj, key, obj[key])
    // }
    Object.keys(obj).forEach(function(key) {
      defineReactive(obj, key, obj[key]);
  });
  }
}
function Dep () {
  this.subs = [];
}
Dep.prototype = {
  addSub:function(sub){
    this.subs.push(sub);
  },
  notify:function(){
    this.subs.forEach(sub=>{
      console.log(sub,'sub');
      sub.update()
    })
  }
}
function defineReactive(obj, key, value) {
  observer(value);//递归遍历所有子属性
  var dep = new Dep();
  Object.defineProperty(obj, key, {
    configurable: true,//当且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。
    enumerable:true,//当且仅当该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中。默认为 false。
    // writable: true,//当且仅当该属性的 writable 键值为 true 时，属性的值，也就是上面的 value，才能被赋值运算符改变。默认为 false。
    // value: '',//该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。

    get() {
      if (Dep.target) {//是否需要添加订阅者
        dep.addSub(Watcher); // 在这里添加一个订阅者
      }
      return value;
    },
    set(newValue) {
      console.log('属性' + key + '已经被监听了，现在值为：“' + newValue.toString() + '”');
      value = newValue;
      dep.notify(); // 如果数据变化，通知所有订阅者
    }
  })
}


function Watcher(vm, exp, cb) {
  this.cb = cb;
  this.vm = vm;
  this.exp = exp;
  this.value = this.get();  // 将自己添加到订阅器的操作
}
Watcher.prototype = {
  update: function() {
      this.run();
  },
  run: function() {
      var value = this.vm.data[this.exp];
      var oldVal = this.value;
      if (value !== oldVal) {
          this.value = value;
          this.cb.call(this.vm, value, oldVal);
      }
  },
  get: function() {
      Dep.target = this;  // 缓存自己
      var value = this.vm.data[this.exp]  // 强制执行监听器里的get函数
      Dep.target = null;  // 释放自己
      return value;
  }
};
Dep.target = null;


function SelfVue (options) {
  var self = this;
  this.vm = this;
  this.data = options;

  Object.keys(this.data).forEach(function(key) {
      self.proxyKeys(key);
  });

  observe(this.data);
  new Compile(options, this.vm);
  return this;
}

function nodeToFragment (el) {
  var fragment = document.createDocumentFragment();
  var child = el.firstChild;
  while (child) {
      // 将Dom元素移入fragment中
      fragment.appendChild(child);
      child = el.firstChild
  }
  return fragment;
}
function compileElement (el) {
  var childNodes = el.childNodes;
  var self = this;
  [].slice.call(childNodes).forEach(function(node) {
      var reg = /\{\{(.*)\}\}/;
      var text = node.textContent;

      if (self.isTextNode(node) && reg.test(text)) {  // 判断是否是符合这种形式{{}}的指令
          self.compileText(node, reg.exec(text)[1]);
      }

      if (node.childNodes && node.childNodes.length) {
          self.compileElement(node);  // 继续递归遍历子节点
      }
  });
},
function compileText (node, exp) {
  var self = this;
  var initText = this.vm[exp];
  this.updateText(node, initText);  // 将初始化的数据初始化到视图中
  new Watcher(this.vm, exp, function (value) {  // 生成订阅器并绑定更新函数
      self.updateText(node, value);
  });
},
function (node, value) {
  node.textContent = typeof value == 'undefined' ? '' : value;
}

observer(obj);
// 4.对监控的obj进行迭代处理
obj.name = "taojin"
obj.age.old = "25"
console.log(obj);



// 5. 重写数组的方法
// let arr = ['push', 'slice', 'shift', 'unshift'];
// arr.forEach((method) => {
//   let oldPush = Array.prototype[method];
//   Array.prototype[method] = function (value) {
//     console.log('115166116');
//     oldPush.call(this, value)
//   }
// })

// obj.skill = [1, 2, 3];
// obj.skill.push(4);

// 发布订阅 消息订阅器Dep