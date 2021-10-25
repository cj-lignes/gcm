! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.printJS = t() : e.printJS = t() }(window, function() {
    return function(n) {
        var r = {};

        function o(e) { if (r[e]) return r[e].exports; var t = r[e] = { i: e, l: !1, exports: {} }; return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports }
        return o.m = n, o.c = r, o.d = function(e, t, n) { o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, o.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, o.t = function(t, e) {
            if (1 & e && (t = o(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                for (var r in t) o.d(n, r, function(e) { return t[e] }.bind(null, r));
            return n
        }, o.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return o.d(t, "a", t), t }, o.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, o.p = "", o(o.s = 4)
    }([function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = i(n(2)),
            o = i(n(3));

        function i(e) { return e && e.__esModule ? e : { default: e } }
        var a = {
            send: function(o, e) {
                document.getElementsByTagName("body")[0].appendChild(e);
                var a = document.getElementById(o.frameId);
                "pdf" === o.type && (r.default.isIE() || r.default.isEdge()) ? a.setAttribute("onload", d(a, o)) : e.onload = function() {
                    if ("pdf" === o.type) d(a, o);
                    else {
                        var e = a.contentWindow || a.contentDocument;
                        if (e.document && (e = e.document), e.body.innerHTML = o.htmlData, "pdf" !== o.type && null !== o.style) {
                            var t = document.createElement("style");
                            t.innerHTML = o.style, e.head.appendChild(t)
                        }
                        "image" === o.type ? (n = e, r = o, i = [], r.printable.forEach(function(e, t) {
                            return i.push((r = n, o = t, new Promise(function(n) {
                                ! function e() {
                                    var t = r ? r.getElementById("printableImage" + o) : null;
                                    t && void 0 !== t.naturalWidth && 0 !== t.naturalWidth ? n() : setTimeout(e, 500)
                                }()
                            })));
                            var r, o
                        }), Promise.all(i)).then(function() { d(a, o) }) : d(a, o)
                    }
                    var n, r, i
                }
            }
        };

        function d(e, t) {
            try {! function(t, e) { if (t.focus(), r.default.isEdge() || r.default.isIE()) try { t.contentWindow.document.execCommand("print", !1, null) } catch (e) { t.contentWindow.print() } else t.contentWindow.print() }(e) } catch (e) { t.onError(e) } finally {
                ! function(t) {
                    if (t.showModal && o.default.close(), t.onLoadingEnd && t.onLoadingEnd(), (t.showModal || t.onLoadingStart) && window.URL.revokeObjectURL(t.printable), t.onPrintDialogClose) {
                        var n = "mouseover";
                        (r.default.isChrome() || r.default.isFirefox()) && (n = "focus"), window.addEventListener(n, function e() { window.removeEventListener(n, e), t.onPrintDialogClose() })
                    }
                }(t)
            }
        }
        t.default = a
    }, function(e, t, n) {
        "use strict";

        function c(e, t) {
            var n = document.defaultView || window,
                r = "",
                o = n.getComputedStyle(e, "");
            return Object.keys(o).map(function(e) {
                (-1 !== t.targetStyles.indexOf("*") || -1 !== t.targetStyle.indexOf(o[e]) || function(e, t) {
                    for (var n = 0; n < e.length; n++)
                        if (-1 !== t.indexOf(e[n])) return !0;
                    return !1
                }(t.targetStyles, o[e])) && o.getPropertyValue(o[e]) && (r += o[e] + ":" + o.getPropertyValue(o[e]) + ";")
            }), r += "max-width: " + t.maxWidth + "px !important;" + t.font_size + " !important;"
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.addWrapper = function(e, t) { return '<div style="font-family:' + t.font + " !important; font-size: " + t.font_size + ' !important; width:100%;">' + e + "</div>" }, t.capitalizePrint = function(e) { return e.charAt(0).toUpperCase() + e.slice(1) }, t.collectStyles = c, t.loopNodesCollectStyles = function e(t, n) {
            for (var r = 0; r < t.length; r++) {
                var o = t[r];
                if (-1 === n.ignoreElements.indexOf(o.getAttribute("id"))) {
                    var i = o.tagName;
                    if ("INPUT" === i || "TEXTAREA" === i || "SELECT" === i) {
                        var a = c(o, n),
                            d = o.parentNode,
                            l = "SELECT" === i ? document.createTextNode(o.options[o.selectedIndex].text) : document.createTextNode(o.value),
                            s = document.createElement("div");
                        s.appendChild(l), s.setAttribute("style", a), d.appendChild(s), d.removeChild(o)
                    } else o.setAttribute("style", c(o, n));
                    var u = o.children;
                    u && u.length && e(u, n)
                } else o.parentNode.removeChild(o)
            }
        }, t.addHeader = function(e, t, n) {
            var r = document.createElement("h1"),
                o = document.createTextNode(t);
            r.appendChild(o), r.setAttribute("style", n), e.insertBefore(r, e.childNodes[0])
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = { isFirefox: function() { return "undefined" != typeof InstallTrigger }, isIE: function() { return -1 !== navigator.userAgent.indexOf("MSIE") || !!document.documentMode }, isEdge: function() { return !r.isIE() && !!window.StyleMedia }, isChrome: function() { return !!window.chrome && !!window.chrome.webstore }, isSafari: function() { return 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") || -1 !== navigator.userAgent.toLowerCase().indexOf("safari") } };
        t.default = r
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = {
            show: function(e) {
                var t = document.createElement("div");
                t.setAttribute("style", "font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;"), t.setAttribute("id", "printJS-Modal");
                var n = document.createElement("div");
                n.setAttribute("style", "display:table-cell; vertical-align:middle; padding-bottom:100px;");
                var r = document.createElement("div");
                r.setAttribute("class", "printClose"), r.setAttribute("id", "printClose"), n.appendChild(r);
                var o = document.createElement("span");
                o.setAttribute("class", "printSpinner"), n.appendChild(o);
                var i = document.createTextNode(e.modalMessage);
                n.appendChild(i), t.appendChild(n), document.getElementsByTagName("body")[0].appendChild(t), document.getElementById("printClose").addEventListener("click", function() { a.close() })
            },
            close: function() {
                var e = document.getElementById("printJS-Modal");
                e.parentNode.removeChild(e)
            }
        };
        t.default = a
    }, function(e, t, n) { e.exports = n(5) }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), n(6);
        var r, o = n(7);
        var i = ((r = o) && r.__esModule ? r : { default: r }).default.init;
        "undefined" != typeof window && (window.printJS = i), t.default = i
    }, function(e, t, n) {}, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
            i = r(n(2)),
            a = r(n(3)),
            d = r(n(8)),
            l = r(n(9)),
            s = r(n(10)),
            u = r(n(11));

        function r(e) { return e && e.__esModule ? e : { default: e } }
        var c = ["pdf", "html", "image", "json"];
        t.default = {
            init: function() {
                var t = { printable: null, fallbackPrintable: null, type: "pdf", header: null, headerStyle: "font-weight: 300;", maxWidth: 800, font: "TimesNewRoman", font_size: "12pt", honorMarginPadding: !0, honorColor: !1, properties: null, gridHeaderStyle: "font-weight: bold; padding: 5px; border: 1px solid #dddddd;", gridStyle: "border: 1px solid lightgray; margin-bottom: -1px;", showModal: !1, onError: function(e) { throw e }, onLoadingStart: null, onLoadingEnd: null, onPrintDialogClose: null, onPdfOpen: null, modalMessage: "Retrieving Document...", frameId: "printJS", htmlData: "", documentTitle: "Document", targetStyle: ["clear", "display", "width", "min-width", "height", "min-height", "max-height"], targetStyles: ["border", "box", "break", "text-decoration"], ignoreElements: [], imageStyle: "width:100%;", repeatTableHeader: !0, css: null, style: null, scanStyles: !0 },
                    e = arguments[0];
                if (void 0 === e) throw new Error("printJS expects at least 1 attribute.");
                switch (void 0 === e ? "undefined" : o(e)) {
                    case "string":
                        t.printable = encodeURI(e), t.fallbackPrintable = t.printable, t.type = arguments[1] || t.type;
                        break;
                    case "object":
                        t.printable = e.printable, t.fallbackPrintable = void 0 !== e.fallbackPrintable ? e.fallbackPrintable : t.printable, t.type = void 0 !== e.type ? e.type : t.type, t.frameId = void 0 !== e.frameId ? e.frameId : t.frameId, t.header = void 0 !== e.header ? e.header : t.header, t.headerStyle = void 0 !== e.headerStyle ? e.headerStyle : t.headerStyle, t.maxWidth = void 0 !== e.maxWidth ? e.maxWidth : t.maxWidth, t.font = void 0 !== e.font ? e.font : t.font, t.font_size = void 0 !== e.font_size ? e.font_size : t.font_size, t.honorMarginPadding = void 0 !== e.honorMarginPadding ? e.honorMarginPadding : t.honorMarginPadding, t.properties = void 0 !== e.properties ? e.properties : t.properties, t.gridHeaderStyle = void 0 !== e.gridHeaderStyle ? e.gridHeaderStyle : t.gridHeaderStyle, t.gridStyle = void 0 !== e.gridStyle ? e.gridStyle : t.gridStyle, t.showModal = void 0 !== e.showModal ? e.showModal : t.showModal, t.onError = void 0 !== e.onError ? e.onError : t.onError, t.onLoadingStart = void 0 !== e.onLoadingStart ? e.onLoadingStart : t.onLoadingStart, t.onLoadingEnd = void 0 !== e.onLoadingEnd ? e.onLoadingEnd : t.onLoadingEnd, t.onPrintDialogClose = void 0 !== e.onPrintDialogClose ? e.onPrintDialogClose : t.onPrintDialogClose, t.onPdfOpen = void 0 !== e.onPdfOpen ? e.onPdfOpen : t.onPdfOpen, t.modalMessage = void 0 !== e.modalMessage ? e.modalMessage : t.modalMessage, t.documentTitle = void 0 !== e.documentTitle ? e.documentTitle : t.documentTitle, t.targetStyle = void 0 !== e.targetStyle ? e.targetStyle : t.targetStyle, t.targetStyles = void 0 !== e.targetStyles ? e.targetStyles : t.targetStyles, t.ignoreElements = void 0 !== e.ignoreElements ? e.ignoreElements : t.ignoreElements, t.imageStyle = void 0 !== e.imageStyle ? e.imageStyle : t.imageStyle, t.repeatTableHeader = void 0 !== e.repeatTableHeader ? e.repeatTableHeader : t.repeatTableHeader, t.css = void 0 !== e.css ? e.css : t.css, t.style = void 0 !== e.style ? e.style : t.style, t.scanStyles = void 0 !== e.scanStyles ? e.scanStyles : t.scanStyles;
                        break;
                    default:
                        throw new Error('Unexpected argument type! Expected "string" or "object", got ' + (void 0 === e ? "undefined" : o(e)))
                }
                if (!t.printable) throw new Error("Missing printable information.");
                if (!t.type || "string" != typeof t.type || -1 === c.indexOf(t.type.toLowerCase())) throw new Error("Invalid print type. Available types are: pdf, html, image and json.");
                t.showModal && a.default.show(t), t.onLoadingStart && t.onLoadingStart();
                var n = document.getElementById(t.frameId);
                n && n.parentNode.removeChild(n);
                var r = void 0;
                switch ((r = document.createElement("iframe")).setAttribute("style", "visibility: hidden; height: 0; width: 0; position: absolute;"), r.setAttribute("id", t.frameId), "pdf" !== t.type && (r.srcdoc = "<html><head><title>" + t.documentTitle + "</title>", null !== t.css && (Array.isArray(t.css) || (t.css = [t.css]), t.css.forEach(function(e) { r.srcdoc += '<link rel="stylesheet" href="' + e + '">' })), r.srcdoc += "</head><body></body></html>"), t.type) {
                    case "pdf":
                        if (i.default.isFirefox() || i.default.isEdge() || i.default.isIE()) try { console.info("PrintJS currently doesn't support PDF printing in Firefox, Internet Explorer and Edge."), window.open(t.fallbackPrintable, "_blank").focus(), t.onPdfOpen && t.onPdfOpen() } catch (e) { t.onError(e) } finally { t.showModal && a.default.close(), t.onLoadingEnd && t.onLoadingEnd() } else d.default.print(t, r);
                        break;
                    case "image":
                        s.default.print(t, r);
                        break;
                    case "html":
                        l.default.print(t, r);
                        break;
                    case "json":
                        u.default.print(t, r)
                }
            }
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r, o = n(0),
            i = (r = o) && r.__esModule ? r : { default: r };

        function a(e, t) { t.setAttribute("src", e.printable), i.default.send(e, t) }
        t.default = {
            print: function(t, n) {
                if (t.printable = /^(blob|http)/i.test(t.printable) ? t.printable : window.location.origin + ("/" !== t.printable.charAt(0) ? "/" + t.printable : t.printable), t.showModal || t.onLoadingStart) {
                    var r = new window.XMLHttpRequest;
                    r.responseType = "arraybuffer", r.addEventListener("load", function() {
                        var e = new window.Blob([r.response], { type: "application/pdf" });
                        e = window.URL.createObjectURL(e), t.printable = e, a(t, n)
                    }), r.open("GET", t.printable, !0), r.send()
                } else a(t, n)
            }
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r, i = n(1),
            o = n(0),
            a = (r = o) && r.__esModule ? r : { default: r };
        t.default = {
            print: function(e, t) {
                var n = document.getElementById(e.printable);
                if (!n) return window.console.error("Invalid HTML element id: " + e.printable), !1;
                var r = document.createElement("div");
                if (r.appendChild(n.cloneNode(!0)), r.setAttribute("style", "height:0; overflow:hidden;"), r.setAttribute("id", "printJS-html"), n.parentNode.appendChild(r), r = document.getElementById("printJS-html"), !0 === e.scanStyles) {
                    e.honorMarginPadding && e.targetStyles.push("margin", "padding"), e.honorColor && e.targetStyles.push("color"), r.setAttribute("style", (0, i.collectStyles)(r, e) + "margin:0 !important;");
                    var o = r.children;
                    (0, i.loopNodesCollectStyles)(o, e)
                }
                e.header && (0, i.addHeader)(r, e.header, e.headerStyle), r.parentNode.removeChild(r), e.htmlData = (0, i.addWrapper)(r.innerHTML, e), a.default.send(e, t)
            }
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r, o = n(1),
            i = n(0),
            a = (r = i) && r.__esModule ? r : { default: r };
        t.default = {
            print: function(e, t) {
                e.printable.constructor !== Array && (e.printable = [e.printable]);
                var d, l, s, n = document.createElement("div");
                n.setAttribute("style", "width:100%"), (d = n, l = e, s = [], l.printable.forEach(function(e, t) {
                    var n, r, o, i, a = document.createElement("img");
                    a.src = e, s.push((n = d, r = l, o = a, i = t, new Promise(function(t) {
                        o.onload = function() {
                            var e = document.createElement("div");
                            e.setAttribute("style", r.imageStyle), o.setAttribute("style", "width:100%;"), o.setAttribute("id", "printableImage" + i), e.appendChild(o), n.appendChild(e), t()
                        }
                    })))
                }), Promise.all(s)).then(function() { e.header && (0, o.addHeader)(n, e.header, e.headerStyle), e.htmlData = n.outerHTML, a.default.send(e, t) })
            }
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
            u = n(1),
            i = n(0),
            a = (r = i) && r.__esModule ? r : { default: r };
        t.default = {
            print: function(t, e) {
                if ("object" !== o(t.printable)) throw new Error("Invalid javascript data object (JSON).");
                if ("boolean" != typeof t.repeatTableHeader) throw new Error("Invalid value for repeatTableHeader attribute (JSON).");
                if (!t.properties || !Array.isArray(t.properties)) throw new Error("Invalid properties array for your JSON data.");
                t.properties = t.properties.map(function(e) { return { field: "object" === (void 0 === e ? "undefined" : o(e)) ? e.field : e, displayName: "object" === (void 0 === e ? "undefined" : o(e)) ? e.displayName : e, columnSize: "object" === (void 0 === e ? "undefined" : o(e)) && e.columnSize ? e.columnSize + ";" : 100 / t.properties.length + "%;" } });
                var n = "";
                t.header && (n += '<h1 style="' + t.headerStyle + '">' + t.header + "</h1>"), n += function(e) {
                    var t = e.printable,
                        n = e.properties,
                        r = '<table style="border-collapse: collapse; width: 100%;">';
                    e.repeatTableHeader && (r += "<thead>");
                    r += "<tr>";
                    for (var o = 0; o < n.length; o++) r += '<th style="width:' + n[o].columnSize + ";" + e.gridHeaderStyle + '">' + (0, u.capitalizePrint)(n[o].displayName) + "</th>";
                    r += "</tr>", e.repeatTableHeader && (r += "</thead>");
                    r += "<tbody>";
                    for (var i = 0; i < t.length; i++) {
                        r += "<tr>";
                        for (var a = 0; a < n.length; a++) {
                            var d = t[i],
                                l = n[a].field.split(".");
                            if (1 < l.length)
                                for (var s = 0; s < l.length; s++) d = d[l[s]];
                            else d = d[n[a].field];
                            r += '<td style="width:' + n[a].columnSize + e.gridStyle + '">' + d + "</td>"
                        }
                        r += "</tr>"
                    }
                    return r += "</tbody></table>"
                }(t), t.htmlData = (0, u.addWrapper)(n, t), a.default.send(t, e)
            }
        }
    }]).default
});