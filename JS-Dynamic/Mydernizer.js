/*This file uses Modernizer or similar tools- some custom- to dynamically load
compatibility JavaScript files.  Compressed Customized Modernizer code will
be loaded at the top of the script.*/

/*****MODERNIZR CODE*****/
/* jshint ignore:start */
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csscalc-objectfit-unknownelements-setclasses !*/
!(function(e, n, t) {
  function r(e, n) {
    return typeof e === n;
  }
  function o() {
    var e, n, t, o, s, i, a;
    for (var l in C)
      if (C.hasOwnProperty(l)) {
        if (
          ((e = []),
          (n = C[l]),
          n.name &&
            (e.push(n.name.toLowerCase()),
            n.options && n.options.aliases && n.options.aliases.length))
        )
          for (t = 0; t < n.options.aliases.length; t++)
            e.push(n.options.aliases[t].toLowerCase());
        for (o = r(n.fn, "function") ? n.fn() : n.fn, s = 0; s < e.length; s++)
          (i = e[s]),
            (a = i.split(".")),
            1 === a.length
              ? (Modernizr[a[0]] = o)
              : (!Modernizr[a[0]] ||
                  Modernizr[a[0]] instanceof Boolean ||
                  (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])),
                (Modernizr[a[0]][a[1]] = o)),
            h.push((o ? "" : "no-") + a.join("-"));
      }
  }
  function s(e) {
    var n = w.className,
      t = Modernizr._config.classPrefix || "";
    if ((_ && (n = n.baseVal), Modernizr._config.enableJSClass)) {
      var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
      n = n.replace(r, "$1" + t + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((n += " " + t + e.join(" " + t)),
      _ ? (w.className.baseVal = n) : (w.className = n));
  }
  function i() {
    return "function" != typeof n.createElement
      ? n.createElement(arguments[0])
      : _
        ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0])
        : n.createElement.apply(n, arguments);
  }
  function a(e) {
    return e
      .replace(/([a-z])-([a-z])/g, function(e, n, t) {
        return n + t.toUpperCase();
      })
      .replace(/^-/, "");
  }
  function l(e, n) {
    return !!~("" + e).indexOf(n);
  }
  function f(e, n) {
    return function() {
      return e.apply(n, arguments);
    };
  }
  function u(e, n, t) {
    var o;
    for (var s in e)
      if (e[s] in n)
        return t === !1
          ? e[s]
          : ((o = n[e[s]]), r(o, "function") ? f(o, t || n) : o);
    return !1;
  }
  function c(e) {
    return e
      .replace(/([A-Z])/g, function(e, n) {
        return "-" + n.toLowerCase();
      })
      .replace(/^ms-/, "-ms-");
  }
  function d(n, t, r) {
    var o;
    if ("getComputedStyle" in e) {
      o = getComputedStyle.call(e, n, t);
      var s = e.console;
      if (null !== o) r && (o = o.getPropertyValue(r));
      else if (s) {
        var i = s.error ? "error" : "log";
        s[i].call(
          s,
          "getComputedStyle returning null, its possible modernizr test results are inaccurate"
        );
      }
    } else o = !t && n.currentStyle && n.currentStyle[r];
    return o;
  }
  function p() {
    var e = n.body;
    return e || ((e = i(_ ? "svg" : "body")), (e.fake = !0)), e;
  }
  function m(e, t, r, o) {
    var s,
      a,
      l,
      f,
      u = "modernizr",
      c = i("div"),
      d = p();
    if (parseInt(r, 10))
      for (; r--; )
        (l = i("div")), (l.id = o ? o[r] : u + (r + 1)), c.appendChild(l);
    return (
      (s = i("style")),
      (s.type = "text/css"),
      (s.id = "s" + u),
      (d.fake ? d : c).appendChild(s),
      d.appendChild(c),
      s.styleSheet
        ? (s.styleSheet.cssText = e)
        : s.appendChild(n.createTextNode(e)),
      (c.id = u),
      d.fake &&
        ((d.style.background = ""),
        (d.style.overflow = "hidden"),
        (f = w.style.overflow),
        (w.style.overflow = "hidden"),
        w.appendChild(d)),
      (a = t(c, e)),
      d.fake
        ? (d.parentNode.removeChild(d), (w.style.overflow = f), w.offsetHeight)
        : c.parentNode.removeChild(c),
      !!a
    );
  }
  function v(n, r) {
    var o = n.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--; ) if (e.CSS.supports(c(n[o]), r)) return !0;
      return !1;
    }
    if ("CSSSupportsRule" in e) {
      for (var s = []; o--; ) s.push("(" + c(n[o]) + ":" + r + ")");
      return (
        (s = s.join(" or ")),
        m(
          "@supports (" + s + ") { #modernizr { position: absolute; } }",
          function(e) {
            return "absolute" == d(e, null, "position");
          }
        )
      );
    }
    return t;
  }
  function y(e, n, o, s) {
    function f() {
      c && (delete P.style, delete P.modElem);
    }
    if (((s = r(s, "undefined") ? !1 : s), !r(o, "undefined"))) {
      var u = v(e, o);
      if (!r(u, "undefined")) return u;
    }
    for (
      var c, d, p, m, y, g = ["modernizr", "tspan", "samp"];
      !P.style && g.length;

    )
      (c = !0), (P.modElem = i(g.shift())), (P.style = P.modElem.style);
    for (p = e.length, d = 0; p > d; d++)
      if (
        ((m = e[d]),
        (y = P.style[m]),
        l(m, "-") && (m = a(m)),
        P.style[m] !== t)
      ) {
        if (s || r(o, "undefined")) return f(), "pfx" == n ? m : !0;
        try {
          P.style[m] = o;
        } catch (h) {}
        if (P.style[m] != y) return f(), "pfx" == n ? m : !0;
      }
    return f(), !1;
  }
  function g(e, n, t, o, s) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
      a = (e + " " + z.join(i + " ") + i).split(" ");
    return r(n, "string") || r(n, "undefined")
      ? y(a, n, o, s)
      : ((a = (e + " " + j.join(i + " ") + i).split(" ")), u(a, n, t));
  }
  var h = [],
    C = [],
    x = {
      _version: "3.6.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0
      },
      _q: [],
      on: function(e, n) {
        var t = this;
        setTimeout(function() {
          n(t[e]);
        }, 0);
      },
      addTest: function(e, n, t) {
        C.push({ name: e, fn: n, options: t });
      },
      addAsyncTest: function(e) {
        C.push({ name: null, fn: e });
      }
    },
    Modernizr = function() {};
  (Modernizr.prototype = x), (Modernizr = new Modernizr());
  var w = n.documentElement,
    _ = "svg" === w.nodeName.toLowerCase();
  Modernizr.addTest("unknownelements", function() {
    var e = i("a");
    return (e.innerHTML = "<xyz></xyz>"), 1 === e.childNodes.length;
  });
  var S = x._config.usePrefixes
    ? " -webkit- -moz- -o- -ms- ".split(" ")
    : ["", ""];
  (x._prefixes = S),
    Modernizr.addTest("csscalc", function() {
      var e = "width:",
        n = "calc(10px);",
        t = i("a");
      return (t.style.cssText = e + S.join(n + e)), !!t.style.length;
    });
  var b = "Moz O ms Webkit",
    z = x._config.usePrefixes ? b.split(" ") : [];
  x._cssomPrefixes = z;
  var T = function(n) {
    var r,
      o = S.length,
      s = e.CSSRule;
    if ("undefined" == typeof s) return t;
    if (!n) return !1;
    if (
      ((n = n.replace(/^@/, "")),
      (r = n.replace(/-/g, "_").toUpperCase() + "_RULE"),
      r in s)
    )
      return "@" + n;
    for (var i = 0; o > i; i++) {
      var a = S[i],
        l = a.toUpperCase() + "_" + r;
      if (l in s) return "@-" + a.toLowerCase() + "-" + n;
    }
    return !1;
  };
  x.atRule = T;
  var j = x._config.usePrefixes ? b.toLowerCase().split(" ") : [];
  x._domPrefixes = j;
  var E = { elem: i("modernizr") };
  Modernizr._q.push(function() {
    delete E.elem;
  });
  var P = { style: E.elem.style };
  Modernizr._q.unshift(function() {
    delete P.style;
  }),
    (x.testAllProps = g);
  var N = (x.prefixed = function(e, n, t) {
    return 0 === e.indexOf("@")
      ? T(e)
      : (-1 != e.indexOf("-") && (e = a(e)), n ? g(e, n, t) : g(e, "pfx"));
  });
  Modernizr.addTest("objectfit", !!N("objectFit"), { aliases: ["object-fit"] }),
    o(),
    s(h),
    delete x.addTest,
    delete x.addAsyncTest;
  for (var k = 0; k < Modernizr._q.length; k++) Modernizr._q[k]();
  e.Modernizr = Modernizr;
})(window, document);
/* jshint ignore:end */
/***END MODERNIZR CODE**/

