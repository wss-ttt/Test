// 沙箱模式
(function (win, doc) {
    // 默认参数配置
    var defaultsOption = {
        speed: 20,
        count: 100
    }
    // 对象合并的方法封装
    function extend() {
        // 被混入的目标
        var target = null;

        // 当传入一个参数
        if (arguments.length === 1) {
            // 此时被混入的目标为this
            target = this;
            for (var key in arguments[0]) {
                target[key] = arguments[0][key];
            }
        }
        // 传入多个参数,把后面对象的内容混入到第一个对象中去 
        else if (arguments.length >= 2) {
            // 此时被 混入的目标是 arguments[0]
            target = arguments[0];
            // 遍历参数中(除了第一个参数)后面所有的对象
            // 所以我们的循环从1开始遍历
            for (var i = 1, len = arguments.length; i < len; i++) {
                // 遍历每个对象的所有属性
                for (var key in arguments[i]) {
                    target[key] = arguments[i][key];
                }
            }
        }
        // 给谁混入就返回谁
        return target;
    }
    function NumberScroll(options) {
        var self = this;
        if (!options) {
            throw new Error("请传入配置参数");
        }
        self = extend(self, defaultsOption, options);
        // ie567 不支持querySelector方法和querySelectorAll方法
        /* self.ele = doc.querySelector(self.ele) || doc.querySelectorAll(self.ele); */
        self.ele = doc.getElementById(self.ele.slice(1));
        self.scroll();
    }

    NumberScroll.prototype = {
        scroll: function () {
            var opts = this;
            var count = opts["count"],
                ele = opts.ele,
                startNumber = ~~ele.innerText || 0,
                speed = opts["speed"],// 间隔时间
                timer = null;
            // 滚动增加
            if (startNumber < count) {
                timer = setInterval(function () {
                    if (startNumber < count) {
                        ele.innerText = (++startNumber);
                    } else {
                        clearInterval(timer);
                    }

                }, speed);
            }
            // 滚动减少
            else {
                timer = setInterval(function () {
                    if (startNumber > count) {
                        ele.innerText = (--startNumber);
                    } else {
                        clearInterval(timer);
                    }

                }, speed);
            }

        }
    }
    // 暴露接口
    win.NumberScroll = NumberScroll;
})(window, document)