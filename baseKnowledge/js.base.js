1、display常用属性：
display 属性规定元素应该生成的框的类型。
none 此元素不会被显示。
block 此元素将显示为块级元素，此元素前后会带有换行符。
inline 默认。此元素会被显示为内联元素，元素前后没有换行符。
inline - block 行内块元素。（CSS2.1 新增的值）
2、position常用属性：
position属性指定一个元素（静态的，相对的，绝对或固定）的定位方法的类型。
absolute 生成绝对定位的元素，相对于static定位以外的第一个父元素进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
fixed 生成固定定位的元素，相对于浏览器窗口进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
relative 生成相对定位的元素，相对于其正常位置进行定位。因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。
static 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z - index 声明）。
3、margin与padding的区别
margin：（外边距）是指从自身边框到另一个容器边框之间的距离，就是容器外距离。
padding：（内边距）是指自身边框到自身内部另一个容器边框之间的距离，就是容器内距离。
margin值可以为负值 / padding值不能为负值
4、1rpx等于多少px ? 多少物理像素？
设备rpx换算px：屏幕宽度 / 750，px换算成rpx: 750 / 屏幕宽度；
6、上下左右垂直居中
flex 方式
.farther{
  height: 200px;
  width: 200px;
  border:1px solid #000;
  // flex
  display: flex;
  justify-content: center;
  align-items: center;
  .child{
      width: 30px;
      height: 30px;
      // align-self: center;
      background: #000;
  }
}
父级设置 position: relative;
子div 设置position: absolute;，并且，top和left都便宜50%；但是会包含子集的高，于是再继续使用transform: translate(-50%,-50%);
translate(-50%,-50%):往上（x轴）,左（y轴）移动自身长宽的 50%
上下左右为0，margin:auto

table-cell + inline-block
父级设置display:table-cell，并且垂直、水平居中
子div设置inline-block实现居中
.farther{
  height: 200px;
  width: 200px;
  border:1px solid #000;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  .child{
      width: 30px;
      height: 30px;
      background: #000;
  }
}

7、GET 与 POST 的区别
GET和POST本质上就是TCP链接，并无差别。但是由于HTTP的规定和浏览器 / 服务器的限制，导致他们在应用过程中体现出一些不同。重大差异
对于GET方式的请求，浏览器会把http，header和data一并发送出去，服务器响应200（返回数据）
而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据）。
8、跨域问题
9、闭包
闭包是什么：
闭包就是一个函数
是一个函数体内可访问的变量组合

闭包的作用：
闭包最大的作用就是私有化变量
避免变量污染
闭包的一大特性就是内部函数总是可以访问其所在的外部函数中声明的参数和变量，即使在其外部函数被返回（return ）了之后。

10、前端存储 cookie || sessionStorage || localStorage

11、普通函数function(){ } 与()=> { } 箭头函数的差异

更简洁的语法
没有this
不能使用new 构造函数
不绑定arguments，用rest参数...解决
使用call()和apply()调用
捕获其所在上下文的 this 值，作为自己的 this 值
箭头函数没有原型属性
不能简单返回对象字面量
箭头函数不能当做Generator函数, 不能使用yield关键字
箭头函数不能换行
总结：
箭头函数的 this 永远指向其上下文的 this ，任何方法都改变不了其指向，如 call(), bind(), apply()
普通函数的this指向调用它的那个对象

12、var const let区别

一般问这个问题的人主要想考察一下你对ES6的熟悉程度；推荐看下我之前的文章讲ES6的新特性：【你不知道的ES6新特性】https://juejin.im/post/5dfa4363f265da33dd2f5d6f
const 在声明时必须被赋值
let 和 const 声明只在最靠近的一个块中（花括号内）有效
变量提升：
let const var三者都会进行变量提升

13、call && apply && bind改变this指向
call 方法可以指定this 的指向（即函数执行时所在的的作用域），然后再指定的作用域中，执行函数

call 方法的参数，应该是对象obj, 如果参数为空或null, undefind, 则默认传参全局对象
apply 和call 作用类似，也是改变this 指向，然后调用该函数，唯一区别是apply 接收数组作为函数执行时的参数
bind 用于将函数体内的this绑定到某个对象，然后返回一个新函数

14、前后端如何保持长连接？--- WEBSOCKET
1. pc端的应用，一般会采用前端定时请求后台;

