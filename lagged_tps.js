var adBreak = function () { };
"remove" in Element.prototype || (Element.prototype.remove = function () {
  this.parentNode && this.parentNode.removeChild(this)
}
);
var CSSlink = document.createElement("link");
CSSlink.href = "base.css",
  CSSlink.rel = "stylesheet",
  CSSlink.media = "screen",
  document.getElementsByTagName("head")[0].appendChild(CSSlink);
var hsData, isMobile, goToLaggedClick = function () {
  console.log(1)
  try {
    document.body.removeEventListener("click", goToLaggedClick),
      document.body.removeEventListener("touchstart", goToLaggedClick)
  } catch (e) {
    console.log(e)
  }
}, aFoundValue = !1, aValueRules = [], prerollStart = !0, LaggedAPI = {};
!function () {
  try {
    window.addEventListener("keydown", function (e) {
      40 != e.keyCode && 38 != e.keyCode && 32 != e.keyCode || e.preventDefault()
    }, !1)
  } catch (e) {
    console.log(e)
  }
  function B(n, a) {
    I.getElementById("createloginBtnMain").disabled = !0;
    var o = I.getElementById("createloginBtnMain").innerText;
    I.getElementById("createloginBtnMain").innerText = "Loading...",
      I.getElementById("createloginBtnMain").className += " btnloading",
      I.getElementById("errorsubmit") && I.getElementById("errorsubmit").remove();
    var e, t, i, d, r = "", l = !1, c = [];
    return "login" != n && (I.getElementById("inputEmail1") && (r = I.getElementById("inputEmail1").value),
      (r.length < 2 || 30 < r.length) && (l = !0,
        c.push("Nickname must be between 2-30 characters"))),
      (e = I.getElementById("inputEmail2").value).length < 5 && (l = !0,
        c.push("Please enter a valid email address")),
      ((t = I.getElementById("inputEmail3").value).length < 6 || 30 < t.length) && (l = !0,
        c.push("Password must be between 6-30 characters")),
      l ? (I.getElementById("createloginBtnMain").innerText = o,
        I.getElementById("createloginBtnMain").classList.remove("btnloading"),
        I.getElementById("createloginBtnMain").disabled = !1,
        (d = document.createElement("div")).id = "errorsubmit",
        d.className = "error_msg",
        i = document.createTextNode(c[0]),
        d.appendChild(i),
        I.getElementById("signupFormWrap").insertBefore(d, I.getElementById("loginit"))) : ((i = new XMLHttpRequest).onreadystatechange = function () {
          var e, t;
          4 == this.readyState && 200 == this.status && (t = (t = this.responseText).replace(")]}',", ""),
            !0 === (t = JSON.parse(t)).success && 0 < t.uid ? (I.getElementById("createloginBtnMain").innerText = "Success!",
              I.getElementById("createloginBtnMain").className += " btnSuccessMsg",
              window.parent.showUserInfo(t),
              setTimeout(function () {
                I.getElementById("createloginBtnMain").className = "main_hs_btn viewranks btnSuccessMsg",
                  s(I.getElementById("leaderboard-modal")),
                  setTimeout(function () {
                    I.getElementById("leaderboard-wrapper").remove()
                  }, 200),
                  setTimeout(function () {
                    I.getElementById("leaderboard-modal").remove(),
                      a && LaggedAPI.Scores.load(m, n)
                  }, 300)
              }, 600)) : (I.getElementById("createloginBtnMain").innerText = o,
                I.getElementById("createloginBtnMain").className = "main_hs_btn viewranks",
                I.getElementById("createloginBtnMain").disabled = !1,
                (e = document.createElement("div")).id = "errorsubmit",
                e.className = "error_msg",
                t = document.createTextNode(t.errors),
                e.appendChild(t),
                I.getElementById("signupFormWrap").insertBefore(e, I.getElementById("loginit"))))
        }
          ,
          (d = {
            fnickname: null
          }).ftype = n,
          r && (d.fnickname = encodeURIComponent(r)),
          d.femail = encodeURIComponent(e),
          d.fpass = encodeURIComponent(t),
          i.open("POST", "//lagged.com/api/v3/ajax.php", !0),
          i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
          i.send("ftype=" + d.ftype + "&fnickname=" + d.fnickname + "&femail=" + d.femail + "&fpass=" + d.fpass)),
      !1
  }
  function s(e) {
    var t = 1;
    a = setInterval(function () {
      if (t <= .1) {
        clearInterval(a);
        try {
          e.style.display = "none"
        } catch (e) {
          console.log(e)
        }
      }
      try {
        e.style.opacity = t,
          e.style.filter = "alpha(opacity=" + 100 * t + ")"
      } catch (e) {
        console.log(e)
      }
      t -= .1 * t
    }, 13)
  }
  function N(e) {
    return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }
  function k() {
    s(I.getElementById("leaderboard-loading")),
      setTimeout(function () {
        I.getElementById("leaderboard-loading").remove()
      }, 200)
  }
  function o(e) {
    c = window.parent.isFullscreen,
      I = c ? document : window.parent.document,
      e || ((t = document.createElement("div")).id = "leaderboard-modal",
        t.onclick = function (e) {
          return e.preventDefault(),
            e.stopPropagation(),
            !1
        }
        ,
        I.body.appendChild(t));
    var t = document.createElement("div");
    t.id = "leaderboard-loading",
      t.className = "leaderboard-circle",
      I.body.appendChild(t)
  }
  function d(e, t, n, a, o, i) {
    var d = new XMLHttpRequest;
    d.onreadystatechange = function () {
      var e;
      4 == this.readyState && 200 == this.status ? (e = (e = this.responseText).replace(")]}',", ""),
        e = JSON.parse(e),
        o(e, i)) : 4 == this.readyState && o(e = {
          success: !1
        }, i)
    }
      ;
    t = "//lagged.com/api/v3/ajax_" + t + ".php";
    d.open("POST", t, !0),
      d.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
      d.send("type=" + e + "&action=" + n + "&data=" + a)
  }
  var r, m, I, l = new function () {
    function r(e, t) {
      return (e >>> 1 | t >>> 1) << 1 | 1 & e | 1 & t
    }
    function l(e, t) {
      return (e >>> 1 ^ t >>> 1) << 1 | 1 & e ^ 1 & t
    }
    function c(e, t) {
      return (e >>> 1 & t >>> 1) << 1 | 1 & e & t
    }
    function m(e, t) {
      var n = (65535 & e) + (65535 & t);
      return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
    }
    function p(e) {
      for (var t = "", n = 0; n <= 3; n++)
        t += a.charAt(e >> 8 * n + 4 & 15) + a.charAt(e >> 8 * n & 15);
      return t
    }
    function s(e, t, n, a, o, i) {
      return m((i = m(m(t, e), m(a, i))) << o | i >>> 32 - o, n)
    }
    function u(e, t, n, a, o, i, d) {
      return s(r(c(t, n), c(~t, a)), e, t, o, i, d)
    }
    function g(e, t, n, a, o, i, d) {
      return s(r(c(t, a), c(n, ~a)), e, t, o, i, d)
    }
    function h(e, t, n, a, o, i, d) {
      return s(l(l(t, n), a), e, t, o, i, d)
    }
    function w(e, t, n, a, o, i, d) {
      return s(l(n, r(t, ~a)), e, t, o, i, d)
    }
    var v = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      , a = "0123456789abcdef";
    return {
      base64: function (e) {
        var t, n, a, o, i, d, r = "", l = 0;
        for (e = function (e) {
          if (!e)
            return "";
          e = e.replace(/\r\n/g, "\n");
          for (var t = "", n = 0; n < e.length; n++) {
            var a = e.charCodeAt(n);
            a < 128 ? t += String.fromCharCode(a) : (127 < a && a < 2048 ? t += String.fromCharCode(a >> 6 | 192) : (t += String.fromCharCode(a >> 12 | 224),
              t += String.fromCharCode(a >> 6 & 63 | 128)),
              t += String.fromCharCode(63 & a | 128))
          }
          return t
        }(e); l < e.length;)
          a = (d = e.charCodeAt(l++)) >> 2,
            o = (3 & d) << 4 | (t = e.charCodeAt(l++)) >> 4,
            i = (15 & t) << 2 | (n = e.charCodeAt(l++)) >> 6,
            d = 63 & n,
            isNaN(t) ? i = d = 64 : isNaN(n) && (d = 64),
            r = r + v.charAt(a) + v.charAt(o) + v.charAt(i) + v.charAt(d);
        return r
      },
      md5: function (e) {
        for (var t = function (e) {
          for (var t = 1 + (e.length + 8 >> 6), n = new Array(16 * t), a = 0; a < 16 * t; a++)
            n[a] = 0;
          for (a = 0; a < e.length; a++)
            n[a >> 2] |= e.charCodeAt(a) << (8 * e.length + a) % 4 * 8;
          n[a >> 2] |= 128 << (8 * e.length + a) % 4 * 8;
          var o = 8 * e.length;
          return n[16 * t - 2] = 255 & o,
            n[16 * t - 2] |= (o >>> 8 & 255) << 8,
            n[16 * t - 2] |= (o >>> 16 & 255) << 16,
            n[16 * t - 2] |= (o >>> 24 & 255) << 24,
            n
        }(e), n = 1732584193, a = -271733879, o = -1732584194, i = 271733878, d = 0; d < t.length; d += 16) {
          var r = n
            , l = a
            , c = o
            , s = i
            , a = w(a = w(a = w(a = w(a = h(a = h(a = h(a = h(a = g(a = g(a = g(a = g(a = u(a = u(a = u(a = u(a, o = u(o, i = u(i, n = u(n, a, o, i, t[d + 0], 7, -680876936), a, o, t[d + 1], 12, -389564586), n, a, t[d + 2], 17, 606105819), i, n, t[d + 3], 22, -1044525330), o = u(o, i = u(i, n = u(n, a, o, i, t[d + 4], 7, -176418897), a, o, t[d + 5], 12, 1200080426), n, a, t[d + 6], 17, -1473231341), i, n, t[d + 7], 22, -45705983), o = u(o, i = u(i, n = u(n, a, o, i, t[d + 8], 7, 1770035416), a, o, t[d + 9], 12, -1958414417), n, a, t[d + 10], 17, -42063), i, n, t[d + 11], 22, -1990404162), o = u(o, i = u(i, n = u(n, a, o, i, t[d + 12], 7, 1804603682), a, o, t[d + 13], 12, -40341101), n, a, t[d + 14], 17, -1502002290), i, n, t[d + 15], 22, 1236535329), o = g(o, i = g(i, n = g(n, a, o, i, t[d + 1], 5, -165796510), a, o, t[d + 6], 9, -1069501632), n, a, t[d + 11], 14, 643717713), i, n, t[d + 0], 20, -373897302), o = g(o, i = g(i, n = g(n, a, o, i, t[d + 5], 5, -701558691), a, o, t[d + 10], 9, 38016083), n, a, t[d + 15], 14, -660478335), i, n, t[d + 4], 20, -405537848), o = g(o, i = g(i, n = g(n, a, o, i, t[d + 9], 5, 568446438), a, o, t[d + 14], 9, -1019803690), n, a, t[d + 3], 14, -187363961), i, n, t[d + 8], 20, 1163531501), o = g(o, i = g(i, n = g(n, a, o, i, t[d + 13], 5, -1444681467), a, o, t[d + 2], 9, -51403784), n, a, t[d + 7], 14, 1735328473), i, n, t[d + 12], 20, -1926607734), o = h(o, i = h(i, n = h(n, a, o, i, t[d + 5], 4, -378558), a, o, t[d + 8], 11, -2022574463), n, a, t[d + 11], 16, 1839030562), i, n, t[d + 14], 23, -35309556), o = h(o, i = h(i, n = h(n, a, o, i, t[d + 1], 4, -1530992060), a, o, t[d + 4], 11, 1272893353), n, a, t[d + 7], 16, -155497632), i, n, t[d + 10], 23, -1094730640), o = h(o, i = h(i, n = h(n, a, o, i, t[d + 13], 4, 681279174), a, o, t[d + 0], 11, -358537222), n, a, t[d + 3], 16, -722521979), i, n, t[d + 6], 23, 76029189), o = h(o, i = h(i, n = h(n, a, o, i, t[d + 9], 4, -640364487), a, o, t[d + 12], 11, -421815835), n, a, t[d + 15], 16, 530742520), i, n, t[d + 2], 23, -995338651), o = w(o, i = w(i, n = w(n, a, o, i, t[d + 0], 6, -198630844), a, o, t[d + 7], 10, 1126891415), n, a, t[d + 14], 15, -1416354905), i, n, t[d + 5], 21, -57434055), o = w(o, i = w(i, n = w(n, a, o, i, t[d + 12], 6, 1700485571), a, o, t[d + 3], 10, -1894986606), n, a, t[d + 10], 15, -1051523), i, n, t[d + 1], 21, -2054922799), o = w(o, i = w(i, n = w(n, a, o, i, t[d + 8], 6, 1873313359), a, o, t[d + 15], 10, -30611744), n, a, t[d + 6], 15, -1560198380), i, n, t[d + 13], 21, 1309151649), o = w(o, i = w(i, n = w(n, a, o, i, t[d + 4], 6, -145523070), a, o, t[d + 11], 10, -1120210379), n, a, t[d + 2], 15, 718787259), i, n, t[d + 9], 21, -343485551)
            , n = m(n, r);
          a = m(a, l),
            o = m(o, c),
            i = m(i, s)
        }
        return p(n) + p(a) + p(o) + p(i)
      }
    }
  }
    , c = !1, p = !1, u = !1;
  try {
    I = window.parent.document
  } catch (e) {
    p = !0,
      console.log(e)
  }
  I ? u = !0 : (console.log("not on lagged, use event"),
    p = !0);
  try {
    var e = document.referrer.split("/")[2];
    if ("lagged.com" != e && !u) {
      p = !0;
      var t = ["lagged.es", "oyun.io", "lagged.fr", "lagged.me", "lagged.id", "lagged.jp", "lagged.kr", "lagged.ru", "lagged.se", "lagged.com.br", "spiel2.com", "spellen2.com", "lagged.vn", "lagged.pl", "lagged.cn", "lagged.in", "lagged.bg", "lagged.gr", "lagged.ro", "lagged.fi", "giochi2.com", "lagged.it", "ducklife.com", "maxg.com", "8iz.com"].includes(e);
      if (!t)
        try {
          document.body.addEventListener("click", goToLaggedClick),
            document.body.addEventListener("touchstart", goToLaggedClick)
        } catch (e) {
          console.log(e)
        }
    }
  } catch (e) {
    p = !0,
      console.log(e)
  }
  if (!p)
    try {
      void 0 !== window.parent.useLaggedapiembed && window.parent.useLaggedapiembed && (console.log("embed mode"),
        p = !0)
    } catch (e) {
      console.log(e)
    }
  console.log("use event: ", p),
    vL = [],
    b = [],
    LaggedAPI.init = function (e, t) {
      r = e
    }
    ,
    LaggedAPI.Achievements = {
      save: function (e, t) {
        for (var a, o, n = 0, i = e.length; n < i; n++)
          -1 === vL.indexOf(e[n]) && (vL.push(e[n]),
            b.push(e[n]));
        0 < b.length ? (a = b.length,
          o = t,
          setTimeout(function () {
            if (b.length > a)
              o({
                success: !0
              });
            else {
              var e = {
                action: "save"
              };
              e.publickey = r,
                e.awards = b,
                b = [];
              var t = JSON.stringify(e)
                , n = l.base64(t);
              if (p)
                try {
                  window.parent.postMessage("awards|" + n, "*"),
                    o({
                      success: !0
                    })
                } catch (e) {
                  console.log(e)
                }
              else
                d("award", "award", "save", n, g, o)
            }
          }, 35)) : t({
            success: !0
          })
      },
      show: function () {
        try {
          window.parent.openAwards()
        } catch (e) {
          try {
            window.parent.postMessage("openAwards", "*")
          } catch (e) {
            console.log(e)
          }
        }
      }
    },
    LaggedAPI.Scores = {
      save: function (e, t) {
        m = e.board,
          p || o(!1);
        var n = {
          action: "save"
        };
        n.publickey = r,
          n.board = e.board,
          n.score = e.score;
        var n = JSON.stringify(n)
          , a = l.base64(n);
        if (p)
          try {
            window.parent.postMessage("savescore|" + a, "*"),
              t({
                success: !0
              })
          } catch (e) {
            console.log(e)
          }
        else
          u && d("highscore", "hs2_p1", "save", a, h, t)
      },
      load: function (e, t) {
        if (p)
          try {
            window.parent.postMessage("loadscores", "*"),
              t({
                success: !0
              })
          } catch (e) {
            console.log(e)
          }
        else {
          o(!1);
          var n = {
            action: "load"
          };
          n.publickey = r,
            n.board = e;
          n = JSON.stringify(n);
          d("highscore", "hs2_p1", "load", l.base64(n), h, w(t))
        }
      }
    };
  var g = function (e, t) {
    var n = {
      success: !0
    };
    e && !0 === e.success ? !0 === e.data.show && y(e.data.achdata, e.user) : (console.log("Error: Achievement did not save!"),
      console.log(e),
      n.success = !1,
      n.errormsg = "Error: Achievement did not save!"),
      t && t(n)
  }
    , h = function (e, t) {
      var n = {
        success: !0
      };
      e && !0 === e.success ? (hsData = e,
        function () {
          var e = document.createElement("div");
          e.id = "leaderboard-wrapper";
          var t = document.createElement("div");
          t.id = "leaderboard-wrapper-header";
          var n = document.createElement("button");
          n.onclick = function () {
            I.getElementById("leaderboard-wrapper") && I.getElementById("leaderboard-wrapper").remove(),
              I.getElementById("leaderboard-modal") && (I.getElementById("leaderboard-modal").onclick = "",
                I.getElementById("leaderboard-modal").remove())
          }
            ,
            n.id = "leaderboard-header-button";

          var o, d, r, l, c, s, m = document.createElement("div");
          m.id = "score-circle",
            m.className = "leaderboard-circle",
            t.appendChild(n),
            t.appendChild(a),
            e.appendChild(t),
            hsData.data && !hsData.data.login ? ((o = document.createElement("div")).className = "yourscore_txtdiv",
              d = document.createTextNode("Your High Score"),
              o.appendChild(d),
              (r = document.createElement("div")).className = "finalscore_divtxt",
              l = document.createTextNode(N(hsData.data.utop.score)),
              r.appendChild(l),
              m.appendChild(o),
              m.appendChild(r),
              e.appendChild(m),
              (t = document.createElement("div")).className = "signup_txti",
              (c = document.createElement("button")).onclick = function () {
                try {
                  window.parent.openLeaderboards(hsData)
                } catch (e) {
                  console.log(e)
                }
              }
              ,
              c.className = "main_hs_btn viewranks",
              s = document.createTextNode("View Leaderboard"),
              c.appendChild(s),
              e.appendChild(t),
              e.appendChild(c)) : ((m = document.createElement("div")).id = "guestscorecircle",
                (o = document.createElement("div")).className = "yourscore_txtdiv",
                d = document.createTextNode("Your High Score"),
                o.appendChild(d),
                (r = document.createElement("div")).className = "finalscore_divtxt",
                l = document.createTextNode(N(hsData.data.topscore)),
                r.appendChild(l),
                m.appendChild(o),
                m.appendChild(r),
                e.appendChild(m),
                (c = document.createElement("button")).onclick = function () {
                  !function i(e) {
                    2 === e ? I.getElementById("achlistwrap").remove() : 1 === e ? (I.getElementById("guestscorecircle").remove(),
                      I.getElementsByClassName("signup_txti")[0].remove(),
                      I.getElementsByClassName("viewleaderguest")[0].remove(),
                      I.getElementsByClassName("moregames_wrapper")[0].remove(),
                      I.getElementsByClassName("main_hs_btn")[0].remove()) : I.getElementById("signupFormWrap").remove();
                    var t = document.createElement("div");
                    t.id = "signupFormWrap";
                    var d = 2 === e ? !1 : !0;
                    isMobile = window.mobilecheck();
                    var n = document.createElement("div");
                    n.id = "tabsButtonWraps",
                      n.className = "logintabs",
                      (o = document.createElement("button")).className = "tabs_links active",
                      o.style.width = "50%";
                    var a = document.createTextNode("Sign Up for Free");
                    o.appendChild(a),
                      n.appendChild(o),
                      (o = document.createElement("button")).className = "tabs_links",
                      o.style.width = "50%",
                      o.onclick = function () {
                        !function () {
                          I.getElementById("signupFormWrap").remove();
                          var e = document.createElement("div");
                          e.id = "signupFormWrap";
                          var t = document.createElement("div");
                          t.id = "tabsButtonWraps",
                            t.className = "logintabs",
                            (o = document.createElement("button")).onclick = function () {
                              i(3)
                            }
                            ,
                            o.className = "tabs_links",
                            o.style.width = "50%";
                          var n = document.createTextNode("Sign Up for Free");
                          o.appendChild(n),
                            t.appendChild(o),
                            (o = document.createElement("button")).className = "tabs_links active",
                            o.style.width = "50%",
                            n = document.createTextNode("Log in"),
                            o.appendChild(n),
                            t.appendChild(o),
                            e.appendChild(t);
                          var a = document.createElement("form");
                          a.id = "loginit",
                            a.onsubmit = function () {
                              return B("login")
                            }
                            ,
                            (n = document.createElement("div")).className = "form-group";
                          var o = document.createElement("label");
                          o.setAttribute("form", "inputEmail2"),
                            t = document.createTextNode("Your email address"),
                            o.appendChild(t),
                            n.appendChild(o),
                            (t = document.createElement("input")).setAttribute("type", "email"),
                            t.setAttribute("name", "name"),
                            t.id = "inputEmail2",
                            t.className = "form-control",
                            t.required = !0,
                            isMobile || (t.autofocus = !0),
                            n.appendChild(t),
                            a.appendChild(n),
                            (o = document.createElement("div")).className = "form-group",
                            (t = document.createElement("label")).setAttribute("form", "inputEmail3"),
                            n = document.createTextNode("Your password"),
                            t.appendChild(n),
                            o.appendChild(t),
                            (t = document.createElement("input")).setAttribute("type", "password"),
                            t.setAttribute("name", "name"),
                            t.id = "inputEmail3",
                            t.className = "form-control",
                            t.required = !0,
                            o.appendChild(t),
                            a.appendChild(o),
                            (t = document.createElement("button")).onclick = function () {
                              return B("login", d)
                            }
                            ,
                            t.className = "main_hs_btn viewranks",
                            t.id = "createloginBtnMain",
                            o = document.createTextNode("Submit"),
                            t.appendChild(o),
                            a.appendChild(t),
                            e.appendChild(a),
                            t = document.createElement("a"),
                            a = document.createTextNode("Forgot password?"),
                            t.style.marginTop = "15px",
                            t.setAttribute("href", "https://lagged.com/help/password/"),
                            t.setAttribute("target", "_blank"),
                            t.appendChild(a),
                            e.appendChild(t),
                            I.getElementById("leaderboard-wrapper").appendChild(e),
                            isMobile || I.getElementById("inputEmail2").focus()
                        }()
                      }
                      ,
                      a = document.createTextNode("Log in"),
                      o.appendChild(a),
                      n.appendChild(o),
                      t.appendChild(n);
                    e = document.createElement("form");
                    e.id = "loginit",
                      e.onsubmit = function () {
                        return B("signup")
                      }
                      ;
                    a = document.createElement("div");
                    a.className = "form-group";
                    var o = document.createElement("label");
                    o.setAttribute("form", "inputEmail1");
                    n = document.createTextNode("Choose a nickname");
                    o.appendChild(n),
                      a.appendChild(o);
                    n = document.createElement("input");
                    n.setAttribute("type", "text"),
                      n.setAttribute("name", "name"),
                      n.id = "inputEmail1",
                      n.className = "form-control",
                      n.required = !0,
                      isMobile || (n.autofocus = !0),
                      a.appendChild(n),
                      e.appendChild(a);
                    o = document.createElement("div");
                    o.className = "form-group";
                    n = document.createElement("label");
                    n.setAttribute("form", "inputEmail2");
                    a = document.createTextNode("Your email address");
                    n.appendChild(a),
                      o.appendChild(n);
                    a = document.createElement("input");
                    a.setAttribute("type", "email"),
                      a.setAttribute("name", "name"),
                      a.id = "inputEmail2",
                      a.className = "form-control",
                      a.required = !0,
                      o.appendChild(a),
                      e.appendChild(o);
                    n = document.createElement("div");
                    n.className = "form-group";
                    a = document.createElement("label");
                    a.setAttribute("form", "inputEmail3");
                    o = document.createTextNode("Create a password");
                    a.appendChild(o),
                      n.appendChild(a);
                    a = document.createElement("input");
                    a.setAttribute("type", "password"),
                      a.setAttribute("name", "name"),
                      a.setAttribute("placeholder", "At least 6 characters"),
                      a.id = "inputEmail3",
                      a.className = "form-control",
                      a.required = !0,
                      n.appendChild(a),
                      e.appendChild(n);
                    a = document.createElement("button");
                    a.onclick = function () {
                      return B("signup", d)
                    }
                      ,
                      a.className = "main_hs_btn viewranks",
                      a.id = "createloginBtnMain";
                    n = document.createTextNode("Submit");
                    a.appendChild(n),
                      e.appendChild(a),
                      t.appendChild(e),
                      I.getElementById("leaderboard-wrapper").appendChild(t),
                      isMobile || I.getElementById("inputEmail1").focus()
                  }(1)
                }
                ,
                c.className = "main_hs_btn guestsubmitmainhs",
                s = document.createTextNode("Submit High Score"),
                c.appendChild(s),
                e.appendChild(c),
                (g = document.createElement("a")).onclick = function () {
                  try {
                    window.parent.openLeaderboards()
                  } catch (e) {
                    console.log(e)
                  }
                }
                ,
                g.className = "viewleaderguest",
                (p = document.createElement("img")).setAttribute("src", "https://imgs2.dab3games.com/highscore-games-icon.jpg"),
                p.setAttribute("alt", "icon"),
                p.setAttribute("width", "40"),
                p.setAttribute("height", "40"),
                g.appendChild(p),
                u = document.createTextNode("View Leaderboard"),
                g.appendChild(u),
                e.appendChild(g));
          var p = document.createElement("div");
          hsData.data.login ? p.className = "popmoregameswrap" : p.className = "popmoregameswrap userrbpop";
          var u = document.createElement("div");
          u.className = "signup_txti moregametxt guessmoregmtxt",
            hsData.data.login || (u.className = "signup_txti moregametxt");
          var g = document.createTextNode("More Games");
          u.appendChild(g),
            p.appendChild(u);
          var h = window.parent.jsMoreGames
            , w = document.createElement("div");
          w.className = "moregames_wrapper guestmoregames";
          var v = 10;
          for (hsData.data.login || (v = 5,
            w.className = "moregames_wrapper"),
            i = 0; i < v; i++) {
            var b = document.createElement("div");
            b.className = "thumbWrapper";
            var y = document.createElement("div")
              , f = document.createElement("a");
            try {
              f.setAttribute("href", "https://lagged.com/en/g/" + h[i].url_key),
                f.setAttribute("title", h[i].name),
                f.setAttribute("target", "_blank")
            } catch (e) {
              console.log(e),
                f.setAttribute("href", "https://lagged.com/")
            }
            try {
              var E = document.createTextNode(h[i].name);
              f.appendChild(E)
            } catch (e) {
              console.log(e)
            }
            try {
              var C = document.createElement("img");
              C.setAttribute("src", "https://imgs2.dab3games.com/" + h[i].thumb),
                C.setAttribute("alt", h[i].name),
                C.setAttribute("width", "200"),
                C.setAttribute("height", "200")
            } catch (e) {
              console.log(e)
            }
            y.appendChild(f),
              y.appendChild(C),
              b.appendChild(y),
              w.appendChild(b)
          }
          p.appendChild(w),
            e.appendChild(p),
            I.body.appendChild(e),
            k()
        }()) : (k(),
          I.getElementById("leaderboard-modal").remove(),
          console.log("Error: Could not save high score!"),
          console.log(e),
          n.success = !1,
          n.errormsg = "Error: Could not save high score!"),
        t && t(n)
    }
    , w = function (e) { }
    , v = 0
    , y = function (e, t) {
      c = window.parent.isFullscreen,
        I = c ? document : window.parent.document,
        4 < ++v && (v = 1);
      var n = "achievement_pops_" + v
        , a = I.createElement("div");
      a.id = "achievementPopWrap",
        a.className = n,
        a.onclick = function () {
          I.getElementsByClassName(n)[0].remove()
        }
        ;
      var o = "Achievement Saved";
      1 < e.acount && (o = e.acount + " Achievements Saved");
      var i = document.createElement("div");
      i.className = "achievement_title";
      o = document.createTextNode(o);
      i.appendChild(o),
        a.appendChild(i);
      o = document.createElement("div");
      o.className = "achievement_desc";
      i = document.createTextNode(e.name);
      o.appendChild(i),
        a.appendChild(o);
      i = document.createElement("div");
      i.className = "achievement_xp";
      o = document.createTextNode("+" + e.points + "xp");
      if (i.appendChild(o),
        a.appendChild(i),
        I.body.appendChild(a),
        t)
        try {
          window.parent.newLevel(t)
        } catch (e) {
          console.log(e)
        }
      setTimeout(function () {
        I.getElementsByClassName(n)[0] && (s(I.getElementsByClassName(n)[0]),
          v--,
          setTimeout(function () {
            I.getElementsByClassName(n)[0] && I.getElementsByClassName(n)[0].remove()
          }, 200))
      }, 4e3)
    }
    , f = 30;
  setInterval(function () {
    f++
  }, 999);
  var n = !1
    , E = "";
  try {
    var C = document.createElement("script")
      , A = document.getElementsByTagName("script")[0];
    C.async = !0,
      C.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      C.type = "text/javascript",
      C.id = "gamesourcegoogle",
      C.setAttribute("data-ad-client", "ca-pub-6893876361346206"),
      C.setAttribute("data-ad-frequency-hint", "30s");
    try {
      if (u) {
        window.parent.customChannelUse ? C.setAttribute("data-ad-channel", window.parent.customChannelUse) : C.setAttribute("data-ad-channel", "3947082707");
        try {
          window.parent.aFoundValue && window.parent.aValueRules && 0 < window.parent.aValueRules.length && (aFoundValue = !0,
            aValueRules = window.parent.aValueRules)
        } catch (e) {
          console.log(e)
        }
      } else
        n ? (C.setAttribute("data-ad-channel", E),
          console.log("channel to use: ", E)) : C.setAttribute("data-ad-channel", "3947082707")
    } catch (e) {
      console.log(e)
    }
    A.parentNode.insertBefore(C, A);
    try {
      window.adsbygoogle = window.adsbygoogle || [],
        adBreak = adConfig = function (e) {
          adsbygoogle.push(e)
        }
        ,
        adConfig({
          preloadAdBreaks: "on",
          onReady: function () {
            console.log("page is ready")
          }
        })
    } catch (e) {
      console.log(e)
    }
  } catch (e) {
    console.log(e)
  }
  LaggedAPI.GEvents = {
    start: function () {
      if (p && 30 < f)
        try {
          window.parent.postMessage("apiAds", "*")
        } catch (e) {
          console.log(e)
        }
      adBreak({
        type: "start",
        name: "start-game",
        beforeAd: () => {
          D(!0),
            T()
        }
        ,
        afterAd: () => {
          P(!1)
        }
      })
    },
    next: function () {
      if (p && 30 < f)
        try {
          window.parent.postMessage("apiAds", "*")
        } catch (e) {
          console.log(e)
        }
      adBreak({
        type: "next",
        name: "next-level",
        beforeAd: () => {
          D(!0),
            T()
        }
        ,
        afterAd: () => {
          P(!1)
        }
      })
    },
    reward: function (t, e) {
      console.log("offer reward? nothing will happen if cant"),
        adBreak({
          type: "reward",
          name: "reward",
          beforeAd: () => {
            D(!1)
          }
          ,
          afterAd: () => {
            P(!1)
          }
          ,
          beforeReward: e => {
            L(e, t)
          }
          ,
          adDismissed: () => {
            M(e)
          }
          ,
          adViewed: () => {
            q(e)
          }
        }),
        x = setTimeout(function () {
          _ || (e(!1),
            t(!1))
        }, 1e3)
    }
  };
  var x, T = function () {
    try {
      var e;
      console.log("send ad conversion"),
        aFoundValue ? (e = aValueRules[1] / 1e3,
          window.parent.gtag("event", "conversion", {
            send_to: "AW-1055364430/cX1uCOOx4LcBEM6qnvcD",
            value: e,
            currency: "USD"
          })) : window.parent.gtag("event", "conversion", {
            send_to: "AW-1055364430/cX1uCOOx4LcBEM6qnvcD"
          })
    } catch (e) {
      console.log(e)
    }
  }, _ = !1, S = !1, L = function (e, t) {
    console.log("can give reward"),
      clearTimeout(x),
      t(_ = !0, e)
  }, M = function (e) {
    console.log("ad dismissed"),
      e(_ = !1)
  }, q = function (e) {
    e(!(_ = !1))
  }, D = function (e) {
    if (p)
      try {
        window.parent.postMessage("apiHide", "*")
      } catch (e) {
        console.log(e)
      }
    else {
      try {
        window.parent.document.getElementById("mobile-right") && (window.parent.document.getElementById("mobile-right").style.display = "none"),
          window.parent.document.getElementById("minividbtn") && (window.parent.document.getElementById("minividbtn").style.display = "none"),
          window.parent.document.getElementById("gameplug") && (window.parent.document.getElementById("gameplug").style.display = "none"),
          window.parent.document.getElementById("exitfullscreen") && (window.parent.document.getElementById("exitfullscreen").style.display = "none"),
          window.parent.document.getElementById("minividbtnnewl") && (window.parent.document.getElementById("minividbtnnewl").className = "showittomob"),
          window.parent.document.getElementById("mobilerightnew") && (window.parent.document.getElementById("mobilerightnew").className = "")
      } catch (e) {
        console.log(e)
      }
      try {
        window.parent.window.parent.document.getElementById("adsContainer") && window.parent.window.parent.document.getElementById("adsContainer").remove()
      } catch (e) {
        console.log(e)
      }
    }
    S = !0
  }, P = function (e) {
    try {
      clearTimeout(void 0)
    } catch (e) {
      console.log(e)
    }
    if (p)
      try {
        window.parent.postMessage("apiShow", "*")
      } catch (e) {
        console.log(e)
      }
    else
      try {
        window.parent.document.getElementById("mobile-right") && (window.parent.document.getElementById("mobile-right").style.display = "block"),
          window.parent.document.getElementById("minividbtn") && (window.parent.document.getElementById("minividbtn").style.display = "block"),
          window.parent.document.getElementById("gameplug") && (window.parent.document.getElementById("gameplug").style.display = "block"),
          window.parent.document.getElementById("exitfullscreen") && (window.parent.document.getElementById("exitfullscreen").style.display = "block"),
          window.parent.document.getElementById("minividbtnnewl") && (window.parent.document.getElementById("minividbtnnewl").className = "showittomob showit"),
          window.parent.document.getElementById("mobilerightnew") && (window.parent.document.getElementById("mobilerightnew").className = "showmbtn")
      } catch (e) {
        console.log(e)
      }
    f = e ? 0 : 30,
      S = !1
  };
  if (LaggedAPI.APIAds = {
    show: function (e, t, n, a) {
      try {
        e && "forcead" === e && (f = 60)
      } catch (e) {
        console.log(e)
      }
      if (p && 30 < f) {
        try {
          window.parent.postMessage("apiAds", "*")
        } catch (e) {
          console.log(e)
        }
        try {
          setTimeout(function () {
            a({
              success: !0
            })
          }, 6e3)
        } catch (e) {
          console.log(e)
        }
      } else {
        try {
          if (window.parent.isPlusUser)
            return console.log("is plus user, return to game"),
              void a({
                success: !0
              })
        } catch (e) {
          console.log(e)
        }
        try {
          if (window.parent.document.getElementById("adsContainer"))
            return console.log("ad exists"),
              void a({
                success: !0
              })
        } catch (e) {
          console.log(e)
        }
        if (S || f < 30)
          return LaggedAPI.GEvents.next(),
            console.log("ad timer under 30 or interstitial ad showing"),
            void a({
              success: !0
            });
        var o = !(f = -5);
        window.parent.interShow(function (e) {
          if (!o) {
            o = !0;
            try {
              a({
                success: !0
              })
            } catch (e) {
              console.log(e);
              try {
                window.parent.showGameAfterAd(!0)
              } catch (e) {
                console.log(e)
              }
            }
          }
        }),
          clearTimeout(void 0);
        setTimeout(function () {
          window.parent.showGameAfterAd(!0),
            a({
              success: !0
            })
        }, 45e3)
      }
    }
  },
    console.log(t),
    !u && t) {
    console.log("listen for events");
    try {
      window.addEventListener("message", function (e) {
        e = e.data.split("|");
        "parentCustomChannel" === e[0] && (e = e[1],
          n = !0,
          E = e,
          document.getElementById("gamesourcegoogle") && (document.getElementById("gamesourcegoogle").setAttribute("data-ad-channel", E),
            console.log("channel to use: ", E)))
      })
    } catch (e) {
      console.log(e)
    }
  }
  window.mobilecheck = function () {
    var e = !1
      , t = navigator.userAgent || navigator.vendor || window.opera;
    return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0),
      e
  }
    ,
    Element.prototype.remove = function () {
      this.parentElement.removeChild(this)
    }
    ,
    NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
      for (var e = this.length - 1; 0 <= e; e--)
        this[e] && this[e].parentElement && this[e].parentElement.removeChild(this[e])
    }
}();
