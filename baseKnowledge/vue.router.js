vue-router通过hash与History interface两种方式实现前端路由，
更新视图但不重新请求页面”是前端路由原理的核心之一，
目前在浏览器环境中这一功能的实现主要有两种方式
1、hash ---- 利用URL中的hash（“#”）

2、利用History interface在 HTML5中新增的方法, 详情点击

那么，我们要选择用哪种方式呢？

mode 参数：

默认hash

history 注：如果浏览器不支持history新特性,则采用hash方式

如果不在浏览器环境则使用abstract（node环境下）

HashHistory
HashHistory真是身怀绝技，会很多东西。特别是替换路由特别厉害。还可以通过不同的方式，一个是 push ，一个是 replace 
两个方法：
HashHistory.push() 和 HashHistory.replace()

从设置路由改变到视图更新的流程：
$router.push() --> HashHistory.push() --> History.transitionTo() --> History.updateRoute() --> {app._route = route} --> vm.render()
解析：
1 $router.push() //调用方法

2 HashHistory.push() //根据hash模式调用,设置hash并添加到浏览器历史记录（添加到栈顶）（window.location.hash= XXX）

3 History.transitionTo() //监测更新，更新则调用History.updateRoute()

4 History.updateRoute() //更新路由

5 {app._route= route} //替换当前app路由

6 vm.render() //更新视图

HashHistory.replace()

replace()方法与push()方法不同之处在于，它并不是将新路由添加到浏览器访问历史的栈顶，而是替换掉当前的路由


History：
History interface是浏览器历史记录栈提供的接口，通过back(), forward(), go()等方法，
我们可以读取浏览器历史记录栈的信息，进行各种跳转操作。


stateObject: 当浏览器跳转到新的状态时，将触发popState事件，该事件将携带这个stateObject参数的副本

title: 所添加记录的标题

URL: 所添加记录的URL

1.push

与hash模式类似，只是将window.hash改为history.pushState

2.replace

与hash模式类似，只是将window.replace改为history.replaceState

3.监听地址变化

在HTML5History的构造函数中监听popState（window.onpopstate）

大菜：emmm....，一般来说，hash模式与history模式是差不多的，推荐history模式，理由竟然是："#" 符号有点丑啊...0_0 "，但是呢，但是呢，我们又不能只是看颜值是吧。

pushState设置的新URL可以是与当前URL同源的任意URL；而hash只可修改#后面的部分，故只可设置与当前同文档的URL

pushState通过stateObject可以添加任意类型的数据到记录中；而hash只可添加短字符串

pushState可额外设置title属性供后续使用

history模式则会将URL修改得就和正常请求后端的URL一样,如后端没有配置对应/user/id的路由处理，则会返回404错误

根据自己的情况选择啊！
