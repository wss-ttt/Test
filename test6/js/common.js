var common = {
    lock_status: false,
    //4位数字验证
    isCode4: function (val) {
        var regNeg = /^[0-9]{4}$/;
        if (regNeg.test(val) || regNeg.test(val)) {
            return true;
        } else {
            return false;
        }
    },
    //验证邮编
    isCode: function (val) {
        var regNeg = /^[0-9]{6}$/;
        if (regNeg.test(val) || regNeg.test(val)) {
            return true;
        } else {
            return false;
        }
    },
    //验证手机号
    isPhone: function (val) {
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(val)) {
            return false;
        } else {
            return true;
        }
    },
    //去空格
    trim: function (str) {
        var trimReg = new RegExp(' ', 'ig');
        return str.replace(trimReg, '');
    },
    //
    isInternationalPhone: function (val) {
        var myphonereg = /^\d{6,15}$/;
        if (!myphonereg.test(val)) {
            return false;
        } else {
            return true;
        }
    },
    //验证邮箱
    isEmail: function (val) {
        var myreg = /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/;
        if (!myreg.test(val)) {
            return false;
        } else {
            return true;
        }
    },
    //thinkphp 分页跳转
    jump: function (_this) {
        var maxPage = $(_this).data('max');
        var type = $(_this).data('type');
        var num = $(_this).parent().find('input').val();
        if (num < 1) return;
        if (num > maxPage) num = maxPage;
        var parameter = window.location.search;
        var url = window.location.href;
        var subStr = new RegExp("\\#\\w*", "i");//创建正则表达式对象
        url = url.replace(subStr, "");//把'is'替换为空字符串
        var fragment = $(_this).data('fragment') ? '#' + $(_this).data('fragment') : '';
        url = this.changeURLArg(url, type, num);
        url += fragment;
        location.href = url;
    },
    //url参数更新添加
    jump_url: function (url, obj) {
        var subStr = new RegExp("\\#\\w*", "i");//创建正则表达式对象
        url = url.replace(subStr, "");//把'is'替换为空字符串
        $.each(obj, function (val, i) {
            url = common.changeURLArg(url, val, i);
        })
        return url;
    },
    //单个参数更新添加
    changeURLArg: function (url, arg, arg_val) {
        var pattern = arg + '=([^&]*)';
        var replaceText = arg + '=' + arg_val;
        if (url.match(pattern)) {
            var tmp = '/(' + arg + '=)([^&]*)/gi';
            tmp = url.replace(eval(tmp), replaceText);
            return tmp;
        } else {
            if (url.match('[\?]')) {
                return url + '&' + replaceText;
            } else {
                return url + '?' + replaceText;
            }
        }
        return url + '\n' + arg + '\n' + arg_val;
    },
    //收藏
    collect: function (_this) {
        var $_this = this;
        if ($_this.lock_status) return;
        var on_user_id = $(_this).data('id');
        var type = $(_this).data('type');
        var count = $('#collect_' + on_user_id).html();
        if (type == 0) {
            count = count == 0 ? 0 : parseInt(count) - 1;
        } else {
            count = parseInt(count) + 1;
        }
        $_this.lock_status = true;
        $.ajax({
            type: "POST",
            url: "/translator/search/on_collection",
            data: {
                type: type,
                on_user_id: on_user_id,
            },
            success: function (data) {
                if (data.code == 1) {
                    $(_this).data('type', $(_this).data('type') == 1 ? 0 : 1);
                    $(_this).html($(_this).data('type') == 1 ? languages.get_name(1) : languages.get_name(2));
                    $('#collect_' + on_user_id).html(count);
                } else {
                    common.alert_warning(data.msg);
                }
                $_this.lock_status = false;
            }
        });
    },
    alert: function (msg, callback) {
        var html = '<div class="popup-public dialog-tips" style="display: block;">' +
            '    <div class="dialog-tips-content">' +
            '        <img class="dialog-tips-close" src="images/del.png" onclick="$(this).parents(\'.popup-public\').remove();" width="14" height="14">' +
            '        <img class="dialog-tips-icon" src="images/dialog-tips-icon.png" width="112" height="100">' +
            '        <p>' + msg + '</p>' +
            '    </div>' +
            '</div>';
        $('body').append(html);
        if (typeof callback === "function") {
            callback();
        }
    },
    alert_warning: function (msg, callback) {
        var html = '<div class="popup-public dialog-tips" style="display: block;">' +
            '    <div class="dialog-tips-content">' +
            '        <img class="dialog-tips-close" src="images/del.png" onclick="$(this).parents(\'.popup-public\').remove();" width="14" height="14">' +
            '        <img class="dialog-tips-icon" src="images/dialog-tips.png" width="112" height="100">' +
            '        <p>' + msg + '</p>' +
            '    </div>' +
            '</div>';
        $('body').append(html);
        if (typeof callback === "function") {
            callback();
        }
    },
    confirm: function (msg, yes_callback, no_callback) {
        var html = '<div class="popup-public pop_confirm" style="display: block;">' +
            '    <div class="pop_confirm_con" style="height: 310px">' +
            '        <a class="pop_del confirm_no" href="javascript:;"></a>' +
            '        <img class="informationIcon" style="margin-top: 50px;margin-bottom: 24px" src="/static/home/image/register/informationIcon.png" width="112" height="100">' +
            '        <p class="pop_title" style="margin-top: 0px;padding-left: 50px;padding-right: 50px">' + msg + '</p>' +
            '        <div class="pop_btn">' +
            '            <a class="pop_sure js_del confirm_yes" href="javascript:;" >' + languages.get_name(3) + '</a>' +
            '            <a class="pop_cancel js_del confirm_no" href="javascript:;" >' + languages.get_name(4) + '</a>' +
            '        </div>' +
            '    </div>' +
            '</div>';
        $('body').append(html);
        $('.confirm_yes').click(function () {
            if (typeof yes_callback === "function") {
                yes_callback();
            }
            $('.confirm_no').parents('.popup-public').remove();
        });
        $('.confirm_no').click(function () {
            if (typeof no_callback === "function") {
                no_callback();
            }
            $('.confirm_no').parents('.popup-public').remove();
        });
        return false;
    }
}
