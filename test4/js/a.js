function setCopyBtn() {
	$(".CopyToClipboard").each(function() {
		var t = new ZeroClipboard.Client;
		t.setHandCursor(!0), t.addEventListener("load", function(t) {}), t.addEventListener("mouseOver", function(t) {
			var e = t.movie.parentNode.parentNode.parentNode.parentNode.parentNode.nextSibling.innerHTML;
			e = e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&"), t.setText(e)
		}), t.addEventListener("complete", function(t, e) {
			alert("a")
		}), t.glue(this, this.parentNode)
	})
}

function m_over_m(t, e) {
	__mm_over = !0, showMedalInfo(t.target, e)
}

function m_out_m() {
	__mm_over = !1, hideMedalInfo()
}

function showMedalInfo(t, e) {
	__mm_intro && (document.body.removeChild(__mm_intro), __mm_intro = null);
	var i = "",
		n = $(t).attr("src"),
		o = "",
		s = "";
	n.indexOf("zhuanlandaren") > -1 ? (o = "涓撴爮杈句汉", s = "鎺堜簣鎴愬姛鍒涘缓涓汉鍗氬涓撴爮鐨勭敤鎴枫€備笓鏍忎腑娣诲姞浜旂瘒浠ヤ笂鍗氭枃鍗冲彲鐐逛寒锛佹挵鍐欏崥瀹笓鏍忔祿缂╂妧鏈簿鍗庯紝涓撴爮杈句汉灏辨槸浣狅紒") : n.indexOf("chizhiyiheng") > -1 ? (o = "鎸佷箣浠ユ亽", s = "鎺堜簣姣忎釜鑷劧鏈堝唴鍙戝竷4绡囨垨4绡囦互涓婂師鍒涙垨缈昏瘧IT鍗氭枃鐨勭敤鎴枫€備笉绉番姝ユ棤浠ヨ嚦鍗冮噷锛屼笉绉皬娴佹棤浠ユ垚姹熸捣锛岀▼搴忎汉鐢熺殑绮惧僵闇€瑕佸潥鎸佷笉鎳堝湴绉疮锛�") : n.indexOf("weiruanmvp") > -1 ? (o = "寰蒋MVP", s = "鎺堜簣閫氳繃CSDN鍗氬骞冲彴绉瀬鍒嗕韩寰蒋鐩稿叧鎶€鏈煡璇嗗拰涓撲笟鎶€鑳斤紝骞跺仛鍑虹獊鍑鸿础鐚殑鐢ㄦ埛銆�") : n.indexOf("bokezhixing") > -1 && (o = "鍗氬涔嬫槦", s = '鎺堜簣閫氳繃"CSDN鍗氬涔嬫槦璇勯€�"涓劚棰栬€屽嚭鐨勫崄澶у崥瀹箣鏄熺О鍙风殑鐢ㄦ埛銆�'), i += "<div  style='  z-index:99999 ; left: 15%;  top: -9px;  position: absolute;  width: 0;  height: 0;  border-left: 10px solid transparent;  border-right: 10px solid transparent;  border-bottom: 8px solid #EAEAEA; '></div>", i += "<dl onmouseover='__mm_over=true;' onmouseout='m_out_m();'>", i += "<dt><img src='" + n.replace(".png", "") + "middle.png' /></dt>", i += "<dd><strong>" + o + "</strong>" + s + "</dd>", i += "</dl>", __mm_intro = document.createElement("div"), __mm_intro.className = "medal_intro";
	var a = $(t).position(),
		r = a.left - 46;
	r < 0 && (r = 0), __mm_intro.style.left = r + "px", __mm_intro.style.top = a.top + 32 + 4 + "px", __mm_intro.innerHTML = i, document.body.appendChild(__mm_intro)
}

function hideMedalInfo() {
	setTimeout(function() {
		!__mm_over && __mm_intro && (document.body.removeChild(__mm_intro), __mm_intro = null)
	}, 500)
}

function computePos() {
	"object" == typeof toolBar && (toolBar.setPosX(), toolBar.computePositon())
}

function baidudatatemp(t) {
	var e = new RegExp("(" + highlight.join("|") + ")", "gi"),
		i = /<[^>]*>/g,
		n = t["abstract"].replace(i, ""),
		o = t.dispTime.replace(/^(\d*)-/, ""),
		s = t.linkUrl,
		a = t.title.replace(i, "").replace(e, "<em>$1</em>"),
		r = '<div class="recommend-item-box baiduSearch" data-track-view=\'{"mod":"popu_' + ("skin3-template" == curSkin ? "387" : "614") + '","con":",' + s + ',searchFromBaidu1"}\' data-track-click=\'{"mod":"popu_' + ("skin3-template" == curSkin ? "387" : "614") + '","con":",' + s + ',searchFromBaidu1"}\'>                <a href="' + s + '" target="_blank">              \t\t<h4 class="text-truncate oneline">' + a + '</h4>                  <div class="info-box d-flex align-content-center">                    <p>                      <span class="date">' + o + '</span>                    </p>                  </div>              \t\t<p class="content oneline">' + n + "</p>                </a>            \t</div>";
	return r
}

function trackByGraylog(t, e) {
	var i = window.location.protocol + "//statistic.csdn.net/";
	$.get(i + t, e)
}

function remoteData() {
	var t = function() {
		window.csdn.isRunBaidu || (showResult(), window.csdn.isRunBaidu = void 0)
	};
	baiduKey ? (csdn.afterCasInit = function(e, i) {
		return e ? void csdn.baiduSearch(e, function(e) {
			needInsertBaidu ? (window.csdn.isRunBaidu = !0, showResult(e)) : t()
		}) : (t(), !1)
	}, csdn.baiduSearchInstallError = t, setTimeout(t, 2e3)) : showResult()
}

function trackAddblogKey(t, e, i, n) {
	var o = /("con"\:)"(.*)"/;
	t = t.replace(o, function(t, e, n) {
		return e + '"' + n + ",index_" + i + '"'
	}), t = JSON.parse(t), $(e).data(n, t)
}

function trackAddBaiduKey(t, e) {
	var i = $(t).attr("data-track-view"),
		n = $(t).attr("data-track-click");
	return e += 1, i && (i = JSON.parse(i), i.con = i.con + "_" + e + ",-", i = JSON.stringify(i)), n && (n = JSON.parse(n), n.con = n.con + "_" + e + ",-", n = JSON.stringify(n)), t = $(t).get(0), t.dataset.trackView = i, t.dataset.trackClick = n, t.setAttribute("data-flg", "true"), $(t).addClass("recommend-box-ident"), t = t.outerHTML, window.csdn.trackRecord.baiduTrackCount = e, {
		insertObj: t,
		j: e
	}
}

function trackAdd(t, e, i) {
	var n;
	"article" === e && (n = $(".recommend-box").children("div.recommend-item-box").not("[data-flg]"));
	for(var o = 0; o < n.length; o++) {
		var s = n[o].dataset.trackView,
			a = n[o].dataset.trackClick;
		(s || a) && (t += 1, window.csdn.trackRecord.articleTrackCount = t, n[o].setAttribute("data-flg", "true")), s && trackAddblogKey(s, n[o], t, "trackView"), a && trackAddblogKey(a, n[o], t, "trackClick")
	}
	i && i(n)
}

function showResult(t) {
	var e = [],
		i = window.csdn.trackRecord.articleTrackCount;
	trackAdd(i, "article", function(i) {
		var n, o, s, a, r = 9,
			l = ["blog.csdn.net/.+/article/details/", "download.csdn.net/download/", "bbs.csdn.net/topics/", "edu.csdn.net/course/detail/ ", "ask.csdn.net/questions/", "gitchat.csdn.net/column"],
			c = new RegExp(l.join("|"));
		if(!t || t.length <= 0) return !1;
		if(t && t.length > 0)
			for(var h = 0; h < t.length; h++) curentUrl.indexOf(t[h].linkUrl.split("?")[0]) === -1 && c.test(t[h].linkUrl) && e.push(baidudatatemp(t[h]));
		if(e && e.length > 0) {
			a = window.csdn.trackRecord.baiduTrackCount;
			for(var h = r; h <= i.length; h += 2) {
				var d = h - r + 1;
				if(o = e[d - 1] ? e[d - 1] : "", s = e[d] ? e[d] : "", !($(i[h]) && $(i[h]).length > 0)) break;
				o && (n = trackAddBaiduKey(o, a), o = n.insertObj, a = n.j), s && (n = trackAddBaiduKey(s, a), s = n.insertObj, a = n.j), $(i[h]).after(o + s), a = window.csdn.trackRecord.baiduTrackCount
			}
		}
		if(e.length > 0) {
			var u = i.length % 2 === 0 ? i.length : i.length - 1;
			if(i.length < e.length)
				for(var h = e.length - 1; h > u; h--) {
					var p = $(".recommend-box").children("div.recommend-item-box").last();
					e[h] && (n = trackAddBaiduKey(e[h], a), a = n.j), n.insertObj && p.after(n.insertObj)
				}
		}
	})
}

function interval(t) {
	var e = null;
	return function() {
		clearTimeout(e), e = null, e = setTimeout(function() {
			t.setPosX()
		}, 200)
	}
}

function ToolMeau(t) {
	this.posType = t && t.posType ? t.posType : "left", this.posReference = t && t.posReference ? t.posReference : $("main"), this.toolBox = $("div.tool-box"), this.toolBox.interval = t && t.interval ? t.interval : 1, this.fixTop = t.fixTop ? t.fixTop : 170, this.isSetWidescreenStyle = !1, this.initPos(), this.init()
}
$(function() {
	function t(t) {
		var e = document.createElement("script");
		e.src = "https://nbrecsys.4paradigm.com/resource/js/sdk-csdn-smallflow.prod.1029.js", document.getElementsByTagName("head")[0].appendChild(e), e.onload = t
	}

	function e(t, e) {
		return !s(t.item_id, e) && void $(e).append(n(t, "T0", "647"))
	}

	function i(t, e) {
		return t.item_id != l && (t.url && t.url.indexOf("edu.csdn.net") > -1 && $(e).addClass("isGreatIcon"), void $(e).append(n(t, "T3", "648")))
	}

	function n(t, e, i) {
		var n = "",
			s = "",
			a = !1,
			r = !1,
			l = "",
			c = {};
		return c.pos = e, t.cover_url && (r = !0, c.is_img = !0, l = '<div class="img-box float-left"><img style="' + n + '" src="' + t.cover_url + '" ></div>'), t._url && t._url.indexOf("edu.csdn.net") > -1 && (a = !0), "T3" === e ? (n = "width:96px;height:60px;border-radius: 4px;", s = "oneline") : "T0" === e && o(c), '<div class="_4paradigm_box ' + (a ? "isGreatIcon" : "") + " clearfix " + e + '" data-track-view=\'{"mod":"popu_' + i + '","con":",' + t.url + ',"}\' data-track-click=\'{"mod":"popu_' + i + '","con":",' + t.url + ',"}\'><a href="' + t.url + '" target="_blank"><div class="content-box"><h4 class="text-truncate oneline">' + t.title + '</h4><p class="content ' + s + '">' + t.content + "</p></div>" + l + "</a></div>"
	}

	function o(t) {
		var e = "84%";
		if(!t.is_img) var e = "100%";
		var i = document.createElement("style");
		i.type = "text/css", i.innerHTML = [".T0{", "background-color: #fff;", "margin-bottom: 1px;", "margin-top: 1px;", "padding: 16px 24px;", "}", ".T0 .img-box img{", "width:96px;", "height:60px;", "margin-top: 6px;", "border-radius: 4px;", "}", ".T0 .content-box{ width: " + e + ";display:inline-block;margin-left: 8px;}", ".T0 .content-box h4{", "font-size: 18px;", "color: #3C3C3C;", "line-height: 24px;", "margin-bottom:4px;", "}", ".T0 .content-box h4:hover{", "color: #CA0C16;", "}", ".T0 .content-box .content{", "font-size: 14px;", "color: #6B6B6B;", "}"].join(""), document.getElementsByTagName("head")[0].appendChild(i)
	}

	function s(t, e) {
		return t == l && (currentUserName ? a(e) : r(e), !0)
	}

	function a(t) {
		! function() {
			var e = "_" + Math.random().toString(36).slice(2);
			$(t).append('<div style="" id="' + e + '"></div>'), (window.slotbydup = window.slotbydup || []).push({
				id: "u3501897",
				container: e
			})
		}()
	}

	function r(t) {
		var e = 10;
		t.id = "a_d_feed_" + e;
		var i = $("div.blog-content-box").outerWidth() - 40;
		"function" != typeof NEWS_FEED ? "" : NEWS_FEED({
			w: i,
			h: 80,
			showid: "ztvJV8",
			placeholderId: "a_d_feed_" + e,
			inject: "define",
			define: {
				imagePosition: "left",
				imageBorderRadius: 0,
				imageWidth: 90,
				imageHeight: 60,
				imageFill: "clip",
				displayImage: !0,
				displayTitle: !0,
				titleFontSize: 20,
				titleFontColor: "#333",
				titleFontFamily: "Microsoft Yahei",
				titleFontWeight: "bold",
				titlePaddingTop: 0,
				titlePaddingRight: 0,
				titlePaddingBottom: 6,
				titlePaddingLeft: 8,
				displayDesc: !0,
				descFontSize: 14,
				descFontColor: "#6b6b6b",
				descFontFamily: "Microsoft Yahei",
				paddingTop: 8,
				paddingRight: 16,
				paddingBottom: 8,
				paddingLeft: 16,
				backgroundColor: "#fff",
				hoverColor: "#ca0c16"
			}
		})
	}
	var l = "user_define";
	p4_script_onload = function() {
		"undefined" != typeof p4sdk_enable_courseBox && p4CSDNT0Bootstrap(e, c), "undefined" != typeof p4sdk_enable_recommendBox && p4CSDNT3Bootstrap(i, h)
	};
	var c = document.getElementsByClassName("p4course_target")[0],
		h = document.getElementsByClassName("p4courset3_target")[0];
	"undefined" == typeof p4sdk_enable_courseBox && "undefined" == typeof p4sdk_enable_recommendBox || t(p4_script_onload)
}), $(function() {
	function t() {
		return !1
	}
	isShowAds && ($(window).resize(function() {
		t()
	}), t())
});
var ZeroClipboard = {
	version: "1.0.7",
	clients: {},
	moviePath: "https://csdnimg.cn/public/highlighter/ZeroClipboard.swf",
	nextId: 1,
	$: function(t) {
		return "string" == typeof t && (t = document.getElementById(t)), t.hide = function() {
			this.style.display = "none"
		}, t.show = function() {
			this.style.display = "block"
		}, t.addClass = function(t) {
			this.removeClass(t), this.className += " " + t
		}, t.removeClass = function(t) {
			for(var e = this.className.split(/\s+/), i = -1, n = 0; n < e.length; n++) e[n] == t && (i = n, n = e.length);
			return i > -1 && (e.splice(i, 1), this.className = e.join(" ")), this
		}, t.hasClass = function(t) {
			return !!this.className.match(new RegExp("\\s*" + t + "\\s*"))
		}, t
	},
	setMoviePath: function(t) {
		this.moviePath = t
	},
	dispatch: function(t, e, i) {
		var n = this.clients[t];
		n && n.receiveEvent(e, i)
	},
	register: function(t, e) {
		this.clients[t] = e
	},
	getDOMObjectPosition: function(t, e) {
		for(var i = {
				left: 0,
				top: 0,
				width: t.width ? t.width : t.offsetWidth,
				height: t.height ? t.height : t.offsetHeight
			}; t && t != e;) i.left += t.offsetLeft, i.top += t.offsetTop, t = t.offsetParent;
		return i
	},
	Client: function(t) {
		this.handlers = {}, this.id = ZeroClipboard.nextId++, this.movieId = "ZeroClipboardMovie_" + this.id, ZeroClipboard.register(this.id, this), t && this.glue(t)
	}
};
ZeroClipboard.Client.prototype = {
	id: 0,
	ready: !1,
	movie: null,
	clipText: "",
	handCursorEnabled: !0,
	cssEffects: !0,
	handlers: null,
	glue: function(t, e, i) {
		this.domElement = ZeroClipboard.$(t);
		var n = 99;
		this.domElement.style.zIndex && (n = parseInt(this.domElement.style.zIndex, 10) + 1), "string" == typeof e ? e = ZeroClipboard.$(e) : "undefined" == typeof e && (e = document.getElementsByTagName("body")[0]);
		var o = ZeroClipboard.getDOMObjectPosition(this.domElement, e);
		this.div = document.createElement("div");
		var s = this.div.style;
		if(s.position = "absolute", s.left = "" + o.left + "px", s.top = "" + o.top + "px", s.width = "" + o.width + "px", s.height = "" + o.height + "px", s.zIndex = n, "object" == typeof i)
			for(addedStyle in i) s[addedStyle] = i[addedStyle];
		e.appendChild(this.div), this.div.innerHTML = this.getHTML(o.width, o.height)
	},
	getHTML: function(t, e) {
		var i = "",
			n = "id=" + this.id + "&width=" + t + "&height=" + e;
		if(navigator.userAgent.match(/MSIE/)) {
			var o = location.href.match(/^https/i) ? "https://" : "http://";
			i += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="' + o + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="' + t + '" height="' + e + '" id="' + this.movieId + '" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + ZeroClipboard.moviePath + '" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="' + n + '"/><param name="wmode" value="transparent"/></object>'
		} else i += '<embed id="' + this.movieId + '" src="' + ZeroClipboard.moviePath + '" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="' + t + '" height="' + e + '" name="' + this.movieId + '" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="' + n + '" wmode="transparent" />';
		return i
	},
	hide: function() {
		this.div && (this.div.style.left = "-2000px")
	},
	show: function() {
		this.reposition()
	},
	destroy: function() {
		if(this.domElement && this.div) {
			this.hide(), this.div.innerHTML = "";
			var t = document.getElementsByTagName("body")[0];
			try {
				t.removeChild(this.div)
			} catch(e) {}
			this.domElement = null, this.div = null
		}
	},
	reposition: function(t) {
		if(t && (this.domElement = ZeroClipboard.$(t), this.domElement || this.hide()), this.domElement && this.div) {
			var e = ZeroClipboard.getDOMObjectPosition(this.domElement),
				i = this.div.style;
			i.left = "" + e.left + "px", i.top = "" + e.top + "px"
		}
	},
	setText: function(t) {
		this.clipText = t, this.ready && this.movie.setText(t)
	},
	addEventListener: function(t, e) {
		t = t.toString().toLowerCase().replace(/^on/, ""), this.handlers[t] || (this.handlers[t] = []), this.handlers[t].push(e)
	},
	setHandCursor: function(t) {
		this.handCursorEnabled = t, this.ready && this.movie.setHandCursor(t)
	},
	setCSSEffects: function(t) {
		this.cssEffects = !!t
	},
	receiveEvent: function(t, e) {
		switch(t = t.toString().toLowerCase().replace(/^on/, "")) {
			case "load":
				if(this.movie = document.getElementById(this.movieId), !this.movie) {
					var i = this;
					return void setTimeout(function() {
						i.receiveEvent("load", null)
					}, 1)
				}
				if(!this.ready && navigator.userAgent.match(/Firefox/) && navigator.userAgent.match(/Windows/)) {
					var i = this;
					return setTimeout(function() {
						i.receiveEvent("load", null)
					}, 100), void(this.ready = !0)
				}
				this.ready = !0, this.movie.setText(this.clipText), this.movie.setHandCursor(this.handCursorEnabled);
				break;
			case "mouseover":
				this.domElement && this.cssEffects && (this.domElement.addClass("hover"), this.recoverActive && this.domElement.addClass("active"));
				break;
			case "mouseout":
				this.domElement && this.cssEffects && (this.recoverActive = !1, this.domElement.hasClass("active") && (this.domElement.removeClass("active"), this.recoverActive = !0), this.domElement.removeClass("hover"));
				break;
			case "mousedown":
				this.domElement && this.cssEffects && this.domElement.addClass("active");
				break;
			case "mouseup":
				this.domElement && this.cssEffects && (this.domElement.removeClass("active"), this.recoverActive = !1)
		}
		if(this.handlers[t])
			for(var n = 0, o = this.handlers[t].length; n < o; n++) {
				var s = this.handlers[t][n];
				"function" == typeof s ? s(this, e) : "object" == typeof s && 2 == s.length ? s[0][s[1]](this, e) : "string" == typeof s && window[s](this, e)
			}
	}
}, $(document).ready(function() {
	$(".article_content pre").each(function() {
		var t = $(this);
		if(void 0 != t.attr("class")) {
			if(t.attr("class").indexOf("brush:") != -1) {
				var e = t.attr("class").split(";")[0].split(":")[1];
				t.attr("name", "code"), t.attr("class", e)
			}
			t.attr("class") && t.attr("name", "code")
		}
	}), $(".article_content textarea[name=code]").each(function() {
		var t = $(this);
		t.attr("class").indexOf(":") != -1 && t.attr("class", t.attr("class").split(":")[0])
	}), window.clipboardData || setTimeout("setCopyBtn()", 500)
}), jQuery(function() {
	var t = $(".badge div img");
	0 === t.length ? $(".interflow .badge").css({
		paddingTop: 0
	}) : t.hover(m_over_m, m_out_m)
});
var __mm_over = !1,
	__mm_intro = null;
