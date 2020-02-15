// 使用沙箱模式
(function (window) {
    function Tab(config) {
        this.tabMenus = null;
        this.tabMains = null;
        if (config) {
            this._init(config);
        }
    }
    Tab.prototype = {
        consturctor: Tab,// 手动指定构造函数的指向
        _init: function (config) {
            // 初始化元素
            this.initElements(config);
            // 初始化事件
            this.initEvent();
            // 判断是否要进行自动播放
            if (config.auto) {
                this.autoPlay();  // 进行自动播放
            }
        },
        initElements: function (config) {
            var tabMenu = document.getElementById(config.tabMenu);
            var tabMain = document.getElementById(config.tabMain);
            this.tabMenus = tabMenu.children;
            this.tabMains = tabMain.children;
        },
        initEvent: function () {
            // 注册事件
            for (var i = 0; i < this.tabMenus.length; i++) {
                var li = this.tabMenus[i];
                li.index = i;
                // 这里面的this指向的是Tab构造函数创建出来的对象
                // 并使用that进行保存起来
                var that = this;
                // this.onclick = this.change;  // 不能传递参数
                li.onclick = function () {
                    // this 指向的是当前点击的对象li
                    that.change(this);// 传递的当前点击的li对象
                }
            }
        },
        change: function (tabMenu) {
            //1 让所有的li变暗
            for (var i = 0; i < this.tabMenus.length; i++) {
                this.tabMenus[i].className = 'tab-item';
                //3 让所有的div进行隐藏
                this.tabMains[i].className = 'main';
            }
            //2 让当前li高亮
            tabMenu.className += ' active';// notice:active前面要打空格
            //4 让当前div进行显示
            this.tabMains[tabMenu.index].className += ' active';
        },
        autoPlay: function () {
            var index = 0;
            // 使用that保存当前Tab构造函数创建出来的tab对象
            var that = this;
            setInterval(() => {
                index++;
                if (index === that.tabMenus.length) {
                    index = 0;
                }
                that.change(that.tabMenus[index]);
            }, 2000);
        }
    };
    window.Tab = Tab;// 暴露接口
})(window);

// 不是使用沙箱模式:
/* function Tab(config) {
    this.tabMenus = null;
    this.tabMains = null;
    if (config) {
        this._init(config);
    }
}
Tab.prototype = {
    consturctor: Tab,// 手动指定构造函数的指向
    _init: function (config) {
        // 初始化元素
        this.initElements(config);
        // 初始化事件
        this.initEvent();
        // 判断是否要进行自动播放
        if (config.auto) {
            this.autoPlay();  // 进行自动播放
        }
    },
    initElements: function (config) {
        var tabMenu = document.getElementById(config.tabMenu);
        var tabMain = document.getElementById(config.tabMain);
        this.tabMenus = tabMenu.children;
        this.tabMains = tabMain.children;
    },
    initEvent: function () {
        // 注册事件
        for (var i = 0; i < this.tabMenus.length; i++) {
            var li = this.tabMenus[i];
            li.index = i;
            // 这里面的this指向的是Tab构造函数创建出来的对象
            // 并使用that进行保存起来
            var that = this;
            // this.onclick = this.change;  // 不能传递参数
            li.onclick = function () {
                // this 指向的是当前点击的对象li
                that.change(this);// 传递的当前点击的li对象
            }
        }
    },
    change: function (tabMenu) {
        //1 让所有的li变暗
        for (var i = 0; i < this.tabMenus.length; i++) {
            this.tabMenus[i].className = 'tab-item';
            //3 让所有的div进行隐藏
            this.tabMains[i].className = 'main';
        }
        //2 让当前li高亮
        tabMenu.className += ' active';// notice:active前面要打空格
        //4 让当前div进行显示
        this.tabMains[tabMenu.index].className += ' active';
    },
    autoPlay: function () {
        var index = 0;
        // 使用that保存当前Tab构造函数创建出来的tab对象
        var that = this;
        setInterval(() => {
            index++;
            if (index === that.tabMenus.length) {
                index = 0;
            }
            that.change(that.tabMenus[index]);
        }, 2000);
    }
}; */


