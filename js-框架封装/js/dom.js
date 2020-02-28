$.fn.extend({
    // 融入empty方法
    empty: function () {
        for (var i = 0, len = this.length; i < len; i++) {
            this[i].innerHTML = '';
        }
        // 为了链式编程
        return this;
    },
    // 优化版: 借用数组的forEach方法进行遍历 
    _empty: function () {
        [].forEach.call(this, function (val, index) {
            val.innerHTML = '';
        });
        // 为了链式编程
        return this;
    },
    // 优化版: 使用each方法
    __empty: function () {
        this.each(function () {
            this.innerHTML = '';
        });
        // 为了链式编程
        return this;
    },
    // 融入remove方法
    remove: function () {
        for (var i = 0, len = this.length; i < len; i++) {
            // 通过父节点进行删除
            // this[i].parentNode.removeChild(this[i]);
            // 通过自身进行删除
            this[i].remove();
        }
        // 为了链式编程
        return this;
    },
    // 优化版: 借用数组的forEach方法进行遍历操作
    _remove: function () {
        [].forEach.call(this, function (val, index) {
            // 通过父节点进行删除
            // val.parentNode.removeChild(val);
            // 通过自身进行删除
            val.remove();
        });
        // 为了链式编程
        return this;
    },
    // 优化版: 使用each方法
    __remove: function () {
        this.each(function () {
            // 通过父节点进行删除
            // this.parentNode.removeChild(this);
            // 通过自己进行删除
            this.remove();
        });
        // 为了链式编程
        return this;
    },
    // 融入html方法
    html: function (html) {
        if (arguments.length === 0) {
            // 说明是没有传递参数
            return this[0].innerHTML;
        } else {
            for (var i = 0, len = this.length; i < len; i++) {
                this[i].innerHTML = html;
            }
            // 为了链式编程
            return this;
        }
    },
    // 优化版 : 借用数组的forEach方法进行遍历
    _html: function (html) {
        if (arguments.length === 0) {
            return this[0].innerHTML;
        } else {
            [].forEach.call(this, function (val, index) {
                val.innerHTML = html;
            });
            // 为了链式编程
            return this;
        }
    },
    // 优化版: 使用each方法
    __html: function (html) {
        if (arguments.length === 0) {
            return this[0].innerHTML;
        } else {
            this.each(function () {
                this.innerHTML = html;
            });
            // 为了链式编程
            return this;
        }
    },
    // 融入text方法
    text: function (text) {
        var result = '';
        if (arguments.length === 0) {
            for (var i = 0, len = this.length; i < len; i++) {
                result += this[i].innerText;
            }
            return result;
        } else {
            for (var i = 0, len = this.length; i < len; i++) {
                this[i].innerText = text;
            }
            // 为了链式编程
            return this;
        }
    },
    // 优化版 : 借用数组的forEach方法进行遍历
    _text: function (text) {
        var result = '';
        if (arguments.length === 0) {
            [].forEach.call(this, function (val, index) {
                result += val.innerText;
            });
            return result;
        } else {
            [].forEach.call(this, function (val, index) {
                val.innerText = text;
            });
            // 为了链式编程
            return this;
        }
    },
    // 优化版: 使用each方法
    __text: function (text) {
        var result = '';
        if (arguments.length === 0) {
            this.each(function () {
                result += this.innerText;
            });
            return result;
        } else {
            this.each(function () {
                this.innerText = text;
            });
            // 为了链式编程
            return this;
        }
    },
    // 把所有元素(注意这里是所有元素)添加到指定的元素中去
    appendTo: function (selector) {
        /*
            实现思路:
            1.定义一个数组,用来存储被添加的所有元素
            2.使用jQuery工厂函数包装selector,把不同参数统一为jq实例对象(这一个步很重要)
            3.在外层遍历(this),也就是所有被添加的元素
            4.内层遍历所有的包装后的selector返回的jq实例对象(目的地),也就是要被追加的对象
            5.在内层进行判断,如果是第一次,则把外层遍历的元素本体添加内层遍历的元素(目的地)中去
            如果不是第一个,则把外层遍历的元素clone版添加到内层遍历的元素(目的地)中去
            6.最后把被添加的元素添加到数组中去,然后用jQuery工厂函数包装返回
        */
        var result = [], temp = null;
        var $selector = $(selector);
        // 因为被添加的元素可能会有很多,所以需要用到循环
        for (var i = 0, len = this.length; i < len; i++) {
            // 因为目的地也会有很多,所以也需要用到循环
            for (var j = 0, jLen = $selector.length; j < jLen; j++) {
                if (j === 0) {
                    // 如果是第一次 给目的地添加元素
                    temp = this[i];
                    $selector[j].appendChild(temp);
                    result.push(temp);
                } else {
                    // 如果不是第一次 给目的地添加元素
                    temp = this[i].cloneNode(true)
                    $selector[j].appendChild(temp);
                    result.push(temp);
                }
            }
        }
        return jQuery(result);// 进行包装返回 返回的是一个jQuery实例对象
    },
    // 优化版: 使用each方法
    _appendTo: function (selector) {
        var result = [], temp = null;
        var $selector = $(selector);
        // 遍历this(注意这里有三个不同的this)
        this.each(function () {
            var self = this;
            // 遍历目的地$selector
            $selector.each(function (i, val) {
                // 可以多用三元运算符(比较简洁)
                temp = i === 0 ? self : self.cloneNode(true);
                this.appendChild(temp);
                result.push(temp);
            });
        });
        return jQuery(result);
    },
    // 把所有元素添加到指定元素的最前面去
    prependTo: function (selector) {
        var result = [], temp = null;
        var $selector = $(selector);
        // 循环被添加的元素
        for (var i = 0, len = this.length; i < len; i++) {
            // 循环$selector
            for (var j = 0, jLen = $selector.length; j < jLen; j++) {
                /* if (j === 0) {
                    temp = this[i];
                    // 注意这里只能使用firstChild,而不能使用firstElementChild
                    $selector[j].insertBefore(temp, $selector[j].firstChild);
                } else {
                    temp = this[i].cloneNode(true);
                    // 注意这里只能使用firstChild,而不能使用firstElementChild
                    $selector[j].insertBefore(temp, $selector[j].firstChild);
                } */

                // 简写:  使用三元运算符(推荐)
                temp = j === 0 ? this[i] : this[i].cloneNode(true);
                // 注意这个地方只能使用firstChild 而不能使用firstElementChild
                $selector[j].insertBefore(temp, $selector[j].firstChild);
                result.push(temp);
            }
        }
        return jQuery(result);
    },
    // 优化版: 使用each方法
    _prependTo: function (selector) {
        var result = [], temp = null;
        var $selector = $(selector);
        // 循环this 也就是被添加的元素 (这里有三个this,分别指向不同的引用)
        this.each(function () {
            var self = this;
            $selector.each(function (i) {
                // 使用三元运算符(推荐)
                temp = i === 0 ? self : self.cloneNode(true);
                this.insertBefore(temp, this.firstChild);
                result.push(temp);
            });
        });
        return jQuery(result);
    },
    // 给所有元素添加html内容,或者其他元素
    append: function (context) {
        /*
        实现思路:
            1.先判断context是不是字符串
            2.如果是字符串,则把这个字符串追加给所有的元素
            3.如果不是,则先把context包装成jq对象,进行统一处理
            4.
            5.
            6.
            tips:最后的4,5,6步骤和appendTo实现思路是一样的
        */
        if (jQuery.isString(context)) {
            // 循环this, 也就是实例调用者
            for (var i = 0, len = this.length; i < len; i++) {
                this[i].innerHTML += context;   // 追加内容 
            }
        } else {
            var $context = $(context);
            var temp = null;
            // 循环$context
            for (var j = 0, jLen = $context.length; j < jLen; j++) {
                // 循环this
                for (var k = 0, kLen = this.length; k < kLen; k++) {
                    if (k === 0) {
                        temp = $context[j];
                        this[k].appendChild(temp);
                    } else {
                        temp = $context[j].cloneNode(true);
                        this[k].appendChild(temp);
                    }
                }
            }
        }
        return this;
    },
    // 优化版 使用each和复用appendTo方法
    _append: function (context) {
        if (jQuery.isString(context)) {
            // 循环this
            this.each(function () {
                this.innerHTML += context;   // 追加内容
            });
        } else {
            var $context = $(context);
            // 复用appendTo方法(经典)
            $context.appendTo(this);
        }
        return this;
    },
    // 给所有元素的最前面添加html内容,或者其他元素
    prepend: function (context) {
        if (jQuery.isString(context)) {
            for (var i = 0, len = this.length; i < len; i++) {
                // 放在前面
                this[i].innerHTML = context + this[i].innerHTML;
            }
        } else {
            var $context = $(context);
            var temp = null;
            // 循环$context
            for (var j = 0, jLen = $context.length; j < jLen; j++) {
                // 循环this
                for (var k = 0, kLen = this.length; k < kLen; k++) {
                    // 三元运算符(推荐)
                    temp = k === 0 ? $context[j] : $context[j].cloneNode(true);
                    this[k].insertBefore(temp, this[k].firstChild);
                }
            }
        }
        //为了链式编程
        return this;
    },
    // 优化版: 使用each和复用prependTo方法
    _prepend: function (context) {
        if (jQuery.isString(context)) {
            this.each(function () {
                this.innerHTML = context + this.innerHTML;
            });
        } else {
            var $context = $(context);
            // 复用prependTo方法
            $context.prependTo(this);
        }
        // 为了链式编程
        return this;
    }
});