2. app定时去访问后台的话，对用户来说并不友好，会消耗大量的流量，移动端最好的方式就是后台主动向app推送信息;

3. H5提供了一种比较好的方式是websocket，打开app后，向后台发出请求，后台响应后，就可以实时向前端推送信息了，而无需app再次去访问；

15、webpack优化
Webpack的配置主要为了这几大项目：

entry：js入口源文件
output：生成文件
module：进行字符串的处理
resolve：文件路径的指向
plugins：插件，比loader更强大，能使用更多webpack的api

常用Loaders介绍
处理样式，转成css，如：less - loader, sass - loader
图片处理，如: url - loader, file - loader。两个都必须用上。否则超过大小限制的图片无法生成到目标文件夹中
处理js，将es6或更高级的代码转成es5的代码。如：
babel - loader，babel - preset - es2015，babel - preset - react
将js模块暴露到全局，如果expose - loader

常用Plugins介绍
代码热替换, HotModuleReplacementPlugin
生成html文件，HtmlWebpackPlugin
将css成生文件，而非内联，ExtractTextPlugin
报错但不退出webpack进程，NoErrorsPlugin
代码丑化，UglifyJsPlugin，开发过程中不建议打开
多个 html共用一个js文件(chunk) ，可用CommonsChunkPlugin
清理文件夹，Clean
调用模块的别名ProvidePlugin，例如想在js中用$，如果通过webpack加载，需要将$与jQuery对应起

使用优化
了解了以上介绍的Loaders和Plugins之后，基本就可以搭建一整套基于Webpack的构建（不需要gulp与grunt，合图除外）。下面让我来介绍一下在使用过程中的一些优化点。

优化点一.如何区分开发及生产环境
在package.json里面的script设置环境变量，注意mac与windows的设置方式不一样
"scripts": {
  "publish-mac": "export NODE_ENV=prod&&webpack -p --progress --colors",
    "publish-win": "set NODE_ENV=prod&&webpack -p --progress --colors"
}
在webpack.config.js使用process.env.NODE_ENV进行判断

优化点二.使用代码热替换
使用代码热替换在开发的时候无需刷新页面即可看到更新，而且，它将构建的内容放入内在中，能够获得更快的构建编译性能，因此是官方非常推荐的一种构建方式。

方法三：
直接在webpack.config.js上配置。这个办法最简单，当然灵活性没有自己实现一个服务器好。

优化点四.将模块暴露到全局

优化点五.合并公共代码

优化点六.善用alias。

优化点七.alias的索引路径。
要注意的是多加索引路径可能会导致性能下降，所以除非项目复杂，否则慎用这个功能。

优化点八.多个html怎么办
使用HtmlWebpackPlugin，有多少个html，就排列多少个，记得不要用inject，否则全部js都会注入到html。如果真的要用inject模式，请务必将不需要的js用exclude chunk去掉或者用chunk参数填上你需要入口文件

优化点九.html - webpack - plugin不用使inject模式没又md5，而且不支持文件内联怎么破？

优化点十.用gulp - webpack速度慢乍办

优化点十一.如果在通过webpack在项目中使用bootstrap, jquery以及fontawesome

16、你觉得typescript和javascript有什么区别
JavaScript
JavaScript是一种基于客户端浏览器的，基于对象、事件驱动式的脚本语言。稍提一下，JavaScript和Java没有任何关系，两者相当于雷峰塔和雷锋的关系。
TypeScript
TypeScript是JavaScript类型的超类，它可以编译成纯JavaScript。TypeScript可以在任何浏览器、任何计算机和任何操作系统上运行，并且是开源的。
1、JavaScript和TypeScript的主要差异
TypeScript可以使用JavaScript中的所有代码和编程概念，TypeScript是为了使JavaScript的开发变得更加容易而创建的。
TypeScript从核心语言方面和类概念方面的模塑方面对JavaScript对象模型进行扩展。
JavaScript代码可以在无需任何修改的情况下与TypeScript一同工作，同时可以使用编译器将TypeScript代码转换为JavaScript。
TypeScript通过类型注解提供编译时的静态类型检查。
TypeScript中的数据要求带有明确的类型，JavaScript不要求。
TypeScript提供了缺省参数值。
TypeScript引入了JavaScript中没有的“类”概念。
TypeScript中引入模块的概念，可以把声明、数据、函数和类封装在模块中。
#TypeScript的优势
静态类型化，允许开发人员编写更健壮的代码并对其进行维护。
大型的开发项目，使用TypeScript工具来进行重构更容易、便捷。
类型安全，在编码期间检测错误的功能，而不是在编译项目时检测错误。
干净的ECMAScript6代码，自动完成和动态输入等因素有助于提高开发人员的工作效率。
#JavaScript的优势
JavaScript的开发者社区仍然巨大而活跃，在社区可以很容易找到大量成熟的开发项目和可用资源。
JavaScript语言发展较早，也较为成熟。
TypeScript代码需要被编译（成JavaScript）
不需要注释
JavaScript的灵活性更高