! function(t) {
	function e(t, e) {
		var i = e - t + 1;
		return Math.floor(Math.random() * i + t)
	}

	function i() {
		if(currentUserName) {
			var e = {};
			e.imgUrl = "https://csdnimg.cn/release/phoenix/static_blog/images/appqr.png";
			var i = (new window.csdn.publicPrompt).init(e),
				n = "鎮ㄥ凡缁忔敹钘忚繃";
			t(this).hasClass("liked") ? i.show({
				titleStr: n
			}) : t.ajax({
				url: "https://my.csdn.net/my/favorite/do_add/2",
				dataType: "json",
				type: "POST",
				xhrFields: {
					withCredentials: !0
				},
				data: {
					title: articleTitles,
					url: articleDetailUrl,
					share: 1,
					map_name: ""
				},
				success: function(e) {
					1 == e.succ ? (t(".btn-bookmark").addClass("liked"), t(".article-footer-bookmark-btn").addClass("liked").children("span").text("宸叉敹钘�"), i.show({})) : "鎮ㄥ凡缁忔敹钘忚繃" === e.msg ? (t(".btn-bookmark").addClass("liked"), t(".article-footer-bookmark-btn").addClass("liked").children("span").text("宸叉敹钘�"), i.show({
						titleStr: n
					})) : alert(e.msg)
				}
			})
		} else window.csdn.loginBox.show()
	}
	t.fn.extend({
		selection: function() {
			var e = "",
				i = this[0];
			if(document.selection) {
				var n = document.selection.createRange();
				e = n.text
			} else if("number" == typeof i.selectionStart) {
				var o = i.selectionStart,
					s = i.selectionEnd;
				o != s && (e = i.value.substring(o, s))
			}
			return t.trim(e)
		},
		parseHtml: function(e) {
			var i = this[0],
				n = t(this).val();
			if(document.selection) {
				var o = document.selection.createRange();
				o.text ? o.text = e : t(this).val(n + e)
			} else if("number" == typeof i.selectionStart) {
				var s = i.selectionStart,
					a = i.selectionEnd,
					r = n.substring(0, s),
					l = n.substring(a);
				t(this).val(r + e + l)
			} else t(this).val(n + e);
			i.selectionStart = i.selectionEnd = t(this).val().length, i.focus()
		}
	});
	var n = t("div.pulllog-box");
	n.find("button.btn-close").click(function() {
		n.remove()
	}), n.find(".pulllog-login").click(function(t) {
		getCookie("UserName") ? window.location.reload() : (window.csdn.loginBox.show(), t.preventDefault())
	});
	var o = function(e) {
		var e = e ? e : "body",
			i = t(e + " img"),
			n = navigator.userAgent.toLowerCase();
		return 0 !== i.length && (0 === t(".imgViewDom").length && (t("body").append('<div class="imgViewDom disnone" style="display: none;"><img src=""></div>'), t("body").append("<style>.imgViewDom{display:none;position:fixed;top:0;left:0;height:100%;width:100%;z-index:99999999;background: rgba(255, 255, 255,0.8);overflow: auto;display:-webkit-box;-webkit-box-align:center;-webkit-box-pack:center;display:-moz-box;-moz-box-align:center;-moz-box-pack:center;display:-o-box;-o-box-align:center;-o-box-pack:center;display:-ms-box;-ms-box-align:center;-ms-box-pack:center; display:box;box-align:center;box-pack:center;}.imgViewDom img{cursor: zoom-out;}</style>"), t(".imgViewDom").on("click", function() {
			n.indexOf("windows ") > -1 ? t("body").css({
				overflow: "auto",
				"margin-left": "0"
			}) : t("body").css({
				overflow: "auto"
			}), t(".imgViewDom").fadeOut(500).children("img").attr("src", "")
		})), void i.bind("click", function(e) {
			e.currentTarget.src && (t(".imgViewDom").fadeIn(500).children("img").css({
				width: e.currentTarget.naturalWidth,
				height: e.currentTarget.naturalheight
			}).attr("src", e.currentTarget.src), n.indexOf("windows ") > -1 ? t("body").css({
				overflow: "hidden",
				"margin-left": "-17px"
			}) : t("body").css({
				overflow: "hidden"
			}))
		}))
	};
	window.CSDNviewImg = o, window.csdn = window.csdn || {}, window.csdn.random_num = e, window.csdn = window.csdn ? window.csdn : {}, window.csdn.articleCollection = i
}(jQuery),
function() {
	function t() {
		$("div.article_content").removeAttr("style"), $(".hide-article-box").remove()
	}

	function e(e, i) {
		var n = $(window).height(),
			o = $("div.article_content"),
			s = o.height();
		s > n * i ? (o.css({
			height: n * i + "px",
			overflow: "hidden"
		}), e.click(t)) : e.parent().remove()
	}
	var i = $("#btn-readmore");
	$(".article-footer-bookmark-btn").click(window.csdn.articleCollection), i.length > 0 ? currentUserName ? e(i, 3) : e(i, .5) : $(".hide-article-box").addClass("hide-article-style"), window.csdn = window.csdn ? window.csdn : {}, window.csdn.clearReadMoreBtn = t
}(),
function() {
	"use strict";
	var t = this,
		e = t.Chart,
		i = function(t) {
			this.canvas = t.canvas, this.ctx = t;
			var e = function(t, e) {
					return t["offset" + e] ? t["offset" + e] : document.defaultView.getComputedStyle(t).getPropertyValue(e)
				},
				i = this.width = e(t.canvas, "Width"),
				o = this.height = e(t.canvas, "Height");
			t.canvas.width = i, t.canvas.height = o;
			var i = this.width = t.canvas.width,
				o = this.height = t.canvas.height;
			return this.aspectRatio = this.width / this.height, n.retinaScale(this), this
		};
	i.defaults = {
		global: {
			animation: !0,
			animationSteps: 60,
			animationEasing: "easeOutQuart",
			showScale: !0,
			scaleOverride: !1,
			scaleSteps: null,
			scaleStepWidth: null,
			scaleStartValue: null,
			scaleLineColor: "rgba(0,0,0,.1)",
			scaleLineWidth: 1,
			scaleShowLabels: !0,
			scaleLabel: "<%=value%>",
			scaleIntegersOnly: !0,
			scaleBeginAtZero: !1,
			scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
			scaleFontSize: 12,
			scaleFontStyle: "normal",
			scaleFontColor: "#666",
			responsive: !1,
			maintainAspectRatio: !0,
			showTooltips: !0,
			customTooltips: !1,
			tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
			tooltipFillColor: "rgba(0,0,0,0.8)",
			tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
			tooltipFontSize: 14,
			tooltipFontStyle: "normal",
			tooltipFontColor: "#fff",
			tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
			tooltipTitleFontSize: 14,
			tooltipTitleFontStyle: "bold",
			tooltipTitleFontColor: "#fff",
			tooltipYPadding: 6,
			tooltipXPadding: 6,
			tooltipCaretSize: 8,
			tooltipCornerRadius: 6,
			tooltipXOffset: 10,
			tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
			multiTooltipTemplate: "<%= value %>",
			multiTooltipKeyBackground: "#fff",
			onAnimationProgress: function() {},
			onAnimationComplete: function() {}
		}
	}, i.types = {};
	var n = i.helpers = {},
		o = n.each = function(t, e, i) {
			var n = Array.prototype.slice.call(arguments, 3);
			if(t)
				if(t.length === +t.length) {
					var o;
					for(o = 0; o < t.length; o++) e.apply(i, [t[o], o].concat(n))
				} else
					for(var s in t) e.apply(i, [t[s], s].concat(n))
		},
		s = n.clone = function(t) {
			var e = {};
			return o(t, function(i, n) {
				t.hasOwnProperty(n) && (e[n] = i)
			}), e
		},
		a = n.extend = function(t) {
			return o(Array.prototype.slice.call(arguments, 1), function(e) {
				o(e, function(i, n) {
					e.hasOwnProperty(n) && (t[n] = i)
				})
			}), t
		},
		r = n.merge = function(t, e) {
			var i = Array.prototype.slice.call(arguments, 0);
			return i.unshift({}), a.apply(null, i)
		},
		l = n.indexOf = function(t, e) {
			if(Array.prototype.indexOf) return t.indexOf(e);
			for(var i = 0; i < t.length; i++)
				if(t[i] === e) return i;
			return -1
		},
		c = (n.where = function(t, e) {
			var i = [];
			return n.each(t, function(t) {
				e(t) && i.push(t)
			}), i
		}, n.findNextWhere = function(t, e, i) {
			i || (i = -1);
			for(var n = i + 1; n < t.length; n++) {
				var o = t[n];
				if(e(o)) return o
			}
		}, n.findPreviousWhere = function(t, e, i) {
			i || (i = t.length);
			for(var n = i - 1; n >= 0; n--) {
				var o = t[n];
				if(e(o)) return o
			}
		}, n.inherits = function(t) {
			var e = this,
				i = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
					return e.apply(this, arguments)
				},
				n = function() {
					this.constructor = i
				};
			return n.prototype = e.prototype, i.prototype = new n, i.extend = c, t && a(i.prototype, t), i.__super__ = e.prototype, i
		}),
		h = n.noop = function() {},
		d = n.uid = function() {
			var t = 0;
			return function() {
				return "chart-" + t++
			}
		}(),
		u = n.warn = function(t) {
			window.console && "function" == typeof window.console.warn && console.warn(t)
		},
		p = n.amd = "function" == typeof define && define.amd,
		m = n.isNumber = function(t) {
			return !isNaN(parseFloat(t)) && isFinite(t)
		},
		f = n.max = function(t) {
			return Math.max.apply(Math, t)
		},
		g = n.min = function(t) {
			return Math.min.apply(Math, t)
		},
		v = (n.cap = function(t, e, i) {
			if(m(e)) {
				if(t > e) return e
			} else if(m(i) && t < i) return i;
			return t
		}, n.getDecimalPlaces = function(t) {
			return t % 1 !== 0 && m(t) ? t.toString().split(".")[1].length : 0
		}),
		b = n.radians = function(t) {
			return t * (Math.PI / 180)
		},
		w = (n.getAngleFromPoint = function(t, e) {
			var i = e.x - t.x,
				n = e.y - t.y,
				o = Math.sqrt(i * i + n * n),
				s = 2 * Math.PI + Math.atan2(n, i);
			return i < 0 && n < 0 && (s += 2 * Math.PI), {
				angle: s,
				distance: o
			}
		}, n.aliasPixel = function(t) {
			return t % 2 === 0 ? 0 : .5
		}),
		x = (n.splineCurve = function(t, e, i, n) {
			var o = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)),
				s = Math.sqrt(Math.pow(i.x - e.x, 2) + Math.pow(i.y - e.y, 2)),
				a = n * o / (o + s),
				r = n * s / (o + s);
			return {
				inner: {
					x: e.x - a * (i.x - t.x),
					y: e.y - a * (i.y - t.y)
				},
				outer: {
					x: e.x + r * (i.x - t.x),
					y: e.y + r * (i.y - t.y)
				}
			}
		}, n.calculateOrderOfMagnitude = function(t) {
			return Math.floor(Math.log(t) / Math.LN10)
		}),
		y = (n.calculateScaleRange = function(t, e, i, n, o) {
			var s = 2,
				a = Math.floor(e / (1.5 * i)),
				r = s >= a,
				l = f(t),
				c = g(t);
			l === c && (l += .5, c >= .5 && !n ? c -= .5 : l += .5);
			for(var h = Math.abs(l - c), d = x(h), u = Math.ceil(l / (1 * Math.pow(10, d))) * Math.pow(10, d), p = n ? 0 : Math.floor(c / (1 * Math.pow(10, d))) * Math.pow(10, d), m = u - p, v = Math.pow(10, d), b = Math.round(m / v);
				(b > a || 2 * b < a) && !r;)
				if(b > a) v *= 2, b = Math.round(m / v), b % 1 !== 0 && (r = !0);
				else if(o && d >= 0) {
				if(v / 2 % 1 !== 0) break;
				v /= 2, b = Math.round(m / v)
			} else v /= 2, b = Math.round(m / v);
			return r && (b = s, v = m / b), {
				steps: b,
				stepValue: v,
				min: p,
				max: p + b * v
			}
		}, n.template = function(t, e) {
			function i(t, e) {
				var i = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : n[t] = n[t];
				return e ? i(e) : i
			}
			if(t instanceof Function) return t(e);
			var n = {};
			return i(t, e)
		}),
		C = (n.generateLabels = function(t, e, i, n) {
			var s = new Array(e);
			return labelTemplateString && o(s, function(e, o) {
				s[o] = y(t, {
					value: i + n * (o + 1)
				})
			}), s
		}, n.easingEffects = {
			linear: function(t) {
				return t
			},
			easeInQuad: function(t) {
				return t * t
			},
			easeOutQuad: function(t) {
				return -1 * t * (t - 2)
			},
			easeInOutQuad: function(t) {
				return(t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
			},
			easeInCubic: function(t) {
				return t * t * t
			},
			easeOutCubic: function(t) {
				return 1 * ((t = t / 1 - 1) * t * t + 1)
			},
			easeInOutCubic: function(t) {
				return(t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
			},
			easeInQuart: function(t) {
				return t * t * t * t
			},
			easeOutQuart: function(t) {
				return -1 * ((t = t / 1 - 1) * t * t * t - 1)
			},
			easeInOutQuart: function(t) {
				return(t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
			},
			easeInQuint: function(t) {
				return 1 * (t /= 1) * t * t * t * t
			},
			easeOutQuint: function(t) {
				return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
			},
			easeInOutQuint: function(t) {
				return(t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
			},
			easeInSine: function(t) {
				return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
			},
			easeOutSine: function(t) {
				return 1 * Math.sin(t / 1 * (Math.PI / 2))
			},
			easeInOutSine: function(t) {
				return -.5 * (Math.cos(Math.PI * t / 1) - 1)
			},
			easeInExpo: function(t) {
				return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
			},
			easeOutExpo: function(t) {
				return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
			},
			easeInOutExpo: function(t) {
				return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
			},
			easeInCirc: function(t) {
				return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
			},
			easeOutCirc: function(t) {
				return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
			},
			easeInOutCirc: function(t) {
				return(t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
			},
			easeInElastic: function(t) {
				var e = 1.70158,
					i = 0,
					n = 1;
				return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i)))
			},
			easeOutElastic: function(t) {
				var e = 1.70158,
					i = 0,
					n = 1;
				return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / i) + 1)
			},
			easeInOutElastic: function(t) {
				var e = 1.70158,
					i = 0,
					n = 1;
				return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = 1 * (.3 * 1.5)), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), t < 1 ? -.5 * (n * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i)) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i) * .5 + 1)
			},
			easeInBack: function(t) {
				var e = 1.70158;
				return 1 * (t /= 1) * t * ((e + 1) * t - e)
			},
			easeOutBack: function(t) {
				var e = 1.70158;
				return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
			},
			easeInOutBack: function(t) {
				var e = 1.70158;
				return(t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
			},
			easeInBounce: function(t) {
				return 1 - C.easeOutBounce(1 - t)
			},
			easeOutBounce: function(t) {
				return(t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : t < 2 / 2.75 ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
			},
			easeInOutBounce: function(t) {
				return t < .5 ? .5 * C.easeInBounce(2 * t) : .5 * C.easeOutBounce(2 * t - 1) + .5
			}
		}),
		S = n.requestAnimFrame = function() {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
				return window.setTimeout(t, 1e3 / 60)
			}
		}(),
		k = n.cancelAnimFrame = function() {
			return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(t) {
				return window.clearTimeout(t, 1e3 / 60)
			}
		}(),
		_ = (n.animationLoop = function(t, e, i, n, o, s) {
			var a = 0,
				r = C[i] || C.linear,
				l = function() {
					a++;
					var i = a / e,
						c = r(i);
					t.call(s, c, i, a), n.call(s, c, i), a < e ? s.animationFrame = S(l) : o.apply(s)
				};
			S(l)
		}, n.getRelativePosition = function(t) {
			var e, i, n = t.originalEvent || t,
				o = t.currentTarget || t.srcElement,
				s = o.getBoundingClientRect();
			return n.touches ? (e = n.touches[0].clientX - s.left, i = n.touches[0].clientY - s.top) : (e = n.clientX - s.left, i = n.clientY - s.top), {
				x: e,
				y: i
			}
		}, n.addEvent = function(t, e, i) {
			t.addEventListener ? t.addEventListener(e, i) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i
		}),
		$ = n.removeEvent = function(t, e, i) {
			t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent ? t.detachEvent("on" + e, i) : t["on" + e] = h
		},
		P = (n.bindEvents = function(t, e, i) {
			t.events || (t.events = {}), o(e, function(e) {
				t.events[e] = function() {
					i.apply(t, arguments)
				}, _(t.chart.canvas, e, t.events[e])
			})
		}, n.unbindEvents = function(t, e) {
			o(e, function(e, i) {
				$(t.chart.canvas, i, e)
			})
		}),
		T = n.getMaximumWidth = function(t) {
			var e = t.parentNode;
			return e.clientWidth
		},
		L = n.getMaximumHeight = function(t) {
			var e = t.parentNode;
			return e.clientHeight
		},
		B = (n.getMaximumSize = n.getMaximumWidth, n.retinaScale = function(t) {
			var e = t.ctx,
				i = t.canvas.width,
				n = t.canvas.height;
			window.devicePixelRatio && (e.canvas.style.width = i + "px", e.canvas.style.height = n + "px", e.canvas.height = n * window.devicePixelRatio, e.canvas.width = i * window.devicePixelRatio, e.scale(window.devicePixelRatio, window.devicePixelRatio))
		}),
		I = n.clear = function(t) {
			t.ctx.clearRect(0, 0, t.width, t.height)
		},
		R = n.fontString = function(t, e, i) {
			return e + " " + t + "px " + i
		},
		A = n.longestText = function(t, e, i) {
			t.font = e;
			var n = 0;
			return o(i, function(e) {
				var i = t.measureText(e).width;
				n = i > n ? i : n
			}), n
		},
		M = n.drawRoundedRectangle = function(t, e, i, n, o, s) {
			t.beginPath(), t.moveTo(e + s, i), t.lineTo(e + n - s, i), t.quadraticCurveTo(e + n, i, e + n, i + s), t.lineTo(e + n, i + o - s), t.quadraticCurveTo(e + n, i + o, e + n - s, i + o), t.lineTo(e + s, i + o), t.quadraticCurveTo(e, i + o, e, i + o - s), t.lineTo(e, i + s), t.quadraticCurveTo(e, i, e + s, i), t.closePath()
		};
	i.instances = {}, i.Type = function(t, e, n) {
		this.options = e, this.chart = n, this.id = d(), i.instances[this.id] = this, e.responsive && this.resize(), this.initialize.call(this, t)
	}, a(i.Type.prototype, {
		initialize: function() {
			return this
		},
		clear: function() {
			return I(this.chart), this
		},
		stop: function() {
			return k(this.animationFrame), this
		},
		resize: function(t) {
			this.stop();
			var e = this.chart.canvas,
				i = T(this.chart.canvas),
				n = this.options.maintainAspectRatio ? i / this.chart.aspectRatio : L(this.chart.canvas);
			return e.width = this.chart.width = i, e.height = this.chart.height = n, B(this.chart), "function" == typeof t && t.apply(this, Array.prototype.slice.call(arguments, 1)), this
		},
		reflow: h,
		render: function(t) {
			return t && this.reflow(), this.options.animation && !t ? n.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this) : (this.draw(), this.options.onAnimationComplete.call(this)), this
		},
		generateLegend: function() {
			return y(this.options.legendTemplate, this)
		},
		destroy: function() {
			this.clear(), P(this, this.events);
			var t = this.chart.canvas;
			t.width = this.chart.width, t.height = this.chart.height, t.style.removeProperty ? (t.style.removeProperty("width"), t.style.removeProperty("height")) : (t.style.removeAttribute("width"), t.style.removeAttribute("height")), delete i.instances[this.id]
		},
		showTooltip: function(t, e) {
			"undefined" == typeof this.activeElements && (this.activeElements = []);
			var s = function(t) {
				var e = !1;
				return t.length !== this.activeElements.length ? e = !0 : (o(t, function(t, i) {
					t !== this.activeElements[i] && (e = !0)
				}, this), e)
			}.call(this, t);
			if(s || e) {
				if(this.activeElements = t, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), t.length > 0)
					if(this.datasets && this.datasets.length > 1) {
						for(var a, r, c = this.datasets.length - 1; c >= 0 && (a = this.datasets[c].points || this.datasets[c].bars || this.datasets[c].segments, r = l(a, t[0]), r === -1); c--);
						var h = [],
							d = [],
							u = function(t) {
								var e, i, o, s, a, l = [],
									c = [],
									u = [];
								return n.each(this.datasets, function(t) {
									e = t.points || t.bars || t.segments, e[r] && e[r].hasValue() && l.push(e[r])
								}), n.each(l, function(t) {
									c.push(t.x), u.push(t.y), h.push(n.template(this.options.multiTooltipTemplate, t)), d.push({
										fill: t._saved.fillColor || t.fillColor,
										stroke: t._saved.strokeColor || t.strokeColor
									})
								}, this), a = g(u), o = f(u), s = g(c), i = f(c), {
									x: s > this.chart.width / 2 ? s : i,
									y: (a + o) / 2
								}
							}.call(this, r);
						new i.MultiTooltip({
							x: u.x,
							y: u.y,
							xPadding: this.options.tooltipXPadding,
							yPadding: this.options.tooltipYPadding,
							xOffset: this.options.tooltipXOffset,
							fillColor: this.options.tooltipFillColor,
							textColor: this.options.tooltipFontColor,
							fontFamily: this.options.tooltipFontFamily,
							fontStyle: this.options.tooltipFontStyle,
							fontSize: this.options.tooltipFontSize,
							titleTextColor: this.options.tooltipTitleFontColor,
							titleFontFamily: this.options.tooltipTitleFontFamily,
							titleFontStyle: this.options.tooltipTitleFontStyle,
							titleFontSize: this.options.tooltipTitleFontSize,
							cornerRadius: this.options.tooltipCornerRadius,
							labels: h,
							legendColors: d,
							legendColorBackground: this.options.multiTooltipKeyBackground,
							title: t[0].label,
							chart: this.chart,
							ctx: this.chart.ctx,
							custom: this.options.customTooltips
						}).draw()
					} else o(t, function(t) {
						var e = t.tooltipPosition();
						new i.Tooltip({
							x: Math.round(e.x),
							y: Math.round(e.y),
							xPadding: this.options.tooltipXPadding,
							yPadding: this.options.tooltipYPadding,
							fillColor: this.options.tooltipFillColor,
							textColor: this.options.tooltipFontColor,
							fontFamily: this.options.tooltipFontFamily,
							fontStyle: this.options.tooltipFontStyle,
							fontSize: this.options.tooltipFontSize,
							caretHeight: this.options.tooltipCaretSize,
							cornerRadius: this.options.tooltipCornerRadius,
							text: y(this.options.tooltipTemplate, t),
							chart: this.chart,
							custom: this.options.customTooltips
						}).draw()
					}, this);
				return this
			}
		},
		toBase64Image: function() {
			return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
		}
	}), i.Type.extend = function(t) {
		var e = this,
			n = function() {
				return e.apply(this, arguments)
			};
		if(n.prototype = s(e.prototype), a(n.prototype, t), n.extend = i.Type.extend, t.name || e.prototype.name) {
			var o = t.name || e.prototype.name,
				l = i.defaults[e.prototype.name] ? s(i.defaults[e.prototype.name]) : {};
			i.defaults[o] = a(l, t.defaults), i.types[o] = n, i.prototype[o] = function(t, e) {
				var s = r(i.defaults.global, i.defaults[o], e || {});
				return new n(t, s, this)
			}
		} else u("Name not provided for this chart, so it hasn't been registered");
		return e
	}, i.Element = function(t) {
		a(this, t), this.initialize.apply(this, arguments), this.save()
	}, a(i.Element.prototype, {
		initialize: function() {},
		restore: function(t) {
			return t ? o(t, function(t) {
				this[t] = this._saved[t]
			}, this) : a(this, this._saved), this
		},
		save: function() {
			return this._saved = s(this), delete this._saved._saved, this
		},
		update: function(t) {
			return o(t, function(t, e) {
				this._saved[e] = this[e], this[e] = t
			}, this), this
		},
		transition: function(t, e) {
			return o(t, function(t, i) {
				this[i] = (t - this._saved[i]) * e + this._saved[i]
			}, this), this
		},
		tooltipPosition: function() {
			return {
				x: this.x,
				y: this.y
			}
		},
		hasValue: function() {
			return m(this.value)
		}
	}), i.Element.extend = c, i.Point = i.Element.extend({
		display: !0,
		inRange: function(t, e) {
			var i = this.hitDetectionRadius + this.radius;
			return Math.pow(t - this.x, 2) + Math.pow(e - this.y, 2) < Math.pow(i, 2)
		},
		draw: function() {
			if(this.display) {
				var t = this.ctx;
				t.beginPath(), t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), t.closePath(), t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.fillStyle = this.fillColor, t.fill(), t.stroke()
			}
		}
	}), i.Arc = i.Element.extend({
		inRange: function(t, e) {
			var i = n.getAngleFromPoint(this, {
					x: t,
					y: e
				}),
				o = i.angle >= this.startAngle && i.angle <= this.endAngle,
				s = i.distance >= this.innerRadius && i.distance <= this.outerRadius;
			return o && s
		},
		tooltipPosition: function() {
			var t = this.startAngle + (this.endAngle - this.startAngle) / 2,
				e = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
			return {
				x: this.x + Math.cos(t) * e,
				y: this.y + Math.sin(t) * e
			}
		},
		draw: function(t) {
			var e = this.ctx;
			e.beginPath(), e.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle), e.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, !0), e.closePath(), e.strokeStyle = this.strokeColor, e.lineWidth = this.strokeWidth, e.fillStyle = this.fillColor, e.fill(), e.lineJoin = "bevel", this.showStroke && e.stroke()
		}
	}), i.Rectangle = i.Element.extend({
		draw: function() {
			var t = this.ctx,
				e = this.width / 2,
				i = this.x - e,
				n = this.x + e,
				o = this.base - (this.base - this.y),
				s = this.strokeWidth / 2;
			this.showStroke && (i += s, n -= s, o += s), t.beginPath(), t.fillStyle = this.fillColor, t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.moveTo(i, this.base), t.lineTo(i, o), t.lineTo(n, o), t.lineTo(n, this.base), t.fill(), this.showStroke && t.stroke()
		},
		height: function() {
			return this.base - this.y
		},
		inRange: function(t, e) {
			return t >= this.x - this.width / 2 && t <= this.x + this.width / 2 && e >= this.y && e <= this.base
		}
	}), i.Tooltip = i.Element.extend({
		draw: function() {
			var t = this.chart.ctx;
			t.font = R(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";
			var e = this.caretPadding = 2,
				i = t.measureText(this.text).width + 2 * this.xPadding,
				n = this.fontSize + 2 * this.yPadding,
				o = n + this.caretHeight + e;
			this.x + i / 2 > this.chart.width ? this.xAlign = "left" : this.x - i / 2 < 0 && (this.xAlign = "right"), this.y - o < 0 && (this.yAlign = "below");
			var s = this.x - i / 2,
				a = this.y - o;
			if(t.fillStyle = this.fillColor, this.custom) this.custom(this);
			else {
				switch(this.yAlign) {
					case "above":
						t.beginPath(), t.moveTo(this.x, this.y - e), t.lineTo(this.x + this.caretHeight, this.y - (e + this.caretHeight)), t.lineTo(this.x - this.caretHeight, this.y - (e + this.caretHeight)), t.closePath(), t.fill();
						break;
					case "below":
						a = this.y + e + this.caretHeight, t.beginPath(), t.moveTo(this.x, this.y + e), t.lineTo(this.x + this.caretHeight, this.y + e + this.caretHeight), t.lineTo(this.x - this.caretHeight, this.y + e + this.caretHeight), t.closePath(), t.fill()
				}
				switch(this.xAlign) {
					case "left":
						s = this.x - i + (this.cornerRadius + this.caretHeight);
						break;
					case "right":
						s = this.x - (this.cornerRadius + this.caretHeight)
				}
				M(t, s, a, i, n, this.cornerRadius), t.fill(), t.fillStyle = this.textColor, t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.text, s + i / 2, a + n / 2)
			}
		}
	}), i.MultiTooltip = i.Element.extend({
		initialize: function() {
			this.font = R(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = R(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + 1.5 * this.titleFontSize, this.ctx.font = this.titleFont;
			var t = this.ctx.measureText(this.title).width,
				e = A(this.ctx, this.font, this.labels) + this.fontSize + 3,
				i = f([e, t]);
			this.width = i + 2 * this.xPadding;
			var n = this.height / 2;
			this.y - n < 0 ? this.y = n : this.y + n > this.chart.height && (this.y = this.chart.height - n), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset
		},
		getLineHeight: function(t) {
			var e = this.y - this.height / 2 + this.yPadding,
				i = t - 1;
			return 0 === t ? e + this.titleFontSize / 2 : e + (1.5 * this.fontSize * i + this.fontSize / 2) + 1.5 * this.titleFontSize
		},
		draw: function() {
			if(this.custom) this.custom(this);
			else {
				M(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
				var t = this.ctx;
				t.fillStyle = this.fillColor, t.fill(), t.closePath(), t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = this.titleTextColor, t.font = this.titleFont, t.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), t.font = this.font, n.each(this.labels, function(e, i) {
					t.fillStyle = this.textColor, t.fillText(e, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(i + 1)), t.fillStyle = this.legendColorBackground, t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize), t.fillStyle = this.legendColors[i].fill, t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
				}, this)
			}
		}
	}), i.Scale = i.Element.extend({
		initialize: function() {
			this.fit()
		},
		buildYLabels: function() {
			this.yLabels = [];
			for(var t = v(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(y(this.templateString, {
				value: (this.min + e * this.stepValue).toFixed(t)
			}));
			this.yLabelWidth = this.display && this.showLabels ? A(this.ctx, this.font, this.yLabels) : 0
		},
		addXLabel: function(t) {
			this.xLabels.push(t), this.valuesCount++, this.fit()
		},
		removeXLabel: function() {
			this.xLabels.shift(), this.valuesCount--, this.fit()
		},
		fit: function() {
			this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;
			var t, e = this.endPoint - this.startPoint;
			for(this.calculateYRange(e), this.buildYLabels(), this.calculateXLabelRotation(); e > this.endPoint - this.startPoint;) e = this.endPoint - this.startPoint, t = this.yLabelWidth, this.calculateYRange(e), this.buildYLabels(), t < this.yLabelWidth && this.calculateXLabelRotation()
		},
		calculateXLabelRotation: function() {
			this.ctx.font = this.font;
			var t, e, i = this.ctx.measureText(this.xLabels[0]).width,
				n = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
			if(this.xScalePaddingRight = n / 2 + 3, this.xScalePaddingLeft = i / 2 > this.yLabelWidth + 10 ? i / 2 : this.yLabelWidth + 10, this.xLabelRotation = 0, this.display) {
				var o, s = A(this.ctx, this.font, this.xLabels);
				this.xLabelWidth = s;
				for(var a = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > a && 0 === this.xLabelRotation || this.xLabelWidth > a && this.xLabelRotation <= 90 && this.xLabelRotation > 0;) o = Math.cos(b(this.xLabelRotation)), t = o * i, e = o * n, t + this.fontSize / 2 > this.yLabelWidth + 8 && (this.xScalePaddingLeft = t + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = o * s;
				this.xLabelRotation > 0 && (this.endPoint -= Math.sin(b(this.xLabelRotation)) * s + 3)
			} else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding
		},
		calculateYRange: h,
		drawingArea: function() {
			return this.startPoint - this.endPoint
		},
		calculateY: function(t) {
			var e = this.drawingArea() / (this.min - this.max);
			return this.endPoint - e * (t - this.min)
		},
		calculateX: function(t) {
			var e = (this.xLabelRotation > 0, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)),
				i = e / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1),
				n = i * t + this.xScalePaddingLeft;
			return this.offsetGridLines && (n += i / 2), Math.round(n)
		},
		update: function(t) {
			n.extend(this, t), this.fit()
		},
		draw: function() {
			var t = this.ctx,
				e = (this.endPoint - this.startPoint) / this.steps,
				i = Math.round(this.xScalePaddingLeft);
			this.display && (t.fillStyle = this.textColor, t.font = this.font, o(this.yLabels, function(o, s) {
				var a = this.endPoint - e * s,
					r = Math.round(a),
					l = this.showHorizontalLines;
				t.textAlign = "right", t.textBaseline = "middle", this.showLabels && t.fillText(o, i - 10, a), 0 !== s || l || (l = !0), l && t.beginPath(), s > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), r += n.aliasPixel(t.lineWidth), l && (t.moveTo(i, r), t.lineTo(this.width, r), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(i - 5, r), t.lineTo(i, r), t.stroke(), t.closePath()
			}, this), o(this.xLabels, function(e, i) {
				var n = this.calculateX(i) + w(this.lineWidth),
					o = this.calculateX(i - (this.offsetGridLines ? .5 : 0)) + w(this.lineWidth),
					s = this.xLabelRotation > 0,
					a = this.showVerticalLines;
				0 !== i || a || (a = !0), a && t.beginPath(), i > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), a && (t.moveTo(o, this.endPoint), t.lineTo(o, this.startPoint - 3), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(o, this.endPoint), t.lineTo(o, this.endPoint + 5), t.stroke(), t.closePath(), t.save(), t.translate(n, s ? this.endPoint + 12 : this.endPoint + 8), t.rotate(b(this.xLabelRotation) * -1), t.font = this.font, t.textAlign = s ? "right" : "center", t.textBaseline = s ? "middle" : "top", t.fillText(e, 0, 0), t.restore()
			}, this))
		}
	}), i.RadialScale = i.Element.extend({
		initialize: function() {
			this.size = g([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
		},
		calculateCenterOffset: function(t) {
			var e = this.drawingArea / (this.max - this.min);
			return(t - this.min) * e
		},
		update: function() {
			this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), this.buildYLabels()
		},
		buildYLabels: function() {
			this.yLabels = [];
			for(var t = v(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(y(this.templateString, {
				value: (this.min + e * this.stepValue).toFixed(t)
			}))
		},
		getCircumference: function() {
			return 2 * Math.PI / this.valuesCount
		},
		setScaleSize: function() {
			var t, e, i, n, o, s, a, r, l, c, h, d, u = g([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]),
				p = this.width,
				f = 0;
			for(this.ctx.font = R(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), e = 0; e < this.valuesCount; e++) t = this.getPointPosition(e, u), i = this.ctx.measureText(y(this.templateString, {
				value: this.labels[e]
			})).width + 5, 0 === e || e === this.valuesCount / 2 ? (n = i / 2, t.x + n > p && (p = t.x + n, o = e), t.x - n < f && (f = t.x - n, a = e)) : e < this.valuesCount / 2 ? t.x + i > p && (p = t.x + i, o = e) : e > this.valuesCount / 2 && t.x - i < f && (f = t.x - i, a = e);
			l = f, c = Math.ceil(p - this.width), s = this.getIndexAngle(o), r = this.getIndexAngle(a), h = c / Math.sin(s + Math.PI / 2), d = l / Math.sin(r + Math.PI / 2), h = m(h) ? h : 0, d = m(d) ? d : 0, this.drawingArea = u - (d + h) / 2, this.setCenterPoint(d, h)
		},
		setCenterPoint: function(t, e) {
			var i = this.width - e - this.drawingArea,
				n = t + this.drawingArea;
			this.xCenter = (n + i) / 2, this.yCenter = this.height / 2
		},
		getIndexAngle: function(t) {
			var e = 2 * Math.PI / this.valuesCount;
			return t * e - Math.PI / 2
		},
		getPointPosition: function(t, e) {
			var i = this.getIndexAngle(t);
			return {
				x: Math.cos(i) * e + this.xCenter,
				y: Math.sin(i) * e + this.yCenter
			}
		},
		draw: function() {
			if(this.display) {
				var t = this.ctx;
				if(o(this.yLabels, function(e, i) {
						if(i > 0) {
							var n, o = i * (this.drawingArea / this.steps),
								s = this.yCenter - o;
							if(this.lineWidth > 0)
								if(t.strokeStyle = this.lineColor, t.lineWidth = this.lineWidth, this.lineArc) t.beginPath(), t.arc(this.xCenter, this.yCenter, o, 0, 2 * Math.PI), t.closePath(), t.stroke();
								else {
									t.beginPath();
									for(var a = 0; a < this.valuesCount; a++) n = this.getPointPosition(a, this.calculateCenterOffset(this.min + i * this.stepValue)), 0 === a ? t.moveTo(n.x, n.y) : t.lineTo(n.x, n.y);
									t.closePath(), t.stroke()
								}
							if(this.showLabels) {
								if(t.font = R(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
									var r = t.measureText(e).width;
									t.fillStyle = this.backdropColor, t.fillRect(this.xCenter - r / 2 - this.backdropPaddingX, s - this.fontSize / 2 - this.backdropPaddingY, r + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
								}
								t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = this.fontColor, t.fillText(e, this.xCenter, s)
							}
						}
					}, this), !this.lineArc) {
					t.lineWidth = this.angleLineWidth, t.strokeStyle = this.angleLineColor;
					for(var e = this.valuesCount - 1; e >= 0; e--) {
						if(this.angleLineWidth > 0) {
							var i = this.getPointPosition(e, this.calculateCenterOffset(this.max));
							t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(i.x, i.y), t.stroke(), t.closePath()
						}
						var n = this.getPointPosition(e, this.calculateCenterOffset(this.max) + 5);
						t.font = R(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), t.fillStyle = this.pointLabelFontColor;
						var s = this.labels.length,
							a = this.labels.length / 2,
							r = a / 2,
							l = e < r || e > s - r,
							c = e === r || e === s - r;
						0 === e ? t.textAlign = "center" : e === a ? t.textAlign = "center" : e < a ? t.textAlign = "left" : t.textAlign = "right", c ? t.textBaseline = "middle" : l ? t.textBaseline = "bottom" : t.textBaseline = "top", t.fillText(this.labels[e], n.x, n.y)
					}
				}
			}
		}
	}), n.addEvent(window, "resize", function() {
		var t;
		return function() {
			clearTimeout(t), t = setTimeout(function() {
				o(i.instances, function(t) {
					t.options.responsive && t.resize(t.render, !0)
				})
			}, 50)
		}
	}()), p ? define(function() {
		return i
	}) : "object" == typeof module && module.exports && (module.exports = i), t.Chart = i, i.noConflict = function() {
		return t.Chart = e, i
	}
}.call(this),
	function() {
		"use strict";
		var t = this,
			e = t.Chart,
			i = e.helpers,
			n = {
				scaleBeginAtZero: !0,
				scaleShowGridLines: !0,
				scaleGridLineColor: "rgba(0,0,0,.05)",
				scaleGridLineWidth: 1,
				scaleShowHorizontalLines: !0,
				scaleShowVerticalLines: !0,
				barShowStroke: !0,
				barStrokeWidth: 2,
				barValueSpacing: 5,
				barDatasetSpacing: 1,
				legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
			};
		e.Type.extend({
			name: "Bar",
			defaults: n,
			initialize: function(t) {
				var n = this.options;
				this.ScaleClass = e.Scale.extend({
					offsetGridLines: !0,
					calculateBarX: function(t, e, i) {
						var o = this.calculateBaseWidth(),
							s = this.calculateX(i) - o / 2,
							a = this.calculateBarWidth(t);
						return s + a * e + e * n.barDatasetSpacing + a / 2
					},
					calculateBaseWidth: function() {
						return this.calculateX(1) - this.calculateX(0) - 2 * n.barValueSpacing
					},
					calculateBarWidth: function(t) {
						var e = this.calculateBaseWidth() - (t - 1) * n.barDatasetSpacing;
						return e / t
					}
				}), this.datasets = [], this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
					var e = "mouseout" !== t.type ? this.getBarsAtEvent(t) : [];
					this.eachBars(function(t) {
						t.restore(["fillColor", "strokeColor"])
					}), i.each(e, function(t) {
						t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
					}), this.showTooltip(e)
				}), this.BarClass = e.Rectangle.extend({
					strokeWidth: this.options.barStrokeWidth,
					showStroke: this.options.barShowStroke,
					ctx: this.chart.ctx
				}), i.each(t.datasets, function(e, n) {
					var o = {
						label: e.label || null,
						fillColor: e.fillColor,
						strokeColor: e.strokeColor,
						bars: []
					};
					this.datasets.push(o), i.each(e.data, function(i, n) {
						o.bars.push(new this.BarClass({
							value: i,
							label: t.labels[n],
							datasetLabel: e.label,
							strokeColor: e.strokeColor,
							fillColor: e.fillColor,
							highlightFill: e.highlightFill || e.fillColor,
							highlightStroke: e.highlightStroke || e.strokeColor
						}))
					}, this)
				}, this), this.buildScale(t.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function(t, e, n) {
					i.extend(t, {
						width: this.scale.calculateBarWidth(this.datasets.length),
						x: this.scale.calculateBarX(this.datasets.length, n, e),
						y: this.scale.endPoint
					}), t.save()
				}, this), this.render()
			},
			update: function() {
				this.scale.update(), i.each(this.activeElements, function(t) {
					t.restore(["fillColor", "strokeColor"])
				}), this.eachBars(function(t) {
					t.save()
				}), this.render()
			},
			eachBars: function(t) {
				i.each(this.datasets, function(e, n) {
					i.each(e.bars, t, this, n)
				}, this)
			},
			getBarsAtEvent: function(t) {
				for(var e, n = [], o = i.getRelativePosition(t), s = function(t) {
						n.push(t.bars[e])
					}, a = 0; a < this.datasets.length; a++)
					for(e = 0; e < this.datasets[a].bars.length; e++)
						if(this.datasets[a].bars[e].inRange(o.x, o.y)) return i.each(this.datasets, s), n;
				return n
			},
			buildScale: function(t) {
				var e = this,
					n = function() {
						var t = [];
						return e.eachBars(function(e) {
							t.push(e.value)
						}), t
					},
					o = {
						templateString: this.options.scaleLabel,
						height: this.chart.height,
						width: this.chart.width,
						ctx: this.chart.ctx,
						textColor: this.options.scaleFontColor,
						fontSize: this.options.scaleFontSize,
						fontStyle: this.options.scaleFontStyle,
						fontFamily: this.options.scaleFontFamily,
						valuesCount: t.length,
						beginAtZero: this.options.scaleBeginAtZero,
						integersOnly: this.options.scaleIntegersOnly,
						calculateYRange: function(t) {
							var e = i.calculateScaleRange(n(), t, this.fontSize, this.beginAtZero, this.integersOnly);
							i.extend(this, e)
						},
						xLabels: t,
						font: i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
						lineWidth: this.options.scaleLineWidth,
						lineColor: this.options.scaleLineColor,
						showHorizontalLines: this.options.scaleShowHorizontalLines,
						showVerticalLines: this.options.scaleShowVerticalLines,
						gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
						gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
						padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
						showLabels: this.options.scaleShowLabels,
						display: this.options.showScale
					};
				this.options.scaleOverride && i.extend(o, {
					calculateYRange: i.noop,
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
				}), this.scale = new this.ScaleClass(o)
			},
			addData: function(t, e) {
				i.each(t, function(t, i) {
					this.datasets[i].bars.push(new this.BarClass({
						value: t,
						label: e,
						x: this.scale.calculateBarX(this.datasets.length, i, this.scale.valuesCount + 1),
						y: this.scale.endPoint,
						width: this.scale.calculateBarWidth(this.datasets.length),
						base: this.scale.endPoint,
						strokeColor: this.datasets[i].strokeColor,
						fillColor: this.datasets[i].fillColor
					}))
				}, this), this.scale.addXLabel(e), this.update()
			},
			removeData: function() {
				this.scale.removeXLabel(), i.each(this.datasets, function(t) {
					t.bars.shift()
				}, this), this.update()
			},
			reflow: function() {
				i.extend(this.BarClass.prototype, {
					y: this.scale.endPoint,
					base: this.scale.endPoint
				});
				var t = i.extend({
					height: this.chart.height,
					width: this.chart.width
				});
				this.scale.update(t)
			},
			draw: function(t) {
				var e = t || 1;
				this.clear();
				this.chart.ctx;
				this.scale.draw(e), i.each(this.datasets, function(t, n) {
					i.each(t.bars, function(t, i) {
						t.hasValue() && (t.base = this.scale.endPoint, t.transition({
							x: this.scale.calculateBarX(this.datasets.length, n, i),
							y: this.scale.calculateY(t.value),
							width: this.scale.calculateBarWidth(this.datasets.length)
						}, e).draw())
					}, this)
				}, this)
			}
		})
	}.call(this),
	function() {
		"use strict";
		var t = this,
			e = t.Chart,
			i = e.helpers,
			n = {
				segmentShowStroke: !0,
				segmentStrokeColor: "#fff",
				segmentStrokeWidth: 2,
				percentageInnerCutout: 50,
				animationSteps: 100,
				animationEasing: "easeOutBounce",
				animateRotate: !0,
				animateScale: !1,
				legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
			};
		e.Type.extend({
			name: "Doughnut",
			defaults: n,
			initialize: function(t) {
				this.segments = [], this.outerRadius = (i.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = e.Arc.extend({
					ctx: this.chart.ctx,
					x: this.chart.width / 2,
					y: this.chart.height / 2
				}), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
					var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
					i.each(this.segments, function(t) {
						t.restore(["fillColor"])
					}), i.each(e, function(t) {
						t.fillColor = t.highlightColor
					}), this.showTooltip(e)
				}), this.calculateTotal(t), i.each(t, function(t, e) {
					this.addData(t, e, !0)
				}, this), this.render()
			},
			getSegmentsAtEvent: function(t) {
				var e = [],
					n = i.getRelativePosition(t);
				return i.each(this.segments, function(t) {
					t.inRange(n.x, n.y) && e.push(t)
				}, this), e
			},
			addData: function(t, e, i) {
				var n = e || this.segments.length;
				this.segments.splice(n, 0, new this.SegmentArc({
					value: t.value,
					outerRadius: this.options.animateScale ? 0 : this.outerRadius,
					innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
					fillColor: t.color,
					highlightColor: t.highlight || t.color,
					showStroke: this.options.segmentShowStroke,
					strokeWidth: this.options.segmentStrokeWidth,
					strokeColor: this.options.segmentStrokeColor,
					startAngle: 1.5 * Math.PI,
					circumference: this.options.animateRotate ? 0 : this.calculateCircumference(t.value),
					label: t.label
				})), i || (this.reflow(), this.update())
			},
			calculateCircumference: function(t) {
				return 2 * Math.PI * (Math.abs(t) / this.total)
			},
			calculateTotal: function(t) {
				this.total = 0, i.each(t, function(t) {
					this.total += Math.abs(t.value)
				}, this)
			},
			update: function() {
				this.calculateTotal(this.segments), i.each(this.activeElements, function(t) {
					t.restore(["fillColor"])
				}), i.each(this.segments, function(t) {
					t.save()
				}), this.render()
			},
			removeData: function(t) {
				var e = i.isNumber(t) ? t : this.segments.length - 1;
				this.segments.splice(e, 1), this.reflow(), this.update()
			},
			reflow: function() {
				i.extend(this.SegmentArc.prototype, {
					x: this.chart.width / 2,
					y: this.chart.height / 2
				}), this.outerRadius = (i.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, i.each(this.segments, function(t) {
					t.update({
						outerRadius: this.outerRadius,
						innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
					})
				}, this)
			},
			draw: function(t) {
				var e = t ? t : 1;
				this.clear(), i.each(this.segments, function(t, i) {
					t.transition({
						circumference: this.calculateCircumference(t.value),
						outerRadius: this.outerRadius,
						innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
					}, e), t.endAngle = t.startAngle + t.circumference, t.draw(), 0 === i && (t.startAngle = 1.5 * Math.PI), i < this.segments.length - 1 && (this.segments[i + 1].startAngle = t.endAngle)
				}, this)
			}
		}), e.types.Doughnut.extend({
			name: "Pie",
			defaults: i.merge(n, {
				percentageInnerCutout: 0
			})
		})
	}.call(this),
	function() {
		"use strict";
		var t = this,
			e = t.Chart,
			i = e.helpers,
			n = {
				scaleShowGridLines: !0,
				scaleGridLineColor: "rgba(0,0,0,.05)",
				scaleGridLineWidth: 1,
				scaleShowHorizontalLines: !0,
				scaleShowVerticalLines: !0,
				bezierCurve: !0,
				bezierCurveTension: .4,
				pointDot: !0,
				pointDotRadius: 4,
				pointDotStrokeWidth: 1,
				pointHitDetectionRadius: 20,
				datasetStroke: !0,
				datasetStrokeWidth: 2,
				datasetFill: !0,
				legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
			};
		e.Type.extend({
			name: "Line",
			defaults: n,
			initialize: function(t) {
				this.PointClass = e.Point.extend({
					strokeWidth: this.options.pointDotStrokeWidth,
					radius: this.options.pointDotRadius,
					display: this.options.pointDot,
					hitDetectionRadius: this.options.pointHitDetectionRadius,
					ctx: this.chart.ctx,
					inRange: function(t) {
						return Math.pow(t - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
					}
				}), this.datasets = [], this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
					var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
					this.eachPoints(function(t) {
						t.restore(["fillColor", "strokeColor"])
					}), i.each(e, function(t) {
						t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
					}), this.showTooltip(e)
				}), i.each(t.datasets, function(e) {
					var n = {
						label: e.label || null,
						fillColor: e.fillColor,
						strokeColor: e.strokeColor,
						pointColor: e.pointColor,
						pointStrokeColor: e.pointStrokeColor,
						points: []
					};
					this.datasets.push(n), i.each(e.data, function(i, o) {
						n.points.push(new this.PointClass({
							value: i,
							label: t.labels[o],
							datasetLabel: e.label,
							strokeColor: e.pointStrokeColor,
							fillColor: e.pointColor,
							highlightFill: e.pointHighlightFill || e.pointColor,
							highlightStroke: e.pointHighlightStroke || e.pointStrokeColor
						}))
					}, this), this.buildScale(t.labels), this.eachPoints(function(t, e) {
						i.extend(t, {
							x: this.scale.calculateX(e),
							y: this.scale.endPoint
						}), t.save()
					}, this)
				}, this), this.render()
			},
			update: function() {
				this.scale.update(), i.each(this.activeElements, function(t) {
					t.restore(["fillColor", "strokeColor"])
				}), this.eachPoints(function(t) {
					t.save()
				}), this.render()
			},
			eachPoints: function(t) {
				i.each(this.datasets, function(e) {
					i.each(e.points, t, this)
				}, this)
			},
			getPointsAtEvent: function(t) {
				var e = [],
					n = i.getRelativePosition(t);
				return i.each(this.datasets, function(t) {
					i.each(t.points, function(t) {
						t.inRange(n.x, n.y) && e.push(t)
					})
				}, this), e
			},
			buildScale: function(t) {
				var n = this,
					o = function() {
						var t = [];
						return n.eachPoints(function(e) {
							t.push(e.value)
						}), t
					},
					s = {
						templateString: this.options.scaleLabel,
						height: this.chart.height,
						width: this.chart.width,
						ctx: this.chart.ctx,
						textColor: this.options.scaleFontColor,
						fontSize: this.options.scaleFontSize,
						fontStyle: this.options.scaleFontStyle,
						fontFamily: this.options.scaleFontFamily,
						valuesCount: t.length,
						beginAtZero: this.options.scaleBeginAtZero,
						integersOnly: this.options.scaleIntegersOnly,
						calculateYRange: function(t) {
							var e = i.calculateScaleRange(o(), t, this.fontSize, this.beginAtZero, this.integersOnly);
							i.extend(this, e)
						},
						xLabels: t,
						font: i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
						lineWidth: this.options.scaleLineWidth,
						lineColor: this.options.scaleLineColor,
						showHorizontalLines: this.options.scaleShowHorizontalLines,
						showVerticalLines: this.options.scaleShowVerticalLines,
						gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
						gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
						padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
						showLabels: this.options.scaleShowLabels,
						display: this.options.showScale
					};
				this.options.scaleOverride && i.extend(s, {
					calculateYRange: i.noop,
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
				}), this.scale = new e.Scale(s)
			},
			addData: function(t, e) {
				i.each(t, function(t, i) {
					this.datasets[i].points.push(new this.PointClass({
						value: t,
						label: e,
						x: this.scale.calculateX(this.scale.valuesCount + 1),
						y: this.scale.endPoint,
						strokeColor: this.datasets[i].pointStrokeColor,
						fillColor: this.datasets[i].pointColor
					}))
				}, this), this.scale.addXLabel(e), this.update()
			},
			removeData: function() {
				this.scale.removeXLabel(), i.each(this.datasets, function(t) {
					t.points.shift()
				}, this), this.update()
			},
			reflow: function() {
				var t = i.extend({
					height: this.chart.height,
					width: this.chart.width
				});
				this.scale.update(t)
			},
			draw: function(t) {
				var e = t || 1;
				this.clear();
				var n = this.chart.ctx,
					o = function(t) {
						return null !== t.value
					},
					s = function(t, e, n) {
						return i.findNextWhere(e, o, n) || t
					},
					a = function(t, e, n) {
						return i.findPreviousWhere(e, o, n) || t
					};
				this.scale.draw(e), i.each(this.datasets, function(t) {
					var r = i.where(t.points, o);
					i.each(t.points, function(t, i) {
						t.hasValue() && t.transition({
							y: this.scale.calculateY(t.value),
							x: this.scale.calculateX(i)
						}, e)
					}, this), this.options.bezierCurve && i.each(r, function(t, e) {
						var n = e > 0 && e < r.length - 1 ? this.options.bezierCurveTension : 0;
						t.controlPoints = i.splineCurve(a(t, r, e), t, s(t, r, e), n), t.controlPoints.outer.y > this.scale.endPoint ? t.controlPoints.outer.y = this.scale.endPoint : t.controlPoints.outer.y < this.scale.startPoint && (t.controlPoints.outer.y = this.scale.startPoint), t.controlPoints.inner.y > this.scale.endPoint ? t.controlPoints.inner.y = this.scale.endPoint : t.controlPoints.inner.y < this.scale.startPoint && (t.controlPoints.inner.y = this.scale.startPoint)
					}, this), n.lineWidth = this.options.datasetStrokeWidth, n.strokeStyle = t.strokeColor, n.beginPath(), i.each(r, function(t, e) {
						if(0 === e) n.moveTo(t.x, t.y);
						else if(this.options.bezierCurve) {
							var i = a(t, r, e);
							n.bezierCurveTo(i.controlPoints.outer.x, i.controlPoints.outer.y, t.controlPoints.inner.x, t.controlPoints.inner.y, t.x, t.y)
						} else n.lineTo(t.x, t.y)
					}, this), n.stroke(), this.options.datasetFill && r.length > 0 && (n.lineTo(r[r.length - 1].x, this.scale.endPoint), n.lineTo(r[0].x, this.scale.endPoint), n.fillStyle = t.fillColor, n.closePath(), n.fill()), i.each(r, function(t) {
						t.draw()
					})
				}, this)
			}
		})
	}.call(this),
	function() {
		"use strict";
		var t = this,
			e = t.Chart,
			i = e.helpers,
			n = {
				scaleShowLabelBackdrop: !0,
				scaleBackdropColor: "rgba(255,255,255,0.75)",
				scaleBeginAtZero: !0,
				scaleBackdropPaddingY: 2,
				scaleBackdropPaddingX: 2,
				scaleShowLine: !0,
				segmentShowStroke: !0,
				segmentStrokeColor: "#fff",
				segmentStrokeWidth: 2,
				animationSteps: 100,
				animationEasing: "easeOutBounce",
				animateRotate: !0,
				animateScale: !1,
				legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
			};
		e.Type.extend({
			name: "PolarArea",
			defaults: n,
			initialize: function(t) {
				this.segments = [], this.SegmentArc = e.Arc.extend({
					showStroke: this.options.segmentShowStroke,
					strokeWidth: this.options.segmentStrokeWidth,
					strokeColor: this.options.segmentStrokeColor,
					ctx: this.chart.ctx,
					innerRadius: 0,
					x: this.chart.width / 2,
					y: this.chart.height / 2
				}), this.scale = new e.RadialScale({
					display: this.options.showScale,
					fontStyle: this.options.scaleFontStyle,
					fontSize: this.options.scaleFontSize,
					fontFamily: this.options.scaleFontFamily,
					fontColor: this.options.scaleFontColor,
					showLabels: this.options.scaleShowLabels,
					showLabelBackdrop: this.options.scaleShowLabelBackdrop,
					backdropColor: this.options.scaleBackdropColor,
					backdropPaddingY: this.options.scaleBackdropPaddingY,
					backdropPaddingX: this.options.scaleBackdropPaddingX,
					lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
					lineColor: this.options.scaleLineColor,
					lineArc: !0,
					width: this.chart.width,
					height: this.chart.height,
					xCenter: this.chart.width / 2,
					yCenter: this.chart.height / 2,
					ctx: this.chart.ctx,
					templateString: this.options.scaleLabel,
					valuesCount: t.length
				}), this.updateScaleRange(t), this.scale.update(), i.each(t, function(t, e) {
					this.addData(t, e, !0)
				}, this), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
					var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
					i.each(this.segments, function(t) {
						t.restore(["fillColor"])
					}), i.each(e, function(t) {
						t.fillColor = t.highlightColor
					}), this.showTooltip(e)
				}), this.render()
			},
			getSegmentsAtEvent: function(t) {
				var e = [],
					n = i.getRelativePosition(t);
				return i.each(this.segments, function(t) {
					t.inRange(n.x, n.y) && e.push(t)
				}, this), e
			},
			addData: function(t, e, i) {
				var n = e || this.segments.length;
				this.segments.splice(n, 0, new this.SegmentArc({
					fillColor: t.color,
					highlightColor: t.highlight || t.color,
					label: t.label,
					value: t.value,
					outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(t.value),
					circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
					startAngle: 1.5 * Math.PI
				})), i || (this.reflow(), this.update())
			},
			removeData: function(t) {
				var e = i.isNumber(t) ? t : this.segments.length - 1;
				this.segments.splice(e, 1), this.reflow(), this.update()
			},
			calculateTotal: function(t) {
				this.total = 0, i.each(t, function(t) {
					this.total += t.value
				}, this), this.scale.valuesCount = this.segments.length
			},
			updateScaleRange: function(t) {
				var e = [];
				i.each(t, function(t) {
					e.push(t.value)
				});
				var n = this.options.scaleOverride ? {
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
				} : i.calculateScaleRange(e, i.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
				i.extend(this.scale, n, {
					size: i.min([this.chart.width, this.chart.height]),
					xCenter: this.chart.width / 2,
					yCenter: this.chart.height / 2
				})
			},
			update: function() {
				this.calculateTotal(this.segments), i.each(this.segments, function(t) {
					t.save()
				}), this.reflow(), this.render()
			},
			reflow: function() {
				i.extend(this.SegmentArc.prototype, {
					x: this.chart.width / 2,
					y: this.chart.height / 2
				}), this.updateScaleRange(this.segments), this.scale.update(), i.extend(this.scale, {
					xCenter: this.chart.width / 2,
					yCenter: this.chart.height / 2
				}), i.each(this.segments, function(t) {
					t.update({
						outerRadius: this.scale.calculateCenterOffset(t.value)
					})
				}, this)
			},
			draw: function(t) {
				var e = t || 1;
				this.clear(), i.each(this.segments, function(t, i) {
					t.transition({
						circumference: this.scale.getCircumference(),
						outerRadius: this.scale.calculateCenterOffset(t.value)
					}, e), t.endAngle = t.startAngle + t.circumference, 0 === i && (t.startAngle = 1.5 * Math.PI), i < this.segments.length - 1 && (this.segments[i + 1].startAngle = t.endAngle), t.draw()
				}, this), this.scale.draw()
			}
		})
	}.call(this),
	function() {
		"use strict";
		var t = this,
			e = t.Chart,
			i = e.helpers;
		e.Type.extend({
			name: "Radar",
			defaults: {
				scaleShowLine: !0,
				angleShowLineOut: !0,
				scaleShowLabels: !1,
				scaleBeginAtZero: !0,
				angleLineColor: "rgba(0,0,0,.1)",
				angleLineWidth: 1,
				pointLabelFontFamily: "'Arial'",
				pointLabelFontStyle: "normal",
				pointLabelFontSize: 10,
				pointLabelFontColor: "#666",
				pointDot: !0,
				pointDotRadius: 3,
				pointDotStrokeWidth: 1,
				pointHitDetectionRadius: 20,
				datasetStroke: !0,
				datasetStrokeWidth: 2,
				datasetFill: !0,
				legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
			},
			initialize: function(t) {
				this.PointClass = e.Point.extend({
					strokeWidth: this.options.pointDotStrokeWidth,
					radius: this.options.pointDotRadius,
					display: this.options.pointDot,
					hitDetectionRadius: this.options.pointHitDetectionRadius,
					ctx: this.chart.ctx
				}), this.datasets = [], this.buildScale(t), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
					var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
					this.eachPoints(function(t) {
						t.restore(["fillColor", "strokeColor"])
					}), i.each(e, function(t) {
						t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
					}), this.showTooltip(e)
				}), i.each(t.datasets, function(e) {
					var n = {
						label: e.label || null,
						fillColor: e.fillColor,
						strokeColor: e.strokeColor,
						pointColor: e.pointColor,
						pointStrokeColor: e.pointStrokeColor,
						points: []
					};
					this.datasets.push(n), i.each(e.data, function(i, o) {
						var s;
						this.scale.animation || (s = this.scale.getPointPosition(o, this.scale.calculateCenterOffset(i))), n.points.push(new this.PointClass({
							value: i,
							label: t.labels[o],
							datasetLabel: e.label,
							x: this.options.animation ? this.scale.xCenter : s.x,
							y: this.options.animation ? this.scale.yCenter : s.y,
							strokeColor: e.pointStrokeColor,
							fillColor: e.pointColor,
							highlightFill: e.pointHighlightFill || e.pointColor,
							highlightStroke: e.pointHighlightStroke || e.pointStrokeColor
						}))
					}, this)
				}, this), this.render()
			},
			eachPoints: function(t) {
				i.each(this.datasets, function(e) {
					i.each(e.points, t, this)
				}, this)
			},
			getPointsAtEvent: function(t) {
				var e = i.getRelativePosition(t),
					n = i.getAngleFromPoint({
						x: this.scale.xCenter,
						y: this.scale.yCenter
					}, e),
					o = 2 * Math.PI / this.scale.valuesCount,
					s = Math.round((n.angle - 1.5 * Math.PI) / o),
					a = [];
				return(s >= this.scale.valuesCount || s < 0) && (s = 0), n.distance <= this.scale.drawingArea && i.each(this.datasets, function(t) {
					a.push(t.points[s])
				}), a
			},
			buildScale: function(t) {
				this.scale = new e.RadialScale({
					display: this.options.showScale,
					fontStyle: this.options.scaleFontStyle,
					fontSize: this.options.scaleFontSize,
					fontFamily: this.options.scaleFontFamily,
					fontColor: this.options.scaleFontColor,
					showLabels: this.options.scaleShowLabels,
					showLabelBackdrop: this.options.scaleShowLabelBackdrop,
					backdropColor: this.options.scaleBackdropColor,
					backdropPaddingY: this.options.scaleBackdropPaddingY,
					backdropPaddingX: this.options.scaleBackdropPaddingX,
					lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
					lineColor: this.options.scaleLineColor,
					angleLineColor: this.options.angleLineColor,
					angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
					pointLabelFontColor: this.options.pointLabelFontColor,
					pointLabelFontSize: this.options.pointLabelFontSize,
					pointLabelFontFamily: this.options.pointLabelFontFamily,
					pointLabelFontStyle: this.options.pointLabelFontStyle,
					height: this.chart.height,
					width: this.chart.width,
					xCenter: this.chart.width / 2,
					yCenter: this.chart.height / 2,
					ctx: this.chart.ctx,
					templateString: this.options.scaleLabel,
					labels: t.labels,
					valuesCount: t.datasets[0].data.length
				}), this.scale.setScaleSize(), this.updateScaleRange(t.datasets), this.scale.buildYLabels()
			},
			updateScaleRange: function(t) {
				var e = function() {
						var e = [];
						return i.each(t, function(t) {
							t.data ? e = e.concat(t.data) : i.each(t.points, function(t) {
								e.push(t.value)
							})
						}), e
					}(),
					n = this.options.scaleOverride ? {
						steps: this.options.scaleSteps,
						stepValue: this.options.scaleStepWidth,
						min: this.options.scaleStartValue,
						max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
					} : i.calculateScaleRange(e, i.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
				i.extend(this.scale, n)
			},
			addData: function(t, e) {
				this.scale.valuesCount++, i.each(t, function(t, i) {
					var n = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(t));
					this.datasets[i].points.push(new this.PointClass({
						value: t,
						label: e,
						x: n.x,
						y: n.y,
						strokeColor: this.datasets[i].pointStrokeColor,
						fillColor: this.datasets[i].pointColor
					}))
				}, this), this.scale.labels.push(e), this.reflow(), this.update()
			},
			removeData: function() {
				this.scale.valuesCount--, this.scale.labels.shift(), i.each(this.datasets, function(t) {
					t.points.shift()
				}, this), this.reflow(), this.update()
			},
			update: function() {
				this.eachPoints(function(t) {
					t.save()
				}), this.reflow(), this.render()
			},
			reflow: function() {
				i.extend(this.scale, {
					width: this.chart.width,
					height: this.chart.height,
					size: i.min([this.chart.width, this.chart.height]),
					xCenter: this.chart.width / 2,
					yCenter: this.chart.height / 2
				}), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels()
			},
			draw: function(t) {
				var e = t || 1,
					n = this.chart.ctx;
				this.clear(), this.scale.draw(), i.each(this.datasets, function(t) {
					i.each(t.points, function(t, i) {
						t.hasValue() && t.transition(this.scale.getPointPosition(i, this.scale.calculateCenterOffset(t.value)), e)
					}, this), n.lineWidth = this.options.datasetStrokeWidth, n.strokeStyle = t.strokeColor, n.beginPath(), i.each(t.points, function(t, e) {
						0 === e ? n.moveTo(t.x, t.y) : n.lineTo(t.x, t.y)
					}, this), n.closePath(), n.stroke(), n.fillStyle = t.fillColor, n.fill(), i.each(t.points, function(t) {
						t.hasValue() && t.draw()
					})
				}, this)
			}
		})
	}.call(this),
	function() {
		function t() {
			if($(".artic-tag-box").length > 0) {
				var t = $(".artic-tag-box").outerHeight();
				d = t + 10 + 4 * Math.floor(t / 24)
			}
			o.css({
				height: d
			})
		}

		function e(e) {
			var n = '<span class="article_info_click">鏇村</span>';
			0 == $(".article_info_click").length && ($(".artic-tag-box").length > 0 ? ($(".artic-tag-box").eq(0).append(n), t()) : ($(".read-count").after(n), $(".article_info_click").css("position", "static"))), i()
		}

		function i() {
			$(document).on("click", ".article_info_click", function() {
				var t = {};
				h ? (t.height = "auto", t.val = "鏀惰捣") : (t.height = d, t.val = "鏇村"), o.css({
					height: t.height
				}), $(this).text(t.val), h = !h
			})
		}
		var n = $(".article-bar-top .tags-box");
		if(!n.length) return !1;
		var o = $(".article-bar-top"),
			s = o.outerWidth(),
			a = $(".article-bar-top .time").outerWidth(!0),
			r = $(".article-bar-top .read-count").outerWidth(!0),
			l = {},
			c = 8,
			h = !0,
			d = 24;
		return !(s > n.eq(0).outerWidth(!0) + a + r && 1 == n.length) && (1 == n.length && 1 == $(".artic-tag-box").length ? o.css("height", "auto") : (t(), l.left = a + r + n.eq(0).find(".label").outerWidth(!0) + n.eq(0).find("a").eq(0).outerWidth(!0) + n.eq(0).find("a").eq(1).outerWidth(!0) + c, l.width = s - l.left, void e(l)))
	}(), $(function() {
		function t() {
			this.commentForm = $("#commentform"), this.txtComment = $("#comment_content"), this.btnShowMore = $("#btnMoreComment"), this.commentBox = $("div.comment-list-box"), this.commentPagination = $("#commentPage"), this.commentCountObj = this.commentForm.find("em"), this.commentTxt = $("#comment_replyId"), this.cancelBtn = $(".btn-cancel"), this.curH = 0, this.pageCount = 0, this.pageIndex = 1, this.curFloor = 1, this.commentCount = 0, this.commentPageObj = null, this.commentFontLimit = 1e3, this.firstLoad = !0, this.pageSize = 15, this.showAll = !1, this.initTxt(), this.init(), this.firstLoad = !1, this.bindBtn(), this.bindTxt(), this.commentCode(), this.comment(), this.cancelBtnBindEvent(), this.getPagination = function(t) {
				var e = this.getData(t);
				e && (this.pageCount = e.page_count, this.commentCount = e.floor_count, this.commentPageObj.render({
					count: e.floor_count,
					current: t
				}), this.renderData(e.list))
			}, this.bindLikedClick()
		}

		function e() {
			$(document).on("click", ".comment-like", function() {
				if(!getCookie("UserName")) return window.csdn.loginBox.show(), !1;
				var t = $(this).hasClass("liked") ? "undigg" : "digg",
					e = $(this).data("commentid"),
					i = this;
				window.csdn.post(digg_base_url + "/" + t, {
					article_id: articleId,
					comment_id: e
				}, function(t) {
					var e = $(i).find("span").text() ? parseInt($(i).find("span").text()) : 0;
					$(i).hasClass("liked") ? $(i).removeClass("liked").find("svg").html('<use xlink:href="#csdnc-thumbsup"></use>').parent().find("span").text(e - 1) : $(i).addClass("liked").find("svg").html('<use xlink:href="#csdnc-thumbsup-ok"></use>').parent().find("span").text(e + 1)
				})
			})
		}

		function i(t) {
			var e = "";
			return 0 == t.length ? "" : (e = t.replace(/</g, "&lt;"), e = e.replace(/>/g, "&gt;"))
		}
		$("#btnCommentUnlogin").click(function() {
			var t = window.location.origin + window.location.pathname + "#commentBox";
			window.history.pushState(null, null, t), window.csdn.loginBox.show()
		}), t.prototype.getData = function(t) {
			var e = this;
			e.pageIndex = void 0 !== t ? t : e.pageIndex;
			var i = null;
			return $.ajax({
				url: "/" + username + "/phoenix/comment/list/" + articleId + "?page=" + e.pageIndex + "&size=" + e.pageSize + "&tree_type=1",
				type: "post",
				async: !1,
				success: function(t) {
					return !ISThirdcolumnshow_commnet && void(1 === t.result && (i = t.data, i ? (e.commentBox.show(), e.commentPagination.show(), e.curFloor = i.floor_count - (e.pageIndex - 1) * e.pageSize) : (e.commentBox.hide(), e.commentPagination.hide())))
				},
				error: function() {}
			}), i
		}, t.prototype.init = function() {
			window.localStorage.getItem("AM_comment_data") && window.localStorage.getItem("AM_comment_id") == articleId && (this.txtComment[0].focus(), this.txtComment.val(window.localStorage.getItem("AM_comment_data")), this.commentTxt.val(window.localStorage.getItem("AM_comment_replyId")), $(window).scrollTop(this.txtComment.offset().top));
			var t = commentscount || !this.firstLoad ? this.getData(1) : null;
			if(null !== t) {
				var e = "";
				currentUserName || (e = "鐧诲綍 "), this.pageCount = t.page_count, this.curFloor = t.floor_count, this.commentCount = t.floor_count, this.btnShowMore.html("<span>" + e + "鏌ョ湅 " + t.count + ' 鏉＄儹璇�</span><svg class="icon open" aria-hidden="true"><use xlink:href="#csdnc-chevrondown"></use></svg>'), this.renderData(t.list), t.floor_count <= 3 ? (this.btnShowMore.parent("div.opt-box").remove(), this.commentBox.css("max-height", "none"), this.showAll = !0) : (t.floor_count <= this.pageSize ? this.commentPagination.addClass("d-none") : 0 === $("#btnMoreComment").length && this.commentPagination.removeClass("d-none"), this.showAll || this.countInitHeight());
				var i = this;
				null === this.commentPageObj ? t.page_count > 0 && (this.commentPageObj = new Paging, this.commentPageObj.init({
					target: this.commentPagination,
					pagesize: this.pageSize,
					count: this.commentCount,
					current: 1,
					firstTpl: "",
					lastTpl: "",
					callback: function(t, e, n) {
						i.getPagination(t)
					}
				})) : this.commentPageObj.render({
					count: this.commentCount
				})
			} else this.btnShowMore.parent("div.opt-box").remove(), this.showAll = !0
		}, t.prototype.countInitHeight = function() {
			var t = this;
			t.curH = 0, t.commentBox.find(">ul.comment-list:lt(3)").each(function(e) {
				t.curH += $(this).height()
			}), t.curH += 27, t.commentBox.css("max-height", t.curH)
		}, t.prototype.initTxt = function() {
			var t = this;
			t.txtComment.focus(function() {
				t.commentCountObj.text(1e3 - parseInt($(this).val().length)), $(this).addClass("open")
			}), $("body").click(function(e) {
				$(e.target).is("div.comment-edit-box *") || $(e.target).is(".btn-reply") || $(e.target).is(".right_recommend_comment_button *") || $(e.target).is(".reply") || (t.txtComment.removeClass("open"), t.commentCountObj.text(t.commentFontLimit))
			})
		}, t.prototype.bindBtn = function() {
			function t(t) {
				return "svg" === this.nodeName || currentUserName ? (e.commentBox.css("max-height", "none"), e.commentCount > e.pageSize && e.commentPagination.removeClass("d-none"), $(this).parent("div.opt-box").remove(), $(this).parent().parent("div.opt-box").remove(), e.showAll = !0, e.curH = 0, void(window.event ? window.event.cancelBubble = !0 : t.stopPropagation())) : (csdn.loginBox.show(), !1)
			}
			var e = this;
			e.commentBox.click(function(t) {
				var i = $(t.target).data("type");
				if(void 0 !== i) switch(i) {
					case "report":
						showReport(!0);
						break;
					case "reply":
						if(currentUserName) {
							location.href = "#commentsedit";
							var n = $(t.target).parents("li.comment-line-box"),
								o = {};
							o.Id = n.data("commentid"), o.User = n.data("replyname"), o.text = n.find(".name").text() + (n.find(".nick-name").length ? " 鍥炲 " + n.find(".nick-name").text() : "") + n.find(".comment").text(), e.cancelBtnToggle(!0), e.replayComment(o), e.txtComment.trigger("focus")
						} else location.href = loginUrl + "#commentsedit";
						break;
					case "readreply":
						var s = $(t.target).parents("li").siblings("li.replay-box");
						$(t.target).hasClass("open") ? ($(t.target).removeClass("open"), $(t.target).text($(t.target).data("txt")), s.hide(), e.curH && e.commentBox.css("max-height", e.curH)) : ($(t.target).addClass("open").data("txt", $(t.target).text()), $(t.target).text("鏀惰捣鍥炲"), s.show(), e.curH && e.commentBox.css("max-height", e.curH + s.height() + 10));
						break;
					case "delete":
						var a = $(t.target).parents("li.comment-line-box"),
							r = a.data("commentid");
						e.deleteComment(r)
				}
			}), this.btnShowMore.click(t), this.btnShowMore.find("svg").click(t), $(document).on("click", ".show_loginbox", function() {
				e.setStorage(), window.csdn.loginBox.show()
			})
		}, t.prototype.bindTxt = function() {
			var t = this;
			this.txtComment.blur(function() {
				$(this).data("selector", $(this).selection())
			}), this.txtComment.keyup(function() {
				var e = t.commentCountObj,
					i = t.commentFontLimit - $(this).val().length;
				i < 0 ? ($(this).val($(this).val().substring(0, t.commentFontLimit)), e.text(0)) : e.text(i), $(this).val().length || $(this).data("replayUser") ? t.cancelBtnToggle(!0) : t.cancelBtnToggle(!1)
			})
		}, t.prototype.renderData = function(t) {
			this.commentBox.html("");
			for(var e = '<ul class="comment-list">', i = 0; i < t.length; i++) {
				var n = t[i].info,
					o = t[i].sub,
					s = void 0 !== o ? o.length : 0,
					e = '<ul class="comment-list">';
				if(e += this.buildHtml(n, s, !0), s > 0) {
					e += '<li class="replay-box">', e += '<ul class="comment-list">';
					for(var a = 0; a < s; a++) {
						var r = o[a];
						e += this.buildHtml(r, 0, !1)
					}
					e += "</ul>", e += "</li>"
				}
				e += "</ul>", this.commentBox.append($(e)), this.curFloor--
			}
			$("pre.code2").each(function(t, e) {
				hljs.highlightBlock(e), hljs.lineNumbersBlock(e), $(e).removeClass("code2")
			})
		}, t.prototype.buildHtml = function(t, e, i) {
			var n = "",
				o = "",
				s = "",
				a = "";
			if(i) {
				var r = this.getQuoteInfo(t.Content);
				r.length > 1 ? (s = r[1], a = this.getCodeInfo(r[2]), a = this.replaceNewUBB(a), n = this.getCodeInfo(r[3]), n = this.replaceNewUBB(n), n = '<span class="quote">寮曠敤鈥�<font color="black">' + s + "</font>鈥濈殑璇勮锛�</span><blockquote>" + a + "</blockquote>" + n) : (n = this.replaceNewUBB(r[0]), n = this.getCodeInfo(n))
			} else {
				var r = this.getReplyInfo(t.Content);
				o = r[1];
				var l = r.length > 2 ? this.getQuoteInfo(r[2]) : this.getQuoteInfo(r[0]);
				l.length > 1 ? (s = l[1], a = this.getCodeInfo(l[2]), a = this.replaceNewUBB(a), n = this.getCodeInfo(l[3]), n = this.replaceNewUBB(n), n = '<span class="quote">寮曠敤鈥�<font color="black">' + s + "</font>鈥濈殑璇勮锛�</span><blockquote>" + a + "</blockquote>" + n) : (n = this.replaceNewUBB(l[0]), n = this.getCodeInfo(n))
			}
			var c = "https://me.csdn.net/",
				h = "鍖垮悕鐢ㄦ埛" != t.UserName ? c + t.UserName : "javascript:void(0);",
				d = '<li class="comment-line-box d-flex" data-commentid="' + t.CommentId + '" data-replyname="' + t.UserName + '">        <a target="_blank" href="' + h + '"><img src="' + t.Avatar + '" alt="' + t.UserName + '" class="avatar"></a>          <div class="right-box ' + (o ? "reply-box" : "") + '">            <div class="info-box">              <a target="_blank" href="' + h + '"><span class="name ' + (i ? "" : "mr-8") + '">' + (i ? t.NickName + "锛�</a>" : t.NickName + '</a></span><span class="text">鍥炲</span>  <span class="nick-name">' + (t.ParentNickName ? t.ParentNickName + "锛�" : "")) + '</span>              <span class="comment">' + n + '</span><span class="date" title="' + t.PostTime + '">(' + t.date_format + "</span>" + (i ? '<span class="floor-num">#' + this.curFloor + "妤�)</span>" : '<span class="text">)</span>') + '<span class="opt-box">' + (e > 0 ? '<a class="btn btn-link-blue btn-read-reply" data-type="readreply">鏌ョ湅鍥炲(' + e + ")</a>" : "") + (isOwner || currentUserName === t.UserName ? '<a class="btn btn-link-blue btn-delete" data-type="delete">鍒犻櫎</a>' : "") + '<a class="btn btn-link-blue btn-report" data-type="report">涓炬姤</a>' + (1 !== commentAuth ? '<a class="btn btn-link-blue btn-reply" data-type="reply">鍥炲</a>' : "") + '</span></div><div class="comment-like ' + (t.digg_arr.indexOf(currentUserName) != -1 ? "liked" : "") + '" data-commentid=' + t.CommentId + ' ><svg class="icon ' + ((t.digg_arr.indexOf(currentUserName) != -1 ? "liked" : "") ? "liked" : "") + '"><use xlink:href="#csdnc-thumbsup' + ((t.digg_arr.indexOf(currentUserName) != -1 ? "liked" : "") ? "-ok" : "") + '"></use></svg>' + (0 !== parseInt(t.Digg) ? "<span>" + t.Digg + "</span>" : "<span></span>") + "</div></div></li>";
			return d
		}, t.prototype.getReplyInfo = function(t) {
			var e = t.split(/\[reply]([\s\S]*?)\[\/reply\][\r\n]{0,1}/gi);
			return e
		}, t.prototype.getQuoteInfo = function(t) {
			var e = t.split(/\[quote=([\w#\.]+)\]([\s\S]*?)\[\/quote\][\r\n]{0,2}/gi);
			return e
		}, t.prototype.getCodeInfo = function(t) {
			var e = t.replace(/\[code=([\w#\.]+)\]([\s\S]*?)\[\/code\]/gi, function(t, e, n) {
				return "" == $.trim(n) ? "" : '<pre name="code2" class="code2 ' + e + '"><code>' + i(n) + "</code></pre>"
			});
			return e
		}, t.prototype.replaceNewUBB = function(t) {
			return t = t.replace(/\[face\]([^\]]+):([^\]]+)\[\/face\]/gi, '<img src="//g.csdnimg.cn/static/face/$1/$2" alt="琛ㄦ儏鍖�"/>')
		}, t.prototype.replayComment = function(t) {
			var e = t.Id,
				i = t.User;
			this.txtComment.attr("placeholder", "鍥炲锛�" + t.text).data("replayUser", i), this.commentTxt.val(e)
		}, t.prototype.commentCode = function() {
			var t = this;
			$("#commentCode").find("a").click(function() {
				var e = t.txtComment.data("selector"),
					i = "[code=" + $(this).data("code") + "]\n" + e + "\n[/code]",
					n = t.txtComment.val();
				t.txtComment.val(n + i)
			})
		}, t.prototype.comment = function() {
			var t = this;
			$("#commentform").submit(function() {
				if(!currentUserName) return t.setStorage(), !1;
				window.localStorage.removeItem("AM_comment_data");
				var e = $(this).find(":submit"),
					i = {
						replyId: t.commentTxt.val(),
						content: t.txtComment.val()
					};
				if(i.replyId && $.trim(i.content) && (i.content = "[reply]" + t.txtComment.data("replayUser") + "[/reply]\r\n" + i.content), "" === $.trim(i.content)) alert("璇峰～鍐欒瘎璁哄唴瀹�");
				else {
					var n = blog_address + "/phoenix/comment/submit?id=" + articleId;
					$.ajax({
						url: n,
						type: "post",
						data: i,
						beforeSend: function() {
							e.prop("disabled", !0).val("鎻愪氦涓�")
						},
						success: function(e) {
							1 === e.result ? (t.commentForm.trigger("reset"), t.commentTxt.val(""), t.txtComment.data("replayUser", "").attr("placeholder", "鎯冲浣滆€呰鐐逛粈涔�"), t.cancelBtnToggle(!1), window.right_recommend.updata_ISThirdcolumnshow_commnet(), ISThirdcolumnshow_commnet ? (window.right_recommend.openToolStyleChange(!0), 0 == $(".right_recommend_comment").length && $(".recommend-fixed-box").prepend('<div class="right_recommend_comment"><h5>鏂囩珷璇勮</h5><span class="right_recommned_write">鍐欒瘎璁�</span><div class="right_recommend_comment_content"></div></div>'), window.csdn.right_recommend.rightComments(), setTimeout(function() {
								$("body,html").animate({
									scrollTop: 0
								}, 1e3), t.insertRightCommnetPrompt()
							}, 1e3)) : t.init(), t.removeStorage()) : alert(e.content ? e.content : "璇勮澶辫触璇烽噸璇�")
						},
						complete: function() {
							e.prop("disabled", !1).val("鍙戣〃璇勮")
						}
					})
				}
				return !1
			})
		}, t.prototype.deleteComment = function(t) {
			var e = this,
				i = $("#article_id").val();
			if(confirm("浣犵‘瀹氳鍒犻櫎杩欑瘒璇勮鍚楋紵")) {
				var n = blog_address + "/phoenix/comment/delete",
					o = {
						commentId: t,
						filename: i
					};
				$.post(n, o, function(t) {
					if(1 === t.result) {
						if(ISThirdcolumnshow_commnet) return window.csdn.right_recommend.rightComments(), setTimeout(function() {
							$("body,html").animate({
								scrollTop: 0
							}, 1e3)
						}, 1e3), !1;
						e.commentPageObj.go(e.pageIndex)
					} else alert(t.content), location.reload()
				})
			}
		}, t.prototype.insertRightCommnetPrompt = function() {
			if(window.localStorage.getItem("AM_comment_Prompt_show")) return !1;
			window.localStorage.setItem("AM_comment_Prompt_show", !0);
			var t = $(".right_recommend_comment"),
				e = $(".right_recommend_comment_Prompt");
			e.length > 0 ? e.fadeIn(300) : t.prepend('<div class="right_recommend_comment_Prompt"><div class="text">鏂扮殑璇勮鍦ㄨ繖閲�</div><div class="arrow"></div></div>'), setTimeout(function() {
				$(".right_recommend_comment_Prompt").fadeOut(500)
			}, 4e3)
		}, t.prototype.setStorage = function() {
			window.localStorage.setItem("AM_comment_data", this.txtComment.val()), window.localStorage.setItem("AM_comment_replyId", this.commentTxt.val()), window.localStorage.setItem("AM_comment_id", articleId), window.csdn.loginBox.show()
		}, t.prototype.removeStorage = function() {
			window.localStorage.removeItem("AM_comment_data"), window.localStorage.removeItem("AM_comment_replyId"), window.localStorage.removeItem("AM_comment_id")
		}, t.prototype.bindLikedClick = e, t.prototype.cancelBtnToggle = function(t) {
			t ? this.cancelBtn.removeClass("d-none") : this.cancelBtn.addClass("d-none")
		}, t.prototype.cancelBtnBindEvent = function() {
			var t = this;
			this.cancelBtn.on("click", function() {
				t.txtComment.attr("placeholder", "鎯冲浣滆€呰鐐逛粈涔�").data("replayUser", "").val(""), t.commentTxt.val(""), t.cancelBtnToggle(!1)
			})
		}, window.csdn.comments ? window.csdn.comments : {}, window.csdn.Comments = t
	}), $(function() {
		if(1 === articleType) {
			var t = $("article")[0],
				e = e ? e : "鐗堟潈澹版槑锛氭湰鏂囦负鍗氫富鍘熷垱鏂囩珷锛岃浆杞借闄勪笂鍗氭枃閾炬帴锛�",
				i = "\r\n--------------------- \r\n浣滆€咃細" + nickName + " \r\n鏉ユ簮锛欳SDN \r\n鍘熸枃锛�" + curentUrl + " \r\n" + e;
			csdn.copyright.init(t, i)
		}
	}), $(function() {
		function t(t, o) {
			if(!(t.length < 2)) {
				var s = "";
				s += "<ol>";
				for(var a = 0, r = 0, l = 0, c = 0, h = 0, d = 0; d < t.length; d++) {
					var u = parseInt(t[d].tagName.substr(1), 10);
					if(a || (a = u), u > a ? (s += '<li class="sub-box"><ol>', r++) : u < a && r > 0 && (s += "</ol></li>", r--), 1 == u)
						for(; r > 0;) s += "</ol>", r--;
					a = u;
					var p = t.eq(d).text();
					if(p = /^[\d.銆乗s]+$/.test(p) ? p : p.replace(/^[\d.銆乗s]+/g, ""), p = e(p), p.length < 100 && p.length > 0) switch(u) {
						case 1:
							++l, c = 0, h = 0, s += '<li><a href="#t' + d + '">' + p + "</a></li>", t.eq(d).html('<a name="t' + d + '"></a>' + t.eq(d).html());
							break;
						case 2:
							++c, h = 0, s += '<li><a href="#t' + d + '">' + p + "</a></li>", t.eq(d).html('<a name="t' + d + '"></a>' + t.eq(d).html());
							break;
						case 3:
							++h, s += '<li><a href="#t' + d + '">' + p + "</a></li>", t.eq(d).html('<a name="t' + d + '"></a>' + t.eq(d).html())
					}
				}
				for(; r > 0;) s += "</ol>", r--;
				o.html(s), i(), n()
			}
		}

		function e(t) {
			return t.replace(/[<>&"]/g, function(t) {
				return {
					"<": "&lt;",
					">": "&gt;",
					"&": "&amp;",
					'"': "&quot;"
				}[t]
			})
		}

		function i() {
			if(o.length > 9) {
				var t = 25 * $("div.toc-box").find("li:not(.sub-box)").length,
					e = 225,
					i = t - e,
					n = 0;
				r.find("button.btn-opt").click(function() {
					$(this).hasClass("nomore") || ($(this).hasClass("prev") ? (n -= 25, a.scrollTop(n), n <= 0 && $(this).addClass("nomore")) : (n += 25, a.scrollTop(n), n >= i && $(this).addClass("nomore")), $(this).siblings().removeClass("nomore"))
				})
			} else r.remove()
		}

		function n() {
			function t(e) {
				window.csdn.clearReadMoreBtn(), i.off("click", t)
			}

			function e() {
				var t = window.location.href,
					e = document.title;
				setTimeout(function() {
					history.pushState(null, e, t)
				}, 0)
			}
			var i = $(".toc-container .toc-box ol li a");
			return 0 !== i.length && (i.click(t), void i.click(e))
		}
		var o = $("#article_content").find("h1,h2,h3");
		if(o.length < 2) return $("#liTocBox").remove(), !1;
		o.length <= 2 && ($("#blog_artical_directory").hide(), $(".left_menu .menu_con").hide());
		var s = $("div.toc-container"),
			a = s.find("div.toc-box"),
			r = s.find("div.opt-box");
		if(!$(".first_li")[0]) {
			t(o, a);
			var l = !1;
			$("#liTocBox").hover(function() {
				s.finish().fadeIn(500), $(this).find("button.btn-toc").addClass("active"), l = !1
			}, function(t) {
				l = !0;
				var e = $(this);
				setTimeout(function() {
					l && (s.finish().fadeOut(500), e.find("button.btn-toc").removeClass("active"))
				}, 300)
			})
		}
	}), $(function() {
		var t = $('#article_content a[href^="#"]');
		t.each(function(t) {
			$(this).attr("target", "_self")
		})
	}), $(function() {
		function t() {
			function t() {
				$("#publicPrompt").remove(), $(document).off("click", ".publicPrompt-close", t), $(document).off("click", ".publicPrompt-mask", t)
			}
			var e = {
				success: '<svg class="icon success" aria-hidden="true"><use xlink:href="#csdnc-check"></use></svg>'
			};
			this.data = {}, this.data.status = "success", this.data.titleStr = "鏀惰棌鎴愬姛", this.data.textStr = '宸叉敹钘忚嚦 <a href="https://i.csdn.net/#/uc/favorite-list" target="_blank">涓汉涓績</a>', this.data.imgUrl = "", this.init = function(t) {
				return $.extend(this.data, t), this.addStyle(), this.bindDom(), this
			}, this.show = function(t) {
				$.extend(this.data, t), this.insetStructure(this.data)
			}, this.bindDom = function() {
				$(document).on("click", ".publicPrompt-close", t), $(document).on("click", ".publicPrompt-mask", t)
			}, this.insetStructure = function(t) {
				var i = '<div id="publicPrompt"><div class="publicPrompt-mask"></div><div class="publicPrompt-content"><div class="publicPrompt-title-box"><h3 class="publicPrompt-title">' + e[t.status] + t.titleStr + '</h3><span class="publicPrompt-close"><svg class="icon" aria-hidden="true"><use xlink:href="#csdnc-times"></use></svg></span><div class="publicPrompt-text">' + t.textStr + '</div><img class="publicPrompt-qr" src="' + t.imgUrl + '" alt=""><div class="publicPrompt-footer-text">涓嬭浇APP闅忔椂鏌ョ湅</div></div></div></div>';
				$("body").append(i)
			}, this.addStyle = function() {
				var t = document.createElement("style");
				t.type = "text/css", t.innerHTML = ["#publicPrompt{", "position: fixed;z-index: 99999;top: 0;left: 0;width: 100%;height: 100%;", "}", "#publicPrompt .publicPrompt-mask{", "position: absolute;top: 0;left: 0;width: 100%;height: 100%;", "background-color: rgba(0,0,0,0.5);", "}", "#publicPrompt .publicPrompt-content{", "position: absolute;z-index: 2;top: 30%;left: 50%;margin-left: -175px;", "background-color: #fff;width: 350px;padding: 16px;", "}", "#publicPrompt .publicPrompt-content .publicPrompt-title{", "font-size: 16px;color: #3D3D3D;", "}", "#publicPrompt .publicPrompt-title svg{margin-right:4px;}", "#publicPrompt .publicPrompt-title .success{fill:#89cb62;width: 20px;height: 20px;vertical-align: sub;}", "#publicPrompt .publicPrompt-close{", "position: absolute;top: 16px;right: 16px;cursor: pointer;", "}", "#publicPrompt .publicPrompt-text{", "text-align: center;margin-top: 16px;margin-bottom: 16px;font-size: 14px;", "}", "#publicPrompt .publicPrompt-text a{", "color: #3399EA;text-decoration: underline;", "}", "#publicPrompt .publicPrompt-qr{", "display: block;width: 116px;height: 116px;padding: 8px;margin: 0 auto;border: 1px solid #EBEBEB;", "}", ".publicPrompt-footer-text{", "font-size: 14px;color: #4D4D4D;margin-top:8px;text-align: center;", "}"].join(""), document.getElementsByTagName("head")[0].appendChild(t)
			}
		}
		window.csdn ? window.csdn : {}, window.csdn.publicPrompt = t
	}),
	function() {
		function t() {
			if(RecommendBlogExpertList.length < 3) return !1;
			var t = 0;
			i(t), $(".blog-expert-recommend-box").show(), RecommendBlogExpertList.length > 3 && $(".blog-expert-load-new").show(), $(document).on("click", ".blog-expert-button-follow", n)
		}

		function e(t) {
			var e = "";
			t.is_expert && (e = '<svg class="icon" aria-hidden="true"><use xlink:href="#csdnc-blogexpert"></use></svg>');
			var i = "btn-red-follow",
				n = "鍏虫敞";
			t.is_followed && (i = "btn-gray-follow attented", n = '<span class="hover-hide">宸插叧娉�</span><span class="hover-show">鍙栨秷</span>');
			var o = window.location.href,
				s = {
					mod: "popu_709",
					con: o
				};
			s = JSON.stringify(s);
			var a = {
				mod: "popu_710",
				con: o
			};
			a = JSON.stringify(a);
			var r = '<div class="blog-expert-item"><div class="blog-expert-info-box"><div class="blog-expert-img-box" data-track-click=' + s + '><a href="' + blogUrl + t.user_name + '" target="_blank"><img src="' + t.avatar + '" alt="' + t.nick_name + '" title="' + t.nick_name + '">' + e + "</a><span data-track-click=" + a + '><span class="blog-expert-button-follow ' + i + '" data-name=' + t.user_name + " data-nick=" + t.nick_name + ">" + n + '</span></span></div><div class="info"><span data-track-click=' + s + '><a href="' + blogUrl + t.user_name + '" target="_blank"><h5 class="oneline" title="' + t.nick_name + '">' + t.nick_name + '</h5></a></span>  <p><p class="article-num" title="' + t.article_count + '绡囨枃绔�"> ' + t.article_count + '绡囨枃绔�</p><p class="article-num" title="鎺掑悕:' + t.rank + '"> 鎺掑悕:' + t.rank + "</p></p></div></div></div>";
			return r
		}

		function i(t) {
			var i = $(".blog-expert-flexbox");
			i.attr("data-track-view", '{"mod":"popu_709","con":"' + window.location.href + '"}');
			for(var n = "", o = t; o < t + 4; o++) "object" == typeof RecommendBlogExpertList[o] && (n += e(RecommendBlogExpertList[o]));
			return $(".blog-expert-item").hide(), i.append(n), o
		}

		function n(t) {
			var e = t.target;
			currentUserName || (window.location.href = loginUrl);
			var i = $(e).hasClass("blog-expert-button-follow"),
				n = i ? $(e) : $(e).parent(".blog-expert-button-follow"),
				a = n.hasClass("attented");
			a ? s(n) : o(n)
		}

		function o(t) {
			var e = "//me.csdn.net/api/relation/create?source=blog";
			$.ajax({
				type: "POST",
				url: e,
				contentType: "application/json; charset=utf-8",
				data: JSON.stringify({
					username: t.data("name")
				}),
				xhrFields: {
					withCredentials: !0
				},
				success: function(e) {
					e = "object" != typeof e ? JSON.parse(e) : e, 200 == e.code ? t.html('<span class="hover-hide">宸插叧娉�</span><span class="hover-show">鍙栨秷</span>').removeClass("btn-red-follow").addClass("btn-gray-follow attented") : alert(e.message)
				},
				error: function(t) {
					return "" != t.responseText && (t = "object" != typeof t.responseText ? JSON.parse(t.responseText) : t.responseText, void(400102 == t.code ? window.csdn.loginBox.show() : alert(t.message)))
				}
			})
		}

		function s(t) {
			var e = "//me.csdn.net/api/relation/destroy?source=blog";
			$.ajax({
				type: "POST",
				url: e,
				contentType: "application/json; charset=utf-8",
				data: JSON.stringify({
					username: t.data("name")
				}),
				xhrFields: {
					withCredentials: !0
				},
				success: function(e) {
					e = "object" != typeof e ? JSON.parse(e) : e, 200 == e.code ? t.html("鍏虫敞").addClass("btn-red-follow").removeClass("btn-gray-follow attented") : console.error(e.msg)
				}
			})
		}

		function a() {
			return u.pageIdx > 1 ? (u.noMoreData || (u.noMoreData = !0, u.endBox.show()), !1) : ($.ajax({
				url: "/" + username + "/article/GetRelatedArticles?pageindex=" + u.pageIdx + "&articleId=" + articleId,
				beforeSend: function() {
					u.loadingBox.show(), "object" == typeof u.BlogCommendStartIndex && (u.BlogCommendStartIndex = $(".type_blog, .recommend-download-box").length - 1)
				},
				success: function(t) {
					u.loadingBox.hide(), t = JSON.parse(t), t.content ? (u.loadingBox.before(t.content), d()) : (u.noMoreData = !0, u.endBox.show())
				},
				complete: function() {
					u.loading = !1
				}
			}), void u.pageIdx++)
		}

		function r() {
			var t = u.listBox.offset().top,
				e = $(window).height();
			if(!u.noMoreData && !u.loading) {
				var i = t + u.listBox.height() - e,
					n = $(document).scrollTop();
				i < n && (u.loading = !0, a())
			}
		}

		function l(t, e, i) {
			var n = null,
				o = null;
			return function() {
				var s = +new Date;
				o || (o = s), s - o > i ? (clearTimeout(n), t(), o = s) : (clearTimeout(n), n = setTimeout(function() {
					t()
				}, e))
			}
		}

		function c() {
			$(".recommend-item-box .info-box .namebox").each(function(t, e) {
				$(e).css("left", -($(e).outerWidth() / 2) + 8).data("isSetLeft", !0)
			})
		}

		function h() {
			var t = 10;
			$(".recommend-item-box").each(function(e, i) {
				if(!$(i).hasClass("recommend-download-box")) {
					if($(i).find(".img-box").length > 0) var n = $(i).find(".img-box").outerWidth();
					else var n = 0;
					var o = $(i).find(".info-box").outerWidth();
					$(i).find("h4").width($(i).width() - n - o - 5 * t), $(i).find(".content ").width($(i).width() - n)
				}
			})
		}

		function d() {
			h(), c()
		}
		window.csdn = window.csdn ? window.csdn : {}, window.csdn && (window.csdn.trackRecord = window.csdn.trackRecord ? window.csdn.trackRecord : {}, window.csdn.trackRecord.articleTrackCount = -1, window.csdn.trackRecord.baiduTrackCount = -1);
		var u = {
			datacount: recommendCount,
			pageIdx: 2,
			adIdx: 1,
			listBox: $("div.recommend-box"),
			loadingBox: $("div.recommend-box").find("div.recommend-loading-box"),
			endBox: $("div.recommend-box").find("div.recommend-end-box"),
			noMoreData: !1,
			loading: !1,
			BlogCommendStartIndex: null
		};
		$(".blog-expert-recommend-box").length > 0 && t(), remoteData && remoteData(), $(document).scroll(l(r, 500, 2e3)), d();
		var p = null;
		$(window).resize(function() {
			p && clearTimeout(p), p = setTimeout(function() {
				d()
			}, 50)
		})
	}(), $(function() {
		function t(t) {
			var i = e(t),
				n = "https://me.csdn.net/api/relation/check?follows=" + i;
			return $.ajax({
				type: "GET",
				url: n,
				dataType: "json",
				xhrFields: {
					withCredentials: !0
				},
				success: function(e) {
					if(200 == e.code)
						for(var i = 0; i < t.length; i++)
							for(var n in e.data) t[i].user_name.toLowerCase() == n.toLowerCase() && (t[i].is_followed = e.data[n]);
					$(".blog-expert-button-follow").each(function(t) {
						var i = $(this).data("name");
						i && e.data[i] && $(this).html('<span class="hover-hide">宸插叧娉�</span><span class="hover-show">鍙栨秷</span>').removeClass("btn-red-follow").addClass("btn-gray-follow attented")
					})
				}
			}), t
		}

		function e(t) {
			for(var e = [], i = 0; i < t.length; i++) e.push(t[i].user_name);
			return e.join(",")
		}
		currentUserName && RecommendBlogExpertList.length > 0 && t(RecommendBlogExpertList)
	}), $(function() {
		function t(t) {
			r.hide(), c = t, c ? s.text("鎮ㄤ妇鎶ョ殑璇勮鏉ヨ嚜鏂囩珷锛�") : s.text("涓炬姤鍐呭锛�"),
				a.css({
					"z-index": 9999
				}).show(), o.css({
					"z-index": 1e4
				}).show()
		}

		function e() {
			o.find("#frmReport").trigger("reset"), a.css({
				"z-index": 150
			}).hide(), o.hide()
		}

		function i(t) {
			var e = window.location.origin + "/",
				i = new RegExp("^[" + e + "]\\w+[/article/details/]\\d*", "i");
			return i.test(t)
		}
		var n = '<div class="report-box">  <div class="pos-box">      <h2 class="title">涓嶈壇淇℃伅涓炬姤</h2>      <a class="btn-close">          <svg class="icon" aria-hidden="true">              <use xlink:href="#csdnc-times"></use>          </svg>      </a>      <form id="frmReport">          <div class="form-box">              <div class="txt-row-box">                  <label class="title" id="reptTit">涓炬姤鍐呭锛�</label>                  <p class="rpt-title text-truncate">' + articleTitles + '</p>              </div>              <div class="txt-row-box">                  <label class="title">涓炬姤鍘熷洜锛�</label>                  <div class="rdo-box">                      <label><input type="radio" class="rdo-chk report-type" id="report_sex" name="report_type" value="1">鑹叉儏</label>                      <label><input type="radio" class="rdo-chk report-type" id="report_Politics" name="report_type" value="2">鏀挎不</label>                      <label><input type="radio" class="rdo-chk report-type" id="report_copy" name="report_type" value="3">鎶勮</label>                      <label><input type="radio" class="rdo-chk report-type" id="report_ad" name="report_type" value="4">骞垮憡</label>                      <label><input type="radio" class="rdo-chk report-type" id="report_want" name="report_type" value="5">渚垫潈</label>                      <label><input type="radio" class="rdo-chk report-type" id="report_call" name="report_type" value="6">楠備汉</label>                      <label><input type="radio" class="rdo-chk report-type" id="report_other" name="report_type" value="7">鍏朵粬</label>                  </div>              </div>              <div class="txt-row-box" id="rptOriginalurl">                  <label class="title">鍘熸枃鍦板潃锛�</label>                  <div class="txt-box">                      <input class="ipt" type="text" id="originalurl" name="originalurl">                  </div>              </div>              <div class="txt-row-box">                  <label class="title">鍘熷洜琛ュ厖锛�</label>                  <div class="txt-box">                      <textarea class="ipt ipt-textarea" name="description" maxlength="30"></textarea>                      <p class="remark">鏈€澶氬彧鍏佽杈撳叆30涓瓧</p>                  </div>              </div>          </div>          <div class="opt-box text-right">              <input type="reset" class="btn btn-link-gray btn-close" value="鍙栨秷">              <input type="submit" class="btn btn-red btn-submit" value="鎻愪氦">          </div>      </form>  </div>  </div>';
		$("body").append(n);
		var o = $("div.report-box"),
			s = o.find("#reptTit"),
			a = $("div.mask-dark"),
			r = $("#rptOriginalurl"),
			l = o.find('textarea[name="description"]'),
			c = !1,
			h = 0;
		o.find(".btn-close").click(e), $(".report-type").click(function() {
			r.hide();
			var t = r.find(':text[name="originalurl"]').val(""),
				e = $(this).val();
			"3" === e && (r.css("display", "flex"), t.focus()), "7" === e && (t.focus(), l.focus())
		}), $("#frmReport").submit(function() {
			var t = $("input[name=report_type]:checked").val();
			if(!t) return alert("璇烽€夋嫨涓炬姤鍘熷洜锛�"), !1;
			var n = "";
			switch(t) {
				case "3":
					if(n = $("#originalurl").val(), "" == n || "http://" == n) return alert("涓炬姤鎶勮蹇呴』鎻愪緵鍘熷垱鏂囩珷鍦板潃锛�"), $("#originalurl").focus(), !1;
					if(!i(n)) return alert("璇疯緭鍏ユ纭殑鍘熷垱鏂囩珷鍦板潃锛�"), $("#originalurl").focus(), !1;
					break;
				case "7":
					if(n = l.val(), !n) return alert("璇峰～鍐欎妇鎶ョ殑鍏蜂綋鍘熷洜锛�"), l.focus(), !1
			}
			nowTime = {
				year: (new Date).getFullYear(),
				month: parseInt((new Date).getMonth()) + 1,
				day: (new Date).getDate(),
				hours: parseInt((new Date).getHours()) + 1,
				minutes: parseInt((new Date).getMinutes()) + 1,
				seconds: parseInt((new Date).getSeconds()) + 1
			};
			var o = {
				articleId: articleId,
				commentId: c ? h : 0,
				reportType: t,
				originalurl: $("#originalurl").val(),
				report_other_content: l.val(),
				report_description: l.val(),
				currentUserName: currentUserName,
				updatetime: nowTime.year + "/" + nowTime.month + "/" + nowTime.day + " " + nowTime.hours + ":" + nowTime.minutes + ":" + nowTime.seconds,
				blogUser: username
			};
			return $.post(blog_address + "/common/report?id=" + articleId + "&t=" + (c ? 3 : 2), o, function(t) {
				1 == t.result ? (e(), alert("鎰熻阿鎮ㄧ殑涓炬姤锛屾垜浠細灏藉揩瀹℃牳锛�")) : t.content && alert(t.content)
			}), !1
		}), $("div.comment-box").on("click", "a.btn-report", function() {
			h = $(this).parents("li.comment-line-box").data("commentid"), t(!0)
		}), $(document).on("click", ".right_recommend_comment_button .report", function() {
			h = $(this).parents(".right_recommend_comment_button ").data("commentid"), t(!0)
		}), window.showReport = t
	});
var ISThirdcolumnshow_commnet = !1;
if($(function() {
		function t(t) {
			for(var e = document.cookie.split("; "), i = 0; i < e.length; i++) {
				var n = e[i].split("=");
				if(n[0] == t) return n.length > 1 ? unescape(n[1]) : ""
			}
			return ""
		}

		function e(t) {
			return /^[\u0000-\u00ff]$/.test(t) ? 1 : 2
		}

		function i(t, i) {
			for(var n = "", o = 0, s = 0; o < i && s < t.length; s++) o += e(t.charAt(s)), n += t.charAt(s);
			return n + (o >= i ? "..." : "")
		}

		function n(t) {
			$("body").removeClass("nodata"), toolBar.setPosX(), !t && c()
		}

		function o(t) {
			if(!isShowAds) return !1;
			for(var e = $(".right-item"), i = 0; i < e.length; i++) {
				e[i];
				1 === i && a(479, e[i]), 21 === i && a(480, e[i])
			}
		}

		function s(t) {
			$.ajax(t)
		}

		function a(t, e) {
			$.ajax({
				xhrFields: {
					withCredentials: !0
				},
				url: "https://kunpeng.csdn.net/ad/list?positions=" + t + "&uname=" + currentUserName,
				type: "GET",
				success: function(t) {
					t = t[0], $(e).after(t.con);
					var i = document.getElementById("kp_box_" + t.id);
					if(i) {
						i.innerHTML = t.con;
						for(var n = i.getElementsByTagName("script"), o = n.length, s = 0; s < o;) {
							var a = n[s].parentNode,
								r = document.write;
							document.write = function(t) {
								a.innerHTML = t
							};
							var l = document.createElement("script");
							l.type = "text/javascript", n[s].innerHTML && (l.innerHTML = "setTimeout(function(){" + n[s].innerHTML + "},1000)"), n[s].src && (l.src = n[s].src, l.onerror = l.onload = l.onreadystatechange = function(t) {
								t = t || window.event, l.readyState && !/loaded|complete/.test(l.readyState) && "error" !== t || (document.write = r)
							}), a.appendChild(l), a.removeChild(n[s]), o--, l.onerror = l.onload = l.onreadystatechange = null
						}
					}
				}
			})
		}

		function r(t) {
			var e = {};
			return e.flag = t.type ? t.type : "", e.cover_url = t.user_face ? t.user_face : t.pic, e.publisher_id = t.publisher_id ? t.publisher_id : t.user_name, e.item_read_cnt = t.item_read_cnt ? t.item_read_cnt : t.views, e.publish_time = t.publish_time ? t.publish_time : t.created_at, e.url = t.url, e.title = t.title, e.item_id = !!t.item_id && t.item_id, e.context = t.desc ? t.desc : !!t.context && t.context, e.type = !!t.type && t.type, e
		}

		function l(t, e, n, o, s) {
			var t = r(t),
				a = o ? o : {},
				l = "",
				c = "";
			"download" == t.type && (l = '<span class="download_mark_button ">绔嬪嵆涓嬭浇 </span>', c = "content-width"), t.type != b || t.cover_url ? t.type != b && (t.cover_url = !1) : t.cover_url = "https://csdnimg.cn/release/phoenix/write/assets/book.jpg";
			var h = !!t.cover_url,
				d = "",
				u = "";
			h && (u = "h5width", d = '<div class="imgbox float-right" ><img  src="' + t.cover_url + '" alt="' + t.publisher_id + '"></div>');
			var p = !!t.item_read_cnt,
				m = "";
			p && "boolean" != typeof a.read && (m = '<span class="read"> <svg class="icon no-active hover-hide" aria-hidden="true"><use xlink:href="#csdnc-m-passwords-visible"></use></svg>' + t.item_read_cnt + " </span>");
			var f = !!t.publish_time,
				g = "";
			f && (g = '<span class="time"> ' + t.publish_time.replace(/\d*-(\d*-\d*)\s(\d*:\d*):\d*/, "$1") + "</span>");
			var v = !!t.publisher_id,
				w = "";
			v && "boolean" != typeof a.username && (w = '<span class="name">' + t.publisher_id + "</span>");
			var x = "";
			t.type === b && (n = 714, x = "oneline");
			var y = "";
			0 != e && t.type !== b || (y = 'data-track-view=\'{"mod":"popu_' + n + '","con":",' + t.url + ",-,index_" + e + "\"}'");
			var C = '<div class="right-item-desc ' + x + '"> ' + i(t.context, 80) + "</div>";
			return a.desc && (C = ""), "4p" === s.origin && (t.title = csdn.htmlEncode_inner(t.title)), '<li class="right-item" ' + y + ' data-track-click=\'{"mod":"popu_' + n + '","con":"' + encodeURIComponent(t.title) + "," + t.url + ",-,index_" + e + '"}\'><a href="' + t.url + '" target="_blank"><div class="context-box ' + u + '"><div class="content clearfix ' + c + '"><h5 class="" title="' + t.title + '">' + i(t.title, 56) + "</h5>" + g + m + "</div>" + l + C + "</div>" + d + "</a></li>"
		}

		function c() {
			u(), window.leftFixedSide.fixedSidebarInButton()
		}

		function h(t) {
			var e = {};
			e.notshow = t, e.url = "/" + username + "/article/getSideArticles?articleId=" + articleId, e.type = "GET", e.popu = 653, d(e)
		}

		function d(t) {
			t.success = function(e) {
				var i = "",
					e = "object" == typeof e ? e : JSON.parse(e);
				if(t.notshow.desc = !0, 3 == w && (i += '<div class="right_recommend_comment"><h5>鏂囩珷璇勮</h5><span class="right_recommned_write">鍐欒瘎璁�</span><div class="right_recommend_comment_content"></div></div>', t.popu = 718), (3 == w || e.length > 0) && n(!0), e.length > 0)
					for(var s = 0; s < 35; s++) "object" == typeof e[s] && (i += l(e[s], s, t.popu, t.notshow, t));
				$(".recommend-fixed-box").append(i), 3 == w ? window.csdn.right_recommend.right_getCommentData(20, c) : c(), w = 0, "function" == typeof window.csdn.asideFooterRepos ? window.csdn.asideFooterRepos() : "", o(t.origin)
			}, s(t)
		}

		function u() {
			window.csdn.fixedSidebar({
				targetBox: $(".recommend-fixed-box"),
				mainBox: $("main"),
				sidebar: $(".recommend-fixed-box"),
				direction: "right",
				position: "fixed",
				bottom: 0,
				zIndex: 99,
				sidebarRightMargin: 8,
				sidebarLeftMargin: 8
			})
		}

		function p() {
			$(window).width() > 1537 ? (x(), $(window).unbind("resize", p)) : $(window).width() < 1537 && ISThirdcolumnshow_commnet && !isCorporate && (ISThirdcolumnshow_commnet = !1, w = 0, window.csdn.comments.init())
		}

		function m() {
			$(window).width() > 1537 && y ? ($(".comment-list-box").hide(500), window.csdn.right_recommend.rightComments(), y = !y) : $(window).width() < 1537 && !y && ($(".comment-list-box").hide(500), isCorporate ? "" : ISThirdcolumnshow_commnet = !1, window.csdn.comments.init(), y = !y)
		}

		function f() {
			$(window).width() < 1537 && commentscount > 0 && (isCorporate ? "" : ISThirdcolumnshow_commnet = !1, window.csdn.comments.init(), $(window).unbind("resize", f), $(window).bind("resize", m))
		}

		function g() {
			$(window).width() > 1537 && commentscount > 0 && $(window).bind("resize", f)
		}

		function v() {
			$(window).width() > 1537 && !isCorporate
		}
		var b = "book",
			w = 0;
		commentscount && !isCorporate, window.csdn.comments = new window.csdn.Comments;
		var x = ({
				sceneID: 788,
				requestID: Date.parse(new Date),
				userID: t("uuid_tt_dd"),
				itemID: articleId,
				itemTitle: articleTitles,
				url: "https://nbrecsys.4paradigm.com/api/v0/recom/recall?"
			}, function() {
				var t = (window.csdn.random_num(0, 9), {});
				t.username = !1, t.origin = "csdn", h(t)
			}),
			y = !0;
		isCorporate || (g(), $(window).bind("resize", p), p()), window.right_recommend ? window.right_recommend : window.right_recommend = {}, window.right_recommend.updata_ISThirdcolumnshow_commnet = v, window.right_recommend.openToolStyleChange = n
	}), function() {
		function t(t, n) {
			var o = t.info,
				s = t.sub,
				a = "https://me.csdn.net/",
				r = isOwner || o.UserName === currentUserName ? '<a class="delete" data-type="delete">鍒犻櫎</a>' : "",
				l = "鍖垮悕鐢ㄦ埛" != o.UserName ? a + o.UserName : "javascript:void(0);",
				c = s ? '<a class="readreply" data-type="readreply">鏌ョ湅鍥炲(' + s.length + ")</a>" : "",
				h = '<dl class="comment_content" data-childshow="false" data-track-view=\'{"mod":"popu_720","con":",' + curentUrl + '-,-,-"}\'><dt class="clearfix"><div class="comment_user clearfix"><div class="comment_user_info floatL clearfix"><a href="' + l + '" target="_blank" ><img class="floatL"src="' + o.Avatar + '" alt=""><span class="comment_user_name oneline">' + o.NickName + ': </span></a><span class="comment_info">' + i(o) + '</span></div></div><span class="comment_time" title="' + o.PostTime + '">' + o.date_format + ' </span><span class="floor">#' + (m - n) + '妤�</span><div class="right_recommend_comment_button floatR" data-CommentId="' + o.CommentId + '" data-replyname="' + o.UserName + '">' + r + '<a class="report" data-type="report">涓炬姤</a><a class="reply" data-type="reply" >鍥炲</a>' + c + '<div class="comment-like" data-commentid=' + o.CommentId + ' ><svg class="icon "><use xlink:href="#csdnc-thumbsup"></use><span>' + o.Digg + "</span></svg></div></div></dt>";
			if(s)
				for(var n = 0; n < s.length; n++) h += e(s[n]);
			return h + "</dl>"
		}

		function e(t) {
			var e = "https://me.csdn.net/",
				n = "鍖垮悕鐢ㄦ埛" != t.UserName ? e + t.UserName : "javascript:void(0);",
				o = "鍖垮悕鐢ㄦ埛" != t.ParentUserName ? e + t.ParentUserName : "javascript:void(0);",
				s = isOwner || t.UserName === currentUserName ? '<a class="delete" data-type="delete">鍒犻櫎</a>' : "",
				a = '<dd  data-track-view=\'{"mod":"popu_720","con":",' + curentUrl + ',-,-"}\'><div class="reply_content clearfix"><div class="reply_user clearfix"><span class="reply_user_name floatL"><a class="reply_nickName oneline" href="' + n + '"  target="_blank">' + t.NickName + '</a><span class=\'marginLR reply_text\'> 鍥炲 </span><b class="reply_nickName oneline"><a class="" href="' + o + '"  target="_blank">' + t.ParentNickName + '锛�</a></b></span></div><div class="reply_info">' + i(t) + '</div><div class="reply_time"  title="' + t.PostTime + '">' + t.date_format + '</div><div class="right_recommend_comment_button floatR" data-CommentId="' + t.CommentId + '" data-replyname="' + t.UserName + '">' + s + '<a class="report" data-type="report">涓炬姤</a><a class="reply" data-type="reply" >鍥炲</a></div></div></dd>';
			return a
		}

		function i(t) {
			for(var e = $.trim(t.Content), i = /\[code=([\w#\.]+)\]([\s\S]*?)\[\/code\]/gi, n = []; null != (mc = i.exec(e));) n.push(mc[0]), e = e.replace(mc[0], "--code--");
			if(e = e.replace(/\[quote=([\s\S]*?)]([\s\S]*?)\[\/quote\][\r\n]{0,2}/gi, '<span class="quote">寮曠敤鈥�<font color="black">$1</font>鈥濈殑璇勮锛�</span><blockquote>$2</blockquote>'), e = e.replace(/\[reply]([\s\S]*?)\[\/reply\][\r\n]{0,2}/gi, ""), e = e.replace(/\[url=([^\]]+)]([\s\S]*?)\[\/url\]/gi, '<a href="$1" target="_blank">$2</a>'), e = e.replace(/\[img(=([^\]]+))?]([\s\S]*?)\[\/img\]/gi, '<img src="$3" style="max-width:400px;max-height:200px;" border="0" title="$2" />'), e = e.replace(/\[face\]([^\]]+):([^\]]+)\[\/face\]/gi, '<img src="//g.csdnimg.cn/static/face/$1/$2" alt="琛ㄦ儏鍖�"/>'), e = e.replace(/\r?\n/gi, "<br />"), n.length > 0)
				for(var o = /--code--/gi, s = 0; null != (mc = o.exec(e));) e = e.replace(mc[0], n[s]), s++;
			return e = e.replace(/\[code=([\w#\.]+)\]([\s\S]*?)\[\/code\]/gi, function(t, e, i) {
				return "" == $.trim(i) ? "" : '<pre name="code2" class="code2 ' + e + '"><code>' + csdn.htmlEncode_Escape(i) + "</code></pre>"
			})
		}

		function n() {
			$(document).on("click", ".right_recommend_comment_button", function(t) {
				var e = $(t.target).data("type");
				if(void 0 !== e) switch(e) {
					case "report":
						showReport(!0);
						break;
					case "reply":
						location.href = "#commentsedit";
						var i = $(t.target).parents(".right_recommend_comment_button"),
							n = {};
						n.Id = i.data("commentid"), n.User = i.data("replyname"), window.csdn.comments.replayComment(n), window.csdn.comments.txtComment.trigger("focus");
						break;
					case "readreply":
						var i = $(t.target).parents(".comment_content");
						i.data("childshow") ? (i.find("dd").hide(), $(t.target).text("鏌ョ湅鍥炲")) : (i.find("dd").show(), $(t.target).text("鏀惰捣鍥炲")), i.data("childshow", !i.data("childshow"));
						break;
					case "delete":
						var o = $(t.target).parents(".right_recommend_comment_button "),
							s = o.data("commentid");
						window.csdn.comments.deleteComment(s)
				}
			}), $(document).on("click", ".right_recommned_write", function() {
				$("#comment_content")[0].focus(), $("html,body").animate({
					scrollTop: $(".comment-box").offset().top
				}, 500)
			})
		}

		function o() {
			l.text("鍔犺浇鏇村璇勮涓�..."), f(20)
		}

		function s() {
			a.html(""), c = !1, h = 1, d = !0, f(20)
		}
		var a = $(".right_recommend_comment_content"),
			r = $(".right_recommend_comment"),
			l = $(".jump_comment_page_button"),
			c = !1,
			h = 1,
			d = !0,
			u = !1,
			p = 0,
			m = 0,
			f = function(e, i) {
				a = $(".right_recommend_comment_content"), r = $(".right_recommend_comment");
				var e = e ? e : 10,
					o = "";
				$.get(blog_address + "/phoenix/comment/list/" + articleId + "?page=" + h + "&size=" + e + "&tree_type=1", function(s) {
					if(d = !0, null == s.data) return "function" == typeof i && i(), !1;
					if(p = s.data.floor_count, 0 === s.data.list.length && 1 == h && r.hide(), 0 === s.data.list.length) return r.append('<div class="no_morec_omment">娌℃湁鏇村璇勮浜�</div>'), l.hide(), c = !0, "function" == typeof i && i(), !1;
					var f = s.data.list;
					m = p - (h - 1) * e;
					for(var g = 0; g < f.length; g++) o += t(f[g], g);
					a.append(o), $("pre.code2").each(function(t, e) {
						if(e.className.indexOf(" plain") == -1) hljs.highlightBlock(e), hljs.lineNumbersBlock(e);
						else {
							var i = hljs.highlightAuto(e.innerText);
							$(e).addClass(i.language + " hljs").children("code").html(i.value), hljs.lineNumbersBlock(e)
						}
						$(e).removeClass("code2")
					}), "function" == typeof i && i(), "number" != typeof commentpage && s.data.floor_count > e && 1 === h && 0 == $(".jump_comment_page_button").length && (r.append('<div class="jump_comment_page_button"  data-track-view=\'{"mod":"popu_721","con":",' + curentUrl + ',-,-"}\'  data-track-click=\'{"mod":"popu_721","con":",' + curentUrl + ",-,-\"}'>鍔犺浇鏇村璇勮</div>"), l = $(".jump_comment_page_button")), l.text("鍔犺浇鏇村璇勮"), u || (u = !0, n()), h++
				})
			};
		$(document).on("click", ".jump_comment_page_button", o), window.csdn.right_recommend = window.csdn.right_recommend ? window.csdn.right_recommend : {}, window.csdn.right_recommend.right_getCommentData = f, window.csdn.right_recommend.rightComments = s
	}(), $(function() {
		function t() {
			$("code.has-numbering").each(function(t, e) {
				$(e).css("position", "absolute"), $(e).parent("pre.prettyprint").css({
					position: "relative",
					height: $(e).outerHeight() + 20 + "px"
				})
			})
		}
		window.csdn = window.csdn ? window.csdn : {}, window.csdn.setSafariCodestyle = t
	}), window.csdn.insertcallbackBlock = computePos, csdn.afterTrackReportView = function(t, e) {
		var i = $(t);
		i && i.hasClass("recommend-box-ident") && (i.addClass("box-ident-animation"), setTimeout(function() {
			i.removeClass("recommend-box-ident"), i.removeClass("box-ident-animation")
		}, 1600))
	}, baiduKey && !needInsertBaidu) {
	var BaiduDataL = $('a[strategy*="searchFromBaidu"]').length,
		str = "keyword=" + baiduKey + "&count=" + BaiduDataL;
	trackByGraylog("storage_baidu_exist?" + str)
}
var is_windows = 0 == navigator.platform.indexOf("Win");
ToolMeau.prototype.initPos = function() {
	var t = this;
	this.setPosX(), this.setPosY(), this.toolBox.show(), $(window).resize(interval(t))
}, ToolMeau.prototype.setPosX = function() {
	var t = this.posReference.offset().left,
		e = this.posReference.width(),
		i = $(window).width(),
		n = this,
		o = 0,
		s = 8,
		a = is_windows ? 1519 : 1536;
	switch((i < a || 0 == !$(".nodata").length) && (s = 0), 0 == $(".nodata").length && this.widescreenSpecialStyle(), this.posType) {
		case "left":
			o = t - this.toolBox.interval - this.toolBox.width();
			break;
		case "right":
			o = i - (t + e + this.toolBox.width() + this.toolBox.interval + s), i > a && 0 == $(".nodata").length ? this.toolBox.find("div.toc-container").removeClass("pos-left").addClass("pos-top") : this.toolBox.find("div.toc-container").removeClass("pos-top").addClass("pos-left")
	}
	o = o > 0 ? o : 0, this.toolBox.css(n.posType, o + "px")
}, ToolMeau.prototype.setPosY = function() {
	var t = this;
	$(document).scroll(function() {
		t.computePositon(t)
	})
}, ToolMeau.prototype.setDigg = function() {
	var t = this.toolBox.find("button.btn-like");
	t.click(function() {
		if(currentUserName) {
			var t = $(this);
			$.get(blog_address + "/phoenix/article/digg?ArticleId=" + articleId, function(e) {
				e.status ? (t.addClass("liked"), t.attr("title", "鍙栨秷鐐硅禐")) : (t.removeClass("liked"), t.attr("title", "鐐硅禐")), t.find("p").text(e.digg)
			})
		} else window.csdn.loginBox.show()
	})
}, ToolMeau.prototype.computePositon = function(t) {
	var e = t ? t : this,
		i = $(document).scrollTop(),
		n = is_windows ? $(window).outerWidth() + 17 : $(window).outerWidth(),
		o = 0;
	if(n < 1536 && (o = 40), i > e.fixTop + 40) e.toolBox.css("top", o + "px");
	else {
		var s = e.fixTop;
		$(".csdn-adb").length > 0 && (s += 50), e.toolBox.css("top", s - i + "px")
	}
}, ToolMeau.prototype.initFavorite = function() {
	var t = this.toolBox.find("button.btn-bookmark");
	t.click(window.csdn.articleCollection)
}, ToolMeau.prototype.chatAsk = function() {
	function t(t) {
		var o = $(window).width(),
			s = $(window).height(),
			a = $("main");
		window.event ? window.event.returnValue = !1 : t.preventDefault(), i.bind("click", e).show(), n.css({
			position: "fixed",
			top: s / 2 - 100,
			left: o / 2 - a.width() / 2,
			"z-index": "151"
		}).addClass("d-flex")
	}

	function e() {
		i.unbind("click", e).hide(), n.removeClass("d-flex").hide()
	}
	var i = $(".mask-dark"),
		n = $(".answer-box");
	$(document).on("click", "#btnAsk", t), $(document).on("click", ".chat-ask-button", t), $(document).on("click", ".answer-btn-close", e)
}, ToolMeau.prototype.widescreenSpecialStyle = function() {
	var t = $(window).outerWidth(),
		e = $(".widescreen-more"),
		i = $(".widescreen-hide"),
		n = is_windows ? 1519 : 1536;
	t >= n && this.toolBox.width() > 300 && !this.isSetWidescreenStyle ? (i.hide(), e.show(), this.isSetWidescreenStyle = !this.isSetWidescreenStyle) : t < n && this.isSetWidescreenStyle && (i.show(), e.hide(), this.toolBox.find("div.toc-container").removeClass("pos-top").addClass("pos-left"), this.isSetWidescreenStyle = !this.isSetWidescreenStyle)
}, ToolMeau.prototype.init = function() {
	this.setDigg(), this.chatAsk(), this.initFavorite(), this.computePositon()
}, "undefined" != typeof document.addEventListener && document.addEventListener("DOMContentLoaded", function() {
	return "undefined" == typeof Chart ? void("undefined" != typeof console && console.log("ERROR: You must include chart.min.js on this page in order to use Chart.js")) : void[].forEach.call(document.querySelectorAll("div.chartjs"), function(t) {
		var e, i;
		e = "undefined" != typeof chartjs_colors ? chartjs_colors : "undefined" != typeof chartjs_colors_json ? JSON.parse(chartjs_colors_json) : {
			fillColor: "rgba(151,187,205,0.5)",
			strokeColor: "rgba(151,187,205,0.8)",
			highlightFill: "rgba(151,187,205,0.75)",
			highlightStroke: "rgba(151,187,205,1)",
			data: ["#B33131", "#B66F2D", "#B6B330", "#71B232", "#33B22D", "#31B272", "#2DB5B5", "#3172B6", "#3232B6", "#6E31B2", "#B434AF", "#B53071"]
		}, i = "undefined" != typeof chartjs_config ? chartjs_config : "undefined" != typeof chartjs_config_json ? JSON.parse(chartjs_config_json) : {
			Bar: {
				animation: !1
			},
			Doughnut: {
				animateRotate: !1
			},
			Line: {
				animation: !1
			},
			Pie: {
				animateRotate: !1
			},
			PolarArea: {
				animateRotate: !1
			}
		};
		var n = t.getAttribute("data-chart"),
			o = JSON.parse(t.getAttribute("data-chart-value"));
		if(o && o.length && n) {
			t.innerHTML = "";
			var s = document.createElement("canvas");
			s.height = t.getAttribute("data-chart-height"), t.appendChild(s);
			var a = document.createElement("div");
			a.setAttribute("class", "chartjs-legend"), t.appendChild(a);
			var r, l = s.getContext("2d"),
				c = new Chart(l);
			if("bar" != n)
				for(r = 0; r < o.length; r++) o[r].color = e.data[r], o[r].highlight = e.data[r];
			if("bar" == n || "line" == n) {
				var h = {
					datasets: [{
						label: "",
						fillColor: e.fillColor,
						strokeColor: e.strokeColor,
						highlightFill: e.highlightFill,
						highlightStroke: e.highlightStroke,
						data: []
					}],
					labels: []
				};
				for(r = 0; r < o.length; r++) o[r].value && (h.labels.push(o[r].label), h.datasets[0].data.push(o[r].value));
				a.innerHTML = ""
			}
			"bar" == n ? c.Bar(h, i.Bar) : "line" == n ? c.Line(h, i.Line) : "polar" == n ? a.innerHTML = c.PolarArea(o, i.PolarArea).generateLegend() : "pie" == n ? a.innerHTML = c.Pie(o, i.Pie).generateLegend() : a.innerHTML = c.Doughnut(o, i.Doughnut).generateLegend()
		}
	})
}), $(function() {
	new CSDNviewImg("#content_views")
}), $(function() {
	function t(t, e, i) {
		$.get(blog_address + "/phoenix/article/privacy?articleId=" + t + "&index=" + e + "&reason=" + i, function(t) {
			var e = t;
			e.result ? (alert("鏂囩珷宸茬瀵嗭紒"), location.reload()) : e.content ? n(e.content) : alert("鏃犳硶绉佸瘑锛岃鍒板悗鍙扮瀵嗭紒")
		})
	}

	function n(t) {
		$(".super-private").hide(), $(".private-error").height(126).show().children(".private-content").text(t)
	}

	function o() {
		$(".private-form").removeClass("active").addClass("no-active")
	}
	var s = {
			markdown_line: function() {
				$(".markdown_views pre").addClass("prettyprint"), $("pre.prettyprint code").each(function() {
					var t = $(this).text().split("\n").length + ($(this).hasClass("hljs") ? 1 : 0),
						e = $("<ul/>").addClass("pre-numbering").hide();
					for($(this).addClass("has-numbering").parent().append(e), i = 1; i < t; i++) e.append($("<li/>").text(i));
					e.fadeIn(1700)
				}), $(".pre-numbering li").css("color", "#999"), setTimeout(function() {
					$(".math").each(function(t, e) {
						$(this).find("span").last().css("color", "#fff")
					})
				}), setTimeout(function() {
					$(".toc a[target='_blank']").attr("target", ""), $("a.reversefootnote,a.footnote").attr("target", "")
				}, 500)
			},
			html_line: function() {
				function t() {
					$(".CopyToClipboard").each(function() {
						var t = new ZeroClipboard.Client;
						t.setHandCursor(!0), t.addEventListener("load", function(t) {}), t.addEventListener("mouseOver", function(t) {
							var e = t.movie.parentNode.parentNode.parentNode.parentNode.nextSibling.innerHTML;
							e = e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&"), t.setText(e)
						}), t.addEventListener("complete", function(t, e) {
							alert("浠ｇ爜宸茬粡澶嶅埗鍒颁綘鐨勫壀璐存澘銆�")
						}), t.glue(this, this.parentNode)
					})
				}
				$(".article_content pre").each(function() {
					var t = $(this);
					try {
						if(t.attr("class").indexOf("brush:") != -1) {
							var e = t.attr("class").split(";")[0].split(":")[1];
							t.attr("name", "code"), t.attr("class", e)
						}
						t.attr("class") && t.attr("name", "code")
					} catch(i) {}
				}), $(".article_content textarea[name=code]").each(function() {
					var t = $(this);
					t.attr("class").indexOf(":") != -1 && t.attr("class", t.attr("class").split(":")[0])
				}), $(".highlighter").each(function(t, e) {
					hljs.highlightBlock(e), hljs.lineNumbersBlock(e)
				}), window.clipboardData || setTimeout(t, 1e3)
			}
		},
		a = $(".markdown_views")[0];
	a ? (s.markdown_line(), /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && window.csdn.setSafariCodestyle()) : s.html_line(), $(document).on("click", ".input-mod", function() {
		$(".select-option").show(), $(".select-button").removeClass("rotate0").addClass("rotate180")
	}), $(document).on("input porpertychange", ".private-input", function() {
		o(), $(this).val().length > 120 && $(this).val($(this).val().substr(0, 120)), $(".textarea-box .number").text(120 - $(this).val().length), $(this).val().length > 0 && $(".private-form").removeClass("no-active").addClass("active")
	}), $(document).on("click", ".select-option li", function() {
		$(".super-private").height(126), $(".private-content .other").hide(), o(), $(".select-active").text($(this).text()).data("index", $(this).data("index")), $(this).data("isinput") ? ($(".super-private").height(240), $(".private-content .other").show()) : $(".private-form").removeClass("no-active").addClass("active"), $(".select-button").addClass("rotate0").removeClass("rotate180"), $(".select-option").fadeOut()
	}), $(document).on("click", ".select-button", function() {
		"block" === $(".select-option").css("display") ? ($(".select-option").fadeOut(), $(this).removeClass("rotate180").addClass("rotate0")) : ($(this).removeClass("rotate0").addClass("rotate180"), $(".select-option").fadeIn()), e.stopPropagation(), e.cancelBubble = !0
	}), $(document).on("click", ".private-close, .close-active", function() {
		$(".super-private").hide(), $(".mask-dark").hide()
	}), $(document).on("click", ".private-footer .active", function() {
		var e = $(".select-active").data("index"),
			i = $(".reason").val();
		e || alert("璇烽€夋嫨鍘熷洜"), text = "text", t(articleId, e, i)
	})
}), $(function() {
	$("article").find("table").map(function() {
		$(this).wrap('<div class="table-box" />')
	})
}), ! function(t) {
	function e() {
		var e = navigator.userAgent.toLowerCase();
		return t.ActiveXObject || "ActiveXObject" in t ? "ie" : e.indexOf("firefox") >= 0 ? "firefox" : e.indexOf("chrome") >= 0 ? "chrome" : e.indexOf("opera") >= 0 ? "opera" : e.indexOf("safari") >= 0 ? "safari" : void 0
	}
	var i = t.document,
		n = function(e, n, o, s, a, r) {
			function l(t, i, o) {
				var s = (t + i) / 2;
				if(o <= 0 || i - t < r) return s;
				var a = "(" + e + ":" + s + n + ")";
				return c(a).matches ? l(s, i, o - 1) : l(t, s, o - 1)
			}
			var c, h, d, u;
			t.matchMedia ? c = t.matchMedia : (h = i.getElementsByTagName("head")[0], d = i.createElement("style"), h.appendChild(d), u = i.createElement("div"), u.className = "mediaQueryBinarySearch", u.style.display = "none", i.body.appendChild(u), c = function(t) {
				d.sheet.insertRule("@media " + t + "{.mediaQueryBinarySearch {text-decoration: underline} }", 0);
				var e = "underline" == getComputedStyle(u, null).textDecoration;
				return d.sheet.deleteRule(0), {
					matches: e
				}
			});
			var p = l(o, s, a);
			return u && (h.removeChild(d), i.body.removeChild(u)), p
		},
		o = {};
	o.ie = function() {
		return t.screen.deviceXDPI / t.screen.logicalXDPI
	}, o.firefox = function() {
		return t.devicePixelRatio ? t.devicePixelRatio : n("min--moz-device-pixel-ratio", "", 0, 10, 20, 1e-4)
	}, o.opera = function() {
		return t.outerWidth / t.innerWidth
	}, o.chrome = function() {
		if(t.devicePixelRatio) return t.devicePixelRatio;
		var e = i.createElement("div");
		e.innerHTML = "1", e.setAttribute("style", "font:100px/1em sans-serif;-webkit-text-size-adjust:none;position: absolute;top:-100%;"), i.body.appendChild(e);
		var n = 1e3 / e.clientHeight;
		return n = Math.round(100 * n) / 100, i.body.removeChild(e), n
	}, o.safari = function() {
		return t.outerWidth / t.innerWidth
	}, t.detectZoom = function() {
		return o[e()]()
	}
}(this), $(function() {
	function system() {
		var t = navigator.userAgent.toLowerCase();
		return t.indexOf("win") >= 0 ? "win" : t.indexOf("mac") >= 0 ? "mac" : void 0
	}

	function round2(number, fractionDigits) {
		with(Math) return round(number * pow(10, fractionDigits)) / pow(10, fractionDigits)
	}

	function iszoom(t) {
		return "win" == t.system && 1 != t.zoom || ("mac" == t.system && t.zoom % 1 != 0 && t.zoom % 2 != 0 || void 0)
	}

	function keyUpEvent(t) {
		var e = {
				win: {
					add: 187,
					minus: 189,
					origin: 48
				},
				mac: {
					add: 187,
					minus: 189,
					origin: 48
				}
			},
			i = e[system()];
		if(t.ctrlKey || t.metaKey)
			if(t.keyCode == i.add || t.keyCode == i.minus) {
				var n = {
					zoom: round2(detectZoom(), 2),
					system: system()
				};
				LeftPopShow(iszoom(n), leftPopRendering, RenderData)
			} else t.keyCode != i.add && t.keyCode != i.origin || BOXDOM.animate(CLOSEANI, 2e3)
	}

	function keydownEvent(t) {
		setTimeout(keyUpEvent, 300, t)
	}

	function setStorage(t, e) {
		return localStorage.setItem(t, e)
	}

	function getStorage(t) {
		return localStorage.getItem(t)
	}

	function addStyles(t) {
		var e = document.createElement("style");
		e.type = "text/css", e.innerHTML = [".leftPop{width:330px;position: fixed;font-size: 12px;", "box-shadow: 0 4px 8px 0 rgba(0,0,0,0.10);padding:16px 40px 16px 16px;z-index: 100;", "}", ".leftPop .leftPop-close{position: absolute;right: 20px;" + t, "cursor: pointer;", "}"].join(""), document.getElementsByTagName("head")[0].appendChild(e)
	}

	function leftPopRendering(t) {
		var e = $(".leftPop");
		if(e.length > 0) return e.stop(!0, !1).animate(t.animate, t.animateTime), !1;
		var i = '<svg t="1536830466687" class="icon leftPop-close" viewBox="0 0 1024 1024" version="1.1" ><title>涓嶅啀鏄剧ず</title><path d="M512 438.378667L806.506667 143.893333a52.032 52.032 0 1 1 73.6 73.621334L585.621333 512l294.485334 294.485333a52.074667 52.074667 0 0 1-73.6 73.642667L512 585.621333 217.514667 880.128a52.053333 52.053333 0 1 1-73.621334-73.642667L438.378667 512 143.893333 217.514667a52.053333 52.053333 0 1 1 73.621334-73.621334L512 438.378667z" fill="" p-id="15859"></path></svg>';
		e = $('<div class="leftPop">' + i + "</div>"), addStyles(t.closeColor), e.append(t.template).css(t.style), e.appendTo($("body")).delay(2e3).animate(t.animate, t.animateTime), BOXDOM = e, $(".leftPop-close").on("click", function() {
			e.stop(!0, !1).animate(t.closeAnimate, t.animateTime), setStorage("leftPop", 0)
		})
	}

	function LeftPopShow(t, e, i) {
		var n = getStorage("leftPop");
		t && null == n ? e(i) : BOXDOM.stop(!0, !1).animate(i.closeAnimate, i.animateTime)
	}
	var zoomData = {
			zoom: round2(detectZoom(), 2),
			system: system()
		},
		BOXDOM = $("leftPop");
	CLOSEANI = {
		right: "-100%"
	};
	var events = {
		win: {
			even: "keyup",
			fun: keyUpEvent
		},
		mac: {
			even: "keydown",
			fun: keydownEvent
		}
	};
	$(window).on(events[system()].even, events[system()].fun);
	var RenderData = {
		template: "<span>浣犵殑娴忚鍣ㄧ洰鍓嶅浜庣缉鏀剧姸鎬侊紝椤甸潰鍙兘浼氬嚭鐜伴敊浣嶇幇璞★紝寤鸿100%澶у皬鏄剧ず銆�</span>",
		style: {
			right: "-100%",
			"background-color": "#EBF5FD",
			top: "100px",
			"border-left": "4px solid #70B8F0"
		},
		closeColor: "fill:#70B8F0;",
		animate: {
			right: 0
		},
		closeAnimate: CLOSEANI,
		animateTime: 2e3
	};
	LeftPopShow(iszoom(zoomData), leftPopRendering, RenderData)
});
Viewport
Window×××