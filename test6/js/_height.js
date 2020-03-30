(function (win) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var tid;

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        // var width=docEl.clientWidth;
        if (width > 540) {
            width = 540;
        }
        var rem = width / 7.5;
        // var rem=width/375*16;
        docEl.style.fontSize = rem + 'px';
        // console.log(width);
        console.log(rem);
        // console.log(docEl.clientWidth);
    }

    win.addEventListener('resize', function () {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    refreshRem();

})(window);