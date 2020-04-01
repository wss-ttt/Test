(function () {
    a();
    function a() {
        console.log('窗口大小改变');
        var b = document.documentElement.clientWidth;
        console.log(b);
        // 大于750 字体不再放大了
        b = b > 750 ? 750 : b;
        var c = b / 750 * 100;
        console.log(c);
        document.getElementsByTagName("html")[0].style.fontSize = c + "px"
    }
    window.onresize = a
})();
