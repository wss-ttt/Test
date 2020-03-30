var events = require('events');
var EventEmitter = events.EventEmitter; 
var myEvent = new EventEmitter(); 
// 添加事件监听器(可以理解为添加了自定义事件)
myEvent.on('some_event',function(){
   console.log('好好学习 天天向上aaa'); 
});
setTimeout(function(){
    // 触发自定义事件
    myEvent.emit('some_event');
},1000);