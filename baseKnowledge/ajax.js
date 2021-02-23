function ajax(options) {
  options = options || {};//调用函数如果options没有指定，就给他赋值{}，一个空的object
  options.type = (options.type || "GET").toUpperCase();//请求格式get post,默认为get
  options.dataType = options.dataType || 'json'; //响应数据格式，默认为json
  options.timeout = options.timeout || '1600';//请求有效时间
  options.contentType = options.contentType || "application/x-www-form-urlencoded";//请求有效时间
  var params = formatData(options.data);//options.data 请求数据
  var xhr;
  //考虑兼容性
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {//兼容ie6以下的版本
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  console.log(params);
  console.log(options);
  //启动并发送一个请求
  if (options.type == "GET") {
    xhr.open("GET", options.url + "?" + params, true);
    xhr.send(null);
  } else if (options.type == "POST") {
    xhr.open("POST", options.url, true);
    //设置表单提交时的内容类型
    //Content-type数据请求的格式
    xhr.setRequestHeader("Content-type", options.contentType);
    xhr.send(JSON.stringify(options.data));
  }
  // 设置有效时间
  setTimeout(() => {
    if (xhr.readyState != 4) {
      xhr.abort();
    }
  }, options.timeout);
  //接收
  //options.success成功之后的回调函数  options.error失败后的回调函数
  //xhr.responseText,xhr.responseXML  获得字符串形式的响应数据或者XML形式的响应数据
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      var status = xhr.status;
      if (status >= 200 && status < 300 || status == 304) {
        options.success && options.success(xhr.responseText, xhr.responseXML);
      } else {
        options.error && options.error(status)
      }
    }
  }
}
//格式化请求参数
function formatData(data) {
  var arr = [];
  for (var name in data) {
    arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
  }
  arr.push(("v=" + Math.random()).replace(".", ""));
  return arr.join("&")
}
//使用实例
// ajax({
//   url: "http://wxt1.leye.ccb.com:8002/phjr/bds/publicrs/param/all",
//   type: 'get',
//   dataType: 'json',
//   data: {},
//   timeout: 10000,
//   contentType: "application/json",
//   success(data) {
//     console.log(data);
//   },
//   error(err) {
//     console.log(err);
//   }
// });
ajax({
  url: "http://wxt1.leye.ccb.com:8002/phjr/nws/publicrs/advertisement/list",
  type: 'post',
  dataType: 'json',
  data: {
    pageData: {
      page: 0,
      pageSize: 10
    }
  },
  timeout: 10000,
  contentType: "application/json",
  success(data) {
    console.log(data);
  },
  error(err) {
    console.log(err);
  }
});