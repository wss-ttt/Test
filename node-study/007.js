/* 传递函数*/
function say(str) {
    console.log(str);
}

// 函数作为参数
function execute(fn, value) {
    fn(value);
};

// 调用execute函数
execute(say, '你好');