/*These functions are used to dynamically load CSS/JS files when needed*/
function dynamicallyLoadScript(url) {
  var script = document.createElement("script"); // Make a script DOM node
  script.src = url; // Set it's src to the provided URL

  document.body.appendChild(script); // Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

function dynamicallyLoadCSS(url) {
  var head = document.getElementsByTagName("head")[0],
    link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = url;
  head.appendChild(link);
  return link;
}

//Develop tests for if browser is Firefox and if OS is Android
var test_Firefox;
var test_Android;
if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
  test_Firefox = true;
}
if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
  test_Android = true;
}

/******FIREFALL*****/

/**an expensive virtual keyboard as the keyboard does not function correctly
on Firefox for Android.  Overkill for a browser with < 1% market share, and
glitches half the time- but better than the alternative and won't slowdown
browsers that don't need it.*/

/*DEVNOTE: There's no reason (anymore) that Firefall-Loader.js and Firefall.js
need to be seperate files other than I'd have to update some legacy code and
there are more important priorities right now.  We can optimize this quite a
bit later.*/

if (test_Firefox === true && test_Android === true) {
  dynamicallyLoadScript("./JS-Dynamic/Firefall-Loader.js");
}

/******ObjectFit******/
if (!Modernizr.objectfit) {
  dynamicallyLoadScript("./JS-Dynamic/polyfills/fitie.js");
}

/******calc******/
if (!Modernizr.csscalc) {
  dynamicallyLoadScript("./JS-Dynamic/polyfills/calc.js");
}

/******HTML5 Sectional Elements******/
if (!Modernizr.unknownelements) {
  dynamicallyLoadScript("./JS-Dynamic/polyfills/html5shiv.min.js");
  dynamicallyLoadScript("./JS-Dynamic/polyfills/html5shiv-printshiv.min.js");
}
