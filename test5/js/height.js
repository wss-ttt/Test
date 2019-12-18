(function() {
    var dpr = window.devicePixelRatio;
    var meta = document.createElement('meta');
    var scale = 1 / dpr;
    meta.setAttribute('name', 'viewport');
    meta.setAttribute('content', 'width=device-width, user-scalable=no, initial-scale=' + scale +
        ', maximum-scale=' + scale + ', minimum-scale=' + scale);
    document.getElementsByTagName('head')[0].appendChild(meta);
    // 动态设置的缩放大小会影响布局视口的尺寸
    function resize() {
        var deviceWidth = document.documentElement.clientWidth;
        // document.documentElement.style.fontSize = (deviceWidth / 10) +'px';
        document.documentElement.style.fontSize = (deviceWidth / 120) + 'px';
        // var str = 'calc((1920px - 13.875rem)/120)';
        // document.documentElement.style.fontSize = str;
    }
    resize();
    window.onresize = resize;
})()