TypeScript 有哪些类型
1，布尔值
2.数字(在typescript里所有数字都是浮点型，除了支持十进制和十六进制字面量，TypeScript还支持ECMAScript 2015中引入的二进制和八进制字面量)
3，字符串
4,数组
5，元组（Tuple）
6枚举（enum）
7,Any
8，void
9,null和undefined
10，never
①never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。

②never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
11，object

18、Vue.js 之类的框架为什么需要给组件添加 key 属性，其作用是什么？
vue和react都是采用diff算法来对比新旧虚拟节点，从而更新节点
那么在vue的diff函数中在交叉对比中，当新节点跟旧节点 头尾交叉对比 没有结果时，会根据新节点的key去对比旧节点数组中key，从而找到相对应的节点。
如果没有找到就认为是一个新增节点。而如果没有key，那么就会采用遍历方式去查找对应的旧节点。
在没有绑定key的情况下，并且在遍历模板简单的情况下，会导致虚拟新旧节点对比更快，节点也会复用，而这种复用就是 “”就地复用“”
作用：
1.在有key的情况下更加的准确性。因为带有key就不是 “”就地复用“”了，在一些函数，比如samNode函数对比中就可以避免 就地复用的情况，所以会快些
2.更快，利用key的唯一性生成map对象来获取相对应的节点，比遍历方式更快
19、如何判断当前脚本是运行在浏览器还是node环境中？
判断global对象是否为window,
为window在浏览器中运行
不为window在node环境中运行
20、Sourcemap 是什么？有什么作用？生产环境中应该怎么用？
（1）什么是Sourcemap?

我们在打包中，将开发环境中源代码经过压缩，去空格，babel编译转化，最终可以得到适用于生产环境的项目代码，这样处理后的项目代码和源代码之间差异性很大，会造成无法debug的问题。

举例来说，如果压缩等处理过的生产环境中的代码出现bug，调试的时候只能定位到压缩处理后的代码的位置，无法定位到开发环境中的源代码。

sourcemap就是为了解决上述代码定位的问题，简单理解，就是构建了处理前的代码和处理后的代码之间的桥梁。主要是方便开发人员的错误定位。这里的处理操作包括：

I）压缩，减小体积

II）将多个文件合并成同一个文件

III）其他语言编译成javascript，比如TypeScript和CoffeeScript等

22、webpack热更新原理
Webpack编译期，为需要热更新的 entry 注入热更新代码(EventSource通信)
页面首次打开后，服务端与客户端通过 EventSource 建立通信渠道，把下一次的 hash 返回前端
客户端获取到hash，这个hash将作为下一次请求服务端 hot-update.js 和 hot-update.json的hash
修改页面代码后，Webpack 监听到文件修改后，开始编译，编译完成后，发送 build 消息给客户端
客户端获取到hash，成功后客户端构造hot-update.js script链接，然后插入主文档
hot-update.js 插入成功后，执行hotAPI 的 createRecord 和 reload方法，获取到 Vue 组件的 render方法，重新 render 组件， 继而实现 UI 无刷新更新。

23、简要描述一下什么是消息队列，宏任务和微任务分别又是怎么回事
消息队列：js为单线程脚本语言，执行任务时需要排队，每当有新的任务来临时就加到这个队列后面。这个队列就叫消息队列或者任务队列。
宏任务是消息队列里的任务，常见的接口请求、定时器等异步任务都是宏任务。
微任务是基于当前任务产生而随当前任务结束后立即执行的任务，所以也是异步任务， 但是不需要通过EventLoop监测，通过消息队列取出并压入执行栈中再执行； 像通过Promise、MutationObserver、process.nextTick产生的任务都为微任务。
