function execute(fn, value) {
    fn(value);
};

// 传递匿名函数
execute(function (str) {
    console.log(str);
}, '你好')
