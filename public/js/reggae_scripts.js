function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}
var Reggae = function(e) {
    return e.Utils = {}, 
    e.Menu = {}, 
    e.Dropdowns = {},  
    e.Gallery = {}, 
    // e.Maps = {}, 
    e.Rooms = {}, e
}(Reggae || {});
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function(e) {
    var t = function() {
            if (e && e.fn && e.fn.select2 && e.fn.select2.amd) var t = e.fn.select2.amd;
            var t;
            return function() {
                    if (!t || !t.requirejs) {
                        t ? n = t : t = {};
                        var e, n, i;
                        ! function(t) {
                            function a(e, t) {
                                return v.call(e, t)
                            }

                            function s(e, t) {
                                var n, i, a, s, o, r, d, l, u, c, h, m = t && t.split("/"),
                                    p = A.map,
                                    f = p && p["*"] || {};
                                if (e && "." === e.charAt(0))
                                    if (t) {
                                        for (e = e.split("/"), o = e.length - 1, A.nodeIdCompat && w.test(e[o]) && (e[o] = e[o].replace(w, "")), e = m.slice(0, m.length - 1).concat(e), u = 0; u < e.length; u += 1)
                                            if (h = e[u], "." === h) e.splice(u, 1), u -= 1;
                                            else if (".." === h) {
                                            if (1 === u && (".." === e[2] || ".." === e[0])) break;
                                            u > 0 && (e.splice(u - 1, 2), u -= 2)
                                        }
                                        e = e.join("/")
                                    } else 0 === e.indexOf("./") && (e = e.substring(2));
                                if ((m || f) && p) {
                                    for (n = e.split("/"), u = n.length; u > 0; u -= 1) {
                                        if (i = n.slice(0, u).join("/"), m)
                                            for (c = m.length; c > 0; c -= 1)
                                                if (a = p[m.slice(0, c).join("/")], a && (a = a[i])) {
                                                    s = a, r = u;
                                                    break
                                                }
                                        if (s) break;
                                        !d && f && f[i] && (d = f[i], l = u)
                                    }!s && d && (s = d, r = l), s && (n.splice(0, r, s), e = n.join("/"))
                                }
                                return e
                            }

                            function o(e, n) {
                                return function() {
                                    var i = M.call(arguments, 0);
                                    return "string" != typeof i[0] && 1 === i.length && i.push(null), m.apply(t, i.concat([e, n]))
                                }
                            }

                            function r(e) {
                                return function(t) {
                                    return s(t, e)
                                }
                            }

                            function d(e) {
                                return function(t) {
                                    _[e] = t
                                }
                            }

                            function l(e) {
                                if (a(y, e)) {
                                    var n = y[e];
                                    delete y[e], g[e] = !0, h.apply(t, n)
                                }
                                if (!a(_, e) && !a(g, e)) throw new Error("No " + e);
                                return _[e]
                            }

                            function u(e) {
                                var t, n = e ? e.indexOf("!") : -1;
                                return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
                            }

                            function c(e) {
                                return function() {
                                    return A && A.config && A.config[e] || {}
                                }
                            }
                            var h, m, p, f, _ = {},
                                y = {},
                                A = {},
                                g = {},
                                v = Object.prototype.hasOwnProperty,
                                M = [].slice,
                                w = /\.js$/;
                            p = function(e, t) {
                                var n, i = u(e),
                                    a = i[0];
                                return e = i[1], a && (a = s(a, t), n = l(a)), a ? e = n && n.normalize ? n.normalize(e, r(t)) : s(e, t) : (e = s(e, t), i = u(e), a = i[0], e = i[1], a && (n = l(a))), {
                                    f: a ? a + "!" + e : e,
                                    n: e,
                                    pr: a,
                                    p: n
                                }
                            }, f = {
                                require: function(e) {
                                    return o(e)
                                },
                                exports: function(e) {
                                    var t = _[e];
                                    return "undefined" != typeof t ? t : _[e] = {}
                                },
                                module: function(e) {
                                    return {
                                        id: e,
                                        uri: "",
                                        exports: _[e],
                                        config: c(e)
                                    }
                                }
                            }, h = function(e, n, i, s) {
                                var r, u, c, h, m, A, v = [],
                                    M = typeof i;
                                if (s = s || e, "undefined" === M || "function" === M) {
                                    for (n = !n.length && i.length ? ["require", "exports", "module"] : n, m = 0; m < n.length; m += 1)
                                        if (h = p(n[m], s), u = h.f, "require" === u) v[m] = f.require(e);
                                        else if ("exports" === u) v[m] = f.exports(e), A = !0;
                                    else if ("module" === u) r = v[m] = f.module(e);
                                    else if (a(_, u) || a(y, u) || a(g, u)) v[m] = l(u);
                                    else {
                                        if (!h.p) throw new Error(e + " missing " + u);
                                        h.p.load(h.n, o(s, !0), d(u), {}), v[m] = _[u]
                                    }
                                    c = i ? i.apply(_[e], v) : void 0, e && (r && r.exports !== t && r.exports !== _[e] ? _[e] = r.exports : c === t && A || (_[e] = c))
                                } else e && (_[e] = i)
                            }, e = n = m = function(e, n, i, a, s) {
                                if ("string" == typeof e) return f[e] ? f[e](n) : l(p(e, n).f);
                                if (!e.splice) {
                                    if (A = e, A.deps && m(A.deps, A.callback), !n) return;
                                    n.splice ? (e = n, n = i, i = null) : e = t
                                }
                                return n = n || function() {}, "function" == typeof i && (i = a, a = s), a ? h(t, e, n, i) : setTimeout(function() {
                                    h(t, e, n, i)
                                }, 4), m
                            }, m.config = function(e) {
                                return m(e)
                            }, e._defined = _, i = function(e, t, n) {
                                if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
                                t.splice || (n = t, t = []), a(_, e) || a(y, e) || (y[e] = [e, t, n])
                            }, i.amd = {
                                jQuery: !0
                            }
                        }(), t.requirejs = e, t.require = n, t.define = i
                    }
                }(), t.define("almond", function() {}), t.define("jquery", [], function() {
                    var t = e || $;
                    return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t
                }), t.define("select2/utils", ["jquery"], function(e) {
                    function t(e) {
                        var t = e.prototype,
                            n = [];
                        for (var i in t) {
                            var a = t[i];
                            "function" == typeof a && "constructor" !== i && n.push(i)
                        }
                        return n
                    }
                    var n = {};
                    n.Extend = function(e, t) {
                        function n() {
                            this.constructor = e
                        }
                        var i = {}.hasOwnProperty;
                        for (var a in t) i.call(t, a) && (e[a] = t[a]);
                        return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                    }, n.Decorate = function(e, n) {
                        function i() {
                            var t = Array.prototype.unshift,
                                i = n.prototype.constructor.length,
                                a = e.prototype.constructor;
                            i > 0 && (t.call(arguments, e.prototype.constructor), a = n.prototype.constructor), a.apply(this, arguments)
                        }

                        function a() {
                            this.constructor = i
                        }
                        var s = t(n),
                            o = t(e);
                        n.displayName = e.displayName, i.prototype = new a;
                        for (var r = 0; r < o.length; r++) {
                            var d = o[r];
                            i.prototype[d] = e.prototype[d]
                        }
                        for (var l = (function(e) {
                                var t = function() {};
                                e in i.prototype && (t = i.prototype[e]);
                                var a = n.prototype[e];
                                return function() {
                                    var e = Array.prototype.unshift;
                                    return e.call(arguments, t), a.apply(this, arguments)
                                }
                            }), u = 0; u < s.length; u++) {
                            var c = s[u];
                            i.prototype[c] = l(c)
                        }
                        return i
                    };
                    var i = function() {
                        this.listeners = {}
                    };
                    return i.prototype.on = function(e, t) {
                        this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
                    }, i.prototype.trigger = function(e) {
                        var t = Array.prototype.slice,
                            n = t.call(arguments, 1);
                        this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), n[0]._type = e, e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                    }, i.prototype.invoke = function(e, t) {
                        for (var n = 0, i = e.length; i > n; n++) e[n].apply(this, t)
                    }, n.Observable = i, n.generateChars = function(e) {
                        for (var t = "", n = 0; e > n; n++) {
                            var i = Math.floor(36 * Math.random());
                            t += i.toString(36)
                        }
                        return t
                    }, n.bind = function(e, t) {
                        return function() {
                            e.apply(t, arguments)
                        }
                    }, n._convertData = function(e) {
                        for (var t in e) {
                            var n = t.split("-"),
                                i = e;
                            if (1 !== n.length) {
                                for (var a = 0; a < n.length; a++) {
                                    var s = n[a];
                                    s = s.substring(0, 1).toLowerCase() + s.substring(1), s in i || (i[s] = {}), a == n.length - 1 && (i[s] = e[t]), i = i[s]
                                }
                                delete e[t]
                            }
                        }
                        return e
                    }, n.hasScroll = function(t, n) {
                        var i = e(n),
                            a = n.style.overflowX,
                            s = n.style.overflowY;
                        return a !== s || "hidden" !== s && "visible" !== s ? "scroll" === a || "scroll" === s ? !0 : i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth : !1
                    }, n.escapeMarkup = function(e) {
                        var t = {
                            "\\": "&#92;",
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;",
                            "/": "&#47;"
                        };
                        return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function(e) {
                            return t[e]
                        })
                    }, n.appendMany = function(t, n) {
                        if ("1.7" === e.fn.jquery.substr(0, 3)) {
                            var i = e();
                            e.map(n, function(e) {
                                i = i.add(e)
                            }), n = i
                        }
                        t.append(n)
                    }, n
                }), t.define("select2/results", ["jquery", "./utils"], function(e, t) {
                    function n(e, t, i) {
                        this.$element = e, this.data = i, this.options = t, n.__super__.constructor.call(this)
                    }
                    return t.Extend(n, t.Observable), n.prototype.render = function() {
                        var t = e('<ul class="select2-results__options" role="tree"></ul>');
                        return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t, t
                    }, n.prototype.clear = function() {
                        this.$results.empty()
                    }, n.prototype.displayMessage = function(t) {
                        var n = this.options.get("escapeMarkup");
                        this.clear(), this.hideLoading();
                        var i = e('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                            a = this.options.get("translations").get(t.message);
                        i.append(n(a(t.args))), i[0].className += " select2-results__message", this.$results.append(i)
                    }, n.prototype.hideMessages = function() {
                        this.$results.find(".select2-results__message").remove()
                    }, n.prototype.append = function(e) {
                        this.hideLoading();
                        var t = [];
                        if (null == e.results || 0 === e.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", {
                            message: "noResults"
                        }));
                        e.results = this.sort(e.results);
                        for (var n = 0; n < e.results.length; n++) {
                            var i = e.results[n],
                                a = this.option(i);
                            t.push(a)
                        }
                        this.$results.append(t)
                    }, n.prototype.position = function(e, t) {
                        var n = t.find(".select2-results");
                        n.append(e)
                    }, n.prototype.sort = function(e) {
                        var t = this.options.get("sorter");
                        return t(e)
                    }, n.prototype.highlightFirstItem = function() {
                        var e = this.$results.find(".select2-results__option[aria-selected]"),
                            t = e.filter("[aria-selected=true]");
                        t.length > 0 ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible()
                    }, n.prototype.setClasses = function() {
                        var t = this;
                        this.data.current(function(n) {
                            var i = e.map(n, function(e) {
                                    return e.id.toString()
                                }),
                                a = t.$results.find(".select2-results__option[aria-selected]");
                            a.each(function() {
                                var t = e(this),
                                    n = e.data(this, "data"),
                                    a = "" + n.id;
                                null != n.element && n.element.selected || null == n.element && e.inArray(a, i) > -1 ? t.attr("aria-selected", "true") : t.attr("aria-selected", "false")
                            })
                        })
                    }, n.prototype.showLoading = function(e) {
                        this.hideLoading();
                        var t = this.options.get("translations").get("searching"),
                            n = {
                                disabled: !0,
                                loading: !0,
                                text: t(e)
                            },
                            i = this.option(n);
                        i.className += " loading-results", this.$results.prepend(i)
                    }, n.prototype.hideLoading = function() {
                        this.$results.find(".loading-results").remove()
                    }, n.prototype.option = function(t) {
                        var n = document.createElement("li");
                        n.className = "select2-results__option";
                        var i = {
                            role: "treeitem",
                            "aria-selected": "false"
                        };
                        t.disabled && (delete i["aria-selected"], i["aria-disabled"] = "true"), null == t.id && delete i["aria-selected"], null != t._resultId && (n.id = t._resultId), t.title && (n.title = t.title), t.children && (i.role = "group", i["aria-label"] = t.text, delete i["aria-selected"]);
                        for (var a in i) {
                            var s = i[a];
                            n.setAttribute(a, s)
                        }
                        if (t.children) {
                            var o = e(n),
                                r = document.createElement("strong");
                            r.className = "select2-results__group", e(r), this.template(t, r);
                            for (var d = [], l = 0; l < t.children.length; l++) {
                                var u = t.children[l],
                                    c = this.option(u);
                                d.push(c)
                            }
                            var h = e("<ul></ul>", {
                                "class": "select2-results__options select2-results__options--nested"
                            });
                            h.append(d), o.append(r), o.append(h)
                        } else this.template(t, n);
                        return e.data(n, "data", t), n
                    }, n.prototype.bind = function(t, n) {
                        var i = this,
                            a = t.id + "-results";
                        this.$results.attr("id", a), t.on("results:all", function(e) {
                            i.clear(), i.append(e.data), t.isOpen() && (i.setClasses(), i.highlightFirstItem())
                        }), t.on("results:append", function(e) {
                            i.append(e.data), t.isOpen() && i.setClasses()
                        }), t.on("query", function(e) {
                            i.hideMessages(), i.showLoading(e)
                        }), t.on("select", function() {
                            t.isOpen() && (i.setClasses(), i.highlightFirstItem())
                        }), t.on("unselect", function() {
                            t.isOpen() && (i.setClasses(), i.highlightFirstItem())
                        }), t.on("open", function() {
                            i.$results.attr("aria-expanded", "true"), i.$results.attr("aria-hidden", "false"), i.setClasses(), i.ensureHighlightVisible()
                        }), t.on("close", function() {
                            i.$results.attr("aria-expanded", "false"), i.$results.attr("aria-hidden", "true"), i.$results.removeAttr("aria-activedescendant")
                        }), t.on("results:toggle", function() {
                            var e = i.getHighlightedResults();
                            0 !== e.length && e.trigger("mouseup")
                        }), t.on("results:select", function() {
                            var e = i.getHighlightedResults();
                            if (0 !== e.length) {
                                var t = e.data("data");
                                "true" == e.attr("aria-selected") ? i.trigger("close", {}) : i.trigger("select", {
                                    data: t
                                })
                            }
                        }), t.on("results:previous", function() {
                            var e = i.getHighlightedResults(),
                                t = i.$results.find("[aria-selected]"),
                                n = t.index(e);
                            if (0 !== n) {
                                var a = n - 1;
                                0 === e.length && (a = 0);
                                var s = t.eq(a);
                                s.trigger("mouseenter");
                                var o = i.$results.offset().top,
                                    r = s.offset().top,
                                    d = i.$results.scrollTop() + (r - o);
                                0 === a ? i.$results.scrollTop(0) : 0 > r - o && i.$results.scrollTop(d)
                            }
                        }), t.on("results:next", function() {
                            var e = i.getHighlightedResults(),
                                t = i.$results.find("[aria-selected]"),
                                n = t.index(e),
                                a = n + 1;
                            if (!(a >= t.length)) {
                                var s = t.eq(a);
                                s.trigger("mouseenter");
                                var o = i.$results.offset().top + i.$results.outerHeight(!1),
                                    r = s.offset().top + s.outerHeight(!1),
                                    d = i.$results.scrollTop() + r - o;
                                0 === a ? i.$results.scrollTop(0) : r > o && i.$results.scrollTop(d)
                            }
                        }), t.on("results:focus", function(e) {
                            e.element.addClass("select2-results__option--highlighted")
                        }), t.on("results:message", function(e) {
                            i.displayMessage(e)
                        }), e.fn.mousewheel && this.$results.on("mousewheel", function(e) {
                            var t = i.$results.scrollTop(),
                                n = i.$results.get(0).scrollHeight - t + e.deltaY,
                                a = e.deltaY > 0 && t - e.deltaY <= 0,
                                s = e.deltaY < 0 && n <= i.$results.height();
                            a ? (i.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : s && (i.$results.scrollTop(i.$results.get(0).scrollHeight - i.$results.height()), e.preventDefault(), e.stopPropagation())
                        }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(t) {
                            var n = e(this),
                                a = n.data("data");
                            return "true" === n.attr("aria-selected") ? void(i.options.get("multiple") ? i.trigger("unselect", {
                                originalEvent: t,
                                data: a
                            }) : i.trigger("close", {})) : void i.trigger("select", {
                                originalEvent: t,
                                data: a
                            })
                        }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(t) {
                            var n = e(this).data("data");
                            i.getHighlightedResults().removeClass("select2-results__option--highlighted"), i.trigger("results:focus", {
                                data: n,
                                element: e(this)
                            })
                        })
                    }, n.prototype.getHighlightedResults = function() {
                        var e = this.$results.find(".select2-results__option--highlighted");
                        return e
                    }, n.prototype.destroy = function() {
                        this.$results.remove()
                    }, n.prototype.ensureHighlightVisible = function() {
                        var e = this.getHighlightedResults();
                        if (0 !== e.length) {
                            var t = this.$results.find("[aria-selected]"),
                                n = t.index(e),
                                i = this.$results.offset().top,
                                a = e.offset().top,
                                s = this.$results.scrollTop() + (a - i),
                                o = a - i;
                            s -= 2 * e.outerHeight(!1), 2 >= n ? this.$results.scrollTop(0) : (o > this.$results.outerHeight() || 0 > o) && this.$results.scrollTop(s)
                        }
                    }, n.prototype.template = function(t, n) {
                        var i = this.options.get("templateResult"),
                            a = this.options.get("escapeMarkup"),
                            s = i(t, n);
                        null == s ? n.style.display = "none" : "string" == typeof s ? n.innerHTML = a(s) : e(n).append(s)
                    }, n
                }), t.define("select2/keys", [], function() {
                    var e = {
                        BACKSPACE: 8,
                        TAB: 9,
                        ENTER: 13,
                        SHIFT: 16,
                        CTRL: 17,
                        ALT: 18,
                        ESC: 27,
                        SPACE: 32,
                        PAGE_UP: 33,
                        PAGE_DOWN: 34,
                        END: 35,
                        HOME: 36,
                        LEFT: 37,
                        UP: 38,
                        RIGHT: 39,
                        DOWN: 40,
                        DELETE: 46
                    };
                    return e
                }), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(e, t, n) {
                    function i(e, t) {
                        this.$element = e, this.options = t, i.__super__.constructor.call(this)
                    }
                    return t.Extend(i, t.Observable), i.prototype.render = function() {
                        var t = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                        return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), t.attr("title", this.$element.attr("title")), t.attr("tabindex", this._tabindex), this.$selection = t, t
                    }, i.prototype.bind = function(e, t) {
                        var i = this,
                            a = (e.id + "-container", e.id + "-results");
                        this.container = e, this.$selection.on("focus", function(e) {
                            i.trigger("focus", e)
                        }), this.$selection.on("blur", function(e) {
                            i._handleBlur(e)
                        }), this.$selection.on("keydown", function(e) {
                            i.trigger("keypress", e), e.which === n.SPACE && e.preventDefault()
                        }), e.on("results:focus", function(e) {
                            i.$selection.attr("aria-activedescendant", e.data._resultId)
                        }), e.on("selection:update", function(e) {
                            i.update(e.data)
                        }), e.on("open", function() {
                            i.$selection.attr("aria-expanded", "true"), i.$selection.attr("aria-owns", a), i._attachCloseHandler(e)
                        }), e.on("close", function() {
                            i.$selection.attr("aria-expanded", "false"), i.$selection.removeAttr("aria-activedescendant"), i.$selection.removeAttr("aria-owns"), i.$selection.focus(), i._detachCloseHandler(e)
                        }), e.on("enable", function() {
                            i.$selection.attr("tabindex", i._tabindex)
                        }), e.on("disable", function() {
                            i.$selection.attr("tabindex", "-1")
                        })
                    }, i.prototype._handleBlur = function(t) {
                        var n = this;
                        window.setTimeout(function() {
                            document.activeElement == n.$selection[0] || e.contains(n.$selection[0], document.activeElement) || n.trigger("blur", t)
                        }, 1)
                    }, i.prototype._attachCloseHandler = function(t) {
                        e(document.body).on("mousedown.select2." + t.id, function(t) {
                            var n = e(t.target),
                                i = n.closest(".select2"),
                                a = e(".select2.select2-container--open");
                            a.each(function() {
                                var t = e(this);
                                if (this != i[0]) {
                                    var n = t.data("element");
                                    n.select2("close")
                                }
                            })
                        })
                    }, i.prototype._detachCloseHandler = function(t) {
                        e(document.body).off("mousedown.select2." + t.id)
                    }, i.prototype.position = function(e, t) {
                        var n = t.find(".selection");
                        n.append(e)
                    }, i.prototype.destroy = function() {
                        this._detachCloseHandler(this.container)
                    }, i.prototype.update = function(e) {
                        throw new Error("The `update` method must be defined in child classes.")
                    }, i
                }), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(e, t, n, i) {
                    function a() {
                        a.__super__.constructor.apply(this, arguments)
                    }
                    return n.Extend(a, t), a.prototype.render = function() {
                        var e = a.__super__.render.call(this);
                        return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
                    }, a.prototype.bind = function(e, t) {
                        var n = this;
                        a.__super__.bind.apply(this, arguments);
                        var i = e.id + "-container";
                        this.$selection.find(".select2-selection__rendered").attr("id", i), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", function(e) {
                            1 === e.which && n.trigger("toggle", {
                                originalEvent: e
                            })
                        }), this.$selection.on("focus", function(e) {}), this.$selection.on("blur", function(e) {}), e.on("focus", function(t) {
                            e.isOpen() || n.$selection.focus()
                        }), e.on("selection:update", function(e) {
                            n.update(e.data)
                        })
                    }, a.prototype.clear = function() {
                        this.$selection.find(".select2-selection__rendered").empty()
                    }, a.prototype.display = function(e, t) {
                        var n = this.options.get("templateSelection"),
                            i = this.options.get("escapeMarkup");
                        return i(n(e, t))
                    }, a.prototype.selectionContainer = function() {
                        return e("<span></span>")
                    }, a.prototype.update = function(e) {
                        if (0 === e.length) return void this.clear();
                        var t = e[0],
                            n = this.$selection.find(".select2-selection__rendered"),
                            i = this.display(t, n);
                        n.empty().append(i), n.prop("title", t.title || t.text)
                    }, a
                }), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(e, t, n) {
                    function i(e, t) {
                        i.__super__.constructor.apply(this, arguments)
                    }
                    return n.Extend(i, t), i.prototype.render = function() {
                        var e = i.__super__.render.call(this);
                        return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e
                    }, i.prototype.bind = function(t, n) {
                        var a = this;
                        i.__super__.bind.apply(this, arguments), this.$selection.on("click", function(e) {
                            a.trigger("toggle", {
                                originalEvent: e
                            })
                        }), this.$selection.on("click", ".select2-selection__choice__remove", function(t) {
                            if (!a.options.get("disabled")) {
                                var n = e(this),
                                    i = n.parent(),
                                    s = i.data("data");
                                a.trigger("unselect", {
                                    originalEvent: t,
                                    data: s
                                })
                            }
                        })
                    }, i.prototype.clear = function() {
                        this.$selection.find(".select2-selection__rendered").empty()
                    }, i.prototype.display = function(e, t) {
                        var n = this.options.get("templateSelection"),
                            i = this.options.get("escapeMarkup");
                        return i(n(e, t))
                    }, i.prototype.selectionContainer = function() {
                        var t = e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
                        return t
                    }, i.prototype.update = function(e) {
                        if (this.clear(), 0 !== e.length) {
                            for (var t = [], i = 0; i < e.length; i++) {
                                var a = e[i],
                                    s = this.selectionContainer(),
                                    o = this.display(a, s);
                                s.append(o), s.prop("title", a.title || a.text), s.data("data", a), t.push(s)
                            }
                            var r = this.$selection.find(".select2-selection__rendered");
                            n.appendMany(r, t)
                        }
                    }, i
                }), t.define("select2/selection/placeholder", ["../utils"], function(e) {
                    function t(e, t, n) {
                        this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n)
                    }
                    return t.prototype.normalizePlaceholder = function(e, t) {
                        return "string" == typeof t && (t = {
                            id: "",
                            text: t
                        }), t
                    }, t.prototype.createPlaceholder = function(e, t) {
                        var n = this.selectionContainer();
                        return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
                    }, t.prototype.update = function(e, t) {
                        var n = 1 == t.length && t[0].id != this.placeholder.id,
                            i = t.length > 1;
                        if (i || n) return e.call(this, t);
                        this.clear();
                        var a = this.createPlaceholder(this.placeholder);
                        this.$selection.find(".select2-selection__rendered").append(a)
                    }, t
                }), t.define("select2/selection/allowClear", ["jquery", "../keys"], function(e, t) {
                    function n() {}
                    return n.prototype.bind = function(e, t, n) {
                        var i = this;
                        e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(e) {
                            i._handleClear(e)
                        }), t.on("keypress", function(e) {
                            i._handleKeyboardClear(e, t)
                        })
                    }, n.prototype._handleClear = function(e, t) {
                        if (!this.options.get("disabled")) {
                            var n = this.$selection.find(".select2-selection__clear");
                            if (0 !== n.length) {
                                t.stopPropagation();
                                for (var i = n.data("data"), a = 0; a < i.length; a++) {
                                    var s = {
                                        data: i[a]
                                    };
                                    if (this.trigger("unselect", s), s.prevented) return
                                }
                                this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                            }
                        }
                    }, n.prototype._handleKeyboardClear = function(e, n, i) {
                        i.isOpen() || (n.which == t.DELETE || n.which == t.BACKSPACE) && this._handleClear(n)
                    }, n.prototype.update = function(t, n) {
                        if (t.call(this, n), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === n.length)) {
                            var i = e('<span class="select2-selection__clear">&times;</span>');
                            i.data("data", n), this.$selection.find(".select2-selection__rendered").prepend(i)
                        }
                    }, n
                }), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(e, t, n) {
                    function i(e, t, n) {
                        e.call(this, t, n)
                    }
                    return i.prototype.render = function(t) {
                        var n = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                        this.$searchContainer = n, this.$search = n.find("input");
                        var i = t.call(this);
                        return this._transferTabIndex(), i
                    }, i.prototype.bind = function(e, t, i) {
                        var a = this;
                        e.call(this, t, i), t.on("open", function() {
                            a.$search.trigger("focus")
                        }), t.on("close", function() {
                            a.$search.val(""), a.$search.removeAttr("aria-activedescendant"), a.$search.trigger("focus")
                        }), t.on("enable", function() {
                            a.$search.prop("disabled", !1), a._transferTabIndex()
                        }), t.on("disable", function() {
                            a.$search.prop("disabled", !0)
                        }), t.on("focus", function(e) {
                            a.$search.trigger("focus")
                        }), t.on("results:focus", function(e) {
                            a.$search.attr("aria-activedescendant", e.id)
                        }), this.$selection.on("focusin", ".select2-search--inline", function(e) {
                            a.trigger("focus", e)
                        }), this.$selection.on("focusout", ".select2-search--inline", function(e) {
                            a._handleBlur(e)
                        }), this.$selection.on("keydown", ".select2-search--inline", function(e) {
                            e.stopPropagation(), a.trigger("keypress", e), a._keyUpPrevented = e.isDefaultPrevented();
                            var t = e.which;
                            if (t === n.BACKSPACE && "" === a.$search.val()) {
                                var i = a.$searchContainer.prev(".select2-selection__choice");
                                if (i.length > 0) {
                                    var s = i.data("data");
                                    a.searchRemoveChoice(s), e.preventDefault()
                                }
                            }
                        });
                        var s = document.documentMode,
                            o = s && 11 >= s;
                        this.$selection.on("input.searchcheck", ".select2-search--inline", function(e) {
                            return o ? void a.$selection.off("input.search input.searchcheck") : void a.$selection.off("keyup.search")
                        }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(e) {
                            if (o && "input" === e.type) return void a.$selection.off("input.search input.searchcheck");
                            var t = e.which;
                            t != n.SHIFT && t != n.CTRL && t != n.ALT && t != n.TAB && a.handleSearch(e)
                        })
                    }, i.prototype._transferTabIndex = function(e) {
                        this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                    }, i.prototype.createPlaceholder = function(e, t) {
                        this.$search.attr("placeholder", t.text)
                    }, i.prototype.update = function(e, t) {
                        var n = this.$search[0] == document.activeElement;
                        this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.focus()
                    }, i.prototype.handleSearch = function() {
                        if (this.resizeSearch(), !this._keyUpPrevented) {
                            var e = this.$search.val();
                            this.trigger("query", {
                                term: e
                            })
                        }
                        this._keyUpPrevented = !1
                    }, i.prototype.searchRemoveChoice = function(e, t) {
                        this.trigger("unselect", {
                            data: t
                        }), this.$search.val(t.text), this.handleSearch()
                    }, i.prototype.resizeSearch = function() {
                        this.$search.css("width", "25px");
                        var e = "";
                        if ("" !== this.$search.attr("placeholder")) e = this.$selection.find(".select2-selection__rendered").innerWidth();
                        else {
                            var t = this.$search.val().length + 1;
                            e = .75 * t + "em"
                        }
                        this.$search.css("width", e)
                    }, i
                }), t.define("select2/selection/eventRelay", ["jquery"], function(e) {
                    function t() {}
                    return t.prototype.bind = function(t, n, i) {
                        var a = this,
                            s = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                            o = ["opening", "closing", "selecting", "unselecting"];
                        t.call(this, n, i), n.on("*", function(t, n) {
                            if (-1 !== e.inArray(t, s)) {
                                n = n || {};
                                var i = e.Event("select2:" + t, {
                                    params: n
                                });
                                a.$element.trigger(i), -1 !== e.inArray(t, o) && (n.prevented = i.isDefaultPrevented())
                            }
                        })
                    }, t
                }), t.define("select2/translation", ["jquery", "require"], function(e, t) {
                    function n(e) {
                        this.dict = e || {}
                    }
                    return n.prototype.all = function() {
                        return this.dict
                    }, n.prototype.get = function(e) {
                        return this.dict[e]
                    }, n.prototype.extend = function(t) {
                        this.dict = e.extend({}, t.all(), this.dict)
                    }, n._cache = {}, n.loadPath = function(e) {
                        if (!(e in n._cache)) {
                            var i = t(e);
                            n._cache[e] = i
                        }
                        return new n(n._cache[e])
                    }, n
                }), t.define("select2/diacritics", [], function() {
                    var e = {
                        "Ⓐ": "A",
                        "Ａ": "A",
                        "À": "A",
                        "Á": "A",
                        "Â": "A",
                        "Ầ": "A",
                        "Ấ": "A",
                        "Ẫ": "A",
                        "Ẩ": "A",
                        "Ã": "A",
                        "Ā": "A",
                        "Ă": "A",
                        "Ằ": "A",
                        "Ắ": "A",
                        "Ẵ": "A",
                        "Ẳ": "A",
                        "Ȧ": "A",
                        "Ǡ": "A",
                        "Ä": "A",
                        "Ǟ": "A",
                        "Ả": "A",
                        "Å": "A",
                        "Ǻ": "A",
                        "Ǎ": "A",
                        "Ȁ": "A",
                        "Ȃ": "A",
                        "Ạ": "A",
                        "Ậ": "A",
                        "Ặ": "A",
                        "Ḁ": "A",
                        "Ą": "A",
                        "Ⱥ": "A",
                        "Ɐ": "A",
                        "Ꜳ": "AA",
                        "Æ": "AE",
                        "Ǽ": "AE",
                        "Ǣ": "AE",
                        "Ꜵ": "AO",
                        "Ꜷ": "AU",
                        "Ꜹ": "AV",
                        "Ꜻ": "AV",
                        "Ꜽ": "AY",
                        "Ⓑ": "B",
                        "Ｂ": "B",
                        "Ḃ": "B",
                        "Ḅ": "B",
                        "Ḇ": "B",
                        "Ƀ": "B",
                        "Ƃ": "B",
                        "Ɓ": "B",
                        "Ⓒ": "C",
                        "Ｃ": "C",
                        "Ć": "C",
                        "Ĉ": "C",
                        "Ċ": "C",
                        "Č": "C",
                        "Ç": "C",
                        "Ḉ": "C",
                        "Ƈ": "C",
                        "Ȼ": "C",
                        "Ꜿ": "C",
                        "Ⓓ": "D",
                        "Ｄ": "D",
                        "Ḋ": "D",
                        "Ď": "D",
                        "Ḍ": "D",
                        "Ḑ": "D",
                        "Ḓ": "D",
                        "Ḏ": "D",
                        "Đ": "D",
                        "Ƌ": "D",
                        "Ɗ": "D",
                        "Ɖ": "D",
                        "Ꝺ": "D",
                        "Ǳ": "DZ",
                        "Ǆ": "DZ",
                        "ǲ": "Dz",
                        "ǅ": "Dz",
                        "Ⓔ": "E",
                        "Ｅ": "E",
                        "È": "E",
                        "É": "E",
                        "Ê": "E",
                        "Ề": "E",
                        "Ế": "E",
                        "Ễ": "E",
                        "Ể": "E",
                        "Ẽ": "E",
                        "Ē": "E",
                        "Ḕ": "E",
                        "Ḗ": "E",
                        "Ĕ": "E",
                        "Ė": "E",
                        "Ë": "E",
                        "Ẻ": "E",
                        "Ě": "E",
                        "Ȅ": "E",
                        "Ȇ": "E",
                        "Ẹ": "E",
                        "Ệ": "E",
                        "Ȩ": "E",
                        "Ḝ": "E",
                        "Ę": "E",
                        "Ḙ": "E",
                        "Ḛ": "E",
                        "Ɛ": "E",
                        "Ǝ": "E",
                        "Ⓕ": "F",
                        "Ｆ": "F",
                        "Ḟ": "F",
                        "Ƒ": "F",
                        "Ꝼ": "F",
                        "Ⓖ": "G",
                        "Ｇ": "G",
                        "Ǵ": "G",
                        "Ĝ": "G",
                        "Ḡ": "G",
                        "Ğ": "G",
                        "Ġ": "G",
                        "Ǧ": "G",
                        "Ģ": "G",
                        "Ǥ": "G",
                        "Ɠ": "G",
                        "Ꞡ": "G",
                        "Ᵹ": "G",
                        "Ꝿ": "G",
                        "Ⓗ": "H",
                        "Ｈ": "H",
                        "Ĥ": "H",
                        "Ḣ": "H",
                        "Ḧ": "H",
                        "Ȟ": "H",
                        "Ḥ": "H",
                        "Ḩ": "H",
                        "Ḫ": "H",
                        "Ħ": "H",
                        "Ⱨ": "H",
                        "Ⱶ": "H",
                        "Ɥ": "H",
                        "Ⓘ": "I",
                        "Ｉ": "I",
                        "Ì": "I",
                        "Í": "I",
                        "Î": "I",
                        "Ĩ": "I",
                        "Ī": "I",
                        "Ĭ": "I",
                        "İ": "I",
                        "Ï": "I",
                        "Ḯ": "I",
                        "Ỉ": "I",
                        "Ǐ": "I",
                        "Ȉ": "I",
                        "Ȋ": "I",
                        "Ị": "I",
                        "Į": "I",
                        "Ḭ": "I",
                        "Ɨ": "I",
                        "Ⓙ": "J",
                        "Ｊ": "J",
                        "Ĵ": "J",
                        "Ɉ": "J",
                        "Ⓚ": "K",
                        "Ｋ": "K",
                        "Ḱ": "K",
                        "Ǩ": "K",
                        "Ḳ": "K",
                        "Ķ": "K",
                        "Ḵ": "K",
                        "Ƙ": "K",
                        "Ⱪ": "K",
                        "Ꝁ": "K",
                        "Ꝃ": "K",
                        "Ꝅ": "K",
                        "Ꞣ": "K",
                        "Ⓛ": "L",
                        "Ｌ": "L",
                        "Ŀ": "L",
                        "Ĺ": "L",
                        "Ľ": "L",
                        "Ḷ": "L",
                        "Ḹ": "L",
                        "Ļ": "L",
                        "Ḽ": "L",
                        "Ḻ": "L",
                        "Ł": "L",
                        "Ƚ": "L",
                        "Ɫ": "L",
                        "Ⱡ": "L",
                        "Ꝉ": "L",
                        "Ꝇ": "L",
                        "Ꞁ": "L",
                        "Ǉ": "LJ",
                        "ǈ": "Lj",
                        "Ⓜ": "M",
                        "Ｍ": "M",
                        "Ḿ": "M",
                        "Ṁ": "M",
                        "Ṃ": "M",
                        "Ɱ": "M",
                        "Ɯ": "M",
                        "Ⓝ": "N",
                        "Ｎ": "N",
                        "Ǹ": "N",
                        "Ń": "N",
                        "Ñ": "N",
                        "Ṅ": "N",
                        "Ň": "N",
                        "Ṇ": "N",
                        "Ņ": "N",
                        "Ṋ": "N",
                        "Ṉ": "N",
                        "Ƞ": "N",
                        "Ɲ": "N",
                        "Ꞑ": "N",
                        "Ꞥ": "N",
                        "Ǌ": "NJ",
                        "ǋ": "Nj",
                        "Ⓞ": "O",
                        "Ｏ": "O",
                        "Ò": "O",
                        "Ó": "O",
                        "Ô": "O",
                        "Ồ": "O",
                        "Ố": "O",
                        "Ỗ": "O",
                        "Ổ": "O",
                        "Õ": "O",
                        "Ṍ": "O",
                        "Ȭ": "O",
                        "Ṏ": "O",
                        "Ō": "O",
                        "Ṑ": "O",
                        "Ṓ": "O",
                        "Ŏ": "O",
                        "Ȯ": "O",
                        "Ȱ": "O",
                        "Ö": "O",
                        "Ȫ": "O",
                        "Ỏ": "O",
                        "Ő": "O",
                        "Ǒ": "O",
                        "Ȍ": "O",
                        "Ȏ": "O",
                        "Ơ": "O",
                        "Ờ": "O",
                        "Ớ": "O",
                        "Ỡ": "O",
                        "Ở": "O",
                        "Ợ": "O",
                        "Ọ": "O",
                        "Ộ": "O",
                        "Ǫ": "O",
                        "Ǭ": "O",
                        "Ø": "O",
                        "Ǿ": "O",
                        "Ɔ": "O",
                        "Ɵ": "O",
                        "Ꝋ": "O",
                        "Ꝍ": "O",
                        "Ƣ": "OI",
                        "Ꝏ": "OO",
                        "Ȣ": "OU",
                        "Ⓟ": "P",
                        "Ｐ": "P",
                        "Ṕ": "P",
                        "Ṗ": "P",
                        "Ƥ": "P",
                        "Ᵽ": "P",
                        "Ꝑ": "P",
                        "Ꝓ": "P",
                        "Ꝕ": "P",
                        "Ⓠ": "Q",
                        "Ｑ": "Q",
                        "Ꝗ": "Q",
                        "Ꝙ": "Q",
                        "Ɋ": "Q",
                        "Ⓡ": "R",
                        "Ｒ": "R",
                        "Ŕ": "R",
                        "Ṙ": "R",
                        "Ř": "R",
                        "Ȑ": "R",
                        "Ȓ": "R",
                        "Ṛ": "R",
                        "Ṝ": "R",
                        "Ŗ": "R",
                        "Ṟ": "R",
                        "Ɍ": "R",
                        "Ɽ": "R",
                        "Ꝛ": "R",
                        "Ꞧ": "R",
                        "Ꞃ": "R",
                        "Ⓢ": "S",
                        "Ｓ": "S",
                        "ẞ": "S",
                        "Ś": "S",
                        "Ṥ": "S",
                        "Ŝ": "S",
                        "Ṡ": "S",
                        "Š": "S",
                        "Ṧ": "S",
                        "Ṣ": "S",
                        "Ṩ": "S",
                        "Ș": "S",
                        "Ş": "S",
                        "Ȿ": "S",
                        "Ꞩ": "S",
                        "Ꞅ": "S",
                        "Ⓣ": "T",
                        "Ｔ": "T",
                        "Ṫ": "T",
                        "Ť": "T",
                        "Ṭ": "T",
                        "Ț": "T",
                        "Ţ": "T",
                        "Ṱ": "T",
                        "Ṯ": "T",
                        "Ŧ": "T",
                        "Ƭ": "T",
                        "Ʈ": "T",
                        "Ⱦ": "T",
                        "Ꞇ": "T",
                        "Ꜩ": "TZ",
                        "Ⓤ": "U",
                        "Ｕ": "U",
                        "Ù": "U",
                        "Ú": "U",
                        "Û": "U",
                        "Ũ": "U",
                        "Ṹ": "U",
                        "Ū": "U",
                        "Ṻ": "U",
                        "Ŭ": "U",
                        "Ü": "U",
                        "Ǜ": "U",
                        "Ǘ": "U",
                        "Ǖ": "U",
                        "Ǚ": "U",
                        "Ủ": "U",
                        "Ů": "U",
                        "Ű": "U",
                        "Ǔ": "U",
                        "Ȕ": "U",
                        "Ȗ": "U",
                        "Ư": "U",
                        "Ừ": "U",
                        "Ứ": "U",
                        "Ữ": "U",
                        "Ử": "U",
                        "Ự": "U",
                        "Ụ": "U",
                        "Ṳ": "U",
                        "Ų": "U",
                        "Ṷ": "U",
                        "Ṵ": "U",
                        "Ʉ": "U",
                        "Ⓥ": "V",
                        "Ｖ": "V",
                        "Ṽ": "V",
                        "Ṿ": "V",
                        "Ʋ": "V",
                        "Ꝟ": "V",
                        "Ʌ": "V",
                        "Ꝡ": "VY",
                        "Ⓦ": "W",
                        "Ｗ": "W",
                        "Ẁ": "W",
                        "Ẃ": "W",
                        "Ŵ": "W",
                        "Ẇ": "W",
                        "Ẅ": "W",
                        "Ẉ": "W",
                        "Ⱳ": "W",
                        "Ⓧ": "X",
                        "Ｘ": "X",
                        "Ẋ": "X",
                        "Ẍ": "X",
                        "Ⓨ": "Y",
                        "Ｙ": "Y",
                        "Ỳ": "Y",
                        "Ý": "Y",
                        "Ŷ": "Y",
                        "Ỹ": "Y",
                        "Ȳ": "Y",
                        "Ẏ": "Y",
                        "Ÿ": "Y",
                        "Ỷ": "Y",
                        "Ỵ": "Y",
                        "Ƴ": "Y",
                        "Ɏ": "Y",
                        "Ỿ": "Y",
                        "Ⓩ": "Z",
                        "Ｚ": "Z",
                        "Ź": "Z",
                        "Ẑ": "Z",
                        "Ż": "Z",
                        "Ž": "Z",
                        "Ẓ": "Z",
                        "Ẕ": "Z",
                        "Ƶ": "Z",
                        "Ȥ": "Z",
                        "Ɀ": "Z",
                        "Ⱬ": "Z",
                        "Ꝣ": "Z",
                        "ⓐ": "a",
                        "ａ": "a",
                        "ẚ": "a",
                        "à": "a",
                        "á": "a",
                        "â": "a",
                        "ầ": "a",
                        "ấ": "a",
                        "ẫ": "a",
                        "ẩ": "a",
                        "ã": "a",
                        "ā": "a",
                        "ă": "a",
                        "ằ": "a",
                        "ắ": "a",
                        "ẵ": "a",
                        "ẳ": "a",
                        "ȧ": "a",
                        "ǡ": "a",
                        "ä": "a",
                        "ǟ": "a",
                        "ả": "a",
                        "å": "a",
                        "ǻ": "a",
                        "ǎ": "a",
                        "ȁ": "a",
                        "ȃ": "a",
                        "ạ": "a",
                        "ậ": "a",
                        "ặ": "a",
                        "ḁ": "a",
                        "ą": "a",
                        "ⱥ": "a",
                        "ɐ": "a",
                        "ꜳ": "aa",
                        "æ": "ae",
                        "ǽ": "ae",
                        "ǣ": "ae",
                        "ꜵ": "ao",
                        "ꜷ": "au",
                        "ꜹ": "av",
                        "ꜻ": "av",
                        "ꜽ": "ay",
                        "ⓑ": "b",
                        "ｂ": "b",
                        "ḃ": "b",
                        "ḅ": "b",
                        "ḇ": "b",
                        "ƀ": "b",
                        "ƃ": "b",
                        "ɓ": "b",
                        "ⓒ": "c",
                        "ｃ": "c",
                        "ć": "c",
                        "ĉ": "c",
                        "ċ": "c",
                        "č": "c",
                        "ç": "c",
                        "ḉ": "c",
                        "ƈ": "c",
                        "ȼ": "c",
                        "ꜿ": "c",
                        "ↄ": "c",
                        "ⓓ": "d",
                        "ｄ": "d",
                        "ḋ": "d",
                        "ď": "d",
                        "ḍ": "d",
                        "ḑ": "d",
                        "ḓ": "d",
                        "ḏ": "d",
                        "đ": "d",
                        "ƌ": "d",
                        "ɖ": "d",
                        "ɗ": "d",
                        "ꝺ": "d",
                        "ǳ": "dz",
                        "ǆ": "dz",
                        "ⓔ": "e",
                        "ｅ": "e",
                        "è": "e",
                        "é": "e",
                        "ê": "e",
                        "ề": "e",
                        "ế": "e",
                        "ễ": "e",
                        "ể": "e",
                        "ẽ": "e",
                        "ē": "e",
                        "ḕ": "e",
                        "ḗ": "e",
                        "ĕ": "e",
                        "ė": "e",
                        "ë": "e",
                        "ẻ": "e",
                        "ě": "e",
                        "ȅ": "e",
                        "ȇ": "e",
                        "ẹ": "e",
                        "ệ": "e",
                        "ȩ": "e",
                        "ḝ": "e",
                        "ę": "e",
                        "ḙ": "e",
                        "ḛ": "e",
                        "ɇ": "e",
                        "ɛ": "e",
                        "ǝ": "e",
                        "ⓕ": "f",
                        "ｆ": "f",
                        "ḟ": "f",
                        "ƒ": "f",
                        "ꝼ": "f",
                        "ⓖ": "g",
                        "ｇ": "g",
                        "ǵ": "g",
                        "ĝ": "g",
                        "ḡ": "g",
                        "ğ": "g",
                        "ġ": "g",
                        "ǧ": "g",
                        "ģ": "g",
                        "ǥ": "g",
                        "ɠ": "g",
                        "ꞡ": "g",
                        "ᵹ": "g",
                        "ꝿ": "g",
                        "ⓗ": "h",
                        "ｈ": "h",
                        "ĥ": "h",
                        "ḣ": "h",
                        "ḧ": "h",
                        "ȟ": "h",
                        "ḥ": "h",
                        "ḩ": "h",
                        "ḫ": "h",
                        "ẖ": "h",
                        "ħ": "h",
                        "ⱨ": "h",
                        "ⱶ": "h",
                        "ɥ": "h",
                        "ƕ": "hv",
                        "ⓘ": "i",
                        "ｉ": "i",
                        "ì": "i",
                        "í": "i",
                        "î": "i",
                        "ĩ": "i",
                        "ī": "i",
                        "ĭ": "i",
                        "ï": "i",
                        "ḯ": "i",
                        "ỉ": "i",
                        "ǐ": "i",
                        "ȉ": "i",
                        "ȋ": "i",
                        "ị": "i",
                        "į": "i",
                        "ḭ": "i",
                        "ɨ": "i",
                        "ı": "i",
                        "ⓙ": "j",
                        "ｊ": "j",
                        "ĵ": "j",
                        "ǰ": "j",
                        "ɉ": "j",
                        "ⓚ": "k",
                        "ｋ": "k",
                        "ḱ": "k",
                        "ǩ": "k",
                        "ḳ": "k",
                        "ķ": "k",
                        "ḵ": "k",
                        "ƙ": "k",
                        "ⱪ": "k",
                        "ꝁ": "k",
                        "ꝃ": "k",
                        "ꝅ": "k",
                        "ꞣ": "k",
                        "ⓛ": "l",
                        "ｌ": "l",
                        "ŀ": "l",
                        "ĺ": "l",
                        "ľ": "l",
                        "ḷ": "l",
                        "ḹ": "l",
                        "ļ": "l",
                        "ḽ": "l",
                        "ḻ": "l",
                        "ſ": "l",
                        "ł": "l",
                        "ƚ": "l",
                        "ɫ": "l",
                        "ⱡ": "l",
                        "ꝉ": "l",
                        "ꞁ": "l",
                        "ꝇ": "l",
                        "ǉ": "lj",
                        "ⓜ": "m",
                        "ｍ": "m",
                        "ḿ": "m",
                        "ṁ": "m",
                        "ṃ": "m",
                        "ɱ": "m",
                        "ɯ": "m",
                        "ⓝ": "n",
                        "ｎ": "n",
                        "ǹ": "n",
                        "ń": "n",
                        "ñ": "n",
                        "ṅ": "n",
                        "ň": "n",
                        "ṇ": "n",
                        "ņ": "n",
                        "ṋ": "n",
                        "ṉ": "n",
                        "ƞ": "n",
                        "ɲ": "n",
                        "ŉ": "n",
                        "ꞑ": "n",
                        "ꞥ": "n",
                        "ǌ": "nj",
                        "ⓞ": "o",
                        "ｏ": "o",
                        "ò": "o",
                        "ó": "o",
                        "ô": "o",
                        "ồ": "o",
                        "ố": "o",
                        "ỗ": "o",
                        "ổ": "o",
                        "õ": "o",
                        "ṍ": "o",
                        "ȭ": "o",
                        "ṏ": "o",
                        "ō": "o",
                        "ṑ": "o",
                        "ṓ": "o",
                        "ŏ": "o",
                        "ȯ": "o",
                        "ȱ": "o",
                        "ö": "o",
                        "ȫ": "o",
                        "ỏ": "o",
                        "ő": "o",
                        "ǒ": "o",
                        "ȍ": "o",
                        "ȏ": "o",
                        "ơ": "o",
                        "ờ": "o",
                        "ớ": "o",
                        "ỡ": "o",
                        "ở": "o",
                        "ợ": "o",
                        "ọ": "o",
                        "ộ": "o",
                        "ǫ": "o",
                        "ǭ": "o",
                        "ø": "o",
                        "ǿ": "o",
                        "ɔ": "o",
                        "ꝋ": "o",
                        "ꝍ": "o",
                        "ɵ": "o",
                        "ƣ": "oi",
                        "ȣ": "ou",
                        "ꝏ": "oo",
                        "ⓟ": "p",
                        "ｐ": "p",
                        "ṕ": "p",
                        "ṗ": "p",
                        "ƥ": "p",
                        "ᵽ": "p",
                        "ꝑ": "p",
                        "ꝓ": "p",
                        "ꝕ": "p",
                        "ⓠ": "q",
                        "ｑ": "q",
                        "ɋ": "q",
                        "ꝗ": "q",
                        "ꝙ": "q",
                        "ⓡ": "r",
                        "ｒ": "r",
                        "ŕ": "r",
                        "ṙ": "r",
                        "ř": "r",
                        "ȑ": "r",
                        "ȓ": "r",
                        "ṛ": "r",
                        "ṝ": "r",
                        "ŗ": "r",
                        "ṟ": "r",
                        "ɍ": "r",
                        "ɽ": "r",
                        "ꝛ": "r",
                        "ꞧ": "r",
                        "ꞃ": "r",
                        "ⓢ": "s",
                        "ｓ": "s",
                        "ß": "s",
                        "ś": "s",
                        "ṥ": "s",
                        "ŝ": "s",
                        "ṡ": "s",
                        "š": "s",
                        "ṧ": "s",
                        "ṣ": "s",
                        "ṩ": "s",
                        "ș": "s",
                        "ş": "s",
                        "ȿ": "s",
                        "ꞩ": "s",
                        "ꞅ": "s",
                        "ẛ": "s",
                        "ⓣ": "t",
                        "ｔ": "t",
                        "ṫ": "t",
                        "ẗ": "t",
                        "ť": "t",
                        "ṭ": "t",
                        "ț": "t",
                        "ţ": "t",
                        "ṱ": "t",
                        "ṯ": "t",
                        "ŧ": "t",
                        "ƭ": "t",
                        "ʈ": "t",
                        "ⱦ": "t",
                        "ꞇ": "t",
                        "ꜩ": "tz",
                        "ⓤ": "u",
                        "ｕ": "u",
                        "ù": "u",
                        "ú": "u",
                        "û": "u",
                        "ũ": "u",
                        "ṹ": "u",
                        "ū": "u",
                        "ṻ": "u",
                        "ŭ": "u",
                        "ü": "u",
                        "ǜ": "u",
                        "ǘ": "u",
                        "ǖ": "u",
                        "ǚ": "u",
                        "ủ": "u",
                        "ů": "u",
                        "ű": "u",
                        "ǔ": "u",
                        "ȕ": "u",
                        "ȗ": "u",
                        "ư": "u",
                        "ừ": "u",
                        "ứ": "u",
                        "ữ": "u",
                        "ử": "u",
                        "ự": "u",
                        "ụ": "u",
                        "ṳ": "u",
                        "ų": "u",
                        "ṷ": "u",
                        "ṵ": "u",
                        "ʉ": "u",
                        "ⓥ": "v",
                        "ｖ": "v",
                        "ṽ": "v",
                        "ṿ": "v",
                        "ʋ": "v",
                        "ꝟ": "v",
                        "ʌ": "v",
                        "ꝡ": "vy",
                        "ⓦ": "w",
                        "ｗ": "w",
                        "ẁ": "w",
                        "ẃ": "w",
                        "ŵ": "w",
                        "ẇ": "w",
                        "ẅ": "w",
                        "ẘ": "w",
                        "ẉ": "w",
                        "ⱳ": "w",
                        "ⓧ": "x",
                        "ｘ": "x",
                        "ẋ": "x",
                        "ẍ": "x",
                        "ⓨ": "y",
                        "ｙ": "y",
                        "ỳ": "y",
                        "ý": "y",
                        "ŷ": "y",
                        "ỹ": "y",
                        "ȳ": "y",
                        "ẏ": "y",
                        "ÿ": "y",
                        "ỷ": "y",
                        "ẙ": "y",
                        "ỵ": "y",
                        "ƴ": "y",
                        "ɏ": "y",
                        "ỿ": "y",
                        "ⓩ": "z",
                        "ｚ": "z",
                        "ź": "z",
                        "ẑ": "z",
                        "ż": "z",
                        "ž": "z",
                        "ẓ": "z",
                        "ẕ": "z",
                        "ƶ": "z",
                        "ȥ": "z",
                        "ɀ": "z",
                        "ⱬ": "z",
                        "ꝣ": "z",
                        "Ά": "Α",
                        "Έ": "Ε",
                        "Ή": "Η",
                        "Ί": "Ι",
                        "Ϊ": "Ι",
                        "Ό": "Ο",
                        "Ύ": "Υ",
                        "Ϋ": "Υ",
                        "Ώ": "Ω",
                        "ά": "α",
                        "έ": "ε",
                        "ή": "η",
                        "ί": "ι",
                        "ϊ": "ι",
                        "ΐ": "ι",
                        "ό": "ο",
                        "ύ": "υ",
                        "ϋ": "υ",
                        "ΰ": "υ",
                        "ω": "ω",
                        "ς": "σ"
                    };
                    return e
                }), t.define("select2/data/base", ["../utils"], function(e) {
                    function t(e, n) {
                        t.__super__.constructor.call(this)
                    }
                    return e.Extend(t, e.Observable), t.prototype.current = function(e) {
                        throw new Error("The `current` method must be defined in child classes.")
                    }, t.prototype.query = function(e, t) {
                        throw new Error("The `query` method must be defined in child classes.")
                    }, t.prototype.bind = function(e, t) {}, t.prototype.destroy = function() {}, t.prototype.generateResultId = function(t, n) {
                        var i = t.id + "-result-";
                        return i += e.generateChars(4), i += null != n.id ? "-" + n.id.toString() : "-" + e.generateChars(4)
                    }, t
                }), t.define("select2/data/select", ["./base", "../utils", "jquery"], function(e, t, n) {
                    function i(e, t) {
                        this.$element = e, this.options = t, i.__super__.constructor.call(this)
                    }
                    return t.Extend(i, e), i.prototype.current = function(e) {
                        var t = [],
                            i = this;
                        this.$element.find(":selected").each(function() {
                            var e = n(this),
                                a = i.item(e);
                            t.push(a)
                        }), e(t)
                    }, i.prototype.select = function(e) {
                        var t = this;
                        if (e.selected = !0, n(e.element).is("option")) return e.element.selected = !0, void this.$element.trigger("change");
                        if (this.$element.prop("multiple")) this.current(function(i) {
                            var a = [];
                            e = [e], e.push.apply(e, i);
                            for (var s = 0; s < e.length; s++) {
                                var o = e[s].id; - 1 === n.inArray(o, a) && a.push(o)
                            }
                            t.$element.val(a), t.$element.trigger("change")
                        });
                        else {
                            var i = e.id;
                            this.$element.val(i), this.$element.trigger("change")
                        }
                    }, i.prototype.unselect = function(e) {
                        var t = this;
                        return this.$element.prop("multiple") ? (e.selected = !1, n(e.element).is("option") ? (e.element.selected = !1, void this.$element.trigger("change")) : void this.current(function(i) {
                            for (var a = [], s = 0; s < i.length; s++) {
                                var o = i[s].id;
                                o !== e.id && -1 === n.inArray(o, a) && a.push(o)
                            }
                            t.$element.val(a), t.$element.trigger("change")
                        })) : void 0
                    }, i.prototype.bind = function(e, t) {
                        var n = this;
                        this.container = e, e.on("select", function(e) {
                            n.select(e.data)
                        }), e.on("unselect", function(e) {
                            n.unselect(e.data)
                        })
                    }, i.prototype.destroy = function() {
                        this.$element.find("*").each(function() {
                            n.removeData(this, "data")
                        })
                    }, i.prototype.query = function(e, t) {
                        var i = [],
                            a = this,
                            s = this.$element.children();
                        s.each(function() {
                            var t = n(this);
                            if (t.is("option") || t.is("optgroup")) {
                                var s = a.item(t),
                                    o = a.matches(e, s);
                                null !== o && i.push(o)
                            }
                        }), t({
                            results: i
                        })
                    }, i.prototype.addOptions = function(e) {
                        t.appendMany(this.$element, e)
                    }, i.prototype.option = function(e) {
                        var t;
                        e.children ? (t = document.createElement("optgroup"), t.label = e.text) : (t = document.createElement("option"), void 0 !== t.textContent ? t.textContent = e.text : t.innerText = e.text), e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title);
                        var i = n(t),
                            a = this._normalizeItem(e);
                        return a.element = t, n.data(t, "data", a), i
                    }, i.prototype.item = function(e) {
                        var t = {};
                        if (t = n.data(e[0], "data"), null != t) return t;
                        if (e.is("option")) t = {
                            id: e.val(),
                            text: e.text(),
                            disabled: e.prop("disabled"),
                            selected: e.prop("selected"),
                            title: e.prop("title")
                        };
                        else if (e.is("optgroup")) {
                            t = {
                                text: e.prop("label"),
                                children: [],
                                title: e.prop("title")
                            };
                            for (var i = e.children("option"), a = [], s = 0; s < i.length; s++) {
                                var o = n(i[s]),
                                    r = this.item(o);
                                a.push(r)
                            }
                            t.children = a
                        }
                        return t = this._normalizeItem(t), t.element = e[0], n.data(e[0], "data", t), t
                    }, i.prototype._normalizeItem = function(e) {
                        n.isPlainObject(e) || (e = {
                            id: e,
                            text: e
                        }), e = n.extend({}, {
                            text: ""
                        }, e);
                        var t = {
                            selected: !1,
                            disabled: !1
                        };
                        return null != e.id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), n.extend({}, t, e)
                    }, i.prototype.matches = function(e, t) {
                        var n = this.options.get("matcher");
                        return n(e, t)
                    }, i
                }), t.define("select2/data/array", ["./select", "../utils", "jquery"], function(e, t, n) {
                    function i(e, t) {
                        var n = t.get("data") || [];
                        i.__super__.constructor.call(this, e, t), this.addOptions(this.convertToOptions(n))
                    }
                    return t.Extend(i, e), i.prototype.select = function(e) {
                        var t = this.$element.find("option").filter(function(t, n) {
                            return n.value == e.id.toString()
                        });
                        0 === t.length && (t = this.option(e), this.addOptions(t)), i.__super__.select.call(this, e)
                    }, i.prototype.convertToOptions = function(e) {
                        function i(e) {
                            return function() {
                                return n(this).val() == e.id
                            }
                        }
                        for (var a = this, s = this.$element.find("option"), o = s.map(function() {
                                return a.item(n(this)).id
                            }).get(), r = [], d = 0; d < e.length; d++) {
                            var l = this._normalizeItem(e[d]);
                            if (n.inArray(l.id, o) >= 0) {
                                var u = s.filter(i(l)),
                                    c = this.item(u),
                                    h = n.extend(!0, {}, l, c),
                                    m = this.option(h);
                                u.replaceWith(m)
                            } else {
                                var p = this.option(l);
                                if (l.children) {
                                    var f = this.convertToOptions(l.children);
                                    t.appendMany(p, f)
                                }
                                r.push(p)
                            }
                        }
                        return r
                    }, i
                }), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(e, t, n) {
                    function i(e, t) {
                        this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), i.__super__.constructor.call(this, e, t)
                    }
                    return t.Extend(i, e), i.prototype._applyDefaults = function(e) {
                        var t = {
                            data: function(e) {
                                return n.extend({}, e, {
                                    q: e.term
                                })
                            },
                            transport: function(e, t, i) {
                                var a = n.ajax(e);
                                return a.then(t), a.fail(i), a
                            }
                        };
                        return n.extend({}, t, e, !0)
                    }, i.prototype.processResults = function(e) {
                        return e
                    }, i.prototype.query = function(e, t) {
                        function i() {
                            var i = s.transport(s, function(i) {
                                var s = a.processResults(i, e);
                                a.options.get("debug") && window.console && console.error && (s && s.results && n.isArray(s.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), t(s)
                            }, function() {
                                i.status && "0" === i.status || a.trigger("results:message", {
                                    message: "errorLoading"
                                })
                            });
                            a._request = i
                        }
                        var a = this;
                        null != this._request && (n.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                        var s = n.extend({
                            type: "GET"
                        }, this.ajaxOptions);
                        "function" == typeof s.url && (s.url = s.url.call(this.$element, e)), "function" == typeof s.data && (s.data = s.data.call(this.$element, e)), this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(i, this.ajaxOptions.delay)) : i()
                    }, i
                }), t.define("select2/data/tags", ["jquery"], function(e) {
                    function t(t, n, i) {
                        var a = i.get("tags"),
                            s = i.get("createTag");
                        void 0 !== s && (this.createTag = s);
                        var o = i.get("insertTag");
                        if (void 0 !== o && (this.insertTag = o), t.call(this, n, i), e.isArray(a))
                            for (var r = 0; r < a.length; r++) {
                                var d = a[r],
                                    l = this._normalizeItem(d),
                                    u = this.option(l);
                                this.$element.append(u)
                            }
                    }
                    return t.prototype.query = function(e, t, n) {
                        function i(e, s) {
                            for (var o = e.results, r = 0; r < o.length; r++) {
                                var d = o[r],
                                    l = null != d.children && !i({
                                        results: d.children
                                    }, !0),
                                    u = d.text === t.term;
                                if (u || l) return s ? !1 : (e.data = o, void n(e))
                            }
                            if (s) return !0;
                            var c = a.createTag(t);
                            if (null != c) {
                                var h = a.option(c);
                                h.attr("data-select2-tag", !0), a.addOptions([h]), a.insertTag(o, c)
                            }
                            e.results = o, n(e)
                        }
                        var a = this;
                        return this._removeOldTags(), null == t.term || null != t.page ? void e.call(this, t, n) : void e.call(this, t, i)
                    }, t.prototype.createTag = function(t, n) {
                        var i = e.trim(n.term);
                        return "" === i ? null : {
                            id: i,
                            text: i
                        }
                    }, t.prototype.insertTag = function(e, t, n) {
                        t.unshift(n)
                    }, t.prototype._removeOldTags = function(t) {
                        var n = (this._lastTag, this.$element.find("option[data-select2-tag]"));
                        n.each(function() {
                            this.selected || e(this).remove()
                        })
                    }, t
                }), t.define("select2/data/tokenizer", ["jquery"], function(e) {
                    function t(e, t, n) {
                        var i = n.get("tokenizer");
                        void 0 !== i && (this.tokenizer = i), e.call(this, t, n)
                    }
                    return t.prototype.bind = function(e, t, n) {
                        e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
                    }, t.prototype.query = function(t, n, i) {
                        function a(t) {
                            var n = o._normalizeItem(t),
                                i = o.$element.find("option").filter(function() {
                                    return e(this).val() === n.id
                                });
                            if (!i.length) {
                                var a = o.option(n);
                                a.attr("data-select2-tag", !0), o._removeOldTags(), o.addOptions([a])
                            }
                            s(n)
                        }

                        function s(e) {
                            o.trigger("select", {
                                data: e
                            })
                        }
                        var o = this;
                        n.term = n.term || "";
                        var r = this.tokenizer(n, this.options, a);
                        r.term !== n.term && (this.$search.length && (this.$search.val(r.term), this.$search.focus()), n.term = r.term), t.call(this, n, i)
                    }, t.prototype.tokenizer = function(t, n, i, a) {
                        for (var s = i.get("tokenSeparators") || [], o = n.term, r = 0, d = this.createTag || function(e) {
                                return {
                                    id: e.term,
                                    text: e.term
                                }
                            }; r < o.length;) {
                            var l = o[r];
                            if (-1 !== e.inArray(l, s)) {
                                var u = o.substr(0, r),
                                    c = e.extend({}, n, {
                                        term: u
                                    }),
                                    h = d(c);
                                null != h ? (a(h), o = o.substr(r + 1) || "", r = 0) : r++
                            } else r++
                        }
                        return {
                            term: o
                        }
                    }, t
                }), t.define("select2/data/minimumInputLength", [], function() {
                    function e(e, t, n) {
                        this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n)
                    }
                    return e.prototype.query = function(e, t, n) {
                        return t.term = t.term || "", t.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                            message: "inputTooShort",
                            args: {
                                minimum: this.minimumInputLength,
                                input: t.term,
                                params: t
                            }
                        }) : void e.call(this, t, n)
                    }, e
                }), t.define("select2/data/maximumInputLength", [], function() {
                    function e(e, t, n) {
                        this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n)
                    }
                    return e.prototype.query = function(e, t, n) {
                        return t.term = t.term || "", this.maximumInputLength > 0 && t.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                            message: "inputTooLong",
                            args: {
                                maximum: this.maximumInputLength,
                                input: t.term,
                                params: t
                            }
                        }) : void e.call(this, t, n)
                    }, e
                }), t.define("select2/data/maximumSelectionLength", [], function() {
                    function e(e, t, n) {
                        this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n)
                    }
                    return e.prototype.query = function(e, t, n) {
                        var i = this;
                        this.current(function(a) {
                            var s = null != a ? a.length : 0;
                            return i.maximumSelectionLength > 0 && s >= i.maximumSelectionLength ? void i.trigger("results:message", {
                                message: "maximumSelected",
                                args: {
                                    maximum: i.maximumSelectionLength
                                }
                            }) : void e.call(i, t, n)
                        })
                    }, e
                }), t.define("select2/dropdown", ["jquery", "./utils"], function(e, t) {
                    function n(e, t) {
                        this.$element = e, this.options = t, n.__super__.constructor.call(this)
                    }
                    return t.Extend(n, t.Observable), n.prototype.render = function() {
                        var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                        return t.attr("dir", this.options.get("dir")), this.$dropdown = t, t
                    }, n.prototype.bind = function() {}, n.prototype.position = function(e, t) {}, n.prototype.destroy = function() {
                        this.$dropdown.remove()
                    }, n
                }), t.define("select2/dropdown/search", ["jquery", "../utils"], function(e, t) {
                    function n() {}
                    return n.prototype.render = function(t) {
                        var n = t.call(this),
                            i = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                        return this.$searchContainer = i, this.$search = i.find("input"), n.prepend(i), n
                    }, n.prototype.bind = function(t, n, i) {
                        var a = this;
                        t.call(this, n, i), this.$search.on("keydown", function(e) {
                            a.trigger("keypress", e), a._keyUpPrevented = e.isDefaultPrevented()
                        }), this.$search.on("input", function(t) {
                            e(this).off("keyup")
                        }), this.$search.on("keyup input", function(e) {
                            a.handleSearch(e)
                        }), n.on("open", function() {
                            a.$search.attr("tabindex", 0), a.$search.focus(), window.setTimeout(function() {
                                a.$search.focus()
                            }, 0)
                        }), n.on("close", function() {
                            a.$search.attr("tabindex", -1), a.$search.val("")
                        }), n.on("focus", function() {
                            n.isOpen() && a.$search.focus()
                        }), n.on("results:all", function(e) {
                            if (null == e.query.term || "" === e.query.term) {
                                var t = a.showSearch(e);
                                t ? a.$searchContainer.removeClass("select2-search--hide") : a.$searchContainer.addClass("select2-search--hide")
                            }
                        })
                    }, n.prototype.handleSearch = function(e) {
                        if (!this._keyUpPrevented) {
                            var t = this.$search.val();
                            this.trigger("query", {
                                term: t
                            })
                        }
                        this._keyUpPrevented = !1
                    }, n.prototype.showSearch = function(e, t) {
                        return !0
                    }, n
                }), t.define("select2/dropdown/hidePlaceholder", [], function() {
                    function e(e, t, n, i) {
                        this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, i)
                    }
                    return e.prototype.append = function(e, t) {
                        t.results = this.removePlaceholder(t.results), e.call(this, t)
                    }, e.prototype.normalizePlaceholder = function(e, t) {
                        return "string" == typeof t && (t = {
                            id: "",
                            text: t
                        }), t
                    }, e.prototype.removePlaceholder = function(e, t) {
                        for (var n = t.slice(0), i = t.length - 1; i >= 0; i--) {
                            var a = t[i];
                            this.placeholder.id === a.id && n.splice(i, 1)
                        }
                        return n
                    }, e
                }), t.define("select2/dropdown/infiniteScroll", ["jquery"], function(e) {
                    function t(e, t, n, i) {
                        this.lastParams = {}, e.call(this, t, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                    }
                    return t.prototype.append = function(e, t) {
                        this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && this.$results.append(this.$loadingMore)
                    }, t.prototype.bind = function(t, n, i) {
                        var a = this;
                        t.call(this, n, i), n.on("query", function(e) {
                            a.lastParams = e, a.loading = !0
                        }), n.on("query:append", function(e) {
                            a.lastParams = e, a.loading = !0
                        }), this.$results.on("scroll", function() {
                            var t = e.contains(document.documentElement, a.$loadingMore[0]);
                            if (!a.loading && t) {
                                var n = a.$results.offset().top + a.$results.outerHeight(!1),
                                    i = a.$loadingMore.offset().top + a.$loadingMore.outerHeight(!1);
                                n + 50 >= i && a.loadMore()
                            }
                        })
                    }, t.prototype.loadMore = function() {
                        this.loading = !0;
                        var t = e.extend({}, {
                            page: 1
                        }, this.lastParams);
                        t.page++, this.trigger("query:append", t)
                    }, t.prototype.showLoadingMore = function(e, t) {
                        return t.pagination && t.pagination.more
                    }, t.prototype.createLoadingMore = function() {
                        var t = e('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                            n = this.options.get("translations").get("loadingMore");
                        return t.html(n(this.lastParams)), t
                    }, t
                }), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(e, t) {
                    function n(t, n, i) {
                        this.$dropdownParent = i.get("dropdownParent") || e(document.body), t.call(this, n, i)
                    }
                    return n.prototype.bind = function(e, t, n) {
                        var i = this,
                            a = !1;
                        e.call(this, t, n), t.on("open", function() {
                            i._showDropdown(), i._attachPositioningHandler(t), a || (a = !0, t.on("results:all", function() {
                                i._positionDropdown(), i._resizeDropdown()
                            }), t.on("results:append", function() {
                                i._positionDropdown(), i._resizeDropdown()
                            }))
                        }), t.on("close", function() {
                            i._hideDropdown(), i._detachPositioningHandler(t)
                        }), this.$dropdownContainer.on("mousedown", function(e) {
                            e.stopPropagation()
                        })
                    }, n.prototype.destroy = function(e) {
                        e.call(this), this.$dropdownContainer.remove()
                    }, n.prototype.position = function(e, t, n) {
                        t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
                            position: "absolute",
                            top: -999999
                        }), this.$container = n
                    }, n.prototype.render = function(t) {
                        var n = e("<span></span>"),
                            i = t.call(this);
                        return n.append(i), this.$dropdownContainer = n, n
                    }, n.prototype._hideDropdown = function(e) {
                        this.$dropdownContainer.detach()
                    }, n.prototype._attachPositioningHandler = function(n, i) {
                        var a = this,
                            s = "scroll.select2." + i.id,
                            o = "resize.select2." + i.id,
                            r = "orientationchange.select2." + i.id,
                            d = this.$container.parents().filter(t.hasScroll);
                        d.each(function() {
                            e(this).data("select2-scroll-position", {
                                x: e(this).scrollLeft(),
                                y: e(this).scrollTop()
                            })
                        }), d.on(s, function(t) {
                            var n = e(this).data("select2-scroll-position");
                            e(this).scrollTop(n.y)
                        }), e(window).on(s + " " + o + " " + r, function(e) {
                            a._positionDropdown(), a._resizeDropdown()
                        })
                    }, n.prototype._detachPositioningHandler = function(n, i) {
                        var a = "scroll.select2." + i.id,
                            s = "resize.select2." + i.id,
                            o = "orientationchange.select2." + i.id,
                            r = this.$container.parents().filter(t.hasScroll);
                        r.off(a), e(window).off(a + " " + s + " " + o)
                    }, n.prototype._positionDropdown = function() {
                        var t = e(window),
                            n = this.$dropdown.hasClass("select2-dropdown--above"),
                            i = this.$dropdown.hasClass("select2-dropdown--below"),
                            a = null,
                            s = this.$container.offset();
                        s.bottom = s.top + this.$container.outerHeight(!1);
                        var o = {
                            height: this.$container.outerHeight(!1)
                        };
                        o.top = s.top, o.bottom = s.top + o.height;
                        var r = {
                                height: this.$dropdown.outerHeight(!1)
                            },
                            d = {
                                top: t.scrollTop(),
                                bottom: t.scrollTop() + t.height()
                            },
                            l = d.top < s.top - r.height,
                            u = d.bottom > s.bottom + r.height,
                            c = {
                                left: s.left,
                                top: o.bottom
                            },
                            h = this.$dropdownParent;
                        "static" === h.css("position") && (h = h.offsetParent());
                        var m = h.offset();
                        c.top -= m.top, c.left -= m.left, n || i || (a = "below"), u || !l || n ? !l && u && n && (a = "below") : a = "above", ("above" == a || n && "below" !== a) && (c.top = o.top - m.top - r.height), null != a && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + a), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + a)), this.$dropdownContainer.css(c)
                    }, n.prototype._resizeDropdown = function() {
                        var e = {
                            width: this.$container.outerWidth(!1) + "px"
                        };
                        this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e)
                    }, n.prototype._showDropdown = function(e) {
                        this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                    }, n
                }), t.define("select2/dropdown/minimumResultsForSearch", [], function() {
                    function e(t) {
                        for (var n = 0, i = 0; i < t.length; i++) {
                            var a = t[i];
                            a.children ? n += e(a.children) : n++
                        }
                        return n
                    }

                    function t(e, t, n, i) {
                        this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, i)
                    }
                    return t.prototype.showSearch = function(t, n) {
                        return e(n.data.results) < this.minimumResultsForSearch ? !1 : t.call(this, n)
                    }, t
                }), t.define("select2/dropdown/selectOnClose", [], function() {
                    function e() {}
                    return e.prototype.bind = function(e, t, n) {
                        var i = this;
                        e.call(this, t, n), t.on("close", function(e) {
                            i._handleSelectOnClose(e)
                        })
                    }, e.prototype._handleSelectOnClose = function(e, t) {
                        if (t && null != t.originalSelect2Event) {
                            var n = t.originalSelect2Event;
                            if ("select" === n._type || "unselect" === n._type) return
                        }
                        var i = this.getHighlightedResults();
                        if (!(i.length < 1)) {
                            var a = i.data("data");
                            null != a.element && a.element.selected || null == a.element && a.selected || this.trigger("select", {
                                data: a
                            })
                        }
                    }, e
                }), t.define("select2/dropdown/closeOnSelect", [], function() {
                    function e() {}
                    return e.prototype.bind = function(e, t, n) {
                        var i = this;
                        e.call(this, t, n), t.on("select", function(e) {
                            i._selectTriggered(e)
                        }), t.on("unselect", function(e) {
                            i._selectTriggered(e)
                        })
                    }, e.prototype._selectTriggered = function(e, t) {
                        var n = t.originalEvent;
                        n && n.ctrlKey || this.trigger("close", {
                            originalEvent: n,
                            originalSelect2Event: t
                        })
                    }, e
                }), t.define("select2/i18n/en", [], function() {
                    return {
                        errorLoading: function() {
                            return "The results could not be loaded."
                        },
                        inputTooLong: function(e) {
                            var t = e.input.length - e.maximum,
                                n = "Please delete " + t + " character";
                            return 1 != t && (n += "s"), n
                        },
                        inputTooShort: function(e) {
                            var t = e.minimum - e.input.length,
                                n = "Please enter " + t + " or more characters";
                            return n
                        },
                        loadingMore: function() {
                            return "Loading more results…"
                        },
                        maximumSelected: function(e) {
                            var t = "You can only select " + e.maximum + " item";
                            return 1 != e.maximum && (t += "s"), t
                        },
                        noResults: function() {
                            return "No results found"
                        },
                        searching: function() {
                            return "Searching…"
                        }
                    }
                }), t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(e, t, n, i, a, s, o, r, d, l, u, c, h, m, p, f, _, y, A, g, v, M, w, k, b, D, L, Y, T) {
                    function S() {
                        this.reset()
                    }
                    S.prototype.apply = function(c) {
                        if (c = e.extend(!0, {}, this.defaults, c), null == c.dataAdapter) {
                            if (c.dataAdapter = null != c.ajax ? p : null != c.data ? m : h, c.minimumInputLength > 0 && (c.dataAdapter = l.Decorate(c.dataAdapter, y)), c.maximumInputLength > 0 && (c.dataAdapter = l.Decorate(c.dataAdapter, A)), c.maximumSelectionLength > 0 && (c.dataAdapter = l.Decorate(c.dataAdapter, g)), c.tags && (c.dataAdapter = l.Decorate(c.dataAdapter, f)), (null != c.tokenSeparators || null != c.tokenizer) && (c.dataAdapter = l.Decorate(c.dataAdapter, _)), null != c.query) {
                                var T = t(c.amdBase + "compat/query");
                                c.dataAdapter = l.Decorate(c.dataAdapter, T)
                            }
                            if (null != c.initSelection) {
                                var S = t(c.amdBase + "compat/initSelection");
                                c.dataAdapter = l.Decorate(c.dataAdapter, S)
                            }
                        }
                        if (null == c.resultsAdapter && (c.resultsAdapter = n, null != c.ajax && (c.resultsAdapter = l.Decorate(c.resultsAdapter, k)), null != c.placeholder && (c.resultsAdapter = l.Decorate(c.resultsAdapter, w)), c.selectOnClose && (c.resultsAdapter = l.Decorate(c.resultsAdapter, L))), null == c.dropdownAdapter) {
                            if (c.multiple) c.dropdownAdapter = v;
                            else {
                                var x = l.Decorate(v, M);
                                c.dropdownAdapter = x
                            }
                            if (0 !== c.minimumResultsForSearch && (c.dropdownAdapter = l.Decorate(c.dropdownAdapter, D)), c.closeOnSelect && (c.dropdownAdapter = l.Decorate(c.dropdownAdapter, Y)), null != c.dropdownCssClass || null != c.dropdownCss || null != c.adaptDropdownCssClass) {
                                var C = t(c.amdBase + "compat/dropdownCss");
                                c.dropdownAdapter = l.Decorate(c.dropdownAdapter, C)
                            }
                            c.dropdownAdapter = l.Decorate(c.dropdownAdapter, b)
                        }
                        if (null == c.selectionAdapter) {
                            if (c.selectionAdapter = c.multiple ? a : i, null != c.placeholder && (c.selectionAdapter = l.Decorate(c.selectionAdapter, s)), c.allowClear && (c.selectionAdapter = l.Decorate(c.selectionAdapter, o)), c.multiple && (c.selectionAdapter = l.Decorate(c.selectionAdapter, r)), null != c.containerCssClass || null != c.containerCss || null != c.adaptContainerCssClass) {
                                var P = t(c.amdBase + "compat/containerCss");
                                c.selectionAdapter = l.Decorate(c.selectionAdapter, P)
                            }
                            c.selectionAdapter = l.Decorate(c.selectionAdapter, d)
                        }
                        if ("string" == typeof c.language)
                            if (c.language.indexOf("-") > 0) {
                                var E = c.language.split("-"),
                                    H = E[0];
                                c.language = [c.language, H]
                            } else c.language = [c.language];
                        if (e.isArray(c.language)) {
                            var O = new u;
                            c.language.push("en");
                            for (var z = c.language, j = 0; j < z.length; j++) {
                                var $ = z[j],
                                    F = {};
                                try {
                                    F = u.loadPath($)
                                } catch (I) {
                                    try {
                                        $ = this.defaults.amdLanguageBase + $, F = u.loadPath($)
                                    } catch (W) {
                                        c.debug && window.console && console.warn && console.warn('Select2: The language file for "' + $ + '" could not be automatically loaded. A fallback will be used instead.');
                                        continue
                                    }
                                }
                                O.extend(F)
                            }
                            c.translations = O
                        } else {
                            var B = u.loadPath(this.defaults.amdLanguageBase + "en"),
                                R = new u(c.language);
                            R.extend(B), c.translations = R
                        }
                        return c
                    }, S.prototype.reset = function() {
                        function t(e) {
                            function t(e) {
                                return c[e] || e
                            }
                            return e.replace(/[^\u0000-\u007E]/g, t)
                        }

                        function n(i, a) {
                            if ("" === e.trim(i.term)) return a;
                            if (a.children && a.children.length > 0) {
                                for (var s = e.extend(!0, {}, a), o = a.children.length - 1; o >= 0; o--) {
                                    var r = a.children[o],
                                        d = n(i, r);
                                    null == d && s.children.splice(o, 1)
                                }
                                return s.children.length > 0 ? s : n(i, s)
                            }
                            var l = t(a.text).toUpperCase(),
                                u = t(i.term).toUpperCase();
                            return l.indexOf(u) > -1 ? a : null
                        }
                        this.defaults = {
                            amdBase: "./",
                            amdLanguageBase: "./i18n/",
                            closeOnSelect: !0,
                            debug: !1,
                            dropdownAutoWidth: !1,
                            escapeMarkup: l.escapeMarkup,
                            language: T,
                            matcher: n,
                            minimumInputLength: 0,
                            maximumInputLength: 0,
                            maximumSelectionLength: 0,
                            minimumResultsForSearch: 0,
                            selectOnClose: !1,
                            sorter: function(e) {
                                return e
                            },
                            templateResult: function(e) {
                                return e.text
                            },
                            templateSelection: function(e) {
                                return e.text
                            },
                            theme: "default",
                            width: "resolve"
                        }
                    }, S.prototype.set = function(t, n) {
                        var i = e.camelCase(t),
                            a = {};
                        a[i] = n;
                        var s = l._convertData(a);
                        e.extend(this.defaults, s)
                    };
                    var x = new S;
                    return x
                }), t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(e, t, n, i) {
                    function a(t, a) {
                        if (this.options = t, null != a && this.fromElement(a), this.options = n.apply(this.options), a && a.is("input")) {
                            var s = e(this.get("amdBase") + "compat/inputData");
                            this.options.dataAdapter = i.Decorate(this.options.dataAdapter, s)
                        }
                    }
                    return a.prototype.fromElement = function(e) {
                        var n = ["select2"];
                        null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))), null == this.options.dir && (this.options.dir = e.prop("dir") ? e.prop("dir") : e.closest("[dir]").prop("dir") ? e.closest("[dir]").prop("dir") : "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), e.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), e.data("data", e.data("select2Tags")), e.data("tags", !0)), e.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", e.data("ajaxUrl")), e.data("ajax--url", e.data("ajaxUrl")));
                        var a = {};
                        a = t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset ? t.extend(!0, {}, e[0].dataset, e.data()) : e.data();
                        var s = t.extend(!0, {}, a);
                        s = i._convertData(s);
                        for (var o in s) t.inArray(o, n) > -1 || (t.isPlainObject(this.options[o]) ? t.extend(this.options[o], s[o]) : this.options[o] = s[o]);
                        return this
                    }, a.prototype.get = function(e) {
                        return this.options[e]
                    }, a.prototype.set = function(e, t) {
                        this.options[e] = t
                    }, a
                }), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(e, t, n, i) {
                    var a = function(e, n) {
                        null != e.data("select2") && e.data("select2").destroy(), this.$element = e, this.id = this._generateId(e), n = n || {}, this.options = new t(n, e), a.__super__.constructor.call(this);
                        var i = e.attr("tabindex") || 0;
                        e.data("old-tabindex", i), e.attr("tabindex", "-1");
                        var s = this.options.get("dataAdapter");
                        this.dataAdapter = new s(e, this.options);
                        var o = this.render();
                        this._placeContainer(o);
                        var r = this.options.get("selectionAdapter");
                        this.selection = new r(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, o);
                        var d = this.options.get("dropdownAdapter");
                        this.dropdown = new d(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, o);
                        var l = this.options.get("resultsAdapter");
                        this.results = new l(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                        var u = this;
                        this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(e) {
                            u.trigger("selection:update", {
                                data: e
                            })
                        }), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), e.data("select2", this)
                    };
                    return n.Extend(a, n.Observable), a.prototype._generateId = function(e) {
                        var t = "";
                        return t = null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4), t = t.replace(/(:|\.|\[|\]|,)/g, ""), t = "select2-" + t
                    }, a.prototype._placeContainer = function(e) {
                        e.insertAfter(this.$element);
                        var t = this._resolveWidth(this.$element, this.options.get("width"));
                        null != t && e.css("width", t)
                    }, a.prototype._resolveWidth = function(e, t) {
                        var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                        if ("resolve" == t) {
                            var i = this._resolveWidth(e, "style");
                            return null != i ? i : this._resolveWidth(e, "element")
                        }
                        if ("element" == t) {
                            var a = e.outerWidth(!1);
                            return 0 >= a ? "auto" : a + "px"
                        }
                        if ("style" == t) {
                            var s = e.attr("style");
                            if ("string" != typeof s) return null;
                            for (var o = s.split(";"), r = 0, d = o.length; d > r; r += 1) {
                                var l = o[r].replace(/\s/g, ""),
                                    u = l.match(n);
                                if (null !== u && u.length >= 1) return u[1]
                            }
                            return null
                        }
                        return t
                    }, a.prototype._bindAdapters = function() {
                        this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                    }, a.prototype._registerDomEvents = function() {
                        var t = this;
                        this.$element.on("change.select2", function() {
                            t.dataAdapter.current(function(e) {
                                t.trigger("selection:update", {
                                    data: e
                                })
                            })
                        }), this.$element.on("focus.select2", function(e) {
                            t.trigger("focus", e)
                        }), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                        var i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                        null != i ? (this._observer = new i(function(n) {
                            e.each(n, t._syncA), e.each(n, t._syncS)
                        }), this._observer.observe(this.$element[0], {
                            attributes: !0,
                            childList: !0,
                            subtree: !1
                        })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1))
                    }, a.prototype._registerDataEvents = function() {
                        var e = this;
                        this.dataAdapter.on("*", function(t, n) {
                            e.trigger(t, n)
                        })
                    }, a.prototype._registerSelectionEvents = function() {
                        var t = this,
                            n = ["toggle", "focus"];
                        this.selection.on("toggle", function() {
                            t.toggleDropdown()
                        }), this.selection.on("focus", function(e) {
                            t.focus(e)
                        }), this.selection.on("*", function(i, a) {
                            -1 === e.inArray(i, n) && t.trigger(i, a)
                        })
                    }, a.prototype._registerDropdownEvents = function() {
                        var e = this;
                        this.dropdown.on("*", function(t, n) {
                            e.trigger(t, n)
                        })
                    }, a.prototype._registerResultsEvents = function() {
                        var e = this;
                        this.results.on("*", function(t, n) {
                            e.trigger(t, n)
                        })
                    }, a.prototype._registerEvents = function() {
                        var e = this;
                        this.on("open", function() {
                            e.$container.addClass("select2-container--open")
                        }), this.on("close", function() {
                            e.$container.removeClass("select2-container--open")
                        }), this.on("enable", function() {
                            e.$container.removeClass("select2-container--disabled")
                        }), this.on("disable", function() {
                            e.$container.addClass("select2-container--disabled")
                        }), this.on("blur", function() {
                            e.$container.removeClass("select2-container--focus")
                        }), this.on("query", function(t) {
                            e.isOpen() || e.trigger("open", {}), this.dataAdapter.query(t, function(n) {
                                e.trigger("results:all", {
                                    data: n,
                                    query: t
                                })
                            })
                        }), this.on("query:append", function(t) {
                            this.dataAdapter.query(t, function(n) {
                                e.trigger("results:append", {
                                    data: n,
                                    query: t
                                })
                            })
                        }), this.on("keypress", function(t) {
                            var n = t.which;
                            e.isOpen() ? n === i.ESC || n === i.TAB || n === i.UP && t.altKey ? (e.close(), t.preventDefault()) : n === i.ENTER ? (e.trigger("results:select", {}), t.preventDefault()) : n === i.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}), t.preventDefault()) : n === i.UP ? (e.trigger("results:previous", {}), t.preventDefault()) : n === i.DOWN && (e.trigger("results:next", {}), t.preventDefault()) : (n === i.ENTER || n === i.SPACE || n === i.DOWN && t.altKey) && (e.open(), t.preventDefault())
                        })
                    }, a.prototype._syncAttributes = function() {
                        this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                    }, a.prototype._syncSubtree = function(e, t) {
                        var n = !1,
                            i = this;
                        if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
                            if (t)
                                if (t.addedNodes && t.addedNodes.length > 0)
                                    for (var a = 0; a < t.addedNodes.length; a++) {
                                        var s = t.addedNodes[a];
                                        s.selected && (n = !0)
                                    } else t.removedNodes && t.removedNodes.length > 0 && (n = !0);
                                else n = !0;
                            n && this.dataAdapter.current(function(e) {
                                i.trigger("selection:update", {
                                    data: e
                                })
                            })
                        }
                    }, a.prototype.trigger = function(e, t) {
                        var n = a.__super__.trigger,
                            i = {
                                open: "opening",
                                close: "closing",
                                select: "selecting",
                                unselect: "unselecting"
                            };
                        if (void 0 === t && (t = {}), e in i) {
                            var s = i[e],
                                o = {
                                    prevented: !1,
                                    name: e,
                                    args: t
                                };
                            if (n.call(this, s, o), o.prevented) return void(t.prevented = !0)
                        }
                        n.call(this, e, t)
                    }, a.prototype.toggleDropdown = function() {
                        this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                    }, a.prototype.open = function() {
                        this.isOpen() || this.trigger("query", {})
                    }, a.prototype.close = function() {
                        this.isOpen() && this.trigger("close", {})
                    }, a.prototype.isOpen = function() {
                        return this.$container.hasClass("select2-container--open")
                    }, a.prototype.hasFocus = function() {
                        return this.$container.hasClass("select2-container--focus")
                    }, a.prototype.focus = function(e) {
                        this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                    }, a.prototype.enable = function(e) {
                        this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == e || 0 === e.length) && (e = [!0]);
                        var t = !e[0];
                        this.$element.prop("disabled", t)
                    }, a.prototype.data = function() {
                        this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                        var e = [];
                        return this.dataAdapter.current(function(t) {
                            e = t
                        }), e
                    }, a.prototype.val = function(t) {
                        if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length) return this.$element.val();
                        var n = t[0];
                        e.isArray(n) && (n = e.map(n, function(e) {
                            return e.toString()
                        })), this.$element.val(n).trigger("change")
                    }, a.prototype.destroy = function() {
                        this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                    }, a.prototype.render = function() {
                        var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                        return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), t.data("element", this.$element), t
                    }, a
                }), t.define("select2/compat/utils", ["jquery"], function(e) {
                    function t(t, n, i) {
                        var a, s, o = [];
                        a = e.trim(t.attr("class")), a && (a = "" + a, e(a.split(/\s+/)).each(function() {
                            0 === this.indexOf("select2-") && o.push(this)
                        })), a = e.trim(n.attr("class")), a && (a = "" + a, e(a.split(/\s+/)).each(function() {
                            0 !== this.indexOf("select2-") && (s = i(this), null != s && o.push(s))
                        })), t.attr("class", o.join(" "))
                    }
                    return {
                        syncCssClasses: t
                    }
                }), t.define("select2/compat/containerCss", ["jquery", "./utils"], function(e, t) {
                    function n(e) {
                        return null
                    }

                    function i() {}
                    return i.prototype.render = function(i) {
                        var a = i.call(this),
                            s = this.options.get("containerCssClass") || "";
                        e.isFunction(s) && (s = s(this.$element));
                        var o = this.options.get("adaptContainerCssClass");
                        if (o = o || n, -1 !== s.indexOf(":all:")) {
                            s = s.replace(":all:", "");
                            var r = o;
                            o = function(e) {
                                var t = r(e);
                                return null != t ? t + " " + e : e
                            }
                        }
                        var d = this.options.get("containerCss") || {};
                        return e.isFunction(d) && (d = d(this.$element)), t.syncCssClasses(a, this.$element, o), a.css(d), a.addClass(s), a
                    }, i
                }), t.define("select2/compat/dropdownCss", ["jquery", "./utils"], function(e, t) {
                    function n(e) {
                        return null
                    }

                    function i() {}
                    return i.prototype.render = function(i) {
                        var a = i.call(this),
                            s = this.options.get("dropdownCssClass") || "";
                        e.isFunction(s) && (s = s(this.$element));
                        var o = this.options.get("adaptDropdownCssClass");
                        if (o = o || n, -1 !== s.indexOf(":all:")) {
                            s = s.replace(":all:", "");
                            var r = o;
                            o = function(e) {
                                var t = r(e);
                                return null != t ? t + " " + e : e
                            }
                        }
                        var d = this.options.get("dropdownCss") || {};
                        return e.isFunction(d) && (d = d(this.$element)), t.syncCssClasses(a, this.$element, o), a.css(d), a.addClass(s), a
                    }, i
                }), t.define("select2/compat/initSelection", ["jquery"], function(e) {
                    function t(e, t, n) {
                        n.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = n.get("initSelection"), this._isInitialized = !1, e.call(this, t, n)
                    }
                    return t.prototype.current = function(t, n) {
                        var i = this;
                        return this._isInitialized ? void t.call(this, n) : void this.initSelection.call(null, this.$element, function(t) {
                            i._isInitialized = !0, e.isArray(t) || (t = [t]), n(t)
                        })
                    }, t
                }), t.define("select2/compat/inputData", ["jquery"], function(e) {
                    function t(e, t, n) {
                        this._currentData = [], this._valueSeparator = n.get("valueSeparator") || ",", "hidden" === t.prop("type") && n.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), e.call(this, t, n)
                    }
                    return t.prototype.current = function(t, n) {
                        function i(t, n) {
                            var a = [];
                            return t.selected || -1 !== e.inArray(t.id, n) ? (t.selected = !0, a.push(t)) : t.selected = !1, t.children && a.push.apply(a, i(t.children, n)), a
                        }
                        for (var a = [], s = 0; s < this._currentData.length; s++) {
                            var o = this._currentData[s];
                            a.push.apply(a, i(o, this.$element.val().split(this._valueSeparator)))
                        }
                        n(a)
                    }, t.prototype.select = function(t, n) {
                        if (this.options.get("multiple")) {
                            var i = this.$element.val();
                            i += this._valueSeparator + n.id, this.$element.val(i), this.$element.trigger("change")
                        } else this.current(function(t) {
                            e.map(t, function(e) {
                                e.selected = !1
                            })
                        }), this.$element.val(n.id), this.$element.trigger("change")
                    }, t.prototype.unselect = function(e, t) {
                        var n = this;
                        t.selected = !1, this.current(function(e) {
                            for (var i = [], a = 0; a < e.length; a++) {
                                var s = e[a];
                                t.id != s.id && i.push(s.id)
                            }
                            n.$element.val(i.join(n._valueSeparator)), n.$element.trigger("change")
                        })
                    }, t.prototype.query = function(e, t, n) {
                        for (var i = [], a = 0; a < this._currentData.length; a++) {
                            var s = this._currentData[a],
                                o = this.matches(t, s);
                            null !== o && i.push(o)
                        }
                        n({
                            results: i
                        })
                    }, t.prototype.addOptions = function(t, n) {
                        var i = e.map(n, function(t) {
                            return e.data(t[0], "data")
                        });
                        this._currentData.push.apply(this._currentData, i)
                    }, t
                }), t.define("select2/compat/matcher", ["jquery"], function(e) {
                    function t(t) {
                        function n(n, i) {
                            var a = e.extend(!0, {}, i);
                            if (null == n.term || "" === e.trim(n.term)) return a;
                            if (i.children) {
                                for (var s = i.children.length - 1; s >= 0; s--) {
                                    var o = i.children[s],
                                        r = t(n.term, o.text, o);
                                    r || a.children.splice(s, 1)
                                }
                                if (a.children.length > 0) return a
                            }
                            return t(n.term, i.text, i) ? a : null
                        }
                        return n
                    }
                    return t
                }), t.define("select2/compat/query", [], function() {
                    function e(e, t, n) {
                        n.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), e.call(this, t, n)
                    }
                    return e.prototype.query = function(e, t, n) {
                        t.callback = n;
                        var i = this.options.get("query");
                        i.call(null, t)
                    }, e
                }), t.define("select2/dropdown/attachContainer", [], function() {
                    function e(e, t, n) {
                        e.call(this, t, n)
                    }
                    return e.prototype.position = function(e, t, n) {
                        var i = n.find(".dropdown-wrapper");
                        i.append(t), t.addClass("select2-dropdown--below"), n.addClass("select2-container--below")
                    }, e
                }), t.define("select2/dropdown/stopPropagation", [], function() {
                    function e() {}
                    return e.prototype.bind = function(e, t, n) {
                        e.call(this, t, n);
                        var i = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                        this.$dropdown.on(i.join(" "), function(e) {
                            e.stopPropagation()
                        })
                    }, e
                }), t.define("select2/selection/stopPropagation", [], function() {
                    function e() {}
                    return e.prototype.bind = function(e, t, n) {
                        e.call(this, t, n);
                        var i = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                        this.$selection.on(i.join(" "), function(e) {
                            e.stopPropagation()
                        })
                    }, e
                }),
                function(n) {
                    "function" == typeof t.define && t.define.amd ? t.define("jquery-mousewheel", ["jquery"], n) : "object" == typeof exports ? module.exports = n : n(e)
                }(function(e) {
                    function t(t) {
                        var o = t || window.event,
                            r = d.call(arguments, 1),
                            l = 0,
                            c = 0,
                            h = 0,
                            m = 0,
                            p = 0,
                            f = 0;
                        if (t = e.event.fix(o), t.type = "mousewheel", "detail" in o && (h = -1 * o.detail), "wheelDelta" in o && (h = o.wheelDelta), "wheelDeltaY" in o && (h = o.wheelDeltaY), "wheelDeltaX" in o && (c = -1 * o.wheelDeltaX), "axis" in o && o.axis === o.HORIZONTAL_AXIS && (c = -1 * h, h = 0), l = 0 === h ? c : h, "deltaY" in o && (h = -1 * o.deltaY, l = h), "deltaX" in o && (c = o.deltaX, 0 === h && (l = -1 * c)), 0 !== h || 0 !== c) {
                            if (1 === o.deltaMode) {
                                var _ = e.data(this, "mousewheel-line-height");
                                l *= _, h *= _, c *= _
                            } else if (2 === o.deltaMode) {
                                var y = e.data(this, "mousewheel-page-height");
                                l *= y, h *= y, c *= y
                            }
                            if (m = Math.max(Math.abs(h), Math.abs(c)), (!s || s > m) && (s = m, i(o, m) && (s /= 40)), i(o, m) && (l /= 40, c /= 40, h /= 40), l = Math[l >= 1 ? "floor" : "ceil"](l / s), c = Math[c >= 1 ? "floor" : "ceil"](c / s), h = Math[h >= 1 ? "floor" : "ceil"](h / s), u.settings.normalizeOffset && this.getBoundingClientRect) {
                                var A = this.getBoundingClientRect();
                                p = t.clientX - A.left, f = t.clientY - A.top
                            }
                            return t.deltaX = c, t.deltaY = h, t.deltaFactor = s, t.offsetX = p, t.offsetY = f, t.deltaMode = 0, r.unshift(t, l, c, h), a && clearTimeout(a), a = setTimeout(n, 200), (e.event.dispatch || e.event.handle).apply(this, r)
                        }
                    }

                    function n() {
                        s = null
                    }

                    function i(e, t) {
                        return u.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
                    }
                    var a, s, o = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                        r = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                        d = Array.prototype.slice;
                    if (e.event.fixHooks)
                        for (var l = o.length; l;) e.event.fixHooks[o[--l]] = e.event.mouseHooks;
                    var u = e.event.special.mousewheel = {
                        version: "3.1.12",
                        setup: function() {
                            if (this.addEventListener)
                                for (var n = r.length; n;) this.addEventListener(r[--n], t, !1);
                            else this.onmousewheel = t;
                            e.data(this, "mousewheel-line-height", u.getLineHeight(this)), e.data(this, "mousewheel-page-height", u.getPageHeight(this))
                        },
                        teardown: function() {
                            if (this.removeEventListener)
                                for (var n = r.length; n;) this.removeEventListener(r[--n], t, !1);
                            else this.onmousewheel = null;
                            e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
                        },
                        getLineHeight: function(t) {
                            var n = e(t),
                                i = n["offsetParent" in e.fn ? "offsetParent" : "parent"]();
                            return i.length || (i = e("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
                        },
                        getPageHeight: function(t) {
                            return e(t).height()
                        },
                        settings: {
                            adjustOldDeltas: !0,
                            normalizeOffset: !0
                        }
                    };
                    e.fn.extend({
                        mousewheel: function(e) {
                            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
                        },
                        unmousewheel: function(e) {
                            return this.unbind("mousewheel", e)
                        }
                    })
                }), t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(e, t, n, i) {
                    if (null == e.fn.select2) {
                        var a = ["open", "close", "destroy"];
                        e.fn.select2 = function(t) {
                            if (t = t || {}, "object" == typeof t) return this.each(function() {
                                var i = e.extend(!0, {}, t);
                                new n(e(this), i)
                            }), this;
                            if ("string" == typeof t) {
                                var i, s = Array.prototype.slice.call(arguments, 1);
                                return this.each(function() {
                                    var n = e(this).data("select2");
                                    null == n && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), i = n[t].apply(n, s)
                                }), e.inArray(t, a) > -1 ? this : i
                            }
                            throw new Error("Invalid arguments for Select2: " + t)
                        }
                    }
                    return null == e.fn.select2.defaults && (e.fn.select2.defaults = i), n
                }), {
                    define: t.define,
                    require: t.require
                }
        }(),
        n = t.require("jquery.select2");
    return e.fn.select2.amd = t, n
}), ! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    "use strict";
    var t = window.Slick || {};
    t = function() {
        function t(t, i) {
            var a, s = this;
            s.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(t),
                appendDots: e(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(t, n) {
                    return e('<button type="button" data-role="none" role="button" tabindex="0" />').text(n + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, s.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = e(t), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, a = e(t).data("slick") || {}, s.options = e.extend({}, s.defaults, i, a), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, "undefined" != typeof document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = e.proxy(s.autoPlay, s), s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s), s.changeSlide = e.proxy(s.changeSlide, s), s.clickHandler = e.proxy(s.clickHandler, s), s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s), s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s), s.keyHandler = e.proxy(s.keyHandler, s), s.instanceUid = n++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
        }
        var n = 0;
        return t
    }(), t.prototype.activateADA = function() {
        var e = this;
        e.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, t.prototype.addSlide = t.prototype.slickAdd = function(t, n, i) {
        var a = this;
        if ("boolean" == typeof n) i = n, n = null;
        else if (0 > n || n >= a.slideCount) return !1;
        a.unload(), "number" == typeof n ? 0 === n && 0 === a.$slides.length ? e(t).appendTo(a.$slideTrack) : i ? e(t).insertBefore(a.$slides.eq(n)) : e(t).insertAfter(a.$slides.eq(n)) : i === !0 ? e(t).prependTo(a.$slideTrack) : e(t).appendTo(a.$slideTrack), a.$slides = a.$slideTrack.children(this.options.slide), a.$slideTrack.children(this.options.slide).detach(), a.$slideTrack.append(a.$slides), a.$slides.each(function(t, n) {
            e(n).attr("data-slick-index", t)
        }), a.$slidesCache = a.$slides, a.reinit()
    }, t.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }, t.prototype.animateSlide = function(t, n) {
        var i = {},
            a = this;
        a.animateHeight(), a.options.rtl === !0 && a.options.vertical === !1 && (t = -t), a.transformsEnabled === !1 ? a.options.vertical === !1 ? a.$slideTrack.animate({
            left: t
        }, a.options.speed, a.options.easing, n) : a.$slideTrack.animate({
            top: t
        }, a.options.speed, a.options.easing, n) : a.cssTransitions === !1 ? (a.options.rtl === !0 && (a.currentLeft = -a.currentLeft), e({
            animStart: a.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: a.options.speed,
            easing: a.options.easing,
            step: function(e) {
                e = Math.ceil(e), a.options.vertical === !1 ? (i[a.animType] = "translate(" + e + "px, 0px)", a.$slideTrack.css(i)) : (i[a.animType] = "translate(0px," + e + "px)", a.$slideTrack.css(i))
            },
            complete: function() {
                n && n.call()
            }
        })) : (a.applyTransition(), t = Math.ceil(t), i[a.animType] = a.options.vertical === !1 ? "translate3d(" + t + "px, 0px, 0px)" : "translate3d(0px," + t + "px, 0px)", a.$slideTrack.css(i), n && setTimeout(function() {
            a.disableTransition(), n.call()
        }, a.options.speed))
    }, t.prototype.getNavTarget = function() {
        var t = this,
            n = t.options.asNavFor;
        return n && null !== n && (n = e(n).not(t.$slider)), n
    }, t.prototype.asNavFor = function(t) {
        var n = this,
            i = n.getNavTarget();
        null !== i && "object" == typeof i && i.each(function() {
            var n = e(this).slick("getSlick");
            n.unslicked || n.slideHandler(t, !0)
        })
    }, t.prototype.applyTransition = function(e) {
        var t = this,
            n = {};
        n[t.transitionType] = t.options.fade === !1 ? t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }, t.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, t.prototype.autoPlayClear = function() {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    }, t.prototype.autoPlayIterator = function() {
        var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (e.options.infinite === !1 && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 === 0 && (e.direction = 1))), e.slideHandler(t))
    }, t.prototype.buildArrows = function() {
        var t = this;
        t.options.arrows === !0 && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, t.prototype.buildDots = function() {
        var t, n, i = this;
        if (i.options.dots === !0 && i.slideCount > i.options.slidesToShow) {
            for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
            i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, t.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, n) {
            e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
        }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable")
    }, t.prototype.buildRows = function() {
        var e, t, n, i, a, s, o, r = this;
        if (i = document.createDocumentFragment(), s = r.$slider.children(), r.options.rows > 1) {
            for (o = r.options.slidesPerRow * r.options.rows, a = Math.ceil(s.length / o), e = 0; a > e; e++) {
                var d = document.createElement("div");
                for (t = 0; t < r.options.rows; t++) {
                    var l = document.createElement("div");
                    for (n = 0; n < r.options.slidesPerRow; n++) {
                        var u = e * o + (t * r.options.slidesPerRow + n);
                        s.get(u) && l.appendChild(s.get(u))
                    }
                    d.appendChild(l)
                }
                i.appendChild(d)
            }
            r.$slider.empty().append(i), r.$slider.children().children().children().css({
                width: 100 / r.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, t.prototype.checkResponsive = function(t, n) {
        var i, a, s, o = this,
            r = !1,
            d = o.$slider.width(),
            l = window.innerWidth || e(window).width();
        if ("window" === o.respondTo ? s = l : "slider" === o.respondTo ? s = d : "min" === o.respondTo && (s = Math.min(l, d)), o.options.responsive && o.options.responsive.length && null !== o.options.responsive) {
            a = null;
            for (i in o.breakpoints) o.breakpoints.hasOwnProperty(i) && (o.originalSettings.mobileFirst === !1 ? s < o.breakpoints[i] && (a = o.breakpoints[i]) : s > o.breakpoints[i] && (a = o.breakpoints[i]));
            null !== a ? null !== o.activeBreakpoint ? (a !== o.activeBreakpoint || n) && (o.activeBreakpoint = a, "unslick" === o.breakpointSettings[a] ? o.unslick(a) : (o.options = e.extend({}, o.originalSettings, o.breakpointSettings[a]), t === !0 && (o.currentSlide = o.options.initialSlide), o.refresh(t)), r = a) : (o.activeBreakpoint = a, "unslick" === o.breakpointSettings[a] ? o.unslick(a) : (o.options = e.extend({}, o.originalSettings, o.breakpointSettings[a]), t === !0 && (o.currentSlide = o.options.initialSlide), o.refresh(t)), r = a) : null !== o.activeBreakpoint && (o.activeBreakpoint = null, o.options = o.originalSettings, t === !0 && (o.currentSlide = o.options.initialSlide), o.refresh(t), r = a), t || r === !1 || o.$slider.trigger("breakpoint", [o, r])
        }
    }, t.prototype.changeSlide = function(t, n) {
        var i, a, s, o = this,
            r = e(t.currentTarget);
        switch (r.is("a") && t.preventDefault(), r.is("li") || (r = r.closest("li")), s = o.slideCount % o.options.slidesToScroll !== 0, i = s ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, t.data.message) {
            case "previous":
                a = 0 === i ? o.options.slidesToScroll : o.options.slidesToShow - i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - a, !1, n);
                break;
            case "next":
                a = 0 === i ? o.options.slidesToScroll : i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + a, !1, n);
                break;
            case "index":
                var d = 0 === t.data.index ? 0 : t.data.index || r.index() * o.options.slidesToScroll;
                o.slideHandler(o.checkNavigable(d), !1, n), r.children().trigger("focus");
                break;
            default:
                return
        }
    }, t.prototype.checkNavigable = function(e) {
        var t, n, i = this;
        if (t = i.getNavigableIndexes(), n = 0, e > t[t.length - 1]) e = t[t.length - 1];
        else
            for (var a in t) {
                if (e < t[a]) {
                    e = n;
                    break
                }
                n = t[a]
            }
        return e
    }, t.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots && null !== t.$dots && e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), t.$slider.off("focus.slick blur.slick"), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.cleanUpSlideEvents = function() {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.cleanUpRows = function() {
        var e, t = this;
        t.options.rows > 1 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.empty().append(e))
    }, t.prototype.clickHandler = function(e) {
        var t = this;
        t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, t.prototype.destroy = function(t) {
        var n = this;
        n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            e(this).attr("style", e(this).data("originalStyling"))
        }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
    }, t.prototype.disableTransition = function(e) {
        var t = this,
            n = {};
        n[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }, t.prototype.fadeSlide = function(e, t) {
        var n = this;
        n.cssTransitions === !1 ? (n.$slides.eq(e).css({
            zIndex: n.options.zIndex
        }), n.$slides.eq(e).animate({
            opacity: 1
        }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
            opacity: 1,
            zIndex: n.options.zIndex
        }), t && setTimeout(function() {
            n.disableTransition(e), t.call()
        }, n.options.speed))
    }, t.prototype.fadeSlideOut = function(e) {
        var t = this;
        t.cssTransitions === !1 ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, t.prototype.focusHandler = function() {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(n) {
            n.stopImmediatePropagation();
            var i = e(this);
            setTimeout(function() {
                t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay())
            }, 0)
        })
    }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
        var e = this;
        return e.currentSlide
    }, t.prototype.getDotCount = function() {
        var e = this,
            t = 0,
            n = 0,
            i = 0;
        if (e.options.infinite === !0)
            for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (e.options.centerMode === !0) i = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return i - 1
    }, t.prototype.getLeft = function(e) {
        var t, n, i, a = this,
            s = 0;
        return a.slideOffset = 0, n = a.$slides.first().outerHeight(!0), a.options.infinite === !0 ? (a.slideCount > a.options.slidesToShow && (a.slideOffset = a.slideWidth * a.options.slidesToShow * -1, s = n * a.options.slidesToShow * -1), a.slideCount % a.options.slidesToScroll !== 0 && e + a.options.slidesToScroll > a.slideCount && a.slideCount > a.options.slidesToShow && (e > a.slideCount ? (a.slideOffset = (a.options.slidesToShow - (e - a.slideCount)) * a.slideWidth * -1, s = (a.options.slidesToShow - (e - a.slideCount)) * n * -1) : (a.slideOffset = a.slideCount % a.options.slidesToScroll * a.slideWidth * -1, s = a.slideCount % a.options.slidesToScroll * n * -1))) : e + a.options.slidesToShow > a.slideCount && (a.slideOffset = (e + a.options.slidesToShow - a.slideCount) * a.slideWidth, s = (e + a.options.slidesToShow - a.slideCount) * n), a.slideCount <= a.options.slidesToShow && (a.slideOffset = 0, s = 0), a.options.centerMode === !0 && a.options.infinite === !0 ? a.slideOffset += a.slideWidth * Math.floor(a.options.slidesToShow / 2) - a.slideWidth : a.options.centerMode === !0 && (a.slideOffset = 0, a.slideOffset += a.slideWidth * Math.floor(a.options.slidesToShow / 2)), t = a.options.vertical === !1 ? e * a.slideWidth * -1 + a.slideOffset : e * n * -1 + s, a.options.variableWidth === !0 && (i = a.$slideTrack.children(".slick-slide").eq(a.slideCount <= a.options.slidesToShow || a.options.infinite === !1 ? e : e + a.options.slidesToShow), t = a.options.rtl === !0 ? i[0] ? -1 * (a.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, a.options.centerMode === !0 && (i = a.$slideTrack.children(".slick-slide").eq(a.slideCount <= a.options.slidesToShow || a.options.infinite === !1 ? e : e + a.options.slidesToShow + 1), t = a.options.rtl === !0 ? i[0] ? -1 * (a.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (a.$list.width() - i.outerWidth()) / 2)), t
    }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
        var t = this;
        return t.options[e]
    }, t.prototype.getNavigableIndexes = function() {
        var e, t = this,
            n = 0,
            i = 0,
            a = [];
        for (t.options.infinite === !1 ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); e > n;) a.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return a
    }, t.prototype.getSlick = function() {
        return this
    }, t.prototype.getSlideCount = function() {
        var t, n, i, a = this;
        return i = a.options.centerMode === !0 ? a.slideWidth * Math.floor(a.options.slidesToShow / 2) : 0, a.options.swipeToSlide === !0 ? (a.$slideTrack.find(".slick-slide").each(function(t, s) {
            return s.offsetLeft - i + e(s).outerWidth() / 2 > -1 * a.swipeLeft ? (n = s, !1) : void 0
        }), t = Math.abs(e(n).attr("data-slick-index") - a.currentSlide) || 1) : a.options.slidesToScroll
    }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
        var n = this;
        n.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }, t.prototype.init = function(t) {
        var n = this;
        e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), n.options.accessibility === !0 && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
    }, t.prototype.initADA = function() {
        var t = this;
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(n) {
            e(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + t.instanceUid + n
            })
        }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(n) {
            e(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + t.instanceUid + n,
                id: "slick-slide" + t.instanceUid + n
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
    }, t.prototype.initArrowEvents = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide))
    }, t.prototype.initDotEvents = function() {
        var t = this;
        t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1));

    }, t.prototype.initSlideEvents = function() {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
    }, t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.initUI = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, t.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({
            data: {
                message: t.options.rtl === !0 ? "next" : "previous"
            }
        }) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({
            data: {
                message: t.options.rtl === !0 ? "previous" : "next"
            }
        }))
    }, t.prototype.lazyLoad = function() {
        function t(t) {
            e("img[data-lazy]", t).each(function() {
                var t = e(this),
                    n = e(this).attr("data-lazy"),
                    i = document.createElement("img");
                i.onload = function() {
                    t.animate({
                        opacity: 0
                    }, 100, function() {
                        t.attr("src", n).animate({
                            opacity: 1
                        }, 200, function() {
                            t.removeAttr("data-lazy").removeClass("slick-loading")
                        }), o.$slider.trigger("lazyLoaded", [o, t, n])
                    })
                }, i.onerror = function() {
                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, t, n])
                }, i.src = n
            })
        }
        var n, i, a, s, o = this;
        o.options.centerMode === !0 ? o.options.infinite === !0 ? (a = o.currentSlide + (o.options.slidesToShow / 2 + 1), s = a + o.options.slidesToShow + 2) : (a = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), s = 2 + (o.options.slidesToShow / 2 + 1) + o.currentSlide) : (a = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, s = Math.ceil(a + o.options.slidesToShow), o.options.fade === !0 && (a > 0 && a--, s <= o.slideCount && s++)), n = o.$slider.find(".slick-slide").slice(a, s), t(n), o.slideCount <= o.options.slidesToShow ? (i = o.$slider.find(".slick-slide"), t(i)) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? (i = o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow), t(i)) : 0 === o.currentSlide && (i = o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow), t(i))
    }, t.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
            opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, t.prototype.next = t.prototype.slickNext = function() {
        var e = this;
        e.changeSlide({
            data: {
                message: "next"
            }
        })
    }, t.prototype.orientationChange = function() {
        var e = this;
        e.checkResponsive(), e.setPosition()
    }, t.prototype.pause = t.prototype.slickPause = function() {
        var e = this;
        e.autoPlayClear(), e.paused = !0
    }, t.prototype.play = t.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, t.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), t.options.accessibility === !0 && t.initADA())
    }, t.prototype.prev = t.prototype.slickPrev = function() {
        var e = this;
        e.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, t.prototype.preventDefault = function(e) {
        e.preventDefault()
    }, t.prototype.progressiveLazyLoad = function(t) {
        t = t || 1;
        var n, i, a, s = this,
            o = e("img[data-lazy]", s.$slider);
        o.length ? (n = o.first(), i = n.attr("data-lazy"), a = document.createElement("img"), a.onload = function() {
            n.attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"), s.options.adaptiveHeight === !0 && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, n, i]), s.progressiveLazyLoad()
        }, a.onerror = function() {
            3 > t ? setTimeout(function() {
                s.progressiveLazyLoad(t + 1)
            }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, n, i]), s.progressiveLazyLoad())
        }, a.src = i) : s.$slider.trigger("allImagesLoaded", [s])
    }, t.prototype.refresh = function(t) {
        var n, i, a = this;
        i = a.slideCount - a.options.slidesToShow, !a.options.infinite && a.currentSlide > i && (a.currentSlide = i), a.slideCount <= a.options.slidesToShow && (a.currentSlide = 0), n = a.currentSlide, a.destroy(!0), e.extend(a, a.initials, {
            currentSlide: n
        }), a.init(), t || a.changeSlide({
            data: {
                message: "index",
                index: n
            }
        }, !1)
    }, t.prototype.registerBreakpoints = function() {
        var t, n, i, a = this,
            s = a.options.responsive || null;
        if ("array" === e.type(s) && s.length) {
            a.respondTo = a.options.respondTo || "window";
            for (t in s)
                if (i = a.breakpoints.length - 1, n = s[t].breakpoint, s.hasOwnProperty(t)) {
                    for (; i >= 0;) a.breakpoints[i] && a.breakpoints[i] === n && a.breakpoints.splice(i, 1), i--;
                    a.breakpoints.push(n), a.breakpointSettings[n] = s[t].settings
                }
            a.breakpoints.sort(function(e, t) {
                return a.options.mobileFirst ? e - t : t - e
            })
        }
    }, t.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
    }, t.prototype.resize = function() {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
            t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
        }, 50))
    }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, n) {
        var i = this;
        return "boolean" == typeof e ? (t = e, e = t === !0 ? 0 : i.slideCount - 1) : e = t === !0 ? --e : e, i.slideCount < 1 || 0 > e || e > i.slideCount - 1 ? !1 : (i.unload(), n === !0 ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit())
    }, t.prototype.setCSS = function(e) {
        var t, n, i = this,
            a = {};
        i.options.rtl === !0 && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", a[i.positionProp] = e, i.transformsEnabled === !1 ? i.$slideTrack.css(a) : (a = {}, i.cssTransitions === !1 ? (a[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(a)) : (a[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(a)))
    }, t.prototype.setDimensions = function() {
        var e = this;
        e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, t.prototype.setFade = function() {
        var t, n = this;
        n.$slides.each(function(i, a) {
            t = n.slideWidth * i * -1, e(a).css(n.options.rtl === !0 ? {
                position: "relative",
                right: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            } : {
                position: "relative",
                left: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            })
        }), n.$slides.eq(n.currentSlide).css({
            zIndex: n.options.zIndex - 1,
            opacity: 1
        })
    }, t.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, t.prototype.setOption = t.prototype.slickSetOption = function() {
        var t, n, i, a, s, o = this,
            r = !1;
        if ("object" === e.type(arguments[0]) ? (i = arguments[0], r = arguments[1], s = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], a = arguments[1], r = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? s = "responsive" : "undefined" != typeof arguments[1] && (s = "single")), "single" === s) o.options[i] = a;
        else if ("multiple" === s) e.each(i, function(e, t) {
            o.options[e] = t
        });
        else if ("responsive" === s)
            for (n in a)
                if ("array" !== e.type(o.options.responsive)) o.options.responsive = [a[n]];
                else {
                    for (t = o.options.responsive.length - 1; t >= 0;) o.options.responsive[t].breakpoint === a[n].breakpoint && o.options.responsive.splice(t, 1), t--;
                    o.options.responsive.push(a[n])
                }
        r && (o.unload(), o.reinit())
    }, t.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, t.prototype.setProps = function() {
        var e = this,
            t = document.body.style;
        e.positionProp = e.options.vertical === !0 ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && e.options.useCSS === !0 && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && e.animType !== !1
    }, t.prototype.setSlideClasses = function(e) {
        var t, n, i, a, s = this;
        n = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(e).addClass("slick-current"), s.options.centerMode === !0 ? (t = Math.floor(s.options.slidesToShow / 2), s.options.infinite === !0 && (e >= t && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = s.options.slidesToShow + e, n.slice(i - t + 1, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && n.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= s.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (a = s.slideCount % s.options.slidesToShow, i = s.options.infinite === !0 ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? n.slice(i - (s.options.slidesToShow - a), i + a).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
    }, t.prototype.setupInfinite = function() {
        var t, n, i, a = this;
        if (a.options.fade === !0 && (a.options.centerMode = !1), a.options.infinite === !0 && a.options.fade === !1 && (n = null, a.slideCount > a.options.slidesToShow)) {
            for (i = a.options.centerMode === !0 ? a.options.slidesToShow + 1 : a.options.slidesToShow, t = a.slideCount; t > a.slideCount - i; t -= 1) n = t - 1, e(a.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - a.slideCount).prependTo(a.$slideTrack).addClass("slick-cloned");
            for (t = 0; i > t; t += 1) n = t, e(a.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + a.slideCount).appendTo(a.$slideTrack).addClass("slick-cloned");
            a.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                e(this).attr("id", "")
            })
        }
    }, t.prototype.interrupt = function(e) {
        var t = this;
        e || t.autoPlay(), t.interrupted = e
    }, t.prototype.selectHandler = function(t) {
        var n = this,
            i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
            a = parseInt(i.attr("data-slick-index"));
        return a || (a = 0), n.slideCount <= n.options.slidesToShow ? (n.setSlideClasses(a), void n.asNavFor(a)) : void n.slideHandler(a)
    }, t.prototype.slideHandler = function(e, t, n) {
        var i, a, s, o, r, d = null,
            l = this;
        return t = t || !1, l.animating === !0 && l.options.waitForAnimate === !0 || l.options.fade === !0 && l.currentSlide === e || l.slideCount <= l.options.slidesToShow ? void 0 : (t === !1 && l.asNavFor(e), i = e, d = l.getLeft(i), o = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? o : l.swipeLeft, l.options.infinite === !1 && l.options.centerMode === !1 && (0 > e || e > l.getDotCount() * l.options.slidesToScroll) ? void(l.options.fade === !1 && (i = l.currentSlide, n !== !0 ? l.animateSlide(o, function() {
            l.postSlide(i)
        }) : l.postSlide(i))) : l.options.infinite === !1 && l.options.centerMode === !0 && (0 > e || e > l.slideCount - l.options.slidesToScroll) ? void(l.options.fade === !1 && (i = l.currentSlide, n !== !0 ? l.animateSlide(o, function() {
            l.postSlide(i)
        }) : l.postSlide(i))) : (l.options.autoplay && clearInterval(l.autoPlayTimer), a = 0 > i ? l.slideCount % l.options.slidesToScroll !== 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + i : i >= l.slideCount ? l.slideCount % l.options.slidesToScroll !== 0 ? 0 : i - l.slideCount : i, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, a]), s = l.currentSlide, l.currentSlide = a, l.setSlideClasses(l.currentSlide), l.options.asNavFor && (r = l.getNavTarget(), r = r.slick("getSlick"), r.slideCount <= r.options.slidesToShow && r.setSlideClasses(l.currentSlide)), l.updateDots(), l.updateArrows(), l.options.fade === !0 ? (n !== !0 ? (l.fadeSlideOut(s), l.fadeSlide(a, function() {
            l.postSlide(a)
        })) : l.postSlide(a), void l.animateHeight()) : void(n !== !0 ? l.animateSlide(d, function() {
            l.postSlide(a)
        }) : l.postSlide(a))))
    }, t.prototype.startLoad = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, t.prototype.swipeDirection = function() {
        var e, t, n, i, a = this;
        return e = a.touchObject.startX - a.touchObject.curX, t = a.touchObject.startY - a.touchObject.curY, n = Math.atan2(t, e), i = Math.round(180 * n / Math.PI), 0 > i && (i = 360 - Math.abs(i)), 45 >= i && i >= 0 ? a.options.rtl === !1 ? "left" : "right" : 360 >= i && i >= 315 ? a.options.rtl === !1 ? "left" : "right" : i >= 135 && 225 >= i ? a.options.rtl === !1 ? "right" : "left" : a.options.verticalSwiping === !0 ? i >= 35 && 135 >= i ? "down" : "up" : "vertical"
    }, t.prototype.swipeEnd = function(e) {
        var t, n, i = this;
        if (i.dragging = !1, i.interrupted = !1, i.shouldClick = i.touchObject.swipeLength > 10 ? !1 : !0, void 0 === i.touchObject.curX) return !1;
        if (i.touchObject.edgeHit === !0 && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
            switch (n = i.swipeDirection()) {
                case "left":
                case "down":
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
            }
            "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
        } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
    }, t.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
        }
    }, t.prototype.swipeMove = function(e) {
        var t, n, i, a, s, o = this;
        return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !o.dragging || s && 1 !== s.length ? !1 : (t = o.getLeft(o.currentSlide), o.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, o.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curX - o.touchObject.startX, 2))), o.options.verticalSwiping === !0 && (o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curY - o.touchObject.startY, 2)))), n = o.swipeDirection(), "vertical" !== n ? (void 0 !== e.originalEvent && o.touchObject.swipeLength > 4 && e.preventDefault(), a = (o.options.rtl === !1 ? 1 : -1) * (o.touchObject.curX > o.touchObject.startX ? 1 : -1), o.options.verticalSwiping === !0 && (a = o.touchObject.curY > o.touchObject.startY ? 1 : -1), i = o.touchObject.swipeLength, o.touchObject.edgeHit = !1, o.options.infinite === !1 && (0 === o.currentSlide && "right" === n || o.currentSlide >= o.getDotCount() && "left" === n) && (i = o.touchObject.swipeLength * o.options.edgeFriction, o.touchObject.edgeHit = !0), o.swipeLeft = o.options.vertical === !1 ? t + i * a : t + i * (o.$list.height() / o.listWidth) * a, o.options.verticalSwiping === !0 && (o.swipeLeft = t + i * a), o.options.fade === !0 || o.options.touchMove === !1 ? !1 : o.animating === !0 ? (o.swipeLeft = null, !1) : void o.setCSS(o.swipeLeft)) : void 0)
    }, t.prototype.swipeStart = function(e) {
        var t, n = this;
        return n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? (n.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(n.dragging = !0))
    }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, t.prototype.unload = function() {
        var t = this;
        e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, t.prototype.unslick = function(e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy()
    }, t.prototype.updateArrows = function() {
        var e, t = this;
        e = Math.floor(t.options.slidesToShow / 2), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, t.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, t.prototype.visibility = function() {
        var e = this;
        e.options.autoplay && (e.interrupted = document[e.hidden] ? !0 : !1)
    }, e.fn.slick = function() {
        var e, n, i = this,
            a = arguments[0],
            s = Array.prototype.slice.call(arguments, 1),
            o = i.length;
        for (e = 0; o > e; e++)
            if ("object" == typeof a || "undefined" == typeof a ? i[e].slick = new t(i[e], a) : n = i[e].slick[a].apply(i[e].slick, s), "undefined" != typeof n) return n;
        return i
    }
}),
function(e, t) {
    "object" == typeof exports && exports && "string" != typeof exports.nodeName ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : (e.Mustache = {}, t(e.Mustache))
}(this, function(e) {
    function t(e) {
        return "function" == typeof e
    }

    function n(e) {
        return f(e) ? "array" : typeof e
    }

    function i(e) {
        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }

    function a(e, t) {
        return null != e && "object" == typeof e && t in e
    }

    function s(e, t) {
        return _.call(e, t)
    }

    function o(e) {
        return !s(y, e)
    }

    function r(e) {
        return String(e).replace(/[&<>"'`=\/]/g, function(e) {
            return A[e]
        })
    }

    function d(t, n) {
        function a() {
            if (y && !A)
                for (; _.length;) delete p[_.pop()];
            else _ = [];
            y = !1, A = !1
        }

        function s(e) {
            if ("string" == typeof e && (e = e.split(v, 2)), !f(e) || 2 !== e.length) throw new Error("Invalid tags: " + e);
            r = new RegExp(i(e[0]) + "\\s*"), d = new RegExp("\\s*" + i(e[1])), h = new RegExp("\\s*" + i("}" + e[1]))
        }
        if (!t) return [];
        var r, d, h, m = [],
            p = [],
            _ = [],
            y = !1,
            A = !1;
        s(n || e.tags);
        for (var b, D, L, Y, T, S, x = new c(t); !x.eos();) {
            if (b = x.pos, L = x.scanUntil(r))
                for (var C = 0, P = L.length; P > C; ++C) Y = L.charAt(C), o(Y) ? _.push(p.length) : A = !0, p.push(["text", Y, b, b + 1]), b += 1, "\n" === Y && a();
            if (!x.scan(r)) break;
            if (y = !0, D = x.scan(k) || "name", x.scan(g), "=" === D ? (L = x.scanUntil(M), x.scan(M), x.scanUntil(d)) : "{" === D ? (L = x.scanUntil(h), x.scan(w), x.scanUntil(d), D = "&") : L = x.scanUntil(d), !x.scan(d)) throw new Error("Unclosed tag at " + x.pos);
            if (T = [D, L, b, x.pos], p.push(T), "#" === D || "^" === D) m.push(T);
            else if ("/" === D) {
                if (S = m.pop(), !S) throw new Error('Unopened section "' + L + '" at ' + b);
                if (S[1] !== L) throw new Error('Unclosed section "' + S[1] + '" at ' + b)
            } else "name" === D || "{" === D || "&" === D ? A = !0 : "=" === D && s(L)
        }
        if (S = m.pop()) throw new Error('Unclosed section "' + S[1] + '" at ' + x.pos);
        return u(l(p))
    }

    function l(e) {
        for (var t, n, i = [], a = 0, s = e.length; s > a; ++a) t = e[a], t && ("text" === t[0] && n && "text" === n[0] ? (n[1] += t[1], n[3] = t[3]) : (i.push(t), n = t));
        return i
    }

    function u(e) {
        for (var t, n, i = [], a = i, s = [], o = 0, r = e.length; r > o; ++o) switch (t = e[o], t[0]) {
            case "#":
            case "^":
                a.push(t), s.push(t), a = t[4] = [];
                break;
            case "/":
                n = s.pop(), n[5] = t[2], a = s.length > 0 ? s[s.length - 1][4] : i;
                break;
            default:
                a.push(t)
        }
        return i
    }

    function c(e) {
        this.string = e, this.tail = e, this.pos = 0
    }

    function h(e, t) {
        this.view = e, this.cache = {
            ".": this.view
        }, this.parent = t
    }

    function m() {
        this.cache = {}
    }
    var p = Object.prototype.toString,
        f = Array.isArray || function(e) {
            return "[object Array]" === p.call(e)
        },
        _ = RegExp.prototype.test,
        y = /\S/,
        A = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        },
        g = /\s*/,
        v = /\s+/,
        M = /\s*=/,
        w = /\s*\}/,
        k = /#|\^|\/|>|\{|&|=|!/;
    c.prototype.eos = function() {
        return "" === this.tail
    }, c.prototype.scan = function(e) {
        var t = this.tail.match(e);
        if (!t || 0 !== t.index) return "";
        var n = t[0];
        return this.tail = this.tail.substring(n.length), this.pos += n.length, n
    }, c.prototype.scanUntil = function(e) {
        var t, n = this.tail.search(e);
        switch (n) {
            case -1:
                t = this.tail, this.tail = "";
                break;
            case 0:
                t = "";
                break;
            default:
                t = this.tail.substring(0, n), this.tail = this.tail.substring(n)
        }
        return this.pos += t.length, t
    }, h.prototype.push = function(e) {
        return new h(e, this)
    }, h.prototype.lookup = function(e) {
        var n, i = this.cache;
        if (i.hasOwnProperty(e)) n = i[e];
        else {
            for (var s, o, r = this, d = !1; r;) {
                if (e.indexOf(".") > 0)
                    for (n = r.view, s = e.split("."), o = 0; null != n && o < s.length;) o === s.length - 1 && (d = a(n, s[o])), n = n[s[o++]];
                else n = r.view[e], d = a(r.view, e);
                if (d) break;
                r = r.parent
            }
            i[e] = n
        }
        return t(n) && (n = n.call(this.view)), n
    }, m.prototype.clearCache = function() {
        this.cache = {}
    }, m.prototype.parse = function(e, t) {
        var n = this.cache,
            i = n[e];
        return null == i && (i = n[e] = d(e, t)), i
    }, m.prototype.render = function(e, t, n) {
        var i = this.parse(e),
            a = t instanceof h ? t : new h(t);
        return this.renderTokens(i, a, n, e)
    }, m.prototype.renderTokens = function(e, t, n, i) {
        for (var a, s, o, r = "", d = 0, l = e.length; l > d; ++d) o = void 0, a = e[d], s = a[0], "#" === s ? o = this.renderSection(a, t, n, i) : "^" === s ? o = this.renderInverted(a, t, n, i) : ">" === s ? o = this.renderPartial(a, t, n, i) : "&" === s ? o = this.unescapedValue(a, t) : "name" === s ? o = this.escapedValue(a, t) : "text" === s && (o = this.rawValue(a)), void 0 !== o && (r += o);
        return r
    }, m.prototype.renderSection = function(e, n, i, a) {
        function s(e) {
            return o.render(e, n, i)
        }
        var o = this,
            r = "",
            d = n.lookup(e[1]);
        if (d) {
            if (f(d))
                for (var l = 0, u = d.length; u > l; ++l) r += this.renderTokens(e[4], n.push(d[l]), i, a);
            else if ("object" == typeof d || "string" == typeof d || "number" == typeof d) r += this.renderTokens(e[4], n.push(d), i, a);
            else if (t(d)) {
                if ("string" != typeof a) throw new Error("Cannot use higher-order sections without the original template");
                d = d.call(n.view, a.slice(e[3], e[5]), s), null != d && (r += d)
            } else r += this.renderTokens(e[4], n, i, a);
            return r
        }
    }, m.prototype.renderInverted = function(e, t, n, i) {
        var a = t.lookup(e[1]);
        return !a || f(a) && 0 === a.length ? this.renderTokens(e[4], t, n, i) : void 0
    }, m.prototype.renderPartial = function(e, n, i) {
        if (i) {
            var a = t(i) ? i(e[1]) : i[e[1]];
            return null != a ? this.renderTokens(this.parse(a), n, i, a) : void 0
        }
    }, m.prototype.unescapedValue = function(e, t) {
        var n = t.lookup(e[1]);
        return null != n ? n : void 0
    }, m.prototype.escapedValue = function(t, n) {
        var i = n.lookup(t[1]);
        return null != i ? e.escape(i) : void 0
    }, m.prototype.rawValue = function(e) {
        return e[1]
    }, e.name = "mustache.js", e.version = "2.2.1", e.tags = ["{{", "}}"];
    var b = new m;
    e.clearCache = function() {
        return b.clearCache()
    }, e.parse = function(e, t) {
        return b.parse(e, t)
    }, e.render = function(e, t, i) {
        if ("string" != typeof e) throw new TypeError('Invalid template! Template should be a "string" but "' + n(e) + '" was given as the first argument for mustache#render(template, view, partials)');
        return b.render(e, t, i)
    }, e.to_html = function(n, i, a, s) {
        var o = e.render(n, i, a);
        return t(s) ? void s(o) : o
    }, e.escape = r, e.Scanner = c, e.Context = h, e.Writer = m
}), ! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof module && module.exports ? require("jquery") : jQuery)
}(function(e) {
    function t(t) {
        var n = {},
            i = /^jQuery\d+$/;
        return e.each(t.attributes, function(e, t) {
            t.specified && !i.test(t.name) && (n[t.name] = t.value)
        }), n
    }

    function n(t, n) {
        var i = this,
            s = e(this);
        if (i.value === s.attr(r ? "placeholder-x" : "placeholder") && s.hasClass(m.customClass))
            if (i.value = "", s.removeClass(m.customClass), s.data("placeholder-password")) {
                if (s = s.hide().nextAll('input[type="password"]:first').show().attr("id", s.removeAttr("id").data("placeholder-id")), t === !0) return s[0].value = n, n;
                s.focus()
            } else i == a() && i.select()
    }

    function i(i) {
        var a, s = this,
            o = e(this),
            d = s.id;
        if (!i || "blur" !== i.type || !o.hasClass(m.customClass))
            if ("" === s.value) {
                if ("password" === s.type) {
                    if (!o.data("placeholder-textinput")) {
                        try {
                            a = o.clone().prop({
                                type: "text"
                            })
                        } catch (l) {
                            a = e("<input>").attr(e.extend(t(this), {
                                type: "text"
                            }))
                        }
                        a.removeAttr("name").data({
                            "placeholder-enabled": !0,
                            "placeholder-password": o,
                            "placeholder-id": d
                        }).bind("focus.placeholder", n), o.data({
                            "placeholder-textinput": a,
                            "placeholder-id": d
                        }).before(a)
                    }
                    s.value = "", o = o.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", o.data("placeholder-id")).show()
                } else {
                    var u = o.data("placeholder-password");
                    u && (u[0].value = "", o.attr("id", o.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))
                }
                o.addClass(m.customClass), o[0].value = o.attr(r ? "placeholder-x" : "placeholder")
            } else o.removeClass(m.customClass)
    }

    function a() {
        try {
            return document.activeElement
        } catch (e) {}
    }
    var s, o, r = !1,
        d = "[object OperaMini]" === Object.prototype.toString.call(window.operamini),
        l = "placeholder" in document.createElement("input") && !d && !r,
        u = "placeholder" in document.createElement("textarea") && !d && !r,
        c = e.valHooks,
        h = e.propHooks,
        m = {};
    l && u ? (o = e.fn.placeholder = function() {
        return this
    }, o.input = !0, o.textarea = !0) : (o = e.fn.placeholder = function(t) {
        var a = {
            customClass: "placeholder"
        };
        return m = e.extend({}, a, t), this.filter((l ? "textarea" : ":input") + "[" + (r ? "placeholder-x" : "placeholder") + "]").not("." + m.customClass).not(":radio, :checkbox, [type=hidden]").bind({
            "focus.placeholder": n,
            "blur.placeholder": i
        }).data("placeholder-enabled", !0).trigger("blur.placeholder")
    }, o.input = l, o.textarea = u, s = {
        get: function(t) {
            var n = e(t),
                i = n.data("placeholder-password");
            return i ? i[0].value : n.data("placeholder-enabled") && n.hasClass(m.customClass) ? "" : t.value
        },
        set: function(t, s) {
            var o, r, d = e(t);
            return "" !== s && (o = d.data("placeholder-textinput"), r = d.data("placeholder-password"), o ? (n.call(o[0], !0, s) || (t.value = s), o[0].value = s) : r && (n.call(t, !0, s) || (r[0].value = s), t.value = s)), d.data("placeholder-enabled") ? ("" === s ? (t.value = s, t != a() && i.call(t)) : (d.hasClass(m.customClass) && n.call(t), t.value = s), d) : (t.value = s, d)
        }
    }, l || (c.input = s, h.value = s), u || (c.textarea = s, h.value = s), e(function() {
        e(document).delegate("form", "submit.placeholder", function() {
            var t = e("." + m.customClass, this).each(function() {
                n.call(this, !0, "")
            });
            setTimeout(function() {
                t.each(i)
            }, 10)
        })
    }), e(window).bind("beforeunload.placeholder", function() {
        var t = !0;
        try {
            "javascript:void(0)" === document.activeElement.toString() && (t = !1)
        } catch (n) {}
        t && e("." + m.customClass).each(function() {
            this.value = ""
        })
    }))
}), ! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    "use strict";

    function t(e, t, n) {
        var i;
        return function() {
            var a = this,
                s = arguments,
                o = function() {
                    i = null, n || e.apply(a, s)
                },
                r = n && !i;
            clearTimeout(i), i = setTimeout(o, t), r && e.apply(a, s)
        }
    }

    function n(e) {
        var t = ++l;
        return String(null == e ? "rmjs-" : e) + t
    }

    function i(e) {
        var t = e.clone().css({
                height: "auto",
                width: e.width(),
                maxHeight: "none",
                overflow: "hidden"
            }).insertAfter(e),
            n = t.outerHeight(),
            i = parseInt(t.css({
                maxHeight: ""
            }).css("max-height").replace(/[^-\d\.]/g, ""), 10),
            a = e.data("defaultHeight");
        t.remove();
        var s = i || e.data("collapsedHeight") || a;
        e.data({
            expandedHeight: n,
            maxHeight: i,
            collapsedHeight: s
        }).css({
            maxHeight: "none"
        })
    }

    function a(e) {
        if (!d[e.selector]) {
            var t = " ";
            e.embedCSS && "" !== e.blockCSS && (t += e.selector + " + [data-readmore-toggle], " + e.selector + "[data-readmore]{" + e.blockCSS + "}"), t += e.selector + "[data-readmore]{transition: height " + e.speed + "ms;overflow: hidden;}",
                function(e, t) {
                    var n = e.createElement("style");
                    n.type = "text/css", n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(e.createTextNode(t)), e.getElementsByTagName("head")[0].appendChild(n)
                }(document, t), d[e.selector] = !0
        }
    }

    function s(t, n) {
        this.element = t, this.options = e.extend({}, r, n), a(this.options), this._defaults = r, this._name = o, this.init(), window.addEventListener ? (window.addEventListener("load", u), window.addEventListener("resize", u)) : (window.attachEvent("load", u), window.attachEvent("resize", u))
    }
    var o = "readmore",
        r = {
            speed: 100,
            collapsedHeight: 200,
            heightMargin: 16,
            moreLink: '<a href="#">Read More</a>',
            lessLink: '<a href="#">Close</a>',
            embedCSS: !0,
            blockCSS: "display: block; width: 100%;",
            startOpen: !1,
            blockProcessed: function() {},
            beforeToggle: function() {},
            afterToggle: function() {}
        },
        d = {},
        l = 0,
        u = t(function() {
            e("[data-readmore]").each(function() {
                var t = e(this),
                    n = "true" === t.attr("aria-expanded");
                i(t), t.css({
                    height: t.data(n ? "expandedHeight" : "collapsedHeight")
                })
            })
        }, 100);
    s.prototype = {
        init: function() {
            var t = e(this.element);
            t.data({
                defaultHeight: this.options.collapsedHeight,
                heightMargin: this.options.heightMargin
            }), i(t);
            var a = t.data("collapsedHeight"),
                s = t.data("heightMargin");

            if (t.outerHeight(!0) <= a + s) return this.options.blockProcessed && "function" == typeof this.options.blockProcessed && this.options.blockProcessed(t, !1), !0;
            var o = t.attr("id") || n(),
                r = this.options.startOpen ? this.options.lessLink : this.options.moreLink;
            t.attr({
                "data-readmore": "",
                "aria-expanded": this.options.startOpen,
                id: o
            }), t.after(e(r).on("click", function(e) {
                return function(n) {
                    e.toggle(this, t[0], n)
                }
            }(this)).attr({
                "data-readmore-toggle": o,
                "aria-controls": o
            })), this.options.startOpen || t.css({
                height: a
            }), this.options.blockProcessed && "function" == typeof this.options.blockProcessed && this.options.blockProcessed(t, !0)
        },
        toggle: function(t, n, i) {
            i && i.preventDefault(), t || (t = e('[aria-controls="' + this.element.id + '"]')[0]), n || (n = this.element);
            var a = e(n),
                s = "",
                o = "",
                r = !1,
                d = a.data("collapsedHeight");
            a.height() <= d ? (s = a.data("expandedHeight") + "px", o = "lessLink", r = !0) : (s = d, o = "moreLink"), this.options.beforeToggle && "function" == typeof this.options.beforeToggle && this.options.beforeToggle(t, a, !r), a.css({
                height: s
            }), a.on("transitionend", function(n) {
                return function() {
                    n.options.afterToggle && "function" == typeof n.options.afterToggle && n.options.afterToggle(t, a, r), e(this).attr({
                        "aria-expanded": r
                    }).off("transitionend")
                }
            }(this)), e(t).replaceWith(e(this.options[o]).on("click", function(e) {
                return function(t) {
                    e.toggle(this, n, t)
                }
            }(this)).attr({
                "data-readmore-toggle": a.attr("id"),
                "aria-controls": a.attr("id")
            }))
        },
        destroy: function() {
            e(this.element).each(function() {
                var t = e(this);
                t.attr({
                    "data-readmore": null,
                    "aria-expanded": null
                }).css({
                    maxHeight: "",
                    height: ""
                }).next("[data-readmore-toggle]").remove(), t.removeData()
            })
        }
    }, e.fn.readmore = function(t) {
        var n = arguments,
            i = this.selector;
        return t = t || {}, "object" == typeof t ? this.each(function() {
            if (e.data(this, "plugin_" + o)) {
                var n = e.data(this, "plugin_" + o);
                n.destroy.apply(n)
            }
            t.selector = i, e.data(this, "plugin_" + o, new s(this, t))
        }) : "string" == typeof t && "_" !== t[0] && "init" !== t ? this.each(function() {
            var i = e.data(this, "plugin_" + o);
            i instanceof s && "function" == typeof i[t] && i[t].apply(i, Array.prototype.slice.call(n, 1))
        }) : void 0
    }
}), ! function(window, document, undefined) {
    function is(e, t) {
        return typeof e === t
    }

    function testRunner() {
        var e, t, n, i, a, s, o;
        for (var r in tests)
            if (tests.hasOwnProperty(r)) {
                if (e = [], t = tests[r], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (i = is(t.fn, "function") ? t.fn() : t.fn, a = 0; a < e.length; a++) s = e[a], o = s.split("."), 1 === o.length ? Modernizr[o[0]] = i : (!Modernizr[o[0]] || Modernizr[o[0]] instanceof Boolean || (Modernizr[o[0]] = new Boolean(Modernizr[o[0]])), Modernizr[o[0]][o[1]] = i), classes.push((i ? "" : "no-") + o.join("-"))
            }
    }

    function setClasses(e) {
        var t = docElement.className,
            n = Modernizr._config.classPrefix || "";
        if (isSVG && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(i, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), isSVG ? docElement.className.baseVal = t : docElement.className = t)
    }

    function addTest(e, t) {
        if ("object" == typeof e)
            for (var n in e) hasOwnProp(e, n) && addTest(n, e[n]);
        else {
            e = e.toLowerCase();
            var i = e.split("."),
                a = Modernizr[i[0]];
            if (2 == i.length && (a = a[i[1]]), "undefined" != typeof a) return Modernizr;
            t = "function" == typeof t ? t() : t, 1 == i.length ? Modernizr[i[0]] = t : (!Modernizr[i[0]] || Modernizr[i[0]] instanceof Boolean || (Modernizr[i[0]] = new Boolean(Modernizr[i[0]])), Modernizr[i[0]][i[1]] = t), setClasses([(t && 0 != t ? "" : "no-") + i.join("-")]), Modernizr._trigger(e, t)
        }
        return Modernizr
    }

    function createElement() {
        return "function" != typeof document.createElement ? document.createElement(arguments[0]) : isSVG ? document.createElementNS.call(document, "http://www.w3.org/2000/svg", arguments[0]) : document.createElement.apply(document, arguments)
    }

    function cssToDOM(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function domToCSS(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function getBody() {
        var e = document.body;
        return e || (e = createElement(isSVG ? "svg" : "body"), e.fake = !0), e
    }

    function injectElementWithStyles(e, t, n, i) {
        var a, s, o, r, d = "modernizr",
            l = createElement("div"),
            u = getBody();
        if (parseInt(n, 10))
            for (; n--;) o = createElement("div"), o.id = i ? i[n] : d + (n + 1), l.appendChild(o);
        return a = createElement("style"), a.type = "text/css", a.id = "s" + d, (u.fake ? u : l).appendChild(a), u.appendChild(l), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e)), l.id = d, u.fake && (u.style.background = "", u.style.overflow = "hidden", r = docElement.style.overflow, docElement.style.overflow = "hidden", docElement.appendChild(u)), s = t(l, e), u.fake ? (u.parentNode.removeChild(u), docElement.style.overflow = r, docElement.offsetHeight) : l.parentNode.removeChild(l), !!s
    }

    function contains(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function roundedEquals(e, t) {
        return e - 1 === t || e === t || e + 1 === t
    }

    function nativeTestProps(e, t) {
        var n = e.length;
        if ("CSS" in window && "supports" in window.CSS) {
            for (; n--;)
                if (window.CSS.supports(domToCSS(e[n]), t)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in window) {
            for (var i = []; n--;) i.push("(" + domToCSS(e[n]) + ":" + t + ")");
            return i = i.join(" or "), injectElementWithStyles("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return undefined
    }

    function testProps(e, t, n, i) {
        function a() {
            o && (delete mStyle.style, delete mStyle.modElem)
        }
        if (i = is(i, "undefined") ? !1 : i, !is(n, "undefined")) {
            var s = nativeTestProps(e, n);
            if (!is(s, "undefined")) return s
        }
        for (var o, r, d, l, u, c = ["modernizr", "tspan", "samp"]; !mStyle.style && c.length;) o = !0, mStyle.modElem = createElement(c.shift()), mStyle.style = mStyle.modElem.style;
        for (d = e.length, r = 0; d > r; r++)
            if (l = e[r], u = mStyle.style[l], contains(l, "-") && (l = cssToDOM(l)), mStyle.style[l] !== undefined) {
                if (i || is(n, "undefined")) return a(), "pfx" == t ? l : !0;
                try {
                    mStyle.style[l] = n
                } catch (h) {}
                if (mStyle.style[l] != u) return a(), "pfx" == t ? l : !0
            }
        return a(), !1
    }

    function fnBind(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function testDOMProps(e, t, n) {
        var i;
        for (var a in e)
            if (e[a] in t) return n === !1 ? e[a] : (i = t[e[a]], is(i, "function") ? fnBind(i, n || t) : i);
        return !1
    }

    function testPropsAll(e, t, n, i, a) {
        var s = e.charAt(0).toUpperCase() + e.slice(1),
            o = (e + " " + cssomPrefixes.join(s + " ") + s).split(" ");
        return is(t, "string") || is(t, "undefined") ? testProps(o, t, i, a) : (o = (e + " " + domPrefixes.join(s + " ") + s).split(" "), testDOMProps(o, t, n))
    }

    function testAllProps(e, t, n) {
        return testPropsAll(e, undefined, undefined, t, n)
    }
    var classes = [],
        tests = [],
        ModernizrProto = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                tests.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                tests.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = ModernizrProto, Modernizr = new Modernizr, Modernizr.addTest("cookies", function() {
        try {
            document.cookie = "cookietest=1";
            var e = -1 != document.cookie.indexOf("cookietest=");
            return document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT", e
        } catch (t) {
            return !1
        }
    }), Modernizr.addTest("cors", "XMLHttpRequest" in window && "withCredentials" in new XMLHttpRequest), Modernizr.addTest("eventlistener", "addEventListener" in window), Modernizr.addTest("history", function() {
        var e = navigator.userAgent;
        return -1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone") ? window.history && "pushState" in window.history : !1
    }), Modernizr.addTest("ie8compat", !window.addEventListener && !!document.documentMode && 7 === document.documentMode), Modernizr.addTest("json", "JSON" in window && "parse" in JSON && "stringify" in JSON), Modernizr.addTest("queryselector", "querySelector" in document && "querySelectorAll" in document), Modernizr.addTest("svg", !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect), Modernizr.addTest("templatestrings", function() {
        var supports;
        try {
            eval("``"), supports = !0
        } catch (e) {}
        return !!supports
    });
    var supports = !1;
    try {
        supports = "WebSocket" in window && 2 === window.WebSocket.CLOSING
    } catch (e) {}
    Modernizr.addTest("websockets", supports), Modernizr.addTest("xdomainrequest", "XDomainRequest" in window), Modernizr.addTest("webaudio", function() {
        var e = "webkitAudioContext" in window,
            t = "AudioContext" in window;
        return Modernizr._config.usePrefixes ? e || t : t
    });
    var CSS = window.CSS;
    Modernizr.addTest("cssescape", CSS ? "function" == typeof CSS.escape : !1);
    var newSyntax = "CSS" in window && "supports" in window.CSS,
        oldSyntax = "supportsCSS" in window;
    Modernizr.addTest("supports", newSyntax || oldSyntax), Modernizr.addTest("target", function() {
        var e = window.document;
        if (!("querySelectorAll" in e)) return !1;
        try {
            return e.querySelectorAll(":target"), !0
        } catch (t) {
            return !1
        }
    }), Modernizr.addTest("es5array", function() {
        return !!(Array.prototype && Array.prototype.every && Array.prototype.filter && Array.prototype.forEach && Array.prototype.indexOf && Array.prototype.lastIndexOf && Array.prototype.map && Array.prototype.some && Array.prototype.reduce && Array.prototype.reduceRight && Array.isArray)
    }), Modernizr.addTest("es5date", function() {
        var e = "2013-04-12T06:06:37.307Z",
            t = !1;
        try {
            t = !!Date.parse(e)
        } catch (n) {}
        return !!(Date.now && Date.prototype && Date.prototype.toISOString && Date.prototype.toJSON && t)
    }), Modernizr.addTest("es5function", function() {
        return !(!Function.prototype || !Function.prototype.bind)
    }), Modernizr.addTest("es5object", function() {
        return !!(Object.keys && Object.create && Object.getPrototypeOf && Object.getOwnPropertyNames && Object.isSealed && Object.isFrozen && Object.isExtensible && Object.getOwnPropertyDescriptor && Object.defineProperty && Object.defineProperties && Object.seal && Object.freeze && Object.preventExtensions)
    }), Modernizr.addTest("strictmode", function() {
        "use strict";
        return !this
    }()), Modernizr.addTest("es5string", function() {
        return !(!String.prototype || !String.prototype.trim)
    }), Modernizr.addTest("es5syntax", function() {
        var value, obj, stringAccess, getter, setter, reservedWords, zeroWidthChars;
        try {
            return stringAccess = eval('"foobar"[3] === "b"'), getter = eval("({ get x(){ return 1 } }).x === 1"), eval("({ set x(v){ value = v; } }).x = 1"), setter = 1 === value, eval("obj = ({ if: 1 })"), reservedWords = 1 === obj["if"], zeroWidthChars = eval("_‌‍ = true"), stringAccess && getter && setter && reservedWords && zeroWidthChars
        } catch (ignore) {
            return !1
        }
    }), Modernizr.addTest("es5undefined", function() {
        var e, t;
        try {
            t = window.undefined, window.undefined = 12345, e = "undefined" == typeof window.undefined, window.undefined = t
        } catch (n) {
            return !1
        }
        return e
    }), Modernizr.addTest("es5", function() {
        return !!(Modernizr.es5array && Modernizr.es5date && Modernizr.es5function && Modernizr.es5object && Modernizr.strictmode && Modernizr.es5string && Modernizr.json && Modernizr.es5syntax && Modernizr.es5undefined)
    }), Modernizr.addTest("es6array", !!(Array.prototype && Array.prototype.copyWithin && Array.prototype.fill && Array.prototype.find && Array.prototype.findIndex && Array.prototype.keys && Array.prototype.entries && Array.prototype.values && Array.from && Array.of)), Modernizr.addTest("es6collections", !!(window.Map && window.Set && window.WeakMap && window.WeakSet)), Modernizr.addTest("Reggaes", function() {
        try {
            new Function("function* test() {}")()
        } catch (e) {
            return !1
        }
        return !0
    }), Modernizr.addTest("es6math", !!(Math && Math.clz32 && Math.cbrt && Math.imul && Math.sign && Math.log10 && Math.log2 && Math.log1p && Math.expm1 && Math.cosh && Math.sinh && Math.tanh && Math.acosh && Math.asinh && Math.atanh && Math.hypot && Math.trunc && Math.fround)), Modernizr.addTest("es6number", !!(Number.isFinite && Number.isInteger && Number.isSafeInteger && Number.isNaN && Number.parseInt && Number.parseFloat && Number.isInteger(Number.MAX_SAFE_INTEGER) && Number.isInteger(Number.MIN_SAFE_INTEGER) && Number.isFinite(Number.EPSILON))), Modernizr.addTest("es6object", !!(Object.assign && Object.is && Object.setPrototypeOf)), Modernizr.addTest("promises", function() {
        return "Promise" in window && "resolve" in window.Promise && "reject" in window.Promise && "all" in window.Promise && "race" in window.Promise && function() {
            var e;
            return new window.Promise(function(t) {
                e = t
            }), "function" == typeof e
        }()
    }), Modernizr.addTest("es6string", !!(String.fromCodePoint && String.raw && String.prototype.codePointAt && String.prototype.repeat && String.prototype.startsWith && String.prototype.endsWith && String.prototype.contains)), Modernizr.addTest("devicemotion", "DeviceMotionEvent" in window), Modernizr.addTest("deviceorientation", "DeviceOrientationEvent" in window), Modernizr.addTest("filereader", !!(window.File && window.FileList && window.FileReader)), Modernizr.addTest("xhrresponsetype", function() {
        if ("undefined" == typeof XMLHttpRequest) return !1;
        var e = new XMLHttpRequest;
        return e.open("get", "/", !0), "response" in e
    }()), Modernizr.addTest("xhr2", "XMLHttpRequest" in window && "withCredentials" in new XMLHttpRequest), Modernizr.addTest("svgfilters", function() {
        var e = !1;
        try {
            e = "SVGFEColorMatrixElement" in window && 2 == SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE
        } catch (t) {}
        return e
    }), Modernizr.addTest("atobbtoa", "atob" in window && "btoa" in window, {
        aliases: ["atob-btoa"]
    });
    var prefixes = ModernizrProto._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    ModernizrProto._prefixes = prefixes, Modernizr.addTest("contains", is(String.prototype.contains, "function"));
    var docElement = document.documentElement,
        isSVG = "svg" === docElement.nodeName.toLowerCase(),
        omPrefixes = "Moz O ms Webkit",
        domPrefixes = ModernizrProto._config.usePrefixes ? omPrefixes.toLowerCase().split(" ") : [];
    ModernizrProto._domPrefixes = domPrefixes;
    var hasOwnProp;
    ! function() {
        var e = {}.hasOwnProperty;
        hasOwnProp = is(e, "undefined") || is(e.call, "undefined") ? function(e, t) {
            return t in e && is(e.constructor.prototype[t], "undefined")
        } : function(t, n) {
            return e.call(t, n)
        }
    }(), ModernizrProto._l = {}, ModernizrProto.on = function(e, t) {
        this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function() {
            Modernizr._trigger(e, Modernizr[e])
        }, 0)
    }, ModernizrProto._trigger = function(e, t) {
        if (this._l[e]) {
            var n = this._l[e];
            setTimeout(function() {
                var e, i;
                for (e = 0; e < n.length; e++)(i = n[e])(t)
            }, 0), delete this._l[e]
        }
    }, Modernizr._q.push(function() {
        ModernizrProto.addTest = addTest
    }), Modernizr.addAsyncTest(function() {
        var e = new Image;
        e.onload = e.onerror = function() {
            addTest("jpeg2000", 1 == e.width)
        }, e.src = "data:image/jp2;base64,/0//UQAyAAAAAAABAAAAAgAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAEBwEBBwEBBwEBBwEB/1IADAAAAAEAAAQEAAH/XAAEQED/ZAAlAAFDcmVhdGVkIGJ5IE9wZW5KUEVHIHZlcnNpb24gMi4wLjD/kAAKAAAAAABYAAH/UwAJAQAABAQAAf9dAAUBQED/UwAJAgAABAQAAf9dAAUCQED/UwAJAwAABAQAAf9dAAUDQED/k8+kEAGvz6QQAa/PpBABr994EAk//9k="
    }), Modernizr.addAsyncTest(function() {
        var e = new Image;
        e.onload = e.onerror = function() {
            addTest("jpegxr", 1 == e.width, {
                aliases: ["jpeg-xr"]
            })
        }, e.src = "data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA=="
    }), Modernizr.addTest("svgasimg", document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")), Modernizr.addAsyncTest(function() {
        function e() {
            var e = new Image;
            e.onerror = function() {
                addTest("datauri", !0), Modernizr.datauri = new Boolean(!0), Modernizr.datauri.over32kb = !1
            }, e.onload = function() {
                addTest("datauri", !0), Modernizr.datauri = new Boolean(!0), Modernizr.datauri.over32kb = 1 == e.width && 1 == e.height
            };
            for (var t = "R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="; t.length < 33e3;) t = "\r\n" + t;
            e.src = "data:image/gif;base64," + t
        } - 1 !== navigator.userAgent.indexOf("MSIE 7.") && setTimeout(function() {
            addTest("datauri", !1)
        }, 10);
        var t = new Image;
        t.onerror = function() {
            addTest("datauri", !1)
        }, t.onload = function() {
            1 == t.width && 1 == t.height ? e() : addTest("datauri", !1)
        }, t.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
    });
    var cssomPrefixes = ModernizrProto._config.usePrefixes ? omPrefixes.split(" ") : [];
    ModernizrProto._cssomPrefixes = cssomPrefixes;
    var atRule = function(e) {
        var t, n = prefixes.length,
            i = window.CSSRule;
        if ("undefined" == typeof i) return undefined;
        if (!e) return !1;
        if (e = e.replace(/^@/, ""), t = e.replace(/-/g, "_").toUpperCase() + "_RULE", t in i) return "@" + e;
        for (var a = 0; n > a; a++) {
            var s = prefixes[a],
                o = s.toUpperCase() + "_" + t;
            if (o in i) return "@-" + s.toLowerCase() + "-" + e
        }
        return !1
    };
    ModernizrProto.atRule = atRule;
    var hasEvent = function() {
        function e(e, n) {
            var i;
            return e ? (n && "string" != typeof n || (n = createElement(n || "div")), e = "on" + e, i = e in n, !i && t && (n.setAttribute || (n = createElement("div")), n.setAttribute(e, ""), i = "function" == typeof n[e], n[e] !== undefined && (n[e] = undefined), n.removeAttribute(e)), i) : !1
        }
        var t = !("onblur" in document.documentElement);
        return e
    }();
    ModernizrProto.hasEvent = hasEvent, Modernizr.addTest("inputsearchevent", hasEvent("search"));
    var prefixedCSSValue = function(e, t) {
        var n = !1,
            i = createElement("div"),
            a = i.style;
        if (e in a) {
            var s = domPrefixes.length;
            for (a[e] = t, n = a[e]; s-- && !n;) a[e] = "-" + domPrefixes[s] + "-" + t, n = a[e]
        }
        return "" === n && (n = !1), n
    };
    ModernizrProto.prefixedCSSValue = prefixedCSSValue, Modernizr.addTest("audio", function() {
        var e = createElement("audio"),
            t = !1;
        try {
            (t = !!e.canPlayType) && (t = new Boolean(t), t.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), t.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), t.opus = e.canPlayType('audio/ogg; codecs="opus"') || e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""), t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (n) {}
        return t
    }), Modernizr.addTest("canvas", function() {
        var e = createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }), Modernizr.addTest("canvastext", function() {
        return Modernizr.canvas === !1 ? !1 : "function" == typeof createElement("canvas").getContext("2d").fillText
    }), Modernizr.addTest("contenteditable", function() {
        if ("contentEditable" in docElement) {
            var e = createElement("div");
            return e.contentEditable = !0, "true" === e.contentEditable
        }
    }), addTest("htmlimports", "import" in createElement("link")), Modernizr.addTest("userdata", !!createElement("div").addBehavior), Modernizr.addTest("video", function() {
        var e = createElement("video"),
            t = !1;
        try {
            (t = !!e.canPlayType) && (t = new Boolean(t), t.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
        } catch (n) {}
        return t
    }), Modernizr.addTest("webanimations", "animate" in createElement("div")), Modernizr.addTest("adownload", !window.externalHost && "download" in createElement("a")), Modernizr.addTest("audioloop", "loop" in createElement("audio")), Modernizr.addAsyncTest(function() {
        function e(n) {
            clearTimeout(t);
            var a = n !== undefined && "loadeddata" === n.type ? !0 : !1;
            i.removeEventListener("loadeddata", e, !1), addTest("audiopreload", a), i.parentNode.removeChild(i)
        }
        var t, n = 300,
            i = createElement("audio"),
            a = i.style;
        if (!(Modernizr.audio && "preload" in i)) return void addTest("audiopreload", !1);
        a.position = "absolute", a.height = 0, a.width = 0;
        try {
            if (Modernizr.audio.mp3) i.src = "data:audio/mpeg;base64,//MUxAAB6AXgAAAAAPP+c6nf//yi/6f3//MUxAMAAAIAAAjEcH//0fTX6C9Lf//0//MUxA4BeAIAAAAAAKX2/6zv//+IlR4f//MUxBMCMAH8AAAAABYWalVMQU1FMy45//MUxBUB0AH0AAAAADkuM1VVVVVVVVVV//MUxBgBUATowAAAAFVVVVVVVVVVVVVV";
            else if (Modernizr.audio.m4a) i.src = "data:audio/x-m4a;base64,AAAAGGZ0eXBNNEEgAAACAGlzb21pc28yAAAACGZyZWUAAAAfbWRhdN4EAABsaWJmYWFjIDEuMjgAAAFoAQBHAAACiG1vb3YAAABsbXZoZAAAAAB8JbCAfCWwgAAAA+gAAAAYAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAG0dHJhawAAAFx0a2hkAAAAD3wlsIB8JbCAAAAAAQAAAAAAAAAYAAAAAAAAAAAAAAAAAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAABUG1kaWEAAAAgbWRoZAAAAAB8JbCAfCWwgAAArEQAAAQAVcQAAAAAAC1oZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU291bmRIYW5kbGVyAAAAAPttaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAL9zdGJsAAAAW3N0c2QAAAAAAAAAAQAAAEttcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAACdlc2RzAAAAAAMZAAEABBFAFQAAAAABftAAAAAABQISCAYBAgAAABhzdHRzAAAAAAAAAAEAAAABAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAXAAAAAQAAABRzdGNvAAAAAAAAAAEAAAAoAAAAYHVkdGEAAABYbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAraWxzdAAAACOpdG9vAAAAG2RhdGEAAAABAAAAAExhdmY1Mi42NC4y";
            else if (Modernizr.audio.ogg) i.src = "data:audio/ogg;base64,T2dnUwACAAAAAAAAAAD/QwAAAAAAAM2LVKsBHgF2b3JiaXMAAAAAAUSsAAAAAAAAgLsAAAAAAAC4AU9nZ1MAAAAAAAAAAAAA/0MAAAEAAADmvOe6Dy3/////////////////MgN2b3JiaXMdAAAAWGlwaC5PcmcgbGliVm9yYmlzIEkgMjAwNzA2MjIAAAAAAQV2b3JiaXMfQkNWAQAAAQAYY1QpRplS0kqJGXOUMUaZYpJKiaWEFkJInXMUU6k515xrrLm1IIQQGlNQKQWZUo5SaRljkCkFmVIQS0kldBI6J51jEFtJwdaYa4tBthyEDZpSTCnElFKKQggZU4wpxZRSSkIHJXQOOuYcU45KKEG4nHOrtZaWY4updJJK5yRkTEJIKYWSSgelU05CSDWW1lIpHXNSUmpB6CCEEEK2IIQNgtCQVQAAAQDAQBAasgoAUAAAEIqhGIoChIasAgAyAAAEoCiO4iiOIzmSY0kWEBqyCgAAAgAQAADAcBRJkRTJsSRL0ixL00RRVX3VNlVV9nVd13Vd13UgNGQVAAABAEBIp5mlGiDCDGQYCA1ZBQAgAAAARijCEANCQ1YBAAABAABiKDmIJrTmfHOOg2Y5aCrF5nRwItXmSW4q5uacc845J5tzxjjnnHOKcmYxaCa05pxzEoNmKWgmtOacc57E5kFrqrTmnHPGOaeDcUYY55xzmrTmQWo21uaccxa0pjlqLsXmnHMi5eZJbS7V5pxzzjnnnHPOOeecc6oXp3NwTjjnnHOi9uZabkIX55xzPhmne3NCOOecc84555xzzjnnnHOC0JBVAAAQAABBGDaGcacgSJ+jgRhFiGnIpAfdo8MkaAxyCqlHo6ORUuoglFTGSSmdIDRkFQAACAAAIYQUUkghhRRSSCGFFFKIIYYYYsgpp5yCCiqppKKKMsoss8wyyyyzzDLrsLPOOuwwxBBDDK20EktNtdVYY62555xrDtJaaa211koppZRSSikIDVkFAIAAABAIGWSQQUYhhRRSiCGmnHLKKaigAkJDVgEAgAAAAgAAADzJc0RHdERHdERHdERHdETHczxHlERJlERJtEzL1ExPFVXVlV1b1mXd9m1hF3bd93Xf93Xj14VhWZZlWZZlWZZlWZZlWZZlWYLQkFUAAAgAAIAQQgghhRRSSCGlGGPMMeegk1BCIDRkFQAACAAgAAAAwFEcxXEkR3IkyZIsSZM0S7M8zdM8TfREURRN01RFV3RF3bRF2ZRN13RN2XRVWbVdWbZt2dZtX5Zt3/d93/d93/d93/d93/d1HQgNWQUASAAA6EiOpEiKpEiO4ziSJAGhIasAABkAAAEAKIqjOI7jSJIkSZakSZ7lWaJmaqZneqqoAqEhqwAAQAAAAQAAAAAAKJriKabiKaLiOaIjSqJlWqKmaq4om7Lruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7rui4QGrIKAJAAANCRHMmRHEmRFEmRHMkBQkNWAQAyAAACAHAMx5AUybEsS9M8zdM8TfRET/RMTxVd0QVCQ1YBAIAAAAIAAAAAADAkw1IsR3M0SZRUS7VUTbVUSxVVT1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTVN0zRNIDRkJQAABADAYo3B5SAhJSXl3hDCEJOeMSYhtV4hBJGS3jEGFYOeMqIMct5C4xCDHggNWREARAEAAMYgxxBzyDlHqZMSOeeodJQa5xyljlJnKcWYYs0oldhSrI1zjlJHraOUYiwtdpRSjanGAgAAAhwAAAIshEJDVgQAUQAAhDFIKaQUYow5p5xDjCnnmHOGMeYcc44556B0UirnnHROSsQYc445p5xzUjonlXNOSiehAACAAAcAgAALodCQFQFAnACAQZI8T/I0UZQ0TxRFU3RdUTRd1/I81fRMU1U90VRVU1Vt2VRVWZY8zzQ901RVzzRV1VRVWTZVVZZFVdVt03V123RV3ZZt2/ddWxZ2UVVt3VRd2zdV1/Zd2fZ9WdZ1Y/I8VfVM03U903Rl1XVtW3VdXfdMU5ZN15Vl03Vt25VlXXdl2fc103Rd01Vl2XRd2XZlV7ddWfZ903WF35VlX1dlWRh2XfeFW9eV5XRd3VdlVzdWWfZ9W9eF4dZ1YZk8T1U903RdzzRdV3VdX1dd19Y105Rl03Vt2VRdWXZl2fddV9Z1zzRl2XRd2zZdV5ZdWfZ9V5Z13XRdX1dlWfhVV/Z1WdeV4dZt4Tdd1/dVWfaFV5Z14dZ1Ybl1XRg+VfV9U3aF4XRl39eF31luXTiW0XV9YZVt4VhlWTl+4ViW3feVZXRdX1ht2RhWWRaGX/id5fZ943h1XRlu3efMuu8Mx++k+8rT1W1jmX3dWWZfd47hGDq/8OOpqq+brisMpywLv+3rxrP7vrKMruv7qiwLvyrbwrHrvvP8vrAso+z6wmrLwrDatjHcvm4sv3Acy2vryjHrvlG2dXxfeArD83R1XXlmXcf2dXTjRzh+ygAAgAEHAIAAE8pAoSErAoA4AQCPJImiZFmiKFmWKIqm6LqiaLqupGmmqWmeaVqaZ5qmaaqyKZquLGmaaVqeZpqap5mmaJqua5qmrIqmKcumasqyaZqy7LqybbuubNuiacqyaZqybJqmLLuyq9uu7Oq6pFmmqXmeaWqeZ5qmasqyaZquq3meanqeaKqeKKqqaqqqraqqLFueZ5qa6KmmJ4qqaqqmrZqqKsumqtqyaaq2bKqqbbuq7Pqybeu6aaqybaqmLZuqatuu7OqyLNu6L2maaWqeZ5qa55mmaZqybJqqK1uep5qeKKqq5ommaqqqLJumqsqW55mqJ4qq6omea5qqKsumatqqaZq2bKqqLZumKsuubfu+68qybqqqbJuqauumasqybMu+78qq7oqmKcumqtqyaaqyLduy78uyrPuiacqyaaqybaqqLsuybRuzbPu6aJqybaqmLZuqKtuyLfu6LNu678qub6uqrOuyLfu67vqucOu6MLyybPuqrPq6K9u6b+sy2/Z9RNOUZVM1bdtUVVl2Zdn2Zdv2fdE0bVtVVVs2TdW2ZVn2fVm2bWE0Tdk2VVXWTdW0bVmWbWG2ZeF2Zdm3ZVv2ddeVdV/XfePXZd3murLty7Kt+6qr+rbu+8Jw667wCgAAGHAAAAgwoQwUGrISAIgCAACMYYwxCI1SzjkHoVHKOecgZM5BCCGVzDkIIZSSOQehlJQy5yCUklIIoZSUWgshlJRSawUAABQ4AAAE2KApsThAoSErAYBUAACD41iW55miatqyY0meJ4qqqaq27UiW54miaaqqbVueJ4qmqaqu6+ua54miaaqq6+q6aJqmqaqu67q6Lpqiqaqq67qyrpumqqquK7uy7Oumqqqq68quLPvCqrquK8uybevCsKqu68qybNu2b9y6ruu+7/vCka3rui78wjEMRwEA4AkOAEAFNqyOcFI0FlhoyEoAIAMAgDAGIYMQQgYhhJBSSiGllBIAADDgAAAQYEIZKDRkRQAQJwAAGEMppJRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkgppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkqppJRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoplVJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSCgCQinAAkHowoQwUGrISAEgFAACMUUopxpyDEDHmGGPQSSgpYsw5xhyUklLlHIQQUmktt8o5CCGk1FJtmXNSWosx5hgz56SkFFvNOYdSUoux5ppr7qS0VmuuNedaWqs115xzzbm0FmuuOdecc8sx15xzzjnnGHPOOeecc84FAOA0OACAHtiwOsJJ0VhgoSErAYBUAAACGaUYc8456BBSjDnnHIQQIoUYc845CCFUjDnnHHQQQqgYc8w5CCGEkDnnHIQQQgghcw466CCEEEIHHYQQQgihlM5BCCGEEEooIYQQQgghhBA6CCGEEEIIIYQQQgghhFJKCCGEEEIJoZRQAABggQMAQIANqyOcFI0FFhqyEgAAAgCAHJagUs6EQY5Bjw1BylEzDUJMOdGZYk5qMxVTkDkQnXQSGWpB2V4yCwAAgCAAIMAEEBggKPhCCIgxAABBiMwQCYVVsMCgDBoc5gHAA0SERACQmKBIu7iALgNc0MVdB0IIQhCCWBxAAQk4OOGGJ97whBucoFNU6iAAAAAAAAwA4AEA4KAAIiKaq7C4wMjQ2ODo8AgAAAAAABYA+AAAOD6AiIjmKiwuMDI0Njg6PAIAAAAAAAAAAICAgAAAAAAAQAAAAICAT2dnUwAE7AwAAAAAAAD/QwAAAgAAADuydfsFAQEBAQEACg4ODg==";
            else {
                if (!Modernizr.audio.wav) return void addTest("audiopreload", !1);
                i.src = "data:audio/wav;base64,UklGRvwZAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YdgZAAAAAAEA/v8CAP//AAABAP////8DAPz/BAD9/wEAAAAAAAAAAAABAP7/AgD//wAAAQD//wAAAQD//wAAAQD+/wIA//8AAAAAAAD//wIA/v8BAAAA//8BAAAA//8BAP//AQAAAP//AQD//wEAAAD//wEA//8BAP//AQD//wEA//8BAP//AQD+/wMA/f8DAP3/AgD+/wIA/////wMA/f8CAP7/AgD+/wMA/f8CAP7/AgD//wAAAAAAAAAAAQD+/wIA/v8CAP7/AwD9/wIA/v8BAAEA/v8CAP7/AQAAAAAAAAD//wEAAAD//wIA/f8DAP7/AQD//wEAAAD//wEA//8CAP7/AQD//wIA/v8CAP7/AQAAAAAAAAD//wEAAAAAAAAA//8BAP//AgD9/wQA+/8FAPz/AgAAAP//AgD+/wEAAAD//wIA/v8CAP3/BAD8/wQA/P8DAP7/AwD8/wQA/P8DAP7/AQAAAAAA//8BAP//AgD+/wEAAAD//wIA/v8BAP//AQD//wEAAAD//wEA//8BAAAAAAAAAP//AgD+/wEAAAAAAAAAAAD//wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AgD+/wIA/v8BAP//AQABAP7/AQD//wIA/v8CAP3/AwD/////AgD9/wMA/v8BAP//AQAAAP//AQD//wEA//8BAP//AAABAP//AAABAP//AQD//wAAAAACAP3/AwD9/wIA//8BAP//AQD//wEA//8BAP//AgD9/wMA/v8AAAIA/f8CAAAA/v8EAPv/BAD9/wIAAAD+/wQA+v8HAPr/BAD+/wEAAAD//wIA/f8EAPz/BAD7/wUA/P8EAPz/AwD+/wEAAAD//wEAAAAAAP//AgD8/wUA+/8FAPz/AwD9/wIA//8AAAEA/v8CAP//AQD//wAAAAABAP//AgD9/wMA/f8EAPz/AwD+/wAAAwD7/wUA/P8DAP7/AQAAAP//AgD+/wEAAQD+/wIA/v8BAAEA/v8CAP7/AQAAAP//AgD9/wMA/f8DAP7/AgD+/wEAAAAAAAEA//8AAAEA/v8DAP3/AgD//wEA//8BAP7/AwD9/wMA/v8BAP//AQAAAP//AgD9/wMA/v8BAP//AQAAAP//AgD+/wEAAQD+/wIA/////wIA//8AAAEA/f8DAP//AAABAP////8DAP3/AwD+/wEA//8BAP//AQAAAAAA//8BAP//AQD//wEA//8BAP//AAAAAAEA//8BAP7/AgD//wEA//8AAAAAAAAAAAAAAAD//wIA/v8BAAAA//8BAAEA/v8BAAAA//8DAPz/AwD+/wIA/v8CAP3/AwD+/wEAAAD//wEA//8BAAAA//8BAAAA/v8EAPv/BAD+/wAAAAABAP7/AgD//wAAAAABAP7/AgD//wAAAAAAAAAAAAABAP3/BAD8/wQA/f8BAAAAAAABAP7/AgD+/wIA/v8CAP7/AgD+/wIA/v8BAAAAAAD//wIA/f8DAP7/AAABAP//AAACAPz/BAD9/wIA//8AAP//AwD9/wMA/P8EAP3/AwD9/wIA//8BAP//AQD+/wMA/f8DAP7/AAABAP//AQAAAP//AQD//wIA/f8DAP7/AQAAAP//AQAAAAAA//8CAP7/AQABAP7/AgD+/wEAAQD+/wIA/v8CAP////8CAP7/AgD//wAAAAABAP7/AwD9/wIAAAD+/wMA/f8CAP//AQD+/wMA/f8CAP//AAACAPz/BQD6/wUA/v///wIA/v8CAP3/BAD7/wYA+v8FAPz/AwD/////AgD+/wEAAAD//wEAAAD//wIA/f8DAP7/AQAAAP//AgD//wAA//8BAAAAAAAAAP//AQD//wEA//8AAAIA/f8DAP3/AgAAAP//AQD//wEA//8AAAEA//8BAP////8CAP//AAABAP3/BAD9/wIA/v8BAAEA//8BAP7/AgD//wEA//8AAAEA//8BAP//AAAAAAEA//8BAP7/AgD//wEA//8AAAAAAQD+/wIA/v8BAAAAAAD//wIA/v8BAAAAAAAAAAAAAQD+/wMA/f8CAP//AQD//wIA/f8DAP7/AQD//wEA//8CAP7/AAABAP7/AwD9/wMA/v8AAAEA//8BAAAAAAD//wIA/v8BAAAA//8CAP7/AgD+/wEA//8CAP7/AgD//wAAAAAAAAAAAQD//wEA/v8DAPz/BQD8/wIA//8AAAEAAAD//wEA//8BAP//AQAAAAAA//8BAP//AgD+/wEAAAAAAP//AQD+/wMA/////wEA/v8CAP//AQD//wEA//8AAAEA//8BAAAA/v8EAPz/AwD+/wEAAAAAAAAA//8CAP7/AQD//wEA//8BAP//AAABAP7/AwD9/wIA//8BAP//AQD//wEA//8AAAEA/v8EAPv/BAD9/wIA//8BAP7/AwD9/wIA//8AAAEA//8BAP//AQD//wAAAQD//wEAAAD+/wMA/v8AAAIA/f8DAP7/AQD//wAAAQD+/wMA/f8CAP//AAABAP7/AgD+/wMA/f8CAP7/AQABAP7/AgD+/wIA/v8CAP7/AwD8/wMA//8AAAEA//8AAAAAAAABAP//AQD//wAAAQD//wIA/f8DAP3/AwD+/wAAAgD9/wIA//8AAAEAAAD+/wMA/P8FAPv/BAD9/wIA//8AAP//AgD+/wIA/v8BAAAAAAD//wEAAAAAAP//AQD//wEA//8BAP//AAABAP7/AwD9/wIA//8BAP//AAABAP//AQD//wAAAQD//wEA//8BAP//AAABAAAA//8BAP7/AwD9/wMA/f8DAP3/AgD//wEA//8BAP7/AgD//wAAAgD8/wQA/f8CAP//AQD+/wMA/f8CAP7/AgD//wAAAAAAAAAAAAABAP7/AwD9/wIA/v8DAP3/AwD9/wIA/v8DAPz/BQD7/wQA/f8CAP7/AwD9/wMA/f8CAP//AQAAAP7/AwD+/wEA//8AAAEAAAAAAP//AAABAP//AQAAAP7/AwD9/wMA/f8CAP//AQD//wEA//8AAAIA/f8CAAAA//8BAAAA//8BAAAA/v8EAPv/BAD9/wIA//8AAAEA/v8CAP//AAABAP//AAABAP//AAABAP7/AwD8/wQA/f8CAAAA/v8DAP3/AwD9/wMA/v8BAAAA//8BAAAA//8CAP7/AQAAAAAAAAAAAAAA//8CAP7/AgD+/wIA/v8CAP7/AgD//wAAAQD//wAAAQD//wAAAQD//wAAAQD+/wIA//8AAAAAAQD+/wMA/f8CAP//AQD//wEA//8AAAEA/v8DAP3/AgD//wAAAAABAP7/AwD9/wIA//8AAAEA/v8DAP3/AgD//wAAAAABAP7/AwD8/wMA/v8CAP//AAD//wIA/v8CAP7/AQABAP7/AQAAAP//AgD/////AQD//wEAAAD//wEA/v8EAPv/BAD9/wMA/v8BAAAA//8BAAEA/P8GAPr/BQD8/wMA/v8BAAAA//8CAP7/AQABAP3/BAD7/wYA+/8EAPz/AwD//wEA//8BAP7/BAD8/wMA/v8AAAIA/v8BAAAA//8BAAAA//8BAAAA//8CAP3/AwD+/wAAAgD8/wUA/P8DAP7/AAABAAAAAAD//wEAAAD//wIA/f8DAP7/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA/f8EAPz/AwD/////AgD+/wIA/f8DAP7/AgD+/wEA//8CAP7/AQD//wEAAAAAAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAP//AQAAAP//AAACAP3/BAD7/wQA/v8BAAAA//8BAP//AQAAAP//AQAAAP7/BAD7/wUA+/8EAP3/AgD//wAAAQD+/wIA//8AAAEA/v8CAP//AQD+/wEAAAAAAAAAAAD//wEA//8CAP3/AwD9/wIA//8AAAAAAAAAAAAA//8BAP//AgD+/wEA//8CAP7/AQAAAP//AgD/////AgD/////AgD+/wIA//8AAP//AQABAP7/AgD9/wMA/v8CAP////8BAAAAAAAAAAAA//8CAP////8DAPz/AwD+/wEAAAAAAP//AQD//wEAAAD//wEAAAD+/wQA+/8FAPz/AgAAAP//AgD9/wMA/v8BAAAAAAD//wEAAAD//wIA/v8BAAAAAAD//wIA/v8BAAAA//8BAAAA//8CAP7/AQD//wEA//8BAAAA//8BAP//AAABAP//AQAAAP7/AgD//wEA//8AAAAAAQD+/wMA/P8EAP7///8DAPz/BQD8/wEAAQD+/wMA/v8AAAEA//8BAP//AQD//wEA/v8CAP//AQD//wAAAAABAAAA//8BAP//AQAAAAAA//8BAP//AgD+/wAAAQD//wIA/f8CAP//AQAAAP7/AwD9/wMA/v8BAP//AAABAP//AgD9/wIA//8BAAAA//8BAAAA//8CAP3/AwD+/wEAAAD+/wQA/P8DAP7/AAACAP7/AQAAAP//AQAAAP//AQAAAP//AgD9/wIAAAD//wIA/f8DAP7/AQD//wEA//8CAP7/AQD//wAAAQD//wEA//8AAAAAAQD//wEAAAD9/wUA+/8FAPz/AgD//wAAAQD//wAAAQD+/wMA/f8BAAEA/v8CAP7/AgD+/wIA/v8BAAAAAAAAAAAAAAD//wIA/v8CAP////8CAP7/AgD+/wIA/v8CAP7/AQAAAP//AQAAAP//AQD//wAAAQD//wAAAQD+/wMA/f8CAAAA/v8DAP3/AgAAAP//AQAAAP7/AwD9/wMA/v8BAP//AQD//wEAAAD+/wMA/f8CAAAA/v8CAP//AAAAAAEA//8AAAEA/v8DAP3/AwD9/wIA//8BAP//AgD8/wQA/v8BAAAA/v8CAP//AQD//wAAAAAAAAEA/f8EAPz/BAD9/wIA//8AAAAAAAABAP//AAAAAAAAAAABAP3/BAD9/wIA/v8BAAEA//8AAAAA//8CAP7/AgD9/wQA+/8FAPv/BQD8/wMA/f8DAP3/AwD+/wAAAgD9/wMA/f8CAAAA/v8EAPv/BQD7/wUA/P8DAP///v8DAP3/BAD8/wMA/f8DAP7/AQD//wEAAAD//wEA/v8CAAAA/v8CAP7/AgD//wAAAAAAAAAAAQD+/wIA//8AAAEA/v8DAPz/BAD9/wIA//8AAP//AgD//wEA/v8BAAAAAQD//wAAAAAAAAEA//8AAAEA//8BAP//AAABAP//AQD+/wIA/v8DAPz/BAD8/wQA/f8BAAAAAQD+/wMA/P8DAP//AAAAAAAAAAD//wMA+/8FAP3/AQABAP3/BAD8/wMA/v8BAAAA//8CAP3/AwD+/wEAAQD9/wMA/f8EAPz/BAD7/wQA/v8BAAEA/f8DAP7/AQAAAP//AgD+/wEAAAD//wIA/v8CAP7/AgD+/wEAAQD//wEA/v8CAP7/BAD7/wQA/f8CAAAA//8AAAAAAAABAP//AQD+/wEAAQD+/wMA/f8BAAEA/v8DAPz/AwD/////AwD8/wQA/P8DAP7/AgD//wAA//8BAAAAAAAAAP//AgD+/wEAAAD//wIA/v8BAAAA//8CAP3/AgD//wAAAQD+/wIA/v8BAAAA//8CAP7/AgD+/wEA//8CAP3/BAD7/wQA/v8BAAAA//8AAAEAAAD//wIA/f8DAP7/AgD+/wIA/v8CAP7/AgD+/wEAAAAAAP//AgD9/wMA/v8BAP//AgD9/wMA/v8AAAEA//8BAP//AQD//wEA//8AAAEA/v8EAPz/AgD//wAAAQAAAP//AAABAP//AQD//wEAAAD//wEA//8BAAEA/f8DAP7/AQABAP3/AwD+/wIA/////wEAAAAAAAAAAAD//wIA/v8CAP////8CAP7/AgD//wAA//8CAP3/BAD9/wAAAgD9/wMA/v8BAP//AQAAAP//AQAAAP//AgD9/wMA/f8EAPz/AwD+/wEAAAAAAAAAAAD//wIA/f8EAP3/AAABAAAA//8CAP7/AQAAAP//AQAAAAAA//8BAP//AQAAAP//AQAAAP//AQAAAP//AgD9/wMA/v8BAP//AQAAAP//AQD//wIA/v8CAP3/BAD9/wEAAAD//wEAAQD9/wMA/f8CAAAA/v8DAP3/AgD//wAAAQD+/wIA/v8CAP7/AQAAAP//AgD+/wEAAAAAAP//AwD7/wUA/f8BAAEA/v8BAAEA/v8DAP3/AgD//wEA//8BAP//AQD//wEA//8CAP3/BAD7/wQA/////wIA/v8AAAIA/v8CAP3/BAD7/wUA/P8DAP3/AwD9/wMA/v8AAAIA/v8CAP7/AgD+/wIA//8AAAEA/v8CAP7/AgD//wAAAAD//wEAAAAAAAAA//8BAP7/BAD7/wUA/P8CAAAA//8BAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAAAA//8CAP3/AwD+/wEA//8CAP3/AwD+/wAAAwD8/wIAAAD//wIA/////wIA/v8CAP7/AgD+/wEAAAAAAAAAAAAAAP//AgD+/wIA//8AAAAA//8CAP7/AgD+/wEA//8CAP3/AwD9/wMA/v8BAP7/AwD9/wMA/f8CAP//AQD+/wIA//8BAP//AQD+/wMA/v8BAAAA//8BAAAA//8CAP7/AQAAAP//AgD+/wIA/v8CAP//AAAAAAEA//8BAP//AAABAAAA//8BAP//AQD//wEA//8BAP//AQAAAP//AQD//wEAAAD//wIA/f8CAAAA//8BAAAA//8BAP//AAABAP//AQD//wAAAAAAAAEA/v8CAP//AQD//wAAAAABAP7/AwD9/wIAAAD+/wIA//8BAP//AgD9/wMA/f8DAP7/AgD+/wEAAAAAAAEA/v8CAP7/AgD//wAAAAAAAAAAAAAAAP//AgD/////AgD9/wQA/f8BAAAAAAAAAAEA/f8DAP////8DAP3/AQABAP7/AgD//wAAAQD+/wMA/f8CAP7/AQABAP7/AwD7/wYA+v8FAP3/AQABAP7/AgD+/wMA/f8CAP7/AwD+/wEA//8BAP//AQAAAP7/BQD5/wcA+v8FAPz/AwD+/wIA/v8BAAAA//8DAPv/BQD8/wMA/////wEAAAAAAAAAAAD//wIA/f8DAP7/AQAAAP//AQAAAP//AgD+/wIA/v8BAAEA/f8EAPz/AwD+/wEA//8CAP7/AQD//wEA//8CAP7/AQAAAP//AgD+/wEAAAAAAAAAAAAAAAAAAAD//wIA/f8EAPz/AwD+/wEA//8CAP7/AgD+/wEAAQD+/wEAAQD+/wIA/////wIA//8AAAAAAAAAAAAAAAD//wEAAAAAAP//AgD9/wMA/v8BAP//AQAAAP//AQD//wEA//8BAP//AQD//wEA//8BAP//AQAAAP7/AwD9/wMA/v8BAP7/AwD9/wMA/v8BAP//AAABAP//AQD//wAAAAABAP//AAAAAAAAAQD//wEA/v8CAAAA/v8EAPv/BAD9/wIAAAD+/wMA/P8DAP//AAAAAP//AQD//wIA/f8DAP3/AwD9/wMA/v8BAAAA//8BAAAA//8CAP3/AwD9/wQA+/8FAPv/BQD8/wMA/v8BAAAA//8BAP//AgD+/wEAAAD//wIA/v8BAAEA/f8DAP3/AgAAAP//AQD//wAAAQD//wEA//8BAP//AQD//wEA/v8DAP3/AgAAAP7/AwD9/wIAAAD//wEAAAD//wIA/f8DAP7/AgD9/wQA+/8FAPz/AgAAAP//AgD9/wIA//8BAP//AQD//wEA//8BAP//AQD//wIA/f8DAP3/AgD//wAAAQD+/wIA/v8BAAEA/v8CAP7/AgD+/wMA/P8DAP//AAABAP7/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA/v8CAP3/BAD8/wMA/v8BAAAAAAD//wEAAAAAAAAAAAD//wEAAAAAAAAA//8BAP//AgD+/wEA//8CAP3/AwD9/wMA/f8EAPv/BAD+/wAAAQD//wEA//8BAP//AAABAP//AQD//wEAAAD//wEA//8BAP//AgD9/wMA/v8AAAIA/f8DAP7/AAACAP3/AwD+/wEA//8BAP//AQAAAP//AQAAAP7/AwD9/wMA/v8AAAEA//8BAP//AAAAAAEA//8AAAEA/v8CAP//AAAAAAEA/v8DAPz/BAD9/wEAAQD+/wEAAQD9/wQA/P8DAP7/AQAAAAAAAAAAAAAAAAAAAAAAAQD+/wIA/////wIA/v8BAAAA//8BAP//AQD//wEA//8BAAAA/v8EAPz/AwD///7/BAD8/wMA/////wIA/v8CAP////8CAP7/AgD+/wIA/v8CAP////8CAP7/AwD9/wIA/v8CAP//AAABAP7/AwD9/wEAAQD+/wMA/f8CAP//AAAAAAEA/v8DAPz/BAD9/wIA/v8CAP7/AgD//wAAAAD//wIA/v8CAP7/AQAAAAAA//8CAP7/AgD+/wIA/v8CAP7/AwD8/wUA+v8GAPv/AwD//wAAAAAAAAAA//8DAPv/BQD9/wAAAgD9/wMA/v8BAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAAAAAAAAAP//AQAAAAAAAAD//wEA//8CAP3/AwD+/wAAAgD+/wEAAAD//wIA/v8CAP7/AgD/////AwD8/wUA/P8CAP//AQD//wIA/f8DAP3/AwD+/wAAAQD+/wMA/f8DAP3/AgD//wAAAQD//wEA//8BAP7/AwD+/wEA//8AAAEA//8CAPz/BAD9/wIA//8AAAEA/v8DAPz/BAD9/wIA//8AAAEA/v8CAP7/AgD//wEA/f8EAPz/BAD+////AgD//wAAAQD//wAAAQD//wEA//8BAP7/AwD+/wEA";

            }
        } catch (s) {
            return void addTest("audiopreload", !1)
        }
        i.setAttribute("preload", "auto"), i.style.cssText = "display:none", docElement.appendChild(i), setTimeout(function() {
            i.addEventListener("loadeddata", e, !1), t = setTimeout(e, n)
        }, 0)
    }), Modernizr.addTest("bgpositionshorthand", function() {
        var e = createElement("a"),
            t = e.style,
            n = "right 10px bottom 10px";
        return t.cssText = "background-position: " + n + ";", t.backgroundPosition === n
    }), Modernizr.addTest("csscalc", function() {
        var e = "width:",
            t = "calc(10px);",
            n = createElement("a");
        return n.style.cssText = e + prefixes.join(t + e), !!n.style.length
    }), Modernizr.addTest("cubicbezierrange", function() {
        var e = createElement("a");
        return e.style.cssText = prefixes.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "), !!e.style.length
    }), Modernizr.addTest("cssgradients", function() {
        for (var e, t = "background-image:", n = "gradient(linear,left top,right bottom,from(#9f9),to(white));", i = "", a = 0, s = prefixes.length - 1; s > a; a++) e = 0 === a ? "to " : "", i += t + prefixes[a] + "linear-gradient(" + e + "left top, #9f9, white);";
        Modernizr._config.usePrefixes && (i += t + "-webkit-" + n);
        var o = createElement("a"),
            r = o.style;
        return r.cssText = i, ("" + r.backgroundImage).indexOf("gradient") > -1
    }), Modernizr.addTest("multiplebgs", function() {
        var e = createElement("a").style;
        return e.cssText = "background:url(https://),url(https://),red url(https://)", /(url\s*\(.*?){3}/.test(e.background)
    }), Modernizr.addTest("opacity", function() {
        var e = createElement("a").style;
        return e.cssText = prefixes.join("opacity:.55;"), /^0.55$/.test(e.opacity)
    }), Modernizr.addTest("csspointerevents", function() {
        var e = createElement("a").style;
        return e.cssText = "pointer-events:auto", "auto" === e.pointerEvents
    }), Modernizr.addTest("csspositionsticky", function() {
        var e = "position:",
            t = "sticky",
            n = createElement("a"),
            i = n.style;
        return i.cssText = e + prefixes.join(t + ";" + e).slice(0, -e.length), -1 !== i.position.indexOf(t)
    }), Modernizr.addTest("regions", function() {
        if (isSVG) return !1;
        var e = Modernizr.prefixed("flowFrom"),
            t = Modernizr.prefixed("flowInto"),
            n = !1;
        if (!e || !t) return n;
        var i = createElement("iframe"),
            a = createElement("div"),
            s = createElement("div"),
            o = createElement("div"),
            r = "modernizr_flow_for_regions_check";
        s.innerText = "M", a.style.cssText = "top: 150px; left: 150px; padding: 0px;", o.style.cssText = "width: 50px; height: 50px; padding: 42px;", o.style[e] = r, a.appendChild(s), a.appendChild(o), docElement.appendChild(a);
        var d, l, u = s.getBoundingClientRect();
        return s.style[t] = r, d = s.getBoundingClientRect(), l = parseInt(d.left - u.left, 10), docElement.removeChild(a), 42 == l ? n = !0 : (docElement.appendChild(i), u = i.getBoundingClientRect(), i.style[t] = r, d = i.getBoundingClientRect(), u.height > 0 && u.height !== d.height && 0 === d.height && (n = !0)), s = o = a = i = undefined, n
    }), Modernizr.addTest("cssremunit", function() {
        var e = createElement("a").style;
        try {
            e.fontSize = "3rem"
        } catch (t) {}
        return /rem/.test(e.fontSize)
    }), Modernizr.addTest("rgba", function() {
        var e = createElement("a").style;
        return e.cssText = "background-color:rgba(150,255,150,.5)", ("" + e.backgroundColor).indexOf("rgba") > -1
    }), Modernizr.addTest("preserve3d", function() {
        var e = createElement("a"),
            t = createElement("a");
        e.style.cssText = "display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);", t.style.cssText = "display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);", e.appendChild(t), docElement.appendChild(e);
        var n = t.getBoundingClientRect();
        return docElement.removeChild(e), n.width && n.width < 4
    }), Modernizr.addTest("template", "content" in createElement("template")), Modernizr.addTest("time", "valueAsDate" in createElement("time")), Modernizr.addTest("capture", "capture" in createElement("input")), Modernizr.addTest("fileinput", function() {
        if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) return !1;
        var e = createElement("input");
        return e.type = "file", !e.disabled
    }), Modernizr.addTest("fileinputdirectory", function() {
        var e = createElement("input"),
            t = "directory";
        if (e.type = "file", t in e) return !0;
        for (var n = 0, i = domPrefixes.length; i > n; n++)
            if (domPrefixes[n] + t in e) return !0;
        return !1
    }), Modernizr.addTest("formattribute", function() {
        var e, t = createElement("form"),
            n = createElement("input"),
            i = createElement("div"),
            a = "formtest" + (new Date).getTime(),
            s = !1;
        t.id = a;
        try {
            n.setAttribute("form", a)
        } catch (o) {
            document.createAttribute && (e = document.createAttribute("form"), e.nodeValue = a, n.setAttributeNode(e))
        }
        return i.appendChild(t), i.appendChild(n), docElement.appendChild(i), s = t.elements && 1 === t.elements.length && n.form == t, i.parentNode.removeChild(i), s
    }), Modernizr.addTest("placeholder", "placeholder" in createElement("input") && "placeholder" in createElement("textarea")), Modernizr.addTest("sandbox", "sandbox" in createElement("iframe")), Modernizr.addTest("seamless", "seamless" in createElement("iframe")), Modernizr.addTest("srcdoc", "srcdoc" in createElement("iframe")), Modernizr.addAsyncTest(function() {
        if (!Modernizr.canvas) return !1;
        var e = new Image,
            t = createElement("canvas"),
            n = t.getContext("2d");
        e.onload = function() {
            addTest("apng", function() {
                return "undefined" == typeof t.getContext ? !1 : (n.drawImage(e, 0, 0), 0 === n.getImageData(0, 0, 1, 1).data[3])
            })
        }, e.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg=="
    }), Modernizr.addTest("imgcrossorigin", "crossOrigin" in createElement("img")), Modernizr.addAsyncTest(function() {
        var e, t, n, i = createElement("img"),
            a = "sizes" in i;
        !a && "srcset" in i ? (t = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==", e = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", n = function() {
            addTest("sizes", 2 == i.width)
        }, i.onload = n, i.onerror = n, i.setAttribute("sizes", "9px"), i.srcset = e + " 1w," + t + " 8w", i.src = e) : addTest("sizes", a)
    }), Modernizr.addTest("srcset", "srcset" in createElement("img")), Modernizr.addTest("inputformaction", !!("formAction" in createElement("input")), {
        aliases: ["input-formaction"]
    }), Modernizr.addTest("scriptasync", "async" in createElement("script")), Modernizr.addTest("scriptdefer", "defer" in createElement("script")), Modernizr.addTest("stylescoped", "scoped" in createElement("style")), Modernizr.addTest("inlinesvg", function() {
        var e = createElement("div");
        return e.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI)
    }), Modernizr.addAsyncTest(function() {
        var e, t, n = function(e) {
                docElement.contains(e) || docElement.appendChild(e)
            },
            i = function(e) {
                e.fake && e.parentNode && e.parentNode.removeChild(e)
            },
            a = function(e, t) {
                var n = !!e;
                if (n && (n = new Boolean(n), n.blocked = "blocked" === e), addTest("flash", function() {
                        return n
                    }), t && l.contains(t)) {
                    for (; t.parentNode !== l;) t = t.parentNode;
                    l.removeChild(t)
                }
            };
        try {
            t = "ActiveXObject" in window && "Pan" in new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")
        } catch (s) {}
        if (e = !("plugins" in navigator && "Shockwave Flash" in navigator.plugins || t), e || isSVG) a(!1);
        else {
            var o, r, d = createElement("embed"),
                l = getBody();
            if (d.type = "application/x-shockwave-flash", l.appendChild(d), !("Pan" in d || t)) return n(l), a("blocked", d), void i(l);
            o = function() {
                return n(l), docElement.contains(l) ? (docElement.contains(d) ? (r = d.style.cssText, "" !== r ? a("blocked", d) : a(!0, d)) : a("blocked"), void i(l)) : (l = document.body || l, d = createElement("embed"), d.type = "application/x-shockwave-flash", l.appendChild(d), setTimeout(o, 1e3))
            }, setTimeout(o, 10)
        }
    });
    var mq = function() {
        var e = window.matchMedia || window.msMatchMedia;
        return e ? function(t) {
            var n = e(t);
            return n && n.matches || !1
        } : function(e) {
            var t = !1;
            return injectElementWithStyles("@media " + e + " { #modernizr { position: absolute; } }", function(e) {
                t = "absolute" == (window.getComputedStyle ? window.getComputedStyle(e, null) : e.currentStyle).position
            }), t
        }
    }();
    ModernizrProto.mq = mq, Modernizr.addTest("mediaqueries", mq("only all"));
    var testStyles = ModernizrProto.testStyles = injectElementWithStyles;
    Modernizr.addTest("hiddenscroll", function() {
        return testStyles("#modernizr {width:100px;height:100px;overflow:scroll}", function(e) {
            return e.offsetWidth === e.clientWidth
        })
    }), Modernizr.addTest("touchevents", function() {
        var e;
        if ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) e = !0;
        else {
            var t = ["@media (", prefixes.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            testStyles(t, function(t) {
                e = 9 === t.offsetTop
            })
        }
        return e
    }), Modernizr.addTest("unicode", function() {
        var e, t = createElement("span"),
            n = createElement("span");
        return testStyles("#modernizr{font-family:Arial,sans;font-size:300em;}", function(i) {
            t.innerHTML = isSVG ? "妇" : "&#5987;", n.innerHTML = isSVG ? "☆" : "&#9734;", i.appendChild(t), i.appendChild(n), e = "offsetWidth" in t && t.offsetWidth !== n.offsetWidth
        }), e
    }), Modernizr.addTest("checked", function() {
        return testStyles("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}", function(e) {
            var t = createElement("input");
            return t.setAttribute("type", "checkbox"), t.setAttribute("checked", "checked"), e.appendChild(t), 20 === t.offsetLeft
        })
    }), testStyles("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}", function(e) {
        var t, n = e.childNodes;
        t = n[0].offsetLeft < n[1].offsetLeft, Modernizr.addTest("displaytable", t, {
            aliases: ["display-table"]
        })
    }, 2);
    var blacklist = function() {
        var e = navigator.userAgent,
            t = e.match(/applewebkit\/([0-9]+)/gi) && parseFloat(RegExp.$1),
            n = e.match(/w(eb)?osbrowser/gi),
            i = e.match(/windows phone/gi) && e.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9,
            a = 533 > t && e.match(/android/gi);
        return n || a || i
    }();
    blacklist ? Modernizr.addTest("fontface", !1) : testStyles('@font-face {font-family:"font";src:url("https://")}', function(e, t) {
        var n = document.getElementById("smodernizr"),
            i = n.sheet || n.styleSheet,
            a = i ? i.cssRules && i.cssRules[0] ? i.cssRules[0].cssText : i.cssText || "" : "",
            s = /src/i.test(a) && 0 === a.indexOf(t.split(" ")[0]);
        Modernizr.addTest("fontface", s)
    }), testStyles('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function(e) {
        Modernizr.addTest("generatedcontent", e.offsetHeight >= 7)
    }), Modernizr.addTest("hairline", function() {
        return testStyles("#modernizr {border:.5px solid transparent}", function(e) {
            return 1 === e.offsetHeight
        })
    }), Modernizr.addTest("cssinvalid", function() {
        return testStyles("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}", function(e) {
            var t = createElement("input");
            return t.required = !0, e.appendChild(t), t.clientWidth > 10
        })
    }), testStyles("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}", function(e) {
        Modernizr.addTest("lastchild", e.lastChild.offsetWidth > e.firstChild.offsetWidth)
    }, 2), testStyles("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}", function(e) {
        for (var t = e.getElementsByTagName("div"), n = !0, i = 0; 5 > i; i++) n = n && t[i].offsetWidth === i % 2 + 1;
        Modernizr.addTest("nthchild", n)
    }, 5), testStyles("#modernizr{overflow: scroll; width: 40px; height: 40px; }#" + prefixes.join("scrollbar{width:0px} #modernizr::").split("#").slice(1).join("#") + "scrollbar{width:0px}", function(e) {
        Modernizr.addTest("cssscrollbar", 40 == e.scrollWidth)
    }), Modernizr.addTest("siblinggeneral", function() {
        return testStyles("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}", function(e) {
            return 200 == e.lastChild.offsetWidth
        }, 2)
    }), testStyles("#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}", function(e) {
        var t = e.firstChild;
        t.innerHTML = "This is a text written in Arial", Modernizr.addTest("subpixelfont", window.getComputedStyle ? "44px" !== window.getComputedStyle(t, null).getPropertyValue("width") : !1)
    }, 1, ["subpixel"]), Modernizr.addTest("cssvalid", function() {
        return testStyles("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}", function(e) {
            var t = createElement("input");
            return e.appendChild(t), t.clientWidth > 10
        })
    }), testStyles("#modernizr { height: 50vh; }", function(e) {
        var t = parseInt(window.innerHeight / 2, 10),
            n = parseInt((window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).height, 10);
        Modernizr.addTest("cssvhunit", n == t)
    }), testStyles("#modernizr { width: 50vw; }", function(e) {
        var t = parseInt(window.innerWidth / 2, 10),
            n = parseInt((window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).width, 10);
        Modernizr.addTest("cssvwunit", n == t)
    }), Modernizr.addTest("formvalidation", function() {
        var e = createElement("form");
        if (!("checkValidity" in e && "addEventListener" in e)) return !1;
        if ("reportValidity" in e) return !0;
        var t, n = !1;
        return Modernizr.formvalidationapi = !0, e.addEventListener("submit", function(e) {
            (!window.opera || window.operamini) && e.preventDefault(), e.stopPropagation()
        }, !1), e.innerHTML = '<input name="modTest" required="required" /><button></button>', testStyles("#modernizr form{position:absolute;top:-99999em}", function(i) {
            i.appendChild(e), t = e.getElementsByTagName("input")[0], t.addEventListener("invalid", function(e) {
                n = !0, e.preventDefault(), e.stopPropagation()
            }, !1), Modernizr.formvalidationmessage = !!t.validationMessage, e.getElementsByTagName("button")[0].click()
        }), n
    });
    var inputElem = createElement("input"),
        inputattrs = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
        attrs = {};
    Modernizr.input = function(e) {
        for (var t = 0, n = e.length; n > t; t++) attrs[e[t]] = !!(e[t] in inputElem);
        return attrs.list && (attrs.list = !(!createElement("datalist") || !window.HTMLDataListElement)), attrs
    }(inputattrs);
    var inputtypes = "search tel url email datetime date month week time datetime-local number range color".split(" "),
        inputs = {};
    Modernizr.inputtypes = function(e) {
        for (var t, n, i, a = e.length, s = "1)", o = 0; a > o; o++) inputElem.setAttribute("type", t = e[o]), i = "text" !== inputElem.type && "style" in inputElem, i && (inputElem.value = s, inputElem.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(t) && inputElem.style.WebkitAppearance !== undefined ? (docElement.appendChild(inputElem), n = document.defaultView, i = n.getComputedStyle && "textfield" !== n.getComputedStyle(inputElem, null).WebkitAppearance && 0 !== inputElem.offsetHeight, docElement.removeChild(inputElem)) : /^(search|tel)$/.test(t) || (i = /^(url|email)$/.test(t) ? inputElem.checkValidity && inputElem.checkValidity() === !1 : inputElem.value != s)), inputs[e[o]] = !!i;
        return inputs
    }(inputtypes), Modernizr.addTest("localizednumber", function() {
        if (!Modernizr.inputtypes.number) return !1;
        if (!Modernizr.formvalidation) return !1;
        var e, t = createElement("div"),
            n = getBody(),
            i = function() {
                return docElement.insertBefore(n, docElement.firstElementChild || docElement.firstChild)
            }();
        t.innerHTML = '<input type="number" value="1.0" step="0.1"/>';
        var a = t.childNodes[0];
        i.appendChild(t), a.focus();
        try {
            document.execCommand("InsertText", !1, "1,1")
        } catch (s) {}
        return e = "number" === a.type && 1.1 === a.valueAsNumber && a.checkValidity(), i.removeChild(t), n.fake && i.parentNode.removeChild(i), e
    });
    var modElem = {
        elem: createElement("modernizr")
    };
    Modernizr._q.push(function() {
        delete modElem.elem
    }), Modernizr.addTest("csschunit", function() {
        var e, t = modElem.elem.style;
        try {
            t.fontSize = "3ch", e = -1 !== t.fontSize.indexOf("ch")
        } catch (n) {
            e = !1
        }
        return e
    }), Modernizr.addTest("cssexunit", function() {
        var e, t = modElem.elem.style;
        try {
            t.fontSize = "3ex", e = -1 !== t.fontSize.indexOf("ex")
        } catch (n) {
            e = !1
        }
        return e
    }), Modernizr.addTest("hsla", function() {
        var e = createElement("a").style;
        return e.cssText = "background-color:hsla(120,40%,100%,.5)", contains(e.backgroundColor, "rgba") || contains(e.backgroundColor, "hsla")
    }), testStyles("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}", function(e) {
        var t = e.childNodes[2],
            n = e.childNodes[1],
            i = e.childNodes[0],
            a = parseInt((n.offsetWidth - n.clientWidth) / 2, 10),
            s = i.clientWidth / 100,
            o = i.clientHeight / 100,
            r = parseInt(50 * Math.max(s, o), 10),
            d = parseInt((window.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).width, 10);
        Modernizr.addTest("cssvmaxunit", roundedEquals(r, d) || roundedEquals(r, d - a))
    }, 3), testStyles("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}", function(e) {
        var t = e.childNodes[2],
            n = e.childNodes[1],
            i = e.childNodes[0],
            a = parseInt((n.offsetWidth - n.clientWidth) / 2, 10),
            s = i.clientWidth / 100,
            o = i.clientHeight / 100,
            r = parseInt(50 * Math.min(s, o), 10),
            d = parseInt((window.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).width, 10);
        Modernizr.addTest("cssvminunit", roundedEquals(r, d) || roundedEquals(r, d - a))
    }, 3);
    var testXhrType = function(e) {
        if ("undefined" == typeof XMLHttpRequest) return !1;
        var t = new XMLHttpRequest;
        t.open("get", "/", !0);
        try {
            t.responseType = e
        } catch (n) {
            return !1
        }
        return "response" in t && t.responseType == e
    };
    Modernizr.addTest("xhrresponsetypearraybuffer", testXhrType("arraybuffer")), Modernizr.addTest("xhrresponsetypeblob", testXhrType("blob")), Modernizr.addTest("xhrresponsetypedocument", testXhrType("document")), Modernizr.addTest("xhrresponsetypejson", testXhrType("json")), Modernizr.addTest("xhrresponsetypetext", testXhrType("text"));
    var toStringFn = {}.toString;
    Modernizr.addTest("svgclippaths", function() {
        return !!document.createElementNS && /SVGClipPath/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg", "clipPath")))
    }), Modernizr.addTest("svgforeignobject", function() {
        return !!document.createElementNS && /SVGForeignObject/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")))
    }), Modernizr.addTest("smil", function() {
        return !!document.createElementNS && /SVGAnimate/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg", "animate")))
    });
    var mStyle = {
        style: modElem.elem.style
    };
    Modernizr._q.unshift(function() {
        delete mStyle.style
    });
    var testProp = ModernizrProto.testProp = function(e, t, n) {
        return testProps([e], undefined, t, n)
    };
    Modernizr.addTest("textshadow", testProp("textShadow", "1px 1px")), ModernizrProto.testAllProps = testPropsAll;
    var prefixed = ModernizrProto.prefixed = function(e, t, n) {
            return 0 === e.indexOf("@") ? atRule(e) : (-1 != e.indexOf("-") && (e = cssToDOM(e)), t ? testPropsAll(e, t, n) : testPropsAll(e, "pfx"))
        },
        prefixedCSS = ModernizrProto.prefixedCSS = function(e) {
            var t = prefixed(e);
            return t && domToCSS(t)
        };
    Modernizr.addTest("forcetouch", function() {
            return hasEvent(prefixed("mouseforcewillbegin", window, !1), window) ? MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN && MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN : !1
        }), Modernizr.addTest("fullscreen", !(!prefixed("exitFullscreen", document, !1) && !prefixed("cancelFullScreen", document, !1))), Modernizr.addTest("backgroundblendmode", prefixed("backgroundBlendMode", "text")), Modernizr.addTest("objectfit", !!prefixed("objectFit"), {
            aliases: ["object-fit"]
        }), Modernizr.addTest("wrapflow", function() {
            var e = prefixed("wrapFlow");
            if (!e || isSVG) return !1;
            var t = e.replace(/([A-Z])/g, function(e, t) {
                    return "-" + t.toLowerCase()
                }).replace(/^ms-/, "-ms-"),
                n = createElement("div"),
                i = createElement("div"),
                a = createElement("span");
            i.style.cssText = "position: absolute; left: 50px; width: 100px; height: 20px;" + t + ":end;", a.innerText = "X", n.appendChild(i), n.appendChild(a), docElement.appendChild(n);
            var s = a.offsetLeft;
            return docElement.removeChild(n), i = a = n = undefined, 150 == s
        }), Modernizr.addTest("filesystem", !!prefixed("requestFileSystem", window)), Modernizr.addTest("requestautocomplete", !!prefixed("requestAutocomplete", createElement("form"))), ModernizrProto.testAllProps = testAllProps, Modernizr.addTest("cssanimations", testAllProps("animationName", "a", !0)), Modernizr.addTest("csspseudoanimations", function() {
            var e = !1;
            if (!Modernizr.cssanimations || !window.getComputedStyle) return e;
            var t = ["@", Modernizr._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; } }@").replace(/\@$/, ""), '#modernizr:before { content:" "; font-size:5px;', Modernizr._prefixes.join("animation:csspseudoanimations 1ms infinite;"), "}"].join("");
            return Modernizr.testStyles(t, function(t) {
                e = "10px" === window.getComputedStyle(t, ":before").getPropertyValue("font-size")
            }), e
        }), Modernizr.addTest("appearance", testAllProps("appearance")), Modernizr.addTest("backdropfilter", testAllProps("backdropFilter")), Modernizr.addTest("backgroundcliptext", function() {
            return testAllProps("backgroundClip", "text")
        }), Modernizr.addTest("bgpositionxy", function() {
            return testAllProps("backgroundPositionX", "3px", !0) && testAllProps("backgroundPositionY", "5px", !0)
        }), Modernizr.addTest("bgrepeatround", testAllProps("backgroundRepeat", "round")), Modernizr.addTest("bgrepeatspace", testAllProps("backgroundRepeat", "space")), Modernizr.addTest("backgroundsize", testAllProps("backgroundSize", "100%", !0)), Modernizr.addTest("bgsizecover", testAllProps("backgroundSize", "cover")), Modernizr.addTest("borderimage", testAllProps("borderImage", "url() 1", !0)), Modernizr.addTest("borderradius", testAllProps("borderRadius", "0px", !0)), Modernizr.addTest("boxshadow", testAllProps("boxShadow", "1px 1px", !0)), Modernizr.addTest("boxsizing", testAllProps("boxSizing", "border-box", !0) && (document.documentMode === undefined || document.documentMode > 7)),
        function() {
            Modernizr.addTest("csscolumns", function() {
                var e = !1,
                    t = testAllProps("columnCount");
                try {
                    (e = !!t) && (e = new Boolean(e))
                } catch (n) {}
                return e
            });
            for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], i = 0; i < n.length; i++) e = n[i].toLowerCase(), t = testAllProps("column" + n[i]), ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || testAllProps(n[i])), Modernizr.addTest("csscolumns." + e, t)
        }(), Modernizr.addTest("displayrunin", testAllProps("display", "run-in"), {
            aliases: ["display-runin"]
        }), Modernizr.addTest("ellipsis", testAllProps("textOverflow", "ellipsis")), Modernizr.addTest("cssfilters", function() {
            if (Modernizr.supports) return testAllProps("filter", "blur(2px)");
            var e = createElement("a");
            return e.style.cssText = prefixes.join("filter:blur(2px); "), !!e.style.length && (document.documentMode === undefined || document.documentMode > 9)
        }), Modernizr.addTest("flexbox", testAllProps("flexBasis", "1px", !0)), Modernizr.addTest("flexboxlegacy", testAllProps("boxDirection", "reverse", !0)), Modernizr.addTest("flexboxtweener", testAllProps("flexAlign", "end", !0)), Modernizr.addTest("flexwrap", testAllProps("flexWrap", "wrap", !0)), Modernizr.addAsyncTest(function() {
            function e() {
                function n() {
                    try {
                        var e = createElement("div"),
                            t = createElement("span"),
                            n = e.style,
                            i = 0,
                            a = 0,
                            s = !1,
                            o = document.body.firstElementChild || document.body.firstChild;
                        return e.appendChild(t), t.innerHTML = "Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.", document.body.insertBefore(e, o), n.cssText = "position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;", i = t.offsetHeight, a = t.offsetWidth, n.cssText = "position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;" + prefixes.join("hyphens:auto; "), s = t.offsetHeight != i || t.offsetWidth != a, document.body.removeChild(e), e.removeChild(t), s
                    } catch (r) {
                        return !1
                    }
                }

                function i(e, t) {
                    try {
                        var n = createElement("div"),
                            i = createElement("span"),
                            a = n.style,
                            s = 0,
                            o = !1,
                            r = !1,
                            d = !1,
                            l = document.body.firstElementChild || document.body.firstChild;
                        return a.cssText = "position:absolute;top:0;left:0;overflow:visible;width:1.25em;", n.appendChild(i), document.body.insertBefore(n, l), i.innerHTML = "mm", s = i.offsetHeight, i.innerHTML = "m" + e + "m", r = i.offsetHeight > s, t ? (i.innerHTML = "m<br />m", s = i.offsetWidth, i.innerHTML = "m" + e + "m", d = i.offsetWidth > s) : d = !0, r === !0 && d === !0 && (o = !0), document.body.removeChild(n), n.removeChild(i), o
                    } catch (u) {
                        return !1
                    }
                }

                function a(e) {
                    try {
                        var t, n = createElement("input"),
                            i = createElement("div"),
                            a = "lebowski",
                            s = !1,
                            o = document.body.firstElementChild || document.body.firstChild;
                        i.innerHTML = a + e + a, document.body.insertBefore(i, o), document.body.insertBefore(n, i), n.setSelectionRange ? (n.focus(), n.setSelectionRange(0, 0)) : n.createTextRange && (t = n.createTextRange(), t.collapse(!0), t.moveEnd("character", 0), t.moveStart("character", 0), t.select());
                        try {
                            window.find ? s = window.find(a + a) : (t = window.self.document.body.createTextRange(), s = t.findText(a + a))
                        } catch (r) {
                            s = !1
                        }
                        return document.body.removeChild(i), document.body.removeChild(n), s
                    } catch (r) {
                        return !1
                    }
                }
                return document.body || document.getElementsByTagName("body")[0] ? (addTest("csshyphens", function() {
                    if (!testAllProps("hyphens", "auto", !0)) return !1;
                    try {
                        return n()
                    } catch (e) {
                        return !1
                    }
                }), addTest("softhyphens", function() {
                    try {
                        return i("&#173;", !0) && i("&#8203;", !1)
                    } catch (e) {
                        return !1
                    }
                }), void addTest("softhyphensfind", function() {
                    try {
                        return a("&#173;") && a("&#8203;")
                    } catch (e) {
                        return !1
                    }
                })) : void setTimeout(e, t)
            }
            var t = 300;
            setTimeout(e, t)
        }), Modernizr.addTest("cssmask", testAllProps("maskRepeat", "repeat-x", !0)), Modernizr.addTest("overflowscrolling", testAllProps("overflowScrolling", "touch", !0)), Modernizr.addTest("cssreflections", testAllProps("boxReflect", "above", !0)), Modernizr.addTest("cssresize", testAllProps("resize", "both", !0)), Modernizr.addTest("scrollsnappoints", testAllProps("scrollSnapType")), Modernizr.addTest("shapes", testAllProps("shapeOutside", "content-box", !0)), Modernizr.addTest("textalignlast", testAllProps("textAlignLast")), Modernizr.addTest("csstransforms", function() {
            return -1 === navigator.userAgent.indexOf("Android 2.") && testAllProps("transform", "scale(1)", !0)
        }), Modernizr.addTest("csstransforms3d", function() {
            var e = !!testAllProps("perspective", "1px", !0),
                t = Modernizr._config.usePrefixes;
            if (e && (!t || "webkitPerspective" in docElement.style)) {
                var n, i = "#modernizr{width:0;height:0}";
                Modernizr.supports ? n = "@supports (perspective: 1px)" : (n = "@media (transform-3d)", t && (n += ",(-webkit-transform-3d)")), n += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", testStyles(i + n, function(t) {
                    e = 7 === t.offsetWidth && 18 === t.offsetHeight
                })
            }
            return e
        }), Modernizr.addTest("csstransitions", testAllProps("transition", "all", !0)), Modernizr.addTest("csspseudotransitions", function() {
            var e = !1;
            if (!Modernizr.csstransitions || !window.getComputedStyle) return e;
            var t = '#modernizr:before { content:" "; font-size:5px;' + Modernizr._prefixes.join("transition:0s 100s;") + "}#modernizr.trigger:before { font-size:10px; }";
            return Modernizr.testStyles(t, function(t) {
                window.getComputedStyle(t, ":before").getPropertyValue("font-size"), t.className += "trigger", e = "5px" === window.getComputedStyle(t, ":before").getPropertyValue("font-size")
            }), e
        }), Modernizr.addTest("userselect", testAllProps("userSelect", "none", !0)), testRunner(), setClasses(classes), delete ModernizrProto.addTest, delete ModernizrProto.addAsyncTest;
    for (var i = 0; i < Modernizr._q.length; i++) Modernizr._q[i]();
    window.Modernizr = Modernizr
}(window, document),
function(e) {
    var t = !1;
    if ("function" == typeof define && define.amd && (define(e), t = !0), "object" == typeof exports && (module.exports = e(), t = !0), !t) {
        var n = window.Cookies,
            i = window.Cookies = e();
        i.noConflict = function() {
            return window.Cookies = n, i
        }
    }
}(function() {
    function e() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) t[i] = n[i]
        }
        return t
    }

    function t(n) {
        function i(t, a, s) {
            var o;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if (s = e({
                            path: "/"
                        }, i.defaults, s), "number" == typeof s.expires) {
                        var r = new Date;
                        r.setMilliseconds(r.getMilliseconds() + 864e5 * s.expires), s.expires = r
                    }
                    try {
                        o = JSON.stringify(a), /^[\{\[]/.test(o) && (a = o)
                    } catch (d) {}
                    return a = n.write ? n.write(a, t) : encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape), document.cookie = [t, "=", a, s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("")
                }
                t || (o = {});
                for (var l = document.cookie ? document.cookie.split("; ") : [], u = /(%[0-9A-Z]{2})+/g, c = 0; c < l.length; c++) {
                    var h = l[c].split("="),
                        m = h.slice(1).join("=");
                    '"' === m.charAt(0) && (m = m.slice(1, -1));
                    try {
                        var p = h[0].replace(u, decodeURIComponent);
                        if (m = n.read ? n.read(m, p) : n(m, p) || m.replace(u, decodeURIComponent), this.json) try {
                            m = JSON.parse(m)
                        } catch (d) {}
                        if (t === p) {
                            o = m;
                            break
                        }
                        t || (o[p] = m)
                    } catch (d) {}
                }
                return o
            }
        }
        return i.set = i, i.get = function(e) {
            return i.call(i, e)
        }, i.getJSON = function() {
            return i.apply({
                json: !0
            }, [].slice.call(arguments))
        }, i.defaults = {}, i.remove = function(t, n) {
            i(t, "", e(n, {
                expires: -1
            }))
        }, i.withConverter = t, i
    }
    return t(function() {})
}), Date.CultureInfo = {
        name: "en-US",
        englishName: "English (United States)",
        nativeName: "English (United States)",
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        amDesignator: "AM",
        pmDesignator: "PM",
        firstDayOfWeek: 0,
        twoDigitYearMax: 2029,
        dateElementOrder: "mdy",
        formatPatterns: {
            shortDate: "M/d/yyyy",
            longDate: "dddd, MMMM dd, yyyy",
            shortTime: "h:mm tt",
            longTime: "h:mm:ss tt",
            fullDateTime: "dddd, MMMM dd, yyyy h:mm:ss tt",
            sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
            universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
            rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
            monthDay: "MMMM dd",
            yearMonth: "MMMM, yyyy"
        },
        regexPatterns: {
            jan: /^jan(uary)?/i,
            feb: /^feb(ruary)?/i,
            mar: /^mar(ch)?/i,
            apr: /^apr(il)?/i,
            may: /^may/i,
            jun: /^jun(e)?/i,
            jul: /^jul(y)?/i,
            aug: /^aug(ust)?/i,
            sep: /^sep(t(ember)?)?/i,
            oct: /^oct(ober)?/i,
            nov: /^nov(ember)?/i,
            dec: /^dec(ember)?/i,
            sun: /^su(n(day)?)?/i,
            mon: /^mo(n(day)?)?/i,
            tue: /^tu(e(s(day)?)?)?/i,
            wed: /^we(d(nesday)?)?/i,
            thu: /^th(u(r(s(day)?)?)?)?/i,
            fri: /^fr(i(day)?)?/i,
            sat: /^sa(t(urday)?)?/i,
            future: /^next/i,
            past: /^last|past|prev(ious)?/i,
            add: /^(\+|after|from)/i,
            subtract: /^(\-|before|ago)/i,
            yesterday: /^yesterday/i,
            today: /^t(oday)?/i,
            tomorrow: /^tomorrow/i,
            now: /^n(ow)?/i,
            millisecond: /^ms|milli(second)?s?/i,
            second: /^sec(ond)?s?/i,
            minute: /^min(ute)?s?/i,
            hour: /^h(ou)?rs?/i,
            week: /^w(ee)?k/i,
            month: /^m(o(nth)?s?)?/i,
            day: /^d(ays?)?/i,
            year: /^y((ea)?rs?)?/i,
            shortMeridian: /^(a|p)/i,
            longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
            timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
            ordinalSuffix: /^\s*(st|nd|rd|th)/i,
            timeContext: /^\s*(\:|a|p)/i
        },
        abbreviatedTimeZoneStandard: {
            GMT: "-000",
            EST: "-0400",
            CST: "-0500",
            MST: "-0600",
            PST: "-0700"
        },
        abbreviatedTimeZoneDST: {
            GMT: "-000",
            EDT: "-0500",
            CDT: "-0600",
            MDT: "-0700",
            PDT: "-0800"
        }
    }, Date.getMonthNumberFromName = function(e) {
        for (var t = Date.CultureInfo.monthNames, n = Date.CultureInfo.abbreviatedMonthNames, i = e.toLowerCase(), a = 0; a < t.length; a++)
            if (t[a].toLowerCase() == i || n[a].toLowerCase() == i) return a;
        return -1
    }, Date.getDayNumberFromName = function(e) {
        for (var t = Date.CultureInfo.dayNames, n = Date.CultureInfo.abbreviatedDayNames, i = (Date.CultureInfo.shortestDayNames, e.toLowerCase()), a = 0; a < t.length; a++)
            if (t[a].toLowerCase() == i || n[a].toLowerCase() == i) return a;
        return -1
    }, Date.isLeapYear = function(e) {
        return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
    }, Date.getDaysInMonth = function(e, t) {
        return [31, Date.isLeapYear(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
    }, Date.getTimezoneOffset = function(e, t) {
        return t ? Date.CultureInfo.abbreviatedTimeZoneDST[e.toUpperCase()] : Date.CultureInfo.abbreviatedTimeZoneStandard[e.toUpperCase()]
    }, Date.getTimezoneAbbreviation = function(e, t) {
        var n, i = t ? Date.CultureInfo.abbreviatedTimeZoneDST : Date.CultureInfo.abbreviatedTimeZoneStandard;
        for (n in i)
            if (i[n] === e) return n;
        return null
    }, Date.prototype.clone = function() {
        return new Date(this.getTime())
    }, Date.prototype.compareTo = function(e) {
        if (isNaN(this)) throw new Error(this);
        if (e instanceof Date && !isNaN(e)) return this > e ? 1 : e > this ? -1 : 0;
        throw new TypeError(e)
    }, Date.prototype.equals = function(e) {
        return 0 === this.compareTo(e)
    }, Date.prototype.between = function(e, t) {
        var n = this.getTime();
        return n >= e.getTime() && n <= t.getTime()
    }, Date.prototype.addMilliseconds = function(e) {
        return this.setMilliseconds(this.getMilliseconds() + e), this
    }, Date.prototype.addSeconds = function(e) {
        return this.addMilliseconds(1e3 * e)
    }, Date.prototype.addMinutes = function(e) {
        return this.addMilliseconds(6e4 * e)
    }, Date.prototype.addHours = function(e) {
        return this.addMilliseconds(36e5 * e)
    }, Date.prototype.addDays = function(e) {
        return this.addMilliseconds(864e5 * e)
    }, Date.prototype.addWeeks = function(e) {
        return this.addMilliseconds(6048e5 * e)
    }, Date.prototype.addMonths = function(e) {
        var t = this.getDate();
        return this.setDate(1), this.setMonth(this.getMonth() + e), this.setDate(Math.min(t, this.getDaysInMonth())), this
    }, Date.prototype.addYears = function(e) {
        return this.addMonths(12 * e)
    }, Date.prototype.add = function(e) {
        if ("number" == typeof e) return this._orient = e, this;
        var t = e;
        return (t.millisecond || t.milliseconds) && this.addMilliseconds(t.millisecond || t.milliseconds), (t.second || t.seconds) && this.addSeconds(t.second || t.seconds), (t.minute || t.minutes) && this.addMinutes(t.minute || t.minutes), (t.hour || t.hours) && this.addHours(t.hour || t.hours), (t.month || t.months) && this.addMonths(t.month || t.months), (t.year || t.years) && this.addYears(t.year || t.years), (t.day || t.days) && this.addDays(t.day || t.days), this
    }, Date._validate = function(e, t, n, i) {
        if ("number" != typeof e) throw new TypeError(e + " is not a Number.");
        if (t > e || e > n) throw new RangeError(e + " is not a valid value for " + i + ".");
        return !0
    }, Date.validateMillisecond = function(e) {
        return Date._validate(e, 0, 999, "milliseconds")
    }, Date.validateSecond = function(e) {
        return Date._validate(e, 0, 59, "seconds")
    }, Date.validateMinute = function(e) {
        return Date._validate(e, 0, 59, "minutes")
    }, Date.validateHour = function(e) {
        return Date._validate(e, 0, 23, "hours")
    }, Date.validateDay = function(e, t, n) {
        return Date._validate(e, 1, Date.getDaysInMonth(t, n), "days")
    }, Date.validateMonth = function(e) {
        return Date._validate(e, 0, 11, "months")
    }, Date.validateYear = function(e) {
        return Date._validate(e, 1, 9999, "seconds")
    }, Date.prototype.set = function(e) {
        var t = e;
        return t.millisecond || 0 === t.millisecond || (t.millisecond = -1), t.second || 0 === t.second || (t.second = -1), t.minute || 0 === t.minute || (t.minute = -1), t.hour || 0 === t.hour || (t.hour = -1), t.day || 0 === t.day || (t.day = -1), t.month || 0 === t.month || (t.month = -1), t.year || 0 === t.year || (t.year = -1), -1 != t.millisecond && Date.validateMillisecond(t.millisecond) && this.addMilliseconds(t.millisecond - this.getMilliseconds()), -1 != t.second && Date.validateSecond(t.second) && this.addSeconds(t.second - this.getSeconds()), -1 != t.minute && Date.validateMinute(t.minute) && this.addMinutes(t.minute - this.getMinutes()), -1 != t.hour && Date.validateHour(t.hour) && this.addHours(t.hour - this.getHours()), -1 !== t.month && Date.validateMonth(t.month) && this.addMonths(t.month - this.getMonth()), -1 != t.year && Date.validateYear(t.year) && this.addYears(t.year - this.getFullYear()), -1 != t.day && Date.validateDay(t.day, this.getFullYear(), this.getMonth()) && this.addDays(t.day - this.getDate()), t.timezone && this.setTimezone(t.timezone), t.timezoneOffset && this.setTimezoneOffset(t.timezoneOffset), this
    }, Date.prototype.clearTime = function() {
        return this.setHours(0), this.setMinutes(0), this.setSeconds(0), this.setMilliseconds(0), this
    }, Date.prototype.isLeapYear = function() {
        var e = this.getFullYear();
        return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
    }, Date.prototype.isWeekday = function() {
        return !(this.is().sat() || this.is().sun())
    }, Date.prototype.getDaysInMonth = function() {
        return Date.getDaysInMonth(this.getFullYear(), this.getMonth())
    }, Date.prototype.moveToFirstDayOfMonth = function() {
        return this.set({
            day: 1
        })
    }, Date.prototype.moveToLastDayOfMonth = function() {
        return this.set({
            day: this.getDaysInMonth()
        })
    }, Date.prototype.moveToDayOfWeek = function(e, t) {
        var n = (e - this.getDay() + 7 * (t || 1)) % 7;
        return this.addDays(0 === n ? n += 7 * (t || 1) : n)
    }, Date.prototype.moveToMonth = function(e, t) {
        var n = (e - this.getMonth() + 12 * (t || 1)) % 12;
        return this.addMonths(0 === n ? n += 12 * (t || 1) : n)
    }, Date.prototype.getDayOfYear = function() {
        return Math.floor((this - new Date(this.getFullYear(), 0, 1)) / 864e5)
    }, Date.prototype.getWeekOfYear = function(e) {
        var t = this.getFullYear(),
            n = this.getMonth(),
            i = this.getDate(),
            a = e || Date.CultureInfo.firstDayOfWeek,
            s = 8 - new Date(t, 0, 1).getDay();
        8 == s && (s = 1);
        var o = (Date.UTC(t, n, i, 0, 0, 0) - Date.UTC(t, 0, 1, 0, 0, 0)) / 864e5 + 1,
            r = Math.floor((o - s + 7) / 7);
        if (r === a) {
            t--;
            var d = 8 - new Date(t, 0, 1).getDay();
            r = 2 == d || 8 == d ? 53 : 52
        }
        return r
    }, Date.prototype.isDST = function() {
        return console.log("isDST"), "D" == this.toString().match(/(E|C|M|P)(S|D)T/)[2]
    }, Date.prototype.getTimezone = function() {
        return Date.getTimezoneAbbreviation(this.getUTCOffset, this.isDST())
    }, Date.prototype.setTimezoneOffset = function(e) {
        var t = this.getTimezoneOffset(),
            n = -6 * Number(e) / 10;
        return this.addMinutes(n - t), this
    }, Date.prototype.setTimezone = function(e) {
        return this.setTimezoneOffset(Date.getTimezoneOffset(e))
    }, Date.prototype.getUTCOffset = function() {
        var e, t = -10 * this.getTimezoneOffset() / 6;
        return 0 > t ? (e = (t - 1e4).toString(), e[0] + e.substr(2)) : (e = (t + 1e4).toString(), "+" + e.substr(1))
    }, Date.prototype.getDayName = function(e) {
        return e ? Date.CultureInfo.abbreviatedDayNames[this.getDay()] : Date.CultureInfo.dayNames[this.getDay()]
    }, Date.prototype.getMonthName = function(e) {
        return e ? Date.CultureInfo.abbreviatedMonthNames[this.getMonth()] : Date.CultureInfo.monthNames[this.getMonth()]
    }, Date.prototype._toString = Date.prototype.toString, Date.prototype.toString = function(e) {
        var t = this,
            n = function(e) {
                return 1 == e.toString().length ? "0" + e : e
            };
        return e ? e.replace(/dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?/g, function(e) {
            switch (e) {
                case "hh":
                    return n(t.getHours() < 13 ? t.getHours() : t.getHours() - 12);
                case "h":
                    return t.getHours() < 13 ? t.getHours() : t.getHours() - 12;
                case "HH":
                    return n(t.getHours());
                case "H":
                    return t.getHours();
                case "mm":
                    return n(t.getMinutes());
                case "m":
                    return t.getMinutes();
                case "ss":
                    return n(t.getSeconds());
                case "s":
                    return t.getSeconds();
                case "yyyy":
                    return t.getFullYear();
                case "yy":
                    return t.getFullYear().toString().substring(2, 4);
                case "dddd":
                    return t.getDayName();
                case "ddd":
                    return t.getDayName(!0);
                case "dd":
                    return n(t.getDate());
                case "d":
                    return t.getDate().toString();
                case "MMMM":
                    return t.getMonthName();
                case "MMM":
                    return t.getMonthName(!0);
                case "MM":
                    return n(t.getMonth() + 1);
                case "M":
                    return t.getMonth() + 1;
                case "t":
                    return t.getHours() < 12 ? Date.CultureInfo.amDesignator.substring(0, 1) : Date.CultureInfo.pmDesignator.substring(0, 1);
                case "tt":
                    return t.getHours() < 12 ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator;
                case "zzz":
                case "zz":
                case "z":
                    return ""
            }
        }) : this._toString()
    }, Date.now = function() {
        return new Date
    }, Date.today = function() {
        return Date.now().clearTime()
    }, Date.prototype._orient = 1, Date.prototype.next = function() {
        return this._orient = 1, this
    }, Date.prototype.last = Date.prototype.prev = Date.prototype.previous = function() {
        return this._orient = -1, this
    }, Date.prototype._is = !1, Date.prototype.is = function() {
        return this._is = !0, this
    }, Number.prototype._dateElement = "day", Number.prototype.fromNow = function() {
        var e = {};
        return e[this._dateElement] = this, Date.now().add(e)
    }, Number.prototype.ago = function() {
        var e = {};
        return e[this._dateElement] = -1 * this, Date.now().add(e)
    },
    function() {
        for (var e, t = Date.prototype, n = Number.prototype, i = "sunday monday tuesday wednesday thursday friday saturday".split(/\s/), a = "january february march april may june july august september october november december".split(/\s/), s = "Millisecond Second Minute Hour Day Week Month Year".split(/\s/), o = function(e) {
                return function() {
                    return this._is ? (this._is = !1, this.getDay() == e) : this.moveToDayOfWeek(e, this._orient)
                }
            }, r = 0; r < i.length; r++) t[i[r]] = t[i[r].substring(0, 3)] = o(r);
        for (var d = function(e) {
                return function() {
                    return this._is ? (this._is = !1, this.getMonth() === e) : this.moveToMonth(e, this._orient)
                }
            }, l = 0; l < a.length; l++) t[a[l]] = t[a[l].substring(0, 3)] = d(l);
        for (var u = function(e) {
                return function() {
                    return "s" != e.substring(e.length - 1) && (e += "s"), this["add" + e](this._orient)
                }
            }, c = function(e) {
                return function() {
                    return this._dateElement = e, this
                }
            }, h = 0; h < s.length; h++) e = s[h].toLowerCase(), t[e] = t[e + "s"] = u(s[h]), n[e] = n[e + "s"] = c(e)
    }(), Date.prototype.toJSONString = function() {
        return this.toString("yyyy-MM-ddThh:mm:ssZ")
    }, Date.prototype.toShortDateString = function() {
        return this.toString(Date.CultureInfo.formatPatterns.shortDatePattern)
    }, Date.prototype.toLongDateString = function() {
        return this.toString(Date.CultureInfo.formatPatterns.longDatePattern)
    }, Date.prototype.toShortTimeString = function() {
        return this.toString(Date.CultureInfo.formatPatterns.shortTimePattern)
    }, Date.prototype.toLongTimeString = function() {
        return this.toString(Date.CultureInfo.formatPatterns.longTimePattern)
    }, Date.prototype.getOrdinal = function() {
        switch (this.getDate()) {
            case 1:
            case 21:
            case 31:
                return "st";
            case 2:
            case 22:
                return "nd";
            case 3:
            case 23:
                return "rd";
            default:
                return "th"
        }
    },
    function() {
        Date.Parsing = {
            Exception: function(e) {
                this.message = "Parse error at '" + e.substring(0, 10) + " ...'"
            }
        };
        for (var e = Date.Parsing, t = e.Operators = {
                rtoken: function(t) {
                    return function(n) {
                        var i = n.match(t);
                        if (i) return [i[0], n.substring(i[0].length)];
                        throw new e.Exception(n)
                    }
                },
                token: function(e) {
                    return function(e) {
                        return t.rtoken(new RegExp("^s*" + e + "s*"))(e)
                    }
                },
                stoken: function(e) {
                    return t.rtoken(new RegExp("^" + e))
                },
                until: function(e) {
                    return function(t) {
                        for (var n = [], i = null; t.length;) {
                            try {
                                i = e.call(this, t)
                            } catch (a) {
                                n.push(i[0]), t = i[1];
                                continue
                            }
                            break
                        }
                        return [n, t]
                    }
                },
                many: function(e) {
                    return function(t) {
                        for (var n = [], i = null; t.length;) {
                            try {
                                i = e.call(this, t)
                            } catch (a) {
                                return [n, t]
                            }
                            n.push(i[0]), t = i[1]
                        }
                        return [n, t]
                    }
                },
                optional: function(e) {
                    return function(t) {
                        var n = null;
                        try {
                            n = e.call(this, t)
                        } catch (i) {
                            return [null, t]
                        }
                        return [n[0], n[1]]
                    }
                },
                not: function(t) {
                    return function(n) {
                        try {
                            t.call(this, n)
                        } catch (i) {
                            return [null, n]
                        }
                        throw new e.Exception(n)
                    }
                },
                ignore: function(e) {
                    return e ? function(t) {
                        var n = null;
                        return n = e.call(this, t), [null, n[1]]
                    } : null
                },
                product: function() {
                    for (var e = arguments[0], n = Array.prototype.slice.call(arguments, 1), i = [], a = 0; a < e.length; a++) i.push(t.each(e[a], n));
                    return i
                },
                cache: function(t) {
                    var n = {},
                        i = null;
                    return function(a) {
                        try {
                            i = n[a] = n[a] || t.call(this, a)
                        } catch (s) {
                            i = n[a] = s
                        }
                        if (i instanceof e.Exception) throw i;
                        return i
                    }
                },
                any: function() {
                    var t = arguments;
                    return function(n) {
                        for (var i = null, a = 0; a < t.length; a++)
                            if (null != t[a]) {
                                try {
                                    i = t[a].call(this, n)
                                } catch (s) {
                                    i = null
                                }
                                if (i) return i
                            }
                        throw new e.Exception(n)
                    }
                },
                each: function() {
                    var t = arguments;
                    return function(n) {
                        for (var i = [], a = null, s = 0; s < t.length; s++)
                            if (null != t[s]) {
                                try {
                                    a = t[s].call(this, n)
                                } catch (o) {
                                    throw new e.Exception(n)
                                }
                                i.push(a[0]), n = a[1]
                            }
                        return [i, n]
                    }
                },
                all: function() {
                    var e = arguments,
                        t = t;
                    return t.each(t.optional(e))
                },
                sequence: function(n, i, a) {
                    return i = i || t.rtoken(/^\s*/), a = a || null, 1 == n.length ? n[0] : function(t) {
                        for (var s = null, o = null, r = [], d = 0; d < n.length; d++) {
                            try {
                                s = n[d].call(this, t)
                            } catch (l) {
                                break
                            }
                            r.push(s[0]);
                            try {
                                o = i.call(this, s[1])
                            } catch (u) {
                                o = null;
                                break
                            }
                            t = o[1]
                        }
                        if (!s) throw new e.Exception(t);
                        if (o) throw new e.Exception(o[1]);
                        if (a) try {
                            s = a.call(this, s[1])
                        } catch (c) {
                            throw new e.Exception(s[1])
                        }
                        return [r, s ? s[1] : t]
                    }
                },
                between: function(e, n, i) {
                    i = i || e;
                    var a = t.each(t.ignore(e), n, t.ignore(i));
                    return function(e) {
                        var t = a.call(this, e);
                        return [
                            [t[0][0], r[0][2]], t[1]
                        ]
                    }
                },
                list: function(e, n, i) {
                    return n = n || t.rtoken(/^\s*/), i = i || null, e instanceof Array ? t.each(t.product(e.slice(0, -1), t.ignore(n)), e.slice(-1), t.ignore(i)) : t.each(t.many(t.each(e, t.ignore(n))), px, t.ignore(i))
                },
                set: function(n, i, a) {
                    return i = i || t.rtoken(/^\s*/), a = a || null,
                        function(s) {
                            for (var o = null, r = null, d = null, l = null, u = [
                                    [], s
                                ], c = !1, h = 0; h < n.length; h++) {
                                d = null, r = null, o = null, c = 1 == n.length;
                                try {
                                    o = n[h].call(this, s)
                                } catch (m) {
                                    continue
                                }
                                if (l = [
                                        [o[0]], o[1]
                                    ], o[1].length > 0 && !c) try {
                                    d = i.call(this, o[1])
                                } catch (p) {
                                    c = !0
                                } else c = !0;
                                if (c || 0 !== d[1].length || (c = !0), !c) {
                                    for (var f = [], _ = 0; _ < n.length; _++) h != _ && f.push(n[_]);
                                    r = t.set(f, i).call(this, d[1]), r[0].length > 0 && (l[0] = l[0].concat(r[0]), l[1] = r[1])
                                }
                                if (l[1].length < u[1].length && (u = l), 0 === u[1].length) break
                            }
                            if (0 === u[0].length) return u;
                            if (a) {
                                try {
                                    d = a.call(this, u[1])
                                } catch (y) {
                                    throw new e.Exception(u[1])
                                }
                                u[1] = d[1]
                            }
                            return u
                        }
                },
                forward: function(e, t) {
                    return function(n) {
                        return e[t].call(this, n)
                    }
                },
                replace: function(e, t) {
                    return function(n) {
                        var i = e.call(this, n);
                        return [t, i[1]]
                    }
                },
                process: function(e, t) {
                    return function(n) {
                        var i = e.call(this, n);
                        return [t.call(this, i[0]), i[1]]
                    }
                },
                min: function(t, n) {
                    return function(i) {
                        var a = n.call(this, i);
                        if (a[0].length < t) throw new e.Exception(i);
                        return a
                    }
                }
            }, n = function(e) {
                return function() {
                    var t = null,
                        n = [];
                    if (arguments.length > 1 ? t = Array.prototype.slice.call(arguments) : arguments[0] instanceof Array && (t = arguments[0]), !t) return e.apply(null, arguments);
                    for (var i = 0, a = t.shift(); i < a.length; i++) return t.unshift(a[i]), n.push(e.apply(null, t)), t.shift(), n
                }
            }, i = "optional not ignore cache".split(/\s/), a = 0; a < i.length; a++) t[i[a]] = n(t[i[a]]);
        for (var s = function(e) {
                return function() {
                    return arguments[0] instanceof Array ? e.apply(null, arguments[0]) : e.apply(null, arguments)
                }
            }, o = "each any all".split(/\s/), d = 0; d < o.length; d++) t[o[d]] = s(t[o[d]])
    }(),
    function() {
        var e = function(t) {
            for (var n = [], i = 0; i < t.length; i++) t[i] instanceof Array ? n = n.concat(e(t[i])) : t[i] && n.push(t[i]);
            return n
        };
        Date.Grammar = {}, Date.Translator = {
            hour: function(e) {
                return function() {
                    this.hour = Number(e)
                }
            },
            minute: function(e) {
                return function() {
                    this.minute = Number(e)
                }
            },
            second: function(e) {
                return function() {
                    this.second = Number(e)
                }
            },
            meridian: function(e) {
                return function() {
                    this.meridian = e.slice(0, 1).toLowerCase()
                }
            },
            timezone: function(e) {
                return function() {
                    var t = e.replace(/[^\d\+\-]/g, "");
                    t.length ? this.timezoneOffset = Number(t) : this.timezone = e.toLowerCase()
                }
            },
            day: function(e) {
                var t = e[0];
                return function() {
                    this.day = Number(t.match(/\d+/)[0])
                }
            },
            month: function(e) {
                return function() {
                    this.month = 3 == e.length ? Date.getMonthNumberFromName(e) : Number(e) - 1
                }
            },
            year: function(e) {
                return function() {
                    var t = Number(e);
                    this.year = e.length > 2 ? t : t + (t + 2e3 < Date.CultureInfo.twoDigitYearMax ? 2e3 : 1900)
                }
            },
            rday: function(e) {
                return function() {
                    switch (e) {
                        case "yesterday":
                            this.days = -1;
                            break;
                        case "tomorrow":
                            this.days = 1;
                            break;
                        case "today":
                            this.days = 0;
                            break;
                        case "now":
                            this.days = 0, this.now = !0
                    }
                }
            },
            finishExact: function(e) {
                e = e instanceof Array ? e : [e];
                var t = new Date;
                this.year = t.getFullYear(), this.month = t.getMonth(), this.day = 1, this.hour = 0, this.minute = 0, this.second = 0;
                for (var n = 0; n < e.length; n++) e[n] && e[n].call(this);
                if (this.hour = "p" == this.meridian && this.hour < 13 ? this.hour + 12 : this.hour, this.day > Date.getDaysInMonth(this.year, this.month)) throw new RangeError(this.day + " is not a valid value for days.");
                var i = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second);
                return this.timezone ? i.set({
                    timezone: this.timezone
                }) : this.timezoneOffset && i.set({
                    timezoneOffset: this.timezoneOffset
                }), i
            },
            finish: function(t) {
                if (t = t instanceof Array ? e(t) : [t], 0 === t.length) return null;
                for (var n = 0; n < t.length; n++) "function" == typeof t[n] && t[n].call(this);
                if (this.now) return new Date;
                var i = Date.today(),
                    a = !(null == this.days && !this.orient && !this.operator);
                if (a) {
                    var s, o, r;
                    return r = "past" == this.orient || "subtract" == this.operator ? -1 : 1, this.weekday && (this.unit = "day", s = Date.getDayNumberFromName(this.weekday) - i.getDay(), o = 7, this.days = s ? (s + r * o) % o : r * o), this.month && (this.unit = "month", s = this.month - i.getMonth(), o = 12, this.months = s ? (s + r * o) % o : r * o, this.month = null), this.unit || (this.unit = "day"), (null == this[this.unit + "s"] || null != this.operator) && (this.value || (this.value = 1), "week" == this.unit && (this.unit = "day", this.value = 7 * this.value), this[this.unit + "s"] = this.value * r), i.add(this)
                }
                return this.meridian && this.hour && (this.hour = this.hour < 13 && "p" == this.meridian ? this.hour + 12 : this.hour), this.weekday && !this.day && (this.day = i.addDays(Date.getDayNumberFromName(this.weekday) - i.getDay()).getDate()), this.month && !this.day && (this.day = 1), i.set(this)
            }
        };
        var t, n = Date.Parsing.Operators,
            i = Date.Grammar,
            a = Date.Translator;
        i.datePartDelimiter = n.rtoken(/^([\s\-\.\,\/\x27]+)/), i.timePartDelimiter = n.stoken(":"), i.whiteSpace = n.rtoken(/^\s*/), i.generalDelimiter = n.rtoken(/^(([\s\,]|at|on)+)/);
        var s = {};
        i.ctoken = function(e) {
            var t = s[e];
            if (!t) {
                for (var i = Date.CultureInfo.regexPatterns, a = e.split(/\s+/), o = [], r = 0; r < a.length; r++) o.push(n.replace(n.rtoken(i[a[r]]), a[r]));
                t = s[e] = n.any.apply(null, o)
            }
            return t
        }, i.ctoken2 = function(e) {
            return n.rtoken(Date.CultureInfo.regexPatterns[e])
        }, i.h = n.cache(n.process(n.rtoken(/^(0[0-9]|1[0-2]|[1-9])/), a.hour)), i.hh = n.cache(n.process(n.rtoken(/^(0[0-9]|1[0-2])/), a.hour)), i.H = n.cache(n.process(n.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/), a.hour)), i.HH = n.cache(n.process(n.rtoken(/^([0-1][0-9]|2[0-3])/), a.hour)), i.m = n.cache(n.process(n.rtoken(/^([0-5][0-9]|[0-9])/), a.minute)), i.mm = n.cache(n.process(n.rtoken(/^[0-5][0-9]/), a.minute)), i.s = n.cache(n.process(n.rtoken(/^([0-5][0-9]|[0-9])/), a.second)), i.ss = n.cache(n.process(n.rtoken(/^[0-5][0-9]/), a.second)), i.hms = n.cache(n.sequence([i.H, i.mm, i.ss], i.timePartDelimiter)), i.t = n.cache(n.process(i.ctoken2("shortMeridian"), a.meridian)), i.tt = n.cache(n.process(i.ctoken2("longMeridian"), a.meridian)), i.z = n.cache(n.process(n.rtoken(/^(\+|\-)?\s*\d\d\d\d?/), a.timezone)), i.zz = n.cache(n.process(n.rtoken(/^(\+|\-)\s*\d\d\d\d/), a.timezone)), i.zzz = n.cache(n.process(i.ctoken2("timezone"), a.timezone)), i.timeSuffix = n.each(n.ignore(i.whiteSpace), n.set([i.tt, i.zzz])), i.time = n.each(n.optional(n.ignore(n.stoken("T"))), i.hms, i.timeSuffix), i.d = n.cache(n.process(n.each(n.rtoken(/^([0-2]\d|3[0-1]|\d)/), n.optional(i.ctoken2("ordinalSuffix"))), a.day)), i.dd = n.cache(n.process(n.each(n.rtoken(/^([0-2]\d|3[0-1])/), n.optional(i.ctoken2("ordinalSuffix"))), a.day)), i.ddd = i.dddd = n.cache(n.process(i.ctoken("sun mon tue wed thu fri sat"), function(e) {
            return function() {
                this.weekday = e
            }
        })), i.M = n.cache(n.process(n.rtoken(/^(1[0-2]|0\d|\d)/), a.month)), i.MM = n.cache(n.process(n.rtoken(/^(1[0-2]|0\d)/), a.month)), i.MMM = i.MMMM = n.cache(n.process(i.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"), a.month)), i.y = n.cache(n.process(n.rtoken(/^(\d\d?)/), a.year)), i.yy = n.cache(n.process(n.rtoken(/^(\d\d)/), a.year)), i.yyy = n.cache(n.process(n.rtoken(/^(\d\d?\d?\d?)/), a.year)), i.yyyy = n.cache(n.process(n.rtoken(/^(\d\d\d\d)/), a.year)), t = function() {
            return n.each(n.any.apply(null, arguments), n.not(i.ctoken2("timeContext")))
        }, i.day = t(i.d, i.dd), i.month = t(i.M, i.MMM), i.year = t(i.yyyy, i.yy), i.orientation = n.process(i.ctoken("past future"), function(e) {
            return function() {
                this.orient = e
            }
        }), i.operator = n.process(i.ctoken("add subtract"), function(e) {
            return function() {
                this.operator = e
            }
        }), i.rday = n.process(i.ctoken("yesterday tomorrow today now"), a.rday), i.unit = n.process(i.ctoken("minute hour day week month year"), function(e) {
            return function() {
                this.unit = e
            }
        }), i.value = n.process(n.rtoken(/^\d\d?(st|nd|rd|th)?/), function(e) {
            return function() {
                this.value = e.replace(/\D/g, "")
            }
        }), i.expression = n.set([i.rday, i.operator, i.value, i.unit, i.orientation, i.ddd, i.MMM]), t = function() {
            return n.set(arguments, i.datePartDelimiter)
        }, i.mdy = t(i.ddd, i.month, i.day, i.year), i.ymd = t(i.ddd, i.year, i.month, i.day), i.dmy = t(i.ddd, i.day, i.month, i.year), i.date = function(e) {
            return (i[Date.CultureInfo.dateElementOrder] || i.mdy).call(this, e)
        }, i.format = n.process(n.many(n.any(n.process(n.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/), function(e) {
            if (i[e]) return i[e];
            throw Date.Parsing.Exception(e)
        }), n.process(n.rtoken(/^[^dMyhHmstz]+/), function(e) {
            return n.ignore(n.stoken(e))
        }))), function(e) {
            return n.process(n.each.apply(null, e), a.finishExact)
        });
        var o = {},
            r = function(e) {
                return o[e] = o[e] || i.format(e)[0]
            };
        i.formats = function(e) {
            if (e instanceof Array) {
                for (var t = [], i = 0; i < e.length; i++) t.push(r(e[i]));
                return n.any.apply(null, t)
            }
            return r(e)
        }, i._formats = i.formats(["yyyy-MM-ddTHH:mm:ss", "ddd, MMM dd, yyyy H:mm:ss tt", "ddd MMM d yyyy HH:mm:ss zzz", "d"]), i._start = n.process(n.set([i.date, i.time, i.expression], i.generalDelimiter, i.whiteSpace), a.finish), i.start = function(e) {
            try {
                var t = i._formats.call({}, e);
                if (0 === t[1].length) return t
            } catch (n) {}
            return i._start.call({}, e)
        }
    }(), Date._parse = Date.parse, Date.parse = function(e) {
        var t = null;
        if (!e) return null;
        try {
            t = Date.Grammar.start.call({}, e)
        } catch (n) {
            return null
        }
        return 0 === t[1].length ? t[0] : null
    }, Date.getParseFunction = function(e) {
        var t = Date.Grammar.formats(e);
        return function(e) {
            var n = null;
            try {
                n = t.call({}, e)
            } catch (i) {
                return null
            }
            return 0 === n[1].length ? n[0] : null
        }
    }, Date.parseExact = function(e, t) {
        return Date.getParseFunction(t)(e)
    },
    function() {
        function e(e) {
            function t(t, n, i, a, s, o) {
                for (; s >= 0 && o > s; s += e) {
                    var r = a ? a[s] : s;
                    i = n(i, t[r], r, t)
                }
                return i
            }
            return function(n, i, a, s) {
                i = g(i, s, 4);
                var o = !L(n) && A.keys(n),
                    r = (o || n).length,
                    d = e > 0 ? 0 : r - 1;
                return arguments.length < 3 && (a = n[o ? o[d] : d], d += e), t(n, i, a, o, d, r)
            }
        }

        function t(e) {
            return function(t, n, i) {
                n = v(n, i);
                for (var a = D(t), s = e > 0 ? 0 : a - 1; s >= 0 && a > s; s += e)
                    if (n(t[s], s, t)) return s;
                return -1
            }
        }

        function n(e, t, n) {
            return function(i, a, s) {
                var o = 0,
                    r = D(i);
                if ("number" == typeof s) e > 0 ? o = s >= 0 ? s : Math.max(s + r, o) : r = s >= 0 ? Math.min(s + 1, r) : s + r + 1;
                else if (n && s && r) return s = n(i, a), i[s] === a ? s : -1;
                if (a !== a) return s = t(u.call(i, o, r), A.isNaN), s >= 0 ? s + o : -1;
                for (s = e > 0 ? o : r - 1; s >= 0 && r > s; s += e)
                    if (i[s] === a) return s;
                return -1
            }
        }

        function i(e, t) {
            var n = C.length,
                i = e.constructor,
                a = A.isFunction(i) && i.prototype || r,
                s = "constructor";
            for (A.has(e, s) && !A.contains(t, s) && t.push(s); n--;) s = C[n], s in e && e[s] !== a[s] && !A.contains(t, s) && t.push(s)
        }
        var a = this,
            s = a._,
            o = Array.prototype,
            r = Object.prototype,
            d = Function.prototype,
            l = o.push,
            u = o.slice,
            c = r.toString,
            h = r.hasOwnProperty,
            m = Array.isArray,
            p = Object.keys,
            f = d.bind,
            _ = Object.create,
            y = function() {},
            A = function(e) {
                return e instanceof A ? e : this instanceof A ? void(this._wrapped = e) : new A(e)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = A), exports._ = A) : a._ = A, A.VERSION = "1.8.3";
        var g = function(e, t, n) {
                if (void 0 === t) return e;
                switch (null == n ? 3 : n) {
                    case 1:
                        return function(n) {
                            return e.call(t, n)
                        };
                    case 2:
                        return function(n, i) {
                            return e.call(t, n, i)
                        };
                    case 3:
                        return function(n, i, a) {
                            return e.call(t, n, i, a)
                        };
                    case 4:
                        return function(n, i, a, s) {
                            return e.call(t, n, i, a, s)
                        }
                }
                return function() {
                    return e.apply(t, arguments)
                }
            },
            v = function(e, t, n) {
                return null == e ? A.identity : A.isFunction(e) ? g(e, t, n) : A.isObject(e) ? A.matcher(e) : A.property(e)
            };
        A.iteratee = function(e, t) {
            return v(e, t, 1 / 0)
        };
        var M = function(e, t) {
                return function(n) {
                    var i = arguments.length;
                    if (2 > i || null == n) return n;
                    for (var a = 1; i > a; a++)
                        for (var s = arguments[a], o = e(s), r = o.length, d = 0; r > d; d++) {
                            var l = o[d];
                            t && void 0 !== n[l] || (n[l] = s[l])
                        }
                    return n
                }
            },
            w = function(e) {
                if (!A.isObject(e)) return {};
                if (_) return _(e);
                y.prototype = e;
                var t = new y;
                return y.prototype = null, t
            },
            k = function(e) {
                return function(t) {
                    return null == t ? void 0 : t[e]
                }
            },
            b = Math.pow(2, 53) - 1,
            D = k("length"),
            L = function(e) {
                var t = D(e);
                return "number" == typeof t && t >= 0 && b >= t
            };
        A.each = A.forEach = function(e, t, n) {
            t = g(t, n);
            var i, a;
            if (L(e))
                for (i = 0, a = e.length; a > i; i++) t(e[i], i, e);
            else {
                var s = A.keys(e);
                for (i = 0, a = s.length; a > i; i++) t(e[s[i]], s[i], e)
            }
            return e
        }, A.map = A.collect = function(e, t, n) {
            t = v(t, n);
            for (var i = !L(e) && A.keys(e), a = (i || e).length, s = Array(a), o = 0; a > o; o++) {
                var r = i ? i[o] : o;
                s[o] = t(e[r], r, e)
            }
            return s
        }, A.reduce = A.foldl = A.inject = e(1), A.reduceRight = A.foldr = e(-1), A.find = A.detect = function(e, t, n) {
            var i;
            return i = L(e) ? A.findIndex(e, t, n) : A.findKey(e, t, n), void 0 !== i && -1 !== i ? e[i] : void 0
        }, A.filter = A.select = function(e, t, n) {
            var i = [];
            return t = v(t, n), A.each(e, function(e, n, a) {
                t(e, n, a) && i.push(e)
            }), i
        }, A.reject = function(e, t, n) {
            return A.filter(e, A.negate(v(t)), n)
        }, A.every = A.all = function(e, t, n) {
            t = v(t, n);
            for (var i = !L(e) && A.keys(e), a = (i || e).length, s = 0; a > s; s++) {
                var o = i ? i[s] : s;
                if (!t(e[o], o, e)) return !1
            }
            return !0
        }, A.some = A.any = function(e, t, n) {
            t = v(t, n);
            for (var i = !L(e) && A.keys(e), a = (i || e).length, s = 0; a > s; s++) {
                var o = i ? i[s] : s;
                if (t(e[o], o, e)) return !0
            }
            return !1
        }, A.contains = A.includes = A.include = function(e, t, n, i) {
            return L(e) || (e = A.values(e)), ("number" != typeof n || i) && (n = 0), A.indexOf(e, t, n) >= 0
        }, A.invoke = function(e, t) {
            var n = u.call(arguments, 2),
                i = A.isFunction(t);
            return A.map(e, function(e) {
                var a = i ? t : e[t];
                return null == a ? a : a.apply(e, n)
            })
        }, A.pluck = function(e, t) {
            return A.map(e, A.property(t))
        }, A.where = function(e, t) {
            return A.filter(e, A.matcher(t))
        }, A.findWhere = function(e, t) {
            return A.find(e, A.matcher(t))
        }, A.max = function(e, t, n) {
            var i, a, s = -1 / 0,
                o = -1 / 0;
            if (null == t && null != e) {
                e = L(e) ? e : A.values(e);
                for (var r = 0, d = e.length; d > r; r++) i = e[r], i > s && (s = i)
            } else t = v(t, n), A.each(e, function(e, n, i) {
                a = t(e, n, i), (a > o || a === -1 / 0 && s === -1 / 0) && (s = e, o = a)
            });
            return s
        }, A.min = function(e, t, n) {
            var i, a, s = 1 / 0,
                o = 1 / 0;
            if (null == t && null != e) {
                e = L(e) ? e : A.values(e);
                for (var r = 0, d = e.length; d > r; r++) i = e[r], s > i && (s = i)
            } else t = v(t, n), A.each(e, function(e, n, i) {
                a = t(e, n, i), (o > a || 1 / 0 === a && 1 / 0 === s) && (s = e, o = a)
            });
            return s
        }, A.shuffle = function(e) {
            for (var t, n = L(e) ? e : A.values(e), i = n.length, a = Array(i), s = 0; i > s; s++) t = A.random(0, s), t !== s && (a[s] = a[t]), a[t] = n[s];
            return a
        }, A.sample = function(e, t, n) {
            return null == t || n ? (L(e) || (e = A.values(e)), e[A.random(e.length - 1)]) : A.shuffle(e).slice(0, Math.max(0, t))
        }, A.sortBy = function(e, t, n) {
            return t = v(t, n), A.pluck(A.map(e, function(e, n, i) {
                return {
                    value: e,
                    index: n,
                    criteria: t(e, n, i)
                }
            }).sort(function(e, t) {
                var n = e.criteria,
                    i = t.criteria;
                if (n !== i) {
                    if (n > i || void 0 === n) return 1;
                    if (i > n || void 0 === i) return -1
                }
                return e.index - t.index
            }), "value")
        };
        var Y = function(e) {
            return function(t, n, i) {
                var a = {};
                return n = v(n, i), A.each(t, function(i, s) {
                    var o = n(i, s, t);
                    e(a, i, o)
                }), a
            }
        };
        A.groupBy = Y(function(e, t, n) {
            A.has(e, n) ? e[n].push(t) : e[n] = [t]
        }), A.indexBy = Y(function(e, t, n) {
            e[n] = t
        }), A.countBy = Y(function(e, t, n) {
            A.has(e, n) ? e[n]++ : e[n] = 1
        }), A.toArray = function(e) {
            return e ? A.isArray(e) ? u.call(e) : L(e) ? A.map(e, A.identity) : A.values(e) : []
        }, A.size = function(e) {
            return null == e ? 0 : L(e) ? e.length : A.keys(e).length
        }, A.partition = function(e, t, n) {
            t = v(t, n);
            var i = [],
                a = [];
            return A.each(e, function(e, n, s) {
                (t(e, n, s) ? i : a).push(e)
            }), [i, a]
        }, A.first = A.head = A.take = function(e, t, n) {
            return null == e ? void 0 : null == t || n ? e[0] : A.initial(e, e.length - t)
        }, A.initial = function(e, t, n) {
            return u.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
        }, A.last = function(e, t, n) {
            return null == e ? void 0 : null == t || n ? e[e.length - 1] : A.rest(e, Math.max(0, e.length - t))
        }, A.rest = A.tail = A.drop = function(e, t, n) {
            return u.call(e, null == t || n ? 1 : t)
        }, A.compact = function(e) {
            return A.filter(e, A.identity)
        };
        var T = function(e, t, n, i) {
            for (var a = [], s = 0, o = i || 0, r = D(e); r > o; o++) {
                var d = e[o];
                if (L(d) && (A.isArray(d) || A.isArguments(d))) {
                    t || (d = T(d, t, n));
                    var l = 0,
                        u = d.length;
                    for (a.length += u; u > l;) a[s++] = d[l++]
                } else n || (a[s++] = d)
            }
            return a
        };
        A.flatten = function(e, t) {
            return T(e, t, !1)
        }, A.without = function(e) {
            return A.difference(e, u.call(arguments, 1))
        }, A.uniq = A.unique = function(e, t, n, i) {
            A.isBoolean(t) || (i = n, n = t, t = !1), null != n && (n = v(n, i));
            for (var a = [], s = [], o = 0, r = D(e); r > o; o++) {
                var d = e[o],
                    l = n ? n(d, o, e) : d;
                t ? (o && s === l || a.push(d), s = l) : n ? A.contains(s, l) || (s.push(l), a.push(d)) : A.contains(a, d) || a.push(d)
            }
            return a
        }, A.union = function() {
            return A.uniq(T(arguments, !0, !0))
        }, A.intersection = function(e) {
            for (var t = [], n = arguments.length, i = 0, a = D(e); a > i; i++) {
                var s = e[i];
                if (!A.contains(t, s)) {
                    for (var o = 1; n > o && A.contains(arguments[o], s); o++);
                    o === n && t.push(s)
                }
            }
            return t
        }, A.difference = function(e) {
            var t = T(arguments, !0, !0, 1);
            return A.filter(e, function(e) {
                return !A.contains(t, e)
            })
        }, A.zip = function() {
            return A.unzip(arguments)
        }, A.unzip = function(e) {
            for (var t = e && A.max(e, D).length || 0, n = Array(t), i = 0; t > i; i++) n[i] = A.pluck(e, i);
            return n
        }, A.object = function(e, t) {
            for (var n = {}, i = 0, a = D(e); a > i; i++) t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
            return n
        }, A.findIndex = t(1), A.findLastIndex = t(-1), A.sortedIndex = function(e, t, n, i) {
            n = v(n, i, 1);
            for (var a = n(t), s = 0, o = D(e); o > s;) {
                var r = Math.floor((s + o) / 2);
                n(e[r]) < a ? s = r + 1 : o = r
            }
            return s
        }, A.indexOf = n(1, A.findIndex, A.sortedIndex), A.lastIndexOf = n(-1, A.findLastIndex), A.range = function(e, t, n) {
            null == t && (t = e || 0, e = 0), n = n || 1;
            for (var i = Math.max(Math.ceil((t - e) / n), 0), a = Array(i), s = 0; i > s; s++, e += n) a[s] = e;
            return a
        };
        var S = function(e, t, n, i, a) {
            if (!(i instanceof t)) return e.apply(n, a);
            var s = w(e.prototype),
                o = e.apply(s, a);
            return A.isObject(o) ? o : s
        };
        A.bind = function(e, t) {
            if (f && e.bind === f) return f.apply(e, u.call(arguments, 1));
            if (!A.isFunction(e)) throw new TypeError("Bind must be called on a function");
            var n = u.call(arguments, 2),
                i = function() {
                    return S(e, i, t, this, n.concat(u.call(arguments)))
                };
            return i
        }, A.partial = function(e) {
            var t = u.call(arguments, 1),
                n = function() {
                    for (var i = 0, a = t.length, s = Array(a), o = 0; a > o; o++) s[o] = t[o] === A ? arguments[i++] : t[o];
                    for (; i < arguments.length;) s.push(arguments[i++]);
                    return S(e, n, this, this, s)
                };
            return n
        }, A.bindAll = function(e) {
            var t, n, i = arguments.length;
            if (1 >= i) throw new Error("bindAll must be passed function names");
            for (t = 1; i > t; t++) n = arguments[t], e[n] = A.bind(e[n], e);
            return e
        }, A.memoize = function(e, t) {
            var n = function(i) {
                var a = n.cache,
                    s = "" + (t ? t.apply(this, arguments) : i);
                return A.has(a, s) || (a[s] = e.apply(this, arguments)), a[s]
            };
            return n.cache = {}, n
        }, A.delay = function(e, t) {
            var n = u.call(arguments, 2);
            return setTimeout(function() {
                return e.apply(null, n)
            }, t)
        }, A.defer = A.partial(A.delay, A, 1), A.throttle = function(e, t, n) {
            var i, a, s, o = null,
                r = 0;
            n || (n = {});
            var d = function() {
                r = n.leading === !1 ? 0 : A.now(), o = null, s = e.apply(i, a), o || (i = a = null)
            };
            return function() {
                var l = A.now();
                r || n.leading !== !1 || (r = l);
                var u = t - (l - r);
                return i = this, a = arguments, 0 >= u || u > t ? (o && (clearTimeout(o), o = null), r = l, s = e.apply(i, a), o || (i = a = null)) : o || n.trailing === !1 || (o = setTimeout(d, u)), s
            }
        }, A.debounce = function(e, t, n) {
            var i, a, s, o, r, d = function() {
                var l = A.now() - o;
                t > l && l >= 0 ? i = setTimeout(d, t - l) : (i = null, n || (r = e.apply(s, a), i || (s = a = null)))
            };
            return function() {
                s = this, a = arguments, o = A.now();
                var l = n && !i;
                return i || (i = setTimeout(d, t)), l && (r = e.apply(s, a), s = a = null), r
            }
        }, A.wrap = function(e, t) {
            return A.partial(t, e)
        }, A.negate = function(e) {
            return function() {
                return !e.apply(this, arguments)
            }
        }, A.compose = function() {
            var e = arguments,
                t = e.length - 1;
            return function() {
                for (var n = t, i = e[t].apply(this, arguments); n--;) i = e[n].call(this, i);
                return i
            }
        }, A.after = function(e, t) {
            return function() {
                return --e < 1 ? t.apply(this, arguments) : void 0
            }
        }, A.before = function(e, t) {
            var n;
            return function() {
                return --e > 0 && (n = t.apply(this, arguments)), 1 >= e && (t = null), n
            }
        }, A.once = A.partial(A.before, 2);
        var x = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            C = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
        A.keys = function(e) {
            if (!A.isObject(e)) return [];
            if (p) return p(e);
            var t = [];
            for (var n in e) A.has(e, n) && t.push(n);
            return x && i(e, t), t
        }, A.allKeys = function(e) {
            if (!A.isObject(e)) return [];
            var t = [];
            for (var n in e) t.push(n);
            return x && i(e, t), t
        }, A.values = function(e) {
            for (var t = A.keys(e), n = t.length, i = Array(n), a = 0; n > a; a++) i[a] = e[t[a]];
            return i
        }, A.mapObject = function(e, t, n) {
            t = v(t, n);
            for (var i, a = A.keys(e), s = a.length, o = {}, r = 0; s > r; r++) i = a[r], o[i] = t(e[i], i, e);
            return o
        }, A.pairs = function(e) {
            for (var t = A.keys(e), n = t.length, i = Array(n), a = 0; n > a; a++) i[a] = [t[a], e[t[a]]];
            return i
        }, A.invert = function(e) {
            for (var t = {}, n = A.keys(e), i = 0, a = n.length; a > i; i++) t[e[n[i]]] = n[i];
            return t
        }, A.functions = A.methods = function(e) {
            var t = [];
            for (var n in e) A.isFunction(e[n]) && t.push(n);
            return t.sort()
        }, A.extend = M(A.allKeys), A.extendOwn = A.assign = M(A.keys), A.findKey = function(e, t, n) {
            t = v(t, n);
            for (var i, a = A.keys(e), s = 0, o = a.length; o > s; s++)
                if (i = a[s],
                    t(e[i], i, e)) return i
        }, A.pick = function(e, t, n) {
            var i, a, s = {},
                o = e;
            if (null == o) return s;
            A.isFunction(t) ? (a = A.allKeys(o), i = g(t, n)) : (a = T(arguments, !1, !1, 1), i = function(e, t, n) {
                return t in n
            }, o = Object(o));
            for (var r = 0, d = a.length; d > r; r++) {
                var l = a[r],
                    u = o[l];
                i(u, l, o) && (s[l] = u)
            }
            return s
        }, A.omit = function(e, t, n) {
            if (A.isFunction(t)) t = A.negate(t);
            else {
                var i = A.map(T(arguments, !1, !1, 1), String);
                t = function(e, t) {
                    return !A.contains(i, t)
                }
            }
            return A.pick(e, t, n)
        }, A.defaults = M(A.allKeys, !0), A.create = function(e, t) {
            var n = w(e);
            return t && A.extendOwn(n, t), n
        }, A.clone = function(e) {
            return A.isObject(e) ? A.isArray(e) ? e.slice() : A.extend({}, e) : e
        }, A.tap = function(e, t) {
            return t(e), e
        }, A.isMatch = function(e, t) {
            var n = A.keys(t),
                i = n.length;
            if (null == e) return !i;
            for (var a = Object(e), s = 0; i > s; s++) {
                var o = n[s];
                if (t[o] !== a[o] || !(o in a)) return !1
            }
            return !0
        };
        var P = function(e, t, n, i) {
            if (e === t) return 0 !== e || 1 / e === 1 / t;
            if (null == e || null == t) return e === t;
            e instanceof A && (e = e._wrapped), t instanceof A && (t = t._wrapped);
            var a = c.call(e);
            if (a !== c.call(t)) return !1;
            switch (a) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + e == "" + t;
                case "[object Number]":
                    return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +e === +t
            }
            var s = "[object Array]" === a;
            if (!s) {
                if ("object" != typeof e || "object" != typeof t) return !1;
                var o = e.constructor,
                    r = t.constructor;
                if (o !== r && !(A.isFunction(o) && o instanceof o && A.isFunction(r) && r instanceof r) && "constructor" in e && "constructor" in t) return !1
            }
            n = n || [], i = i || [];
            for (var d = n.length; d--;)
                if (n[d] === e) return i[d] === t;
            if (n.push(e), i.push(t), s) {
                if (d = e.length, d !== t.length) return !1;
                for (; d--;)
                    if (!P(e[d], t[d], n, i)) return !1
            } else {
                var l, u = A.keys(e);
                if (d = u.length, A.keys(t).length !== d) return !1;
                for (; d--;)
                    if (l = u[d], !A.has(t, l) || !P(e[l], t[l], n, i)) return !1
            }
            return n.pop(), i.pop(), !0
        };
        A.isEqual = function(e, t) {
            return P(e, t)
        }, A.isEmpty = function(e) {
            return null == e ? !0 : L(e) && (A.isArray(e) || A.isString(e) || A.isArguments(e)) ? 0 === e.length : 0 === A.keys(e).length
        }, A.isElement = function(e) {
            return !(!e || 1 !== e.nodeType)
        }, A.isArray = m || function(e) {
            return "[object Array]" === c.call(e)
        }, A.isObject = function(e) {
            var t = typeof e;
            return "function" === t || "object" === t && !!e
        }, A.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
            A["is" + e] = function(t) {
                return c.call(t) === "[object " + e + "]"
            }
        }), A.isArguments(arguments) || (A.isArguments = function(e) {
            return A.has(e, "callee")
        }), "function" != typeof /./ && "object" != typeof Int8Array && (A.isFunction = function(e) {
            return "function" == typeof e || !1
        }), A.isFinite = function(e) {
            return isFinite(e) && !isNaN(parseFloat(e))
        }, A.isNaN = function(e) {
            return A.isNumber(e) && e !== +e
        }, A.isBoolean = function(e) {
            return e === !0 || e === !1 || "[object Boolean]" === c.call(e)
        }, A.isNull = function(e) {
            return null === e
        }, A.isUndefined = function(e) {
            return void 0 === e
        }, A.has = function(e, t) {
            return null != e && h.call(e, t)
        }, A.noConflict = function() {
            return a._ = s, this
        }, A.identity = function(e) {
            return e
        }, A.constant = function(e) {
            return function() {
                return e
            }
        }, A.noop = function() {}, A.property = k, A.propertyOf = function(e) {
            return null == e ? function() {} : function(t) {
                return e[t]
            }
        }, A.matcher = A.matches = function(e) {
            return e = A.extendOwn({}, e),
                function(t) {
                    return A.isMatch(t, e)
                }
        }, A.times = function(e, t, n) {
            var i = Array(Math.max(0, e));
            t = g(t, n, 1);
            for (var a = 0; e > a; a++) i[a] = t(a);
            return i
        }, A.random = function(e, t) {
            return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
        }, A.now = Date.now || function() {
            return (new Date).getTime()
        };
        var E = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            H = A.invert(E),
            O = function(e) {
                var t = function(t) {
                        return e[t]
                    },
                    n = "(?:" + A.keys(e).join("|") + ")",
                    i = RegExp(n),
                    a = RegExp(n, "g");
                return function(e) {
                    return e = null == e ? "" : "" + e, i.test(e) ? e.replace(a, t) : e
                }
            };
        A.escape = O(E), A.unescape = O(H), A.result = function(e, t, n) {
            var i = null == e ? void 0 : e[t];
            return void 0 === i && (i = n), A.isFunction(i) ? i.call(e) : i
        };
        var z = 0;
        A.uniqueId = function(e) {
            var t = ++z + "";
            return e ? e + t : t
        }, A.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var j = /(.)^/,
            $ = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            F = /\\|'|\r|\n|\u2028|\u2029/g,
            I = function(e) {
                return "\\" + $[e]
            };
        A.template = function(e, t, n) {
            !t && n && (t = n), t = A.defaults({}, t, A.templateSettings);
            var i = RegExp([(t.escape || j).source, (t.interpolate || j).source, (t.evaluate || j).source].join("|") + "|$", "g"),
                a = 0,
                s = "__p+='";
            e.replace(i, function(t, n, i, o, r) {
                return s += e.slice(a, r).replace(F, I), a = r + t.length, n ? s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? s += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : o && (s += "';\n" + o + "\n__p+='"), t
            }), s += "';\n", t.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
            try {
                var o = new Function(t.variable || "obj", "_", s)
            } catch (r) {
                throw r.source = s, r
            }
            var d = function(e) {
                    return o.call(this, e, A)
                },
                l = t.variable || "obj";
            return d.source = "function(" + l + "){\n" + s + "}", d
        }, A.chain = function(e) {
            var t = A(e);
            return t._chain = !0, t
        };
        var W = function(e, t) {
            return e._chain ? A(t).chain() : t
        };
        A.mixin = function(e) {
            A.each(A.functions(e), function(t) {
                var n = A[t] = e[t];
                A.prototype[t] = function() {
                    var e = [this._wrapped];
                    return l.apply(e, arguments), W(this, n.apply(A, e))
                }
            })
        }, A.mixin(A), A.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
            var t = o[e];
            A.prototype[e] = function() {
                var n = this._wrapped;
                return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], W(this, n)
            }
        }), A.each(["concat", "join", "slice"], function(e) {
            var t = o[e];
            A.prototype[e] = function() {
                return W(this, t.apply(this._wrapped, arguments))
            }
        }), A.prototype.value = function() {
            return this._wrapped
        }, A.prototype.valueOf = A.prototype.toJSON = A.prototype.value, A.prototype.toString = function() {
            return "" + this._wrapped
        }, "function" == typeof define && define.amd && define("underscore", [], function() {
            return A
        })
    }.call(this), ! function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
    }(this, function() {
        "use strict";

        function e() {
            return Ot.apply(null, arguments)
        }

        function t(e) {
            return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
        }

        function n(e) {
            return null != e && "[object Object]" === Object.prototype.toString.call(e)
        }

        function i(e) {
            return void 0 === e
        }

        function a(e) {
            return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
        }

        function s(e) {
            return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
        }

        function o(e, t) {
            var n, i = [];
            for (n = 0; n < e.length; ++n) i.push(t(e[n], n));
            return i
        }

        function r(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }

        function d(e, t) {
            for (var n in t) r(t, n) && (e[n] = t[n]);
            return r(t, "toString") && (e.toString = t.toString), r(t, "valueOf") && (e.valueOf = t.valueOf), e
        }

        function l(e, t, n, i) {
            return ye(e, t, n, i, !0).utc()
        }

        function u(e) {
            return null == e._pf && (e._pf = {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1,
                parsedDateParts: [],
                meridiem: null,
                rfc2822: !1,
                weekdayMismatch: !1
            }), e._pf
        }

        function c(e) {
            if (null == e._isValid) {
                var t = u(e),
                    n = zt.call(t.parsedDateParts, function(e) {
                        return null != e
                    }),
                    i = !(isNaN(e._d.getTime()) || !(t.overflow < 0) || t.empty || t.invalidMonth || t.invalidWeekday || t.weekdayMismatch || t.nullInput || t.invalidFormat || t.userInvalidated || !(!t.meridiem || t.meridiem && n));
                if (e._strict && (i = i && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return i;
                e._isValid = i
            }
            return e._isValid
        }

        function h(e) {
            var t = l(0 / 0);
            return null != e ? d(u(t), e) : u(t).userInvalidated = !0, t
        }

        function m(e, t) {
            var n, a, s;
            if (i(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), i(t._i) || (e._i = t._i), i(t._f) || (e._f = t._f), i(t._l) || (e._l = t._l), i(t._strict) || (e._strict = t._strict), i(t._tzm) || (e._tzm = t._tzm), i(t._isUTC) || (e._isUTC = t._isUTC), i(t._offset) || (e._offset = t._offset), i(t._pf) || (e._pf = u(t)), i(t._locale) || (e._locale = t._locale), jt.length > 0)
                for (n = 0; n < jt.length; n++) i(s = t[a = jt[n]]) || (e[a] = s);
            return e
        }

        function p(t) {
            m(this, t), this._d = new Date(null != t._d ? t._d.getTime() : 0 / 0), this.isValid() || (this._d = new Date(0 / 0)), !1 === $t && ($t = !0, e.updateOffset(this), $t = !1)
        }

        function f(e) {
            return e instanceof p || null != e && null != e._isAMomentObject
        }

        function _(e) {
            return 0 > e ? Math.ceil(e) || 0 : Math.floor(e)
        }

        function y(e) {
            var t = +e,
                n = 0;
            return 0 !== t && isFinite(t) && (n = _(t)), n
        }

        function A(e, t, n) {
            var i, a = Math.min(e.length, t.length),
                s = Math.abs(e.length - t.length),
                o = 0;
            for (i = 0; a > i; i++)(n && e[i] !== t[i] || !n && y(e[i]) !== y(t[i])) && o++;
            return o + s
        }

        function g(t) {
            !1 === e.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
        }

        function v(t, n) {
            var i = !0;
            return d(function() {
                if (null != e.deprecationHandler && e.deprecationHandler(null, t), i) {
                    for (var a, s = [], o = 0; o < arguments.length; o++) {
                        if (a = "", "object" == typeof arguments[o]) {
                            a += "\n[" + o + "] ";
                            for (var r in arguments[0]) a += r + ": " + arguments[0][r] + ", ";
                            a = a.slice(0, -2)
                        } else a = arguments[o];
                        s.push(a)
                    }
                    g(t + "\nArguments: " + Array.prototype.slice.call(s).join("") + "\n" + (new Error).stack), i = !1
                }
                return n.apply(this, arguments)
            }, n)
        }

        function M(t, n) {
            null != e.deprecationHandler && e.deprecationHandler(t, n), Ft[t] || (g(n), Ft[t] = !0)
        }

        function w(e) {
            return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
        }

        function k(e, t) {
            var i, a = d({}, e);
            for (i in t) r(t, i) && (n(e[i]) && n(t[i]) ? (a[i] = {}, d(a[i], e[i]), d(a[i], t[i])) : null != t[i] ? a[i] = t[i] : delete a[i]);
            for (i in e) r(e, i) && !r(t, i) && n(e[i]) && (a[i] = d({}, a[i]));
            return a
        }

        function b(e) {
            null != e && this.set(e)
        }

        function D(e, t) {
            var n = e.toLowerCase();
            Wt[n] = Wt[n + "s"] = Wt[t] = e
        }

        function L(e) {
            return "string" == typeof e ? Wt[e] || Wt[e.toLowerCase()] : void 0
        }

        function Y(e) {
            var t, n, i = {};
            for (n in e) r(e, n) && (t = L(n)) && (i[t] = e[n]);
            return i
        }

        function T(e, t) {
            Bt[e] = t
        }

        function S(e, t, n) {
            var i = "" + Math.abs(e),
                a = t - i.length;
            return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + i
        }

        function x(e, t, n, i) {
            var a = i;
            "string" == typeof i && (a = function() {
                return this[i]()
            }), e && (Ut[e] = a), t && (Ut[t[0]] = function() {
                return S(a.apply(this, arguments), t[1], t[2])
            }), n && (Ut[n] = function() {
                return this.localeData().ordinal(a.apply(this, arguments), e)
            })
        }

        function C(e) {
            return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
        }

        function P(e, t) {
            return e.isValid() ? (t = E(t, e.localeData()), Qt[t] = Qt[t] || function(e) {
                var t, n, i = e.match(Rt);
                for (t = 0, n = i.length; n > t; t++) i[t] = Ut[i[t]] ? Ut[i[t]] : C(i[t]);
                return function(t) {
                    var a, s = "";
                    for (a = 0; n > a; a++) s += w(i[a]) ? i[a].call(t, e) : i[a];
                    return s
                }
            }(t), Qt[t](e)) : e.localeData().invalidDate()
        }

        function E(e, t) {
            function n(e) {
                return t.longDateFormat(e) || e
            }
            var i = 5;
            for (qt.lastIndex = 0; i >= 0 && qt.test(e);) e = e.replace(qt, n), qt.lastIndex = 0, i -= 1;
            return e
        }

        function H(e, t, n) {
            un[e] = w(t) ? t : function(e, i) {
                return e && n ? n : t
            }
        }

        function O(e, t) {
            return r(un, e) ? un[e](t._strict, t._locale) : new RegExp(function(e) {
                return z(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, i, a) {
                    return t || n || i || a
                }))
            }(e))
        }

        function z(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function j(e, t) {
            var n, i = t;
            for ("string" == typeof e && (e = [e]), a(t) && (i = function(e, n) {
                    n[t] = y(e)
                }), n = 0; n < e.length; n++) cn[e[n]] = i
        }

        function $(e, t) {
            j(e, function(e, n, i, a) {
                i._w = i._w || {}, t(e, i._w, i, a)
            })
        }

        function F(e, t, n) {
            null != t && r(cn, e) && cn[e](t, n._a, n, e)
        }

        function I(e) {
            return W(e) ? 366 : 365
        }

        function W(e) {
            return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
        }

        function B(t, n) {
            return function(i) {
                return null != i ? (q(this, t, i), e.updateOffset(this, n), this) : R(this, t)
            }
        }

        function R(e, t) {
            return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : 0 / 0
        }

        function q(e, t, n) {
            e.isValid() && !isNaN(n) && ("FullYear" === t && W(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Q(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
        }

        function Q(e, t) {
            if (isNaN(e) || isNaN(t)) return 0 / 0;
            var n = function(e, t) {
                return (e % t + t) % t
            }(t, 12);
            return e += (t - n) / 12, 1 === n ? W(e) ? 29 : 28 : 31 - n % 7 % 2
        }

        function U(e, t) {
            var n;
            if (!e.isValid()) return e;
            if ("string" == typeof t)
                if (/^\d+$/.test(t)) t = y(t);
                else if (t = e.localeData().monthsParse(t), !a(t)) return e;
            return n = Math.min(e.date(), Q(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
        }

        function N(t) {
            return null != t ? (U(this, t), e.updateOffset(this, !0), this) : R(this, "Month")
        }

        function G() {
            function e(e, t) {
                return t.length - e.length
            }
            var t, n, i = [],
                a = [],
                s = [];
            for (t = 0; 12 > t; t++) n = l([2e3, t]), i.push(this.monthsShort(n, "")), a.push(this.months(n, "")), s.push(this.months(n, "")), s.push(this.monthsShort(n, ""));
            for (i.sort(e), a.sort(e), s.sort(e), t = 0; 12 > t; t++) i[t] = z(i[t]), a[t] = z(a[t]);
            for (t = 0; 24 > t; t++) s[t] = z(s[t]);
            this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
        }

        function V(e) {
            var t = new Date(Date.UTC.apply(null, arguments));
            return 100 > e && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
        }

        function J(e, t, n) {
            var i = 7 + t - n;
            return -((7 + V(e, 0, i).getUTCDay() - t) % 7) + i - 1
        }

        function K(e, t, n, i, a) {
            var s, o, r = 1 + 7 * (t - 1) + (7 + n - i) % 7 + J(e, i, a);
            return 0 >= r ? o = I(s = e - 1) + r : r > I(e) ? (s = e + 1, o = r - I(e)) : (s = e, o = r), {
                year: s,
                dayOfYear: o
            }
        }

        function Z(e, t, n) {
            var i, a, s = J(e.year(), t, n),
                o = Math.floor((e.dayOfYear() - s - 1) / 7) + 1;
            return 1 > o ? i = o + X(a = e.year() - 1, t, n) : o > X(e.year(), t, n) ? (i = o - X(e.year(), t, n), a = e.year() + 1) : (a = e.year(), i = o), {
                week: i,
                year: a
            }
        }

        function X(e, t, n) {
            var i = J(e, t, n),
                a = J(e + 1, t, n);
            return (I(e) - i + a) / 7
        }

        function ee() {
            function e(e, t) {
                return t.length - e.length
            }
            var t, n, i, a, s, o = [],
                r = [],
                d = [],
                u = [];
            for (t = 0; 7 > t; t++) n = l([2e3, 1]).day(t), i = this.weekdaysMin(n, ""), a = this.weekdaysShort(n, ""), s = this.weekdays(n, ""), o.push(i), r.push(a), d.push(s), u.push(i), u.push(a), u.push(s);
            for (o.sort(e), r.sort(e), d.sort(e), u.sort(e), t = 0; 7 > t; t++) r[t] = z(r[t]), d[t] = z(d[t]), u[t] = z(u[t]);
            this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")
        }

        function te() {
            return this.hours() % 12 || 12
        }

        function ne(e, t) {
            x(e, 0, 0, function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), t)
            })
        }

        function ie(e, t) {
            return t._meridiemParse
        }

        function ae(e) {
            return e ? e.toLowerCase().replace("_", "-") : e
        }

        function se(e) {
            var t = null;
            if (!jn[e] && "undefined" != typeof module && module && module.exports) try {
                t = Hn._abbr, require("./locale/" + e), oe(t)
            } catch (e) {}
            return jn[e]
        }

        function oe(e, t) {
            var n;
            return e && (n = i(t) ? de(e) : re(e, t)) && (Hn = n), Hn._abbr
        }

        function re(e, t) {
            if (null !== t) {
                var n = zn;
                if (t.abbr = e, null != jn[e]) M("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = jn[e]._config;
                else if (null != t.parentLocale) {
                    if (null == jn[t.parentLocale]) return $n[t.parentLocale] || ($n[t.parentLocale] = []), $n[t.parentLocale].push({
                        name: e,
                        config: t
                    }), null;
                    n = jn[t.parentLocale]._config
                }
                return jn[e] = new b(k(n, t)), $n[e] && $n[e].forEach(function(e) {
                    re(e.name, e.config)
                }), oe(e), jn[e]
            }
            return delete jn[e], null
        }

        function de(e) {
            var n;
            if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Hn;
            if (!t(e)) {
                if (n = se(e)) return n;
                e = [e]
            }
            return function(e) {
                for (var t, n, i, a, s = 0; s < e.length;) {
                    for (t = (a = ae(e[s]).split("-")).length, n = (n = ae(e[s + 1])) ? n.split("-") : null; t > 0;) {
                        if (i = se(a.slice(0, t).join("-"))) return i;
                        if (n && n.length >= t && A(a, n, !0) >= t - 1) break;
                        t--
                    }
                    s++
                }
                return null
            }(e)
        }

        function le(e) {
            var t, n = e._a;
            return n && -2 === u(e).overflow && (t = n[mn] < 0 || n[mn] > 11 ? mn : n[pn] < 1 || n[pn] > Q(n[hn], n[mn]) ? pn : n[fn] < 0 || n[fn] > 24 || 24 === n[fn] && (0 !== n[_n] || 0 !== n[yn] || 0 !== n[An]) ? fn : n[_n] < 0 || n[_n] > 59 ? _n : n[yn] < 0 || n[yn] > 59 ? yn : n[An] < 0 || n[An] > 999 ? An : -1, u(e)._overflowDayOfYear && (hn > t || t > pn) && (t = pn), u(e)._overflowWeeks && -1 === t && (t = gn), u(e)._overflowWeekday && -1 === t && (t = vn), u(e).overflow = t), e
        }

        function ue(e, t, n) {
            return null != e ? e : null != t ? t : n
        }

        function ce(t) {
            var n, i, a, s, o, r = [];
            if (!t._d) {
                for (a = function(t) {
                        var n = new Date(e.now());
                        return t._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
                    }(t), t._w && null == t._a[pn] && null == t._a[mn] && function(e) {
                        var t, n, i, a, s, o, r, d;
                        if (null != (t = e._w).GG || null != t.W || null != t.E) s = 1, o = 4, n = ue(t.GG, e._a[hn], Z(Ae(), 1, 4).year), i = ue(t.W, 1), ((a = ue(t.E, 1)) < 1 || a > 7) && (d = !0);
                        else {
                            s = e._locale._week.dow, o = e._locale._week.doy;
                            var l = Z(Ae(), s, o);
                            n = ue(t.gg, e._a[hn], l.year), i = ue(t.w, l.week), null != t.d ? ((a = t.d) < 0 || a > 6) && (d = !0) : null != t.e ? (a = t.e + s, (t.e < 0 || t.e > 6) && (d = !0)) : a = s
                        }
                        1 > i || i > X(n, s, o) ? u(e)._overflowWeeks = !0 : null != d ? u(e)._overflowWeekday = !0 : (r = K(n, i, a, s, o), e._a[hn] = r.year, e._dayOfYear = r.dayOfYear)
                    }(t), null != t._dayOfYear && (o = ue(t._a[hn], a[hn]), (t._dayOfYear > I(o) || 0 === t._dayOfYear) && (u(t)._overflowDayOfYear = !0), i = V(o, 0, t._dayOfYear), t._a[mn] = i.getUTCMonth(), t._a[pn] = i.getUTCDate()), n = 0; 3 > n && null == t._a[n]; ++n) t._a[n] = r[n] = a[n];
                for (; 7 > n; n++) t._a[n] = r[n] = null == t._a[n] ? 2 === n ? 1 : 0 : t._a[n];
                24 === t._a[fn] && 0 === t._a[_n] && 0 === t._a[yn] && 0 === t._a[An] && (t._nextDay = !0, t._a[fn] = 0), t._d = (t._useUTC ? V : function(e, t, n, i, a, s, o) {
                    var r = new Date(e, t, n, i, a, s, o);
                    return 100 > e && e >= 0 && isFinite(r.getFullYear()) && r.setFullYear(e), r
                }).apply(null, r), s = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[fn] = 24), t._w && void 0 !== t._w.d && t._w.d !== s && (u(t).weekdayMismatch = !0)
            }
        }

        function he(e) {
            var t, n, i, a, s, o, r = e._i,
                d = Fn.exec(r) || In.exec(r);
            if (d) {
                for (u(e).iso = !0, t = 0, n = Bn.length; n > t; t++)
                    if (Bn[t][1].exec(d[1])) {
                        a = Bn[t][0], i = !1 !== Bn[t][2];
                        break
                    }
                if (null == a) return void(e._isValid = !1);
                if (d[3]) {
                    for (t = 0, n = Rn.length; n > t; t++)
                        if (Rn[t][1].exec(d[3])) {
                            s = (d[2] || " ") + Rn[t][0];
                            break
                        }
                    if (null == s) return void(e._isValid = !1)
                }
                if (!i && null != s) return void(e._isValid = !1);
                if (d[4]) {
                    if (!Wn.exec(d[4])) return void(e._isValid = !1);
                    o = "Z"
                }
                e._f = a + (s || "") + (o || ""), fe(e)
            } else e._isValid = !1
        }

        function me(e, t, n, i, a, s) {
            var o = [function(e) {
                var t = parseInt(e, 10);
                return 49 >= t ? 2e3 + t : 999 >= t ? 1900 + t : t
            }(e), Dn.indexOf(t), parseInt(n, 10), parseInt(i, 10), parseInt(a, 10)];
            return s && o.push(parseInt(s, 10)), o
        }

        function pe(e) {
            var t = Qn.exec(function(e) {
                return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim()
            }(e._i));
            if (t) {
                var n = me(t[4], t[3], t[2], t[5], t[6], t[7]);
                if (! function(e, t, n) {
                        return e && Sn.indexOf(e) !== new Date(t[0], t[1], t[2]).getDay() ? (u(n).weekdayMismatch = !0, n._isValid = !1, !1) : !0
                    }(t[1], n, e)) return;
                e._a = n, e._tzm = function(e, t, n) {
                    if (e) return Un[e];
                    if (t) return 0;
                    var i = parseInt(n, 10),
                        a = i % 100;
                    return (i - a) / 100 * 60 + a
                }(t[8], t[9], t[10]), e._d = V.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), u(e).rfc2822 = !0
            } else e._isValid = !1
        }

        function fe(t) {
            if (t._f !== e.ISO_8601)
                if (t._f !== e.RFC_2822) {
                    t._a = [], u(t).empty = !0;
                    var n, i, a, s, o, r = "" + t._i,
                        d = r.length,
                        l = 0;
                    for (a = E(t._f, t._locale).match(Rt) || [], n = 0; n < a.length; n++) s = a[n], (i = (r.match(O(s, t)) || [])[0]) && ((o = r.substr(0, r.indexOf(i))).length > 0 && u(t).unusedInput.push(o), r = r.slice(r.indexOf(i) + i.length), l += i.length), Ut[s] ? (i ? u(t).empty = !1 : u(t).unusedTokens.push(s), F(s, i, t)) : t._strict && !i && u(t).unusedTokens.push(s);
                    u(t).charsLeftOver = d - l, r.length > 0 && u(t).unusedInput.push(r), t._a[fn] <= 12 && !0 === u(t).bigHour && t._a[fn] > 0 && (u(t).bigHour = void 0), u(t).parsedDateParts = t._a.slice(0), u(t).meridiem = t._meridiem, t._a[fn] = function(e, t, n) {
                        var i;
                        return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((i = e.isPM(n)) && 12 > t && (t += 12), i || 12 !== t || (t = 0), t) : t
                    }(t._locale, t._a[fn], t._meridiem), ce(t), le(t)
                } else pe(t);
            else he(t)
        }

        function _e(r) {
            var l = r._i,
                _ = r._f;
            return r._locale = r._locale || de(r._l), null === l || void 0 === _ && "" === l ? h({
                nullInput: !0
            }) : ("string" == typeof l && (r._i = l = r._locale.preparse(l)), f(l) ? new p(le(l)) : (s(l) ? r._d = l : t(_) ? function(e) {
                var t, n, i, a, s;
                if (0 === e._f.length) return u(e).invalidFormat = !0, void(e._d = new Date(0 / 0));
                for (a = 0; a < e._f.length; a++) s = 0, t = m({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[a], fe(t), c(t) && (s += u(t).charsLeftOver, s += 10 * u(t).unusedTokens.length, u(t).score = s, (null == i || i > s) && (i = s, n = t));
                d(e, n || t)
            }(r) : _ ? fe(r) : function(r) {
                var d = r._i;
                i(d) ? r._d = new Date(e.now()) : s(d) ? r._d = new Date(d.valueOf()) : "string" == typeof d ? function(t) {
                    var n = qn.exec(t._i);
                    null === n ? (he(t), !1 === t._isValid && (delete t._isValid, pe(t), !1 === t._isValid && (delete t._isValid, e.createFromInputFallback(t)))) : t._d = new Date(+n[1])
                }(r) : t(d) ? (r._a = o(d.slice(0), function(e) {
                    return parseInt(e, 10)
                }), ce(r)) : n(d) ? function(e) {
                    if (!e._d) {
                        var t = Y(e._i);
                        e._a = o([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                            return e && parseInt(e, 10)
                        }), ce(e)
                    }
                }(r) : a(d) ? r._d = new Date(d) : e.createFromInputFallback(r)
            }(r), c(r) || (r._d = null), r))
        }

        function ye(e, i, a, s, o) {
            var r = {};
            return !0 !== a && !1 !== a || (s = a, a = void 0), (n(e) && function(e) {
                    if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
                    var t;
                    for (t in e)
                        if (e.hasOwnProperty(t)) return !1;
                    return !0
                }(e) || t(e) && 0 === e.length) && (e = void 0), r._isAMomentObject = !0, r._useUTC = r._isUTC = o, r._l = a, r._i = e, r._f = i, r._strict = s,
                function(e) {
                    var t = new p(le(_e(e)));
                    return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
                }(r)
        }

        function Ae(e, t, n, i) {
            return ye(e, t, n, i, !1)
        }

        function ge(e, n) {
            var i, a;
            if (1 === n.length && t(n[0]) && (n = n[0]), !n.length) return Ae();
            for (i = n[0], a = 1; a < n.length; ++a) n[a].isValid() && !n[a][e](i) || (i = n[a]);
            return i
        }

        function ve(e) {
            var t = Y(e),
                n = t.year || 0,
                i = t.quarter || 0,
                a = t.month || 0,
                s = t.week || 0,
                o = t.day || 0,
                r = t.hour || 0,
                d = t.minute || 0,
                l = t.second || 0,
                u = t.millisecond || 0;
            this._isValid = function(e) {
                for (var t in e)
                    if (-1 === Mn.call(Vn, t) || null != e[t] && isNaN(e[t])) return !1;
                for (var n = !1, i = 0; i < Vn.length; ++i)
                    if (e[Vn[i]]) {
                        if (n) return !1;
                        parseFloat(e[Vn[i]]) !== y(e[Vn[i]]) && (n = !0)
                    }
                return !0
            }(t), this._milliseconds = +u + 1e3 * l + 6e4 * d + 1e3 * r * 60 * 60, this._days = +o + 7 * s, this._months = +a + 3 * i + 12 * n, this._data = {}, this._locale = de(), this._bubble()
        }

        function Me(e) {
            return e instanceof ve
        }

        function we(e) {
            return 0 > e ? -1 * Math.round(-1 * e) : Math.round(e)
        }

        function ke(e, t) {
            x(e, 0, 0, function() {
                var e = this.utcOffset(),
                    n = "+";
                return 0 > e && (e = -e, n = "-"), n + S(~~(e / 60), 2) + t + S(~~e % 60, 2)
            })
        }

        function be(e, t) {
            var n = (t || "").match(e);
            if (null === n) return null;
            var i = ((n[n.length - 1] || []) + "").match(Jn) || ["-", 0, 0],
                a = 60 * i[1] + y(i[2]);
            return 0 === a ? 0 : "+" === i[0] ? a : -a
        }

        function De(t, n) {
            var i, a;
            return n._isUTC ? (i = n.clone(), a = (f(t) || s(t) ? t.valueOf() : Ae(t).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + a), e.updateOffset(i, !1), i) : Ae(t).local()
        }

        function Le(e) {
            return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
        }

        function Ye() {
            return !!this.isValid() && this._isUTC && 0 === this._offset
        }

        function Te(e, t) {
            var n, i, s, o = e,
                d = null;
            return Me(e) ? o = {
                ms: e._milliseconds,
                d: e._days,
                M: e._months
            } : a(e) ? (o = {}, t ? o[t] = e : o.milliseconds = e) : (d = Kn.exec(e)) ? (n = "-" === d[1] ? -1 : 1, o = {
                y: 0,
                d: y(d[pn]) * n,
                h: y(d[fn]) * n,
                m: y(d[_n]) * n,
                s: y(d[yn]) * n,
                ms: y(we(1e3 * d[An])) * n
            }) : (d = Zn.exec(e)) ? (n = "-" === d[1] ? -1 : (d[1], 1), o = {
                y: Se(d[2], n),
                M: Se(d[3], n),
                w: Se(d[4], n),
                d: Se(d[5], n),
                h: Se(d[6], n),
                m: Se(d[7], n),
                s: Se(d[8], n)
            }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (s = function(e, t) {
                var n;
                return e.isValid() && t.isValid() ? (t = De(t, e), e.isBefore(t) ? n = xe(e, t) : ((n = xe(t, e)).milliseconds = -n.milliseconds, n.months = -n.months), n) : {
                    milliseconds: 0,
                    months: 0
                }
            }(Ae(o.from), Ae(o.to)), (o = {}).ms = s.milliseconds, o.M = s.months), i = new ve(o), Me(e) && r(e, "_locale") && (i._locale = e._locale), i
        }

        function Se(e, t) {
            var n = e && parseFloat(e.replace(",", "."));
            return (isNaN(n) ? 0 : n) * t
        }

        function xe(e, t) {
            var n = {
                milliseconds: 0,
                months: 0
            };
            return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
        }

        function Ce(e, t) {
            return function(n, i) {
                var a, s;
                return null === i || isNaN(+i) || (M(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), s = n, n = i, i = s), n = "string" == typeof n ? +n : n, a = Te(n, i), Pe(this, a, e), this
            }
        }

        function Pe(t, n, i, a) {
            var s = n._milliseconds,
                o = we(n._days),
                r = we(n._months);
            t.isValid() && (a = null == a || a, r && U(t, R(t, "Month") + r * i), o && q(t, "Date", R(t, "Date") + o * i), s && t._d.setTime(t._d.valueOf() + s * i), a && e.updateOffset(t, o || r))
        }

        function Ee(e, t) {
            var n, i = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                a = e.clone().add(i, "months");
            return n = 0 > t - a ? (t - a) / (a - e.clone().add(i - 1, "months")) : (t - a) / (e.clone().add(i + 1, "months") - a), -(i + n) || 0
        }

        function He(e) {
            var t;
            return void 0 === e ? this._locale._abbr : (null != (t = de(e)) && (this._locale = t), this)
        }

        function Oe() {
            return this._locale
        }

        function ze(e, t) {
            x(0, [e, e.length], 0, t)
        }

        function je(e, t, n, i, a) {
            var s;
            return null == e ? Z(this, i, a).year : (s = X(e, i, a), t > s && (t = s), function(e, t, n, i, a) {
                var s = K(e, t, n, i, a),
                    o = V(s.year, 0, s.dayOfYear);
                return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this
            }.call(this, e, t, n, i, a))
        }

        function $e(e, t) {
            t[An] = y(1e3 * ("0." + e))
        }

        function Fe(e) {
            return e
        }

        function Ie(e, t, n, i) {
            var a = de(),
                s = l().set(i, t);
            return a[n](s, e)
        }

        function We(e, t, n) {
            if (a(e) && (t = e, e = void 0), e = e || "", null != t) return Ie(e, t, n, "month");
            var i, s = [];
            for (i = 0; 12 > i; i++) s[i] = Ie(e, i, n, "month");
            return s
        }

        function Be(e, t, n, i) {
            "boolean" == typeof e ? (a(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, a(t) && (n = t, t = void 0), t = t || "");
            var s = de(),
                o = e ? s._week.dow : 0;
            if (null != n) return Ie(t, (n + o) % 7, i, "day");
            var r, d = [];
            for (r = 0; 7 > r; r++) d[r] = Ie(t, (r + o) % 7, i, "day");
            return d
        }

        function Re(e, t, n, i) {
            var a = Te(t, n);
            return e._milliseconds += i * a._milliseconds, e._days += i * a._days, e._months += i * a._months, e._bubble()
        }

        function qe(e) {
            return 0 > e ? Math.floor(e) : Math.ceil(e)
        }

        function Qe(e) {
            return 4800 * e / 146097
        }

        function Ue(e) {
            return 146097 * e / 4800
        }

        function Ne(e) {
            return function() {
                return this.as(e)
            }
        }

        function Ge(e) {
            return function() {
                return this.isValid() ? this._data[e] : 0 / 0
            }
        }

        function Ve(e) {
            return (e > 0) - (0 > e) || +e
        }

        function Je() {
            if (!this.isValid()) return this.localeData().invalidDate();
            var e, t, n = Yi(this._milliseconds) / 1e3,
                i = Yi(this._days),
                a = Yi(this._months);
            t = _((e = _(n / 60)) / 60), n %= 60, e %= 60;
            var s = _(a / 12),
                o = a %= 12,
                r = i,
                d = t,
                l = e,
                u = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
                c = this.asSeconds();
            if (!c) return "P0D";
            var h = 0 > c ? "-" : "",
                m = Ve(this._months) !== Ve(c) ? "-" : "",
                p = Ve(this._days) !== Ve(c) ? "-" : "",
                f = Ve(this._milliseconds) !== Ve(c) ? "-" : "";
            return h + "P" + (s ? m + s + "Y" : "") + (o ? m + o + "M" : "") + (r ? p + r + "D" : "") + (d || l || u ? "T" : "") + (d ? f + d + "H" : "") + (l ? f + l + "M" : "") + (u ? f + u + "S" : "")
        }

        function Ke(e, t, n) {
            return "m" === n ? t ? "хвіліна" : "хвіліну" : "h" === n ? t ? "гадзіна" : "гадзіну" : e + " " + function(e, t) {
                var n = e.split("_");
                return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? n[1] : n[2]
            }({
                ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                dd: "дзень_дні_дзён",
                MM: "месяц_месяцы_месяцаў",
                yy: "год_гады_гадоў"
            }[n], +e)
        }

        function Ze(e, t, n) {
            return e + " " + function(e, t) {
                return 2 === t ? function(e) {
                    var t = {
                        m: "v",
                        b: "v",
                        d: "z"
                    };
                    return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
                }(e) : e
            }({
                mm: "munutenn",
                MM: "miz",
                dd: "devezh"
            }[n], e)
        }

        function Xe(e) {
            return e > 9 ? Xe(e % 10) : e
        }

        function et(e, t, n) {
            var i = e + " ";
            switch (n) {
                case "ss":
                    return i += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                case "m":
                    return t ? "jedna minuta" : "jedne minute";
                case "mm":
                    return i += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case "h":
                    return t ? "jedan sat" : "jednog sata";
                case "hh":
                    return i += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case "dd":
                    return i += 1 === e ? "dan" : "dana";
                case "MM":
                    return i += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case "yy":
                    return i += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }

        function tt(e) {
            return e > 1 && 5 > e && 1 != ~~(e / 10)
        }

        function nt(e, t, n, i) {
            var a = e + " ";
            switch (n) {
                case "s":
                    return t || i ? "pár sekund" : "pár sekundami";
                case "ss":
                    return t || i ? a + (tt(e) ? "sekundy" : "sekund") : a + "sekundami";
                case "m":
                    return t ? "minuta" : i ? "minutu" : "minutou";
                case "mm":
                    return t || i ? a + (tt(e) ? "minuty" : "minut") : a + "minutami";
                case "h":
                    return t ? "hodina" : i ? "hodinu" : "hodinou";
                case "hh":
                    return t || i ? a + (tt(e) ? "hodiny" : "hodin") : a + "hodinami";
                case "d":
                    return t || i ? "den" : "dnem";
                case "dd":
                    return t || i ? a + (tt(e) ? "dny" : "dní") : a + "dny";
                case "M":
                    return t || i ? "měsíc" : "měsícem";
                case "MM":
                    return t || i ? a + (tt(e) ? "měsíce" : "měsíců") : a + "měsíci";
                case "y":
                    return t || i ? "rok" : "rokem";
                case "yy":
                    return t || i ? a + (tt(e) ? "roky" : "let") : a + "lety"
            }
        }

        function it(e, t, n, i) {
            var a = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? a[n][0] : a[n][1]
        }

        function at(e, t, n, i) {
            var a = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? a[n][0] : a[n][1]
        }

        function st(e, t, n, i) {
            var a = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? a[n][0] : a[n][1]
        }

        function ot(e, t, n, i) {
            var a = {
                s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                ss: [e + "sekundi", e + "sekundit"],
                m: ["ühe minuti", "üks minut"],
                mm: [e + " minuti", e + " minutit"],
                h: ["ühe tunni", "tund aega", "üks tund"],
                hh: [e + " tunni", e + " tundi"],
                d: ["ühe päeva", "üks päev"],
                M: ["kuu aja", "kuu aega", "üks kuu"],
                MM: [e + " kuu", e + " kuud"],
                y: ["ühe aasta", "aasta", "üks aasta"],
                yy: [e + " aasta", e + " aastat"]
            };
            return t ? a[n][2] ? a[n][2] : a[n][1] : i ? a[n][0] : a[n][1]
        }

        function rt(e, t, n, i) {
            var a = "";
            switch (n) {
                case "s":
                    return i ? "muutaman sekunnin" : "muutama sekunti";
                case "ss":
                    return i ? "sekunnin" : "sekuntia";
                case "m":
                    return i ? "minuutin" : "minuutti";
                case "mm":
                    a = i ? "minuutin" : "minuuttia";
                    break;
                case "h":
                    return i ? "tunnin" : "tunti";
                case "hh":
                    a = i ? "tunnin" : "tuntia";
                    break;
                case "d":
                    return i ? "päivän" : "päivä";
                case "dd":
                    a = i ? "päivän" : "päivää";
                    break;
                case "M":
                    return i ? "kuukauden" : "kuukausi";
                case "MM":
                    a = i ? "kuukauden" : "kuukautta";
                    break;
                case "y":
                    return i ? "vuoden" : "vuosi";
                case "yy":
                    a = i ? "vuoden" : "vuotta"
            }
            return a = function(e, t) {
                return 10 > e ? t ? ua[e] : la[e] : e
            }(e, i) + " " + a
        }

        function dt(e, t, n, i) {
            var a = {
                s: ["thodde secondanim", "thodde second"],
                ss: [e + " secondanim", e + " second"],
                m: ["eka mintan", "ek minute"],
                mm: [e + " mintanim", e + " mintam"],
                h: ["eka horan", "ek hor"],
                hh: [e + " horanim", e + " hor"],
                d: ["eka disan", "ek dis"],
                dd: [e + " disanim", e + " dis"],
                M: ["eka mhoinean", "ek mhoino"],
                MM: [e + " mhoineanim", e + " mhoine"],
                y: ["eka vorsan", "ek voros"],
                yy: [e + " vorsanim", e + " vorsam"]
            };
            return t ? a[n][0] : a[n][1]
        }

        function lt(e, t, n) {
            var i = e + " ";
            switch (n) {
                case "ss":
                    return i += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                case "m":
                    return t ? "jedna minuta" : "jedne minute";
                case "mm":
                    return i += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case "h":
                    return t ? "jedan sat" : "jednog sata";
                case "hh":
                    return i += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case "dd":
                    return i += 1 === e ? "dan" : "dana";
                case "MM":
                    return i += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case "yy":
                    return i += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }

        function ut(e, t, n, i) {
            var a = e;
            switch (n) {
                case "s":
                    return i || t ? "néhány másodperc" : "néhány másodperce";
                case "ss":
                    return a + (i || t) ? " másodperc" : " másodperce";
                case "m":
                    return "egy" + (i || t ? " perc" : " perce");
                case "mm":
                    return a + (i || t ? " perc" : " perce");
                case "h":
                    return "egy" + (i || t ? " óra" : " órája");
                case "hh":
                    return a + (i || t ? " óra" : " órája");
                case "d":
                    return "egy" + (i || t ? " nap" : " napja");
                case "dd":
                    return a + (i || t ? " nap" : " napja");
                case "M":
                    return "egy" + (i || t ? " hónap" : " hónapja");
                case "MM":
                    return a + (i || t ? " hónap" : " hónapja");
                case "y":
                    return "egy" + (i || t ? " év" : " éve");
                case "yy":
                    return a + (i || t ? " év" : " éve")
            }
            return ""
        }

        function ct(e) {
            return (e ? "" : "[múlt] ") + "[" + ya[this.day()] + "] LT[-kor]"
        }

        function ht(e) {
            return e % 100 == 11 || e % 10 != 1
        }

        function mt(e, t, n, i) {
            var a = e + " ";
            switch (n) {
                case "s":
                    return t || i ? "nokkrar sekúndur" : "nokkrum sekúndum";
                case "ss":
                    return ht(e) ? a + (t || i ? "sekúndur" : "sekúndum") : a + "sekúnda";
                case "m":
                    return t ? "mínúta" : "mínútu";
                case "mm":
                    return ht(e) ? a + (t || i ? "mínútur" : "mínútum") : t ? a + "mínúta" : a + "mínútu";
                case "hh":
                    return ht(e) ? a + (t || i ? "klukkustundir" : "klukkustundum") : a + "klukkustund";
                case "d":
                    return t ? "dagur" : i ? "dag" : "degi";
                case "dd":
                    return ht(e) ? t ? a + "dagar" : a + (i ? "daga" : "dögum") : t ? a + "dagur" : a + (i ? "dag" : "degi");
                case "M":
                    return t ? "mánuður" : i ? "mánuð" : "mánuði";
                case "MM":
                    return ht(e) ? t ? a + "mánuðir" : a + (i ? "mánuði" : "mánuðum") : t ? a + "mánuður" : a + (i ? "mánuð" : "mánuði");
                case "y":
                    return t || i ? "ár" : "ári";

                case "yy":
                    return ht(e) ? a + (t || i ? "ár" : "árum") : a + (t || i ? "ár" : "ári")
            }
        }

        function pt(e, t, n, i) {
            var a = {
                m: ["eng Minutt", "enger Minutt"],
                h: ["eng Stonn", "enger Stonn"],
                d: ["een Dag", "engem Dag"],
                M: ["ee Mount", "engem Mount"],
                y: ["ee Joer", "engem Joer"]
            };
            return t ? a[n][0] : a[n][1]
        }

        function ft(e) {
            if (e = parseInt(e, 10), isNaN(e)) return !1;
            if (0 > e) return !0;
            if (10 > e) return e >= 4 && 7 >= e;
            if (100 > e) {
                var t = e % 10;
                return ft(0 === t ? e / 10 : t)
            }
            if (1e4 > e) {
                for (; e >= 10;) e /= 10;
                return ft(e)
            }
            return e /= 1e3, ft(e)
        }

        function _t(e, t, n, i) {
            return t ? At(n)[0] : i ? At(n)[1] : At(n)[2]
        }

        function yt(e) {
            return e % 10 == 0 || e > 10 && 20 > e
        }

        function At(e) {
            return wa[e].split("_")
        }

        function gt(e, t, n, i) {
            var a = e + " ";
            return 1 === e ? a + _t(0, t, n[0], i) : t ? a + (yt(e) ? At(n)[1] : At(n)[0]) : i ? a + At(n)[1] : a + (yt(e) ? At(n)[1] : At(n)[2])
        }

        function vt(e, t, n) {
            return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
        }

        function Mt(e, t, n) {
            return e + " " + vt(ka[n], e, t)
        }

        function wt(e, t, n) {
            return vt(ka[n], e, t)
        }

        function kt(e, t, n, i) {
            var a = "";
            if (t) switch (n) {
                case "s":
                    a = "काही सेकंद";
                    break;
                case "ss":
                    a = "%d सेकंद";
                    break;
                case "m":
                    a = "एक मिनिट";
                    break;
                case "mm":
                    a = "%d मिनिटे";
                    break;
                case "h":
                    a = "एक तास";
                    break;
                case "hh":
                    a = "%d तास";
                    break;
                case "d":
                    a = "एक दिवस";
                    break;
                case "dd":
                    a = "%d दिवस";
                    break;
                case "M":
                    a = "एक महिना";
                    break;
                case "MM":
                    a = "%d महिने";
                    break;
                case "y":
                    a = "एक वर्ष";
                    break;
                case "yy":
                    a = "%d वर्षे"
            } else switch (n) {
                case "s":
                    a = "काही सेकंदां";
                    break;
                case "ss":
                    a = "%d सेकंदां";
                    break;
                case "m":
                    a = "एका मिनिटा";
                    break;
                case "mm":
                    a = "%d मिनिटां";
                    break;
                case "h":
                    a = "एका तासा";
                    break;
                case "hh":
                    a = "%d तासां";
                    break;
                case "d":
                    a = "एका दिवसा";
                    break;
                case "dd":
                    a = "%d दिवसां";
                    break;
                case "M":
                    a = "एका महिन्या";
                    break;
                case "MM":
                    a = "%d महिन्यां";
                    break;
                case "y":
                    a = "एका वर्षा";
                    break;
                case "yy":
                    a = "%d वर्षां"
            }
            return a.replace(/%d/i, e)
        }

        function bt(e) {
            return 5 > e % 10 && e % 10 > 1 && ~~(e / 10) % 10 != 1
        }

        function Dt(e, t, n) {
            var i = e + " ";
            switch (n) {
                case "ss":
                    return i + (bt(e) ? "sekundy" : "sekund");
                case "m":
                    return t ? "minuta" : "minutę";
                case "mm":
                    return i + (bt(e) ? "minuty" : "minut");
                case "h":
                    return t ? "godzina" : "godzinę";
                case "hh":
                    return i + (bt(e) ? "godziny" : "godzin");
                case "MM":
                    return i + (bt(e) ? "miesiące" : "miesięcy");
                case "yy":
                    return i + (bt(e) ? "lata" : "lat")
            }
        }

        function Lt(e, t, n) {
            var i = " ";
            return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (i = " de "), e + i + {
                ss: "secunde",
                mm: "minute",
                hh: "ore",
                dd: "zile",
                MM: "luni",
                yy: "ani"
            }[n]
        }

        function Yt(e, t, n) {
            return "m" === n ? t ? "минута" : "минуту" : e + " " + function(e, t) {
                var n = e.split("_");
                return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? n[1] : n[2]
            }({
                ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
                hh: "час_часа_часов",
                dd: "день_дня_дней",
                MM: "месяц_месяца_месяцев",
                yy: "год_года_лет"
            }[n], +e)
        }

        function Tt(e) {
            return e > 1 && 5 > e
        }

        function St(e, t, n, i) {
            var a = e + " ";
            switch (n) {
                case "s":
                    return t || i ? "pár sekúnd" : "pár sekundami";
                case "ss":
                    return t || i ? a + (Tt(e) ? "sekundy" : "sekúnd") : a + "sekundami";
                case "m":
                    return t ? "minúta" : i ? "minútu" : "minútou";
                case "mm":
                    return t || i ? a + (Tt(e) ? "minúty" : "minút") : a + "minútami";
                case "h":
                    return t ? "hodina" : i ? "hodinu" : "hodinou";
                case "hh":
                    return t || i ? a + (Tt(e) ? "hodiny" : "hodín") : a + "hodinami";
                case "d":
                    return t || i ? "deň" : "dňom";
                case "dd":
                    return t || i ? a + (Tt(e) ? "dni" : "dní") : a + "dňami";
                case "M":
                    return t || i ? "mesiac" : "mesiacom";
                case "MM":
                    return t || i ? a + (Tt(e) ? "mesiace" : "mesiacov") : a + "mesiacmi";
                case "y":
                    return t || i ? "rok" : "rokom";
                case "yy":
                    return t || i ? a + (Tt(e) ? "roky" : "rokov") : a + "rokmi"
            }
        }

        function xt(e, t, n, i) {
            var a = e + " ";
            switch (n) {
                case "s":
                    return t || i ? "nekaj sekund" : "nekaj sekundami";
                case "ss":
                    return a += 1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || i ? "sekundi" : "sekundah" : 5 > e ? t || i ? "sekunde" : "sekundah" : "sekund";
                case "m":
                    return t ? "ena minuta" : "eno minuto";
                case "mm":
                    return a += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || i ? "minuti" : "minutama" : 5 > e ? t || i ? "minute" : "minutami" : t || i ? "minut" : "minutami";
                case "h":
                    return t ? "ena ura" : "eno uro";
                case "hh":
                    return a += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || i ? "uri" : "urama" : 5 > e ? t || i ? "ure" : "urami" : t || i ? "ur" : "urami";
                case "d":
                    return t || i ? "en dan" : "enim dnem";
                case "dd":
                    return a += 1 === e ? t || i ? "dan" : "dnem" : 2 === e ? t || i ? "dni" : "dnevoma" : t || i ? "dni" : "dnevi";
                case "M":
                    return t || i ? "en mesec" : "enim mesecem";
                case "MM":
                    return a += 1 === e ? t || i ? "mesec" : "mesecem" : 2 === e ? t || i ? "meseca" : "mesecema" : 5 > e ? t || i ? "mesece" : "meseci" : t || i ? "mesecev" : "meseci";
                case "y":
                    return t || i ? "eno leto" : "enim letom";
                case "yy":
                    return a += 1 === e ? t || i ? "leto" : "letom" : 2 === e ? t || i ? "leti" : "letoma" : 5 > e ? t || i ? "leta" : "leti" : t || i ? "let" : "leti"
            }
        }

        function Ct(e, t, n, i) {
            var a = function(e) {
                var t = Math.floor(e % 1e3 / 100),
                    n = Math.floor(e % 100 / 10),
                    i = e % 10,
                    a = "";
                return t > 0 && (a += Za[t] + "vatlh"), n > 0 && (a += ("" !== a ? " " : "") + Za[n] + "maH"), i > 0 && (a += ("" !== a ? " " : "") + Za[i]), "" === a ? "pagh" : a
            }(e);
            switch (n) {
                case "ss":
                    return a + " lup";
                case "mm":
                    return a + " tup";
                case "hh":
                    return a + " rep";
                case "dd":
                    return a + " jaj";
                case "MM":
                    return a + " jar";
                case "yy":
                    return a + " DIS"
            }
        }

        function Pt(e, t, n, i) {
            var a = {
                s: ["viensas secunds", "'iensas secunds"],
                ss: [e + " secunds", e + " secunds"],
                m: ["'n míut", "'iens míut"],
                mm: [e + " míuts", e + " míuts"],
                h: ["'n þora", "'iensa þora"],
                hh: [e + " þoras", e + " þoras"],
                d: ["'n ziua", "'iensa ziua"],
                dd: [e + " ziuas", e + " ziuas"],
                M: ["'n mes", "'iens mes"],
                MM: [e + " mesen", e + " mesen"],
                y: ["'n ar", "'iens ar"],
                yy: [e + " ars", e + " ars"]
            };
            return i ? a[n][0] : t ? a[n][0] : a[n][1]
        }

        function Et(e, t, n) {
            return "m" === n ? t ? "хвилина" : "хвилину" : "h" === n ? t ? "година" : "годину" : e + " " + function(e, t) {
                var n = e.split("_");
                return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? n[1] : n[2]
            }({
                ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
                mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                hh: t ? "година_години_годин" : "годину_години_годин",
                dd: "день_дні_днів",
                MM: "місяць_місяці_місяців",
                yy: "рік_роки_років"
            }[n], +e)
        }

        function Ht(e) {
            return function() {
                return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
            }
        }
        var Ot, zt;
        zt = Array.prototype.some ? Array.prototype.some : function(e) {
            for (var t = Object(this), n = t.length >>> 0, i = 0; n > i; i++)
                if (i in t && e.call(this, t[i], i, t)) return !0;
            return !1
        };
        var jt = e.momentProperties = [],
            $t = !1,
            Ft = {};
        e.suppressDeprecationWarnings = !1, e.deprecationHandler = null;
        var It;
        It = Object.keys ? Object.keys : function(e) {
            var t, n = [];
            for (t in e) r(e, t) && n.push(t);
            return n
        };
        var Wt = {},
            Bt = {},
            Rt = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            qt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            Qt = {},
            Ut = {},
            Nt = /\d/,
            Gt = /\d\d/,
            Vt = /\d{3}/,
            Jt = /\d{4}/,
            Kt = /[+-]?\d{6}/,
            Zt = /\d\d?/,
            Xt = /\d\d\d\d?/,
            en = /\d\d\d\d\d\d?/,
            tn = /\d{1,3}/,
            nn = /\d{1,4}/,
            an = /[+-]?\d{1,6}/,
            sn = /\d+/,
            on = /[+-]?\d+/,
            rn = /Z|[+-]\d\d:?\d\d/gi,
            dn = /Z|[+-]\d\d(?::?\d\d)?/gi,
            ln = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
            un = {},
            cn = {},
            hn = 0,
            mn = 1,
            pn = 2,
            fn = 3,
            _n = 4,
            yn = 5,
            An = 6,
            gn = 7,
            vn = 8;
        x("Y", 0, 0, function() {
            var e = this.year();
            return 9999 >= e ? "" + e : "+" + e
        }), x(0, ["YY", 2], 0, function() {
            return this.year() % 100
        }), x(0, ["YYYY", 4], 0, "year"), x(0, ["YYYYY", 5], 0, "year"), x(0, ["YYYYYY", 6, !0], 0, "year"), D("year", "y"), T("year", 1), H("Y", on), H("YY", Zt, Gt), H("YYYY", nn, Jt), H("YYYYY", an, Kt), H("YYYYYY", an, Kt), j(["YYYYY", "YYYYYY"], hn), j("YYYY", function(t, n) {
            n[hn] = 2 === t.length ? e.parseTwoDigitYear(t) : y(t)
        }), j("YY", function(t, n) {
            n[hn] = e.parseTwoDigitYear(t)
        }), j("Y", function(e, t) {
            t[hn] = parseInt(e, 10)
        }), e.parseTwoDigitYear = function(e) {
            return y(e) + (y(e) > 68 ? 1900 : 2e3)
        };
        var Mn, wn = B("FullYear", !0);
        Mn = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
            var t;
            for (t = 0; t < this.length; ++t)
                if (this[t] === e) return t;
            return -1
        }, x("M", ["MM", 2], "Mo", function() {
            return this.month() + 1
        }), x("MMM", 0, 0, function(e) {
            return this.localeData().monthsShort(this, e)
        }), x("MMMM", 0, 0, function(e) {
            return this.localeData().months(this, e)
        }), D("month", "M"), T("month", 8), H("M", Zt), H("MM", Zt, Gt), H("MMM", function(e, t) {
            return t.monthsShortRegex(e)
        }), H("MMMM", function(e, t) {
            return t.monthsRegex(e)
        }), j(["M", "MM"], function(e, t) {
            t[mn] = y(e) - 1
        }), j(["MMM", "MMMM"], function(e, t, n, i) {
            var a = n._locale.monthsParse(e, i, n._strict);
            null != a ? t[mn] = a : u(n).invalidMonth = e
        });
        var kn = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            bn = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            Dn = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            Ln = ln,
            Yn = ln;
        x("w", ["ww", 2], "wo", "week"), x("W", ["WW", 2], "Wo", "isoWeek"), D("week", "w"), D("isoWeek", "W"), T("week", 5), T("isoWeek", 5), H("w", Zt), H("ww", Zt, Gt), H("W", Zt), H("WW", Zt, Gt), $(["w", "ww", "W", "WW"], function(e, t, n, i) {
            t[i.substr(0, 1)] = y(e)
        }), x("d", 0, "do", "day"), x("dd", 0, 0, function(e) {
            return this.localeData().weekdaysMin(this, e)
        }), x("ddd", 0, 0, function(e) {
            return this.localeData().weekdaysShort(this, e)
        }), x("dddd", 0, 0, function(e) {
            return this.localeData().weekdays(this, e)
        }), x("e", 0, 0, "weekday"), x("E", 0, 0, "isoWeekday"), D("day", "d"), D("weekday", "e"), D("isoWeekday", "E"), T("day", 11), T("weekday", 11), T("isoWeekday", 11), H("d", Zt), H("e", Zt), H("E", Zt), H("dd", function(e, t) {
            return t.weekdaysMinRegex(e)
        }), H("ddd", function(e, t) {
            return t.weekdaysShortRegex(e)
        }), H("dddd", function(e, t) {
            return t.weekdaysRegex(e)
        }), $(["dd", "ddd", "dddd"], function(e, t, n, i) {
            var a = n._locale.weekdaysParse(e, i, n._strict);
            null != a ? t.d = a : u(n).invalidWeekday = e
        }), $(["d", "e", "E"], function(e, t, n, i) {
            t[i] = y(e)
        });
        var Tn = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            Sn = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            xn = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            Cn = ln,
            Pn = ln,
            En = ln;
        x("H", ["HH", 2], 0, "hour"), x("h", ["hh", 2], 0, te), x("k", ["kk", 2], 0, function() {
            return this.hours() || 24
        }), x("hmm", 0, 0, function() {
            return "" + te.apply(this) + S(this.minutes(), 2)
        }), x("hmmss", 0, 0, function() {
            return "" + te.apply(this) + S(this.minutes(), 2) + S(this.seconds(), 2)
        }), x("Hmm", 0, 0, function() {
            return "" + this.hours() + S(this.minutes(), 2)
        }), x("Hmmss", 0, 0, function() {
            return "" + this.hours() + S(this.minutes(), 2) + S(this.seconds(), 2)
        }), ne("a", !0), ne("A", !1), D("hour", "h"), T("hour", 13), H("a", ie), H("A", ie), H("H", Zt), H("h", Zt), H("k", Zt), H("HH", Zt, Gt), H("hh", Zt, Gt), H("kk", Zt, Gt), H("hmm", Xt), H("hmmss", en), H("Hmm", Xt), H("Hmmss", en), j(["H", "HH"], fn), j(["k", "kk"], function(e, t, n) {
            var i = y(e);
            t[fn] = 24 === i ? 0 : i
        }), j(["a", "A"], function(e, t, n) {
            n._isPm = n._locale.isPM(e), n._meridiem = e
        }), j(["h", "hh"], function(e, t, n) {
            t[fn] = y(e), u(n).bigHour = !0
        }), j("hmm", function(e, t, n) {
            var i = e.length - 2;
            t[fn] = y(e.substr(0, i)), t[_n] = y(e.substr(i)), u(n).bigHour = !0
        }), j("hmmss", function(e, t, n) {
            var i = e.length - 4,
                a = e.length - 2;
            t[fn] = y(e.substr(0, i)), t[_n] = y(e.substr(i, 2)), t[yn] = y(e.substr(a)), u(n).bigHour = !0
        }), j("Hmm", function(e, t, n) {
            var i = e.length - 2;
            t[fn] = y(e.substr(0, i)), t[_n] = y(e.substr(i))
        }), j("Hmmss", function(e, t, n) {
            var i = e.length - 4,
                a = e.length - 2;
            t[fn] = y(e.substr(0, i)), t[_n] = y(e.substr(i, 2)), t[yn] = y(e.substr(a))
        });
        var Hn, On = B("Hours", !0),
            zn = {
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                longDateFormat: {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                invalidDate: "Invalid date",
                ordinal: "%d",
                dayOfMonthOrdinalParse: /\d{1,2}/,
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                months: bn,
                monthsShort: Dn,
                week: {
                    dow: 0,
                    doy: 6
                },
                weekdays: Tn,
                weekdaysMin: xn,
                weekdaysShort: Sn,
                meridiemParse: /[ap]\.?m?\.?/i
            },
            jn = {},
            $n = {},
            Fn = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            In = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            Wn = /Z|[+-]\d\d(?::?\d\d)?/,
            Bn = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                ["YYYY-DDD", /\d{4}-\d{3}/],
                ["YYYY-MM", /\d{4}-\d\d/, !1],
                ["YYYYYYMMDD", /[+-]\d{10}/],
                ["YYYYMMDD", /\d{8}/],
                ["GGGG[W]WWE", /\d{4}W\d{3}/],
                ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                ["YYYYDDD", /\d{7}/]
            ],
            Rn = [
                ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                ["HH:mm", /\d\d:\d\d/],
                ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                ["HHmmss", /\d\d\d\d\d\d/],
                ["HHmm", /\d\d\d\d/],
                ["HH", /\d\d/]
            ],
            qn = /^\/?Date\((\-?\d+)/i,
            Qn = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
            Un = {
                UT: 0,
                GMT: 0,
                EDT: -240,
                EST: -300,
                CDT: -300,
                CST: -360,
                MDT: -360,
                MST: -420,
                PDT: -420,
                PST: -480
            };
        e.createFromInputFallback = v("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
            e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
        }), e.ISO_8601 = function() {}, e.RFC_2822 = function() {};
        var Nn = v("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var e = Ae.apply(null, arguments);
                return this.isValid() && e.isValid() ? this > e ? this : e : h()
            }),
            Gn = v("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var e = Ae.apply(null, arguments);
                return this.isValid() && e.isValid() ? e > this ? this : e : h()
            }),
            Vn = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
        ke("Z", ":"), ke("ZZ", ""), H("Z", dn), H("ZZ", dn), j(["Z", "ZZ"], function(e, t, n) {
            n._useUTC = !0, n._tzm = be(dn, e)
        });
        var Jn = /([\+\-]|\d\d)/gi;
        e.updateOffset = function() {};
        var Kn = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
            Zn = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
        Te.fn = ve.prototype, Te.invalid = function() {
            return Te(0 / 0)
        };
        var Xn = Ce(1, "add"),
            ei = Ce(-1, "subtract");
        e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", e.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        var ti = v("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
            return void 0 === e ? this.localeData() : this.locale(e)
        });
        x(0, ["gg", 2], 0, function() {
            return this.weekYear() % 100
        }), x(0, ["GG", 2], 0, function() {
            return this.isoWeekYear() % 100
        }), ze("gggg", "weekYear"), ze("ggggg", "weekYear"), ze("GGGG", "isoWeekYear"), ze("GGGGG", "isoWeekYear"), D("weekYear", "gg"), D("isoWeekYear", "GG"), T("weekYear", 1), T("isoWeekYear", 1), H("G", on), H("g", on), H("GG", Zt, Gt), H("gg", Zt, Gt), H("GGGG", nn, Jt), H("gggg", nn, Jt), H("GGGGG", an, Kt), H("ggggg", an, Kt), $(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, i) {
            t[i.substr(0, 2)] = y(e)
        }), $(["gg", "GG"], function(t, n, i, a) {
            n[a] = e.parseTwoDigitYear(t)
        }), x("Q", 0, "Qo", "quarter"), D("quarter", "Q"), T("quarter", 7), H("Q", Nt), j("Q", function(e, t) {
            t[mn] = 3 * (y(e) - 1)
        }), x("D", ["DD", 2], "Do", "date"), D("date", "D"), T("date", 9), H("D", Zt), H("DD", Zt, Gt), H("Do", function(e, t) {
            return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
        }), j(["D", "DD"], pn), j("Do", function(e, t) {
            t[pn] = y(e.match(Zt)[0])
        });
        var ni = B("Date", !0);
        x("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), D("dayOfYear", "DDD"), T("dayOfYear", 4), H("DDD", tn), H("DDDD", Vt), j(["DDD", "DDDD"], function(e, t, n) {
            n._dayOfYear = y(e)
        }), x("m", ["mm", 2], 0, "minute"), D("minute", "m"), T("minute", 14), H("m", Zt), H("mm", Zt, Gt), j(["m", "mm"], _n);
        var ii = B("Minutes", !1);
        x("s", ["ss", 2], 0, "second"), D("second", "s"), T("second", 15), H("s", Zt), H("ss", Zt, Gt), j(["s", "ss"], yn);
        var ai = B("Seconds", !1);
        x("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }), x(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10)
        }), x(0, ["SSS", 3], 0, "millisecond"), x(0, ["SSSS", 4], 0, function() {
            return 10 * this.millisecond()
        }), x(0, ["SSSSS", 5], 0, function() {
            return 100 * this.millisecond()
        }), x(0, ["SSSSSS", 6], 0, function() {
            return 1e3 * this.millisecond()
        }), x(0, ["SSSSSSS", 7], 0, function() {
            return 1e4 * this.millisecond()
        }), x(0, ["SSSSSSSS", 8], 0, function() {
            return 1e5 * this.millisecond()
        }), x(0, ["SSSSSSSSS", 9], 0, function() {
            return 1e6 * this.millisecond()
        }), D("millisecond", "ms"), T("millisecond", 16), H("S", tn, Nt), H("SS", tn, Gt), H("SSS", tn, Vt);
        var si;
        for (si = "SSSS"; si.length <= 9; si += "S") H(si, sn);
        for (si = "S"; si.length <= 9; si += "S") j(si, $e);
        var oi = B("Milliseconds", !1);
        x("z", 0, 0, "zoneAbbr"), x("zz", 0, 0, "zoneName");
        var ri = p.prototype;
        ri.add = Xn, ri.calendar = function(t, n) {
            var i = t || Ae(),
                a = De(i, this).startOf("day"),
                s = e.calendarFormat(this, a) || "sameElse",
                o = n && (w(n[s]) ? n[s].call(this, i) : n[s]);
            return this.format(o || this.localeData().calendar(s, this, Ae(i)))
        }, ri.clone = function() {
            return new p(this)
        }, ri.diff = function(e, t, n) {
            var i, a, s;
            if (!this.isValid()) return 0 / 0;
            if (!(i = De(e, this)).isValid()) return 0 / 0;
            switch (a = 6e4 * (i.utcOffset() - this.utcOffset()), t = L(t)) {
                case "year":
                    s = Ee(this, i) / 12;
                    break;
                case "month":
                    s = Ee(this, i);
                    break;
                case "quarter":
                    s = Ee(this, i) / 3;
                    break;
                case "second":
                    s = (this - i) / 1e3;
                    break;
                case "minute":
                    s = (this - i) / 6e4;
                    break;
                case "hour":
                    s = (this - i) / 36e5;
                    break;
                case "day":
                    s = (this - i - a) / 864e5;
                    break;
                case "week":
                    s = (this - i - a) / 6048e5;
                    break;
                default:
                    s = this - i
            }
            return n ? s : _(s)
        }, ri.endOf = function(e) {
            return void 0 === (e = L(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
        }, ri.format = function(t) {
            t || (t = this.isUtc() ? e.defaultFormatUtc : e.defaultFormat);
            var n = P(this, t);
            return this.localeData().postformat(n)
        }, ri.from = function(e, t) {
            return this.isValid() && (f(e) && e.isValid() || Ae(e).isValid()) ? Te({
                to: this,
                from: e
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }, ri.fromNow = function(e) {
            return this.from(Ae(), e)
        }, ri.to = function(e, t) {
            return this.isValid() && (f(e) && e.isValid() || Ae(e).isValid()) ? Te({
                from: this,
                to: e
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }, ri.toNow = function(e) {
            return this.to(Ae(), e)
        }, ri.get = function(e) {
            return e = L(e), w(this[e]) ? this[e]() : this
        }, ri.invalidAt = function() {
            return u(this).overflow
        }, ri.isAfter = function(e, t) {
            var n = f(e) ? e : Ae(e);
            return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = L(i(t) ? "millisecond" : t)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
        }, ri.isBefore = function(e, t) {
            var n = f(e) ? e : Ae(e);
            return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = L(i(t) ? "millisecond" : t)) ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
        }, ri.isBetween = function(e, t, n, i) {
            return ("(" === (i = i || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === i[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
        }, ri.isSame = function(e, t) {
            var n, i = f(e) ? e : Ae(e);
            return !(!this.isValid() || !i.isValid()) && ("millisecond" === (t = L(t || "millisecond")) ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
        }, ri.isSameOrAfter = function(e, t) {
            return this.isSame(e, t) || this.isAfter(e, t)
        }, ri.isSameOrBefore = function(e, t) {
            return this.isSame(e, t) || this.isBefore(e, t)
        }, ri.isValid = function() {
            return c(this)
        }, ri.lang = ti, ri.locale = He, ri.localeData = Oe, ri.max = Gn, ri.min = Nn, ri.parsingFlags = function() {
            return d({}, u(this))
        }, ri.set = function(e, t) {
            if ("object" == typeof e)
                for (var n = function(e) {
                        var t = [];
                        for (var n in e) t.push({
                            unit: n,
                            priority: Bt[n]
                        });
                        return t.sort(function(e, t) {
                            return e.priority - t.priority
                        }), t
                    }(e = Y(e)), i = 0; i < n.length; i++) this[n[i].unit](e[n[i].unit]);
            else if (e = L(e), w(this[e])) return this[e](t);
            return this
        }, ri.startOf = function(e) {
            switch (e = L(e)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                case "date":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
        }, ri.subtract = ei, ri.toArray = function() {
            return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]
        }, ri.toObject = function() {
            return {
                years: this.year(),
                months: this.month(),
                date: this.date(),
                hours: this.hours(),
                minutes: this.minutes(),
                seconds: this.seconds(),
                milliseconds: this.milliseconds()
            }
        }, ri.toDate = function() {
            return new Date(this.valueOf())
        }, ri.toISOString = function(e) {
            if (!this.isValid()) return null;
            var t = !0 !== e,
                n = t ? this.clone().utc() : this;
            return n.year() < 0 || n.year() > 9999 ? P(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : w(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this._d.valueOf()).toISOString().replace("Z", P(n, "Z")) : P(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
        }, ri.inspect = function() {
            if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
            var e = "moment",
                t = "";
            this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
            var n = "[" + e + '("]',
                i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                a = t + '[")]';
            return this.format(n + i + "-MM-DD[T]HH:mm:ss.SSS" + a)
        }, ri.toJSON = function() {
            return this.isValid() ? this.toISOString() : null
        }, ri.toString = function() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }, ri.unix = function() {
            return Math.floor(this.valueOf() / 1e3)
        }, ri.valueOf = function() {
            return this._d.valueOf() - 6e4 * (this._offset || 0)
        }, ri.creationData = function() {
            return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict
            }
        }, ri.year = wn, ri.isLeapYear = function() {
            return W(this.year())
        }, ri.weekYear = function(e) {
            return je.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
        }, ri.isoWeekYear = function(e) {
            return je.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
        }, ri.quarter = ri.quarters = function(e) {
            return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
        }, ri.month = N, ri.daysInMonth = function() {
            return Q(this.year(), this.month())
        }, ri.week = ri.weeks = function(e) {
            var t = this.localeData().week(this);
            return null == e ? t : this.add(7 * (e - t), "d")
        }, ri.isoWeek = ri.isoWeeks = function(e) {
            var t = Z(this, 1, 4).week;
            return null == e ? t : this.add(7 * (e - t), "d")
        }, ri.weeksInYear = function() {
            var e = this.localeData()._week;
            return X(this.year(), e.dow, e.doy)
        }, ri.isoWeeksInYear = function() {
            return X(this.year(), 1, 4)
        }, ri.date = ni, ri.day = ri.days = function(e) {
            if (!this.isValid()) return null != e ? this : 0 / 0;
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != e ? (e = function(e, t) {
                return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
            }(e, this.localeData()), this.add(e - t, "d")) : t
        }, ri.weekday = function(e) {
            if (!this.isValid()) return null != e ? this : 0 / 0;
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? t : this.add(e - t, "d")
        }, ri.isoWeekday = function(e) {
            if (!this.isValid()) return null != e ? this : 0 / 0;
            if (null != e) {
                var t = function(e, t) {
                    return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
                }(e, this.localeData());
                return this.day(this.day() % 7 ? t : t - 7)
            }
            return this.day() || 7
        }, ri.dayOfYear = function(e) {
            var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == e ? t : this.add(e - t, "d")
        }, ri.hour = ri.hours = On, ri.minute = ri.minutes = ii, ri.second = ri.seconds = ai, ri.millisecond = ri.milliseconds = oi, ri.utcOffset = function(t, n, i) {
            var a, s = this._offset || 0;
            if (!this.isValid()) return null != t ? this : 0 / 0;
            if (null != t) {
                if ("string" == typeof t) {
                    if (null === (t = be(dn, t))) return this
                } else Math.abs(t) < 16 && !i && (t *= 60);
                return !this._isUTC && n && (a = Le(this)), this._offset = t, this._isUTC = !0, null != a && this.add(a, "m"), s !== t && (!n || this._changeInProgress ? Pe(this, Te(t - s, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, e.updateOffset(this, !0), this._changeInProgress = null)), this
            }
            return this._isUTC ? s : Le(this)
        }, ri.utc = function(e) {
            return this.utcOffset(0, e)
        }, ri.local = function(e) {
            return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Le(this), "m")), this
        }, ri.parseZone = function() {
            if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
            else if ("string" == typeof this._i) {
                var e = be(rn, this._i);
                null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
            }
            return this
        }, ri.hasAlignedHourOffset = function(e) {
            return !!this.isValid() && (e = e ? Ae(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
        }, ri.isDST = function() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }, ri.isLocal = function() {
            return !!this.isValid() && !this._isUTC
        }, ri.isUtcOffset = function() {
            return !!this.isValid() && this._isUTC
        }, ri.isUtc = Ye, ri.isUTC = Ye, ri.zoneAbbr = function() {
            return this._isUTC ? "UTC" : ""
        }, ri.zoneName = function() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }, ri.dates = v("dates accessor is deprecated. Use date instead.", ni), ri.months = v("months accessor is deprecated. Use month instead", N), ri.years = v("years accessor is deprecated. Use year instead", wn), ri.zone = v("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
            return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
        }), ri.isDSTShifted = v("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
            if (!i(this._isDSTShifted)) return this._isDSTShifted;
            var e = {};
            if (m(e, this), (e = _e(e))._a) {
                var t = e._isUTC ? l(e._a) : Ae(e._a);
                this._isDSTShifted = this.isValid() && A(e._a, t.toArray()) > 0
            } else this._isDSTShifted = !1;
            return this._isDSTShifted
        });
        var di = b.prototype;
        di.calendar = function(e, t, n) {
            var i = this._calendar[e] || this._calendar.sameElse;
            return w(i) ? i.call(t, n) : i
        }, di.longDateFormat = function(e) {
            var t = this._longDateFormat[e],
                n = this._longDateFormat[e.toUpperCase()];
            return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
                return e.slice(1)
            }), this._longDateFormat[e])
        }, di.invalidDate = function() {
            return this._invalidDate
        }, di.ordinal = function(e) {
            return this._ordinal.replace("%d", e)
        }, di.preparse = Fe, di.postformat = Fe, di.relativeTime = function(e, t, n, i) {
            var a = this._relativeTime[n];
            return w(a) ? a(e, t, n, i) : a.replace(/%d/i, e)
        }, di.pastFuture = function(e, t) {
            var n = this._relativeTime[e > 0 ? "future" : "past"];
            return w(n) ? n(t) : n.replace(/%s/i, t)
        }, di.set = function(e) {
            var t, n;
            for (n in e) w(t = e[n]) ? this[n] = t : this["_" + n] = t;
            this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
        }, di.months = function(e, n) {
            return e ? t(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || kn).test(n) ? "format" : "standalone"][e.month()] : t(this._months) ? this._months : this._months.standalone
        }, di.monthsShort = function(e, n) {
            return e ? t(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[kn.test(n) ? "format" : "standalone"][e.month()] : t(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
        }, di.monthsParse = function(e, t, n) {
            var i, a, s;
            if (this._monthsParseExact) return function(e, t, n) {
                var i, a, s, o = e.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; 12 > i; ++i) s = l([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(s, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(s, "").toLocaleLowerCase();
                return n ? "MMM" === t ? -1 !== (a = Mn.call(this._shortMonthsParse, o)) ? a : null : -1 !== (a = Mn.call(this._longMonthsParse, o)) ? a : null : "MMM" === t ? -1 !== (a = Mn.call(this._shortMonthsParse, o)) ? a : -1 !== (a = Mn.call(this._longMonthsParse, o)) ? a : null : -1 !== (a = Mn.call(this._longMonthsParse, o)) ? a : -1 !== (a = Mn.call(this._shortMonthsParse, o)) ? a : null
            }.call(this, e, t, n);
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; 12 > i; i++) {
                if (a = l([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (s = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[i] = new RegExp(s.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[i].test(e)) return i;
                if (n && "MMM" === t && this._shortMonthsParse[i].test(e)) return i;
                if (!n && this._monthsParse[i].test(e)) return i
            }
        }, di.monthsRegex = function(e) {
            return this._monthsParseExact ? (r(this, "_monthsRegex") || G.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (r(this, "_monthsRegex") || (this._monthsRegex = Yn), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
        }, di.monthsShortRegex = function(e) {
            return this._monthsParseExact ? (r(this, "_monthsRegex") || G.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (r(this, "_monthsShortRegex") || (this._monthsShortRegex = Ln), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
        }, di.week = function(e) {
            return Z(e, this._week.dow, this._week.doy).week
        }, di.firstDayOfYear = function() {
            return this._week.doy
        }, di.firstDayOfWeek = function() {
            return this._week.dow
        }, di.weekdays = function(e, n) {
            return e ? t(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(n) ? "format" : "standalone"][e.day()] : t(this._weekdays) ? this._weekdays : this._weekdays.standalone
        }, di.weekdaysMin = function(e) {
            return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
        }, di.weekdaysShort = function(e) {
            return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
        }, di.weekdaysParse = function(e, t, n) {
            var i, a, s;
            if (this._weekdaysParseExact) return function(e, t, n) {
                var i, a, s, o = e.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; 7 > i; ++i) s = l([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(s, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(s, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(s, "").toLocaleLowerCase();
                return n ? "dddd" === t ? -1 !== (a = Mn.call(this._weekdaysParse, o)) ? a : null : "ddd" === t ? -1 !== (a = Mn.call(this._shortWeekdaysParse, o)) ? a : null : -1 !== (a = Mn.call(this._minWeekdaysParse, o)) ? a : null : "dddd" === t ? -1 !== (a = Mn.call(this._weekdaysParse, o)) ? a : -1 !== (a = Mn.call(this._shortWeekdaysParse, o)) ? a : -1 !== (a = Mn.call(this._minWeekdaysParse, o)) ? a : null : "ddd" === t ? -1 !== (a = Mn.call(this._shortWeekdaysParse, o)) ? a : -1 !== (a = Mn.call(this._weekdaysParse, o)) ? a : -1 !== (a = Mn.call(this._minWeekdaysParse, o)) ? a : null : -1 !== (a = Mn.call(this._minWeekdaysParse, o)) ? a : -1 !== (a = Mn.call(this._weekdaysParse, o)) ? a : -1 !== (a = Mn.call(this._shortWeekdaysParse, o)) ? a : null
            }.call(this, e, t, n);
            for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; 7 > i; i++) {
                if (a = l([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(a, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(a, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(a, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[i] || (s = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[i] = new RegExp(s.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[i].test(e)) return i;
                if (n && "ddd" === t && this._shortWeekdaysParse[i].test(e)) return i;
                if (n && "dd" === t && this._minWeekdaysParse[i].test(e)) return i;
                if (!n && this._weekdaysParse[i].test(e)) return i
            }
        }, di.weekdaysRegex = function(e) {
            return this._weekdaysParseExact ? (r(this, "_weekdaysRegex") || ee.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (r(this, "_weekdaysRegex") || (this._weekdaysRegex = Cn), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
        }, di.weekdaysShortRegex = function(e) {
            return this._weekdaysParseExact ? (r(this, "_weekdaysRegex") || ee.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (r(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Pn), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        }, di.weekdaysMinRegex = function(e) {
            return this._weekdaysParseExact ? (r(this, "_weekdaysRegex") || ee.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (r(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = En), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        }, di.isPM = function(e) {
            return "p" === (e + "").toLowerCase().charAt(0)
        }, di.meridiem = function(e, t, n) {
            return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        }, oe("en", {
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 === y(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");

            }
        }), e.lang = v("moment.lang is deprecated. Use moment.locale instead.", oe), e.langData = v("moment.langData is deprecated. Use moment.localeData instead.", de);
        var li = Math.abs,
            ui = Ne("ms"),
            ci = Ne("s"),
            hi = Ne("m"),
            mi = Ne("h"),
            pi = Ne("d"),
            fi = Ne("w"),
            _i = Ne("M"),
            yi = Ne("y"),
            Ai = Ge("milliseconds"),
            gi = Ge("seconds"),
            vi = Ge("minutes"),
            Mi = Ge("hours"),
            wi = Ge("days"),
            ki = Ge("months"),
            bi = Ge("years"),
            Di = Math.round,
            Li = {
                ss: 44,
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            },
            Yi = Math.abs,
            Ti = ve.prototype;
        Ti.isValid = function() {
                return this._isValid
            }, Ti.abs = function() {
                var e = this._data;
                return this._milliseconds = li(this._milliseconds), this._days = li(this._days), this._months = li(this._months), e.milliseconds = li(e.milliseconds), e.seconds = li(e.seconds), e.minutes = li(e.minutes), e.hours = li(e.hours), e.months = li(e.months), e.years = li(e.years), this
            }, Ti.add = function(e, t) {
                return Re(this, e, t, 1)
            }, Ti.subtract = function(e, t) {
                return Re(this, e, t, -1)
            }, Ti.as = function(e) {
                if (!this.isValid()) return 0 / 0;
                var t, n, i = this._milliseconds;
                if ("month" === (e = L(e)) || "year" === e) return t = this._days + i / 864e5, n = this._months + Qe(t), "month" === e ? n : n / 12;
                switch (t = this._days + Math.round(Ue(this._months)), e) {
                    case "week":
                        return t / 7 + i / 6048e5;
                    case "day":
                        return t + i / 864e5;
                    case "hour":
                        return 24 * t + i / 36e5;
                    case "minute":
                        return 1440 * t + i / 6e4;
                    case "second":
                        return 86400 * t + i / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * t) + i;
                    default:
                        throw new Error("Unknown unit " + e)
                }
            }, Ti.asMilliseconds = ui, Ti.asSeconds = ci, Ti.asMinutes = hi, Ti.asHours = mi, Ti.asDays = pi, Ti.asWeeks = fi, Ti.asMonths = _i, Ti.asYears = yi, Ti.valueOf = function() {
                return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * y(this._months / 12) : 0 / 0
            }, Ti._bubble = function() {
                var e, t, n, i, a, s = this._milliseconds,
                    o = this._days,
                    r = this._months,
                    d = this._data;
                return s >= 0 && o >= 0 && r >= 0 || 0 >= s && 0 >= o && 0 >= r || (s += 864e5 * qe(Ue(r) + o), o = 0, r = 0), d.milliseconds = s % 1e3, e = _(s / 1e3), d.seconds = e % 60, t = _(e / 60), d.minutes = t % 60, n = _(t / 60), d.hours = n % 24, o += _(n / 24), a = _(Qe(o)), r += a, o -= qe(Ue(a)), i = _(r / 12), r %= 12, d.days = o, d.months = r, d.years = i, this
            }, Ti.clone = function() {
                return Te(this)
            }, Ti.get = function(e) {
                return e = L(e), this.isValid() ? this[e + "s"]() : 0 / 0
            }, Ti.milliseconds = Ai, Ti.seconds = gi, Ti.minutes = vi, Ti.hours = Mi, Ti.days = wi, Ti.weeks = function() {
                return _(this.days() / 7)
            }, Ti.months = ki, Ti.years = bi, Ti.humanize = function(e) {
                if (!this.isValid()) return this.localeData().invalidDate();
                var t = this.localeData(),
                    n = function(e, t, n) {
                        var i = Te(e).abs(),
                            a = Di(i.as("s")),
                            s = Di(i.as("m")),
                            o = Di(i.as("h")),
                            r = Di(i.as("d")),
                            d = Di(i.as("M")),
                            l = Di(i.as("y")),
                            u = a <= Li.ss && ["s", a] || a < Li.s && ["ss", a] || 1 >= s && ["m"] || s < Li.m && ["mm", s] || 1 >= o && ["h"] || o < Li.h && ["hh", o] || 1 >= r && ["d"] || r < Li.d && ["dd", r] || 1 >= d && ["M"] || d < Li.M && ["MM", d] || 1 >= l && ["y"] || ["yy", l];
                        return u[2] = t, u[3] = +e > 0, u[4] = n,
                            function(e, t, n, i, a) {
                                return a.relativeTime(t || 1, !!n, e, i)
                            }.apply(null, u)
                    }(this, !e, t);
                return e && (n = t.pastFuture(+this, n)), t.postformat(n)
            }, Ti.toISOString = Je, Ti.toString = Je, Ti.toJSON = Je, Ti.locale = He, Ti.localeData = Oe, Ti.toIsoString = v("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Je), Ti.lang = ti, x("X", 0, 0, "unix"), x("x", 0, 0, "valueOf"), H("x", on), H("X", /[+-]?\d+(\.\d{1,3})?/), j("X", function(e, t, n) {
                n._d = new Date(1e3 * parseFloat(e, 10))
            }), j("x", function(e, t, n) {
                n._d = new Date(y(e))
            }), e.version = "2.20.1",
            function(e) {
                Ot = e
            }(Ae), e.fn = ri, e.min = function() {
                return ge("isBefore", [].slice.call(arguments, 0))
            }, e.max = function() {
                return ge("isAfter", [].slice.call(arguments, 0))
            }, e.now = function() {
                return Date.now ? Date.now() : +new Date
            }, e.utc = l, e.unix = function(e) {
                return Ae(1e3 * e)
            }, e.months = function(e, t) {
                return We(e, t, "months")
            }, e.isDate = s, e.locale = oe, e.invalid = h, e.duration = Te, e.isMoment = f, e.weekdays = function(e, t, n) {
                return Be(e, t, n, "weekdays")
            }, e.parseZone = function() {
                return Ae.apply(null, arguments).parseZone()
            }, e.localeData = de, e.isDuration = Me, e.monthsShort = function(e, t) {
                return We(e, t, "monthsShort")
            }, e.weekdaysMin = function(e, t, n) {
                return Be(e, t, n, "weekdaysMin")
            }, e.defineLocale = re, e.updateLocale = function(e, t) {
                if (null != t) {
                    var n, i, a = zn;
                    null != (i = se(e)) && (a = i._config), (n = new b(t = k(a, t))).parentLocale = jn[e], jn[e] = n, oe(e)
                } else null != jn[e] && (null != jn[e].parentLocale ? jn[e] = jn[e].parentLocale : null != jn[e] && delete jn[e]);
                return jn[e]
            }, e.locales = function() {
                return It(jn)
            }, e.weekdaysShort = function(e, t, n) {
                return Be(e, t, n, "weekdaysShort")
            }, e.normalizeUnits = L, e.relativeTimeRounding = function(e) {
                return void 0 === e ? Di : "function" == typeof e && (Di = e, !0)
            }, e.relativeTimeThreshold = function(e, t) {
                return void 0 !== Li[e] && (void 0 === t ? Li[e] : (Li[e] = t, "s" === e && (Li.ss = t - 1), !0))
            }, e.calendarFormat = function(e, t) {
                var n = e.diff(t, "days", !0);
                return -6 > n ? "sameElse" : -1 > n ? "lastWeek" : 0 > n ? "lastDay" : 1 > n ? "sameDay" : 2 > n ? "nextDay" : 7 > n ? "nextWeek" : "sameElse"
            }, e.prototype = ri, e.HTML5_FMT = {
                DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                DATE: "YYYY-MM-DD",
                TIME: "HH:mm",
                TIME_SECONDS: "HH:mm:ss",
                TIME_MS: "HH:mm:ss.SSS",
                WEEK: "YYYY-[W]WW",
                MONTH: "YYYY-MM"
            }, e.defineLocale("af", {
                months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
                monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
                weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
                weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
                meridiemParse: /vm|nm/i,
                isPM: function(e) {
                    return /^nm$/i.test(e)
                },
                meridiem: function(e, t, n) {
                    return 12 > e ? n ? "vm" : "VM" : n ? "nm" : "NM"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Vandag om] LT",
                    nextDay: "[Môre om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[Gister om] LT",
                    lastWeek: "[Laas] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "oor %s",
                    past: "%s gelede",
                    s: "'n paar sekondes",
                    ss: "%d sekondes",
                    m: "'n minuut",
                    mm: "%d minute",
                    h: "'n uur",
                    hh: "%d ure",
                    d: "'n dag",
                    dd: "%d dae",
                    M: "'n maand",
                    MM: "%d maande",
                    y: "'n jaar",
                    yy: "%d jaar"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            }), e.defineLocale("ar-dz", {
                months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    ss: "%d ثانية",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 0,
                    doy: 4
                }
            }), e.defineLocale("ar-kw", {
                months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    ss: "%d ثانية",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 0,
                    doy: 12
                }
            });
        var Si = {
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
                0: "0"
            },
            xi = function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && 10 >= e % 100 ? 3 : e % 100 >= 11 ? 4 : 5
            },
            Ci = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            },
            Pi = function(e) {
                return function(t, n, i, a) {
                    var s = xi(t),
                        o = Ci[e][xi(t)];
                    return 2 === s && (o = o[n ? 0 : 1]), o.replace(/%d/i, t)
                }
            },
            Ei = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        e.defineLocale("ar-ly", {
            months: Ei,
            monthsShort: Ei,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /\u0635|\u0645/,
            isPM: function(e) {
                return "م" === e
            },
            meridiem: function(e, t, n) {
                return 12 > e ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: Pi("s"),
                ss: Pi("s"),
                m: Pi("m"),
                mm: Pi("m"),
                h: Pi("h"),
                hh: Pi("h"),
                d: Pi("d"),
                dd: Pi("d"),
                M: Pi("M"),
                MM: Pi("M"),
                y: Pi("y"),
                yy: Pi("y")
            },
            preparse: function(e) {
                return e.replace(/\u060c/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return Si[e]
                }).replace(/,/g, "،")
            },
            week: {
                dow: 6,
                doy: 12
            }
        }), e.defineLocale("ar-ma", {
            months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 6,
                doy: 12
            }
        });
        var Hi = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            },
            Oi = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            };
        e.defineLocale("ar-sa", {
            months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /\u0635|\u0645/,
            isPM: function(e) {
                return "م" === e
            },
            meridiem: function(e, t, n) {
                return 12 > e ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            preparse: function(e) {
                return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function(e) {
                    return Oi[e]
                }).replace(/\u060c/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return Hi[e]
                }).replace(/,/g, "،")
            },
            week: {
                dow: 0,
                doy: 6
            }
        }), e.defineLocale("ar-tn", {
            months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        var zi = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            },
            ji = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            },
            $i = function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && 10 >= e % 100 ? 3 : e % 100 >= 11 ? 4 : 5
            },
            Fi = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            },
            Ii = function(e) {
                return function(t, n, i, a) {
                    var s = $i(t),
                        o = Fi[e][$i(t)];
                    return 2 === s && (o = o[n ? 0 : 1]), o.replace(/%d/i, t)
                }
            },
            Wi = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        e.defineLocale("ar", {
            months: Wi,
            monthsShort: Wi,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /\u0635|\u0645/,
            isPM: function(e) {
                return "م" === e
            },
            meridiem: function(e, t, n) {
                return 12 > e ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: Ii("s"),
                ss: Ii("s"),
                m: Ii("m"),
                mm: Ii("m"),
                h: Ii("h"),
                hh: Ii("h"),
                d: Ii("d"),
                dd: Ii("d"),
                M: Ii("M"),
                MM: Ii("M"),
                y: Ii("y"),
                yy: Ii("y")
            },
            preparse: function(e) {
                return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function(e) {
                    return ji[e]
                }).replace(/\u060c/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return zi[e]
                }).replace(/,/g, "،")
            },
            week: {
                dow: 6,
                doy: 12
            }
        });
        var Bi = {
            1: "-inci",
            5: "-inci",
            8: "-inci",
            70: "-inci",
            80: "-inci",
            2: "-nci",
            7: "-nci",
            20: "-nci",
            50: "-nci",
            3: "-üncü",
            4: "-üncü",
            100: "-üncü",
            6: "-ncı",
            9: "-uncu",
            10: "-uncu",
            30: "-uncu",
            60: "-ıncı",
            90: "-ıncı"
        };
        e.defineLocale("az", {
            months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
            monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
            weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
            weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
            weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[sabah saat] LT",
                nextWeek: "[gələn həftə] dddd [saat] LT",
                lastDay: "[dünən] LT",
                lastWeek: "[keçən həftə] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s əvvəl",
                s: "birneçə saniyyə",
                ss: "%d saniyə",
                m: "bir dəqiqə",
                mm: "%d dəqiqə",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir il",
                yy: "%d il"
            },
            meridiemParse: /gec\u0259|s\u0259h\u0259r|g\xfcnd\xfcz|ax\u015fam/,
            isPM: function(e) {
                return /^(g\xfcnd\xfcz|ax\u015fam)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return 4 > e ? "gecə" : 12 > e ? "səhər" : 17 > e ? "gündüz" : "axşam"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(\u0131nc\u0131|inci|nci|\xfcnc\xfc|nc\u0131|uncu)/,
            ordinal: function(e) {
                if (0 === e) return e + "-ıncı";
                var t = e % 10;
                return e + (Bi[t] || Bi[e % 100 - t] || Bi[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), e.defineLocale("be", {
            months: {
                format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
                standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
            },
            monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
            weekdays: {
                format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
                standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                isFormat: /\[ ?[\u0412\u0432] ?(?:\u043c\u0456\u043d\u0443\u043b\u0443\u044e|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443\u044e)? ?\] ?dddd/
            },
            weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., HH:mm",
                LLLL: "dddd, D MMMM YYYY г., HH:mm"
            },
            calendar: {
                sameDay: "[Сёння ў] LT",
                nextDay: "[Заўтра ў] LT",
                lastDay: "[Учора ў] LT",
                nextWeek: function() {
                    return "[У] dddd [ў] LT"
                },
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return "[У мінулую] dddd [ў] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[У мінулы] dddd [ў] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "праз %s",
                past: "%s таму",
                s: "некалькі секунд",
                m: Ke,
                mm: Ke,
                h: Ke,
                hh: Ke,
                d: "дзень",
                dd: Ke,
                M: "месяц",
                MM: Ke,
                y: "год",
                yy: Ke
            },
            meridiemParse: /\u043d\u043e\u0447\u044b|\u0440\u0430\u043d\u0456\u0446\u044b|\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430/,
            isPM: function(e) {
                return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return 4 > e ? "ночы" : 12 > e ? "раніцы" : 17 > e ? "дня" : "вечара"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(\u0456|\u044b|\u0433\u0430)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
                    case "D":
                        return e + "-га";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), e.defineLocale("bg", {
            months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
            weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Днес в] LT",
                nextDay: "[Утре в] LT",
                nextWeek: "dddd [в] LT",
                lastDay: "[Вчера в] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[В изминалата] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[В изминалия] dddd [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "след %s",
                past: "преди %s",
                s: "няколко секунди",
                ss: "%d секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дни",
                M: "месец",
                MM: "%d месеца",
                y: "година",
                yy: "%d години"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = e % 100;
                return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && 20 > n ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), e.defineLocale("bm", {
            months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),
            monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),
            weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
            weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
            weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "MMMM [tile] D [san] YYYY",
                LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
                LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
            },
            calendar: {
                sameDay: "[Bi lɛrɛ] LT",
                nextDay: "[Sini lɛrɛ] LT",
                nextWeek: "dddd [don lɛrɛ] LT",
                lastDay: "[Kunu lɛrɛ] LT",
                lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s kɔnɔ",
                past: "a bɛ %s bɔ",
                s: "sanga dama dama",
                ss: "sekondi %d",
                m: "miniti kelen",
                mm: "miniti %d",
                h: "lɛrɛ kelen",
                hh: "lɛrɛ %d",
                d: "tile kelen",
                dd: "tile %d",
                M: "kalo kelen",
                MM: "kalo %d",
                y: "san kelen",
                yy: "san %d"
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        var Ri = {
                1: "১",
                2: "২",
                3: "৩",
                4: "৪",
                5: "৫",
                6: "৬",
                7: "৭",
                8: "৮",
                9: "৯",
                0: "০"
            },
            qi = {
                "১": "1",
                "২": "2",
                "৩": "3",
                "৪": "4",
                "৫": "5",
                "৬": "6",
                "৭": "7",
                "৮": "8",
                "৯": "9",
                "০": "0"
            };
        e.defineLocale("bn", {
            months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
            monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
            weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
            weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
            weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),
            longDateFormat: {
                LT: "A h:mm সময়",
                LTS: "A h:mm:ss সময়",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm সময়",
                LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
            },
            calendar: {
                sameDay: "[আজ] LT",
                nextDay: "[আগামীকাল] LT",
                nextWeek: "dddd, LT",
                lastDay: "[গতকাল] LT",
                lastWeek: "[গত] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s পরে",
                past: "%s আগে",
                s: "কয়েক সেকেন্ড",
                ss: "%d সেকেন্ড",
                m: "এক মিনিট",
                mm: "%d মিনিট",
                h: "এক ঘন্টা",
                hh: "%d ঘন্টা",
                d: "এক দিন",
                dd: "%d দিন",
                M: "এক মাস",
                MM: "%d মাস",
                y: "এক বছর",
                yy: "%d বছর"
            },
            preparse: function(e) {
                return e.replace(/[\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u09e6]/g, function(e) {
                    return qi[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return Ri[e]
                })
            },
            meridiemParse: /\u09b0\u09be\u09a4|\u09b8\u0995\u09be\u09b2|\u09a6\u09c1\u09aa\u09c1\u09b0|\u09ac\u09bf\u0995\u09be\u09b2|\u09b0\u09be\u09a4/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "রাত" === t && e >= 4 || "দুপুর" === t && 5 > e || "বিকাল" === t ? e + 12 : e
            },
            meridiem: function(e, t, n) {
                return 4 > e ? "রাত" : 10 > e ? "সকাল" : 17 > e ? "দুপুর" : 20 > e ? "বিকাল" : "রাত"
            },
            week: {
                dow: 0,
                doy: 6
            }
        });
        var Qi = {
                1: "༡",
                2: "༢",
                3: "༣",
                4: "༤",
                5: "༥",
                6: "༦",
                7: "༧",
                8: "༨",
                9: "༩",
                0: "༠"
            },
            Ui = {
                "༡": "1",
                "༢": "2",
                "༣": "3",
                "༤": "4",
                "༥": "5",
                "༦": "6",
                "༧": "7",
                "༨": "8",
                "༩": "9",
                "༠": "0"
            };
        e.defineLocale("bo", {
            months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
            weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[དི་རིང] LT",
                nextDay: "[སང་ཉིན] LT",
                nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                lastDay: "[ཁ་སང] LT",
                lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ལ་",
                past: "%s སྔན་ལ",
                s: "ལམ་སང",
                ss: "%d སྐར་ཆ།",
                m: "སྐར་མ་གཅིག",
                mm: "%d སྐར་མ",
                h: "ཆུ་ཚོད་གཅིག",
                hh: "%d ཆུ་ཚོད",
                d: "ཉིན་གཅིག",
                dd: "%d ཉིན་",
                M: "ཟླ་བ་གཅིག",
                MM: "%d ཟླ་བ",
                y: "ལོ་གཅིག",
                yy: "%d ལོ"
            },
            preparse: function(e) {
                return e.replace(/[\u0f21\u0f22\u0f23\u0f24\u0f25\u0f26\u0f27\u0f28\u0f29\u0f20]/g, function(e) {
                    return Ui[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return Qi[e]
                })
            },
            meridiemParse: /\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c|\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66|\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44|\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42|\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && 5 > e || "དགོང་དག" === t ? e + 12 : e
            },
            meridiem: function(e, t, n) {
                return 4 > e ? "མཚན་མོ" : 10 > e ? "ཞོགས་ཀས" : 17 > e ? "ཉིན་གུང" : 20 > e ? "དགོང་དག" : "མཚན་མོ"
            },
            week: {
                dow: 0,
                doy: 6
            }
        }), e.defineLocale("br", {
            months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
            monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h[e]mm A",
                LTS: "h[e]mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [a viz] MMMM YYYY",
                LLL: "D [a viz] MMMM YYYY h[e]mm A",
                LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
            },
            calendar: {
                sameDay: "[Hiziv da] LT",
                nextDay: "[Warc'hoazh da] LT",
                nextWeek: "dddd [da] LT",
                lastDay: "[Dec'h da] LT",
                lastWeek: "dddd [paset da] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "a-benn %s",
                past: "%s 'zo",
                s: "un nebeud segondennoù",
                ss: "%d eilenn",
                m: "ur vunutenn",
                mm: Ze,
                h: "un eur",
                hh: "%d eur",
                d: "un devezh",
                dd: Ze,
                M: "ur miz",
                MM: Ze,
                y: "ur bloaz",
                yy: function(e) {
                    switch (Xe(e)) {
                        case 1:
                        case 3:
                        case 4:
                        case 5:
                        case 9:
                            return e + " bloaz";
                        default:
                            return e + " vloaz"
                    }
                }
            },
            dayOfMonthOrdinalParse: /\d{1,2}(a\xf1|vet)/,
            ordinal: function(e) {
                return e + (1 === e ? "añ" : "vet")
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("bs", {
            months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[jučer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: et,
                m: et,
                mm: et,
                h: et,
                hh: et,
                d: "dan",
                dd: et,
                M: "mjesec",
                MM: et,
                y: "godinu",
                yy: et
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        }), e.defineLocale("ca", {
            months: {
                standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
                isFormat: /D[oD]?(\s)+MMMM/
            },
            monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [de] YYYY",
                ll: "D MMM YYYY",
                LLL: "D MMMM [de] YYYY [a les] H:mm",
                lll: "D MMM YYYY, H:mm",
                LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
                llll: "ddd D MMM YYYY, H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextDay: function() {
                    return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastDay: function() {
                    return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "d'aquí %s",
                past: "fa %s",
                s: "uns segons",
                ss: "%d segons",
                m: "un minut",
                mm: "%d minuts",
                h: "una hora",
                hh: "%d hores",
                d: "un dia",
                dd: "%d dies",
                M: "un mes",
                MM: "%d mesos",
                y: "un any",
                yy: "%d anys"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|\xe8|a)/,
            ordinal: function(e, t) {
                var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                return "w" !== t && "W" !== t || (n = "a"), e + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        var Ni = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
            Gi = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
        e.defineLocale("cs", {
            months: Ni,
            monthsShort: Gi,
            monthsParse: function(e, t) {
                var n, i = [];
                for (n = 0; 12 > n; n++) i[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
                return i
            }(Ni, Gi),
            shortMonthsParse: function(e) {
                var t, n = [];
                for (t = 0; 12 > t; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
                return n
            }(Gi),
            longMonthsParse: function(e) {
                var t, n = [];
                for (t = 0; 12 > t; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
                return n
            }(Ni),
            weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
            weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
            weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm",
                l: "D. M. YYYY"
            },
            calendar: {
                sameDay: "[dnes v] LT",
                nextDay: "[zítra v] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v neděli v] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [v] LT";
                        case 3:
                            return "[ve středu v] LT";
                        case 4:
                            return "[ve čtvrtek v] LT";
                        case 5:
                            return "[v pátek v] LT";
                        case 6:
                            return "[v sobotu v] LT"
                    }
                },
                lastDay: "[včera v] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[minulou neděli v] LT";
                        case 1:
                        case 2:
                            return "[minulé] dddd [v] LT";
                        case 3:
                            return "[minulou středu v] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [v] LT";
                        case 6:
                            return "[minulou sobotu v] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "před %s",
                s: nt,
                ss: nt,
                m: nt,
                mm: nt,
                h: nt,
                hh: nt,
                d: nt,
                dd: nt,
                M: nt,
                MM: nt,
                y: nt,
                yy: nt
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("cv", {
            months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
            monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
            weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
            weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
            weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
                LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
                LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
            },
            calendar: {
                sameDay: "[Паян] LT [сехетре]",
                nextDay: "[Ыран] LT [сехетре]",
                lastDay: "[Ӗнер] LT [сехетре]",
                nextWeek: "[Ҫитес] dddd LT [сехетре]",
                lastWeek: "[Иртнӗ] dddd LT [сехетре]",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return e + (/\u0441\u0435\u0445\u0435\u0442$/i.exec(e) ? "рен" : /\u04ab\u0443\u043b$/i.exec(e) ? "тан" : "ран")
                },
                past: "%s каялла",
                s: "пӗр-ик ҫеккунт",
                ss: "%d ҫеккунт",
                m: "пӗр минут",
                mm: "%d минут",
                h: "пӗр сехет",
                hh: "%d сехет",
                d: "пӗр кун",
                dd: "%d кун",
                M: "пӗр уйӑх",
                MM: "%d уйӑх",
                y: "пӗр ҫул",
                yy: "%d ҫул"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-\u043c\u04d7\u0448/,
            ordinal: "%d-мӗш",
            week: {
                dow: 1,
                doy: 7
            }
        }), e.defineLocale("cy", {
            months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
            monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
            weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
            weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Heddiw am] LT",
                nextDay: "[Yfory am] LT",
                nextWeek: "dddd [am] LT",
                lastDay: "[Ddoe am] LT",
                lastWeek: "dddd [diwethaf am] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "mewn %s",
                past: "%s yn ôl",
                s: "ychydig eiliadau",
                ss: "%d eiliad",
                m: "munud",
                mm: "%d munud",
                h: "awr",
                hh: "%d awr",
                d: "diwrnod",
                dd: "%d diwrnod",
                M: "mis",
                MM: "%d mis",
                y: "blwyddyn",
                yy: "%d flynedd"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
            ordinal: function(e) {
                var t = "";
                return e > 20 ? t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (t = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + t
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("da", {
            months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "på dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[i] dddd[s kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "få sekunder",
                ss: "%d sekunder",
                m: "et minut",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dage",
                M: "en måned",
                MM: "%d måneder",
                y: "et år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("de-at", {
            months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: it,
                mm: "%d Minuten",
                h: it,
                hh: "%d Stunden",
                d: it,
                dd: it,
                M: it,
                MM: it,
                y: it,
                yy: it
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("de-ch", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: at,
                mm: "%d Minuten",
                h: at,
                hh: "%d Stunden",
                d: at,
                dd: at,
                M: at,
                MM: at,
                y: at,
                yy: at
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("de", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: st,
                mm: "%d Minuten",
                h: st,
                hh: "%d Stunden",
                d: st,
                dd: st,
                M: st,
                MM: st,
                y: st,
                yy: st
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        var Vi = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
            Ji = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
        e.defineLocale("dv", {
            months: Vi,
            monthsShort: Vi,
            weekdays: Ji,
            weekdaysShort: Ji,
            weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/M/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /\u0789\u0786|\u0789\u078a/,
            isPM: function(e) {
                return "މފ" === e
            },
            meridiem: function(e, t, n) {
                return 12 > e ? "މކ" : "މފ"
            },
            calendar: {
                sameDay: "[މިއަދު] LT",
                nextDay: "[މާދަމާ] LT",
                nextWeek: "dddd LT",
                lastDay: "[އިއްޔެ] LT",
                lastWeek: "[ފާއިތުވި] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ތެރޭގައި %s",
                past: "ކުރިން %s",
                s: "ސިކުންތުކޮޅެއް",
                ss: "d% ސިކުންތު",
                m: "މިނިޓެއް",
                mm: "މިނިޓު %d",
                h: "ގަޑިއިރެއް",
                hh: "ގަޑިއިރު %d",
                d: "ދުވަހެއް",
                dd: "ދުވަސް %d",
                M: "މަހެއް",
                MM: "މަސް %d",
                y: "އަހަރެއް",
                yy: "އަހަރު %d"
            },
            preparse: function(e) {
                return e.replace(/\u060c/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 7,
                doy: 12
            }
        }), e.defineLocale("el", {
            monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
            monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
            months: function(e, t) {
                return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
            },
            monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
            weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
            weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
            weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
            },
            isPM: function(e) {
                return "μ" === (e + "").toLowerCase()[0]
            },
            meridiemParse: /[\u03a0\u039c]\.?\u039c?\.?/i,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendarEl: {
                sameDay: "[Σήμερα {}] LT",
                nextDay: "[Αύριο {}] LT",
                nextWeek: "dddd [{}] LT",
                lastDay: "[Χθες {}] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 6:
                            return "[το προηγούμενο] dddd [{}] LT";
                        default:
                            return "[την προηγούμενη] dddd [{}] LT"
                    }
                },
                sameElse: "L"
            },
            calendar: function(e, t) {
                var n = this._calendarEl[e],
                    i = t && t.hours();
                return w(n) && (n = n.apply(t)), n.replace("{}", i % 12 == 1 ? "στη" : "στις")
            },
            relativeTime: {
                future: "σε %s",
                past: "%s πριν",
                s: "λίγα δευτερόλεπτα",
                ss: "%d δευτερόλεπτα",
                m: "ένα λεπτό",
                mm: "%d λεπτά",
                h: "μία ώρα",
                hh: "%d ώρες",
                d: "μία μέρα",
                dd: "%d μέρες",
                M: "ένας μήνας",
                MM: "%d μήνες",
                y: "ένας χρόνος",
                yy: "%d χρόνια"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\u03b7/,
            ordinal: "%dη",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("en-au", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "YYYY-MM-DD",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            }
        }), e.defineLocale("en-gb", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("en-ie", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("en-nz", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("eo", {
            months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
            weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
            weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
            weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D[-a de] MMMM, YYYY",
                LLL: "D[-a de] MMMM, YYYY HH:mm",
                LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
            },
            meridiemParse: /[ap]\.t\.m/i,
            isPM: function(e) {
                return "p" === e.charAt(0).toLowerCase()
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
            },
            calendar: {
                sameDay: "[Hodiaŭ je] LT",
                nextDay: "[Morgaŭ je] LT",
                nextWeek: "dddd [je] LT",
                lastDay: "[Hieraŭ je] LT",
                lastWeek: "[pasinta] dddd [je] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "post %s",
                past: "antaŭ %s",
                s: "sekundoj",
                ss: "%d sekundoj",
                m: "minuto",
                mm: "%d minutoj",
                h: "horo",
                hh: "%d horoj",
                d: "tago",
                dd: "%d tagoj",
                M: "monato",
                MM: "%d monatoj",
                y: "jaro",
                yy: "%d jaroj"
            },
            dayOfMonthOrdinalParse: /\d{1,2}a/,
            ordinal: "%da",
            week: {
                dow: 1,
                doy: 7
            }
        });
        var Ki = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            Zi = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            Xi = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            ea = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-do", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, t) {
                return e ? /-MMM-/.test(t) ? Zi[e.month()] : Ki[e.month()] : Ki
            },
            monthsRegex: ea,
            monthsShortRegex: ea,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: Xi,
            longMonthsParse: Xi,
            shortMonthsParse: Xi,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\xba/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        });
        var ta = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            na = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
        e.defineLocale("es-us", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, t) {
                return e ? /-MMM-/.test(t) ? na[e.month()] : ta[e.month()] : ta
            },
            monthsParseExact: !0,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "MM/DD/YYYY",
                LL: "MMMM [de] D [de] YYYY",
                LLL: "MMMM [de] D [de] YYYY h:mm A",
                LLLL: "dddd, MMMM [de] D [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\xba/,
            ordinal: "%dº",
            week: {
                dow: 0,
                doy: 6
            }
        });
        var ia = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            aa = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            sa = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            oa = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, t) {
                return e ? /-MMM-/.test(t) ? aa[e.month()] : ia[e.month()] : ia
            },
            monthsRegex: oa,
            monthsShortRegex: oa,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: sa,
            longMonthsParse: sa,
            shortMonthsParse: sa,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\xba/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("et", {
            months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
            monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
            weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Täna,] LT",
                nextDay: "[Homme,] LT",
                nextWeek: "[Järgmine] dddd LT",
                lastDay: "[Eile,] LT",
                lastWeek: "[Eelmine] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s pärast",
                past: "%s tagasi",
                s: ot,
                ss: ot,
                m: ot,
                mm: ot,
                h: ot,
                hh: ot,
                d: ot,
                dd: "%d päeva",
                M: ot,
                MM: ot,
                y: ot,
                yy: ot
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("eu", {
            months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
            monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
            monthsParseExact: !0,
            weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY[ko] MMMM[ren] D[a]",
                LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                l: "YYYY-M-D",
                ll: "YYYY[ko] MMM D[a]",
                lll: "YYYY[ko] MMM D[a] HH:mm",
                llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
            },
            calendar: {
                sameDay: "[gaur] LT[etan]",
                nextDay: "[bihar] LT[etan]",
                nextWeek: "dddd LT[etan]",
                lastDay: "[atzo] LT[etan]",
                lastWeek: "[aurreko] dddd LT[etan]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s barru",
                past: "duela %s",
                s: "segundo batzuk",
                ss: "%d segundo",
                m: "minutu bat",
                mm: "%d minutu",
                h: "ordu bat",
                hh: "%d ordu",
                d: "egun bat",
                dd: "%d egun",
                M: "hilabete bat",
                MM: "%d hilabete",
                y: "urte bat",
                yy: "%d urte"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        });
        var ra = {
                1: "۱",
                2: "۲",
                3: "۳",
                4: "۴",
                5: "۵",
                6: "۶",
                7: "۷",
                8: "۸",
                9: "۹",
                0: "۰"
            },
            da = {
                "۱": "1",
                "۲": "2",
                "۳": "3",
                "۴": "4",
                "۵": "5",
                "۶": "6",
                "۷": "7",
                "۸": "8",
                "۹": "9",
                "۰": "0"
            };
        e.defineLocale("fa", {
            months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631|\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/,
            isPM: function(e) {
                return /\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/.test(e)
            },
            meridiem: function(e, t, n) {
                return 12 > e ? "قبل از ظهر" : "بعد از ظهر"
            },
            calendar: {
                sameDay: "[امروز ساعت] LT",
                nextDay: "[فردا ساعت] LT",
                nextWeek: "dddd [ساعت] LT",
                lastDay: "[دیروز ساعت] LT",
                lastWeek: "dddd [پیش] [ساعت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "در %s",
                past: "%s پیش",
                s: "چند ثانیه",
                ss: "ثانیه d%",
                m: "یک دقیقه",
                mm: "%d دقیقه",
                h: "یک ساعت",
                hh: "%d ساعت",
                d: "یک روز",
                dd: "%d روز",
                M: "یک ماه",
                MM: "%d ماه",
                y: "یک سال",
                yy: "%d سال"
            },
            preparse: function(e) {
                return e.replace(/[\u06f0-\u06f9]/g, function(e) {
                    return da[e]
                }).replace(/\u060c/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return ra[e]
                }).replace(/,/g, "،")
            },
            dayOfMonthOrdinalParse: /\d{1,2}\u0645/,
            ordinal: "%dم",
            week: {
                dow: 6,
                doy: 12
            }
        });
        var la = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
            ua = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", la[7], la[8], la[9]];
        e.defineLocale("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] HH.mm",
                llll: "ddd, Do MMM YYYY, [klo] HH.mm"
            },
            calendar: {
                sameDay: "[tänään] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s päästä",
                past: "%s sitten",
                s: rt,
                ss: rt,
                m: rt,
                mm: rt,
                h: rt,
                hh: rt,
                d: rt,
                dd: rt,
                M: rt,
                MM: rt,
                y: rt,
                yy: rt
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("fo", {
            months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
            weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
            weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D. MMMM, YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Í dag kl.] LT",
                nextDay: "[Í morgin kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[Í gjár kl.] LT",
                lastWeek: "[síðstu] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "um %s",
                past: "%s síðani",
                s: "fá sekund",
                ss: "%d sekundir",
                m: "ein minutt",
                mm: "%d minuttir",
                h: "ein tími",
                hh: "%d tímar",
                d: "ein dagur",
                dd: "%d dagar",
                M: "ein mánaði",
                MM: "%d mánaðir",
                y: "eitt ár",
                yy: "%d ár"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("fr-ca", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function(e, t) {
                switch (t) {
                    default:
                        case "M":
                        case "Q":
                        case "D":
                        case "DDD":
                        case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                            case "W":
                            return e + (1 === e ? "re" : "e")
                }
            }
        }), e.defineLocale("fr-ch", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function(e, t) {
                switch (t) {
                    default:
                        case "M":
                        case "Q":
                        case "D":
                        case "DDD":
                        case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                            case "W":
                            return e + (1 === e ? "re" : "e")
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("fr", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "D":
                        return e + (1 === e ? "er" : "");
                    default:
                    case "M":
                    case "Q":
                    case "DDD":
                    case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                    case "W":
                        return e + (1 === e ? "re" : "e")
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        var ca = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
            ha = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
        e.defineLocale("fy", {
            months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
            monthsShort: function(e, t) {
                return e ? /-MMM-/.test(t) ? ha[e.month()] : ca[e.month()] : ca
            },
            monthsParseExact: !0,
            weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
            weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
            weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[hjoed om] LT",
                nextDay: "[moarn om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[juster om] LT",
                lastWeek: "[ôfrûne] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oer %s",
                past: "%s lyn",
                s: "in pear sekonden",
                ss: "%d sekonden",
                m: "ien minút",
                mm: "%d minuten",
                h: "ien oere",
                hh: "%d oeren",
                d: "ien dei",
                dd: "%d dagen",
                M: "ien moanne",
                MM: "%d moannen",
                y: "ien jier",
                yy: "%d jierren"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("gd", {
            months: ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
            monthsShort: ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
            monthsParseExact: !0,
            weekdays: ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
            weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
            weekdaysMin: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[An-diugh aig] LT",
                nextDay: "[A-màireach aig] LT",
                nextWeek: "dddd [aig] LT",
                lastDay: "[An-dè aig] LT",
                lastWeek: "dddd [seo chaidh] [aig] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ann an %s",
                past: "bho chionn %s",
                s: "beagan diogan",
                ss: "%d diogan",
                m: "mionaid",
                mm: "%d mionaidean",
                h: "uair",
                hh: "%d uairean",
                d: "latha",
                dd: "%d latha",
                M: "mìos",
                MM: "%d mìosan",
                y: "bliadhna",
                yy: "%d bliadhna"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function(e) {
                return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("gl", {
            months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
            monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                },
                nextDay: function() {
                    return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
                },
                lastDay: function() {
                    return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
                },
                lastWeek: function() {
                    return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return 0 === e.indexOf("un") ? "n" + e : "en " + e
                },
                past: "hai %s",
                s: "uns segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "unha hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\xba/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("gom-latn", {
            months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
            monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
            weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
            weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "A h:mm [vazta]",
                LTS: "A h:mm:ss [vazta]",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY A h:mm [vazta]",
                LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
                llll: "ddd, D MMM YYYY, A h:mm [vazta]"
            },
            calendar: {
                sameDay: "[Aiz] LT",
                nextDay: "[Faleam] LT",
                nextWeek: "[Ieta to] dddd[,] LT",
                lastDay: "[Kal] LT",
                lastWeek: "[Fatlo] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s",
                past: "%s adim",
                s: dt,
                ss: dt,
                m: dt,
                mm: dt,
                h: dt,
                hh: dt,
                d: dt,
                dd: dt,
                M: dt,
                MM: dt,
                y: dt,
                yy: dt
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "D":
                        return e + "er";
                    default:
                    case "M":
                    case "Q":
                    case "DDD":
                    case "d":
                    case "w":
                    case "W":
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 4
            },
            meridiemParse: /rati|sokalli|donparam|sanje/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "rati" === t ? 4 > e ? e : e + 12 : "sokalli" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return 4 > e ? "rati" : 12 > e ? "sokalli" : 16 > e ? "donparam" : 20 > e ? "sanje" : "rati"
            }
        });
        var ma = {
                1: "૧",
                2: "૨",
                3: "૩",
                4: "૪",
                5: "૫",
                6: "૬",
                7: "૭",
                8: "૮",
                9: "૯",
                0: "૦"
            },
            pa = {
                "૧": "1",
                "૨": "2",
                "૩": "3",
                "૪": "4",
                "૫": "5",
                "૬": "6",
                "૭": "7",
                "૮": "8",
                "૯": "9",
                "૦": "0"
            };
        e.defineLocale("gu", {
            months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
            monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
            monthsParseExact: !0,
            weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
            weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
            weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
            longDateFormat: {
                LT: "A h:mm વાગ્યે",
                LTS: "A h:mm:ss વાગ્યે",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm વાગ્યે",
                LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
            },
            calendar: {
                sameDay: "[આજ] LT",
                nextDay: "[કાલે] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ગઇકાલે] LT",
                lastWeek: "[પાછલા] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s મા",
                past: "%s પેહલા",
                s: "અમુક પળો",
                ss: "%d સેકંડ",
                m: "એક મિનિટ",
                mm: "%d મિનિટ",
                h: "એક કલાક",
                hh: "%d કલાક",
                d: "એક દિવસ",
                dd: "%d દિવસ",
                M: "એક મહિનો",
                MM: "%d મહિનો",
                y: "એક વર્ષ",
                yy: "%d વર્ષ"
            },
            preparse: function(e) {
                return e.replace(/[\u0ae7\u0ae8\u0ae9\u0aea\u0aeb\u0aec\u0aed\u0aee\u0aef\u0ae6]/g, function(e) {
                    return pa[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return ma[e]
                })
            },
            meridiemParse: /\u0ab0\u0abe\u0aa4|\u0aac\u0aaa\u0acb\u0ab0|\u0ab8\u0ab5\u0abe\u0ab0|\u0ab8\u0abe\u0a82\u0a9c/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "રાત" === t ? 4 > e ? e : e + 12 : "સવાર" === t ? e : "બપોર" === t ? e >= 10 ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return 4 > e ? "રાત" : 10 > e ? "સવાર" : 17 > e ? "બપોર" : 20 > e ? "સાંજ" : "રાત"
            },
            week: {
                dow: 0,
                doy: 6
            }
        }), e.defineLocale("he", {
            months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
            monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
            weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
            weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
            weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [ב]MMMM YYYY",
                LLL: "D [ב]MMMM YYYY HH:mm",
                LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                l: "D/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[היום ב־]LT",
                nextDay: "[מחר ב־]LT",
                nextWeek: "dddd [בשעה] LT",
                lastDay: "[אתמול ב־]LT",
                lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "בעוד %s",
                past: "לפני %s",
                s: "מספר שניות",
                ss: "%d שניות",
                m: "דקה",
                mm: "%d דקות",
                h: "שעה",
                hh: function(e) {
                    return 2 === e ? "שעתיים" : e + " שעות"
                },
                d: "יום",
                dd: function(e) {
                    return 2 === e ? "יומיים" : e + " ימים"
                },
                M: "חודש",
                MM: function(e) {
                    return 2 === e ? "חודשיים" : e + " חודשים"
                },
                y: "שנה",
                yy: function(e) {
                    return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
                }
            },
            meridiemParse: /\u05d0\u05d7\u05d4"\u05e6|\u05dc\u05e4\u05e0\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8|\u05d1\u05d1\u05d5\u05e7\u05e8|\u05d1\u05e2\u05e8\u05d1/i,
            isPM: function(e) {
                return /^(\u05d0\u05d7\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05d1\u05e2\u05e8\u05d1)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return 5 > e ? "לפנות בוקר" : 10 > e ? "בבוקר" : 12 > e ? n ? 'לפנה"צ' : "לפני הצהריים" : 18 > e ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
            }
        });
        var fa = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            },
            _a = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            };
        e.defineLocale("hi", {
            months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
            monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
            monthsParseExact: !0,
            weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm बजे",
                LTS: "A h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[कल] LT",
                nextWeek: "dddd, LT",
                lastDay: "[कल] LT",
                lastWeek: "[पिछले] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s में",
                past: "%s पहले",
                s: "कुछ ही क्षण",
                ss: "%d सेकंड",
                m: "एक मिनट",
                mm: "%d मिनट",
                h: "एक घंटा",
                hh: "%d घंटे",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महीने",
                MM: "%d महीने",
                y: "एक वर्ष",
                yy: "%d वर्ष"
            },
            preparse: function(e) {
                return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function(e) {
                    return _a[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return fa[e]
                })
            },
            meridiemParse: /\u0930\u093e\u0924|\u0938\u0941\u092c\u0939|\u0926\u094b\u092a\u0939\u0930|\u0936\u093e\u092e/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "रात" === t ? 4 > e ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return 4 > e ? "रात" : 10 > e ? "सुबह" : 17 > e ? "दोपहर" : 20 > e ? "शाम" : "रात"
            },
            week: {
                dow: 0,
                doy: 6
            }
        }), e.defineLocale("hr", {
            months: {
                format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
            },
            monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[jučer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: lt,
                m: lt,
                mm: lt,
                h: lt,
                hh: lt,
                d: "dan",
                dd: lt,
                M: "mjesec",
                MM: lt,
                y: "godinu",
                yy: lt
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        });
        var ya = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
        e.defineLocale("hu", {
            months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
            monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
            weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
            weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY. MMMM D.",
                LLL: "YYYY. MMMM D. H:mm",
                LLLL: "YYYY. MMMM D., dddd H:mm"
            },
            meridiemParse: /de|du/i,
            isPM: function(e) {
                return "u" === e.charAt(1).toLowerCase()
            },
            meridiem: function(e, t, n) {
                return 12 > e ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU"
            },
            calendar: {
                sameDay: "[ma] LT[-kor]",
                nextDay: "[holnap] LT[-kor]",
                nextWeek: function() {
                    return ct.call(this, !0)
                },
                lastDay: "[tegnap] LT[-kor]",
                lastWeek: function() {
                    return ct.call(this, !1)
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s múlva",
                past: "%s",
                s: ut,
                ss: ut,
                m: ut,
                mm: ut,
                h: ut,
                hh: ut,
                d: ut,
                dd: ut,
                M: ut,
                MM: ut,
                y: ut,
                yy: ut
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("hy-am", {
            months: {
                format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
                standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
            },
            monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
            weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
            weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY թ.",
                LLL: "D MMMM YYYY թ., HH:mm",
                LLLL: "dddd, D MMMM YYYY թ., HH:mm"
            },
            calendar: {
                sameDay: "[այսօր] LT",
                nextDay: "[վաղը] LT",
                lastDay: "[երեկ] LT",
                nextWeek: function() {
                    return "dddd [օրը ժամը] LT"
                },
                lastWeek: function() {
                    return "[անցած] dddd [օրը ժամը] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s հետո",
                past: "%s առաջ",
                s: "մի քանի վայրկյան",
                ss: "%d վայրկյան",
                m: "րոպե",
                mm: "%d րոպե",
                h: "ժամ",
                hh: "%d ժամ",
                d: "օր",
                dd: "%d օր",
                M: "ամիս",
                MM: "%d ամիս",
                y: "տարի",
                yy: "%d տարի"
            },
            meridiemParse: /\u0563\u056b\u0577\u0565\u0580\u057e\u0561|\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561|\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576/,
            isPM: function(e) {
                return /^(\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576)$/.test(e)
            },
            meridiem: function(e) {
                return 4 > e ? "գիշերվա" : 12 > e ? "առավոտվա" : 17 > e ? "ցերեկվա" : "երեկոյան"
            },
            dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(\u056b\u0576|\u0580\u0564)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "DDD":
                    case "w":
                    case "W":
                    case "DDDo":
                        return 1 === e ? e + "-ին" : e + "-րդ";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), e.defineLocale("id", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return 11 > e ? "pagi" : 15 > e ? "siang" : 19 > e ? "sore" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Besok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kemarin pukul] LT",
                lastWeek: "dddd [lalu pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lalu",
                s: "beberapa detik",
                ss: "%d detik",
                m: "semenit",
                mm: "%d menit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), e.defineLocale("is", {
            months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
            weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
            weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
            weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
            },
            calendar: {
                sameDay: "[í dag kl.] LT",
                nextDay: "[á morgun kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[í gær kl.] LT",
                lastWeek: "[síðasta] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "eftir %s",
                past: "fyrir %s síðan",
                s: mt,
                ss: mt,
                m: mt,
                mm: mt,
                h: "klukkustund",
                hh: mt,
                d: mt,
                dd: mt,
                M: mt,
                MM: mt,
                y: mt,
                yy: mt
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("it", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[la scorsa] dddd [alle] LT";
                        default:
                            return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                },
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\xba/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("ja", {
            months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
            weekdaysShort: "日_月_火_水_木_金_土".split("_"),
            weekdaysMin: "日_月_火_水_木_金_土".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日 HH:mm dddd",
                l: "YYYY/MM/DD",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日 HH:mm dddd"
            },
            meridiemParse: /\u5348\u524d|\u5348\u5f8c/i,
            isPM: function(e) {
                return "午後" === e
            },
            meridiem: function(e, t, n) {
                return 12 > e ? "午前" : "午後"
            },
            calendar: {
                sameDay: "[今日] LT",
                nextDay: "[明日] LT",
                nextWeek: "[来週]dddd LT",
                lastDay: "[昨日] LT",
                lastWeek: "[前週]dddd LT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\u65e5/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s後",
                past: "%s前",
                s: "数秒",
                ss: "%d秒",
                m: "1分",
                mm: "%d分",
                h: "1時間",
                hh: "%d時間",
                d: "1日",
                dd: "%d日",
                M: "1ヶ月",
                MM: "%dヶ月",
                y: "1年",
                yy: "%d年"
            }
        }), e.defineLocale("jv", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
            weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /enjing|siyang|sonten|ndalu/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return 11 > e ? "enjing" : 15 > e ? "siyang" : 19 > e ? "sonten" : "ndalu"
            },
            calendar: {
                sameDay: "[Dinten puniko pukul] LT",
                nextDay: "[Mbenjang pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kala wingi pukul] LT",
                lastWeek: "dddd [kepengker pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "wonten ing %s",
                past: "%s ingkang kepengker",
                s: "sawetawis detik",
                ss: "%d detik",
                m: "setunggal menit",
                mm: "%d menit",
                h: "setunggal jam",
                hh: "%d jam",
                d: "sedinten",
                dd: "%d dinten",
                M: "sewulan",
                MM: "%d wulan",
                y: "setaun",
                yy: "%d taun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), e.defineLocale("ka", {
            months: {
                standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
            },
            monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
            weekdays: {
                standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
                isFormat: /(\u10ec\u10d8\u10dc\u10d0|\u10e8\u10d4\u10db\u10d3\u10d4\u10d2)/
            },
            weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
            weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[დღეს] LT[-ზე]",
                nextDay: "[ხვალ] LT[-ზე]",
                lastDay: "[გუშინ] LT[-ზე]",
                nextWeek: "[შემდეგ] dddd LT[-ზე]",
                lastWeek: "[წინა] dddd LT-ზე",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return /(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10ec\u10d4\u10da\u10d8)/.test(e) ? e.replace(/\u10d8$/, "ში") : e + "ში"
                },
                past: function(e) {
                    return /(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10d3\u10e6\u10d4|\u10d7\u10d5\u10d4)/.test(e) ? e.replace(/(\u10d8|\u10d4)$/, "ის უკან") : /\u10ec\u10d4\u10da\u10d8/.test(e) ? e.replace(/\u10ec\u10d4\u10da\u10d8$/, "წლის უკან") : void 0
                },
                s: "რამდენიმე წამი",
                ss: "%d წამი",
                m: "წუთი",
                mm: "%d წუთი",
                h: "საათი",
                hh: "%d საათი",
                d: "დღე",
                dd: "%d დღე",
                M: "თვე",
                MM: "%d თვე",
                y: "წელი",
                yy: "%d წელი"
            },
            dayOfMonthOrdinalParse: /0|1-\u10da\u10d8|\u10db\u10d4-\d{1,2}|\d{1,2}-\u10d4/,
            ordinal: function(e) {
                return 0 === e ? e : 1 === e ? e + "-ლი" : 20 > e || 100 >= e && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        var Aa = {
            0: "-ші",
            1: "-ші",
            2: "-ші",
            3: "-ші",
            4: "-ші",
            5: "-ші",
            6: "-шы",
            7: "-ші",
            8: "-ші",
            9: "-шы",
            10: "-шы",
            20: "-шы",
            30: "-шы",
            40: "-шы",
            50: "-ші",
            60: "-шы",
            70: "-ші",
            80: "-ші",
            90: "-шы",
            100: "-ші"
        };
        e.defineLocale("kk", {
            months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
            monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
            weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
            weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
            weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Бүгін сағат] LT",
                nextDay: "[Ертең сағат] LT",
                nextWeek: "dddd [сағат] LT",
                lastDay: "[Кеше сағат] LT",
                lastWeek: "[Өткен аптаның] dddd [сағат] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ішінде",
                past: "%s бұрын",
                s: "бірнеше секунд",
                ss: "%d секунд",
                m: "бір минут",
                mm: "%d минут",
                h: "бір сағат",
                hh: "%d сағат",
                d: "бір күн",
                dd: "%d күн",
                M: "бір ай",
                MM: "%d ай",
                y: "бір жыл",
                yy: "%d жыл"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(\u0448\u0456|\u0448\u044b)/,
            ordinal: function(e) {
                return e + (Aa[e] || Aa[e % 10] || Aa[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), e.defineLocale("km", {
            months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
                nextDay: "[ស្អែក ម៉ោង] LT",
                nextWeek: "dddd [ម៉ោង] LT",
                lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sទៀត",
                past: "%sមុន",
                s: "ប៉ុន្មានវិនាទី",
                ss: "%d វិនាទី",
                m: "មួយនាទី",
                mm: "%d នាទី",
                h: "មួយម៉ោង",
                hh: "%d ម៉ោង",
                d: "មួយថ្ងៃ",
                dd: "%d ថ្ងៃ",
                M: "មួយខែ",
                MM: "%d ខែ",
                y: "មួយឆ្នាំ",
                yy: "%d ឆ្នាំ"
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        var ga = {
                1: "೧",
                2: "೨",
                3: "೩",
                4: "೪",
                5: "೫",
                6: "೬",
                7: "೭",
                8: "೮",
                9: "೯",
                0: "೦"
            },
            va = {
                "೧": "1",
                "೨": "2",
                "೩": "3",
                "೪": "4",
                "೫": "5",
                "೬": "6",
                "೭": "7",
                "೮": "8",
                "೯": "9",
                "೦": "0"
            };
        e.defineLocale("kn", {
            months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
            monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬ_ಅಕ್ಟೋಬ_ನವೆಂಬ_ಡಿಸೆಂಬ".split("_"),
            monthsParseExact: !0,
            weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
            weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
            weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[ಇಂದು] LT",
                nextDay: "[ನಾಳೆ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ನಿನ್ನೆ] LT",
                lastWeek: "[ಕೊನೆಯ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ನಂತರ",
                past: "%s ಹಿಂದೆ",
                s: "ಕೆಲವು ಕ್ಷಣಗಳು",
                ss: "%d ಸೆಕೆಂಡುಗಳು",
                m: "ಒಂದು ನಿಮಿಷ",
                mm: "%d ನಿಮಿಷ",
                h: "ಒಂದು ಗಂಟೆ",
                hh: "%d ಗಂಟೆ",
                d: "ಒಂದು ದಿನ",
                dd: "%d ದಿನ",
                M: "ಒಂದು ತಿಂಗಳು",
                MM: "%d ತಿಂಗಳು",
                y: "ಒಂದು ವರ್ಷ",
                yy: "%d ವರ್ಷ"
            },
            preparse: function(e) {
                return e.replace(/[\u0ce7\u0ce8\u0ce9\u0cea\u0ceb\u0cec\u0ced\u0cee\u0cef\u0ce6]/g, function(e) {
                    return va[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return ga[e]
                })
            },
            meridiemParse: /\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf|\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6|\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8|\u0cb8\u0c82\u0c9c\u0cc6/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "ರಾತ್ರಿ" === t ? 4 > e ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return 4 > e ? "ರಾತ್ರಿ" : 10 > e ? "ಬೆಳಿಗ್ಗೆ" : 17 > e ? "ಮಧ್ಯಾಹ್ನ" : 20 > e ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(\u0ca8\u0cc6\u0cd5)/,
            ordinal: function(e) {
                return e + "ನೇ"
            },
            week: {
                dow: 0,
                doy: 6
            }
        }), e.defineLocale("ko", {
            months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
            weekdaysShort: "일_월_화_수_목_금_토".split("_"),
            weekdaysMin: "일_월_화_수_목_금_토".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "YYYY.MM.DD",
                LL: "YYYY년 MMMM D일",
                LLL: "YYYY년 MMMM D일 A h:mm",
                LLLL: "YYYY년 MMMM D일 dddd A h:mm",
                l: "YYYY.MM.DD",
                ll: "YYYY년 MMMM D일",
                lll: "YYYY년 MMMM D일 A h:mm",
                llll: "YYYY년 MMMM D일 dddd A h:mm"
            },
            calendar: {
                sameDay: "오늘 LT",
                nextDay: "내일 LT",
                nextWeek: "dddd LT",
                lastDay: "어제 LT",
                lastWeek: "지난주 dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 후",
                past: "%s 전",
                s: "몇 초",
                ss: "%d초",
                m: "1분",
                mm: "%d분",
                h: "한 시간",
                hh: "%d시간",
                d: "하루",
                dd: "%d일",
                M: "한 달",
                MM: "%d달",
                y: "일 년",
                yy: "%d년"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(\uc77c|\uc6d4|\uc8fc)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "일";
                    case "M":
                        return e + "월";
                    case "w":
                    case "W":
                        return e + "주";
                    default:
                        return e
                }
            },
            meridiemParse: /\uc624\uc804|\uc624\ud6c4/,
            isPM: function(e) {
                return "오후" === e
            },
            meridiem: function(e, t, n) {
                return 12 > e ? "오전" : "오후"
            }
        });
        var Ma = {
            0: "-чү",
            1: "-чи",
            2: "-чи",
            3: "-чү",
            4: "-чү",
            5: "-чи",
            6: "-чы",
            7: "-чи",
            8: "-чи",
            9: "-чу",
            10: "-чу",
            20: "-чы",
            30: "-чу",
            40: "-чы",
            50: "-чү",
            60: "-чы",
            70: "-чи",
            80: "-чи",
            90: "-чу",
            100: "-чү"
        };
        e.defineLocale("ky", {
            months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
            monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
            weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
            weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Бүгүн саат] LT",
                nextDay: "[Эртең саат] LT",
                nextWeek: "dddd [саат] LT",
                lastDay: "[Кече саат] LT",
                lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ичинде",
                past: "%s мурун",
                s: "бирнече секунд",
                ss: "%d секунд",
                m: "бир мүнөт",
                mm: "%d мүнөт",
                h: "бир саат",
                hh: "%d саат",
                d: "бир күн",
                dd: "%d күн",
                M: "бир ай",
                MM: "%d ай",
                y: "бир жыл",
                yy: "%d жыл"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(\u0447\u0438|\u0447\u044b|\u0447\u04af|\u0447\u0443)/,
            ordinal: function(e) {
                return e + (Ma[e] || Ma[e % 10] || Ma[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), e.defineLocale("lb", {
            months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
            weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm [Auer]",
                LTS: "H:mm:ss [Auer]",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm [Auer]",
                LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
            },
            calendar: {
                sameDay: "[Haut um] LT",
                sameElse: "L",
                nextDay: "[Muer um] LT",
                nextWeek: "dddd [um] LT",
                lastDay: "[Gëschter um] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 2:
                        case 4:
                            return "[Leschten] dddd [um] LT";
                        default:
                            return "[Leschte] dddd [um] LT"
                    }
                }
            },
            relativeTime: {
                future: function(e) {
                    return ft(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
                },
                past: function(e) {
                    return ft(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
                },
                s: "e puer Sekonnen",
                ss: "%d Sekonnen",
                m: pt,
                mm: "%d Minutten",
                h: pt,
                hh: "%d Stonnen",
                d: pt,
                dd: "%d Deeg",
                M: pt,
                MM: "%d Méint",
                y: pt,
                yy: "%d Joer"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("lo", {
            months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "ວັນdddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2|\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87/,
            isPM: function(e) {
                return "ຕອນແລງ" === e
            },
            meridiem: function(e, t, n) {
                return 12 > e ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
            },
            calendar: {
                sameDay: "[ມື້ນີ້ເວລາ] LT",
                nextDay: "[ມື້ອື່ນເວລາ] LT",
                nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
                lastDay: "[ມື້ວານນີ້ເວລາ] LT",
                lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ອີກ %s",
                past: "%sຜ່ານມາ",
                s: "ບໍ່ເທົ່າໃດວິນາທີ",
                ss: "%d ວິນາທີ",
                m: "1 ນາທີ",
                mm: "%d ນາທີ",
                h: "1 ຊົ່ວໂມງ",
                hh: "%d ຊົ່ວໂມງ",
                d: "1 ມື້",
                dd: "%d ມື້",
                M: "1 ເດືອນ",
                MM: "%d ເດືອນ",
                y: "1 ປີ",
                yy: "%d ປີ"
            },
            dayOfMonthOrdinalParse: /(\u0e97\u0eb5\u0ec8)\d{1,2}/,
            ordinal: function(e) {
                return "ທີ່" + e
            }
        });
        var wa = {
            ss: "sekundė_sekundžių_sekundes",
            m: "minutė_minutės_minutę",
            mm: "minutės_minučių_minutes",
            h: "valanda_valandos_valandą",
            hh: "valandos_valandų_valandas",
            d: "diena_dienos_dieną",
            dd: "dienos_dienų_dienas",
            M: "mėnuo_mėnesio_mėnesį",
            MM: "mėnesiai_mėnesių_mėnesius",
            y: "metai_metų_metus",
            yy: "metai_metų_metus"
        };
        e.defineLocale("lt", {
            months: {
                format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
                isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
            },
            monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
            weekdays: {
                format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
                standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
                isFormat: /dddd HH:mm/
            },
            weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
            weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY [m.] MMMM D [d.]",
                LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                l: "YYYY-MM-DD",
                ll: "YYYY [m.] MMMM D [d.]",
                lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
            },
            calendar: {
                sameDay: "[Šiandien] LT",
                nextDay: "[Rytoj] LT",
                nextWeek: "dddd LT",
                lastDay: "[Vakar] LT",
                lastWeek: "[Praėjusį] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "po %s",
                past: "prieš %s",
                s: function(e, t, n, i) {
                    return t ? "kelios sekundės" : i ? "kelių sekundžių" : "kelias sekundes"
                },
                ss: gt,
                m: _t,
                mm: gt,
                h: _t,
                hh: gt,
                d: _t,
                dd: gt,
                M: _t,
                MM: gt,
                y: _t,
                yy: gt
            },
            dayOfMonthOrdinalParse: /\d{1,2}-oji/,
            ordinal: function(e) {
                return e + "-oji"
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        var ka = {
            ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
            m: "minūtes_minūtēm_minūte_minūtes".split("_"),
            mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
            h: "stundas_stundām_stunda_stundas".split("_"),
            hh: "stundas_stundām_stunda_stundas".split("_"),
            d: "dienas_dienām_diena_dienas".split("_"),
            dd: "dienas_dienām_diena_dienas".split("_"),
            M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            y: "gada_gadiem_gads_gadi".split("_"),
            yy: "gada_gadiem_gads_gadi".split("_")
        };
        e.defineLocale("lv", {
            months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
            weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY.",
                LL: "YYYY. [gada] D. MMMM",
                LLL: "YYYY. [gada] D. MMMM, HH:mm",
                LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
            },
            calendar: {
                sameDay: "[Šodien pulksten] LT",
                nextDay: "[Rīt pulksten] LT",
                nextWeek: "dddd [pulksten] LT",
                lastDay: "[Vakar pulksten] LT",
                lastWeek: "[Pagājušā] dddd [pulksten] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "pēc %s",
                past: "pirms %s",
                s: function(e, t) {
                    return t ? "dažas sekundes" : "dažām sekundēm"
                },
                ss: Mt,
                m: wt,
                mm: Mt,
                h: wt,
                hh: Mt,
                d: wt,
                dd: Mt,
                M: wt,
                MM: Mt,
                y: wt,
                yy: Mt
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        var ba = {
            words: {
                ss: ["sekund", "sekunda", "sekundi"],
                m: ["jedan minut", "jednog minuta"],
                mm: ["minut", "minuta", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mjesec", "mjeseca", "mjeseci"],
                yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && 4 >= e ? t[1] : t[2]
            },
            translate: function(e, t, n) {
                var i = ba.words[n];
                return 1 === n.length ? t ? i[0] : i[1] : e + " " + ba.correctGrammaticalCase(e, i)
            }
        };
        e.defineLocale("me", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sjutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juče u] LT",
                lastWeek: function() {
                    return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "nekoliko sekundi",
                ss: ba.translate,
                m: ba.translate,
                mm: ba.translate,
                h: ba.translate,
                hh: ba.translate,
                d: "dan",
                dd: ba.translate,
                M: "mjesec",
                MM: ba.translate,
                y: "godinu",
                yy: ba.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        }), e.defineLocale("mi", {
            months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
            monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
            monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
            weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
            weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [i] HH:mm",
                LLLL: "dddd, D MMMM YYYY [i] HH:mm"
            },
            calendar: {
                sameDay: "[i teie mahana, i] LT",
                nextDay: "[apopo i] LT",
                nextWeek: "dddd [i] LT",
                lastDay: "[inanahi i] LT",
                lastWeek: "dddd [whakamutunga i] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i roto i %s",
                past: "%s i mua",
                s: "te hēkona ruarua",
                ss: "%d hēkona",
                m: "he meneti",
                mm: "%d meneti",
                h: "te haora",
                hh: "%d haora",
                d: "he ra",
                dd: "%d ra",
                M: "he marama",
                MM: "%d marama",
                y: "he tau",
                yy: "%d tau"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\xba/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("mk", {
            months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
            weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
            weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Денес во] LT",
                nextDay: "[Утре во] LT",
                nextWeek: "[Во] dddd [во] LT",
                lastDay: "[Вчера во] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Изминатата] dddd [во] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Изминатиот] dddd [во] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "после %s",
                past: "пред %s",
                s: "неколку секунди",
                ss: "%d секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дена",
                M: "месец",
                MM: "%d месеци",
                y: "година",
                yy: "%d години"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = e % 100;
                return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && 20 > n ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), e.defineLocale("ml", {
            months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
            monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
            monthsParseExact: !0,
            weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
            weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
            weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
            longDateFormat: {
                LT: "A h:mm -നു",
                LTS: "A h:mm:ss -നു",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm -നു",
                LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
            },
            calendar: {
                sameDay: "[ഇന്ന്] LT",
                nextDay: "[നാളെ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ഇന്നലെ] LT",
                lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s കഴിഞ്ഞ്",
                past: "%s മുൻപ്",
                s: "അൽപ നിമിഷങ്ങൾ",
                ss: "%d സെക്കൻഡ്",
                m: "ഒരു മിനിറ്റ്",
                mm: "%d മിനിറ്റ്",
                h: "ഒരു മണിക്കൂർ",
                hh: "%d മണിക്കൂർ",
                d: "ഒരു ദിവസം",
                dd: "%d ദിവസം",
                M: "ഒരു മാസം",
                MM: "%d മാസം",
                y: "ഒരു വർഷം",
                yy: "%d വർഷം"
            },
            meridiemParse: /\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f|\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46|\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d|\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02|\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f/i,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
            },
            meridiem: function(e, t, n) {
                return 4 > e ? "രാത്രി" : 12 > e ? "രാവിലെ" : 17 > e ? "ഉച്ച കഴിഞ്ഞ്" : 20 > e ? "വൈകുന്നേരം" : "രാത്രി"
            }
        });
        var Da = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            },
            La = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            };
        e.defineLocale("mr", {
            months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
            monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
            monthsParseExact: !0,
            weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm वाजता",
                LTS: "A h:mm:ss वाजता",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm वाजता",
                LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[उद्या] LT",
                nextWeek: "dddd, LT",
                lastDay: "[काल] LT",
                lastWeek: "[मागील] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमध्ये",
                past: "%sपूर्वी",
                s: kt,
                ss: kt,
                m: kt,
                mm: kt,
                h: kt,
                hh: kt,
                d: kt,
                dd: kt,
                M: kt,
                MM: kt,
                y: kt,
                yy: kt
            },
            preparse: function(e) {
                return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function(e) {
                    return La[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return Da[e]
                })
            },
            meridiemParse: /\u0930\u093e\u0924\u094d\u0930\u0940|\u0938\u0915\u093e\u0933\u0940|\u0926\u0941\u092a\u093e\u0930\u0940|\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "रात्री" === t ? 4 > e ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return 4 > e ? "रात्री" : 10 > e ? "सकाळी" : 17 > e ? "दुपारी" : 20 > e ? "सायंकाळी" : "रात्री"
            },
            week: {
                dow: 0,
                doy: 6
            }
        }), e.defineLocale("ms-my", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return 11 > e ? "pagi" : 15 > e ? "tengahari" : 19 > e ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), e.defineLocale("ms", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return 11 > e ? "pagi" : 15 > e ? "tengahari" : 19 > e ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), e.defineLocale("mt", {
            months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
            monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
            weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
            weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
            weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Illum fil-]LT",
                nextDay: "[Għada fil-]LT",
                nextWeek: "dddd [fil-]LT",
                lastDay: "[Il-bieraħ fil-]LT",
                lastWeek: "dddd [li għadda] [fil-]LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "f’ %s",
                past: "%s ilu",
                s: "ftit sekondi",
                ss: "%d sekondi",
                m: "minuta",
                mm: "%d minuti",
                h: "siegħa",
                hh: "%d siegħat",
                d: "ġurnata",
                dd: "%d ġranet",
                M: "xahar",
                MM: "%d xhur",
                y: "sena",
                yy: "%d sni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\xba/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        });
        var Ya = {
                1: "၁",
                2: "၂",
                3: "၃",
                4: "၄",
                5: "၅",
                6: "၆",
                7: "၇",
                8: "၈",
                9: "၉",
                0: "၀"
            },
            Ta = {
                "၁": "1",
                "၂": "2",
                "၃": "3",
                "၄": "4",
                "၅": "5",
                "၆": "6",
                "၇": "7",
                "၈": "8",
                "၉": "9",
                "၀": "0"
            };
        e.defineLocale("my", {
            months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
            monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
            weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
            weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ယနေ.] LT [မှာ]",
                nextDay: "[မနက်ဖြန်] LT [မှာ]",
                nextWeek: "dddd LT [မှာ]",
                lastDay: "[မနေ.က] LT [မှာ]",
                lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                sameElse: "L"
            },
            relativeTime: {
                future: "လာမည့် %s မှာ",
                past: "လွန်ခဲ့သော %s က",
                s: "စက္ကန်.အနည်းငယ်",
                ss: "%d စက္ကန့်",
                m: "တစ်မိနစ်",
                mm: "%d မိနစ်",
                h: "တစ်နာရီ",
                hh: "%d နာရီ",
                d: "တစ်ရက်",
                dd: "%d ရက်",
                M: "တစ်လ",
                MM: "%d လ",
                y: "တစ်နှစ်",
                yy: "%d နှစ်"
            },
            preparse: function(e) {
                return e.replace(/[\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049\u1040]/g, function(e) {
                    return Ta[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return Ya[e]
                })
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "noen sekunder",
                ss: "%d sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                M: "en måned",
                MM: "%d måneder",
                y: "ett år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        var Sa = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            },
            xa = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            };
        e.defineLocale("ne", {
            months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
            monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
            monthsParseExact: !0,
            weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
            weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
            weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "Aको h:mm बजे",
                LTS: "Aको h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, Aको h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
            },
            preparse: function(e) {
                return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function(e) {
                    return xa[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return Sa[e]
                })
            },
            meridiemParse: /\u0930\u093e\u0924\u093f|\u092c\u093f\u0939\u093e\u0928|\u0926\u093f\u0909\u0901\u0938\u094b|\u0938\u093e\u0901\u091d/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "राति" === t ? 4 > e ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return 3 > e ? "राति" : 12 > e ? "बिहान" : 16 > e ? "दिउँसो" : 20 > e ? "साँझ" : "राति"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[भोलि] LT",
                nextWeek: "[आउँदो] dddd[,] LT",
                lastDay: "[हिजो] LT",
                lastWeek: "[गएको] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमा",
                past: "%s अगाडि",
                s: "केही क्षण",
                ss: "%d सेकेण्ड",
                m: "एक मिनेट",
                mm: "%d मिनेट",
                h: "एक घण्टा",
                hh: "%d घण्टा",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महिना",
                MM: "%d महिना",
                y: "एक बर्ष",
                yy: "%d बर्ष"
            },
            week: {
                dow: 0,
                doy: 6
            }
        });
        var Ca = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            Pa = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            Ea = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            Ha = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl-be", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(e, t) {
                return e ? /-MMM-/.test(t) ? Pa[e.month()] : Ca[e.month()] : Ca
            },
            monthsRegex: Ha,
            monthsShortRegex: Ha,
            monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: Ea,
            longMonthsParse: Ea,
            shortMonthsParse: Ea,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        var Oa = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            za = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            ja = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            $a = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(e, t) {
                return e ? /-MMM-/.test(t) ? za[e.month()] : Oa[e.month()] : Oa
            },
            monthsRegex: $a,
            monthsShortRegex: $a,
            monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: ja,
            longMonthsParse: ja,
            shortMonthsParse: ja,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("nn", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
            weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
            weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[I dag klokka] LT",
                nextDay: "[I morgon klokka] LT",
                nextWeek: "dddd [klokka] LT",
                lastDay: "[I går klokka] LT",
                lastWeek: "[Føregåande] dddd [klokka] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s sidan",
                s: "nokre sekund",
                ss: "%d sekund",
                m: "eit minutt",
                mm: "%d minutt",
                h: "ein time",
                hh: "%d timar",
                d: "ein dag",
                dd: "%d dagar",
                M: "ein månad",
                MM: "%d månader",
                y: "eit år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        var Fa = {
                1: "੧",
                2: "੨",
                3: "੩",
                4: "੪",
                5: "੫",
                6: "੬",
                7: "੭",
                8: "੮",
                9: "੯",
                0: "੦"
            },
            Ia = {
                "੧": "1",
                "੨": "2",
                "੩": "3",
                "੪": "4",
                "੫": "5",
                "੬": "6",
                "੭": "7",
                "੮": "8",
                "੯": "9",
                "੦": "0"
            };
        e.defineLocale("pa-in", {
            months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
            weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            longDateFormat: {
                LT: "A h:mm ਵਜੇ",
                LTS: "A h:mm:ss ਵਜੇ",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
                LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
            },
            calendar: {
                sameDay: "[ਅਜ] LT",
                nextDay: "[ਕਲ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ਕਲ] LT",
                lastWeek: "[ਪਿਛਲੇ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ਵਿੱਚ",
                past: "%s ਪਿਛਲੇ",
                s: "ਕੁਝ ਸਕਿੰਟ",
                ss: "%d ਸਕਿੰਟ",
                m: "ਇਕ ਮਿੰਟ",
                mm: "%d ਮਿੰਟ",
                h: "ਇੱਕ ਘੰਟਾ",
                hh: "%d ਘੰਟੇ",
                d: "ਇੱਕ ਦਿਨ",
                dd: "%d ਦਿਨ",
                M: "ਇੱਕ ਮਹੀਨਾ",
                MM: "%d ਮਹੀਨੇ",
                y: "ਇੱਕ ਸਾਲ",
                yy: "%d ਸਾਲ"
            },
            preparse: function(e) {
                return e.replace(/[\u0a67\u0a68\u0a69\u0a6a\u0a6b\u0a6c\u0a6d\u0a6e\u0a6f\u0a66]/g, function(e) {
                    return Ia[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return Fa[e]
                })
            },
            meridiemParse: /\u0a30\u0a3e\u0a24|\u0a38\u0a35\u0a47\u0a30|\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30|\u0a38\u0a3c\u0a3e\u0a2e/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "ਰਾਤ" === t ? 4 > e ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return 4 > e ? "ਰਾਤ" : 10 > e ? "ਸਵੇਰ" : 17 > e ? "ਦੁਪਹਿਰ" : 20 > e ? "ਸ਼ਾਮ" : "ਰਾਤ"
            },
            week: {
                dow: 0,
                doy: 6
            }
        });
        var Wa = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
            Ba = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
        e.defineLocale("pl", {
            months: function(e, t) {
                return e ? "" === t ? "(" + Ba[e.month()] + "|" + Wa[e.month()] + ")" : /D MMMM/.test(t) ? Ba[e.month()] : Wa[e.month()] : Wa
            },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
            weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
            weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
            weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Dziś o] LT",
                nextDay: "[Jutro o] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[W niedzielę o] LT";
                        case 2:
                            return "[We wtorek o] LT";
                        case 3:
                            return "[W środę o] LT";
                        case 6:
                            return "[W sobotę o] LT";
                        default:
                            return "[W] dddd [o] LT"
                    }
                },
                lastDay: "[Wczoraj o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[W zeszłą niedzielę o] LT";
                        case 3:
                            return "[W zeszłą środę o] LT";
                        case 6:
                            return "[W zeszłą sobotę o] LT";
                        default:
                            return "[W zeszły] dddd [o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "%s temu",
                s: "kilka sekund",
                ss: Dt,
                m: Dt,
                mm: Dt,
                h: Dt,
                hh: Dt,
                d: "1 dzień",
                dd: "%d dni",
                M: "miesiąc",
                MM: Dt,
                y: "rok",
                yy: Dt
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("pt-br", {
            months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
            monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "%s atrás",
                s: "poucos segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\xba/,
            ordinal: "%dº"
        }), e.defineLocale("pt", {
            months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
            monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\xba/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("ro", {
            months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
            monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[azi la] LT",
                nextDay: "[mâine la] LT",
                nextWeek: "dddd [la] LT",
                lastDay: "[ieri la] LT",
                lastWeek: "[fosta] dddd [la] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "peste %s",
                past: "%s în urmă",
                s: "câteva secunde",
                ss: Lt,
                m: "un minut",
                mm: Lt,
                h: "o oră",
                hh: Lt,
                d: "o zi",
                dd: Lt,
                M: "o lună",
                MM: Lt,
                y: "un an",
                yy: Lt
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        var Ra = [/^\u044f\u043d\u0432/i, /^\u0444\u0435\u0432/i, /^\u043c\u0430\u0440/i, /^\u0430\u043f\u0440/i, /^\u043c\u0430[\u0439\u044f]/i, /^\u0438\u044e\u043d/i, /^\u0438\u044e\u043b/i, /^\u0430\u0432\u0433/i, /^\u0441\u0435\u043d/i, /^\u043e\u043a\u0442/i, /^\u043d\u043e\u044f/i, /^\u0434\u0435\u043a/i];
        e.defineLocale("ru", {
            months: {
                format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
                standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
            },
            monthsShort: {
                format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
                standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
            },
            weekdays: {
                standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
                isFormat: /\[ ?[\u0412\u0432] ?(?:\u043f\u0440\u043e\u0448\u043b\u0443\u044e|\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e|\u044d\u0442\u0443)? ?\] ?dddd/
            },
            weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            monthsParse: Ra,
            longMonthsParse: Ra,
            shortMonthsParse: Ra,
            monthsRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,
            monthsShortRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,
            monthsStrictRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044f\u044c]|\u0444\u0435\u0432\u0440\u0430\u043b[\u044f\u044c]|\u043c\u0430\u0440\u0442\u0430?|\u0430\u043f\u0440\u0435\u043b[\u044f\u044c]|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044f\u044c]|\u0438\u044e\u043b[\u044f\u044c]|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043e\u043a\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043d\u043e\u044f\u0431\u0440[\u044f\u044c]|\u0434\u0435\u043a\u0430\u0431\u0440[\u044f\u044c])/i,
            monthsShortStrictRegex: /^(\u044f\u043d\u0432\.|\u0444\u0435\u0432\u0440?\.|\u043c\u0430\u0440[\u0442.]|\u0430\u043f\u0440\.|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044c\u044f.]|\u0438\u044e\u043b[\u044c\u044f.]|\u0430\u0432\u0433\.|\u0441\u0435\u043d\u0442?\.|\u043e\u043a\u0442\.|\u043d\u043e\u044f\u0431?\.|\u0434\u0435\u043a\.)/i,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., H:mm",
                LLLL: "dddd, D MMMM YYYY г., H:mm"
            },
            calendar: {
                sameDay: "[Сегодня в] LT",
                nextDay: "[Завтра в] LT",
                lastDay: "[Вчера в] LT",
                nextWeek: function(e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                    switch (this.day()) {
                        case 0:
                            return "[В следующее] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В следующий] dddd [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В следующую] dddd [в] LT"
                    }
                },
                lastWeek: function(e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                    switch (this.day()) {
                        case 0:
                            return "[В прошлое] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В прошлый] dddd [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В прошлую] dddd [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "через %s",
                past: "%s назад",
                s: "несколько секунд",
                ss: Yt,
                m: Yt,
                mm: Yt,
                h: "час",
                hh: Yt,
                d: "день",
                dd: Yt,
                M: "месяц",
                MM: Yt,
                y: "год",
                yy: Yt
            },
            meridiemParse: /\u043d\u043e\u0447\u0438|\u0443\u0442\u0440\u0430|\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430/i,
            isPM: function(e) {
                return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return 4 > e ? "ночи" : 12 > e ? "утра" : 17 > e ? "дня" : "вечера"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e|\u044f)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                        return e + "-й";
                    case "D":
                        return e + "-го";
                    case "w":
                    case "W":
                        return e + "-я";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        var qa = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
            Qa = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
        e.defineLocale("sd", {
            months: qa,
            monthsShort: qa,
            weekdays: Qa,
            weekdaysShort: Qa,
            weekdaysMin: Qa,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd، D MMMM YYYY HH:mm"
            },
            meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/,
            isPM: function(e) {
                return "شام" === e
            },
            meridiem: function(e, t, n) {
                return 12 > e ? "صبح" : "شام"
            },
            calendar: {
                sameDay: "[اڄ] LT",
                nextDay: "[سڀاڻي] LT",
                nextWeek: "dddd [اڳين هفتي تي] LT",
                lastDay: "[ڪالهه] LT",
                lastWeek: "[گزريل هفتي] dddd [تي] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s پوء",
                past: "%s اڳ",
                s: "چند سيڪنڊ",
                ss: "%d سيڪنڊ",
                m: "هڪ منٽ",
                mm: "%d منٽ",
                h: "هڪ ڪلاڪ",
                hh: "%d ڪلاڪ",
                d: "هڪ ڏينهن",
                dd: "%d ڏينهن",
                M: "هڪ مهينو",
                MM: "%d مهينا",
                y: "هڪ سال",
                yy: "%d سال"
            },
            preparse: function(e) {
                return e.replace(/\u060c/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("se", {
            months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
            monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
            weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
            weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
            weekdaysMin: "s_v_m_g_d_b_L".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "MMMM D. [b.] YYYY",
                LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
            },
            calendar: {
                sameDay: "[otne ti] LT",
                nextDay: "[ihttin ti] LT",
                nextWeek: "dddd [ti] LT",
                lastDay: "[ikte ti] LT",
                lastWeek: "[ovddit] dddd [ti] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s geažes",
                past: "maŋit %s",
                s: "moadde sekunddat",
                ss: "%d sekunddat",
                m: "okta minuhta",
                mm: "%d minuhtat",
                h: "okta diimmu",
                hh: "%d diimmut",
                d: "okta beaivi",
                dd: "%d beaivvit",
                M: "okta mánnu",
                MM: "%d mánut",
                y: "okta jahki",
                yy: "%d jagit"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("si", {
            months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
            monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
            weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
            weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
            weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "a h:mm",
                LTS: "a h:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY MMMM D",
                LLL: "YYYY MMMM D, a h:mm",
                LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
            },
            calendar: {
                sameDay: "[අද] LT[ට]",
                nextDay: "[හෙට] LT[ට]",
                nextWeek: "dddd LT[ට]",
                lastDay: "[ඊයේ] LT[ට]",
                lastWeek: "[පසුගිය] dddd LT[ට]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sකින්",
                past: "%sකට පෙර",
                s: "තත්පර කිහිපය",
                ss: "තත්පර %d",
                m: "මිනිත්තුව",
                mm: "මිනිත්තු %d",
                h: "පැය",
                hh: "පැය %d",
                d: "දිනය",
                dd: "දින %d",
                M: "මාසය",
                MM: "මාස %d",
                y: "වසර",
                yy: "වසර %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2} \u0dc0\u0dd0\u0db1\u0dd2/,
            ordinal: function(e) {
                return e + " වැනි"
            },
            meridiemParse: /\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4|\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4|\u0db4\u0dd9.\u0dc0|\u0db4.\u0dc0./,
            isPM: function(e) {
                return "ප.ව." === e || "පස් වරු" === e
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
            }
        });
        var Ua = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
            Na = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
        e.defineLocale("sk", {
            months: Ua,
            monthsShort: Na,
            weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
            weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[dnes o] LT",
                nextDay: "[zajtra o] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [o] LT";
                        case 3:
                            return "[v stredu o] LT";
                        case 4:
                            return "[vo štvrtok o] LT";

                        case 5:
                            return "[v piatok o] LT";
                        case 6:
                            return "[v sobotu o] LT"
                    }
                },
                lastDay: "[včera o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[minulú nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[minulý] dddd [o] LT";
                        case 3:
                            return "[minulú stredu o] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [o] LT";
                        case 6:
                            return "[minulú sobotu o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pred %s",
                s: St,
                ss: St,
                m: St,
                mm: St,
                h: St,
                hh: St,
                d: St,
                dd: St,
                M: St,
                MM: St,
                y: St,
                yy: St
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danes ob] LT",
                nextDay: "[jutri ob] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v] [nedeljo] [ob] LT";
                        case 3:
                            return "[v] [sredo] [ob] LT";
                        case 6:
                            return "[v] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[v] dddd [ob] LT"
                    }
                },
                lastDay: "[včeraj ob] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[prejšnjo] [nedeljo] [ob] LT";
                        case 3:
                            return "[prejšnjo] [sredo] [ob] LT";
                        case 6:
                            return "[prejšnjo] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prejšnji] dddd [ob] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "čez %s",
                past: "pred %s",
                s: xt,
                ss: xt,
                m: xt,
                mm: xt,
                h: xt,
                hh: xt,
                d: xt,
                dd: xt,
                M: xt,
                MM: xt,
                y: xt,
                yy: xt
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        }), e.defineLocale("sq", {
            months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
            monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
            weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
            weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
            weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /PD|MD/,
            isPM: function(e) {
                return "M" === e.charAt(0)
            },
            meridiem: function(e, t, n) {
                return 12 > e ? "PD" : "MD"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Sot në] LT",
                nextDay: "[Nesër në] LT",
                nextWeek: "dddd [në] LT",
                lastDay: "[Dje në] LT",
                lastWeek: "dddd [e kaluar në] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "në %s",
                past: "%s më parë",
                s: "disa sekonda",
                ss: "%d sekonda",
                m: "një minutë",
                mm: "%d minuta",
                h: "një orë",
                hh: "%d orë",
                d: "një ditë",
                dd: "%d ditë",
                M: "një muaj",
                MM: "%d muaj",
                y: "një vit",
                yy: "%d vite"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        var Ga = {
            words: {
                ss: ["секунда", "секунде", "секунди"],
                m: ["један минут", "једне минуте"],
                mm: ["минут", "минуте", "минута"],
                h: ["један сат", "једног сата"],
                hh: ["сат", "сата", "сати"],
                dd: ["дан", "дана", "дана"],
                MM: ["месец", "месеца", "месеци"],
                yy: ["година", "године", "година"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && 4 >= e ? t[1] : t[2]
            },
            translate: function(e, t, n) {
                var i = Ga.words[n];
                return 1 === n.length ? t ? i[0] : i[1] : e + " " + Ga.correctGrammaticalCase(e, i)
            }
        };
        e.defineLocale("sr-cyrl", {
            months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
            monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
            monthsParseExact: !0,
            weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
            weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
            weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[данас у] LT",
                nextDay: "[сутра у] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[у] [недељу] [у] LT";
                        case 3:
                            return "[у] [среду] [у] LT";
                        case 6:
                            return "[у] [суботу] [у] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[у] dddd [у] LT"
                    }
                },
                lastDay: "[јуче у] LT",
                lastWeek: function() {
                    return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "пре %s",
                s: "неколико секунди",
                ss: Ga.translate,
                m: Ga.translate,
                mm: Ga.translate,
                h: Ga.translate,
                hh: Ga.translate,
                d: "дан",
                dd: Ga.translate,
                M: "месец",
                MM: Ga.translate,
                y: "годину",
                yy: Ga.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        });
        var Va = {
            words: {
                ss: ["sekunda", "sekunde", "sekundi"],
                m: ["jedan minut", "jedne minute"],
                mm: ["minut", "minute", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mesec", "meseca", "meseci"],
                yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && 4 >= e ? t[1] : t[2]
            },
            translate: function(e, t, n) {
                var i = Va.words[n];
                return 1 === n.length ? t ? i[0] : i[1] : e + " " + Va.correctGrammaticalCase(e, i)
            }
        };
        e.defineLocale("sr", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedelju] [u] LT";
                        case 3:
                            return "[u] [sredu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juče u] LT",
                lastWeek: function() {
                    return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pre %s",
                s: "nekoliko sekundi",
                ss: Va.translate,
                m: Va.translate,
                mm: Va.translate,
                h: Va.translate,
                hh: Va.translate,
                d: "dan",
                dd: Va.translate,
                M: "mesec",
                MM: Va.translate,
                y: "godinu",
                yy: Va.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        }), e.defineLocale("ss", {
            months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
            monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
            weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
            weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
            weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Namuhla nga] LT",
                nextDay: "[Kusasa nga] LT",
                nextWeek: "dddd [nga] LT",
                lastDay: "[Itolo nga] LT",
                lastWeek: "dddd [leliphelile] [nga] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "nga %s",
                past: "wenteka nga %s",
                s: "emizuzwana lomcane",
                ss: "%d mzuzwana",
                m: "umzuzu",
                mm: "%d emizuzu",
                h: "lihora",
                hh: "%d emahora",
                d: "lilanga",
                dd: "%d emalanga",
                M: "inyanga",
                MM: "%d tinyanga",
                y: "umnyaka",
                yy: "%d iminyaka"
            },
            meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
            meridiem: function(e, t, n) {
                return 11 > e ? "ekuseni" : 15 > e ? "emini" : 19 > e ? "entsambama" : "ebusuku"
            },
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: "%d",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
            weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
            weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Idag] LT",
                nextDay: "[Imorgon] LT",
                lastDay: "[Igår] LT",
                nextWeek: "[På] dddd LT",
                lastWeek: "[I] dddd[s] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "för %s sedan",
                s: "några sekunder",
                ss: "%d sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en månad",
                MM: "%d månader",
                y: "ett år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e")
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("sw", {
            months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
            weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
            weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[leo saa] LT",
                nextDay: "[kesho saa] LT",
                nextWeek: "[wiki ijayo] dddd [saat] LT",
                lastDay: "[jana] LT",
                lastWeek: "[wiki iliyopita] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s baadaye",
                past: "tokea %s",
                s: "hivi punde",
                ss: "sekunde %d",
                m: "dakika moja",
                mm: "dakika %d",
                h: "saa limoja",
                hh: "masaa %d",
                d: "siku moja",
                dd: "masiku %d",
                M: "mwezi mmoja",
                MM: "miezi %d",
                y: "mwaka mmoja",
                yy: "miaka %d"
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        var Ja = {
                1: "௧",
                2: "௨",
                3: "௩",
                4: "௪",
                5: "௫",
                6: "௬",
                7: "௭",
                8: "௮",
                9: "௯",
                0: "௦"
            },
            Ka = {
                "௧": "1",
                "௨": "2",
                "௩": "3",
                "௪": "4",
                "௫": "5",
                "௬": "6",
                "௭": "7",
                "௮": "8",
                "௯": "9",
                "௦": "0"
            };
        e.defineLocale("ta", {
            months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
            weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
            weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, HH:mm",
                LLLL: "dddd, D MMMM YYYY, HH:mm"
            },
            calendar: {
                sameDay: "[இன்று] LT",
                nextDay: "[நாளை] LT",
                nextWeek: "dddd, LT",
                lastDay: "[நேற்று] LT",
                lastWeek: "[கடந்த வாரம்] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s இல்",
                past: "%s முன்",
                s: "ஒரு சில விநாடிகள்",
                ss: "%d விநாடிகள்",
                m: "ஒரு நிமிடம்",
                mm: "%d நிமிடங்கள்",
                h: "ஒரு மணி நேரம்",
                hh: "%d மணி நேரம்",
                d: "ஒரு நாள்",
                dd: "%d நாட்கள்",
                M: "ஒரு மாதம்",
                MM: "%d மாதங்கள்",
                y: "ஒரு வருடம்",
                yy: "%d ஆண்டுகள்"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\u0bb5\u0ba4\u0bc1/,
            ordinal: function(e) {
                return e + "வது"
            },
            preparse: function(e) {
                return e.replace(/[\u0be7\u0be8\u0be9\u0bea\u0beb\u0bec\u0bed\u0bee\u0bef\u0be6]/g, function(e) {
                    return Ka[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return Ja[e]
                })
            },
            meridiemParse: /\u0baf\u0bbe\u0bae\u0bae\u0bcd|\u0bb5\u0bc8\u0b95\u0bb1\u0bc8|\u0b95\u0bbe\u0bb2\u0bc8|\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd|\u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1|\u0bae\u0bbe\u0bb2\u0bc8/,
            meridiem: function(e, t, n) {
                return 2 > e ? " யாமம்" : 6 > e ? " வைகறை" : 10 > e ? " காலை" : 14 > e ? " நண்பகல்" : 18 > e ? " எற்பாடு" : 22 > e ? " மாலை" : " யாமம்"
            },
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "யாமம்" === t ? 2 > e ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12
            },
            week: {
                dow: 0,
                doy: 6
            }
        }), e.defineLocale("te", {
            months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
            monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
            monthsParseExact: !0,
            weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
            weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
            weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[నేడు] LT",
                nextDay: "[రేపు] LT",
                nextWeek: "dddd, LT",
                lastDay: "[నిన్న] LT",
                lastWeek: "[గత] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s లో",
                past: "%s క్రితం",
                s: "కొన్ని క్షణాలు",
                ss: "%d సెకన్లు",
                m: "ఒక నిమిషం",
                mm: "%d నిమిషాలు",
                h: "ఒక గంట",
                hh: "%d గంటలు",
                d: "ఒక రోజు",
                dd: "%d రోజులు",
                M: "ఒక నెల",
                MM: "%d నెలలు",
                y: "ఒక సంవత్సరం",
                yy: "%d సంవత్సరాలు"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\u0c35/,
            ordinal: "%dవ",
            meridiemParse: /\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f|\u0c09\u0c26\u0c2f\u0c02|\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "రాత్రి" === t ? 4 > e ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return 4 > e ? "రాత్రి" : 10 > e ? "ఉదయం" : 17 > e ? "మధ్యాహ్నం" : 20 > e ? "సాయంత్రం" : "రాత్రి"
            },
            week: {
                dow: 0,
                doy: 6
            }
        }), e.defineLocale("tet", {
            months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juniu_Juliu_Augustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Aug_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sexta_Sabadu".split("_"),
            weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sext_Sab".split("_"),
            weekdaysMin: "Do_Seg_Te_Ku_Ki_Sex_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ohin iha] LT",
                nextDay: "[Aban iha] LT",
                nextWeek: "dddd [iha] LT",
                lastDay: "[Horiseik iha] LT",
                lastWeek: "dddd [semana kotuk] [iha] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "iha %s",
                past: "%s liuba",
                s: "minutu balun",
                ss: "minutu %d",
                m: "minutu ida",
                mm: "minutus %d",
                h: "horas ida",
                hh: "horas %d",
                d: "loron ida",
                dd: "loron %d",
                M: "fulan ida",
                MM: "fulan %d",
                y: "tinan ida",
                yy: "tinan %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("th", {
            months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
            monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
            monthsParseExact: !0,
            weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
            weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
            weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY เวลา H:mm",
                LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
            },
            meridiemParse: /\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07|\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07/,
            isPM: function(e) {
                return "หลังเที่ยง" === e
            },
            meridiem: function(e, t, n) {
                return 12 > e ? "ก่อนเที่ยง" : "หลังเที่ยง"
            },
            calendar: {
                sameDay: "[วันนี้ เวลา] LT",
                nextDay: "[พรุ่งนี้ เวลา] LT",
                nextWeek: "dddd[หน้า เวลา] LT",
                lastDay: "[เมื่อวานนี้ เวลา] LT",
                lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "อีก %s",
                past: "%sที่แล้ว",
                s: "ไม่กี่วินาที",
                ss: "%d วินาที",
                m: "1 นาที",
                mm: "%d นาที",
                h: "1 ชั่วโมง",
                hh: "%d ชั่วโมง",
                d: "1 วัน",
                dd: "%d วัน",
                M: "1 เดือน",
                MM: "%d เดือน",
                y: "1 ปี",
                yy: "%d ปี"
            }
        }), e.defineLocale("tl-ph", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "LT [ngayong araw]",
                nextDay: "[Bukas ng] LT",
                nextWeek: "LT [sa susunod na] dddd",
                lastDay: "LT [kahapon]",
                lastWeek: "LT [noong nakaraang] dddd",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                ss: "%d segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        var Za = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
        e.defineLocale("tlh", {
            months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
            monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
            monthsParseExact: !0,
            weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[DaHjaj] LT",
                nextDay: "[wa’leS] LT",
                nextWeek: "LLL",
                lastDay: "[wa’Hu’] LT",
                lastWeek: "LLL",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    var t = e;
                    return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
                },
                past: function(e) {
                    var t = e;
                    return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
                },
                s: "puS lup",
                ss: Ct,
                m: "wa’ tup",
                mm: Ct,
                h: "wa’ rep",
                hh: Ct,
                d: "wa’ jaj",
                dd: Ct,
                M: "wa’ jar",
                MM: Ct,
                y: "wa’ DIS",
                yy: Ct
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        var Xa = {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'üncü",
            4: "'üncü",
            100: "'üncü",
            6: "'ncı",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'ıncı",
            90: "'ıncı"
        };
        e.defineLocale("tr", {
            months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
            monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
            weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[yarın saat] LT",
                nextWeek: "[gelecek] dddd [saat] LT",
                lastDay: "[dün] LT",
                lastWeek: "[geçen] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s önce",
                s: "birkaç saniye",
                ss: "%d saniye",
                m: "bir dakika",
                mm: "%d dakika",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir yıl",
                yy: "%d yıl"
            },
            dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|\xfcnc\xfc|nc\u0131|uncu|\u0131nc\u0131)/,
            ordinal: function(e) {
                if (0 === e) return e + "'ıncı";
                var t = e % 10;
                return e + (Xa[t] || Xa[e % 100 - t] || Xa[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), e.defineLocale("tzl", {
            months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
            monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
            weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
            weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
            weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM [dallas] YYYY",
                LLL: "D. MMMM [dallas] YYYY HH.mm",
                LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
            },
            meridiemParse: /d\'o|d\'a/i,
            isPM: function(e) {
                return "d'o" === e.toLowerCase()
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
            },
            calendar: {
                sameDay: "[oxhi à] LT",
                nextDay: "[demà à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[ieiri à] LT",
                lastWeek: "[sür el] dddd [lasteu à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "osprei %s",
                past: "ja%s",
                s: Pt,
                ss: Pt,
                m: Pt,
                mm: Pt,
                h: Pt,
                hh: Pt,
                d: Pt,
                dd: Pt,
                M: Pt,
                MM: Pt,
                y: Pt,
                yy: Pt
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("tzm-latn", {
            months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[asdkh g] LT",
                nextDay: "[aska g] LT",
                nextWeek: "dddd [g] LT",
                lastDay: "[assant g] LT",
                lastWeek: "dddd [g] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dadkh s yan %s",
                past: "yan %s",
                s: "imik",
                ss: "%d imik",
                m: "minuḍ",
                mm: "%d minuḍ",
                h: "saɛa",
                hh: "%d tassaɛin",
                d: "ass",
                dd: "%d ossan",
                M: "ayowr",
                MM: "%d iyyirn",
                y: "asgas",
                yy: "%d isgasn"
            },
            week: {
                dow: 6,
                doy: 12
            }
        }), e.defineLocale("tzm", {
            months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                nextWeek: "dddd [ⴴ] LT",
                lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                lastWeek: "dddd [ⴴ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                past: "ⵢⴰⵏ %s",
                s: "ⵉⵎⵉⴽ",
                ss: "%d ⵉⵎⵉⴽ",
                m: "ⵎⵉⵏⵓⴺ",
                mm: "%d ⵎⵉⵏⵓⴺ",
                h: "ⵙⴰⵄⴰ",
                hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                d: "ⴰⵙⵙ",
                dd: "%d oⵙⵙⴰⵏ",
                M: "ⴰⵢoⵓⵔ",
                MM: "%d ⵉⵢⵢⵉⵔⵏ",
                y: "ⴰⵙⴳⴰⵙ",
                yy: "%d ⵉⵙⴳⴰⵙⵏ"
            },
            week: {
                dow: 6,
                doy: 12
            }
        }), e.defineLocale("uk", {
            months: {
                format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
            },
            monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
            weekdays: function(e, t) {
                var n = {
                    nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                    accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                    genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
                };
                return e ? n[/(\[[\u0412\u0432\u0423\u0443]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:\u043c\u0438\u043d\u0443\u043b\u043e\u0457|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : n.nominative
            },
            weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY р.",
                LLL: "D MMMM YYYY р., HH:mm",
                LLLL: "dddd, D MMMM YYYY р., HH:mm"
            },
            calendar: {
                sameDay: Ht("[Сьогодні "),
                nextDay: Ht("[Завтра "),
                lastDay: Ht("[Вчора "),
                nextWeek: Ht("[У] dddd ["),
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return Ht("[Минулої] dddd [").call(this);
                        case 1:
                        case 2:
                        case 4:
                            return Ht("[Минулого] dddd [").call(this)
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "%s тому",
                s: "декілька секунд",
                ss: Et,
                m: Et,
                mm: Et,
                h: "годину",
                hh: Et,
                d: "день",
                dd: Et,
                M: "місяць",
                MM: Et,
                y: "рік",
                yy: Et
            },
            meridiemParse: /\u043d\u043e\u0447\u0456|\u0440\u0430\u043d\u043a\u0443|\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430/,
            isPM: function(e) {
                return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return 4 > e ? "ночі" : 12 > e ? "ранку" : 17 > e ? "дня" : "вечора"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return e + "-й";
                    case "D":
                        return e + "-го";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        var es = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
            ts = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
        return e.defineLocale("ur", {
            months: es,
            monthsShort: es,
            weekdays: ts,
            weekdaysShort: ts,
            weekdaysMin: ts,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd، D MMMM YYYY HH:mm"
            },
            meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/,
            isPM: function(e) {
                return "شام" === e
            },
            meridiem: function(e, t, n) {
                return 12 > e ? "صبح" : "شام"
            },
            calendar: {
                sameDay: "[آج بوقت] LT",
                nextDay: "[کل بوقت] LT",
                nextWeek: "dddd [بوقت] LT",
                lastDay: "[گذشتہ روز بوقت] LT",
                lastWeek: "[گذشتہ] dddd [بوقت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s بعد",
                past: "%s قبل",
                s: "چند سیکنڈ",
                ss: "%d سیکنڈ",
                m: "ایک منٹ",
                mm: "%d منٹ",
                h: "ایک گھنٹہ",
                hh: "%d گھنٹے",
                d: "ایک دن",
                dd: "%d دن",
                M: "ایک ماہ",
                MM: "%d ماہ",
                y: "ایک سال",
                yy: "%d سال"
            },
            preparse: function(e) {
                return e.replace(/\u060c/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("uz-latn", {
            months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
            monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
            weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
            weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
            weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Bugun soat] LT [da]",
                nextDay: "[Ertaga] LT [da]",
                nextWeek: "dddd [kuni soat] LT [da]",
                lastDay: "[Kecha soat] LT [da]",
                lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Yaqin %s ichida",
                past: "Bir necha %s oldin",
                s: "soniya",
                ss: "%d soniya",
                m: "bir daqiqa",
                mm: "%d daqiqa",
                h: "bir soat",
                hh: "%d soat",
                d: "bir kun",
                dd: "%d kun",
                M: "bir oy",
                MM: "%d oy",
                y: "bir yil",
                yy: "%d yil"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), e.defineLocale("uz", {
            months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
            weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
            weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Бугун соат] LT [да]",
                nextDay: "[Эртага] LT [да]",
                nextWeek: "dddd [куни соат] LT [да]",
                lastDay: "[Кеча соат] LT [да]",
                lastWeek: "[Утган] dddd [куни соат] LT [да]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Якин %s ичида",
                past: "Бир неча %s олдин",
                s: "фурсат",
                ss: "%d фурсат",
                m: "бир дакика",
                mm: "%d дакика",
                h: "бир соат",
                hh: "%d соат",
                d: "бир кун",
                dd: "%d кун",
                M: "бир ой",
                MM: "%d ой",
                y: "бир йил",
                yy: "%d йил"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), e.defineLocale("vi", {
            months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
            monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
            monthsParseExact: !0,
            weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /sa|ch/i,
            isPM: function(e) {
                return /^ch$/i.test(e)
            },
            meridiem: function(e, t, n) {
                return 12 > e ? n ? "sa" : "SA" : n ? "ch" : "CH"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [năm] YYYY",
                LLL: "D MMMM [năm] YYYY HH:mm",
                LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                l: "DD/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hôm nay lúc] LT",
                nextDay: "[Ngày mai lúc] LT",
                nextWeek: "dddd [tuần tới lúc] LT",
                lastDay: "[Hôm qua lúc] LT",
                lastWeek: "dddd [tuần rồi lúc] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s tới",
                past: "%s trước",
                s: "vài giây",
                ss: "%d giây",
                m: "một phút",
                mm: "%d phút",
                h: "một giờ",
                hh: "%d giờ",
                d: "một ngày",
                dd: "%d ngày",
                M: "một tháng",
                MM: "%d tháng",
                y: "một năm",
                yy: "%d năm"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("x-pseudo", {
            months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
            monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
            monthsParseExact: !0,
            weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
            weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
            weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[T~ódá~ý át] LT",
                nextDay: "[T~ómó~rró~w át] LT",
                nextWeek: "dddd [át] LT",
                lastDay: "[Ý~ést~érdá~ý át] LT",
                lastWeek: "[L~ást] dddd [át] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "í~ñ %s",
                past: "%s á~gó",
                s: "á ~féw ~sécó~ñds",
                ss: "%d s~écóñ~ds",
                m: "á ~míñ~úté",
                mm: "%d m~íñú~tés",
                h: "á~ñ hó~úr",
                hh: "%d h~óúrs",
                d: "á ~dáý",
                dd: "%d d~áýs",
                M: "á ~móñ~th",
                MM: "%d m~óñt~hs",
                y: "á ~ýéár",
                yy: "%d ý~éárs"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("yo", {
            months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
            monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
            weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
            weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
            weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Ònì ni] LT",
                nextDay: "[Ọ̀la ni] LT",
                nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
                lastDay: "[Àna ni] LT",
                lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ní %s",
                past: "%s kọjá",
                s: "ìsẹjú aayá die",
                ss: "aayá %d",
                m: "ìsẹjú kan",
                mm: "ìsẹjú %d",
                h: "wákati kan",
                hh: "wákati %d",
                d: "ọjọ́ kan",
                dd: "ọjọ́ %d",
                M: "osù kan",
                MM: "osù %d",
                y: "ọdún kan",
                yy: "ọdún %d"
            },
            dayOfMonthOrdinalParse: /\u1ecdj\u1ecd\u0301\s\d{1,2}/,
            ordinal: "ọjọ́ %d",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("zh-cn", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日Ah点mm分",
                LLLL: "YYYY年M月D日ddddAh点mm分",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function(e, t, n) {
                var i = 100 * e + t;
                return 600 > i ? "凌晨" : 900 > i ? "早上" : 1130 > i ? "上午" : 1230 > i ? "中午" : 1800 > i ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u5468)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "周";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s内",
                past: "%s前",
                s: "几秒",
                ss: "%d 秒",
                m: "1 分钟",
                mm: "%d 分钟",
                h: "1 小时",
                hh: "%d 小时",
                d: "1 天",
                dd: "%d 天",
                M: "1 个月",
                MM: "%d 个月",
                y: "1 年",
                yy: "%d 年"
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), e.defineLocale("zh-hk", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                var i = 100 * e + t;
                return 600 > i ? "凌晨" : 900 > i ? "早上" : 1130 > i ? "上午" : 1230 > i ? "中午" : 1800 > i ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "週";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                ss: "%d 秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        }), e.defineLocale("zh-tw", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                var i = 100 * e + t;
                return 600 > i ? "凌晨" : 900 > i ? "早上" : 1130 > i ? "上午" : 1230 > i ? "中午" : 1800 > i ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "週";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                ss: "%d 秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        }), e.locale("en"), e
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery", "moment"], e) : "object" == typeof exports ? e(require("jquery"), require("moment")) : e(jQuery, moment)
    }(function(e, t) {
        function n(n, a) {
            var o, r, d;
            this.element = n, this.options = e.extend(!0, {}, s, a), this.options.moment && (t = this.options.moment), this.constraints = {
                next: !0,
                today: !0,
                previous: !0,
                nextYear: !0,
                previousYear: !0
            }, this.options.events.length && (this.options.events = this.options.multiDayEvents ? this.addMultiDayMomentObjectsToEvents(this.options.events) : this.addMomentObjectToEvents(this.options.events)), this.options.lengthOfTime.months || this.options.lengthOfTime.days ? this.options.lengthOfTime.months ? (this.options.lengthOfTime.days = null, this.intervalStart = this.options.lengthOfTime.startDate ? t(this.options.lengthOfTime.startDate).startOf("month") : this.options.startWithMonth ? t(this.options.startWithMonth).startOf("month") : t().startOf("month"), this.intervalEnd = t(this.intervalStart).add(this.options.lengthOfTime.months, "months").subtract(1, "days"), this.month = this.intervalStart.clone()) : this.options.lengthOfTime.days && (this.intervalStart = this.options.lengthOfTime.startDate ? t(this.options.lengthOfTime.startDate).startOf("day") : t().weekday(0).startOf("day"), this.intervalEnd = t(this.intervalStart).add(this.options.lengthOfTime.days - 1, "days").endOf("day"), this.month = this.intervalStart.clone()) : (this.month = t().startOf("month"), this.intervalStart = t(this.month), this.intervalEnd = t(this.month).endOf("month")), this.options.startWithMonth && (this.month = t(this.options.startWithMonth).startOf("month"), this.intervalStart = t(this.month), this.intervalEnd = this.options.lengthOfTime.days ? t(this.month).add(this.options.lengthOfTime.days - 1, "days").endOf("day") : t(this.month).endOf("month")), this.options.constraints && (this.options.constraints.startDate && (d = t(this.options.constraints.startDate), this.options.lengthOfTime.days ? (this.intervalStart.isBefore(d, "week") && (this.intervalStart = d.startOf("week")), o = this.intervalStart.diff(this.intervalEnd, "days"), (o < this.options.lengthOfTime.days || this.intervalEnd.isBefore(this.intervalStart)) && (this.intervalEnd = t(this.intervalStart).add(this.options.lengthOfTime.days - 1, "days").endOf("day"), this.month = this.intervalStart.clone())) : (this.intervalStart.isBefore(d, "month") && (this.intervalStart.set("month", d.month()).set("year", d.year()), this.month.set("month", d.month()).set("year", d.year())), this.intervalEnd.isBefore(d, "month") && this.intervalEnd.set("month", d.month()).set("year", d.year()))), this.options.constraints.endDate && (r = t(this.options.constraints.endDate), this.options.lengthOfTime.days ? this.intervalStart.isAfter(r, "week") && (this.intervalStart = t(r).endOf("week").subtract(this.options.lengthOfTime.days - 1, "days").startOf("day"), this.intervalEnd = t(r).endOf("week"), this.month = this.intervalStart.clone()) : (this.intervalEnd.isAfter(r, "month") && (this.intervalEnd.set("month", r.month()).set("year", r.year()), this.month.set("month", r.month()).set("year", r.year())), this.intervalStart.isAfter(r, "month") && this.intervalStart.set("month", r.month()).set("year", r.year())))), this._defaults = s, this._name = i, this.init()
        }
        var i = "clndr",
            a = "<div class='clndr-controls'><div class='clndr-control-button'><span class='clndr-previous-button'>previous</span></div><div class='month'><%= month %> <%= year %></div><div class='clndr-control-button rightalign'><span class='clndr-next-button'>next</span></div></div><table class='clndr-table' border='0' cellspacing='0' cellpadding='0'><thead><tr class='header-days'><% for(var i = 0; i < daysOfTheWeek.length; i++) { %><td class='header-day'><%= daysOfTheWeek[i] %></td><% } %></tr></thead><tbody><% for(var i = 0; i < numberOfRows; i++){ %><tr><% for(var j = 0; j < 7; j++){ %><% var d = j + i * 7; %><td class='<%= days[d].classes %>'><div class='day-contents'><%= days[d].day %></div></td><% } %></tr><% } %></tbody></table>",
            s = {
                events: [],
                ready: null,
                extras: null,
                render: null,
                moment: null,
                weekOffset: 0,
                constraints: null,
                forceSixRows: null,
                selectedDate: null,
                doneRendering: null,
                daysOfTheWeek: null,
                multiDayEvents: null,
                startWithMonth: null,
                dateParameter: "date",
                template: a,
                showAdjacentMonths: !0,
                trackSelectedDate: !1,
                adjacentDaysChangeMonth: !1,
                ignoreInactiveDaysInSelection: null,
                lengthOfTime: {
                    days: null,
                    interval: 1,
                    months: null
                },
                clickEvents: {
                    click: null,
                    today: null,
                    nextYear: null,
                    nextMonth: null,
                    nextInterval: null,
                    previousYear: null,
                    onYearChange: null,
                    previousMonth: null,
                    onMonthChange: null,
                    previousInterval: null,
                    onIntervalChange: null
                },
                targets: {
                    day: "day",
                    empty: "empty",
                    nextButton: "clndr-next-button",
                    todayButton: "clndr-today-button",
                    previousButton: "clndr-previous-button",
                    nextYearButton: "clndr-next-year-button",
                    previousYearButton: "clndr-previous-year-button"
                },
                classes: {
                    past: "past",
                    today: "today",
                    event: "event",
                    inactive: "inactive",
                    selected: "selected",
                    lastMonth: "last-month",
                    nextMonth: "next-month",
                    adjacentMonth: "adjacent-month"
                }
            };
        n.prototype.init = function() {
            if (this.daysOfTheWeek = this.options.daysOfTheWeek || [], !this.options.daysOfTheWeek) {
                this.daysOfTheWeek = [];
                for (var n = 0; 7 > n; n++) this.daysOfTheWeek.push(t().weekday(n).format("dd").charAt(0))
            }
            if (this.options.weekOffset && (this.daysOfTheWeek = this.shiftWeekdayLabels(this.options.weekOffset)), !e.isFunction(this.options.render)) {
                if (this.options.render = null, "undefined" == typeof _) throw new Error("Underscore was not found. Please include underscore.js OR provide a custom render function.");
                this.compiledClndrTemplate = _.template(this.options.template)
            }
            e(this.element).html("<div class='clndr'></div>"), this.calendarContainer = e(".clndr", this.element), this.bindEvents(), this.render(), this.options.ready && this.options.ready.apply(this, [])
        }, n.prototype.shiftWeekdayLabels = function(e) {
            for (var t = this.daysOfTheWeek, n = 0; e > n; n++) t.push(t.shift());
            return t
        }, n.prototype.createDaysObject = function(n, i) {
            {
                var a, s, o, r, d, l, u = [],
                    c = n.clone();
                i.diff(n, "days")
            }
            if (this._currentIntervalStart = n.clone(), this.eventsLastMonth = [], this.eventsNextMonth = [], this.eventsThisInterval = [], this.options.events.length && (this.eventsThisInterval = e(this.options.events).filter(function() {
                    var e = this._clndrStartDateObject.isAfter(i),
                        t = this._clndrEndDateObject.isBefore(n);
                    return t || e ? !1 : !0
                }).toArray(), this.options.showAdjacentMonths && (a = n.clone().subtract(1, "months").startOf("month"), s = a.clone().endOf("month"), o = i.clone().add(1, "months").startOf("month"), r = o.clone().endOf("month"), this.eventsLastMonth = e(this.options.events).filter(function() {
                    var e = this._clndrEndDateObject.isBefore(a),
                        t = this._clndrStartDateObject.isAfter(s);
                    return e || t ? !1 : !0
                }).toArray(), this.eventsNextMonth = e(this.options.events).filter(function() {
                    var e = this._clndrEndDateObject.isBefore(o),
                        t = this._clndrStartDateObject.isAfter(r);
                    return e || t ? !1 : !0
                }).toArray())), !this.options.lengthOfTime.days)
                if (d = c.weekday() - this.options.weekOffset, 0 > d && (d += 7), this.options.showAdjacentMonths)
                    for (var h = 1; d >= h; h++) {
                        var m = t([n.year(), n.month(), h]).subtract(d, "days");
                        u.push(this.createDayObject(m, this.eventsLastMonth))
                    } else
                        for (var h = 0; d > h; h++) u.push(this.calendarDay({
                            classes: this.options.targets.empty + " " + this.options.classes.lastMonth
                        }));
            for (l = n.clone(); l.isBefore(i) || l.isSame(i, "day");) u.push(this.createDayObject(l.clone(), this.eventsThisInterval)), l.add(1, "days");
            if (!this.options.lengthOfTime.days)
                for (; u.length % 7 !== 0;) u.push(this.options.showAdjacentMonths ? this.createDayObject(l.clone(), this.eventsNextMonth) : this.calendarDay({
                    classes: this.options.targets.empty + " " + this.options.classes.nextMonth
                })), l.add(1, "days");
            if (this.options.forceSixRows && 42 !== u.length)
                for (; u.length < 42;) this.options.showAdjacentMonths ? (u.push(this.createDayObject(l.clone(), this.eventsNextMonth)), l.add(1, "days")) : u.push(this.calendarDay({
                    classes: this.options.targets.empty + " " + this.options.classes.nextMonth
                }));
            return u
        }, n.prototype.createDayObject = function(e, n) {
            var i, a, s, o = 0,
                r = t(),
                d = [],
                l = "",
                u = {
                    isToday: !1,
                    isInactive: !1,
                    isAdjacentMonth: !1
                };
            for (!e.isValid() && e.hasOwnProperty("_d") && void 0 != e._d && (e = t(e._d)), o; o < n.length; o++) {
                var c = n[o]._clndrStartDateObject,
                    h = n[o]._clndrEndDateObject;
                (e.isSame(c, "day") || e.isAfter(c, "day")) && (e.isSame(h, "day") || e.isBefore(h, "day")) && d.push(n[o])
            }
            return r.format("YYYY-MM-DD") == e.format("YYYY-MM-DD") && (l += " " + this.options.classes.today, u.isToday = !0), e.isBefore(r, "day") && (l += " " + this.options.classes.past), d.length && (l += " " + this.options.classes.event), this.options.lengthOfTime.days || (this._currentIntervalStart.month() > e.month() ? (l += " " + this.options.classes.adjacentMonth, u.isAdjacentMonth = !0, l += this._currentIntervalStart.year() === e.year() ? " " + this.options.classes.lastMonth : " " + this.options.classes.nextMonth) : this._currentIntervalStart.month() < e.month() && (l += " " + this.options.classes.adjacentMonth, u.isAdjacentMonth = !0, l += this._currentIntervalStart.year() === e.year() ? " " + this.options.classes.nextMonth : " " + this.options.classes.lastMonth)), this.options.constraints && (a = t(this.options.constraints.endDate), i = t(this.options.constraints.startDate), this.options.constraints.startDate && e.isBefore(i) && (l += " " + this.options.classes.inactive, u.isInactive = !0), this.options.constraints.endDate && e.isAfter(a) && (l += " " + this.options.classes.inactive, u.isInactive = !0)), !e.isValid() && e.hasOwnProperty("_d") && void 0 != e._d && (e = t(e._d)), s = t(this.options.selectedDate), this.options.selectedDate && e.isSame(s, "day") && (l += " " + this.options.classes.selected), l += " calendar-day-" + e.format("YYYY-MM-DD"), l += " calendar-dow-" + e.weekday(), this.calendarDay({
                date: e,
                day: e.date(),
                events: d,
                properties: u,
                classes: this.options.targets.day + l
            })
        }, n.prototype.render = function() {
            var e, n, i, a, s, o = {},
                r = null,
                d = null,
                l = this.intervalEnd.clone().add(1, "years"),
                u = this.intervalStart.clone().subtract(1, "years");
            if (this.calendarContainer.empty(), this.options.lengthOfTime.days) e = this.createDaysObject(this.intervalStart.clone(), this.intervalEnd.clone()), o = {
                days: e,
                months: [],
                year: null,
                month: null,
                eventsLastMonth: [],
                eventsNextMonth: [],
                eventsThisMonth: [],
                extras: this.options.extras,
                daysOfTheWeek: this.daysOfTheWeek,
                intervalEnd: this.intervalEnd.clone(),
                numberOfRows: Math.ceil(e.length / 7),
                intervalStart: this.intervalStart.clone(),
                eventsThisInterval: this.eventsThisInterval
            };
            else if (this.options.lengthOfTime.months) {
                for (n = [], s = 0, a = [], p = 0; p < this.options.lengthOfTime.months; p++) {
                    var c = this.intervalStart.clone().add(p, "months"),
                        h = c.clone().endOf("month"),
                        e = this.createDaysObject(c, h);
                    a.push(this.eventsThisInterval), n.push({
                        days: e,
                        month: c
                    })
                }
                for (p = 0; p < n.length; p++) s += Math.ceil(n[p].days.length / 7);
                o = {
                    days: [],
                    year: null,
                    month: null,
                    months: n,
                    eventsThisMonth: [],
                    numberOfRows: s,
                    extras: this.options.extras,
                    intervalEnd: this.intervalEnd,
                    intervalStart: this.intervalStart,
                    daysOfTheWeek: this.daysOfTheWeek,
                    eventsLastMonth: this.eventsLastMonth,
                    eventsNextMonth: this.eventsNextMonth,
                    eventsThisInterval: a
                }
            } else e = this.createDaysObject(this.month.clone().startOf("month"), this.month.clone().endOf("month")), i = this.month, o = {
                days: e,
                months: [],
                intervalEnd: null,
                intervalStart: null,
                year: this.month.year(),
                eventsThisInterval: null,
                extras: this.options.extras,
                month: this.month.format("MMMM"),
                daysOfTheWeek: this.daysOfTheWeek,
                eventsLastMonth: this.eventsLastMonth,
                eventsNextMonth: this.eventsNextMonth,
                numberOfRows: Math.ceil(e.length / 7),
                eventsThisMonth: this.eventsThisInterval
            };
            if (this.calendarContainer.html(this.options.render ? this.options.render.apply(this, [o]) : this.compiledClndrTemplate(o)), this.options.constraints) {
                for (var m in this.options.targets) m != this.options.targets.day && this.element.find("." + this.options.targets[m]).toggleClass(this.options.classes.inactive, !1);
                for (var p in this.constraints) this.constraints[p] = !0;
                this.options.constraints.startDate && (d = t(this.options.constraints.startDate)), this.options.constraints.endDate && (r = t(this.options.constraints.endDate)), d && (d.isAfter(this.intervalStart) || d.isSame(this.intervalStart, "day")) && (this.element.find("." + this.options.targets.previousButton).toggleClass(this.options.classes.inactive, !0), this.constraints.previous = !this.constraints.previous), r && (r.isBefore(this.intervalEnd) || r.isSame(this.intervalEnd, "day")) && (this.element.find("." + this.options.targets.nextButton).toggleClass(this.options.classes.inactive, !0), this.constraints.next = !this.constraints.next), d && d.isAfter(u) && (this.element.find("." + this.options.targets.previousYearButton).toggleClass(this.options.classes.inactive, !0), this.constraints.previousYear = !this.constraints.previousYear), r && r.isBefore(l) && (this.element.find("." + this.options.targets.nextYearButton).toggleClass(this.options.classes.inactive, !0), this.constraints.nextYear = !this.constraints.nextYear), (d && d.isAfter(t(), "month") || r && r.isBefore(t(), "month")) && (this.element.find("." + this.options.targets.today).toggleClass(this.options.classes.inactive, !0), this.constraints.today = !this.constraints.today)
            }
            this.options.doneRendering && this.options.doneRendering.apply(this, [])
        }, n.prototype.bindEvents = function() {
            var t = {},
                n = this,
                i = e(this.element),
                a = this.options.targets,
                s = n.options.classes,
                o = this.options.useTouchEvents === !0 ? "touchstart" : "click",
                r = o + ".clndr";
            i.off(r, "." + a.day).off(r, "." + a.empty).off(r, "." + a.nextButton).off(r, "." + a.todayButton).off(r, "." + a.previousButton).off(r, "." + a.nextYearButton).off(r, "." + a.previousYearButton), i.on(r, "." + a.day, function(t) {
                var a, o = e(t.currentTarget);
                if (n.options.clickEvents.click && (a = n.buildTargetObject(t.currentTarget, !0), n.options.clickEvents.click.apply(n, [a])), n.options.adjacentDaysChangeMonth && (o.is("." + s.lastMonth) ? n.backActionWithContext(n) : o.is("." + s.nextMonth) && n.forwardActionWithContext(n)), n.options.trackSelectedDate) {
                    if (n.options.ignoreInactiveDaysInSelection && o.hasClass(s.inactive)) return;
                    n.options.selectedDate = n.getTargetDateString(t.currentTarget), i.find("." + s.selected).removeClass(s.selected), o.addClass(s.selected)
                }
            }), i.on(r, "." + a.empty, function(t) {
                var i, a = e(t.currentTarget);
                n.options.clickEvents.click && (i = n.buildTargetObject(t.currentTarget, !1), n.options.clickEvents.click.apply(n, [i])), n.options.adjacentDaysChangeMonth && (a.is("." + s.lastMonth) ? n.backActionWithContext(n) : a.is("." + s.nextMonth) && n.forwardActionWithContext(n))
            }), t = {
                context: this
            }, i.on(r, "." + a.todayButton, t, this.todayAction).on(r, "." + a.nextButton, t, this.forwardAction).on(r, "." + a.previousButton, t, this.backAction).on(r, "." + a.nextYearButton, t, this.nextYearAction).on(r, "." + a.previousYearButton, t, this.previousYearAction)
        }, n.prototype.buildTargetObject = function(n, i) {
            var a, s, o = {
                date: null,
                events: [],
                element: n
            };
            return i && (a = this.getTargetDateString(n), o.date = a ? t(a) : null, this.options.events && (s = this.options.multiDayEvents ? function() {
                var e = o.date.isSame(this._clndrStartDateObject, "day"),
                    t = o.date.isAfter(this._clndrStartDateObject, "day"),
                    n = o.date.isSame(this._clndrEndDateObject, "day"),
                    i = o.date.isBefore(this._clndrEndDateObject, "day");
                return (e || t) && (n || i)
            } : function() {
                var e = this._clndrStartDateObject.format("YYYY-MM-DD");
                return e == a
            }, o.events = e.makeArray(e(this.options.events).filter(s)))), o
        }, n.prototype.getTargetDateString = function(e) {
            var t = e.className.indexOf("calendar-day-");
            return -1 !== t ? e.className.substring(t + 13, t + 23) : null
        }, n.prototype.triggerEvents = function(e, n) {
            var i, a, s, o, r, d, l, u, c, h = e.options.lengthOfTime,
                m = e.options.clickEvents,
                p = {
                    end: e.intervalEnd,
                    start: e.intervalStart
                },
                f = [t(e.intervalStart), t(e.intervalEnd)],
                _ = [t(e.month)];
            o = p.start.isAfter(n.start) && (1 == Math.abs(p.start.month() - n.start.month()) || 11 === n.start.month() && 0 === p.start.month()), r = p.start.isBefore(n.start) && (1 == Math.abs(n.start.month() - p.start.month()) || 0 === n.start.month() && 11 === p.start.month()), d = p.start.month() !== n.start.month() || p.start.year() !== n.start.year(), i = p.start.year() - n.start.year() === 1 || p.end.year() - n.end.year() === 1, a = n.start.year() - p.start.year() === 1 || n.end.year() - p.end.year() === 1, s = p.start.year() !== n.start.year(), h.days || h.months ? (l = p.start.isAfter(n.start), u = p.start.isBefore(n.start), c = l || u, l && m.nextInterval && m.nextInterval.apply(e, f), u && m.previousInterval && m.previousInterval.apply(e, f), c && m.onIntervalChange && m.onIntervalChange.apply(e, f)) : (o && m.nextMonth && m.nextMonth.apply(e, _), r && m.previousMonth && m.previousMonth.apply(e, _), d && m.onMonthChange && m.onMonthChange.apply(e, _), i && m.nextYear && m.nextYear.apply(e, _), a && m.previousYear && m.previousYear.apply(e, _), s && m.onYearChange && m.onYearChange.apply(e, _))
        }, n.prototype.back = function(t) {
            var n = arguments.length > 1 ? arguments[1] : this,
                i = n.options.lengthOfTime,
                a = {
                    withCallbacks: !1
                },
                s = {
                    end: n.intervalEnd.clone(),
                    start: n.intervalStart.clone()
                };
            return t = e.extend(!0, {}, a, t), n.constraints.previous ? (i.days ? (n.intervalStart.subtract(i.interval, "days").startOf("day"), n.intervalEnd = n.intervalStart.clone().add(i.days - 1, "days").endOf("day"), n.month = n.intervalStart.clone()) : (n.intervalStart.subtract(i.interval, "months").startOf("month"), n.intervalEnd = n.intervalStart.clone().add(i.months || i.interval, "months").subtract(1, "days").endOf("month"), n.month = n.intervalStart.clone()), n.render(), t.withCallbacks && n.triggerEvents(n, s), n) : n
        }, n.prototype.backAction = function(e) {
            var t = e.data.context;
            t.backActionWithContext(t)
        }, n.prototype.backActionWithContext = function(e) {
            e.back({
                withCallbacks: !0
            }, e)
        }, n.prototype.previous = function(e) {
            return this.back(e)
        }, n.prototype.forward = function(t) {
            var n = arguments.length > 1 ? arguments[1] : this,
                i = n.options.lengthOfTime,
                a = {
                    withCallbacks: !1
                },
                s = {
                    end: n.intervalEnd.clone(),
                    start: n.intervalStart.clone()
                };
            return t = e.extend(!0, {}, a, t), n.constraints.next ? (n.options.lengthOfTime.days ? (n.intervalStart.add(i.interval, "days").startOf("day"), n.intervalEnd = n.intervalStart.clone().add(i.days - 1, "days").endOf("day"), n.month = n.intervalStart.clone()) : (n.intervalStart.add(i.interval, "months").startOf("month"), n.intervalEnd = n.intervalStart.clone().add(i.months || i.interval, "months").subtract(1, "days").endOf("month"), n.month = n.intervalStart.clone()), n.render(), t.withCallbacks && n.triggerEvents(n, s), n) : n
        }, n.prototype.forwardAction = function(e) {
            var t = e.data.context;
            t.forwardActionWithContext(t)
        }, n.prototype.forwardActionWithContext = function(e) {
            e.forward({
                withCallbacks: !0
            }, e)
        }, n.prototype.next = function(e) {
            return this.forward(e)
        }, n.prototype.previousYear = function(t) {
            var n = arguments.length > 1 ? arguments[1] : this,
                i = {
                    withCallbacks: !1
                },
                a = {
                    end: n.intervalEnd.clone(),
                    start: n.intervalStart.clone()
                };
            return t = e.extend(!0, {}, i, t), n.constraints.previousYear ? (n.month.subtract(1, "year"), n.intervalStart.subtract(1, "year"), n.intervalEnd.subtract(1, "year"), n.render(), t.withCallbacks && n.triggerEvents(n, a), n) : n
        }, n.prototype.previousYearAction = function(e) {
            var t = e.data.context;
            t.previousYear({
                withCallbacks: !0
            }, t)
        }, n.prototype.nextYear = function(t) {
            var n = arguments.length > 1 ? arguments[1] : this,
                i = {
                    withCallbacks: !1
                },
                a = {
                    end: n.intervalEnd.clone(),
                    start: n.intervalStart.clone()
                };
            return t = e.extend(!0, {}, i, t), n.constraints.nextYear ? (n.month.add(1, "year"), n.intervalStart.add(1, "year"), n.intervalEnd.add(1, "year"), n.render(), t.withCallbacks && n.triggerEvents(n, a), n) : n
        }, n.prototype.nextYearAction = function(e) {
            var t = e.data.context;
            t.nextYear({
                withCallbacks: !0
            }, t)
        }, n.prototype.today = function(n) {
            var i = arguments.length > 1 ? arguments[1] : this,
                a = i.options.lengthOfTime,
                s = {
                    withCallbacks: !1
                },
                o = {
                    end: i.intervalEnd.clone(),
                    start: i.intervalStart.clone()
                };
            n = e.extend(!0, {}, s, n), i.month = t().startOf("month"), a.days ? (i.intervalStart = a.startDate ? t().weekday(a.startDate.weekday()).startOf("day") : t().weekday(0).startOf("day"), i.intervalEnd = i.intervalStart.clone().add(a.days - 1, "days").endOf("day")) : (i.intervalStart = t().startOf("month"), i.intervalEnd = i.intervalStart.clone().add(a.months || a.interval, "months").subtract(1, "days").endOf("month")), i.intervalStart.isSame(o.start) && i.intervalEnd.isSame(o.end) || i.render(), n.withCallbacks && (i.options.clickEvents.today && i.options.clickEvents.today.apply(i, [t(i.month)]), i.triggerEvents(i, o))
        }, n.prototype.todayAction = function(e) {
            var t = e.data.context;
            t.today({
                withCallbacks: !0
            }, t)
        }, n.prototype.setMonth = function(e, t) {
            var n = this.options.lengthOfTime,
                i = {
                    end: this.intervalEnd.clone(),
                    start: this.intervalStart.clone()
                };
            return n.days || n.months ? (console.log("You are using a custom date interval. Use Clndr.setIntervalStart(startDate) instead."), this) : (this.month.month(e), this.intervalStart = this.month.clone().startOf("month"), this.intervalEnd = this.intervalStart.clone().endOf("month"), this.render(), t && t.withCallbacks && this.triggerEvents(this, i), this)
        }, n.prototype.setYear = function(e, t) {
            var n = {
                end: this.intervalEnd.clone(),
                start: this.intervalStart.clone()
            };
            return this.month.year(e), this.intervalEnd.year(e), this.intervalStart.year(e), this.render(), t && t.withCallbacks && this.triggerEvents(this, n), this
        }, n.prototype.setIntervalStart = function(e, n) {
            var i = this.options.lengthOfTime,
                a = {
                    end: this.intervalEnd.clone(),
                    start: this.intervalStart.clone()
                };
            return i.days || i.months ? (i.days ? (this.intervalStart = t(e).startOf("day"), this.intervalEnd = this.intervalStart.clone().add(i - 1, "days").endOf("day")) : (this.intervalStart = t(e).startOf("month"), this.intervalEnd = this.intervalStart.clone().add(i.months || i.interval, "months").subtract(1, "days").endOf("month")), this.month = this.intervalStart.clone(), this.render(), n && n.withCallbacks && this.triggerEvents(this, a), this) : (console.log("You are using a custom date interval. Use Clndr.setIntervalStart(startDate) instead."), this)
        }, n.prototype.setExtras = function(e) {
            return this.options.extras = e, this.render(), this
        }, n.prototype.setEvents = function(e) {
            return this.options.events = this.options.multiDayEvents ? this.addMultiDayMomentObjectsToEvents(e) : this.addMomentObjectToEvents(e), this.render(), this
        }, n.prototype.addEvents = function(t) {
            var n = arguments.length > 1 ? arguments[1] : !0;
            return this.options.events = this.options.multiDayEvents ? e.merge(this.options.events, this.addMultiDayMomentObjectsToEvents(t)) : e.merge(this.options.events, this.addMomentObjectToEvents(t)), n && this.render(), this
        }, n.prototype.removeEvents = function(e) {
            for (var t = this.options.events.length - 1; t >= 0; t--) 1 == e(this.options.events[t]) && this.options.events.splice(t, 1);
            return this.render(), this
        }, n.prototype.addMomentObjectToEvents = function(e) {
            var n = 0,
                i = this;
            for (n; n < e.length; n++) e[n]._clndrStartDateObject = t(e[n][i.options.dateParameter]), e[n]._clndrEndDateObject = t(e[n][i.options.dateParameter]);
            return e
        }, n.prototype.addMultiDayMomentObjectsToEvents = function(e) {
            var n = 0,
                i = this,
                a = i.options.multiDayEvents;
            for (n; n < e.length; n++) {
                var s = e[n][a.endDate],
                    o = e[n][a.startDate];
                s || o ? (e[n]._clndrEndDateObject = t(s || o), e[n]._clndrStartDateObject = t(o || s)) : (e[n]._clndrEndDateObject = t(e[n][a.singleDay]), e[n]._clndrStartDateObject = t(e[n][a.singleDay]))
            }
            return e
        }, n.prototype.calendarDay = function(t) {
            var n = {
                day: "",
                date: null,
                events: [],
                classes: this.options.targets.empty
            };
            return e.extend({}, n, t)
        }, n.prototype.destroy = function() {
            var t = e(this.calendarContainer);
            t.parent().data("plugin_clndr", null), this.options = s, t.empty().remove(), this.element = null
        }, e.fn.clndr = function(e) {
            var t;
            if (this.length > 1) throw new Error("CLNDR does not support multiple elements yet. Make sure your clndr selector returns only one element.");
            if (!this.length) throw new Error("CLNDR cannot be instantiated on an empty selector.");
            return this.data("plugin_clndr") ? this.data("plugin_clndr") : (t = new n(this, e), this.data("plugin_clndr", t), t)
        }
    }), ! function(e) {
        "use strict";

        function t(e) {
            if (void 0 === Function.prototype.name) {
                var t = /function\s([^(]{1,})\(/,
                    n = t.exec(e.toString());
                return n && n.length > 1 ? n[1].trim() : ""
            }
            return void 0 === e.prototype ? e.constructor.name : e.prototype.constructor.name
        }

        function n(e) {
            return /true/.test(e) ? !0 : /false/.test(e) ? !1 : isNaN(1 * e) ? e : parseFloat(e)
        }

        function i(e) {
            return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
        }
        var a = "6.2.4",
            s = {
                version: a,
                _plugins: {},
                _uuids: [],
                rtl: function() {
                    return "rtl" === e("html").attr("dir")
                },
                plugin: function(e, n) {
                    var a = n || t(e),
                        s = i(a);
                    this._plugins[s] = this[a] = e
                },
                registerPlugin: function(e, n) {
                    var a = n ? i(n) : t(e.constructor).toLowerCase();
                    e.uuid = this.GetYoDigits(6, a), e.$element.attr("data-" + a) || e.$element.attr("data-" + a, e.uuid), e.$element.data("zfPlugin") || e.$element.data("zfPlugin", e), e.$element.trigger("init.zf." + a), this._uuids.push(e.uuid)
                },
                unregisterPlugin: function(e) {
                    var n = i(t(e.$element.data("zfPlugin").constructor));
                    this._uuids.splice(this._uuids.indexOf(e.uuid), 1), e.$element.removeAttr("data-" + n).removeData("zfPlugin").trigger("destroyed.zf." + n);
                    for (var a in e) e[a] = null
                },
                reInit: function(t) {
                    var n = t instanceof e;
                    try {
                        if (n) t.each(function() {
                            e(this).data("zfPlugin")._init()
                        });
                        else {
                            var a = typeof t,
                                s = this,
                                o = {
                                    object: function(t) {
                                        t.forEach(function(t) {
                                            t = i(t), e("[data-" + t + "]").foundation("_init")
                                        })
                                    },
                                    string: function() {
                                        t = i(t), e("[data-" + t + "]").foundation("_init")
                                    },
                                    undefined: function() {
                                        this.object(Object.keys(s._plugins))
                                    }
                                };
                            o[a](t)
                        }
                    } catch (r) {
                        console.error(r)
                    } finally {
                        return t
                    }
                },
                GetYoDigits: function(e, t) {
                    return e = e || 6, Math.round(Math.pow(36, e + 1) - Math.random() * Math.pow(36, e)).toString(36).slice(1) + (t ? "-" + t : "")
                },
                reflow: function(t, i) {
                    "undefined" == typeof i ? i = Object.keys(this._plugins) : "string" == typeof i && (i = [i]);
                    var a = this;
                    e.each(i, function(i, s) {
                        var o = a._plugins[s],
                            r = e(t).find("[data-" + s + "]").addBack("[data-" + s + "]");
                        r.each(function() {
                            var t = e(this),
                                i = {};
                            if (t.data("zfPlugin")) return void console.warn("Tried to initialize " + s + " on an element that already has a Foundation plugin.");
                            if (t.attr("data-options")) {
                                t.attr("data-options").split(";").forEach(function(e, t) {
                                    var a = e.split(":").map(function(e) {
                                        return e.trim()
                                    });
                                    a[0] && (i[a[0]] = n(a[1]))
                                })
                            }
                            try {
                                t.data("zfPlugin", new o(e(this), i))
                            } catch (a) {
                                console.error(a)
                            } finally {
                                return
                            }
                        })
                    })
                },
                getFnName: t,
                transitionend: function(e) {
                    var t, n = {
                            transition: "transitionend",
                            WebkitTransition: "webkitTransitionEnd",
                            MozTransition: "transitionend",
                            OTransition: "otransitionend"
                        },
                        i = document.createElement("div");
                    for (var a in n) "undefined" != typeof i.style[a] && (t = n[a]);
                    return t ? t : (t = setTimeout(function() {
                        e.triggerHandler("transitionend", [e])
                    }, 1), "transitionend")
                }
            };
        s.util = {
            throttle: function(e, t) {
                var n = null;
                return function() {
                    var i = this,
                        a = arguments;
                    null === n && (n = setTimeout(function() {
                        e.apply(i, a), n = null
                    }, t))
                }
            }
        };
        var o = function(n) {
            var i = typeof n,
                a = e("meta.foundation-mq"),
                o = e(".no-js");
            if (a.length || e('<meta class="foundation-mq">').appendTo(document.head), o.length && o.removeClass("no-js"), "undefined" === i) s.MediaQuery._init(), s.reflow(this);
            else {
                if ("string" !== i) throw new TypeError("We're sorry, " + i + " is not a valid parameter. You must use a string representing the method you wish to invoke.");
                var r = Array.prototype.slice.call(arguments, 1),
                    d = this.data("zfPlugin");
                if (void 0 === d || void 0 === d[n]) throw new ReferenceError("We're sorry, '" + n + "' is not an available method for " + (d ? t(d) : "this element") + ".");
                1 === this.length ? d[n].apply(d, r) : this.each(function(t, i) {
                    d[n].apply(e(i).data("zfPlugin"), r)
                })
            }
            return this
        };
        window.Foundation = s, e.fn.foundation = o,
            function() {
                Date.now && window.Date.now || (window.Date.now = Date.now = function() {
                    return (new Date).getTime()
                });
                for (var e = ["webkit", "moz"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) {
                    var n = e[t];
                    window.requestAnimationFrame = window[n + "RequestAnimationFrame"], window.cancelAnimationFrame = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]
                }
                if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
                    var i = 0;
                    window.requestAnimationFrame = function(e) {
                        var t = Date.now(),
                            n = Math.max(i + 16, t);
                        return setTimeout(function() {
                            e(i = n)
                        }, n - t)
                    }, window.cancelAnimationFrame = clearTimeout
                }
                window.performance && window.performance.now || (window.performance = {
                    start: Date.now(),
                    now: function() {
                        return Date.now() - this.start
                    }
                })
            }(), Function.prototype.bind || (Function.prototype.bind = function(e) {
                if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                var t = Array.prototype.slice.call(arguments, 1),
                    n = this,
                    i = function() {},
                    a = function() {
                        return n.apply(this instanceof i ? this : e, t.concat(Array.prototype.slice.call(arguments)))
                    };
                return this.prototype && (i.prototype = this.prototype), a.prototype = new i, a
            })
    }(jQuery), ! function(e) {
        function t(e, t, i, a) {
            var s, o, r, d, l = n(e);
            if (t) {
                var u = n(t);
                o = l.offset.top + l.height <= u.height + u.offset.top, s = l.offset.top >= u.offset.top, r = l.offset.left >= u.offset.left, d = l.offset.left + l.width <= u.width + u.offset.left
            } else o = l.offset.top + l.height <= l.windowDims.height + l.windowDims.offset.top, s = l.offset.top >= l.windowDims.offset.top, r = l.offset.left >= l.windowDims.offset.left, d = l.offset.left + l.width <= l.windowDims.width;
            var c = [o, s, r, d];
            return i ? r === d == !0 : a ? s === o == !0 : -1 === c.indexOf(!1)
        }

        function n(e, t) {
            if (e = e.length ? e[0] : e, e === window || e === document) throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
            var n = e.getBoundingClientRect(),
                i = e.parentNode.getBoundingClientRect(),
                a = document.body.getBoundingClientRect(),
                s = window.pageYOffset,
                o = window.pageXOffset;
            return {
                width: n.width,
                height: n.height,
                offset: {
                    top: n.top + s,
                    left: n.left + o
                },
                parentDims: {
                    width: i.width,
                    height: i.height,
                    offset: {
                        top: i.top + s,
                        left: i.left + o
                    }
                },
                windowDims: {
                    width: a.width,
                    height: a.height,
                    offset: {
                        top: s,
                        left: o
                    }
                }
            }
        }

        function i(e, t, i, a, s, o) {
            var r = n(e),
                d = t ? n(t) : null;
            switch (i) {
                case "top":
                    return {
                        left: Foundation.rtl() ? d.offset.left - r.width + d.width : d.offset.left,
                        top: d.offset.top - (r.height + a)
                    };
                case "left":
                    return {
                        left: d.offset.left - (r.width + s),
                        top: d.offset.top
                    };
                case "right":
                    return {
                        left: d.offset.left + d.width + s,
                        top: d.offset.top
                    };
                case "center top":
                    return {
                        left: d.offset.left + d.width / 2 - r.width / 2,
                        top: d.offset.top - (r.height + a)
                    };
                case "center bottom":
                    return {
                        left: o ? s : d.offset.left + d.width / 2 - r.width / 2,
                        top: d.offset.top + d.height + a
                    };
                case "center left":
                    return {
                        left: d.offset.left - (r.width + s),
                        top: d.offset.top + d.height / 2 - r.height / 2
                    };
                case "center right":
                    return {
                        left: d.offset.left + d.width + s + 1,
                        top: d.offset.top + d.height / 2 - r.height / 2
                    };
                case "center":
                    return {
                        left: r.windowDims.offset.left + r.windowDims.width / 2 - r.width / 2,
                        top: r.windowDims.offset.top + r.windowDims.height / 2 - r.height / 2
                    };
                case "reveal":
                    return {
                        left: (r.windowDims.width - r.width) / 2,
                        top: r.windowDims.offset.top + a
                    };
                case "reveal full":
                    return {
                        left: r.windowDims.offset.left,
                        top: r.windowDims.offset.top
                    };
                case "left bottom":
                    return {
                        left: d.offset.left,
                        top: d.offset.top + d.height
                    };
                case "right bottom":
                    return {
                        left: d.offset.left + d.width + s - r.width,
                        top: d.offset.top + d.height
                    };
                default:
                    return {
                        left: Foundation.rtl() ? d.offset.left - r.width + d.width : d.offset.left + s,
                        top: d.offset.top + d.height + a
                    }
            }
        }
        Foundation.Box = {
            ImNotTouchingYou: t,
            GetDimensions: n,
            GetOffsets: i
        }
    }(jQuery), ! function(e) {
        function t(e) {
            var t = {};
            for (var n in e) t[e[n]] = e[n];
            return t
        }
        var n = {
                9: "TAB",
                13: "ENTER",
                27: "ESCAPE",
                32: "SPACE",
                37: "ARROW_LEFT",
                38: "ARROW_UP",
                39: "ARROW_RIGHT",
                40: "ARROW_DOWN"
            },
            i = {},
            a = {
                keys: t(n),
                parseKey: function(e) {
                    var t = n[e.which || e.keyCode] || String.fromCharCode(e.which).toUpperCase();
                    return e.shiftKey && (t = "SHIFT_" + t), e.ctrlKey && (t = "CTRL_" + t), e.altKey && (t = "ALT_" + t), t
                },
                handleKey: function(t, n, a) {
                    var s, o, r, d = i[n],
                        l = this.parseKey(t);
                    if (!d) return console.warn("Component not defined!");
                    if (s = "undefined" == typeof d.ltr ? d : Foundation.rtl() ? e.extend({}, d.ltr, d.rtl) : e.extend({}, d.rtl, d.ltr), o = s[l], r = a[o], r && "function" == typeof r) {
                        var u = r.apply();
                        (a.handled || "function" == typeof a.handled) && a.handled(u)
                    } else(a.unhandled || "function" == typeof a.unhandled) && a.unhandled()
                },
                findFocusable: function(t) {
                    return t.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function() {
                        return !e(this).is(":visible") || e(this).attr("tabindex") < 0 ? !1 : !0
                    })
                },
                register: function(e, t) {
                    i[e] = t
                }
            };
        Foundation.Keyboard = a
    }(jQuery), ! function(e) {
        function t(e) {
            var t = {};
            return "string" != typeof e ? t : (e = e.trim().slice(1, -1)) ? t = e.split("&").reduce(function(e, t) {
                var n = t.replace(/\+/g, " ").split("="),
                    i = n[0],
                    a = n[1];
                return i = decodeURIComponent(i), a = void 0 === a ? null : decodeURIComponent(a), e.hasOwnProperty(i) ? Array.isArray(e[i]) ? e[i].push(a) : e[i] = [e[i], a] : e[i] = a, e
            }, {}) : t
        }
        var n = {
            queries: [],
            current: "",
            _init: function() {
                var n, i = this,
                    a = e(".foundation-mq").css("font-family");
                n = t(a);
                for (var s in n) n.hasOwnProperty(s) && i.queries.push({
                    name: s,
                    value: "only screen and (min-width: " + n[s] + ")"
                });
                this.current = this._getCurrentSize(), this._watcher()
            },
            atLeast: function(e) {
                var t = this.get(e);
                return t ? window.matchMedia(t).matches : !1
            },
            get: function(e) {
                for (var t in this.queries)
                    if (this.queries.hasOwnProperty(t)) {
                        var n = this.queries[t];
                        if (e === n.name) return n.value
                    }
                return null
            },
            _getCurrentSize: function() {
                for (var e, t = 0; t < this.queries.length; t++) {
                    var n = this.queries[t];
                    window.matchMedia(n.value).matches && (e = n)
                }
                return "object" == typeof e ? e.name : e
            },
            _watcher: function() {
                var t = this;
                e(window).on("resize.zf.mediaquery", function() {
                    var n = t._getCurrentSize(),
                        i = t.current;
                    n !== i && (t.current = n, e(window).trigger("changed.zf.mediaquery", [n, i]))
                })
            }
        };
        Foundation.MediaQuery = n, window.matchMedia || (window.matchMedia = function() {
            "use strict";
            var e = window.styleMedia || window.media;
            if (!e) {
                var t = document.createElement("style"),
                    n = document.getElementsByTagName("script")[0],
                    i = null;
                t.type = "text/css", t.id = "matchmediajs-test", n && n.parentNode && n.parentNode.insertBefore(t, n), i = "getComputedStyle" in window && window.getComputedStyle(t, null) || t.currentStyle, e = {
                    matchMedium: function(e) {
                        var n = "@media " + e + "{ #matchmediajs-test { width: 1px; } }";
                        return t.styleSheet ? t.styleSheet.cssText = n : t.textContent = n, "1px" === i.width
                    }
                }
            }
            return function(t) {
                return {
                    matches: e.matchMedium(t || "all"),
                    media: t || "all"
                }
            }
        }()), Foundation.MediaQuery = n
    }(jQuery), ! function(e) {
        function t(e, t, n) {
            function i(r) {
                o || (o = window.performance.now()), s = r - o, n.apply(t), e > s ? a = window.requestAnimationFrame(i, t) : (window.cancelAnimationFrame(a), t.trigger("finished.zf.animate", [t]).triggerHandler("finished.zf.animate", [t]))
            }
            var a, s, o = null;
            a = window.requestAnimationFrame(i)
        }

        function n(t, n, s, o) {
            function r() {
                t || n.hide(), d(), o && o.apply(n)
            }

            function d() {
                n[0].style.transitionDuration = 0, n.removeClass(l + " " + u + " " + s)
            }
            if (n = e(n).eq(0), n.length) {
                var l = t ? i[0] : i[1],
                    u = t ? a[0] : a[1];
                d(), n.addClass(s).css("transition", "none"), requestAnimationFrame(function() {
                    n.addClass(l), t && n.show()
                }), requestAnimationFrame(function() {
                    n[0].offsetWidth, n.css("transition", "").addClass(u)
                }), n.one(Foundation.transitionend(n), r)
            }
        }
        var i = ["mui-enter", "mui-leave"],
            a = ["mui-enter-active", "mui-leave-active"],
            s = {
                animateIn: function(e, t, i) {
                    n(!0, e, t, i)
                },
                animateOut: function(e, t, i) {
                    n(!1, e, t, i)
                }
            };
        Foundation.Move = t, Foundation.Motion = s
    }(jQuery), ! function(e) {
        var t = {
            Feather: function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "zf";
                t.attr("role", "menubar");
                var i = t.find("li").attr({
                        role: "menuitem"
                    }),
                    a = "is-" + n + "-submenu",
                    s = a + "-item",
                    o = "is-" + n + "-submenu-parent";
                t.find("a:first").attr("tabindex", 0), i.each(function() {
                    var t = e(this),
                        n = t.children("ul");
                    n.length && (t.addClass(o).attr({
                        "aria-haspopup": !0,
                        "aria-expanded": !1,
                        "aria-label": t.children("a:first").text()
                    }), n.addClass("submenu " + a).attr({
                        "data-submenu": "",
                        "aria-hidden": !0,
                        role: "menu"
                    })), t.parent("[data-submenu]").length && t.addClass("is-submenu-item " + s)
                })
            },
            Burn: function(e, t) {
                var n = (e.find("li").removeAttr("tabindex"), "is-" + t + "-submenu"),
                    i = n + "-item",
                    a = "is-" + t + "-submenu-parent";
                e.find(">li, .menu, .menu > li").removeClass(n + " " + i + " " + a + " is-submenu-item submenu is-active").removeAttr("data-submenu").css("display", "")
            }
        };
        Foundation.Nest = t
    }(jQuery), ! function(e) {
        function t(e, t, n) {
            var i, a, s = this,
                o = t.duration,
                r = Object.keys(e.data())[0] || "timer",
                d = -1;
            this.isPaused = !1, this.restart = function() {
                d = -1, clearTimeout(a), this.start()
            }, this.start = function() {
                this.isPaused = !1, clearTimeout(a), d = 0 >= d ? o : d, e.data("paused", !1), i = Date.now(), a = setTimeout(function() {
                    t.infinite && s.restart(), n && "function" == typeof n && n()
                }, d), e.trigger("timerstart.zf." + r)
            }, this.pause = function() {
                this.isPaused = !0, clearTimeout(a), e.data("paused", !0);
                var t = Date.now();
                d -= t - i, e.trigger("timerpaused.zf." + r)
            }
        }

        function n(t, n) {
            function i() {
                a--, 0 === a && n()
            }
            var a = t.length;
            0 === a && n(), t.each(function() {
                this.complete ? i() : "undefined" != typeof this.naturalWidth && this.naturalWidth > 0 ? i() : e(this).one("load", function() {
                    i()
                })
            })
        }
        Foundation.Timer = t, Foundation.onImagesLoaded = n
    }(jQuery),
    function(e) {
        function t() {
            this.removeEventListener("touchmove", n), this.removeEventListener("touchend", t), l = !1
        }

        function n(n) {
            if (e.spotSwipe.preventDefault && n.preventDefault(), l) {
                var i, a = n.touches[0].pageX,
                    o = (n.touches[0].pageY, s - a);
                d = (new Date).getTime() - r, Math.abs(o) >= e.spotSwipe.moveThreshold && d <= e.spotSwipe.timeThreshold && (i = o > 0 ? "left" : "right"), i && (n.preventDefault(), t.call(this), e(this).trigger("swipe", i).trigger("swipe" + i))
            }
        }

        function i(e) {
            1 == e.touches.length && (s = e.touches[0].pageX, o = e.touches[0].pageY, l = !0, r = (new Date).getTime(), this.addEventListener("touchmove", n, !1), this.addEventListener("touchend", t, !1))
        }

        function a() {
            this.addEventListener && this.addEventListener("touchstart", i, !1)
        }
        e.spotSwipe = {
            version: "1.0.0",
            enabled: "ontouchstart" in document.documentElement,
            preventDefault: !1,
            moveThreshold: 75,
            timeThreshold: 200
        };
        var s, o, r, d, l = !1;
        e.event.special.swipe = {
            setup: a
        }, e.each(["left", "up", "down", "right"], function() {
            e.event.special["swipe" + this] = {
                setup: function() {
                    e(this).on("swipe", e.noop)
                }
            }
        })
    }(jQuery), ! function(e) {
        e.fn.addTouch = function() {
            this.each(function(n, i) {
                e(i).bind("touchstart touchmove touchend touchcancel", function() {
                    t(event)
                })
            });
            var t = function(e) {
                var t, n = e.changedTouches,
                    i = n[0],
                    a = {
                        touchstart: "mousedown",
                        touchmove: "mousemove",
                        touchend: "mouseup"
                    },
                    s = a[e.type];
                "MouseEvent" in window && "function" == typeof window.MouseEvent ? t = new window.MouseEvent(s, {
                    bubbles: !0,
                    cancelable: !0,
                    screenX: i.screenX,
                    screenY: i.screenY,
                    clientX: i.clientX,
                    clientY: i.clientY
                }) : (t = document.createEvent("MouseEvent"), t.initMouseEvent(s, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null)), i.target.dispatchEvent(t)
            }
        }
    }(jQuery), ! function(e) {
        function t() {
            s(), i(), a(), n()
        }

        function n(t) {
            var n = e("[data-yeti-box]"),
                i = ["dropdown", "tooltip", "reveal"];
            if (t && ("string" == typeof t ? i.push(t) : "object" == typeof t && "string" == typeof t[0] ? i.concat(t) : console.error("Plugin names must be strings")), n.length) {
                var a = i.map(function(e) {
                    return "closeme.zf." + e
                }).join(" ");
                e(window).off(a).on(a, function(t, n) {
                    var i = t.namespace.split(".")[0],
                        a = e("[data-" + i + "]").not('[data-yeti-box="' + n + '"]');
                    a.each(function() {
                        var t = e(this);
                        t.triggerHandler("close.zf.trigger", [t])
                    })
                })
            }
        }

        function i(t) {
            var n = void 0,
                i = e("[data-resize]");
            i.length && e(window).off("resize.zf.trigger").on("resize.zf.trigger", function(a) {
                n && clearTimeout(n), n = setTimeout(function() {
                    o || i.each(function() {
                        e(this).triggerHandler("resizeme.zf.trigger")
                    }), i.attr("data-events", "resize")
                }, t || 10)
            })
        }

        function a(t) {
            var n = void 0,
                i = e("[data-scroll]");
            i.length && e(window).off("scroll.zf.trigger").on("scroll.zf.trigger", function(a) {
                n && clearTimeout(n), n = setTimeout(function() {
                    o || i.each(function() {
                        e(this).triggerHandler("scrollme.zf.trigger")
                    }), i.attr("data-events", "scroll")
                }, t || 10)
            })
        }

        function s() {
            if (!o) return !1;
            var t = document.querySelectorAll("[data-resize], [data-scroll], [data-mutate]"),
                n = function(t) {
                    var n = e(t[0].target);
                    switch (n.attr("data-events")) {
                        case "resize":
                            n.triggerHandler("resizeme.zf.trigger", [n]);
                            break;
                        case "scroll":
                            n.triggerHandler("scrollme.zf.trigger", [n, window.pageYOffset]);
                            break;
                        default:
                            return !1
                    }
                };
            if (t.length)
                for (var i = 0; i <= t.length - 1; i++) {
                    var a = new o(n);
                    a.observe(t[i], {
                        attributes: !0,
                        childList: !1,
                        characterData: !1,
                        subtree: !1,
                        attributeFilter: ["data-events"]
                    })
                }
        }
        var o = function() {
                for (var e = ["WebKit", "Moz", "O", "Ms", ""], t = 0; t < e.length; t++)
                    if (e[t] + "MutationObserver" in window) return window[e[t] + "MutationObserver"];
                return !1
            }(),
            r = function(t, n) {
                t.data(n).split(" ").forEach(function(i) {
                    e("#" + i)["close" === n ? "trigger" : "triggerHandler"](n + ".zf.trigger", [t])
                })
            };
        e(document).on("click.zf.trigger", "[data-open]", function() {
            r(e(this), "open")
        }), e(document).on("click.zf.trigger", "[data-close]", function() {
            var t = e(this).data("close");
            t ? r(e(this), "close") : e(this).trigger("close.zf.trigger")
        }), e(document).on("click.zf.trigger", "[data-toggle]", function() {
            r(e(this), "toggle")
        }), e(document).on("close.zf.trigger", "[data-closable]", function(t) {
            t.stopPropagation();
            var n = e(this).data("closable");
            "" !== n ? Foundation.Motion.animateOut(e(this), n, function() {
                e(this).trigger("closed.zf")
            }) : e(this).fadeOut().trigger("closed.zf")
        }), e(document).on("focus.zf.trigger blur.zf.trigger", "[data-toggle-focus]", function() {
            var t = e(this).data("toggle-focus");
            e("#" + t).triggerHandler("toggle.zf.trigger", [e(this)])
        }), e(window).on("load", function() {
            t()
        }), Foundation.IHearYou = t
    }(jQuery);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
    }
}();
! function(e) {
    var t = function() {
        function t(n) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            _classCallCheck(this, t), this.$element = n, this.options = e.extend({}, t.defaults, this.$element.data(), i), this._init(), Foundation.registerPlugin(this, "Abide")
        }
        return _createClass(t, [{
            key: "_init",
            value: function() {
                this.$inputs = this.$element.find("input, textarea, select"), this._events()
            }
        }, {
            key: "_events",
            value: function() {
                var t = this;
                this.$element.off(".abide").on("reset.zf.abide", function() {
                    t.resetForm()
                }).on("submit.zf.abide", function() {
                    return t.validateForm()
                }), "fieldChange" === this.options.validateOn && this.$inputs.off("change.zf.abide").on("change.zf.abide", function(n) {
                    t.validateInput(e(n.target))
                }), this.options.liveValidate && this.$inputs.off("input.zf.abide").on("input.zf.abide", function(n) {
                    t.validateInput(e(n.target))
                })
            }
        }, {
            key: "_reflow",
            value: function() {
                this._init()
            }
        }, {
            key: "requiredCheck",
            value: function(e) {
                if (!e.attr("required")) return !0;
                var t = !0;
                switch (e[0].type) {
                    case "checkbox":
                        t = e[0].checked;
                        break;
                    case "select":
                    case "select-one":
                    case "select-multiple":
                        var n = e.find("option:selected");
                        n.length && n.val() || (t = !1);
                        break;
                    default:
                        e.val() && e.val().length || (t = !1)
                }
                return t
            }
        }, {
            key: "findFormError",
            value: function(e) {
                var t = e.siblings(this.options.formErrorSelector);
                return t.length || (t = e.parent().find(this.options.formErrorSelector)), t
            }
        }, {
            key: "findLabel",
            value: function(e) {
                var t = e[0].id,
                    n = this.$element.find('label[for="' + t + '"]');
                return n.length ? n : e.closest("label")
            }
        }, {
            key: "findRadioLabels",
            value: function(t) {
                var n = this,
                    i = t.map(function(t, i) {
                        var a = i.id,
                            s = n.$element.find('label[for="' + a + '"]');
                        return s.length || (s = e(i).closest("label")), s[0]
                    });
                return e(i)
            }
        }, {
            key: "addErrorClasses",
            value: function(e) {
                var t = this.findLabel(e),
                    n = this.findFormError(e);
                t.length && t.addClass(this.options.labelErrorClass), n.length && n.addClass(this.options.formErrorClass), e.addClass(this.options.inputErrorClass).attr("data-invalid", "")
            }
        }, {
            key: "removeRadioErrorClasses",
            value: function(e) {
                var t = this.$element.find(':radio[name="' + e + '"]'),
                    n = this.findRadioLabels(t),
                    i = this.findFormError(t);
                n.length && n.removeClass(this.options.labelErrorClass), i.length && i.removeClass(this.options.formErrorClass), t.removeClass(this.options.inputErrorClass).removeAttr("data-invalid")
            }
        }, {
            key: "removeErrorClasses",
            value: function(e) {
                if ("radio" == e[0].type) return this.removeRadioErrorClasses(e.attr("name"));
                var t = this.findLabel(e),
                    n = this.findFormError(e);
                t.length && t.removeClass(this.options.labelErrorClass), n.length && n.removeClass(this.options.formErrorClass), e.removeClass(this.options.inputErrorClass).removeAttr("data-invalid")
            }
        }, {
            key: "validateInput",
            value: function(e) {
                var t = this.requiredCheck(e),
                    n = !1,
                    i = !0,
                    a = e.attr("data-validator"),
                    s = !0;
                if (e.is("[data-abide-ignore]") || e.is('[type="hidden"]')) return !0;
                switch (e[0].type) {
                    case "radio":
                        n = this.validateRadio(e.attr("name"));
                        break;
                    case "checkbox":
                        n = t;
                        break;
                    case "select":
                    case "select-one":
                    case "select-multiple":
                        n = t;
                        break;
                    default:
                        n = this.validateText(e)
                }
                a && (i = this.matchValidation(e, a, e.attr("required"))), e.attr("data-equalto") && (s = this.options.validators.equalTo(e));
                var o = -1 === [t, n, i, s].indexOf(!1),
                    r = (o ? "valid" : "invalid") + ".zf.abide";
                return this[o ? "removeErrorClasses" : "addErrorClasses"](e), e.trigger(r, [e]), o
            }
        }, {
            key: "validateForm",
            value: function() {
                var t = [],
                    n = this;
                this.$inputs.each(function() {
                    t.push(n.validateInput(e(this)))
                });
                var i = -1 === t.indexOf(!1);
                return this.$element.find("[data-abide-error]").css("display", i ? "none" : "block"), this.$element.trigger((i ? "formvalid" : "forminvalid") + ".zf.abide", [this.$element]), i
            }
        }, {
            key: "validateText",
            value: function(e, t) {
                t = t || e.attr("pattern") || e.attr("type");
                var n = e.val(),
                    i = !1;
                return n.length ? i = this.options.patterns.hasOwnProperty(t) ? this.options.patterns[t].test(n) : t !== e.attr("type") ? new RegExp(t).test(n) : !0 : e.prop("required") || (i = !0), i
            }
        }, {
            key: "validateRadio",
            value: function(t) {
                var n = this.$element.find(':radio[name="' + t + '"]'),
                    i = !1,
                    a = !1;
                return n.each(function(t, n) {
                    e(n).attr("required") && (a = !0)
                }), a || (i = !0), i || n.each(function(t, n) {
                    e(n).prop("checked") && (i = !0)
                }), i
            }
        }, {
            key: "matchValidation",
            value: function(e, t, n) {
                var i = this;
                n = n ? !0 : !1;
                var a = t.split(" ").map(function(t) {
                    return i.options.validators[t](e, n, e.parent())
                });
                return -1 === a.indexOf(!1)
            }
        }, {
            key: "resetForm",
            value: function() {
                var t = this.$element,
                    n = this.options;
                e("." + n.labelErrorClass, t).not("small").removeClass(n.labelErrorClass), e("." + n.inputErrorClass, t).not("small").removeClass(n.inputErrorClass), e(n.formErrorSelector + "." + n.formErrorClass).removeClass(n.formErrorClass), t.find("[data-abide-error]").css("display", "none"), e(":input", t).not(":button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]").val("").removeAttr("data-invalid"), e(":input:radio", t).not("[data-abide-ignore]").prop("checked", !1).removeAttr("data-invalid"), e(":input:checkbox", t).not("[data-abide-ignore]").prop("checked", !1).removeAttr("data-invalid"), t.trigger("formreset.zf.abide", [t])
            }
        }, {
            key: "destroy",
            value: function() {
                var t = this;
                this.$element.off(".abide").find("[data-abide-error]").css("display", "none"), this.$inputs.off(".abide").each(function() {
                    t.removeErrorClasses(e(this))
                }), Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    t.defaults = {
        validateOn: "fieldChange",
        labelErrorClass: "is-invalid-label",
        inputErrorClass: "is-invalid-input",
        formErrorSelector: ".form-error",
        formErrorClass: "is-visible",
        liveValidate: !1,
        patterns: {
            alpha: /^[a-zA-Z]+$/,
            alpha_numeric: /^[a-zA-Z0-9]+$/,
            integer: /^[-+]?\d+$/,
            number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
            card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
            cvv: /^([0-9]){3,4}$/,
            email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
            url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
            domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
            datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
            date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
            time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
            dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
            month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
            day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
            color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
        },
        validators: {
            equalTo: function(t, n, i) {
                return e("#" + t.attr("data-equalto")).val() === t.val()
            }
        }
    }, Foundation.plugin(t, "Abide")
}(jQuery);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
    }
}();
! function(e) {
    var t = function() {
        function t(n, i) {
            _classCallCheck(this, t), this.$element = n, this.options = e.extend({}, t.defaults, this.$element.data(), i), this._init(), Foundation.registerPlugin(this, "Accordion"), Foundation.Keyboard.register("Accordion", {
                ENTER: "toggle",
                SPACE: "toggle",
                ARROW_DOWN: "next",
                ARROW_UP: "previous"
            })
        }
        return _createClass(t, [{
            key: "_init",
            value: function() {
                this.$element.attr("role", "tablist"), this.$tabs = this.$element.children("li, [data-accordion-item]"), this.$tabs.each(function(t, n) {
                    var i = e(n),
                        a = i.children("[data-tab-content]"),
                        s = a[0].id || Foundation.GetYoDigits(6, "accordion"),
                        o = n.id || s + "-label";
                    i.find("a:first").attr({
                        "aria-controls": s,
                        role: "tab",
                        id: o,
                        "aria-expanded": !1,
                        "aria-selected": !1
                    }), a.attr({
                        role: "tabpanel",
                        "aria-labelledby": o,
                        "aria-hidden": !0,
                        id: s
                    })
                });
                var t = this.$element.find(".is-active").children("[data-tab-content]");
                t.length && this.down(t, !0), this._events()
            }
        }, {
            key: "_events",
            value: function() {
                var t = this;
                this.$tabs.each(function() {
                    var n = e(this),
                        i = n.children("[data-tab-content]");
                    i.length && n.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion", function(e) {
                        e.preventDefault(), t.toggle(i)
                    }).on("keydown.zf.accordion", function(e) {
                        Foundation.Keyboard.handleKey(e, "Accordion", {
                            toggle: function() {
                                t.toggle(i)
                            },
                            next: function() {
                                var e = n.next().find("a").focus();
                                t.options.multiExpand || e.trigger("click.zf.accordion")
                            },
                            previous: function() {
                                var e = n.prev().find("a").focus();
                                t.options.multiExpand || e.trigger("click.zf.accordion")
                            },
                            handled: function() {
                                e.preventDefault(), e.stopPropagation()
                            }
                        })
                    })
                })
            }
        }, {
            key: "toggle",
            value: function(e) {
                e.parent().hasClass("is-active") ? this.up(e) : this.down(e)
            }
        }, {
            key: "down",
            value: function(t, n) {
                var i = this;
                if (t.attr("aria-hidden", !1).parent("[data-tab-content]").addBack().parent().addClass("is-active"), !this.options.multiExpand && !n) {
                    var a = this.$element.children(".is-active").children("[data-tab-content]");
                    a.length && this.up(a.not(t))
                }
                t.slideDown(this.options.slideSpeed, function() {
                    i.$element.trigger("down.zf.accordion", [t])
                }), e("#" + t.attr("aria-labelledby")).attr({
                    "aria-expanded": !0,
                    "aria-selected": !0
                })
            }
        }, {
            key: "up",
            value: function(t) {
                var n = t.parent().siblings(),
                    i = this;
                (this.options.allowAllClosed || n.hasClass("is-active")) && t.parent().hasClass("is-active") && (t.slideUp(i.options.slideSpeed, function() {
                    i.$element.trigger("up.zf.accordion", [t])
                }), t.attr("aria-hidden", !0).parent().removeClass("is-active"), e("#" + t.attr("aria-labelledby")).attr({
                    "aria-expanded": !1,
                    "aria-selected": !1
                }))
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.find("[data-tab-content]").stop(!0).slideUp(0).css("display", ""), this.$element.find("a").off(".zf.accordion"), Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    t.defaults = {
        slideSpeed: 250,
        multiExpand: !1,
        allowAllClosed: !1
    }, Foundation.plugin(t, "Accordion")
}(jQuery);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
    }
}();
! function(e) {
    var t = function() {
        function t(n, i) {
            _classCallCheck(this, t), this.$element = n, this.options = e.extend({}, t.defaults, this.$element.data(), i), Foundation.Nest.Feather(this.$element, "accordion"), this._init(), Foundation.registerPlugin(this, "AccordionMenu"), Foundation.Keyboard.register("AccordionMenu", {
                ENTER: "toggle",
                SPACE: "toggle",
                ARROW_RIGHT: "open",
                ARROW_UP: "up",
                ARROW_DOWN: "down",
                ARROW_LEFT: "close",
                ESCAPE: "closeAll"
            })
        }
        return _createClass(t, [{
            key: "_init",
            value: function() {
                this.$element.find("[data-submenu]").not(".is-active").slideUp(0), this.$element.attr({
                    role: "menu",
                    "aria-multiselectable": this.options.multiOpen
                }), this.$menuLinks = this.$element.find(".is-accordion-submenu-parent"), this.$menuLinks.each(function() {
                    var t = this.id || Foundation.GetYoDigits(6, "acc-menu-link"),
                        n = e(this),
                        i = n.children("[data-submenu]"),
                        a = i[0].id || Foundation.GetYoDigits(6, "acc-menu"),
                        s = i.hasClass("is-active");
                    n.attr({
                        "aria-controls": a,
                        "aria-expanded": s,
                        role: "menuitem",
                        id: t
                    }), i.attr({
                        "aria-labelledby": t,
                        "aria-hidden": !s,
                        role: "menu",
                        id: a
                    })
                });
                var t = this.$element.find(".is-active");
                if (t.length) {
                    var n = this;
                    t.each(function() {
                        n.down(e(this))
                    })
                }
                this._events()
            }
        }, {
            key: "_events",
            value: function() {
                var t = this;
                this.$element.find("li").each(function() {
                    var n = e(this).children("[data-submenu]");
                    n.length && e(this).children("a").off("click.zf.accordionMenu").on("click.zf.accordionMenu", function(e) {
                        e.preventDefault(), t.toggle(n)
                    })
                }).on("keydown.zf.accordionmenu", function(n) {
                    var i, a, s = e(this),
                        o = s.parent("ul").children("li"),
                        r = s.children("[data-submenu]");
                    o.each(function(t) {
                        return e(this).is(s) ? (i = o.eq(Math.max(0, t - 1)).find("a").first(), a = o.eq(Math.min(t + 1, o.length - 1)).find("a").first(), e(this).children("[data-submenu]:visible").length && (a = s.find("li:first-child").find("a").first()), e(this).is(":first-child") ? i = s.parents("li").first().find("a").first() : i.parents("li").first().children("[data-submenu]:visible").length && (i = i.parents("li").find("li:last-child").find("a").first()), void(e(this).is(":last-child") && (a = s.parents("li").first().next("li").find("a").first()))) : void 0
                    }), Foundation.Keyboard.handleKey(n, "AccordionMenu", {
                        open: function() {
                            r.is(":hidden") && (t.down(r), r.find("li").first().find("a").first().focus())
                        },
                        close: function() {
                            r.length && !r.is(":hidden") ? t.up(r) : s.parent("[data-submenu]").length && (t.up(s.parent("[data-submenu]")), s.parents("li").first().find("a").first().focus())
                        },
                        up: function() {
                            return i.focus(), !0
                        },
                        down: function() {
                            return a.focus(), !0
                        },
                        toggle: function() {
                            s.children("[data-submenu]").length && t.toggle(s.children("[data-submenu]"))
                        },
                        closeAll: function() {
                            t.hideAll()
                        },
                        handled: function(e) {
                            e && n.preventDefault(), n.stopImmediatePropagation()
                        }
                    })
                })
            }
        }, {
            key: "hideAll",
            value: function() {
                this.$element.find("[data-submenu]").slideUp(this.options.slideSpeed)
            }
        }, {
            key: "toggle",
            value: function(e) {
                e.is(":animated") || (e.is(":hidden") ? this.down(e) : this.up(e))
            }
        }, {
            key: "down",
            value: function(e) {
                var t = this;
                this.options.multiOpen || this.up(this.$element.find(".is-active").not(e.parentsUntil(this.$element).add(e))), e.addClass("is-active").attr({
                    "aria-hidden": !1
                }).parent(".is-accordion-submenu-parent").attr({
                    "aria-expanded": !0
                }), e.slideDown(t.options.slideSpeed, function() {
                    t.$element.trigger("down.zf.accordionMenu", [e])
                })
            }
        }, {
            key: "up",
            value: function(e) {
                var t = this;
                e.slideUp(t.options.slideSpeed, function() {
                    t.$element.trigger("up.zf.accordionMenu", [e])
                });
                var n = e.find("[data-submenu]").slideUp(0).addBack().attr("aria-hidden", !0);
                n.parent(".is-accordion-submenu-parent").attr("aria-expanded", !1)
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.find("[data-submenu]").slideDown(0).css("display", ""), this.$element.find("a").off("click.zf.accordionMenu"), Foundation.Nest.Burn(this.$element, "accordion"), Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    t.defaults = {
        slideSpeed: 250,
        multiOpen: !0
    }, Foundation.plugin(t, "AccordionMenu")
}(jQuery);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
    }
}();
! function(e) {
    var t = function() {
        function t(n, i) {
            _classCallCheck(this, t), this.$element = n, this.options = e.extend({}, t.defaults, this.$element.data(), i), Foundation.Nest.Feather(this.$element, "drilldown"), this._init(), Foundation.registerPlugin(this, "Drilldown"), Foundation.Keyboard.register("Drilldown", {
                ENTER: "open",
                SPACE: "open",
                ARROW_RIGHT: "next",
                ARROW_UP: "up",
                ARROW_DOWN: "down",
                ARROW_LEFT: "previous",
                ESCAPE: "close",
                TAB: "down",
                SHIFT_TAB: "up"
            })
        }
        return _createClass(t, [{
            key: "_init",
            value: function() {
                this.$submenuAnchors = this.$element.find("li.is-drilldown-submenu-parent").children("a"), this.$submenus = this.$submenuAnchors.parent("li").children("[data-submenu]"), this.$menuItems = this.$element.find("li").not(".js-drilldown-back").attr("role", "menuitem").find("a"), this._prepareMenu(), this._keyboardEvents()
            }
        }, {
            key: "_prepareMenu",
            value: function() {
                var t = this;
                this.$submenuAnchors.each(function() {
                    var n = e(this),
                        i = n.parent();
                    t.options.parentLink && n.clone().prependTo(i.children("[data-submenu]")).wrap('<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menu-item"></li>'), n.data("savedHref", n.attr("href")).removeAttr("href").attr("tabindex", 0), n.children("[data-submenu]").attr({
                        "aria-hidden": !0,
                        tabindex: 0,
                        role: "menu"
                    }), t._events(n)
                }), this.$submenus.each(function() {
                    var n = e(this),
                        i = n.find(".js-drilldown-back");
                    i.length || n.prepend(t.options.backButton), t._back(n)
                }), this.$element.parent().hasClass("is-drilldown") || (this.$wrapper = e(this.options.wrapper).addClass("is-drilldown"), this.$wrapper = this.$element.wrap(this.$wrapper).parent().css(this._getMaxDims()))
            }
        }, {
            key: "_events",
            value: function(t) {
                var n = this;
                t.off("click.zf.drilldown").on("click.zf.drilldown", function(i) {
                    if (e(i.target).parentsUntil("ul", "li").hasClass("is-drilldown-submenu-parent") && (i.stopImmediatePropagation(), i.preventDefault()), n._show(t.parent("li")), n.options.closeOnClick) {
                        var a = e("body");
                        a.off(".zf.drilldown").on("click.zf.drilldown", function(t) {
                            t.target === n.$element[0] || e.contains(n.$element[0], t.target) || (t.preventDefault(), n._hideAll(), a.off(".zf.drilldown"))
                        })
                    }
                })
            }
        }, {
            key: "_keyboardEvents",
            value: function() {
                var t = this;
                this.$menuItems.add(this.$element.find(".js-drilldown-back > a")).on("keydown.zf.drilldown", function(n) {
                    var i, a, s = e(this),
                        o = s.parent("li").parent("ul").children("li").children("a");
                    o.each(function(t) {
                        return e(this).is(s) ? (i = o.eq(Math.max(0, t - 1)), void(a = o.eq(Math.min(t + 1, o.length - 1)))) : void 0
                    }), Foundation.Keyboard.handleKey(n, "Drilldown", {
                        next: function() {
                            return s.is(t.$submenuAnchors) ? (t._show(s.parent("li")), s.parent("li").one(Foundation.transitionend(s), function() {
                                s.parent("li").find("ul li a").filter(t.$menuItems).first().focus()
                            }), !0) : void 0
                        },
                        previous: function() {
                            return t._hide(s.parent("li").parent("ul")), s.parent("li").parent("ul").one(Foundation.transitionend(s), function() {
                                setTimeout(function() {
                                    s.parent("li").parent("ul").parent("li").children("a").first().focus()
                                }, 1)
                            }), !0
                        },
                        up: function() {
                            return i.focus(), !0
                        },
                        down: function() {
                            return a.focus(), !0
                        },
                        close: function() {
                            t._back()
                        },
                        open: function() {
                            return s.is(t.$menuItems) ? s.is(t.$submenuAnchors) ? (t._show(s.parent("li")), s.parent("li").one(Foundation.transitionend(s), function() {
                                s.parent("li").find("ul li a").filter(t.$menuItems).first().focus()
                            }), !0) : void 0 : (t._hide(s.parent("li").parent("ul")), s.parent("li").parent("ul").one(Foundation.transitionend(s), function() {
                                setTimeout(function() {
                                    s.parent("li").parent("ul").parent("li").children("a").first().focus()
                                }, 1)
                            }), !0)
                        },
                        handled: function(e) {
                            e && n.preventDefault(), n.stopImmediatePropagation()
                        }
                    })
                })
            }
        }, {
            key: "_hideAll",
            value: function() {
                var e = this.$element.find(".is-drilldown-submenu.is-active").addClass("is-closing");
                e.one(Foundation.transitionend(e), function(t) {
                    e.removeClass("is-active is-closing")
                }), this.$element.trigger("closed.zf.drilldown")
            }
        }, {
            key: "_back",
            value: function(e) {
                var t = this;
                e.off("click.zf.drilldown"), e.children(".js-drilldown-back").on("click.zf.drilldown", function(n) {
                    n.stopImmediatePropagation(), t._hide(e);
                    var i = e.parent("li").parent("ul").parent("li");
                    i.length && t._show(i)
                })
            }
        }, {
            key: "_menuLinkEvents",
            value: function() {
                var e = this;
                this.$menuItems.not(".is-drilldown-submenu-parent").off("click.zf.drilldown").on("click.zf.drilldown", function(t) {
                    setTimeout(function() {
                        e._hideAll()
                    }, 0)
                })
            }
        }, {
            key: "_show",
            value: function(e) {
                e.attr("aria-expanded", !0), e.children("[data-submenu]").addClass("is-active").attr("aria-hidden", !1), this.$element.trigger("open.zf.drilldown", [e])
            }
        }, {
            key: "_hide",
            value: function(e) {
                e.parent("li").attr("aria-expanded", !1), e.attr("aria-hidden", !0).addClass("is-closing").one(Foundation.transitionend(e), function() {
                    e.removeClass("is-active is-closing"), e.blur()
                }), e.trigger("hide.zf.drilldown", [e])
            }
        }, {
            key: "_getMaxDims",
            value: function() {
                var e = 0,
                    t = {};
                return this.$submenus.add(this.$element).each(function(t, n) {
                    var i = n.getBoundingClientRect().height;
                    i > e && (e = i)
                }), t["min-height"] = e + "px", t["max-width"] = this.$element[0].getBoundingClientRect().width + "px", t
            }
        }, {
            key: "destroy",
            value: function() {
                this._hideAll(), Foundation.Nest.Burn(this.$element, "drilldown"), this.$element.unwrap().find(".js-drilldown-back, .is-submenu-parent-item").remove().end().find(".is-active, .is-closing, .is-drilldown-submenu").removeClass("is-active is-closing is-drilldown-submenu").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role"), this.$submenuAnchors.each(function() {
                    e(this).off(".zf.drilldown")
                }), this.$element.find("a").each(function() {
                    var t = e(this);
                    t.removeAttr("tabindex"), t.data("savedHref") && t.attr("href", t.data("savedHref")).removeData("savedHref")
                }), Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    t.defaults = {
        backButton: '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',
        wrapper: "<div></div>",
        parentLink: !1,
        closeOnClick: !1
    }, Foundation.plugin(t, "Drilldown")
}(jQuery);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
    }
}();
! function(e) {
    var t = function() {
        function t(n, i) {
            _classCallCheck(this, t), this.$element = n, this.options = e.extend({}, t.defaults, this.$element.data(), i), this._init(), Foundation.registerPlugin(this, "Dropdown"), Foundation.Keyboard.register("Dropdown", {
                ENTER: "open",
                SPACE: "open",
                ESCAPE: "close",
                TAB: "tab_forward",
                SHIFT_TAB: "tab_backward"
            })
        }
        return _createClass(t, [{
            key: "_init",
            value: function() {
                var t = this.$element.attr("id");
                this.$anchor = e(e('[data-toggle="' + t + '"]').length ? '[data-toggle="' + t + '"]' : '[data-open="' + t + '"]'),
                    this.$anchor.attr({
                        "aria-controls": t,
                        "data-is-focus": !1,
                        "data-yeti-box": t,
                        "aria-haspopup": !0,
                        "aria-expanded": !1
                    }), this.options.positionClass = this.getPositionClass(), this.counter = 4, this.usedPositions = [], this.$element.attr({
                        "aria-hidden": "true",
                        "data-yeti-box": t,
                        "data-resize": t,
                        "aria-labelledby": this.$anchor[0].id || Foundation.GetYoDigits(6, "dd-anchor")
                    }), this._events()
            }
        }, {
            key: "getPositionClass",
            value: function() {
                var e = this.$element[0].className.match(/(top|left|right|bottom)/g);
                e = e ? e[0] : "";
                var t = /float-(\S+)/.exec(this.$anchor[0].className);
                t = t ? t[1] : "";
                var n = t ? t + " " + e : e;
                return n
            }
        }, {
            key: "_reposition",
            value: function(e) {
                this.usedPositions.push(e ? e : "bottom"), !e && this.usedPositions.indexOf("top") < 0 ? this.$element.addClass("top") : "top" === e && this.usedPositions.indexOf("bottom") < 0 ? this.$element.removeClass(e) : "left" === e && this.usedPositions.indexOf("right") < 0 ? this.$element.removeClass(e).addClass("right") : "right" === e && this.usedPositions.indexOf("left") < 0 ? this.$element.removeClass(e).addClass("left") : !e && this.usedPositions.indexOf("top") > -1 && this.usedPositions.indexOf("left") < 0 ? this.$element.addClass("left") : "top" === e && this.usedPositions.indexOf("bottom") > -1 && this.usedPositions.indexOf("left") < 0 ? this.$element.removeClass(e).addClass("left") : this.$element.removeClass("left" === e && this.usedPositions.indexOf("right") > -1 && this.usedPositions.indexOf("bottom") < 0 ? e : "right" === e && this.usedPositions.indexOf("left") > -1 && this.usedPositions.indexOf("bottom") < 0 ? e : e), this.classChanged = !0, this.counter--
            }
        }, {
            key: "_setPosition",
            value: function() {
                if ("false" === this.$anchor.attr("aria-expanded")) return !1; {
                    var e = this.getPositionClass(),
                        t = Foundation.Box.GetDimensions(this.$element),
                        n = (Foundation.Box.GetDimensions(this.$anchor), "left" === e ? "left" : "right" === e ? "left" : "top"),
                        i = "top" === n ? "height" : "width";
                    "height" === i ? this.options.vOffset : this.options.hOffset
                }
                if (t.width >= t.windowDims.width || !this.counter && !Foundation.Box.ImNotTouchingYou(this.$element)) return this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, "center bottom", this.options.vOffset, this.options.hOffset, !0)).css({
                    width: t.windowDims.width - 2 * this.options.hOffset,
                    height: "auto"
                }), this.classChanged = !0, !1;
                for (this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, e, this.options.vOffset, this.options.hOffset)); !Foundation.Box.ImNotTouchingYou(this.$element, !1, !0) && this.counter;) this._reposition(e), this._setPosition()
            }
        }, {
            key: "_events",
            value: function() {
                var t = this;
                this.$element.on({
                    "open.zf.trigger": this.open.bind(this),
                    "close.zf.trigger": this.close.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this),
                    "resizeme.zf.trigger": this._setPosition.bind(this)
                }), this.options.hover && (this.$anchor.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function() {
                    e('body[data-whatinput="mouse"]').is("*") && (clearTimeout(t.timeout), t.timeout = setTimeout(function() {
                        t.open(), t.$anchor.data("hover", !0)
                    }, t.options.hoverDelay))
                }).on("mouseleave.zf.dropdown", function() {
                    clearTimeout(t.timeout), t.timeout = setTimeout(function() {
                        t.close(), t.$anchor.data("hover", !1)
                    }, t.options.hoverDelay)
                }), this.options.hoverPane && this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function() {
                    clearTimeout(t.timeout)
                }).on("mouseleave.zf.dropdown", function() {
                    clearTimeout(t.timeout), t.timeout = setTimeout(function() {
                        t.close(), t.$anchor.data("hover", !1)
                    }, t.options.hoverDelay)
                })), this.$anchor.add(this.$element).on("keydown.zf.dropdown", function(n) {
                    var i = e(this),
                        a = Foundation.Keyboard.findFocusable(t.$element);
                    Foundation.Keyboard.handleKey(n, "Dropdown", {
                        tab_forward: function() {
                            t.$element.find(":focus").is(a.eq(-1)) && (t.options.trapFocus ? (a.eq(0).focus(), n.preventDefault()) : t.close())
                        },
                        tab_backward: function() {
                            (t.$element.find(":focus").is(a.eq(0)) || t.$element.is(":focus")) && (t.options.trapFocus ? (a.eq(-1).focus(), n.preventDefault()) : t.close())
                        },
                        open: function() {
                            i.is(t.$anchor) && (t.open(), t.$element.attr("tabindex", -1).focus(), n.preventDefault())
                        },
                        close: function() {
                            t.close(), t.$anchor.focus()
                        }
                    })
                })
            }
        }, {
            key: "_addBodyHandler",
            value: function() {
                var t = e(document.body).not(this.$element),
                    n = this;
                t.off("click.zf.dropdown").on("click.zf.dropdown", function(e) {
                    n.$anchor.is(e.target) || n.$anchor.find(e.target).length || n.$element.find(e.target).length || (n.close(), t.off("click.zf.dropdown"))
                })
            }
        }, {
            key: "open",
            value: function() {
                if (this.$element.trigger("closeme.zf.dropdown", this.$element.attr("id")), this.$anchor.addClass("hover").attr({
                        "aria-expanded": !0
                    }), this._setPosition(), this.$element.addClass("is-open").attr({
                        "aria-hidden": !1
                    }), this.options.autoFocus) {
                    var e = Foundation.Keyboard.findFocusable(this.$element);
                    e.length && e.eq(0).focus()
                }
                this.options.closeOnClick && this._addBodyHandler(), this.$element.trigger("show.zf.dropdown", [this.$element])
            }
        }, {
            key: "close",
            value: function() {
                if (!this.$element.hasClass("is-open")) return !1;
                if (this.$element.removeClass("is-open").attr({
                        "aria-hidden": !0
                    }), this.$anchor.removeClass("hover").attr("aria-expanded", !1), this.classChanged) {
                    var e = this.getPositionClass();
                    e && this.$element.removeClass(e), this.$element.addClass(this.options.positionClass).css({
                        height: "",
                        width: ""
                    }), this.classChanged = !1, this.counter = 4, this.usedPositions.length = 0
                }
                this.$element.trigger("hide.zf.dropdown", [this.$element])
            }
        }, {
            key: "toggle",
            value: function() {
                if (this.$element.hasClass("is-open")) {
                    if (this.$anchor.data("hover")) return;
                    this.close()
                } else this.open()
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.off(".zf.trigger").hide(), this.$anchor.off(".zf.dropdown"), Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    t.defaults = {
        hoverDelay: 250,
        hover: !1,
        hoverPane: !1,
        vOffset: 1,
        hOffset: 1,
        positionClass: "",
        trapFocus: !1,
        autoFocus: !1,
        closeOnClick: !1
    }, Foundation.plugin(t, "Dropdown")
}(jQuery);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
    }
}();
! function(e) {
    var t = function() {
        function t(n, i) {
            _classCallCheck(this, t), this.$element = n, this.options = e.extend({}, t.defaults, this.$element.data(), i), Foundation.Nest.Feather(this.$element, "dropdown"), this._init(), Foundation.registerPlugin(this, "DropdownMenu"), Foundation.Keyboard.register("DropdownMenu", {
                ENTER: "open",
                SPACE: "open",
                ARROW_RIGHT: "next",
                ARROW_UP: "up",
                ARROW_DOWN: "down",
                ARROW_LEFT: "previous",
                ESCAPE: "close"
            })
        }
        return _createClass(t, [{
            key: "_init",
            value: function() {
                var e = this.$element.find("li.is-dropdown-submenu-parent");
                this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub"), this.$menuItems = this.$element.find('[role="menuitem"]'), this.$tabs = this.$element.children('[role="menuitem"]'), this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass), this.$element.hasClass(this.options.rightClass) || "right" === this.options.alignment || Foundation.rtl() || this.$element.parents(".top-bar-right").is("*") ? (this.options.alignment = "right", e.addClass("opens-left")) : e.addClass("opens-right"), this.changed = !1, this._events()
            }
        }, {
            key: "_isVertical",
            value: function() {
                return "block" === this.$tabs.css("display")
            }
        }, {
            key: "_events",
            value: function() {
                var t = this,
                    n = "ontouchstart" in window || "undefined" != typeof window.ontouchstart,
                    i = "is-dropdown-submenu-parent",
                    a = function(a) {
                        var s = e(a.target).parentsUntil("ul", "." + i),
                            o = s.hasClass(i),
                            r = "true" === s.attr("data-is-click"),
                            d = s.children(".is-dropdown-submenu");
                        if (!o) return void(t.options.closeOnClickInside && t._hide(s));
                        if (r) {
                            if (!t.options.closeOnClick || !t.options.clickOpen && !n || t.options.forceFollow && n) return;
                            a.stopImmediatePropagation(), a.preventDefault(), t._hide(s)
                        } else a.preventDefault(), a.stopImmediatePropagation(), t._show(d), s.add(s.parentsUntil(t.$element, "." + i)).attr("data-is-click", !0)
                    };
                (this.options.clickOpen || n) && this.$menuItems.on("click.zf.dropdownmenu touchstart.zf.dropdownmenu", a), this.options.disableHover || this.$menuItems.on("mouseenter.zf.dropdownmenu", function(n) {
                    var a = e(this),
                        s = a.hasClass(i);
                    s && (clearTimeout(t.delay), t.delay = setTimeout(function() {
                        t._show(a.children(".is-dropdown-submenu"))
                    }, t.options.hoverDelay))
                }).on("mouseleave.zf.dropdownmenu", function(n) {
                    var a = e(this),
                        s = a.hasClass(i);
                    if (s && t.options.autoclose) {
                        if ("true" === a.attr("data-is-click") && t.options.clickOpen) return !1;
                        clearTimeout(t.delay), t.delay = setTimeout(function() {
                            t._hide(a)
                        }, t.options.closingTime)
                    }
                }), this.$menuItems.on("keydown.zf.dropdownmenu", function(n) {
                    var i, a, s = e(n.target).parentsUntil("ul", '[role="menuitem"]'),
                        o = t.$tabs.index(s) > -1,
                        r = o ? t.$tabs : s.siblings("li").add(s);
                    r.each(function(t) {
                        return e(this).is(s) ? (i = r.eq(t - 1), void(a = r.eq(t + 1))) : void 0
                    });
                    var d = function() {
                            s.is(":last-child") || (a.children("a:first").focus(), n.preventDefault())
                        },
                        l = function() {
                            i.children("a:first").focus(), n.preventDefault()
                        },
                        u = function() {
                            var e = s.children("ul.is-dropdown-submenu");
                            e.length && (t._show(e), s.find("li > a:first").focus(), n.preventDefault())
                        },
                        c = function() {
                            var e = s.parent("ul").parent("li");
                            e.children("a:first").focus(), t._hide(e), n.preventDefault()
                        },
                        h = {
                            open: u,
                            close: function() {
                                t._hide(t.$element), t.$menuItems.find("a:first").focus(), n.preventDefault()
                            },
                            handled: function() {
                                n.stopImmediatePropagation()
                            }
                        };
                    o ? t._isVertical() ? Foundation.rtl() ? e.extend(h, {
                        down: d,
                        up: l,
                        next: c,
                        previous: u
                    }) : e.extend(h, {
                        down: d,
                        up: l,
                        next: u,
                        previous: c
                    }) : Foundation.rtl() ? e.extend(h, {
                        next: l,
                        previous: d,
                        down: u,
                        up: c
                    }) : e.extend(h, {
                        next: d,
                        previous: l,
                        down: u,
                        up: c
                    }) : Foundation.rtl() ? e.extend(h, {
                        next: c,
                        previous: u,
                        down: d,
                        up: l
                    }) : e.extend(h, {
                        next: u,
                        previous: c,
                        down: d,
                        up: l
                    }), Foundation.Keyboard.handleKey(n, "DropdownMenu", h)
                })
            }
        }, {
            key: "_addBodyHandler",
            value: function() {
                var t = e(document.body),
                    n = this;
                t.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu").on("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu", function(e) {
                    var i = n.$element.find(e.target);
                    i.length || (n._hide(), t.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu"))
                })
            }
        }, {
            key: "_show",
            value: function(t) {
                var n = this.$tabs.index(this.$tabs.filter(function(n, i) {
                        return e(i).find(t).length > 0
                    })),
                    i = t.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");
                this._hide(i, n), t.css("visibility", "hidden").addClass("js-dropdown-active").attr({
                    "aria-hidden": !1
                }).parent("li.is-dropdown-submenu-parent").addClass("is-active").attr({
                    "aria-expanded": !0
                });
                var a = Foundation.Box.ImNotTouchingYou(t, null, !0);
                if (!a) {
                    var s = "left" === this.options.alignment ? "-right" : "-left",
                        o = t.parent(".is-dropdown-submenu-parent");
                    o.removeClass("opens" + s).addClass("opens-" + this.options.alignment), a = Foundation.Box.ImNotTouchingYou(t, null, !0), a || o.removeClass("opens-" + this.options.alignment).addClass("opens-inner"), this.changed = !0
                }
                t.css("visibility", ""), this.options.closeOnClick && this._addBodyHandler(), this.$element.trigger("show.zf.dropdownmenu", [t])
            }
        }, {
            key: "_hide",
            value: function(e, t) {
                var n;
                n = e && e.length ? e : void 0 !== t ? this.$tabs.not(function(e, n) {
                    return e === t
                }) : this.$element;
                var i = n.hasClass("is-active") || n.find(".is-active").length > 0;
                if (i) {
                    if (n.find("li.is-active").add(n).attr({
                            "aria-expanded": !1,
                            "data-is-click": !1
                        }).removeClass("is-active"), n.find("ul.js-dropdown-active").attr({
                            "aria-hidden": !0
                        }).removeClass("js-dropdown-active"), this.changed || n.find("opens-inner").length) {
                        var a = "left" === this.options.alignment ? "right" : "left";
                        n.find("li.is-dropdown-submenu-parent").add(n).removeClass("opens-inner opens-" + this.options.alignment).addClass("opens-" + a), this.changed = !1
                    }
                    this.$element.trigger("hide.zf.dropdownmenu", [n])
                }
            }
        }, {
            key: "destroy",
            value: function() {
                this.$menuItems.off(".zf.dropdownmenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner"), e(document.body).off(".zf.dropdownmenu"), Foundation.Nest.Burn(this.$element, "dropdown"), Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    t.defaults = {
        disableHover: !1,
        autoclose: !0,
        hoverDelay: 50,
        clickOpen: !1,
        closingTime: 500,
        alignment: "left",
        closeOnClick: !0,
        closeOnClickInside: !0,
        verticalClass: "vertical",
        rightClass: "align-right",
        forceFollow: !0
    }, Foundation.plugin(t, "DropdownMenu")
}(jQuery);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
    }
}();
! function(e) {
    var t = function() {
        function t(n, i) {
            _classCallCheck(this, t), this.$element = n, this.options = e.extend({}, t.defaults, this.$element.data(), i), this._init(), Foundation.registerPlugin(this, "Equalizer")
        }
        return _createClass(t, [{
            key: "_init",
            value: function() {
                var t = this.$element.attr("data-equalizer") || "",
                    n = this.$element.find('[data-equalizer-watch="' + t + '"]');
                this.$watched = n.length ? n : this.$element.find("[data-equalizer-watch]"), this.$element.attr("data-resize", t || Foundation.GetYoDigits(6, "eq")), this.hasNested = this.$element.find("[data-equalizer]").length > 0, this.isNested = this.$element.parentsUntil(document.body, "[data-equalizer]").length > 0, this.isOn = !1, this._bindHandler = {
                    onResizeMeBound: this._onResizeMe.bind(this),
                    onPostEqualizedBound: this._onPostEqualized.bind(this)
                };
                var i, a = this.$element.find("img");
                this.options.equalizeOn ? (i = this._checkMQ(), e(window).on("changed.zf.mediaquery", this._checkMQ.bind(this))) : this._events(), (void 0 !== i && i === !1 || void 0 === i) && (a.length ? Foundation.onImagesLoaded(a, this._reflow.bind(this)) : this._reflow())
            }
        }, {
            key: "_pauseEvents",
            value: function() {
                this.isOn = !1, this.$element.off({
                    ".zf.equalizer": this._bindHandler.onPostEqualizedBound,
                    "resizeme.zf.trigger": this._bindHandler.onResizeMeBound
                })
            }
        }, {
            key: "_onResizeMe",
            value: function(e) {
                this._reflow()
            }
        }, {
            key: "_onPostEqualized",
            value: function(e) {
                e.target !== this.$element[0] && this._reflow()
            }
        }, {
            key: "_events",
            value: function() {
                this._pauseEvents(), this.hasNested ? this.$element.on("postequalized.zf.equalizer", this._bindHandler.onPostEqualizedBound) : this.$element.on("resizeme.zf.trigger", this._bindHandler.onResizeMeBound), this.isOn = !0
            }
        }, {
            key: "_checkMQ",
            value: function() {
                var e = !Foundation.MediaQuery.atLeast(this.options.equalizeOn);
                return e ? this.isOn && (this._pauseEvents(), this.$watched.css("height", "auto")) : this.isOn || this._events(), e
            }
        }, {
            key: "_killswitch",
            value: function() {}
        }, {
            key: "_reflow",
            value: function() {
                return !this.options.equalizeOnStack && this._isStacked() ? (this.$watched.css("height", "auto"), !1) : void(this.options.equalizeByRow ? this.getHeightsByRow(this.applyHeightByRow.bind(this)) : this.getHeights(this.applyHeight.bind(this)))
            }
        }, {
            key: "_isStacked",
            value: function() {
                return this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top
            }
        }, {
            key: "getHeights",
            value: function(e) {
                for (var t = [], n = 0, i = this.$watched.length; i > n; n++) this.$watched[n].style.height = "auto", t.push(this.$watched[n].offsetHeight);
                e(t)
            }
        }, {
            key: "getHeightsByRow",
            value: function(t) {
                var n = this.$watched.length ? this.$watched.first().offset().top : 0,
                    i = [],
                    a = 0;
                i[a] = [];
                for (var s = 0, o = this.$watched.length; o > s; s++) {
                    this.$watched[s].style.height = "auto";
                    var r = e(this.$watched[s]).offset().top;
                    r != n && (a++, i[a] = [], n = r), i[a].push([this.$watched[s], this.$watched[s].offsetHeight])
                }
                for (var d = 0, l = i.length; l > d; d++) {
                    var u = e(i[d]).map(function() {
                            return this[1]
                        }).get(),
                        c = Math.max.apply(null, u);
                    i[d].push(c)
                }
                t(i)
            }
        }, {
            key: "applyHeight",
            value: function(e) {
                var t = Math.max.apply(null, e);
                this.$element.trigger("preequalized.zf.equalizer"), this.$watched.css("height", t), this.$element.trigger("postequalized.zf.equalizer")
            }
        }, {
            key: "applyHeightByRow",
            value: function(t) {
                this.$element.trigger("preequalized.zf.equalizer");
                for (var n = 0, i = t.length; i > n; n++) {
                    var a = t[n].length,
                        s = t[n][a - 1];
                    if (2 >= a) e(t[n][0][0]).css({
                        height: "auto"
                    });
                    else {
                        this.$element.trigger("preequalizedrow.zf.equalizer");
                        for (var o = 0, r = a - 1; r > o; o++) e(t[n][o][0]).css({
                            height: s
                        });
                        this.$element.trigger("postequalizedrow.zf.equalizer")
                    }
                }
                this.$element.trigger("postequalized.zf.equalizer")
            }
        }, {
            key: "destroy",
            value: function() {
                this._pauseEvents(), this.$watched.css("height", "auto"), Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    t.defaults = {
        equalizeOnStack: !1,
        equalizeByRow: !1,
        equalizeOn: ""
    }, Foundation.plugin(t, "Equalizer")
}(jQuery);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
    }
}();
! function(e) {
    var t = function() {
        function t(n, i) {
            _classCallCheck(this, t), this.$element = n, this.options = e.extend({}, t.defaults, i), this.rules = [], this.currentPath = "", this._init(), this._events(), Foundation.registerPlugin(this, "Interchange")
        }
        return _createClass(t, [{
            key: "_init",
            value: function() {
                this._addBreakpoints(), this._generateRules(), this._reflow()
            }
        }, {
            key: "_events",
            value: function() {
                e(window).on("resize.zf.interchange", Foundation.util.throttle(this._reflow.bind(this), 50))
            }
        }, {
            key: "_reflow",
            value: function() {
                var e;
                for (var t in this.rules)
                    if (this.rules.hasOwnProperty(t)) {
                        var n = this.rules[t];
                        window.matchMedia(n.query).matches && (e = n)
                    }
                e && this.replace(e.path)
            }
        }, {
            key: "_addBreakpoints",
            value: function() {
                for (var e in Foundation.MediaQuery.queries)
                    if (Foundation.MediaQuery.queries.hasOwnProperty(e)) {
                        var n = Foundation.MediaQuery.queries[e];
                        t.SPECIAL_QUERIES[n.name] = n.value
                    }
            }
        }, {
            key: "_generateRules",
            value: function(e) {
                var n, i = [];
                n = this.options.rules ? this.options.rules : this.$element.data("interchange").match(/\[.*?\]/g);
                for (var a in n)
                    if (n.hasOwnProperty(a)) {
                        var s = n[a].slice(1, -1).split(", "),
                            o = s.slice(0, -1).join(""),
                            r = s[s.length - 1];
                        t.SPECIAL_QUERIES[r] && (r = t.SPECIAL_QUERIES[r]), i.push({
                            path: o,
                            query: r
                        })
                    }
                this.rules = i
            }
        }, {
            key: "replace",
            value: function(t) {
                if (this.currentPath !== t) {
                    var n = this,
                        i = "replaced.zf.interchange";
                    "IMG" === this.$element[0].nodeName ? this.$element.attr("src", t).on("load", function() {
                        n.currentPath = t
                    }).trigger(i) : t.match(/\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i) ? this.$element.css({
                        "background-image": "url(" + t + ")"
                    }).trigger(i) : e.get(t, function(a) {
                        n.$element.html(a).trigger(i), e(a).foundation(), n.currentPath = t
                    })
                }
            }
        }, {
            key: "destroy",
            value: function() {}
        }]), t
    }();
    t.defaults = {
        rules: null
    }, t.SPECIAL_QUERIES = {
        landscape: "screen and (orientation: landscape)",
        portrait: "screen and (orientation: portrait)",
        retina: "only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"
    }, Foundation.plugin(t, "Interchange")
}(jQuery);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
    }
}();
! function(e) {
    var t = function() {
        function t(n, i) {
            _classCallCheck(this, t), this.$element = n, this.options = e.extend({}, t.defaults, this.$element.data(), i), this._init(), Foundation.registerPlugin(this, "Magellan")
        }
        return _createClass(t, [{
            key: "_init",
            value: function() {
                var t = this.$element[0].id || Foundation.GetYoDigits(6, "magellan");
                this.$targets = e("[data-magellan-target]"), this.$links = this.$element.find("a"), this.$element.attr({
                    "data-resize": t,
                    "data-scroll": t,
                    id: t
                }), this.$active = e(), this.scrollPos = parseInt(window.pageYOffset, 10), this._events()
            }
        }, {
            key: "calcPoints",
            value: function() {
                var t = this,
                    n = document.body,
                    i = document.documentElement;
                this.points = [], this.winHeight = Math.round(Math.max(window.innerHeight, i.clientHeight)), this.docHeight = Math.round(Math.max(n.scrollHeight, n.offsetHeight, i.clientHeight, i.scrollHeight, i.offsetHeight)), this.$targets.each(function() {
                    var n = e(this),
                        i = Math.round(n.offset().top - t.options.threshold);
                    n.targetPoint = i, t.points.push(i)
                })
            }
        }, {
            key: "_events",
            value: function() {
                {
                    var t = this;
                    e("html, body"), {
                        duration: t.options.animationDuration,
                        easing: t.options.animationEasing
                    }
                }
                e(window).one("load", function() {
                    t.options.deepLinking && location.hash && t.scrollToLoc(location.hash), t.calcPoints(), t._updateActive()
                }), this.$element.on({
                    "resizeme.zf.trigger": this.reflow.bind(this),
                    "scrollme.zf.trigger": this._updateActive.bind(this)
                }).on("click.zf.magellan", 'a[href^="#"]', function(e) {
                    e.preventDefault();
                    var n = this.getAttribute("href");
                    t.scrollToLoc(n)
                })
            }
        }, {
            key: "scrollToLoc",
            value: function(t) {
                if (!e(t).length) return !1;
                var n = Math.round(e(t).offset().top - this.options.threshold / 2 - this.options.barOffset);
                e("html, body").stop(!0).animate({
                    scrollTop: n
                }, this.options.animationDuration, this.options.animationEasing)
            }
        }, {
            key: "reflow",
            value: function() {
                this.calcPoints(), this._updateActive()
            }
        }, {
            key: "_updateActive",
            value: function() {
                var e, t = parseInt(window.pageYOffset, 10);
                if (t + this.winHeight === this.docHeight) e = this.points.length - 1;
                else if (t < this.points[0]) e = 0;
                else {
                    var n = this.scrollPos < t,
                        i = this,
                        a = this.points.filter(function(e, a) {
                            return n ? e - i.options.barOffset <= t : e - i.options.barOffset - i.options.threshold <= t
                        });
                    e = a.length ? a.length - 1 : 0
                }
                if (this.$active.removeClass(this.options.activeClass), this.$active = this.$links.filter('[href="#' + this.$targets.eq(e).data("magellan-target") + '"]').addClass(this.options.activeClass), this.options.deepLinking) {
                    var s = this.$active[0].getAttribute("href");
                    window.history.pushState ? window.history.pushState(null, null, s) : window.location.hash = s
                }
                this.scrollPos = t, this.$element.trigger("update.zf.magellan", [this.$active])
            }
        }, {
            key: "destroy",
            value: function() {
                if (this.$element.off(".zf.trigger .zf.magellan").find("." + this.options.activeClass).removeClass(this.options.activeClass), this.options.deepLinking) {
                    var e = this.$active[0].getAttribute("href");
                    window.location.hash.replace(e, "")
                }
                Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    t.defaults = {
        animationDuration: 500,
        animationEasing: "linear",
        threshold: 50,
        activeClass: "active",
        deepLinking: !1,
        barOffset: 0
    }, Foundation.plugin(t, "Magellan")
}(jQuery);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
    }
}();
! function(e) {
    var t = function() {
        function t(n, i) {
            _classCallCheck(this, t), this.$element = n, this.options = e.extend({}, t.defaults, this.$element.data(), i), this.$lastTrigger = e(), this.$triggers = e(), this._init(), this._events(), Foundation.registerPlugin(this, "OffCanvas"), Foundation.Keyboard.register("OffCanvas", {
                ESCAPE: "close"
            })
        }
        return _createClass(t, [{
            key: "_init",
            value: function() {
                var t = this.$element.attr("id");
                if (this.$element.attr("aria-hidden", "true"), this.$triggers = e(document).find('[data-open="' + t + '"], [data-close="' + t + '"], [data-toggle="' + t + '"]').attr("aria-expanded", "false").attr("aria-controls", t), this.options.closeOnClick)
                    if (e(".js-off-canvas-exit").length) this.$exiter = e(".js-off-canvas-exit");
                    else {
                        var n = document.createElement("div");
                        n.setAttribute("class", "js-off-canvas-exit"), e("[data-off-canvas-content]").append(n), this.$exiter = e(n)
                    }
                this.options.isRevealed = this.options.isRevealed || new RegExp(this.options.revealClass, "g").test(this.$element[0].className), this.options.isRevealed && (this.options.revealOn = this.options.revealOn || this.$element[0].className.match(/(reveal-for-medium|reveal-for-large)/g)[0].split("-")[2], this._setMQChecker()), this.options.transitionTime || (this.options.transitionTime = 1e3 * parseFloat(window.getComputedStyle(e("[data-off-canvas-wrapper]")[0]).transitionDuration))
            }
        }, {
            key: "_events",
            value: function() {
                this.$element.off(".zf.trigger .zf.offcanvas").on({
                    "open.zf.trigger": this.open.bind(this),
                    "close.zf.trigger": this.close.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this),
                    "keydown.zf.offcanvas": this._handleKeyboard.bind(this)
                }), this.options.closeOnClick && this.$exiter.length && this.$exiter.on({
                    "click.zf.offcanvas": this.close.bind(this)
                })
            }
        }, {
            key: "_setMQChecker",
            value: function() {
                var t = this;
                e(window).on("changed.zf.mediaquery", function() {
                    t.reveal(Foundation.MediaQuery.atLeast(t.options.revealOn) ? !0 : !1)
                }).one("load.zf.offcanvas", function() {
                    Foundation.MediaQuery.atLeast(t.options.revealOn) && t.reveal(!0)
                })
            }
        }, {
            key: "reveal",
            value: function(e) {
                var t = this.$element.find("[data-close]");
                e ? (this.close(), this.isRevealed = !0, this.$element.off("open.zf.trigger toggle.zf.trigger"), t.length && t.hide()) : (this.isRevealed = !1, this.$element.on({
                    "open.zf.trigger": this.open.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this)
                }), t.length && t.show())
            }
        }, {
            key: "open",
            value: function(t, n) {
                if (!this.$element.hasClass("is-open") && !this.isRevealed) {
                    {
                        var i = this;
                        e(document.body)
                    }
                    this.options.forceTop && e("body").scrollTop(0);
                    var a = e("[data-off-canvas-wrapper]");
                    a.addClass("is-off-canvas-open is-open-" + i.options.position), i.$element.addClass("is-open"), this.$triggers.attr("aria-expanded", "true"), this.$element.attr("aria-hidden", "false").trigger("opened.zf.offcanvas"), this.options.closeOnClick && this.$exiter.addClass("is-visible"), n && (this.$lastTrigger = n), this.options.autoFocus && a.one(Foundation.transitionend(a), function() {
                        i.$element.hasClass("is-open") && (i.$element.attr("tabindex", "-1"), i.$element.focus())
                    }), this.options.trapFocus && a.one(Foundation.transitionend(a), function() {
                        i.$element.hasClass("is-open") && (i.$element.attr("tabindex", "-1"), i.trapFocus())
                    })
                }
            }
        }, {
            key: "_trapFocus",
            value: function() {
                var e = Foundation.Keyboard.findFocusable(this.$element),
                    t = e.eq(0),
                    n = e.eq(-1);
                e.off(".zf.offcanvas").on("keydown.zf.offcanvas", function(e) {
                    var i = Foundation.Keyboard.parseKey(e);
                    "TAB" === i && e.target === n[0] && (e.preventDefault(), t.focus()), "SHIFT_TAB" === i && e.target === t[0] && (e.preventDefault(), n.focus())
                })
            }
        }, {
            key: "close",
            value: function(t) {
                if (this.$element.hasClass("is-open") && !this.isRevealed) {
                    var n = this;
                    e("[data-off-canvas-wrapper]").removeClass("is-off-canvas-open is-open-" + n.options.position), n.$element.removeClass("is-open"), this.$element.attr("aria-hidden", "true").trigger("closed.zf.offcanvas"), this.options.closeOnClick && this.$exiter.removeClass("is-visible"), this.$triggers.attr("aria-expanded", "false"), this.options.trapFocus && e("[data-off-canvas-content]").removeAttr("tabindex")
                }
            }
        }, {
            key: "toggle",
            value: function(e, t) {
                this.$element.hasClass("is-open") ? this.close(e, t) : this.open(e, t)
            }
        }, {
            key: "_handleKeyboard",
            value: function(e) {
                var t = this;
                Foundation.Keyboard.handleKey(e, "OffCanvas", {
                    close: function() {
                        return t.close(), t.$lastTrigger.focus(), !0
                    },
                    handled: function() {
                        e.stopPropagation(), e.preventDefault()
                    }
                })
            }
        }, {
            key: "destroy",
            value: function() {
                this.close(), this.$element.off(".zf.trigger .zf.offcanvas"), this.$exiter.off(".zf.offcanvas"), Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    t.defaults = {
        closeOnClick: !0,
        transitionTime: 0,
        position: "left",
        forceTop: !0,
        isRevealed: !1,
        revealOn: null,
        autoFocus: !0,
        revealClass: "reveal-for-",
        trapFocus: !1
    }, Foundation.plugin(t, "OffCanvas")
}(jQuery);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
    }
}();
! function(e) {
    var t = function() {
        function t(n, i) {
            _classCallCheck(this, t), this.$element = n, this.options = e.extend({}, t.defaults, this.$element.data(), i), this._init(), Foundation.registerPlugin(this, "Orbit"), Foundation.Keyboard.register("Orbit", {
                ltr: {
                    ARROW_RIGHT: "next",
                    ARROW_LEFT: "previous"
                },
                rtl: {
                    ARROW_LEFT: "next",
                    ARROW_RIGHT: "previous"
                }
            })
        }
        return _createClass(t, [{
            key: "_init",
            value: function() {
                this.$wrapper = this.$element.find("." + this.options.containerClass), this.$slides = this.$element.find("." + this.options.slideClass);
                var e = this.$element.find("img"),
                    t = this.$slides.filter(".is-active");
                t.length || this.$slides.eq(0).addClass("is-active"), this.options.useMUI || this.$slides.addClass("no-motionui"), e.length ? Foundation.onImagesLoaded(e, this._prepareForOrbit.bind(this)) : this._prepareForOrbit(), this.options.bullets && this._loadBullets(), this._events(), this.options.autoPlay && this.$slides.length > 1 && this.geoSync(), this.options.accessible && this.$wrapper.attr("tabindex", 0)
            }
        }, {
            key: "_loadBullets",
            value: function() {
                this.$bullets = this.$element.find("." + this.options.boxOfBullets).find("button")
            }
        }, {
            key: "geoSync",
            value: function() {
                var e = this;
                this.timer = new Foundation.Timer(this.$element, {
                    duration: this.options.timerDelay,
                    infinite: !1
                }, function() {
                    e.changeSlide(!0)
                }), this.timer.start()
            }
        }, {
            key: "_prepareForOrbit",
            value: function() {
                var e = this;
                this._setWrapperHeight(function(t) {
                    e._setSlideHeight(t)
                })
            }
        }, {
            key: "_setWrapperHeight",
            value: function(t) {
                var n, i = 0,
                    a = 0;
                this.$slides.each(function() {
                    n = this.getBoundingClientRect().height, e(this).attr("data-slide", a), a && e(this).css({
                        position: "relative",
                        display: "none"
                    }), i = n > i ? n : i, a++
                }), a === this.$slides.length && (this.$wrapper.css({
                    height: i
                }), t(i))
            }
        }, {
            key: "_setSlideHeight",
            value: function(t) {
                this.$slides.each(function() {
                    e(this).css("max-height", t)
                })
            }
        }, {
            key: "_events",
            value: function() {
                var t = this;
                if (this.$slides.length > 1) {
                    if (this.options.swipe && this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit", function(e) {
                            e.preventDefault(), t.changeSlide(!0)
                        }).on("swiperight.zf.orbit", function(e) {
                            e.preventDefault(), t.changeSlide(!1)
                        }), this.options.autoPlay && (this.$slides.on("click.zf.orbit", function() {
                            t.$element.data("clickedOn", t.$element.data("clickedOn") ? !1 : !0), t.timer[t.$element.data("clickedOn") ? "pause" : "start"]()
                        }), this.options.pauseOnHover && this.$element.on("mouseenter.zf.orbit", function() {
                            t.timer.pause()
                        }).on("mouseleave.zf.orbit", function() {
                            t.$element.data("clickedOn") || t.timer.start()
                        })), this.options.navButtons) {
                        var n = this.$element.find("." + this.options.nextClass + ", ." + this.options.prevClass);
                        n.attr("tabindex", 0).on("click.zf.orbit touchend.zf.orbit", function(n) {
                            n.preventDefault(), t.changeSlide(e(this).hasClass(t.options.nextClass))
                        })
                    }
                    this.options.bullets && this.$bullets.on("click.zf.orbit touchend.zf.orbit", function() {
                        if (/is-active/g.test(this.className)) return !1;
                        var n = e(this).data("slide"),
                            i = n > t.$slides.filter(".is-active").data("slide"),
                            a = t.$slides.eq(n);
                        t.changeSlide(i, a, n)
                    }), this.options.accessible && this.$wrapper.add(this.$bullets).on("keydown.zf.orbit", function(n) {
                        Foundation.Keyboard.handleKey(n, "Orbit", {
                            next: function() {
                                t.changeSlide(!0)
                            },
                            previous: function() {
                                t.changeSlide(!1)
                            },
                            handled: function() {
                                e(n.target).is(t.$bullets) && t.$bullets.filter(".is-active").focus()
                            }
                        })
                    })
                }
            }
        }, {
            key: "changeSlide",
            value: function(e, t, n) {
                var i = this.$slides.filter(".is-active").eq(0);
                if (/mui/g.test(i[0].className)) return !1;
                var a, s = this.$slides.first(),
                    o = this.$slides.last(),
                    r = e ? "Right" : "Left",
                    d = e ? "Left" : "Right",
                    l = this;
                a = t ? t : e ? this.options.infiniteWrap ? i.next("." + this.options.slideClass).length ? i.next("." + this.options.slideClass) : s : i.next("." + this.options.slideClass) : this.options.infiniteWrap ? i.prev("." + this.options.slideClass).length ? i.prev("." + this.options.slideClass) : o : i.prev("." + this.options.slideClass), a.length && (this.$element.trigger("beforeslidechange.zf.orbit", [i, a]), this.options.bullets && (n = n || this.$slides.index(a), this._updateBullets(n)), this.options.useMUI ? (Foundation.Motion.animateIn(a.addClass("is-active").css({
                    position: "absolute",
                    top: 0
                }), this.options["animInFrom" + r], function() {
                    a.css({
                        position: "relative",
                        display: "block"
                    }).attr("aria-live", "polite")
                }), Foundation.Motion.animateOut(i.removeClass("is-active"), this.options["animOutTo" + d], function() {
                    i.removeAttr("aria-live"), l.options.autoPlay && !l.timer.isPaused && l.timer.restart()
                })) : (i.removeClass("is-active is-in").removeAttr("aria-live").hide(), a.addClass("is-active is-in").attr("aria-live", "polite").show(), this.options.autoPlay && !this.timer.isPaused && this.timer.restart()), this.$element.trigger("slidechange.zf.orbit", [a]))
            }
        }, {
            key: "_updateBullets",
            value: function(e) {
                {
                    var t = this.$element.find("." + this.options.boxOfBullets).find(".is-active").removeClass("is-active").blur(),
                        n = t.find("span:last").detach();
                    this.$bullets.eq(e).addClass("is-active").append(n)
                }
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide(), Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    t.defaults = {
        bullets: !0,
        navButtons: !0,
        animInFromRight: "slide-in-right",
        animOutToRight: "slide-out-right",
        animInFromLeft: "slide-in-left",
        animOutToLeft: "slide-out-left",
        autoPlay: !0,
        timerDelay: 5e3,
        infiniteWrap: !0,
        swipe: !0,
        pauseOnHover: !0,
        accessible: !0,
        containerClass: "orbit-container",
        slideClass: "orbit-slide",
        boxOfBullets: "orbit-bullets",
        nextClass: "orbit-next",
        prevClass: "orbit-previous",
        useMUI: !0
    }, Foundation.plugin(t, "Orbit")
}(jQuery);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
    }
}();
! function(e) {
    var t = function() {
        function t(n, i) {
            _classCallCheck(this, t), this.$element = e(n), this.rules = this.$element.data("responsive-menu"), this.currentMq = null, this.currentPlugin = null, this._init(), this._events(), Foundation.registerPlugin(this, "ResponsiveMenu")
        }
        return _createClass(t, [{
            key: "_init",
            value: function() {
                if ("string" == typeof this.rules) {
                    for (var t = {}, i = this.rules.split(" "), a = 0; a < i.length; a++) {
                        var s = i[a].split("-"),
                            o = s.length > 1 ? s[0] : "small",
                            r = s.length > 1 ? s[1] : s[0];
                        null !== n[r] && (t[o] = n[r])
                    }
                    this.rules = t
                }
                e.isEmptyObject(this.rules) || this._checkMediaQueries()
            }
        }, {
            key: "_events",
            value: function() {
                var t = this;
                e(window).on("changed.zf.mediaquery", function() {
                    t._checkMediaQueries()
                })
            }
        }, {
            key: "_checkMediaQueries",
            value: function() {
                var t, i = this;
                e.each(this.rules, function(e) {
                    Foundation.MediaQuery.atLeast(e) && (t = e)
                }), t && (this.currentPlugin instanceof this.rules[t].plugin || (e.each(n, function(e, t) {
                    i.$element.removeClass(t.cssClass)
                }), this.$element.addClass(this.rules[t].cssClass), this.currentPlugin && this.currentPlugin.destroy(), this.currentPlugin = new this.rules[t].plugin(this.$element, {})))
            }
        }, {
            key: "destroy",
            value: function() {
                this.currentPlugin.destroy(), e(window).off(".zf.ResponsiveMenu"), Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    t.defaults = {};
    var n = {
        dropdown: {
            cssClass: "dropdown",
            plugin: Foundation._plugins["dropdown-menu"] || null
        },
        drilldown: {
            cssClass: "drilldown",
            plugin: Foundation._plugins.drilldown || null
        },
        accordion: {
            cssClass: "accordion-menu",
            plugin: Foundation._plugins["accordion-menu"] || null
        }
    };
    Foundation.plugin(t, "ResponsiveMenu")
}(jQuery);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
    }
}();
! function(e) {
    var t = function() {
        function t(n, i) {
            _classCallCheck(this, t), this.$element = e(n), this.options = e.extend({}, t.defaults, this.$element.data(), i), this._init(), this._events(), Foundation.registerPlugin(this, "ResponsiveToggle")
        }
        return _createClass(t, [{
            key: "_init",
            value: function() {
                var t = this.$element.data("responsive-toggle");
                t || console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar."), this.$targetMenu = e("#" + t), this.$toggler = this.$element.find("[data-toggle]"), this._update()
            }
        }, {
            key: "_events",
            value: function() {
                this._updateMqHandler = this._update.bind(this), e(window).on("changed.zf.mediaquery", this._updateMqHandler), this.$toggler.on("click.zf.responsiveToggle", this.toggleMenu.bind(this))
            }
        }, {
            key: "_update",
            value: function() {
                Foundation.MediaQuery.atLeast(this.options.hideFor) ? (this.$element.hide(), this.$targetMenu.show()) : (this.$element.show(), this.$targetMenu.hide())
            }
        }, {
            key: "toggleMenu",
            value: function() {
                Foundation.MediaQuery.atLeast(this.options.hideFor) || (this.$targetMenu.toggle(0), this.$element.trigger("toggled.zf.responsiveToggle"))
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.off(".zf.responsiveToggle"), this.$toggler.off(".zf.responsiveToggle"), e(window).off("changed.zf.mediaquery", this._updateMqHandler), Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    t.defaults = {
        hideFor: "medium"
    }, Foundation.plugin(t, "ResponsiveToggle")
}(jQuery);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
    }
}();
! function(e) {
    function t() {
        return /iP(ad|hone|od).*OS/.test(window.navigator.userAgent)
    }

    function n() {
        return /Android/.test(window.navigator.userAgent)
    }

    function i() {
        return t() || n()
    }
    var a = function() {
        function t(n, i) {
            _classCallCheck(this, t), this.$element = n, this.options = e.extend({}, t.defaults, this.$element.data(), i), this._init(), Foundation.registerPlugin(this, "Reveal"), Foundation.Keyboard.register("Reveal", {
                ENTER: "open",
                SPACE: "open",
                ESCAPE: "close",
                TAB: "tab_forward",
                SHIFT_TAB: "tab_backward"
            })
        }
        return _createClass(t, [{
            key: "_init",
            value: function() {
                this.id = this.$element.attr("id"), this.isActive = !1, this.cached = {
                    mq: Foundation.MediaQuery.current
                }, this.isMobile = i(), this.$anchor = e(e('[data-open="' + this.id + '"]').length ? '[data-open="' + this.id + '"]' : '[data-toggle="' + this.id + '"]'), this.$anchor.attr({
                    "aria-controls": this.id,
                    "aria-haspopup": !0,
                    tabindex: 0
                }), (this.options.fullScreen || this.$element.hasClass("full")) && (this.options.fullScreen = !0, this.options.overlay = !1), this.options.overlay && !this.$overlay && (this.$overlay = this._makeOverlay(this.id)), this.$element.attr({
                    role: "dialog",
                    "aria-hidden": !0,
                    "data-yeti-box": this.id,
                    "data-resize": this.id
                }), this.$overlay ? this.$element.detach().appendTo(this.$overlay) : (this.$element.detach().appendTo(e("body")), this.$element.addClass("without-overlay")), this._events(), this.options.deepLink && window.location.hash === "#" + this.id && e(window).one("load.zf.reveal", this.open.bind(this))
            }
        }, {
            key: "_makeOverlay",
            value: function(t) {
                var n = e("<div></div>").addClass("reveal-overlay").appendTo("body");
                return n
            }
        }, {
            key: "_updatePosition",
            value: function() {
                var t, n, i = this.$element.outerWidth(),
                    a = e(window).width(),
                    s = this.$element.outerHeight(),
                    o = e(window).height();
                t = "auto" === this.options.hOffset ? parseInt((a - i) / 2, 10) : parseInt(this.options.hOffset, 10), n = "auto" === this.options.vOffset ? s > o ? parseInt(Math.min(100, o / 10), 10) : parseInt((o - s) / 4, 10) : parseInt(this.options.vOffset, 10), this.$element.css({
                    top: n + "px"
                }), this.$overlay && "auto" === this.options.hOffset || (this.$element.css({
                    left: t + "px"
                }), this.$element.css({
                    margin: "0px"
                }))
            }
        }, {
            key: "_events",
            value: function() {
                var t = this,
                    n = this;
                this.$element.on({
                    "open.zf.trigger": this.open.bind(this),
                    "close.zf.trigger": function(i, a) {
                        return i.target === n.$element[0] || e(i.target).parents("[data-closable]")[0] === a ? t.close.apply(t) : void 0
                    },
                    "toggle.zf.trigger": this.toggle.bind(this),
                    "resizeme.zf.trigger": function() {
                        n._updatePosition()
                    }
                }), this.$anchor.length && this.$anchor.on("keydown.zf.reveal", function(e) {
                    (13 === e.which || 32 === e.which) && (e.stopPropagation(), e.preventDefault(), n.open())
                }), this.options.closeOnClick && this.options.overlay && this.$overlay.off(".zf.reveal").on("click.zf.reveal", function(t) {
                    t.target !== n.$element[0] && !e.contains(n.$element[0], t.target) && e.contains(document, t.target) && n.close()
                }), this.options.deepLink && e(window).on("popstate.zf.reveal:" + this.id, this._handleState.bind(this))
            }
        }, {
            key: "_handleState",
            value: function(e) {
                window.location.hash !== "#" + this.id || this.isActive ? this.close() : this.open()
            }
        }, {
            key: "open",
            value: function() {
                var t = this;
                if (this.options.deepLink) {
                    var n = "#" + this.id;
                    window.history.pushState ? window.history.pushState(null, null, n) : window.location.hash = n
                }
                if (this.isActive = !0, this.$element.css({
                        visibility: "hidden"
                    }).show().scrollTop(0), this.options.overlay && this.$overlay.css({
                        visibility: "hidden"
                    }).show(), this._updatePosition(), this.$element.hide().css({
                        visibility: ""
                    }), this.$overlay && (this.$overlay.css({
                        visibility: ""
                    }).hide(), this.$element.hasClass("fast") ? this.$overlay.addClass("fast") : this.$element.hasClass("slow") && this.$overlay.addClass("slow")), this.options.multipleOpened || this.$element.trigger("closeme.zf.reveal", this.id), this.options.animationIn) {
                    var i;
                    ! function() {
                        var e = function() {
                            i.$element.attr({
                                "aria-hidden": !1,
                                tabindex: -1
                            }).focus()
                        };
                        i = t, t.options.overlay && Foundation.Motion.animateIn(t.$overlay, "fade-in"), Foundation.Motion.animateIn(t.$element, t.options.animationIn, function() {
                            t.focusableElements = Foundation.Keyboard.findFocusable(t.$element), e()
                        })
                    }()
                } else this.options.overlay && this.$overlay.show(0), this.$element.show(this.options.showDelay);
                this.$element.attr({
                    "aria-hidden": !1,
                    tabindex: -1
                }).focus(), this.$element.trigger("open.zf.reveal"), this.isMobile ? (this.originalScrollPos = window.pageYOffset, e("html, body").addClass("is-reveal-open")) : e("body").addClass("is-reveal-open"), setTimeout(function() {
                    t._extraHandlers()
                }, 0)
            }
        }, {
            key: "_extraHandlers",
            value: function() {
                var t = this;
                this.focusableElements = Foundation.Keyboard.findFocusable(this.$element), this.options.overlay || !this.options.closeOnClick || this.options.fullScreen || e("body").on("click.zf.reveal", function(n) {
                    n.target !== t.$element[0] && !e.contains(t.$element[0], n.target) && e.contains(document, n.target) && t.close()
                }), this.options.closeOnEsc && e(window).on("keydown.zf.reveal", function(e) {
                    Foundation.Keyboard.handleKey(e, "Reveal", {
                        close: function() {
                            t.options.closeOnEsc && (t.close(), t.$anchor.focus())
                        }
                    })
                }), this.$element.on("keydown.zf.reveal", function(n) {
                    var i = e(this);
                    Foundation.Keyboard.handleKey(n, "Reveal", {
                        tab_forward: function() {
                            return t.focusableElements = Foundation.Keyboard.findFocusable(t.$element), t.$element.find(":focus").is(t.focusableElements.eq(-1)) ? (t.focusableElements.eq(0).focus(), !0) : 0 === t.focusableElements.length ? !0 : void 0
                        },
                        tab_backward: function() {
                            return t.focusableElements = Foundation.Keyboard.findFocusable(t.$element), t.$element.find(":focus").is(t.focusableElements.eq(0)) || t.$element.is(":focus") ? (t.focusableElements.eq(-1).focus(), !0) : 0 === t.focusableElements.length ? !0 : void 0
                        },
                        open: function() {
                            t.$element.find(":focus").is(t.$element.find("[data-close]")) ? setTimeout(function() {
                                t.$anchor.focus()
                            }, 1) : i.is(t.focusableElements) && t.open()
                        },
                        close: function() {
                            t.options.closeOnEsc && (t.close(), t.$anchor.focus())
                        },
                        handled: function(e) {
                            e && n.preventDefault()
                        }
                    })
                })
            }
        }, {
            key: "close",
            value: function() {
                function t() {
                    n.isMobile ? (e("html, body").removeClass("is-reveal-open"), n.originalScrollPos && (e("body").scrollTop(n.originalScrollPos), n.originalScrollPos = null)) : e("body").removeClass("is-reveal-open"), n.$element.attr("aria-hidden", !0), n.$element.trigger("closed.zf.reveal")
                }
                if (!this.isActive || !this.$element.is(":visible")) return !1;
                var n = this;
                this.options.animationOut ? (this.options.overlay ? Foundation.Motion.animateOut(this.$overlay, "fade-out", t) : t(), Foundation.Motion.animateOut(this.$element, this.options.animationOut)) : (this.options.overlay ? this.$overlay.hide(0, t) : t(), this.$element.hide(this.options.hideDelay)), this.options.closeOnEsc && e(window).off("keydown.zf.reveal"), !this.options.overlay && this.options.closeOnClick && e("body").off("click.zf.reveal"), this.$element.off("keydown.zf.reveal"), this.options.resetOnClose && this.$element.html(this.$element.html()), this.isActive = !1, n.options.deepLink && (window.history.replaceState ? window.history.replaceState("", document.title, window.location.pathname) : window.location.hash = "")
            }
        }, {
            key: "toggle",
            value: function() {
                this.isActive ? this.close() : this.open()
            }
        }, {
            key: "destroy",
            value: function() {
                this.options.overlay && (this.$element.appendTo(e("body")), this.$overlay.hide().off().remove()), this.$element.hide().off(), this.$anchor.off(".zf"), e(window).off(".zf.reveal:" + this.id), Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    a.defaults = {
        animationIn: "",
        animationOut: "",
        showDelay: 0,
        hideDelay: 0,
        closeOnClick: !0,
        closeOnEsc: !0,
        multipleOpened: !1,
        vOffset: "auto",
        hOffset: "auto",
        fullScreen: !1,
        btmOffsetPct: 10,
        overlay: !0,
        resetOnClose: !1,
        deepLink: !1
    }, Foundation.plugin(a, "Reveal")
}(jQuery);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
    }
}();
! function(e) {
    function t(e, t) {
        return e / t
    }

    function n(e, t, n, i) {
        return Math.abs(e.position()[t] + e[i]() / 2 - n)
    }
    var i = function() {
        function i(t, n) {
            _classCallCheck(this, i), this.$element = t, this.options = e.extend({}, i.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Slider"), Foundation.Keyboard.register("Slider", {
                ltr: {
                    ARROW_RIGHT: "increase",
                    ARROW_UP: "increase",
                    ARROW_DOWN: "decrease",
                    ARROW_LEFT: "decrease",
                    SHIFT_ARROW_RIGHT: "increase_fast",
                    SHIFT_ARROW_UP: "increase_fast",
                    SHIFT_ARROW_DOWN: "decrease_fast",
                    SHIFT_ARROW_LEFT: "decrease_fast"
                },
                rtl: {
                    ARROW_LEFT: "increase",
                    ARROW_RIGHT: "decrease",
                    SHIFT_ARROW_LEFT: "increase_fast",
                    SHIFT_ARROW_RIGHT: "decrease_fast"
                }
            })
        }
        return _createClass(i, [{
            key: "_init",
            value: function() {
                this.inputs = this.$element.find("input"), this.handles = this.$element.find("[data-slider-handle]"), this.$handle = this.handles.eq(0), this.$input = this.inputs.length ? this.inputs.eq(0) : e("#" + this.$handle.attr("aria-controls")), this.$fill = this.$element.find("[data-slider-fill]").css(this.options.vertical ? "height" : "width", 0);
                var t = !1,
                    n = this;
                (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) && (this.options.disabled = !0, this.$element.addClass(this.options.disabledClass)), this.inputs.length || (this.inputs = e().add(this.$input), this.options.binding = !0), this._setInitAttr(0), this._events(this.$handle), this.handles[1] && (this.options.doubleSided = !0, this.$handle2 = this.handles.eq(1), this.$input2 = this.inputs.length > 1 ? this.inputs.eq(1) : e("#" + this.$handle2.attr("aria-controls")), this.inputs[1] || (this.inputs = this.inputs.add(this.$input2)), t = !0, this._setHandlePos(this.$handle, this.options.initialStart, !0, function() {
                    n._setHandlePos(n.$handle2, n.options.initialEnd, !0)
                }), this._setInitAttr(1), this._events(this.$handle2)), t || this._setHandlePos(this.$handle, this.options.initialStart, !0)
            }
        }, {
            key: "_setHandlePos",
            value: function(e, n, i, a) {
                if (!this.$element.hasClass(this.options.disabledClass)) {
                    n = parseFloat(n), n < this.options.start ? n = this.options.start : n > this.options.end && (n = this.options.end);
                    var s = this.options.doubleSided;
                    if (s)
                        if (0 === this.handles.index(e)) {
                            var o = parseFloat(this.$handle2.attr("aria-valuenow"));
                            n = n >= o ? o - this.options.step : n
                        } else {
                            var r = parseFloat(this.$handle.attr("aria-valuenow"));
                            n = r >= n ? r + this.options.step : n
                        }
                    this.options.vertical && !i && (n = this.options.end - n);
                    var d = this,
                        l = this.options.vertical,
                        u = l ? "height" : "width",
                        c = l ? "top" : "left",
                        h = e[0].getBoundingClientRect()[u],
                        m = this.$element[0].getBoundingClientRect()[u],
                        p = t(n - this.options.start, this.options.end - this.options.start).toFixed(2),
                        f = (m - h) * p,
                        _ = (100 * t(f, m)).toFixed(this.options.decimal);
                    n = parseFloat(n.toFixed(this.options.decimal));
                    var y = {};
                    if (this._setValues(e, n), s) {
                        var A, g = 0 === this.handles.index(e),
                            v = ~~(100 * t(h, m));
                        if (g) y[c] = _ + "%", A = parseFloat(this.$handle2[0].style[c]) - _ + v, a && "function" == typeof a && a();
                        else {
                            var M = parseFloat(this.$handle[0].style[c]);
                            A = _ - (isNaN(M) ? this.options.initialStart / ((this.options.end - this.options.start) / 100) : M) + v
                        }
                        y["min-" + u] = A + "%"
                    }
                    this.$element.one("finished.zf.animate", function() {
                        d.$element.trigger("moved.zf.slider", [e])
                    });
                    var w = this.$element.data("dragging") ? 1e3 / 60 : this.options.moveTime;
                    Foundation.Move(w, e, function() {
                        e.css(c, _ + "%"), d.options.doubleSided ? d.$fill.css(y) : d.$fill.css(u, 100 * p + "%")
                    }), clearTimeout(d.timeout), d.timeout = setTimeout(function() {
                        d.$element.trigger("changed.zf.slider", [e])
                    }, d.options.changedDelay)
                }
            }
        }, {
            key: "_setInitAttr",
            value: function(e) {
                var t = this.inputs.eq(e).attr("id") || Foundation.GetYoDigits(6, "slider");
                this.inputs.eq(e).attr({
                    id: t,
                    max: this.options.end,
                    min: this.options.start,
                    step: this.options.step
                }), this.handles.eq(e).attr({
                    role: "slider",
                    "aria-controls": t,
                    "aria-valuemax": this.options.end,
                    "aria-valuemin": this.options.start,
                    "aria-valuenow": 0 === e ? this.options.initialStart : this.options.initialEnd,
                    "aria-orientation": this.options.vertical ? "vertical" : "horizontal",
                    tabindex: 0
                })
            }
        }, {
            key: "_setValues",
            value: function(e, t) {
                var n = this.options.doubleSided ? this.handles.index(e) : 0;
                this.inputs.eq(n).val(t), e.attr("aria-valuenow", t)
            }
        }, {
            key: "_handleEvent",
            value: function(i, a, s) {
                var o, r;
                if (s) o = this._adjustValue(null, s), r = !0;
                else {
                    i.preventDefault();
                    var d = this,
                        l = this.options.vertical,
                        u = l ? "height" : "width",
                        c = l ? "top" : "left",
                        h = l ? i.pageY : i.pageX,
                        m = (this.$handle[0].getBoundingClientRect()[u] / 2, this.$element[0].getBoundingClientRect()[u]),
                        p = l ? e(window).scrollTop() : e(window).scrollLeft(),
                        f = this.$element.offset()[c];
                    i.clientY === i.pageY && (h += p);
                    var _, y = h - f;
                    _ = 0 > y ? 0 : y > m ? m : y;
                    var A = t(_, m);
                    if (o = (this.options.end - this.options.start) * A + this.options.start, Foundation.rtl() && !this.options.vertical && (o = this.options.end - o), o = d._adjustValue(null, o), r = !1, !a) {
                        var g = n(this.$handle, c, _, u),
                            v = n(this.$handle2, c, _, u);
                        a = v >= g ? this.$handle : this.$handle2
                    }
                }
                this._setHandlePos(a, o, r)
            }
        }, {
            key: "_adjustValue",
            value: function(e, t) {
                var n, i, a, s, o = this.options.step,
                    r = parseFloat(o / 2);
                return n = e ? parseFloat(e.attr("aria-valuenow")) : t, i = n % o, a = n - i, s = a + o, 0 === i ? n : n = n >= a + r ? s : a
            }
        }, {
            key: "_events",
            value: function(t) {
                var n, i = this;
                if (this.inputs.off("change.zf.slider").on("change.zf.slider", function(t) {
                        var n = i.inputs.index(e(this));
                        i._handleEvent(t, i.handles.eq(n), e(this).val())
                    }), this.options.clickSelect && this.$element.off("click.zf.slider").on("click.zf.slider", function(t) {
                        return i.$element.data("dragging") ? !1 : void(e(t.target).is("[data-slider-handle]") || (i.options.doubleSided ? i._handleEvent(t) : i._handleEvent(t, i.$handle)))
                    }), this.options.draggable) {
                    this.handles.addTouch();
                    var a = e("body");
                    t.off("mousedown.zf.slider").on("mousedown.zf.slider", function(s) {
                        t.addClass("is-dragging"), i.$fill.addClass("is-dragging"), i.$element.data("dragging", !0), n = e(s.currentTarget), a.on("mousemove.zf.slider", function(e) {
                            e.preventDefault(), i._handleEvent(e, n)
                        }).on("mouseup.zf.slider", function(e) {
                            i._handleEvent(e, n), t.removeClass("is-dragging"), i.$fill.removeClass("is-dragging"), i.$element.data("dragging", !1), a.off("mousemove.zf.slider mouseup.zf.slider")
                        })
                    }).on("selectstart.zf.slider touchmove.zf.slider", function(e) {
                        e.preventDefault()
                    })
                }
                t.off("keydown.zf.slider").on("keydown.zf.slider", function(t) {
                    var n, a = e(this),
                        s = i.options.doubleSided ? i.handles.index(a) : 0,
                        o = parseFloat(i.inputs.eq(s).val());
                    Foundation.Keyboard.handleKey(t, "Slider", {
                        decrease: function() {
                            n = o - i.options.step
                        },
                        increase: function() {
                            n = o + i.options.step
                        },
                        decrease_fast: function() {
                            n = o - 10 * i.options.step
                        },
                        increase_fast: function() {
                            n = o + 10 * i.options.step
                        },
                        handled: function() {
                            t.preventDefault(), i._setHandlePos(a, n, !0)
                        }
                    })
                })
            }
        }, {
            key: "destroy",
            value: function() {
                this.handles.off(".zf.slider"), this.inputs.off(".zf.slider"), this.$element.off(".zf.slider"), Foundation.unregisterPlugin(this)
            }
        }]), i
    }();
    i.defaults = {
        start: 0,
        end: 100,
        step: 1,
        initialStart: 0,
        initialEnd: 100,
        binding: !1,
        clickSelect: !0,
        vertical: !1,
        draggable: !0,
        disabled: !1,
        doubleSided: !1,
        decimal: 2,
        moveTime: 200,
        disabledClass: "disabled",
        invertVertical: !1,
        changedDelay: 500
    }, Foundation.plugin(i, "Slider")
}(jQuery);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
    }
}();
! function(e) {
    function t(e) {
        return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * e
    }
    var n = function() {
        function n(t, i) {
            _classCallCheck(this, n), this.$element = t, this.options = e.extend({}, n.defaults, this.$element.data(), i), this._init(), Foundation.registerPlugin(this, "Sticky")
        }
        return _createClass(n, [{
            key: "_init",
            value: function() {
                var t = this.$element.parent("[data-sticky-container]"),
                    n = this.$element[0].id || Foundation.GetYoDigits(6, "sticky"),
                    i = this;
                t.length || (this.wasWrapped = !0), this.$container = t.length ? t : e(this.options.container).wrapInner(this.$element), this.$container.addClass(this.options.containerClass), this.$element.addClass(this.options.stickyClass).attr({
                    "data-resize": n
                }), this.scrollCount = this.options.checkEvery, this.isStuck = !1, e(window).one("load.zf.sticky", function() {
                    i.containerHeight = "none" == i.$element.css("display") ? 0 : i.$element[0].getBoundingClientRect().height, i.$container.css("height", i.containerHeight), i.elemHeight = i.containerHeight, "" !== i.options.anchor ? i.$anchor = e("#" + i.options.anchor) : i._parsePoints(), i._setSizes(function() {
                        i._calc(!1)
                    }), i._events(n.split("-").reverse().join("-"))
                })
            }
        }, {
            key: "_parsePoints",
            value: function() {
                for (var t = "" == this.options.topAnchor ? 1 : this.options.topAnchor, n = "" == this.options.btmAnchor ? document.documentElement.scrollHeight : this.options.btmAnchor, i = [t, n], a = {}, s = 0, o = i.length; o > s && i[s]; s++) {
                    var r;
                    if ("number" == typeof i[s]) r = i[s];
                    else {
                        var d = i[s].split(":"),
                            l = e("#" + d[0]);
                        r = l.offset().top, d[1] && "bottom" === d[1].toLowerCase() && (r += l[0].getBoundingClientRect().height)
                    }
                    a[s] = r
                }
                this.points = a
            }
        }, {
            key: "_events",
            value: function(t) {
                var n = this,
                    i = this.scrollListener = "scroll.zf." + t;
                this.isOn || (this.canStick && (this.isOn = !0, e(window).off(i).on(i, function(e) {
                    0 === n.scrollCount ? (n.scrollCount = n.options.checkEvery, n._setSizes(function() {
                        n._calc(!1, window.pageYOffset)
                    })) : (n.scrollCount--, n._calc(!1, window.pageYOffset))
                })), this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", function(e, a) {
                    n._setSizes(function() {
                        n._calc(!1), n.canStick ? n.isOn || n._events(t) : n.isOn && n._pauseListeners(i)
                    })
                }))
            }
        }, {
            key: "_pauseListeners",
            value: function(t) {
                this.isOn = !1, e(window).off(t), this.$element.trigger("pause.zf.sticky")
            }
        }, {
            key: "_calc",
            value: function(e, t) {
                return e && this._setSizes(), this.canStick ? (t || (t = window.pageYOffset), void(t >= this.topPoint ? t <= this.bottomPoint ? this.isStuck || this._setSticky() : this.isStuck && this._removeSticky(!1) : this.isStuck && this._removeSticky(!0))) : (this.isStuck && this._removeSticky(!0), !1)
            }
        }, {
            key: "_setSticky",
            value: function() {
                var e = this,
                    t = this.options.stickTo,
                    n = "top" === t ? "marginTop" : "marginBottom",
                    i = "top" === t ? "bottom" : "top",
                    a = {};
                a[n] = this.options[n] + "em", a[t] = 0, a[i] = "auto", a.left = this.$container.offset().left + parseInt(window.getComputedStyle(this.$container[0])["padding-left"], 10), this.isStuck = !0, this.$element.removeClass("is-anchored is-at-" + i).addClass("is-stuck is-at-" + t).css(a).trigger("sticky.zf.stuckto:" + t), this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
                    e._setSizes()
                })
            }
        }, {
            key: "_removeSticky",
            value: function(e) {
                var t = this.options.stickTo,
                    n = "top" === t,
                    i = {},
                    a = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight,
                    s = n ? "marginTop" : "marginBottom",
                    o = e ? "top" : "bottom";
                i[s] = 0, i.bottom = "auto", i.top = e ? 0 : a, i.left = "", this.isStuck = !1, this.$element.removeClass("is-stuck is-at-" + t).addClass("is-anchored is-at-" + o).css(i).trigger("sticky.zf.unstuckfrom:" + o)
            }
        }, {
            key: "_setSizes",
            value: function(e) {
                this.canStick = Foundation.MediaQuery.atLeast(this.options.stickyOn), this.canStick || e && "function" == typeof e && e();
                var t = this.$container[0].getBoundingClientRect().width,
                    n = window.getComputedStyle(this.$container[0]),
                    i = parseInt(n["padding-right"], 10);
                this.$anchor && this.$anchor.length ? this.anchorHeight = this.$anchor[0].getBoundingClientRect().height : this._parsePoints(), this.$element.css({
                    "max-width": t - i + "px"
                });
                var a = this.$element[0].getBoundingClientRect().height || this.containerHeight;
                if ("none" == this.$element.css("display") && (a = 0), this.containerHeight = a, this.$container.css({
                        height: a
                    }), this.elemHeight = a, this.isStuck) this.$element.css({
                    left: this.$container.offset().left + parseInt(n["padding-left"], 10)
                });
                else if (this.$element.hasClass("is-at-bottom")) {
                    var s = (this.points ? this.points[1] - this.$container.offset().top : this.anchorHeight) - this.elemHeight;
                    this.$element.css("top", s)
                }
                this._setBreakPoints(a, function() {
                    e && "function" == typeof e && e()
                })
            }
        }, {
            key: "_setBreakPoints",
            value: function(e, n) {
                if (!this.canStick) {
                    if (!n || "function" != typeof n) return !1;
                    n()
                }
                var i = t(this.options.marginTop),
                    a = t(this.options.marginBottom),
                    s = this.points ? this.points[0] : this.$anchor.offset().top,
                    o = this.points ? this.points[1] : s + this.anchorHeight,
                    r = window.innerHeight;
                "top" === this.options.stickTo ? (s -= i, o -= e + i) : "bottom" === this.options.stickTo && (s -= r - (e + a), o -= r - a), this.topPoint = s, this.bottomPoint = o, n && "function" == typeof n && n()
            }
        }, {
            key: "destroy",
            value: function() {
                this._removeSticky(!0), this.$element.removeClass(this.options.stickyClass + " is-anchored is-at-top").css({
                    height: "",
                    top: "",
                    bottom: "",
                    "max-width": ""
                }).off("resizeme.zf.trigger"), this.$anchor && this.$anchor.length && this.$anchor.off("change.zf.sticky"), e(window).off(this.scrollListener), this.wasWrapped ? this.$element.unwrap() : this.$container.removeClass(this.options.containerClass).css({
                    height: ""
                }), Foundation.unregisterPlugin(this)
            }
        }]), n
    }();
    n.defaults = {
        container: "<div data-sticky-container></div>",
        stickTo: "top",
        anchor: "",
        topAnchor: "",
        btmAnchor: "",
        marginTop: 1,
        marginBottom: 1,
        stickyOn: "medium",
        stickyClass: "sticky",
        containerClass: "sticky-container",
        checkEvery: -1
    }, Foundation.plugin(n, "Sticky")
}(jQuery);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
    }
}();
! function(e) {
    var t = function() {
        function t(n, i) {
            _classCallCheck(this, t), this.$element = n, this.options = e.extend({}, t.defaults, this.$element.data(), i), this._init(), Foundation.registerPlugin(this, "Tabs"), Foundation.Keyboard.register("Tabs", {
                ENTER: "open",
                SPACE: "open",
                ARROW_RIGHT: "next",
                ARROW_UP: "previous",
                ARROW_DOWN: "next",
                ARROW_LEFT: "previous"
            })
        }
        return _createClass(t, [{
            key: "_init",
            value: function() {
                var t = this;
                if (this.$tabTitles = this.$element.find("." + this.options.linkClass), this.$tabContent = e('[data-tabs-content="' + this.$element[0].id + '"]'), this.$tabTitles.each(function() {
                        var n = e(this),
                            i = n.find("a"),
                            a = n.hasClass("is-active"),
                            s = i[0].hash.slice(1),
                            o = i[0].id ? i[0].id : s + "-label",
                            r = e("#" + s);
                        n.attr({
                            role: "presentation"
                        }), i.attr({
                            role: "tab",
                            "aria-controls": s,
                            "aria-selected": a,
                            id: o
                        }), r.attr({
                            role: "tabpanel",
                            "aria-hidden": !a,
                            "aria-labelledby": o
                        }), a && t.options.autoFocus && i.focus()
                    }), this.options.matchHeight) {
                    var n = this.$tabContent.find("img");
                    n.length ? Foundation.onImagesLoaded(n, this._setHeight.bind(this)) : this._setHeight()
                }
                this._events()
            }
        }, {
            key: "_events",
            value: function() {
                this._addKeyHandler(), this._addClickHandler(), this._setHeightMqHandler = null, this.options.matchHeight && (this._setHeightMqHandler = this._setHeight.bind(this), e(window).on("changed.zf.mediaquery", this._setHeightMqHandler))
            }
        }, {
            key: "_addClickHandler",
            value: function() {
                var t = this;
                this.$element.off("click.zf.tabs").on("click.zf.tabs", "." + this.options.linkClass, function(n) {
                    n.preventDefault(), n.stopPropagation(), e(this).hasClass("is-active") || t._handleTabChange(e(this))
                })
            }
        }, {
            key: "_addKeyHandler",
            value: function() {
                {
                    var t = this;
                    t.$element.find("li:first-of-type"), t.$element.find("li:last-of-type")
                }
                this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs", function(n) {
                    if (9 !== n.which) {
                        var i, a, s = e(this),
                            o = s.parent("ul").children("li");
                        o.each(function(n) {
                            return e(this).is(s) ? void(t.options.wrapOnKeys ? (i = 0 === n ? o.last() : o.eq(n - 1), a = n === o.length - 1 ? o.first() : o.eq(n + 1)) : (i = o.eq(Math.max(0, n - 1)), a = o.eq(Math.min(n + 1, o.length - 1)))) : void 0
                        }), Foundation.Keyboard.handleKey(n, "Tabs", {
                            open: function() {
                                s.find('[role="tab"]').focus(), t._handleTabChange(s)
                            },
                            previous: function() {
                                i.find('[role="tab"]').focus(), t._handleTabChange(i)
                            },
                            next: function() {
                                a.find('[role="tab"]').focus(), t._handleTabChange(a)
                            },
                            handled: function() {
                                n.stopPropagation(), n.preventDefault()
                            }
                        })
                    }
                })
            }
        }, {
            key: "_handleTabChange",
            value: function(t) {
                var n = t.find('[role="tab"]'),
                    i = n[0].hash,
                    a = this.$tabContent.find(i),
                    s = this.$element.find("." + this.options.linkClass + ".is-active").removeClass("is-active").find('[role="tab"]').attr({
                        "aria-selected": "false"
                    });
                e("#" + s.attr("aria-controls")).removeClass("is-active").attr({
                    "aria-hidden": "true"
                }), t.addClass("is-active"), n.attr({
                    "aria-selected": "true"
                }), a.addClass("is-active").attr({
                    "aria-hidden": "false"
                }), this.$element.trigger("change.zf.tabs", [t])
            }
        }, {
            key: "selectTab",
            value: function(e) {
                var t;
                t = "object" == typeof e ? e[0].id : e, t.indexOf("#") < 0 && (t = "#" + t);
                var n = this.$tabTitles.find('[href="' + t + '"]').parent("." + this.options.linkClass);
                this._handleTabChange(n)
            }
        }, {
            key: "_setHeight",
            value: function() {
                var t = 0;
                this.$tabContent.find("." + this.options.panelClass).css("height", "").each(function() {
                    var n = e(this),
                        i = n.hasClass("is-active");
                    i || n.css({
                        visibility: "hidden",
                        display: "block"
                    });
                    var a = this.getBoundingClientRect().height;
                    i || n.css({
                        visibility: "",
                        display: ""
                    }), t = a > t ? a : t
                }).css("height", t + "px")
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.find("." + this.options.linkClass).off(".zf.tabs").hide().end().find("." + this.options.panelClass).hide(), this.options.matchHeight && null != this._setHeightMqHandler && e(window).off("changed.zf.mediaquery", this._setHeightMqHandler), Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    t.defaults = {
        autoFocus: !1,
        wrapOnKeys: !0,
        matchHeight: !1,
        linkClass: "tabs-title",
        panelClass: "tabs-panel"
    }, Foundation.plugin(t, "Tabs")
}(jQuery);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
    }
}();
! function(e) {
    var t = function() {
        function t(n, i) {
            _classCallCheck(this, t), this.$element = n, this.options = e.extend({}, t.defaults, n.data(), i), this.className = "", this._init(), this._events(), Foundation.registerPlugin(this, "Toggler")
        }
        return _createClass(t, [{
            key: "_init",
            value: function() {
                var t;
                this.options.animate ? (t = this.options.animate.split(" "), this.animationIn = t[0], this.animationOut = t[1] || null) : (t = this.$element.data("toggler"), this.className = "." === t[0] ? t.slice(1) : t);
                var n = this.$element[0].id;
                e('[data-open="' + n + '"], [data-close="' + n + '"], [data-toggle="' + n + '"]').attr("aria-controls", n), this.$element.attr("aria-expanded", this.$element.is(":hidden") ? !1 : !0)
            }
        }, {
            key: "_events",
            value: function() {
                this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger", this.toggle.bind(this))
            }
        }, {
            key: "toggle",
            value: function() {
                this[this.options.animate ? "_toggleAnimate" : "_toggleClass"]()
            }
        }, {
            key: "_toggleClass",
            value: function() {
                this.$element.toggleClass(this.className);
                var e = this.$element.hasClass(this.className);
                this.$element.trigger(e ? "on.zf.toggler" : "off.zf.toggler"), this._updateARIA(e)
            }
        }, {
            key: "_toggleAnimate",
            value: function() {
                var e = this;
                this.$element.is(":hidden") ? Foundation.Motion.animateIn(this.$element, this.animationIn, function() {
                    e._updateARIA(!0), this.trigger("on.zf.toggler")
                }) : Foundation.Motion.animateOut(this.$element, this.animationOut, function() {
                    e._updateARIA(!1), this.trigger("off.zf.toggler")
                })
            }
        }, {
            key: "_updateARIA",
            value: function(e) {
                this.$element.attr("aria-expanded", e ? !0 : !1)
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.off(".zf.toggler"), Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    t.defaults = {
        animate: !1
    }, Foundation.plugin(t, "Toggler")
}(jQuery);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
    }
}();
! function(e) {
    var t = function() {
        function t(n, i) {
            _classCallCheck(this, t), this.$element = n, this.options = e.extend({}, t.defaults, this.$element.data(), i), this.isActive = !1, this.isClick = !1, this._init(), Foundation.registerPlugin(this, "Tooltip")
        }
        return _createClass(t, [{
            key: "_init",
            value: function() {
                var t = this.$element.attr("aria-describedby") || Foundation.GetYoDigits(6, "tooltip");
                this.options.positionClass = this.options.positionClass || this._getPositionClass(this.$element), this.options.tipText = this.options.tipText || this.$element.attr("title"), this.template = this.options.template ? e(this.options.template) : this._buildTemplate(t), this.template.appendTo(document.body).text(this.options.tipText).hide(), this.$element.attr({
                    title: "",
                    "aria-describedby": t,
                    "data-yeti-box": t,
                    "data-toggle": t,
                    "data-resize": t
                }).addClass(this.options.triggerClass), this.usedPositions = [], this.counter = 4, this.classChanged = !1, this._events()
            }
        }, {
            key: "_getPositionClass",
            value: function(e) {
                if (!e) return "";
                var t = e[0].className.match(/\b(top|left|right)\b/g);
                return t = t ? t[0] : ""
            }
        }, {
            key: "_buildTemplate",
            value: function(t) {
                var n = (this.options.tooltipClass + " " + this.options.positionClass + " " + this.options.templateClasses).trim(),
                    i = e("<div></div>").addClass(n).attr({
                        role: "tooltip",
                        "aria-hidden": !0,
                        "data-is-active": !1,
                        "data-is-focus": !1,
                        id: t
                    });
                return i
            }
        }, {
            key: "_reposition",
            value: function(e) {
                this.usedPositions.push(e ? e : "bottom"), !e && this.usedPositions.indexOf("top") < 0 ? this.template.addClass("top") : "top" === e && this.usedPositions.indexOf("bottom") < 0 ? this.template.removeClass(e) : "left" === e && this.usedPositions.indexOf("right") < 0 ? this.template.removeClass(e).addClass("right") : "right" === e && this.usedPositions.indexOf("left") < 0 ? this.template.removeClass(e).addClass("left") : !e && this.usedPositions.indexOf("top") > -1 && this.usedPositions.indexOf("left") < 0 ? this.template.addClass("left") : "top" === e && this.usedPositions.indexOf("bottom") > -1 && this.usedPositions.indexOf("left") < 0 ? this.template.removeClass(e).addClass("left") : this.template.removeClass("left" === e && this.usedPositions.indexOf("right") > -1 && this.usedPositions.indexOf("bottom") < 0 ? e : "right" === e && this.usedPositions.indexOf("left") > -1 && this.usedPositions.indexOf("bottom") < 0 ? e : e),
                    this.classChanged = !0, this.counter--
            }
        }, {
            key: "_setPosition",
            value: function() {
                {
                    var e = this._getPositionClass(this.template),
                        t = Foundation.Box.GetDimensions(this.template),
                        n = Foundation.Box.GetDimensions(this.$element),
                        i = "left" === e ? "left" : "right" === e ? "left" : "top",
                        a = "top" === i ? "height" : "width";
                    "height" === a ? this.options.vOffset : this.options.hOffset
                }
                if (t.width >= t.windowDims.width || !this.counter && !Foundation.Box.ImNotTouchingYou(this.template)) return this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element, "center bottom", this.options.vOffset, this.options.hOffset, !0)).css({
                    width: n.windowDims.width - 2 * this.options.hOffset,
                    height: "auto"
                }), !1;
                for (this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element, "center " + (e || "bottom"), this.options.vOffset, this.options.hOffset)); !Foundation.Box.ImNotTouchingYou(this.template) && this.counter;) this._reposition(e), this._setPosition()
            }
        }, {
            key: "show",
            value: function() {
                if ("all" !== this.options.showOn && !Foundation.MediaQuery.atLeast(this.options.showOn)) return !1;
                var e = this;
                this.template.css("visibility", "hidden").show(), this._setPosition(), this.$element.trigger("closeme.zf.tooltip", this.template.attr("id")), this.template.attr({
                    "data-is-active": !0,
                    "aria-hidden": !1
                }), e.isActive = !0, this.template.stop().hide().css("visibility", "").fadeIn(this.options.fadeInDuration, function() {}), this.$element.trigger("show.zf.tooltip")
            }
        }, {
            key: "hide",
            value: function() {
                var e = this;
                this.template.stop().attr({
                    "aria-hidden": !0,
                    "data-is-active": !1
                }).fadeOut(this.options.fadeOutDuration, function() {
                    e.isActive = !1, e.isClick = !1, e.classChanged && (e.template.removeClass(e._getPositionClass(e.template)).addClass(e.options.positionClass), e.usedPositions = [], e.counter = 4, e.classChanged = !1)
                }), this.$element.trigger("hide.zf.tooltip")
            }
        }, {
            key: "_events",
            value: function() {
                var e = this,
                    t = (this.template, !1);
                this.options.disableHover || this.$element.on("mouseenter.zf.tooltip", function(t) {
                    e.isActive || (e.timeout = setTimeout(function() {
                        e.show()
                    }, e.options.hoverDelay))
                }).on("mouseleave.zf.tooltip", function(n) {
                    clearTimeout(e.timeout), (!t || e.isClick && !e.options.clickOpen) && e.hide()
                }), this.options.clickOpen ? this.$element.on("mousedown.zf.tooltip", function(t) {
                    t.stopImmediatePropagation(), e.isClick || (e.isClick = !0, !e.options.disableHover && e.$element.attr("tabindex") || e.isActive || e.show())
                }) : this.$element.on("mousedown.zf.tooltip", function(t) {
                    t.stopImmediatePropagation(), e.isClick = !0
                }), this.options.disableForTouch || this.$element.on("tap.zf.tooltip touchend.zf.tooltip", function(t) {
                    e.isActive ? e.hide() : e.show()
                }), this.$element.on({
                    "close.zf.trigger": this.hide.bind(this)
                }), this.$element.on("focus.zf.tooltip", function(n) {
                    return t = !0, e.isClick ? (e.options.clickOpen || (t = !1), !1) : void e.show()
                }).on("focusout.zf.tooltip", function(n) {
                    t = !1, e.isClick = !1, e.hide()
                }).on("resizeme.zf.trigger", function() {
                    e.isActive && e._setPosition()
                })
            }
        }, {
            key: "toggle",
            value: function() {
                this.isActive ? this.hide() : this.show()
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.attr("title", this.template.text()).off(".zf.trigger .zf.tootip").removeAttr("aria-describedby").removeAttr("data-yeti-box").removeAttr("data-toggle").removeAttr("data-resize"), this.template.remove(), Foundation.unregisterPlugin(this)
            }
        }]), t
    }();
    t.defaults = {
        disableForTouch: !1,
        hoverDelay: 200,
        fadeInDuration: 150,
        fadeOutDuration: 150,
        disableHover: !1,
        templateClasses: "",
        tooltipClass: "tooltip",
        triggerClass: "has-tip",
        showOn: "small",
        template: "",
        tipText: "",
        touchCloseText: "Tap to close.",
        clickOpen: !0,
        positionClass: "",
        vOffset: 10,
        hOffset: 12
    }, Foundation.plugin(t, "Tooltip")
}(jQuery), $(function() {
        $("input, textarea").placeholder(), 
        Reggae.Menu.init(), 
        Reggae.Dropdowns.init(), 
        Reggae.Gallery.init(), 
        Reggae.Rooms.init(), 
        Reggae.Utils.showCookieConsent(), 
        $(".banners").slick({
            autoplay: !0,
            autoplaySpeed: 5e4,
            fade: !0,
            speed: 500
        }), 
         $(document).on("open.zf.reveal", "[data-reveal]", function() {
            $(this).parent().appendTo($("form"))
        });
        var e = $("html").data("culture");
        e && moment && moment.locale(e)
    }),
    function(e, t) {
        e.Utils = function() {
            function e(e, n) {
                var i = t(window).scrollTop(),
                    a = i + t(window).height(),
                    s = t(e).offset().top,
                    o = s + t(e).height();
                return n === !0 ? s > i && a > o : a >= s && o >= i
            }

            function n() {
                t(window).trigger("resize")
            }

            function i(e, n) {
                t(e).insertBefore(n)
            }

            function a(e, n) {
                var i = t.extend({
                        delay: 1500,
                        additionalOffset: 165,
                        mobileAdditionalOffset: 45
                    }, n),
                    a = 0;
                "small" === Foundation.MediaQuery.current ? a = i.mobileAdditionalOffset : Foundation.MediaQuery.atLeast("medium") && (a = i.additionalOffset), t("html, body").animate({
                    scrollTop: t(e).offset().top - a
                }, i.delay)
            }

            function s(e) {
                return !(!e.offsetWidth && !e.offsetHeight && null !== e.offsetParent)
            }

            function o(e) {
                e = e || "/";
                var t = window.location.href;
                window.history.go(-1), setTimeout(function() {
                    window.location.href == t && (window.location.href = e)
                }, 500)
            }

            function r() {
                void 0 == Cookies.get("CookieConsent") && (Cookies.set("CookieConsent", "true", {
                    expires: 365
                }), t(".cookie-consent").show())
            }

            function d(e, t) {
                return t.indexOf(e) > -1
            }

            function l(e, t) {
                d(e, t) || t.push(e)
            }

            function u(e, t) {
                console.info("[" + e + "] - " + t)
            }

            function c(e, t) {
                var n = 864e5,
                    i = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()),
                    a = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
                return Math.floor((a - i) / n)
            }

            function h(e) {
                var t = window.location.hash.substring(1);
                if (~t.indexOf(e))
                    if (~t.indexOf("&"))
                        for (var n = t.split("&"), i = 0; i < n.length; i++) {
                            var a = n[i].split("="),
                                s = a[0],
                                o = a[1];
                            if (s === e) return o
                        } else {
                            var a = t.split("="),
                                s = a[0],
                                o = a[1];
                            if (s === e) return o
                        }
            }

            function m(e) {
                if (e) {
                    var n = t(e),
                        i = Math.max.apply(Math, n.map(function() {
                            return t(this).outerHeight(!0)
                        }));
                    n.css("height", i)
                }
            }
            return {
                isInView: e,
                triggerWindowRedraw: n,
                swapElements: i,
                scrollTo: a,
                isVisible: s,
                showCookieConsent: r,
                backButton: o,
                isInArray: d,
                addArrayItemIfNotExists: l,
                logInfo: u,
                dateDiffInDays: c,
                getUrlHashParameter: h,
                equalize: m
            }
        }()
    }(Reggae, jQuery),
    function(e, t) {
        e.Menu = function() {
            function e() {
            }

            function n() {
                t(".js-hook--destinations, .js-hook--close-destinations").click(function(e) {
                    e.preventDefault();
                    var n = t("html");
                    n.removeClass("booking-menu-opened"), t(".js-hook--booking-overlay").removeClass("open"), t(".js-hook--destinations").toggleClass("opened"), t(".js-hook--destination-menu").toggleClass("open"), t("#socialDropdown").length && Reggae.Dropdowns.closeDropdown("#socialDropdown", !0)
                }), t("#destinationDropdown, .js-hook--destinations").on("click", function(e) {
                    e.stopPropagation()
                }), t(document).on("click", function(e) {
                    t("#destinationDropdown").removeClass("open"), t(".js-hook--destinations").removeClass("opened")
                })
            }

            function i() {
                var e = [];
                t(window).scroll(function() {
                    t(".magellan .menu a").each(function() {
                        var n = t(this),
                            i = n.attr("href");
                        a(i, 100) && Reggae.Utils.addArrayItemIfNotExists(i, e)
                    });
                    var n = e.pop();
                    n && (t(".magellan a").removeClass("active"), t('a[href="' + n + '"]').addClass("active"))
                })
            }

            function a(e, n) {
                n = n || 0;
                var i = t(".magellan"),
                    e = t(e);
                if (i.length && e.length) {
                    var a = i.height(),
                        s = i.offset().top,
                        o = e.offset().top,
                        r = o - s - a - n;
                    if (0 > r || 0 === r) return !0
                }
            }

            function s() {
                t("#burgerMenu").click(function(e) {
                    t(this).toggleClass("open"), e.preventDefault()
                }), t(".js-hook--cta").click(function() {
                    t("html, body").animate({
                        scrollTop: t("div.waypoint").offset().top
                    }, 1200)
                }), t(".js--hook-toggle-ftr-destinations").click(function() {
                    var e = t(".header").outerHeight(!0);
                    t(this).toggleClass("open"), t(".js--hook-footer-locations-list").toggleClass("show"), t("html, body").animate({
                        scrollTop: t(".js--hook-toggle-ftr-destinations").offset().top - e
                    }, 400)
                }), t(".is-accordion-submenu-parent a").click(function() {
                    t(this).parent().toggleClass("open")
                }), e(), n(), i(), t(".magellan").length && t("[data-insta]").on("shown", function(e) {
                    Foundation.reInit("magellan"), t("[data-magellan]").each(function() {
                        t(this).foundation("calcPoints"), t(this).foundation("reflow")
                    })
                })
            }

            function o() {
                s()
            }
            return {
                init: o
            }
        }()
    }(Reggae, jQuery),
    function(e, t) {
        e.Dropdowns = function() {
            function e() {
                t(".js-select").select2({
                    minimumResultsForSearch: 1 / 0,
                    containerCssClass: "custom-select",
                    dropdownCssClass: "custom-select-results"
                }), t(".js-select--currency").select2({
                    minimumResultsForSearch: 1 / 0,
                    containerCssClass: "custom-select--currency",
                    dropdownCssClass: "custom-select-results--currency"
                }), t(".js-select--lang").select2({
                    minimumResultsForSearch: 1 / 0,
                    containerCssClass: "custom-select--lang",
                    dropdownCssClass: "custom-select-results--lang"
                }), t(".select").click(function() {
                    t(this).toggleClass("opened")
                }), t(".select").on("focusout", function(e) {
                    t(this).removeClass("opened")
                }), window.location.hash && t("[data-lang-selector] li a").each(function() {
                    var e = t(this).attr("href");
                    t(this).attr("href", e + window.location.hash)
                })
            }

            function n(e, n) {
                n ? t(e).foundation("close") : t(e).select2("close")
            }
            return {
                init: e,
                closeDropdown: n
            }
        }()
    }(Reggae, jQuery),
    function(e, t) {
        e.Gallery = function() {
            function e() {
                for (var e = 0; e < d.length; e++) t(d[e].selector).slick("unslick")
            }

            function n(e) {
                t(e).removeData("initial-slide"), t(e).attr("initial-slide", "")
            }

            function i() {
                t(".destination-gallery__thumb").click(function() {
                    var n = t("#" + t(this).data("open")),
                        i = n.children(".gallery");
                    n.data("initial-slide", parseInt(t(this).data("slide-index"))), e(), window.setTimeout(function() {
                        t(".slick-list", i).attr("tabindex", 0).focus()
                    }, 0)
                });
                var n = t("#destinationsGalleryModal .gallery > div").length;
                t(".js-hook--gallery-count").text(n)
            }

            function a() {
                t(".space-gallery").each(function() {
                    var e = t(this);
                    t(e).slick({
                        lazyLoad: "progressive",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: !1,
                        dots: !1,
                        adaptiveHeight: !1
                    }), "small" === Foundation.MediaQuery.current && o(e), t(window).on("changed.zf.mediaquery", function(t, n, i) {
                        "small" === n && o(e)
                    })
                })
            }

            function s() {
                t("#parallelGallery").slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: !1,
                    dots: !1,
                    adaptiveHeight: !1
                })
            }

            function o(e) {
                var n = e.closest(".accordion-content").prev(".accordion-title");
                t(n).click(function() {
                    window.setTimeout(function() {
                        t(e).slick("setPosition")
                    }, 0)
                })
            }

            function r() {
                i(), a(), s(), t(document).on("open.zf.reveal", ".gallery-modal", function(e) {
                    var n = t("#" + e.target.id + " .gallery").slick({
                        lazyLoad: "progressive",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: !1,
                        dots: !1,
                        adaptiveHeight: !0,
                        initialSlide: t(e.target).data("initial-slide")
                    });
                    d.push(n)
                }), t(document).on("closed.zf.reveal", ".gallery-modal", function(e) {
                    n(e.target)
                }), t(".gallery").on("init reInit", function(e, n, i, a) {
                    var s = 0,
                        o = t(this);
                    t(".slick-slide .gallery__page").remove(), t(o).find(".slick-slide").each(function() {
                        var e = (t(this), t(".gallery__caption", this)),
                            i = t('<div class="gallery__page"></div>');
                    })
                })
            }
            var d = [];
            return {
                init: r
            }
        }()
    }(Reggae, jQuery),
    function(e, t) {
        e.Maps = function() {
            function e() {
                t("[data-google-360]").each(function() {
                    t(this)
                })
            }

            function n() {
                t("[data-google-map]").each(function() {
                    var e = t(this),
                        n = e.data("google-map-zoom"),
                        i = {
                            lat: parseFloat(e.data("google-map-lat")),
                            lng: parseFloat(e.data("google-map-long"))
                        },
                        a = {
                            center: i,
                            zoom: n ? n : 14,
                            streetViewControl: !1
                        },
                        s = t(".google-map", e);
                    if (t(".button-group", e).length > 0) {
                        var o = "https://maps.googleapis.com/maps/api/staticmap?center=" + a.center.lat + "," + a.center.lng + "&zoom=" + n + "&size=600x600&scale=2&maptype=roadmap&markers=icon:" + y + "%7Cscale:2%7C" + a.center.lat + "," + a.center.lng + "&key=AIzaSyCuHN5e7p_sxNVijkgZAyCbbMAKKpNAliI&style=feature:all|hue:0xa3d6e6|saturation:0|visibility:simplified&style=feature:road|element:geometry|lightness:100|visibility:simplified&style=feature:water|element:all|color:0xa3d6e6|visibility:on";
                        s.attr("style", "background-image: url(" + o + ");");
                        var r = t("[data-google-map-viewmap]", e),
                            u = t("[data-google-map-viewstreet]", e);
                        r.click(function() {
                            d(e, s, a)
                        }), u.click(function() {
                            l(e, s, a)
                        })
                    } else d(e, s, a)
                })
            }

            function i() {
                t("[data-google-map-list]").each(function() {
                    var e, n, i, d = t(this),
                        l = d.data("google-map-markersjson").MapMarkers,
                        u = d.data("google-map-stylename"),
                        c = p(u),
                        h = new google.maps.Map(document.getElementById(d.attr("id")), {
                            streetViewControl: !0,
                            disableDefaultUI: !0,
                            zoomControl: !0,
                            styles: c
                        }),
                        m = new google.maps.LatLngBounds;
                    for (i = 0; i < l.length; i++) n = new google.maps.LatLng(parseFloat(l[i].Latitude), parseFloat(l[i].Longitude)), "destinations" == u ? e = r(n, h, l[i], _) : (e = o(n, h, l[i], _, a("#ffffff")), e = o(n, h, l[i], _, s(l[i].SvgPath, "#000000"))), m.extend(n);
                    h.fitBounds(m)
                })
            }

            function a(e) {
                return {
                    path: google.maps.SymbolPath.CIRCLE,
                    fillColor: e,
                    fillOpacity: 1,
                    strokeColor: e,
                    strokeWeight: 0,
                    scale: 16
                }
            }

            function s(e, t) {
                return {
                    path: e,
                    strokeOpacity: 1,
                    strokeColor: t,
                    fillColor: t,
                    fillOpacity: 0,
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(11, 11),
                    scale: .9
                }
            }

            function o(e, t, n, i, a) {
                var s = r(e, t, n, i);
                if (s.icon = a, s.toolTipContent = n.Label, s.redirectUrl = n.DetailUrl, s.toolTipContent.length > 0) {
                    var o = new google.maps.InfoWindow({
                        content: "holding..."
                    });
                    s.addListener("mouseover", function() {
                        o.setContent(this.toolTipContent), o.open(t, this)
                    }), s.addListener("mouseout", function() {
                        o.close(t, this)
                    })
                }
                return s.redirectUrl.length > 0 && s.addListener("click", function() {
                    window.location.href = this.redirectUrl
                }), s
            }

            function r(e, t, n, i) {
                return new google.maps.Marker({
                    position: e,
                    map: t,
                    icon: i,
                    title: n.Label
                })
            }

            function d(e, t, n) {
                e.data("google-map-current-view", "map");
                var i = e.data("map");
                i || (i = u(e, t, n));
                var a = m(e, t, n);
                a.setVisible(!1)
            }

            function l(e, t, n) {
                e.data("google-map-current-view", "street");
                var i = m(e, t, n);
                i.setVisible(!0)
            }

            function u(e, t, n) {
                {
                    var i = new google.maps.Map(document.getElementById(t.attr("id")), {
                        center: n.center,
                        zoom: n.zoom,
                        streetViewControl: n.streetViewControl,
                        styles: p("normal")
                    });
                    new google.maps.Marker({
                        position: n.center,
                        map: i,
                        icon: _
                    })
                }
                return e.data("map", i), i
            }

            function c(e, t, n) {
                var i = t.getStreetView();
                return i.setPosition(n.center), e.data("panorama", i), i
            }

            function h(e, t, n) {
                var i = e.data("map");
                return i || (i = u(e, t, n)), i
            }

            function m(e, t, n) {
                var i = e.data("panorama");
                return i || (i = c(e, h(e, t, n), n)), i
            }

            function p(e) {
                return "destinations" == e ? [{
                    featureType: "landscape.natural",
                    stylers: [{
                        color: "#7FCAD9"
                    }]
                }, {
                    featureType: "poi",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "labels.text.stroke",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative.country",
                    stylers: [{
                        visibility: "on"
                    }]
                }, {
                    featureType: "administrative.province",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape.man_made",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative.country",
                    elementType: "labels.text.stroke",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit.line",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative"
                }, {
                    featureType: "water",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "water",
                    elementType: "all",
                    stylers: [{
                        color: "#CCEBF0"
                    }, {
                        visibility: "on"
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "geometry.stroke",
                    stylers: [{
                        color: "#CCEBF0"
                    }]
                }, {
                    featureType: "transit",
                    stylers: [{
                        visibility: "off"
                    }]
                }] : [{
                    stylers: [{
                        hue: "#a3d6e6"
                    }, {
                        saturation: 0
                    }, {
                        visibility: "simplified"
                    }]
                }, {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{
                        lightness: 100
                    }, {
                        visibility: "simplified"
                    }]
                }, {
                    featureType: "water",
                    elementType: "all",
                    stylers: [{
                        color: "#a3d6e6"
                    }, {
                        visibility: "on"
                    }]
                }]
            }

            function f() {
                n(), e(), i()
            }
            var _ = window.location.origin + "/web/images/icons/icon_map_pin_32x32.png",
                y = window.location.origin + "/web/images/icons/icon_map_pin_64x64.png";
            return {
                init: f
            }
        }()
    }(Reggae, jQuery),
    function(e, t) {
        e.Rooms = function() {
            function e() {
                if (t(window).on("changed.zf.mediaquery", function(e, n, i) {
                        if ("small" === n) Foundation.reInit("accordion");
                        else if (Foundation.MediaQuery.atLeast("medium")) {
                            {
                                t(".accordion")
                            }
                            t(".accordion").foundation("down", t(".accordion-content")), t(".accordion-title.medium-disabled").off()
                        }
                    }), Foundation.MediaQuery.atLeast("medium")) {
                    var e = t(".accordion");
                    t(e).foundation("down", t(".accordion-content")), t(".accordion-title.medium-disabled").off(), t(e).on("click", ".accordion-title.medium-disabled", function(e) {
                        e.preventDefault(), e.stopPropagation()
                    })
                }
            }

            function n() {
                t(".room-column").each(function() {
                    var e = t(this);
                    e.removeClass("clear-left"), (e.hasClass("large-6") || e.hasClass("medium-12")) && (e.removeClass("large-6"), e.removeClass("medium-12"), e.addClass("large-3"), e.addClass("medium-6")), e.hasClass("swapped") && (Reggae.Utils.swapElements(e.next(), e), e.removeClass("swapped"))
                }), t(".pod--room").removeClass("expanded"), t(".room-gallery").removeClass("show"), t(".pod--room__image").removeClass("hide"), t(".pod--room").off("click", ".slick-next,.slick-prev,.button,.slick-slide,.pod--room__content")
            }

            function i(e) {
                var n = !1,
                    i = t(e).index() + 1;
                return Foundation.MediaQuery.atLeast("large") ? n = i % 4 === 0 : "medium" === Foundation.MediaQuery.current && (n = i % 2 === 0), n
            }

            function a(e) {
                t(".pod--room").each(function() {
                    var n = t(this),
                        i = t(".room-gallery", n),
                        a = t(".pod--room__content", n);
                    e === !0 ? (i.addClass("swapped"), Reggae.Utils.swapElements(a, i)) : i.hasClass("swapped") && (i.removeClass("swapped"), Reggae.Utils.swapElements(i, a))
                })
            }

            function s(e) {
                t(e).slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: !1,
                    dots: !1,
                    adaptiveHeight: !1
                })
            }

            function o(e) {
                t(e).slick("setPosition")
            }

            function r(e) {
                n();
                var a = t(e),
                    r = a.closest(".room-column"),
                    d = t(".pod--room__image", a),
                    l = i(r),
                    u = t(".room-gallery", a);
                if (setTimeout(function() {
                        Reggae.Utils.scrollTo(r, {
                            additionalOffset: 140,
                            delay: 300
                        })
                    }, 300), t(a).on("click", ".slick-next,.slick-prev,.button,.slick-slide,.pod--room__content", function(e) {
                        e.stopPropagation()
                    }), l === !0 && (Reggae.Utils.swapElements(r, r.prev()), r.addClass("swapped")), window.setTimeout(function() {
                        r.removeClass("large-3"), r.removeClass("medium-6"), r.addClass("large-6"), r.addClass("medium-12"), a.addClass("expanded"), d.addClass("hide"), u.addClass("show")
                    }, 0), Modernizr.csstransitions ? t(r).one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                        u.hasClass("slick-initialized") ? o(u) : s(u)
                    }) : window.setTimeout(function() {
                        u.hasClass("slick-initialized") ? o(u) : s(u)
                    }, 0), t(a).on("click", ".close-button", function(e) {
                        e.stopPropagation(), n()
                    }), Foundation.MediaQuery.atLeast("large")) {
                    var c = r.closest(".room-list"),
                        h = 0;
                    0 === r.index() ? h = 5 : 1 === r.index() && (h = 4);
                    var m = t(".room-column", c)[h];
                    m && (m.className += " clear-left")
                }
            }

            function d(e) {
                e.toggleClass("expanded"), t(".pod--room__short-description", e).slideToggle("fast", "easeInQuad"), t(".expanded-content", e).slideToggle("fast", "easeInQuad", function() {
                    // var n = t(".js--hook-more", e);
                    // console.log(n.text);
                    // n.text(Reggae.ResourceStrings.getString(n.text() === Reggae.ResourceStrings.getString("buttons__more") ? "buttons__less" : "buttons__more"))
                });
                var n = t(".room-gallery", e);
                n.hasClass("slick-initialized") ? o(n) : s(n), t(e).on("click", ".room-gallery", function(e) {
                    e.stopPropagation()
                })
            }

            function l() {
                t(".js-hook--room-expand").click(function(e) {
                    var n = t(this);
                    Foundation.MediaQuery.atLeast("medium") ? r(n) : "small" == Foundation.MediaQuery.current && d(n)
                }), 
                t(window).on("changed.zf.mediaquery", function(e, i, s) {
                    n(), 
                    t(".js--hook-more").text("More"), "small" === i && (t(".pod--room__short-description").hide(), t(".expanded-content").hide(), a(!0)), Foundation.MediaQuery.atLeast("medium") && (t(".pod--room__short-description").attr("style", null), t(".expanded-content").attr("style", null), a(!1)), (("medium" === s || "small" === s) && Foundation.MediaQuery.atLeast("medium") || "medium" === i) && (Modernizr.csstransitions ? t(".room-column").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                        u()
                    }) : window.setTimeout(function() {
                        u()
                    }, 0))
                }), "small" === Foundation.MediaQuery.current && a(!0), Foundation.MediaQuery.atLeast("medium") && (t(window).load(function() {
                    u()
                }), t(window).resize(function() {
                    u()
                }))
            }

            function u() {
                t(".room-list").each(function(e) {
                    var n = t(this),
                        i = 0;
                    t(".room-column", n).each(function() {
                        var e = t(this),
                            n = t(".pod--room", e);
                        n.outerHeight(!0) > i && (i = n.outerHeight(!0) + 2)
                    }), t(".room-column", n).each(function() {
                        t(this).css("min-height", i)
                    })
                })
            }
            return {
                init: l,
                initAccordions: e
            }
        }()
    }(Reggae, jQuery);
//# sourceMappingURL=scripts.min.js.map
