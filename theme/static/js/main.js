"use strict";
// gerado por https://babeljs.io/repl/
// apartir do codigo: https://github.com/PyNorte/pyconamazonia2017-site/blob/9de4e129ea692ad7403a4db3ff88417cced0b938/theme/static/js/main.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, e) {
    "$:nomunge";
    var i,
        r = t.jQuery || t.Cowboy || (t.Cowboy = {});r.throttle = i = function i(t, _i, s, n) {
        function a() {
            function r() {
                l = +new Date(), s.apply(h, _);
            }function a() {
                o = e;
            }var h = this,
                u = +new Date() - l,
                _ = arguments;n && !o && r(), o && clearTimeout(o), n === e && u > t ? r() : _i !== !0 && (o = setTimeout(n ? a : r, n === e ? t - u : t));
        }var o,
            l = 0;return "boolean" != typeof _i && (n = s, s = _i, _i = e), r.guid && (a.guid = s.guid = s.guid || r.guid++), a;
    }, r.debounce = function (t, r, s) {
        return s === e ? i(t, r, !1) : i(t, s, r !== !1);
    };
}(undefined), $(document).ready(function () {
    function t() {
        $(".days a").on("click", function (t) {
            t.preventDefault();var e = $(this).attr("href");$("*").removeClass("active"), $(this).addClass("active"), $(e).addClass("active");
        });
    }t();
}), function (t, e) {
    "function" == typeof define && define.amd ? define(["buoy"], e(t)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = e(t, require("buoy")) : t.smoothScroll = e(t, t.buoy);
}("undefined" != typeof global ? global : undefined.window || undefined.global, function (t) {
    "use strict";
    var e,
        i,
        r,
        s,
        n = {},
        a = !!t.document.querySelector && !!t.addEventListener,
        o = { speed: 500, easing: "easeInOutCubic", offset: 0, updateURL: !0, callback: function callback() {} },
        l = function l() {
        var t = {},
            e = !1,
            i = 0,
            r = arguments.length;"[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (e = arguments[0], i++);for (var s = function s(i) {
            for (var r in i) {
                Object.prototype.hasOwnProperty.call(i, r) && (e && "[object Object]" === Object.prototype.toString.call(i[r]) ? t[r] = l(!0, t[r], i[r]) : t[r] = i[r]);
            }
        }; i < r; i++) {
            var n = arguments[i];s(n);
        }return t;
    },
        h = function h(t) {
        return Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight);
    },
        u = function u(t, e) {
        var i,
            r,
            s = e.charAt(0),
            n = "classList" in document.documentElement;for ("[" === s && (e = e.substr(1, e.length - 2), i = e.split("="), i.length > 1 && (r = !0, i[1] = i[1].replace(/"/g, "").replace(/'/g, ""))); t && t !== document; t = t.parentNode) {
            if ("." === s) if (n) {
                if (t.classList.contains(e.substr(1))) return t;
            } else if (new RegExp("(^|\\s)" + e.substr(1) + "(\\s|$)").test(t.className)) return t;if ("#" === s && t.id === e.substr(1)) return t;if ("[" === s && t.hasAttribute(i[0])) {
                if (!r) return t;if (t.getAttribute(i[0]) === i[1]) return t;
            }if (t.tagName.toLowerCase() === e) return t;
        }return null;
    },
        _ = function _(t) {
        for (var e, i = String(t), r = i.length, s = -1, n = "", a = i.charCodeAt(0); ++s < r;) {
            if (e = i.charCodeAt(s), 0 === e) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");n += e >= 1 && e <= 31 || 127 == e || 0 === s && e >= 48 && e <= 57 || 1 === s && e >= 48 && e <= 57 && 45 === a ? "\\" + e.toString(16) + " " : e >= 128 || 45 === e || 95 === e || e >= 48 && e <= 57 || e >= 65 && e <= 90 || e >= 97 && e <= 122 ? i.charAt(s) : "\\" + i.charAt(s);
        }return n;
    },
        c = function c(t, e) {
        var i;return "easeInQuad" === t && (i = e * e), "easeOutQuad" === t && (i = e * (2 - e)), "easeInOutQuad" === t && (i = e < .5 ? 2 * e * e : -1 + (4 - 2 * e) * e), "easeInCubic" === t && (i = e * e * e), "easeOutCubic" === t && (i = --e * e * e + 1), "easeInOutCubic" === t && (i = e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1), "easeInQuart" === t && (i = e * e * e * e), "easeOutQuart" === t && (i = 1 - --e * e * e * e), "easeInOutQuart" === t && (i = e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e), "easeInQuint" === t && (i = e * e * e * e * e), "easeOutQuint" === t && (i = 1 + --e * e * e * e * e), "easeInOutQuint" === t && (i = e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e), i || e;
    },
        f = function f(t, e, i) {
        var r = 0;if (t.offsetParent) do {
            r += t.offsetTop, t = t.offsetParent;
        } while (t);return r = r - e - i, r >= 0 ? r : 0;
    },
        p = function p() {
        return Math.max(t.document.body.scrollHeight, t.document.documentElement.scrollHeight, t.document.body.offsetHeight, t.document.documentElement.offsetHeight, t.document.body.clientHeight, t.document.documentElement.clientHeight);
    },
        d = function d(t) {
        return t && "object" == (typeof JSON === "undefined" ? "undefined" : _typeof(JSON)) && "function" == typeof JSON.parse ? JSON.parse(t) : {};
    },
        m = function m(e, i) {
        t.history.pushState && (i || "true" === i) && t.history.pushState(null, null, [t.location.protocol, "//", t.location.host, t.location.pathname, t.location.search, e].join(""));
    },
        g = function g(t) {
        return null === t ? 0 : h(t) + t.offsetTop;
    };n.animateScroll = function (e, i, n) {
        var a = d(e ? e.getAttribute("data-options") : null),
            h = l(h || o, n || {}, a);i = "#" + _(i.substr(1));var u = "#" === i ? t.document.documentElement : t.document.querySelector(i),
            v = t.pageYOffset;r || (r = t.document.querySelector("[data-scroll-header]")), s || (s = g(r));var y,
            T,
            x,
            b = f(u, s, parseInt(h.offset, 10)),
            w = b - v,
            P = p(),
            O = 0;m(i, h.updateURL);var S = function S(r, s, n) {
            var a = t.pageYOffset;(r == s || a == s || t.innerHeight + a >= P) && (clearInterval(n), u.focus(), h.callback(e, i));
        },
            k = function k() {
            O += 16, T = O / parseInt(h.speed, 10), T = T > 1 ? 1 : T, x = v + w * c(h.easing, T), t.scrollTo(0, Math.floor(x)), S(x, b, y);
        },
            R = function R() {
            y = setInterval(k, 16);
        };0 === t.pageYOffset && t.scrollTo(0, 0), R();
    };var v = function v(t) {
        var i = u(t.target, "[data-scroll]");i && "a" === i.tagName.toLowerCase() && (t.preventDefault(), n.animateScroll(i, i.hash, e));
    },
        y = function y(t) {
        i || (i = setTimeout(function () {
            i = null, s = g(r);
        }, 66));
    };return n.destroy = function () {
        e && (t.document.removeEventListener("click", v, !1), t.removeEventListener("resize", y, !1), e = null, i = null, r = null, s = null);
    }, n.init = function (i) {
        a && (n.destroy(), e = l(o, i || {}), r = t.document.querySelector("[data-scroll-header]"), s = g(r), t.document.addEventListener("click", v, !1), r && t.addEventListener("resize", y, !1));
    }, n;
}), smoothScroll.init({ speed: 1500, easing: "easeInOutCubic", offset: 60, updateURL: !0, callback: function callback(t, e) {} }), $(window).scroll($.debounce(200, function () {
    $(this).scrollTop() > 300 ? TweenMax.to($(".menu-scroll"), .5, { top: 0, ease: Cubic.easeInOut }) : TweenMax.to($(".menu-scroll"), .2, { top: -70, ease: Cubic.easeInOut });
}));var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : undefined || window;(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
        var r = function r(t) {
            var e,
                i = [],
                r = t.length;for (e = 0; e !== r; i.push(t[e++])) {}return i;
        },
            s = function s(t, e, r) {
            i.call(this, t, e, r), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = s.prototype.render;
        },
            n = 1e-10,
            a = i._internals,
            o = a.isSelector,
            l = a.isArray,
            h = s.prototype = i.to({}, .1, {}),
            u = [];s.version = "1.17.0", h.constructor = s, h.kill()._gc = !1, s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf, s.getTweensOf = i.getTweensOf, s.lagSmoothing = i.lagSmoothing, s.ticker = i.ticker, s.render = i.render, h.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this);
        }, h.updateTo = function (t, e) {
            var r,
                s = this.ratio,
                n = this.vars.immediateRender || t.immediateRender;e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));for (r in t) {
                this.vars[r] = t[r];
            }if (this._initted || n) if (e) this._initted = !1, n && this.render(0, !0, !0);else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                var a = this._time;this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1);
            } else if (this._time > 0 || n) {
                this._initted = !1, this._init();for (var o, l = 1 / (1 - s), h = this._firstPT; h;) {
                    o = h.s + h.c, h.c *= l, h.s = o - h.c, h = h._next;
                }
            }return this;
        }, h.render = function (t, e, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();var r,
                s,
                o,
                l,
                h,
                u,
                _,
                c,
                f = this._dirty ? this.totalDuration() : this._totalDuration,
                p = this._time,
                d = this._totalTime,
                m = this._cycle,
                g = this._duration,
                v = this._rawPrevTime;if (t >= f ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > v || v === n) && v !== t && (i = !0, v > n && (s = "onReverseComplete")), this._rawPrevTime = c = !e || t || v === t ? t : n)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== d || 0 === g && v > 0) && (s = "onReverseComplete", r = this._reversed), 0 > t && (this._active = !1, 0 === g && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0), this._rawPrevTime = c = !e || t || v === t ? t : n)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = g + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = g - this._time), this._time > g ? this._time = g : 0 > this._time && (this._time = 0)), this._easeType ? (h = this._time / g, u = this._easeType, _ = this._easePower, (1 === u || 3 === u && h >= .5) && (h = 1 - h), 3 === u && (h *= 2), 1 === _ ? h *= h : 2 === _ ? h *= h * h : 3 === _ ? h *= h * h * h : 4 === _ && (h *= h * h * h * h), this.ratio = 1 === u ? 1 - h : 2 === u ? h : .5 > this._time / g ? h / 2 : 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / g)), p === this._time && !i && m === this._cycle) return void (d !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));if (!this._initted) {
                if (this._init(), !this._initted || this._gc) return;if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = p, this._totalTime = d, this._rawPrevTime = v, this._cycle = m, a.lazyTweens.push(this), void (this._lazy = [t, e]);this._time && !r ? this.ratio = this._ease.getRatio(this._time / g) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
            }for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== p && t >= 0 && (this._active = !0), 0 === d && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (e || this._callback("onStart"))), o = this._firstPT; o;) {
                o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
            }this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== d || r) && this._callback("onUpdate")), this._cycle !== m && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), s && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === g && this._rawPrevTime === n && c !== n && (this._rawPrevTime = 0));
        }, s.to = function (t, e, i) {
            return new s(t, e, i);
        }, s.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new s(t, e, i);
        }, s.fromTo = function (t, e, i, r) {
            return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new s(t, e, r);
        }, s.staggerTo = s.allTo = function (t, e, n, a, h, _, c) {
            a = a || 0;var f,
                p,
                d,
                m,
                g = n.delay || 0,
                v = [],
                y = function y() {
                n.onComplete && n.onComplete.apply(n.onCompleteScope || this, arguments), h.apply(c || n.callbackScope || this, _ || u);
            };for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = r(t))), t = t || [], 0 > a && (t = r(t), t.reverse(), a *= -1), f = t.length - 1, d = 0; f >= d; d++) {
                p = {};for (m in n) {
                    p[m] = n[m];
                }p.delay = g, d === f && h && (p.onComplete = y), v[d] = new s(t[d], e, p), g += a;
            }return v;
        }, s.staggerFrom = s.allFrom = function (t, e, i, r, n, a, o) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, s.staggerTo(t, e, i, r, n, a, o);
        }, s.staggerFromTo = s.allFromTo = function (t, e, i, r, n, a, o, l) {
            return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, s.staggerTo(t, e, r, n, a, o, l);
        }, s.delayedCall = function (t, e, i, r, n) {
            return new s(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: r, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, useFrames: n, overwrite: 0 });
        }, s.set = function (t, e) {
            return new s(t, 0, e);
        }, s.isTweening = function (t) {
            return i.getTweensOf(t, !0).length > 0;
        };var _ = function _(t, e) {
            for (var r = [], s = 0, n = t._first; n;) {
                n instanceof i ? r[s++] = n : (e && (r[s++] = n), r = r.concat(_(n, e)), s = r.length), n = n._next;
            }return r;
        },
            c = s.getAllTweens = function (e) {
            return _(t._rootTimeline, e).concat(_(t._rootFramesTimeline, e));
        };s.killAll = function (t, i, r, s) {
            null == i && (i = !0), null == r && (r = !0);var n,
                a,
                o,
                l = c(0 != s),
                h = l.length,
                u = i && r && s;for (o = 0; h > o; o++) {
                a = l[o], (u || a instanceof e || (n = a.target === a.vars.onComplete) && r || i && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1));
            }
        }, s.killChildTweensOf = function (t, e) {
            if (null != t) {
                var n,
                    h,
                    u,
                    _,
                    c,
                    f = a.tweenLookup;if ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = r(t)), l(t)) for (_ = t.length; --_ > -1;) {
                    s.killChildTweensOf(t[_], e);
                } else {
                    n = [];for (u in f) {
                        for (h = f[u].target.parentNode; h;) {
                            h === t && (n = n.concat(f[u].tweens)), h = h.parentNode;
                        }
                    }for (c = n.length, _ = 0; c > _; _++) {
                        e && n[_].totalTime(n[_].totalDuration()), n[_]._enabled(!1, !1);
                    }
                }
            }
        };var f = function f(t, i, r, s) {
            i = i !== !1, r = r !== !1, s = s !== !1;for (var n, a, o = c(s), l = i && r && s, h = o.length; --h > -1;) {
                a = o[h], (l || a instanceof e || (n = a.target === a.vars.onComplete) && r || i && !n) && a.paused(t);
            }
        };return s.pauseAll = function (t, e, i) {
            f(!0, t, e, i);
        }, s.resumeAll = function (t, e, i) {
            f(!1, t, e, i);
        }, s.globalTimeScale = function (e) {
            var r = t._rootTimeline,
                s = i.ticker.time;return arguments.length ? (e = e || n, r._startTime = s - (s - r._startTime) * r._timeScale / e, r = t._rootFramesTimeline, s = i.ticker.frame, r._startTime = s - (s - r._startTime) * r._timeScale / e, r._timeScale = t._rootTimeline._timeScale = e, e) : r._timeScale;
        }, h.progress = function (t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration();
        }, h.totalProgress = function (t) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration();
        }, h.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time;
        }, h.duration = function (e) {
            return arguments.length ? t.prototype.duration.call(this, e) : this._duration;
        }, h.totalDuration = function (t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration);
        }, h.repeat = function (t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat;
        }, h.repeatDelay = function (t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay;
        }, h.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo;
        }, s;
    }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
        var r = function r(t) {
            e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;var i,
                r,
                s = this.vars;for (r in s) {
                i = s[r], l(i) && -1 !== i.join("").indexOf("{self}") && (s[r] = this._swapSelfInParams(i));
            }l(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger);
        },
            s = 1e-10,
            n = i._internals,
            a = r._internals = {},
            o = n.isSelector,
            l = n.isArray,
            h = n.lazyTweens,
            u = n.lazyRender,
            _ = [],
            c = _gsScope._gsDefine.globals,
            f = function f(t) {
            var e,
                i = {};for (e in t) {
                i[e] = t[e];
            }return i;
        },
            p = a.pauseCallback = function (t, e, i, r) {
            var n,
                a = t._timeline,
                o = a._totalTime,
                l = t._startTime,
                h = 0 > t._rawPrevTime || 0 === t._rawPrevTime && a._reversed,
                u = h ? 0 : s,
                c = h ? s : 0;if (e || !this._forcingPlayhead) {
                for (a.pause(l), n = t._prev; n && n._startTime === l;) {
                    n._rawPrevTime = c, n = n._prev;
                }for (n = t._next; n && n._startTime === l;) {
                    n._rawPrevTime = u, n = n._next;
                }e && e.apply(r || a.vars.callbackScope || a, i || _), (this._forcingPlayhead || !a._paused) && a.seek(o);
            }
        },
            d = function d(t) {
            var e,
                i = [],
                r = t.length;for (e = 0; e !== r; i.push(t[e++])) {}return i;
        },
            m = r.prototype = new e();return r.version = "1.17.0", m.constructor = r, m.kill()._gc = m._forcingPlayhead = !1, m.to = function (t, e, r, s) {
            var n = r.repeat && c.TweenMax || i;return e ? this.add(new n(t, e, r), s) : this.set(t, r, s);
        }, m.from = function (t, e, r, s) {
            return this.add((r.repeat && c.TweenMax || i).from(t, e, r), s);
        }, m.fromTo = function (t, e, r, s, n) {
            var a = s.repeat && c.TweenMax || i;return e ? this.add(a.fromTo(t, e, r, s), n) : this.set(t, s, n);
        }, m.staggerTo = function (t, e, s, n, a, l, h, u) {
            var _,
                c = new r({ onComplete: l, onCompleteParams: h, callbackScope: u, smoothChildTiming: this.smoothChildTiming });for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = d(t)), n = n || 0, 0 > n && (t = d(t), t.reverse(), n *= -1), _ = 0; t.length > _; _++) {
                s.startAt && (s.startAt = f(s.startAt)), c.to(t[_], e, f(s), _ * n);
            }return this.add(c, a);
        }, m.staggerFrom = function (t, e, i, r, s, n, a, o) {
            return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, r, s, n, a, o);
        }, m.staggerFromTo = function (t, e, i, r, s, n, a, o, l) {
            return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, r, s, n, a, o, l);
        }, m.call = function (t, e, r, s) {
            return this.add(i.delayedCall(0, t, e, r), s);
        }, m.set = function (t, e, r) {
            return r = this._parseTimeOrLabel(r, 0, !0), null == e.immediateRender && (e.immediateRender = r === this._time && !this._paused), this.add(new i(t, 0, e), r);
        }, r.exportRoot = function (t, e) {
            t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);var s,
                n,
                a = new r(t),
                o = a._timeline;for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, s = o._first; s;) {
                n = s._next, e && s instanceof i && s.target === s.vars.onComplete || a.add(s, s._startTime - s._delay), s = n;
            }return o.add(a, 0), a;
        }, m.add = function (s, n, a, o) {
            var h, u, _, c, f, p;if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, s)), !(s instanceof t)) {
                if (s instanceof Array || s && s.push && l(s)) {
                    for (a = a || "normal", o = o || 0, h = n, u = s.length, _ = 0; u > _; _++) {
                        l(c = s[_]) && (c = new r({ tweens: c })), this.add(c, h), "string" != typeof c && "function" != typeof c && ("sequence" === a ? h = c._startTime + c.totalDuration() / c._timeScale : "start" === a && (c._startTime -= c.delay())), h += o;
                    }return this._uncache(!0);
                }if ("string" == typeof s) return this.addLabel(s, n);if ("function" != typeof s) throw "Cannot add " + s + " into the timeline; it is not a tween, timeline, function, or string.";s = i.delayedCall(0, s);
            }if (e.prototype.add.call(this, s, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (f = this, p = f.rawTime() > s._startTime; f._timeline;) {
                p && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
            }return this;
        }, m.remove = function (e) {
            if (e instanceof t) return this._remove(e, !1);if (e instanceof Array || e && e.push && l(e)) {
                for (var i = e.length; --i > -1;) {
                    this.remove(e[i]);
                }return this;
            }return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e);
        }, m._remove = function (t, i) {
            e.prototype._remove.call(this, t, i);var r = this._last;return r ? this._time > r._startTime + r._totalDuration / r._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this;
        }, m.append = function (t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
        }, m.insert = m.insertMultiple = function (t, e, i, r) {
            return this.add(t, e || 0, i, r);
        }, m.appendMultiple = function (t, e, i, r) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, r);
        }, m.addLabel = function (t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e), this;
        }, m.addPause = function (t, e, r, s) {
            var n = i.delayedCall(0, p, ["{self}", e, r, s], this);return n.data = "isPause", this.add(n, t);
        }, m.removeLabel = function (t) {
            return delete this._labels[t], this;
        }, m.getLabelTime = function (t) {
            return null != this._labels[t] ? this._labels[t] : -1;
        }, m._parseTimeOrLabel = function (e, i, r, s) {
            var n;if (s instanceof t && s.timeline === this) this.remove(s);else if (s && (s instanceof Array || s.push && l(s))) for (n = s.length; --n > -1;) {
                s[n] instanceof t && s[n].timeline === this && this.remove(s[n]);
            }if ("string" == typeof i) return this._parseTimeOrLabel(i, r && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, r);if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());else {
                if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? r ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, r) : this.duration();
            }return Number(e) + i;
        }, m.seek = function (t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1);
        }, m.stop = function () {
            return this.paused(!0);
        }, m.gotoAndPlay = function (t, e) {
            return this.play(t, e);
        }, m.gotoAndStop = function (t, e) {
            return this.pause(t, e);
        }, m.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);var r,
                n,
                a,
                o,
                l,
                _ = this._dirty ? this.totalDuration() : this._totalDuration,
                c = this._time,
                f = this._startTime,
                p = this._timeScale,
                d = this._paused;if (t >= _) this._totalTime = this._time = _, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === s) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > s && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, t = _ + 1e-4;else if (1e-7 > t) {
                if (this._totalTime = this._time = 0, (0 !== c || 0 === this._duration && this._rawPrevTime !== s && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = n = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;else {
                    if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, 0 === t && n) for (r = this._first; r && 0 === r._startTime;) {
                        r._duration || (n = !1), r = r._next;
                    }t = 0, this._initted || (l = !0);
                }
            } else this._totalTime = this._time = this._rawPrevTime = t;if (this._time !== c && this._first || i || l) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== c && t > 0 && (this._active = !0), 0 === c && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), this._time >= c) for (r = this._first; r && (a = r._next, !this._paused || d);) {
                    (r._active || r._startTime <= this._time && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = a;
                } else for (r = this._last; r && (a = r._prev, !this._paused || d);) {
                    (r._active || c >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = a;
                }this._onUpdate && (e || (h.length && u(), this._callback("onUpdate"))), o && (this._gc || (f === this._startTime || p !== this._timeScale) && (0 === this._time || _ >= this.totalDuration()) && (n && (h.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)));
            }
        }, m._hasPausedChild = function () {
            for (var t = this._first; t;) {
                if (t._paused || t instanceof r && t._hasPausedChild()) return !0;t = t._next;
            }return !1;
        }, m.getChildren = function (t, e, r, s) {
            s = s || -9999999999;for (var n = [], a = this._first, o = 0; a;) {
                s > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (r !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, r)), o = n.length))), a = a._next;
            }return n;
        }, m.getTweensOf = function (t, e) {
            var r,
                s,
                n = this._gc,
                a = [],
                o = 0;for (n && this._enabled(!0, !0), r = i.getTweensOf(t), s = r.length; --s > -1;) {
                (r[s].timeline === this || e && this._contains(r[s])) && (a[o++] = r[s]);
            }return n && this._enabled(!1, !0), a;
        }, m.recent = function () {
            return this._recent;
        }, m._contains = function (t) {
            for (var e = t.timeline; e;) {
                if (e === this) return !0;e = e.timeline;
            }return !1;
        }, m.shiftChildren = function (t, e, i) {
            i = i || 0;for (var r, s = this._first, n = this._labels; s;) {
                s._startTime >= i && (s._startTime += t), s = s._next;
            }if (e) for (r in n) {
                n[r] >= i && (n[r] += t);
            }return this._uncache(!0);
        }, m._kill = function (t, e) {
            if (!t && !e) return this._enabled(!1, !1);for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), r = i.length, s = !1; --r > -1;) {
                i[r]._kill(t, e) && (s = !0);
            }return s;
        }, m.clear = function (t) {
            var e = this.getChildren(!1, !0, !0),
                i = e.length;for (this._time = this._totalTime = 0; --i > -1;) {
                e[i]._enabled(!1, !1);
            }return t !== !1 && (this._labels = {}), this._uncache(!0);
        }, m.invalidate = function () {
            for (var e = this._first; e;) {
                e.invalidate(), e = e._next;
            }return t.prototype.invalidate.call(this);
        }, m._enabled = function (t, i) {
            if (t === this._gc) for (var r = this._first; r;) {
                r._enabled(t, !0), r = r._next;
            }return e.prototype._enabled.call(this, t, i);
        }, m.totalTime = function () {
            this._forcingPlayhead = !0;var e = t.prototype.totalTime.apply(this, arguments);return this._forcingPlayhead = !1, e;
        }, m.duration = function (t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration);
        }, m.totalDuration = function (t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, r = 0, s = this._last, n = 999999999999; s;) {
                        e = s._prev, s._dirty && s.totalDuration(), s._startTime > n && this._sortChildren && !s._paused ? this.add(s, s._startTime - s._delay) : n = s._startTime, 0 > s._startTime && !s._paused && (r -= s._startTime, this._timeline.smoothChildTiming && (this._startTime += s._startTime / this._timeScale), this.shiftChildren(-s._startTime, !1, -9999999999), n = 0), i = s._startTime + s._totalDuration / s._timeScale, i > r && (r = i), s = e;
                    }this._duration = this._totalDuration = r, this._dirty = !1;
                }return this._totalDuration;
            }return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this;
        }, m.paused = function (e) {
            if (!e) for (var i = this._first, r = this._time; i;) {
                i._startTime === r && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
            }return t.prototype.paused.apply(this, arguments);
        }, m.usesFrames = function () {
            for (var e = this._timeline; e._timeline;) {
                e = e._timeline;
            }return e === t._rootFramesTimeline;
        }, m.rawTime = function () {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale;
        }, r;
    }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (t, e, i) {
        var r = function r(e) {
            t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0;
        },
            s = 1e-10,
            n = e._internals,
            a = n.lazyTweens,
            o = n.lazyRender,
            l = new i(null, null, 1, 0),
            h = r.prototype = new t();return h.constructor = r, h.kill()._gc = !1, r.version = "1.17.0", h.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this);
        }, h.addCallback = function (t, i, r, s) {
            return this.add(e.delayedCall(0, t, r, s), i);
        }, h.removeCallback = function (t, e) {
            if (t) if (null == e) this._kill(null, t);else for (var i = this.getTweensOf(t, !1), r = i.length, s = this._parseTimeOrLabel(e); --r > -1;) {
                i[r]._startTime === s && i[r]._enabled(!1, !1);
            }return this;
        }, h.removePause = function (e) {
            return this.removeCallback(t._internals.pauseCallback, e);
        }, h.tweenTo = function (t, i) {
            i = i || {};var r,
                s,
                n,
                a = { ease: l, useFrames: this.usesFrames(), immediateRender: !1 };for (s in i) {
                a[s] = i[s];
            }return a.time = this._parseTimeOrLabel(t), r = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, n = new e(this, r, a), a.onStart = function () {
                n.target.paused(!0), n.vars.time !== n.target.time() && r === n.duration() && n.duration(Math.abs(n.vars.time - n.target.time()) / n.target._timeScale), i.onStart && n._callback("onStart");
            }, n;
        }, h.tweenFromTo = function (t, e, i) {
            i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = { onComplete: this.seek, onCompleteParams: [t], callbackScope: this }, i.immediateRender = i.immediateRender !== !1;var r = this.tweenTo(e, i);return r.duration(Math.abs(r.vars.time - t) / this._timeScale || .001);
        }, h.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);var r,
                n,
                l,
                h,
                u,
                _,
                c = this._dirty ? this.totalDuration() : this._totalDuration,
                f = this._duration,
                p = this._time,
                d = this._totalTime,
                m = this._startTime,
                g = this._timeScale,
                v = this._rawPrevTime,
                y = this._paused,
                T = this._cycle;if (t >= c) this._locked || (this._totalTime = c, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (n = !0, h = "onComplete", u = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > v || v === s) && v !== t && this._first && (u = !0, v > s && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = f, t = f + 1e-4);else if (1e-7 > t) {
                if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== p || 0 === f && v !== s && (v > 0 || 0 > t && v >= 0) && !this._locked) && (h = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (u = n = !0, h = "onReverseComplete") : v >= 0 && this._first && (u = !0), this._rawPrevTime = t;else {
                    if (this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : s, 0 === t && n) for (r = this._first; r && 0 === r._startTime;) {
                        r._duration || (n = !1), r = r._next;
                    }t = 0, this._initted || (u = !0);
                }
            } else 0 === f && 0 > v && (u = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (_ = f + this._repeatDelay, this._cycle = this._totalTime / _ >> 0, 0 !== this._cycle && this._cycle === this._totalTime / _ && this._cycle--, this._time = this._totalTime - this._cycle * _, this._yoyo && 0 !== (1 & this._cycle) && (this._time = f - this._time), this._time > f ? (this._time = f, t = f + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time));if (this._cycle !== T && !this._locked) {
                var x = this._yoyo && 0 !== (1 & T),
                    b = x === (this._yoyo && 0 !== (1 & this._cycle)),
                    w = this._totalTime,
                    P = this._cycle,
                    O = this._rawPrevTime,
                    S = this._time;if (this._totalTime = T * f, T > this._cycle ? x = !x : this._totalTime += f, this._time = p, this._rawPrevTime = 0 === f ? v - 1e-4 : v, this._cycle = T, this._locked = !0, p = x ? 0 : f, this.render(p, e, 0 === f), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), b && (p = x ? f + 1e-4 : -1e-4, this.render(p, !0, !1)), this._locked = !1, this._paused && !y) return;this._time = S, this._totalTime = w, this._cycle = P, this._rawPrevTime = O;
            }if (!(this._time !== p && this._first || i || u)) return void (d !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._totalTime && (e || this._callback("onStart")), this._time >= p) for (r = this._first; r && (l = r._next, !this._paused || y);) {
                (r._active || r._startTime <= this._time && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = l;
            } else for (r = this._last; r && (l = r._prev, !this._paused || y);) {
                (r._active || p >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = l;
            }this._onUpdate && (e || (a.length && o(), this._callback("onUpdate"))), h && (this._locked || this._gc || (m === this._startTime || g !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (n && (a.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h)));
        }, h.getActive = function (t, e, i) {
            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);var r,
                s,
                n = [],
                a = this.getChildren(t, e, i),
                o = 0,
                l = a.length;for (r = 0; l > r; r++) {
                s = a[r], s.isActive() && (n[o++] = s);
            }return n;
        }, h.getLabelAfter = function (t) {
            t || 0 !== t && (t = this._time);var e,
                i = this.getLabelsArray(),
                r = i.length;for (e = 0; r > e; e++) {
                if (i[e].time > t) return i[e].name;
            }return null;
        }, h.getLabelBefore = function (t) {
            null == t && (t = this._time);for (var e = this.getLabelsArray(), i = e.length; --i > -1;) {
                if (t > e[i].time) return e[i].name;
            }return null;
        }, h.getLabelsArray = function () {
            var t,
                e = [],
                i = 0;for (t in this._labels) {
                e[i++] = { time: this._labels[t], name: t };
            }return e.sort(function (t, e) {
                return t.time - e.time;
            }), e;
        }, h.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration();
        }, h.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration();
        }, h.totalDuration = function (e) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration);
        }, h.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time;
        }, h.repeat = function (t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat;
        }, h.repeatDelay = function (t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay;
        }, h.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo;
        }, h.currentLabel = function (t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8);
        }, r;
    }, !0), function () {
        var t = 180 / Math.PI,
            e = [],
            i = [],
            r = [],
            s = {},
            n = _gsScope._gsDefine.globals,
            a = function a(t, e, i, r) {
            this.a = t, this.b = e, this.c = i, this.d = r, this.da = r - t, this.ca = i - t, this.ba = e - t;
        },
            o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
            l = function l(t, e, i, r) {
            var s = { a: t },
                n = {},
                a = {},
                o = { c: r },
                l = (t + e) / 2,
                h = (e + i) / 2,
                u = (i + r) / 2,
                _ = (l + h) / 2,
                c = (h + u) / 2,
                f = (c - _) / 8;return s.b = l + (t - l) / 4, n.b = _ + f, s.c = n.a = (s.b + n.b) / 2, n.c = a.a = (_ + c) / 2, a.b = c - f, o.b = u + (r - u) / 4, a.c = o.a = (a.b + o.b) / 2, [s, n, a, o];
        },
            h = function h(t, s, n, a, o) {
            var h,
                u,
                _,
                c,
                f,
                p,
                d,
                m,
                g,
                v,
                y,
                T,
                x,
                b = t.length - 1,
                w = 0,
                P = t[0].a;for (h = 0; b > h; h++) {
                f = t[w], u = f.a, _ = f.d, c = t[w + 1].d, o ? (y = e[h], T = i[h], x = .25 * (T + y) * s / (a ? .5 : r[h] || .5), p = _ - (_ - u) * (a ? .5 * s : 0 !== y ? x / y : 0), d = _ + (c - _) * (a ? .5 * s : 0 !== T ? x / T : 0), m = _ - (p + ((d - p) * (3 * y / (y + T) + .5) / 4 || 0))) : (p = _ - .5 * (_ - u) * s, d = _ + .5 * (c - _) * s, m = _ - (p + d) / 2), p += m, d += m, f.c = g = p, f.b = 0 !== h ? P : P = f.a + .6 * (f.c - f.a), f.da = _ - u, f.ca = g - u, f.ba = P - u, n ? (v = l(u, P, g, _), t.splice(w, 1, v[0], v[1], v[2], v[3]), w += 4) : w++, P = d;
            }f = t[w], f.b = P, f.c = P + .4 * (f.d - P), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = P - f.a, n && (v = l(f.a, P, f.c, f.d), t.splice(w, 1, v[0], v[1], v[2], v[3]));
        },
            u = function u(t, r, s, n) {
            var o,
                l,
                h,
                u,
                _,
                c,
                f = [];if (n) for (t = [n].concat(t), l = t.length; --l > -1;) {
                "string" == typeof (c = t[l][r]) && "=" === c.charAt(1) && (t[l][r] = n[r] + Number(c.charAt(0) + c.substr(2)));
            }if (o = t.length - 2, 0 > o) return f[0] = new a(t[0][r], 0, 0, t[-1 > o ? 0 : 1][r]), f;for (l = 0; o > l; l++) {
                h = t[l][r], u = t[l + 1][r], f[l] = new a(h, 0, 0, u), s && (_ = t[l + 2][r], e[l] = (e[l] || 0) + (u - h) * (u - h), i[l] = (i[l] || 0) + (_ - u) * (_ - u));
            }return f[l] = new a(t[l][r], 0, 0, t[l + 1][r]), f;
        },
            _ = function _(t, n, a, l, _2, c) {
            var f,
                p,
                d,
                m,
                g,
                v,
                y,
                T,
                x = {},
                b = [],
                w = c || t[0];_2 = "string" == typeof _2 ? "," + _2 + "," : o, null == n && (n = 1);for (p in t[0]) {
                b.push(p);
            }if (t.length > 1) {
                for (T = t[t.length - 1], y = !0, f = b.length; --f > -1;) {
                    if (p = b[f], Math.abs(w[p] - T[p]) > .05) {
                        y = !1;break;
                    }
                }y && (t = t.concat(), c && t.unshift(c), t.push(t[1]), c = t[t.length - 3]);
            }for (e.length = i.length = r.length = 0, f = b.length; --f > -1;) {
                p = b[f], s[p] = -1 !== _2.indexOf("," + p + ","), x[p] = u(t, p, s[p], c);
            }for (f = e.length; --f > -1;) {
                e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]);
            }if (!l) {
                for (f = b.length; --f > -1;) {
                    if (s[p]) for (d = x[b[f]], v = d.length - 1, m = 0; v > m; m++) {
                        g = d[m + 1].da / i[m] + d[m].da / e[m], r[m] = (r[m] || 0) + g * g;
                    }
                }for (f = r.length; --f > -1;) {
                    r[f] = Math.sqrt(r[f]);
                }
            }for (f = b.length, m = a ? 4 : 1; --f > -1;) {
                p = b[f], d = x[p], h(d, n, a, l, s[p]), y && (d.splice(0, m), d.splice(d.length - m, m));
            }return x;
        },
            c = function c(t, e, i) {
            e = e || "soft";var r,
                s,
                n,
                o,
                l,
                h,
                u,
                _,
                c,
                f,
                p,
                d = {},
                m = "cubic" === e ? 3 : 2,
                g = "soft" === e,
                v = [];if (g && i && (t = [i].concat(t)), null == t || m + 1 > t.length) throw "invalid Bezier data";for (c in t[0]) {
                v.push(c);
            }for (h = v.length; --h > -1;) {
                for (c = v[h], d[c] = l = [], f = 0, _ = t.length, u = 0; _ > u; u++) {
                    r = null == i ? t[u][c] : "string" == typeof (p = t[u][c]) && "=" === p.charAt(1) ? i[c] + Number(p.charAt(0) + p.substr(2)) : Number(p), g && u > 1 && _ - 1 > u && (l[f++] = (r + l[f - 2]) / 2), l[f++] = r;
                }for (_ = f - m + 1, f = 0, u = 0; _ > u; u += m) {
                    r = l[u], s = l[u + 1], n = l[u + 2], o = 2 === m ? 0 : l[u + 3], l[f++] = p = 3 === m ? new a(r, s, n, o) : new a(r, (2 * s + r) / 3, (2 * s + n) / 3, n);
                }l.length = f;
            }return d;
        },
            f = function f(t, e, i) {
            for (var r, s, n, a, o, l, h, u, _, c, f, p = 1 / i, d = t.length; --d > -1;) {
                for (c = t[d], n = c.a, a = c.d - n, o = c.c - n, l = c.b - n, r = s = 0, u = 1; i >= u; u++) {
                    h = p * u, _ = 1 - h, r = s - (s = (h * h * a + 3 * _ * (h * o + _ * l)) * h), f = d * i + u - 1, e[f] = (e[f] || 0) + r * r;
                }
            }
        },
            p = function p(t, e) {
            e = e >> 0 || 6;var i,
                r,
                s,
                n,
                a = [],
                o = [],
                l = 0,
                h = 0,
                u = e - 1,
                _ = [],
                c = [];for (i in t) {
                f(t[i], a, e);
            }for (s = a.length, r = 0; s > r; r++) {
                l += Math.sqrt(a[r]), n = r % e, c[n] = l, n === u && (h += l, n = r / e >> 0, _[n] = c, o[n] = h, l = 0, c = []);
            }return { length: h, lengths: o, segments: _ };
        },
            d = _gsScope._gsDefine.plugin({ propName: "bezier", priority: -1, version: "1.3.4", API: 2, global: !0, init: function init(t, e, i) {
                this._target = t, e instanceof Array && (e = { values: e }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);var r,
                    s,
                    n,
                    a,
                    o,
                    l = e.values || [],
                    h = {},
                    u = l[0],
                    f = e.autoRotate || i.vars.orientToBezier;this._autoRotate = f ? f instanceof Array ? f : [["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]] : null;for (r in u) {
                    this._props.push(r);
                }for (n = this._props.length; --n > -1;) {
                    r = this._props[n], this._overwriteProps.push(r), s = this._func[r] = "function" == typeof t[r], h[r] = s ? t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(t[r]), o || h[r] !== l[0][r] && (o = h);
                }if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? _(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : c(l, e.type, h), this._segCount = this._beziers[r].length, this._timeRes) {
                    var d = p(this._beziers, this._timeRes);this._length = d.length, this._lengths = d.lengths, this._segments = d.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length;
                }if (f = this._autoRotate) for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), n = f.length; --n > -1;) {
                    for (a = 0; 3 > a; a++) {
                        r = f[n][a], this._func[r] = "function" == typeof t[r] && t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)];
                    }r = f[n][2], this._initialRotations[n] = this._func[r] ? this._func[r].call(this._target) : this._target[r];
                }return this._startRatio = i.vars.runBackwards ? 1 : 0, !0;
            }, set: function set(e) {
                var i,
                    r,
                    s,
                    n,
                    a,
                    o,
                    l,
                    h,
                    u,
                    _,
                    c = this._segCount,
                    f = this._func,
                    p = this._target,
                    d = e !== this._startRatio;if (this._timeRes) {
                    if (u = this._lengths, _ = this._curSeg, e *= this._length, s = this._li, e > this._l2 && c - 1 > s) {
                        for (h = c - 1; h > s && e >= (this._l2 = u[++s]);) {}this._l1 = u[s - 1], this._li = s, this._curSeg = _ = this._segments[s], this._s2 = _[this._s1 = this._si = 0];
                    } else if (this._l1 > e && s > 0) {
                        for (; s > 0 && (this._l1 = u[--s]) >= e;) {}0 === s && this._l1 > e ? this._l1 = 0 : s++, this._l2 = u[s], this._li = s, this._curSeg = _ = this._segments[s], this._s1 = _[(this._si = _.length - 1) - 1] || 0, this._s2 = _[this._si];
                    }if (i = s, e -= this._l1, s = this._si, e > this._s2 && _.length - 1 > s) {
                        for (h = _.length - 1; h > s && e >= (this._s2 = _[++s]);) {}this._s1 = _[s - 1], this._si = s;
                    } else if (this._s1 > e && s > 0) {
                        for (; s > 0 && (this._s1 = _[--s]) >= e;) {}0 === s && this._s1 > e ? this._s1 = 0 : s++, this._s2 = _[s], this._si = s;
                    }o = (s + (e - this._s1) / (this._s2 - this._s1)) * this._prec;
                } else i = 0 > e ? 0 : e >= 1 ? c - 1 : c * e >> 0, o = (e - i * (1 / c)) * c;for (r = 1 - o, s = this._props.length; --s > -1;) {
                    n = this._props[s], a = this._beziers[n][i], l = (o * o * a.da + 3 * r * (o * a.ca + r * a.ba)) * o + a.a, this._round[n] && (l = Math.round(l)), f[n] ? p[n](l) : p[n] = l;
                }if (this._autoRotate) {
                    var m,
                        g,
                        v,
                        y,
                        T,
                        x,
                        b,
                        w = this._autoRotate;for (s = w.length; --s > -1;) {
                        n = w[s][2], x = w[s][3] || 0, b = w[s][4] === !0 ? 1 : t, a = this._beziers[w[s][0]], m = this._beziers[w[s][1]], a && m && (a = a[i], m = m[i], g = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, g += (y - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = m.a + (m.b - m.a) * o, T = m.b + (m.c - m.b) * o, v += (T - v) * o, T += (m.c + (m.d - m.c) * o - T) * o, l = d ? Math.atan2(T - v, y - g) * b + x : this._initialRotations[s], f[n] ? p[n](l) : p[n] = l);
                    }
                }
            } }),
            m = d.prototype;d.bezierThrough = _, d.cubicToQuadratic = l, d._autoCSS = !0, d.quadraticToCubic = function (t, e, i) {
            return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i);
        }, d._cssRegister = function () {
            var t = n.CSSPlugin;if (t) {
                var e = t._internals,
                    i = e._parseToProxy,
                    r = e._setPluginRatio,
                    s = e.CSSPropTween;e._registerComplexSpecialProp("bezier", { parser: function parser(t, e, n, a, o, l) {
                        e instanceof Array && (e = { values: e }), l = new d();var h,
                            u,
                            _,
                            c = e.values,
                            f = c.length - 1,
                            p = [],
                            m = {};if (0 > f) return o;for (h = 0; f >= h; h++) {
                            _ = i(t, c[h], a, o, l, f !== h), p[h] = _.end;
                        }for (u in e) {
                            m[u] = e[u];
                        }return m.values = p, o = new s(t, "bezier", 0, 0, _.pt, 2), o.data = _, o.plugin = l, o.setRatio = r, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (h = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != _.end.left ? [["left", "top", "rotation", h, !1]] : null != _.end.x && [["x", "y", "rotation", h, !1]]), m.autoRotate && (a._transform || a._enableTransforms(!1), _.autoRotate = a._target._gsTransform), l._onInitTween(_.proxy, m, a._tween), o;
                    } });
            }
        }, m._roundProps = function (t, e) {
            for (var i = this._overwriteProps, r = i.length; --r > -1;) {
                (t[i[r]] || t.bezier || t.bezierThrough) && (this._round[i[r]] = e);
            }
        }, m._kill = function (t) {
            var e,
                i,
                r = this._props;for (e in this._beziers) {
                if (e in t) for (delete this._beziers[e], delete this._func[e], i = r.length; --i > -1;) {
                    r[i] === e && r.splice(i, 1);
                }
            }return this._super._kill.call(this, t);
        };
    }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
        var i,
            r,
            s,
            n,
            a = function a() {
            t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio;
        },
            o = _gsScope._gsDefine.globals,
            l = {},
            h = a.prototype = new t("css");h.constructor = a, a.version = "1.17.0", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, h = "px", a.suffixMap = { top: h, right: h, bottom: h, left: h, width: h, height: h, fontSize: h, padding: h, margin: h, perspective: h, lineHeight: "" };var u,
            _,
            c,
            f,
            p,
            d,
            m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
            g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
            T = /(?:\d|\-|\+|=|#|\.)*/g,
            x = /opacity *= *([^)]*)/i,
            b = /opacity:([^;]*)/i,
            w = /alpha\(opacity *=.+?\)/i,
            P = /^(rgb|hsl)/,
            O = /([A-Z])/g,
            S = /-([a-z])/gi,
            k = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            R = function R(t, e) {
            return e.toUpperCase();
        },
            C = /(?:Left|Right|Width)/i,
            A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            M = /,(?=[^\)]*(?:\(|$))/gi,
            z = Math.PI / 180,
            I = 180 / Math.PI,
            F = {},
            N = document,
            L = function L(t) {
            return N.createElementNS ? N.createElementNS("http://www.w3.org/1999/xhtml", t) : N.createElement(t);
        },
            E = L("div"),
            X = L("img"),
            Y = a._internals = { _specialProps: l },
            B = navigator.userAgent,
            j = function () {
            var t = B.indexOf("Android"),
                e = L("a");return c = -1 !== B.indexOf("Safari") && -1 === B.indexOf("Chrome") && (-1 === t || Number(B.substr(t + 8, 1)) > 3), p = c && 6 > Number(B.substr(B.indexOf("Version/") + 8, 1)), f = -1 !== B.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(B) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(B)) && (d = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity));
        }(),
            U = function U(t) {
            return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
        },
            q = function q(t) {
            window.console && console.log(t);
        },
            V = "",
            $ = "",
            Q = function Q(t, e) {
            e = e || E;var i,
                r,
                s = e.style;if (void 0 !== s[t]) return t;for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === s[i[r] + t];) {}return r >= 0 ? ($ = 3 === r ? "ms" : i[r], V = "-" + $.toLowerCase() + "-", $ + t) : null;
        },
            W = N.defaultView ? N.defaultView.getComputedStyle : function () {},
            Z = a.getStyle = function (t, e, i, r, s) {
            var n;return j || "opacity" !== e ? (!r && t.style[e] ? n = t.style[e] : (i = i || W(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(O, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == s || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : s) : U(t);
        },
            H = Y.convertToPixels = function (t, i, r, s, n) {
            if ("px" === s || !s) return r;if ("auto" === s || !r) return 0;var o,
                l,
                h,
                u = C.test(i),
                _ = t,
                c = E.style,
                f = 0 > r;if (f && (r = -r), "%" === s && -1 !== i.indexOf("border")) o = r / 100 * (u ? t.clientWidth : t.clientHeight);else {
                if (c.cssText = "border:0 solid red;position:" + Z(t, "position") + ";line-height:0;", "%" !== s && _.appendChild) c[u ? "borderLeftWidth" : "borderTopWidth"] = r + s;else {
                    if (_ = t.parentNode || N.body, l = _._gsCache, h = e.ticker.frame, l && u && l.time === h) return l.width * r / 100;c[u ? "width" : "height"] = r + s;
                }_.appendChild(E), o = parseFloat(E[u ? "offsetWidth" : "offsetHeight"]), _.removeChild(E), u && "%" === s && a.cacheWidths !== !1 && (l = _._gsCache = _._gsCache || {}, l.time = h, l.width = 100 * (o / r)), 0 !== o || n || (o = H(t, i, r, s, !0));
            }return f ? -o : o;
        },
            G = Y.calculateOffset = function (t, e, i) {
            if ("absolute" !== Z(t, "position", i)) return 0;var r = "left" === e ? "Left" : "Top",
                s = Z(t, "margin" + r, i);return t["offset" + r] - (H(t, e, parseFloat(s), s.replace(T, "")) || 0);
        },
            J = function J(t, e) {
            var i,
                r,
                s,
                n = {};if (e = e || W(t, null)) {
                if (i = e.length) for (; --i > -1;) {
                    s = e[i], (-1 === s.indexOf("-transform") || Pt === s) && (n[s.replace(S, R)] = e.getPropertyValue(s));
                } else for (i in e) {
                    (-1 === i.indexOf("Transform") || wt === i) && (n[i] = e[i]);
                }
            } else if (e = t.currentStyle || t.style) for (i in e) {
                "string" == typeof i && void 0 === n[i] && (n[i.replace(S, R)] = e[i]);
            }return j || (n.opacity = U(t)), r = Nt(t, e, !1), n.rotation = r.rotation, n.skewX = r.skewX, n.scaleX = r.scaleX, n.scaleY = r.scaleY, n.x = r.x, n.y = r.y, St && (n.z = r.z, n.rotationX = r.rotationX, n.rotationY = r.rotationY, n.scaleZ = r.scaleZ), n.filters && delete n.filters, n;
        },
            K = function K(t, e, i, r, s) {
            var n,
                a,
                o,
                l = {},
                h = t.style;for (a in i) {
                "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || s && s[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(y, "") ? n : 0 : G(t, a), void 0 !== h[a] && (o = new ft(h, a, h[a], o)));
            }if (r) for (a in r) {
                "className" !== a && (l[a] = r[a]);
            }return { difs: l, firstMPT: o };
        },
            tt = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
            et = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            it = function it(t, e, i) {
            var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                s = tt[e],
                n = s.length;for (i = i || W(t, null); --n > -1;) {
                r -= parseFloat(Z(t, "padding" + s[n], i, !0)) || 0, r -= parseFloat(Z(t, "border" + s[n] + "Width", i, !0)) || 0;
            }return r;
        },
            rt = function rt(t, e) {
            (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");var i = t.split(" "),
                r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];return null == s ? s = "center" === r ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + s + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(r.replace(y, "")), e.oy = parseFloat(s.replace(y, "")), e.v = t), e || t;
        },
            st = function st(t, e) {
            return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e);
        },
            nt = function nt(t, e) {
            return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t);
        },
            at = function at(t, e, i, r) {
            var s,
                n,
                a,
                o,
                l,
                h = 1e-6;return null == t ? o = e : "number" == typeof t ? o = t : (s = 360, n = t.split("_"), l = "=" === t.charAt(1), a = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : I) - (l ? 0 : e), n.length && (r && (r[i] = e + a), -1 !== t.indexOf("short") && (a %= s, a !== a % (s / 2) && (a = 0 > a ? a + s : a - s)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * s) % s - (0 | a / s) * s : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * s) % s - (0 | a / s) * s)), o = e + a), h > o && o > -h && (o = 0), o;
        },
            ot = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] },
            lt = function lt(t, e, i) {
            return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5;
        },
            ht = a.parseColor = function (t) {
            var e, i, r, s, n, a;return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ot[t] ? ot[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), r = t.charAt(3), t = "#" + e + e + i + i + r + r), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m), s = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = lt(s + 1 / 3, e, i), t[1] = lt(s, e, i), t[2] = lt(s - 1 / 3, e, i), t) : (t = t.match(m) || ot.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : ot.black;
        },
            ut = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for (h in ot) {
            ut += "|" + h + "\\b";
        }ut = RegExp(ut + ")", "gi");var _t = function _t(t, e, i, r) {
            if (null == t) return function (t) {
                return t;
            };var s,
                n = e ? (t.match(ut) || [""])[0] : "",
                a = t.split(n).join("").match(v) || [],
                o = t.substr(0, t.indexOf(a[0])),
                l = ")" === t.charAt(t.length - 1) ? ")" : "",
                h = -1 !== t.indexOf(" ") ? " " : ",",
                u = a.length,
                _ = u > 0 ? a[0].replace(m, "") : "";return u ? s = e ? function (t) {
                var e, c, f, p;if ("number" == typeof t) t += _;else if (r && M.test(t)) {
                    for (p = t.replace(M, "|").split("|"), f = 0; p.length > f; f++) {
                        p[f] = s(p[f]);
                    }return p.join(",");
                }if (e = (t.match(ut) || [n])[0], c = t.split(e).join("").match(v) || [], f = c.length, u > f--) for (; u > ++f;) {
                    c[f] = i ? c[0 | (f - 1) / 2] : a[f];
                }return o + c.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "");
            } : function (t) {
                var e, n, c;if ("number" == typeof t) t += _;else if (r && M.test(t)) {
                    for (n = t.replace(M, "|").split("|"), c = 0; n.length > c; c++) {
                        n[c] = s(n[c]);
                    }return n.join(",");
                }if (e = t.match(v) || [], c = e.length, u > c--) for (; u > ++c;) {
                    e[c] = i ? e[0 | (c - 1) / 2] : a[c];
                }return o + e.join(h) + l;
            } : function (t) {
                return t;
            };
        },
            ct = function ct(t) {
            return t = t.split(","), function (e, i, r, s, n, a, o) {
                var l,
                    h = (i + "").split(" ");for (o = {}, l = 0; 4 > l; l++) {
                    o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                }return s.parse(e, o, n, a);
            };
        },
            ft = (Y._setPluginRatio = function (t) {
            this.plugin.setRatio(t);for (var e, i, r, s, n = this.data, a = n.proxy, o = n.firstMPT, l = 1e-6; o;) {
                e = a[o.v], o.r ? e = Math.round(e) : l > e && e > -l && (e = 0), o.t[o.p] = e, o = o._next;
            }if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t) for (o = n.firstMPT; o;) {
                if (i = o.t, i.type) {
                    if (1 === i.type) {
                        for (s = i.xs0 + i.s + i.xs1, r = 1; i.l > r; r++) {
                            s += i["xn" + r] + i["xs" + (r + 1)];
                        }i.e = s;
                    }
                } else i.e = i.s + i.xs0;o = o._next;
            }
        }, function (t, e, i, r, s) {
            this.t = t, this.p = e, this.v = i, this.r = s, r && (r._prev = this, this._next = r);
        }),
            pt = (Y._parseToProxy = function (t, e, i, r, s, n) {
            var a,
                o,
                l,
                h,
                u,
                _ = r,
                c = {},
                f = {},
                p = i._transform,
                d = F;for (i._transform = null, F = e, r = u = i.parse(t, e, r, s), F = d, n && (i._transform = p, _ && (_._prev = null, _._prev && (_._prev._next = null))); r && r !== _;) {
                if (1 >= r.type && (o = r.p, f[o] = r.s + r.c, c[o] = r.s, n || (h = new ft(r, "s", o, h, r.r), r.c = 0), 1 === r.type)) for (a = r.l; --a > 0;) {
                    l = "xn" + a, o = r.p + "_" + l, f[o] = r.data[l], c[o] = r[l], n || (h = new ft(r, l, o, h, r.rxp[l]));
                }r = r._next;
            }return { proxy: c, end: f, firstMPT: h, pt: u };
        }, Y.CSSPropTween = function (t, e, r, s, a, o, l, h, u, _, c) {
            this.t = t, this.p = e, this.s = r, this.c = s, this.n = l || e, t instanceof pt || n.push(this.n), this.r = h, this.type = o || 0, u && (this.pr = u, i = !0), this.b = void 0 === _ ? r : _, this.e = void 0 === c ? r + s : c, a && (this._next = a, a._prev = this);
        }),
            dt = function dt(t, e, i, r, s, n) {
            var a = new pt(t, e, i, r - i, s, -1, n);return a.b = i, a.e = a.xs0 = r, a;
        },
            mt = a.parseComplex = function (t, e, i, r, s, n, a, o, l, h) {
            i = i || n || "", a = new pt(t, e, 0, 0, a, h ? 2 : 1, null, !1, o, i, r), r += "";var _,
                c,
                f,
                p,
                d,
                v,
                y,
                T,
                x,
                b,
                w,
                O,
                S = i.split(", ").join(",").split(" "),
                k = r.split(", ").join(",").split(" "),
                R = S.length,
                C = u !== !1;for ((-1 !== r.indexOf(",") || -1 !== i.indexOf(",")) && (S = S.join(" ").replace(M, ", ").split(" "), k = k.join(" ").replace(M, ", ").split(" "), R = S.length), R !== k.length && (S = (n || "").split(" "), R = S.length), a.plugin = l, a.setRatio = h, _ = 0; R > _; _++) {
                if (p = S[_], d = k[_], T = parseFloat(p), T || 0 === T) a.appendXtra("", T, st(d, T), d.replace(g, ""), C && -1 !== d.indexOf("px"), !0);else if (s && ("#" === p.charAt(0) || ot[p] || P.test(p))) O = "," === d.charAt(d.length - 1) ? ")," : ")", p = ht(p), d = ht(d), x = p.length + d.length > 6, x && !j && 0 === d[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(k[_]).join("transparent")) : (j || (x = !1), a.appendXtra(x ? "rgba(" : "rgb(", p[0], d[0] - p[0], ",", !0, !0).appendXtra("", p[1], d[1] - p[1], ",", !0).appendXtra("", p[2], d[2] - p[2], x ? "," : O, !0), x && (p = 4 > p.length ? 1 : p[3], a.appendXtra("", p, (4 > d.length ? 1 : d[3]) - p, O, !1)));else if (v = p.match(m)) {
                    if (y = d.match(g), !y || y.length !== v.length) return a;for (f = 0, c = 0; v.length > c; c++) {
                        w = v[c], b = p.indexOf(w, f), a.appendXtra(p.substr(f, b - f), Number(w), st(y[c], w), "", C && "px" === p.substr(b + w.length, 2), 0 === c), f = b + w.length;
                    }a["xs" + a.l] += p.substr(f);
                } else a["xs" + a.l] += a.l ? " " + p : p;
            }if (-1 !== r.indexOf("=") && a.data) {
                for (O = a.xs0 + a.data.s, _ = 1; a.l > _; _++) {
                    O += a["xs" + _] + a.data["xn" + _];
                }a.e = O + a["xs" + _];
            }return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a;
        },
            gt = 9;for (h = pt.prototype, h.l = h.pr = 0; --gt > 0;) {
            h["xn" + gt] = 0, h["xs" + gt] = "";
        }h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function (t, e, i, r, s, n) {
            var a = this,
                o = a.l;return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = r || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = s, a["xn" + o] = e, a.plugin || (a.xfirst = new pt(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, s, a.pr), a.xfirst.xs0 = 0), a) : (a.data = { s: e + i }, a.rxp = {}, a.s = e, a.c = i, a.r = s, a)) : (a["xs" + o] += e + (r || ""), a);
        };var vt = function vt(t, e) {
            e = e || {}, this.p = e.prefix ? Q(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || _t(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0;
        },
            yt = Y._registerComplexSpecialProp = function (t, e, i) {
            "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && (e = { parser: i });var r,
                s,
                n = t.split(","),
                a = e.defaultValue;for (i = i || [a], r = 0; n.length > r; r++) {
                e.prefix = 0 === r && e.prefix, e.defaultValue = i[r] || a, s = new vt(n[r], e);
            }
        },
            Tt = function Tt(t) {
            if (!l[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";yt(t, { parser: function parser(t, i, r, s, n, a, h) {
                        var u = o.com.greensock.plugins[e];return u ? (u._cssRegister(), l[r].parse(t, i, r, s, n, a, h)) : (q("Error: " + e + " js file not loaded."), n);
                    } });
            }
        };h = vt.prototype, h.parseComplex = function (t, e, i, r, s, n) {
            var a,
                o,
                l,
                h,
                u,
                _,
                c = this.keyword;if (this.multi && (M.test(i) || M.test(e) ? (o = e.replace(M, "|").split("|"), l = i.replace(M, "|").split("|")) : c && (o = [e], l = [i])), l) {
                for (h = l.length > o.length ? l.length : o.length, a = 0; h > a; a++) {
                    e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, c && (u = e.indexOf(c), _ = i.indexOf(c), u !== _ && (-1 === _ ? o[a] = o[a].split(c).join("") : -1 === u && (o[a] += " " + c)));
                }e = o.join(", "), i = l.join(", ");
            }return mt(t, this.p, e, i, this.clrs, this.dflt, r, this.pr, s, n);
        }, h.parse = function (t, e, i, r, n, a) {
            return this.parseComplex(t.style, this.format(Z(t, this.p, s, !1, this.dflt)), this.format(e), n, a);
        }, a.registerSpecialProp = function (t, e, i) {
            yt(t, { parser: function parser(t, r, s, n, a, o) {
                    var l = new pt(t, s, 0, 0, a, 2, s, !1, i);return l.plugin = o, l.setRatio = e(t, r, n._tween, s), l;
                }, priority: i });
        }, a.useSVGTransformAttr = c || f;var xt,
            bt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
            wt = Q("transform"),
            Pt = V + "transform",
            Ot = Q("transformOrigin"),
            St = null !== Q("perspective"),
            kt = Y.Transform = function () {
            this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = !(a.defaultForce3D === !1 || !St) && (a.defaultForce3D || "auto");
        },
            Rt = window.SVGElement,
            Ct = function Ct(t, e, i) {
            var r,
                s = N.createElementNS("http://www.w3.org/2000/svg", t),
                n = /([a-z])([A-Z])/g;for (r in i) {
                s.setAttributeNS(null, r.replace(n, "$1-$2").toLowerCase(), i[r]);
            }return e.appendChild(s), s;
        },
            At = N.documentElement,
            Dt = function () {
            var t,
                e,
                i,
                r = d || /Android/i.test(B) && !window.chrome;return N.createElementNS && !r && (t = Ct("svg", At), e = Ct("rect", t, { width: 100, height: 50, x: 100 }), i = e.getBoundingClientRect().width, e.style[Ot] = "50% 50%", e.style[wt] = "scaleX(0.5)", r = i === e.getBoundingClientRect().width && !(f && St), At.removeChild(t)), r;
        }(),
            Mt = function Mt(t, e, i, r, s) {
            var n,
                o,
                l,
                h,
                u,
                _,
                c,
                f,
                p,
                d,
                m,
                g,
                v,
                y,
                T = t._gsTransform,
                x = Ft(t, !0);T && (v = T.xOrigin, y = T.yOrigin), (!r || 2 > (n = r.split(" ")).length) && (c = t.getBBox(), e = rt(e).split(" "), n = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * c.width : parseFloat(e[0])) + c.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * c.height : parseFloat(e[1])) + c.y]), i.xOrigin = h = parseFloat(n[0]), i.yOrigin = u = parseFloat(n[1]), r && x !== It && (_ = x[0], c = x[1], f = x[2], p = x[3], d = x[4], m = x[5], g = _ * p - c * f, o = h * (p / g) + u * (-f / g) + (f * m - p * d) / g, l = h * (-c / g) + u * (_ / g) - (_ * m - c * d) / g, h = i.xOrigin = n[0] = o, u = i.yOrigin = n[1] = l), T && (s || s !== !1 && a.defaultSmoothOrigin !== !1 ? (o = h - v, l = u - y, T.xOffset += o * x[0] + l * x[2] - o, T.yOffset += o * x[1] + l * x[3] - l) : T.xOffset = T.yOffset = 0), t.setAttribute("data-svg-origin", n.join(" "));
        },
            zt = function zt(t) {
            return !!(Rt && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM));
        },
            It = [1, 0, 0, 1, 0, 0],
            Ft = function Ft(t, e) {
            var i,
                r,
                s,
                n,
                a,
                o = t._gsTransform || new kt(),
                l = 1e5;if (wt ? r = Z(t, Pt, null, !0) : t.currentStyle && (r = t.currentStyle.filter.match(A), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), o.x || 0, o.y || 0].join(",") : ""), i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, (o.svg || t.getBBox && zt(t)) && (i && -1 !== (t.style[wt] + "").indexOf("matrix") && (r = t.style[wt], i = 0), s = t.getAttribute("transform"), i && s && (-1 !== s.indexOf("matrix") ? (r = s, i = 0) : -1 !== s.indexOf("translate") && (r = "matrix(1,0,0,1," + s.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return It;for (s = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], gt = s.length; --gt > -1;) {
                n = Number(s[gt]), s[gt] = (a = n - (n |= 0)) ? (0 | a * l + (0 > a ? -.5 : .5)) / l + n : n;
            }return e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s;
        },
            Nt = Y.getTransform = function (t, i, r, n) {
            if (t._gsTransform && r && !n) return t._gsTransform;var o,
                l,
                h,
                u,
                _,
                c,
                f = r ? t._gsTransform || new kt() : new kt(),
                p = 0 > f.scaleX,
                d = 2e-5,
                m = 1e5,
                g = St ? parseFloat(Z(t, Ot, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0,
                v = parseFloat(a.defaultTransformPerspective) || 0;if (f.svg = !(!t.getBBox || !zt(t)), f.svg && (Mt(t, Z(t, Ot, s, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), xt = a.useSVGTransformAttr || Dt), o = Ft(t), o !== It) {
                if (16 === o.length) {
                    var y,
                        T,
                        x,
                        b,
                        w,
                        P = o[0],
                        O = o[1],
                        S = o[2],
                        k = o[3],
                        R = o[4],
                        C = o[5],
                        A = o[6],
                        D = o[7],
                        M = o[8],
                        z = o[9],
                        F = o[10],
                        N = o[12],
                        L = o[13],
                        E = o[14],
                        X = o[11],
                        Y = Math.atan2(A, F);f.zOrigin && (E = -f.zOrigin, N = M * E - o[12], L = z * E - o[13], E = F * E + f.zOrigin - o[14]), f.rotationX = Y * I, Y && (b = Math.cos(-Y), w = Math.sin(-Y), y = R * b + M * w, T = C * b + z * w, x = A * b + F * w, M = R * -w + M * b, z = C * -w + z * b, F = A * -w + F * b, X = D * -w + X * b, R = y, C = T, A = x), Y = Math.atan2(M, F), f.rotationY = Y * I, Y && (b = Math.cos(-Y), w = Math.sin(-Y), y = P * b - M * w, T = O * b - z * w, x = S * b - F * w, z = O * w + z * b, F = S * w + F * b, X = k * w + X * b, P = y, O = T, S = x), Y = Math.atan2(O, P), f.rotation = Y * I, Y && (b = Math.cos(-Y), w = Math.sin(-Y), P = P * b + R * w, T = O * b + C * w, C = O * -w + C * b, A = S * -w + A * b, O = T), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY += 180), f.scaleX = (0 | Math.sqrt(P * P + O * O) * m + .5) / m, f.scaleY = (0 | Math.sqrt(C * C + z * z) * m + .5) / m, f.scaleZ = (0 | Math.sqrt(A * A + F * F) * m + .5) / m, f.skewX = 0, f.perspective = X ? 1 / (0 > X ? -X : X) : 0, f.x = N, f.y = L, f.z = E, f.svg && (f.x -= f.xOrigin - (f.xOrigin * P - f.yOrigin * R), f.y -= f.yOrigin - (f.yOrigin * O - f.xOrigin * C));
                } else if (!(St && !n && o.length && f.x === o[4] && f.y === o[5] && (f.rotationX || f.rotationY) || void 0 !== f.x && "none" === Z(t, "display", i))) {
                    var B = o.length >= 6,
                        j = B ? o[0] : 1,
                        U = o[1] || 0,
                        q = o[2] || 0,
                        V = B ? o[3] : 1;f.x = o[4] || 0, f.y = o[5] || 0, h = Math.sqrt(j * j + U * U), u = Math.sqrt(V * V + q * q), _ = j || U ? Math.atan2(U, j) * I : f.rotation || 0, c = q || V ? Math.atan2(q, V) * I + _ : f.skewX || 0, Math.abs(c) > 90 && 270 > Math.abs(c) && (p ? (h *= -1, c += 0 >= _ ? 180 : -180, _ += 0 >= _ ? 180 : -180) : (u *= -1, c += 0 >= c ? 180 : -180)), f.scaleX = h, f.scaleY = u, f.rotation = _, f.skewX = c, St && (f.rotationX = f.rotationY = f.z = 0, f.perspective = v, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * j + f.yOrigin * q), f.y -= f.yOrigin - (f.xOrigin * U + f.yOrigin * V));
                }f.zOrigin = g;for (l in f) {
                    d > f[l] && f[l] > -d && (f[l] = 0);
                }
            }return r && (t._gsTransform = f, f.svg && (xt && t.style[wt] ? e.delayedCall(.001, function () {
                Yt(t.style, wt);
            }) : !xt && t.getAttribute("transform") && e.delayedCall(.001, function () {
                t.removeAttribute("transform");
            }))), f;
        },
            Lt = function Lt(t) {
            var e,
                i,
                r = this.data,
                s = -r.rotation * z,
                n = s + r.skewX * z,
                a = 1e5,
                o = (0 | Math.cos(s) * r.scaleX * a) / a,
                l = (0 | Math.sin(s) * r.scaleX * a) / a,
                h = (0 | Math.sin(n) * -r.scaleY * a) / a,
                u = (0 | Math.cos(n) * r.scaleY * a) / a,
                _ = this.t.style,
                c = this.t.currentStyle;if (c) {
                i = l, l = -h, h = -i, e = c.filter, _.filter = "";var f,
                    p,
                    m = this.t.offsetWidth,
                    g = this.t.offsetHeight,
                    v = "absolute" !== c.position,
                    y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + u,
                    b = r.x + m * r.xPercent / 100,
                    w = r.y + g * r.yPercent / 100;if (null != r.ox && (f = (r.oxp ? .01 * m * r.ox : r.ox) - m / 2, p = (r.oyp ? .01 * g * r.oy : r.oy) - g / 2, b += f - (f * o + p * l), w += p - (f * h + p * u)), v ? (f = m / 2, p = g / 2, y += ", Dx=" + (f - (f * o + p * l) + b) + ", Dy=" + (p - (f * h + p * u) + w) + ")") : y += ", sizingMethod='auto expand')", _.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(D, y) : y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === u && (v && -1 === y.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && _.removeAttribute("filter")), !v) {
                    var P,
                        O,
                        S,
                        k = 8 > d ? 1 : -1;for (f = r.ieOffsetX || 0, p = r.ieOffsetY || 0, r.ieOffsetX = Math.round((m - ((0 > o ? -o : o) * m + (0 > l ? -l : l) * g)) / 2 + b), r.ieOffsetY = Math.round((g - ((0 > u ? -u : u) * g + (0 > h ? -h : h) * m)) / 2 + w), gt = 0; 4 > gt; gt++) {
                        O = et[gt], P = c[O], i = -1 !== P.indexOf("px") ? parseFloat(P) : H(this.t, O, parseFloat(P), P.replace(T, "")) || 0, S = i !== r[O] ? 2 > gt ? -r.ieOffsetX : -r.ieOffsetY : 2 > gt ? f - r.ieOffsetX : p - r.ieOffsetY, _[O] = (r[O] = Math.round(i - S * (0 === gt || 2 === gt ? 1 : k))) + "px";
                    }
                }
            }
        },
            Et = Y.set3DTransformRatio = Y.setTransformRatio = function (t) {
            var e,
                i,
                r,
                s,
                n,
                a,
                o,
                l,
                h,
                u,
                _,
                c,
                p,
                d,
                m,
                g,
                v,
                y,
                T,
                x,
                b,
                w,
                P,
                O = this.data,
                S = this.t.style,
                k = O.rotation,
                R = O.rotationX,
                C = O.rotationY,
                A = O.scaleX,
                D = O.scaleY,
                M = O.scaleZ,
                I = O.x,
                F = O.y,
                N = O.z,
                L = O.svg,
                E = O.perspective,
                X = O.force3D;if (!((1 !== t && 0 !== t || "auto" !== X || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && X || N || E || C || R) || xt && L || !St) return void (k || O.skewX || L ? (k *= z, w = O.skewX * z, P = 1e5, e = Math.cos(k) * A, s = Math.sin(k) * A, i = Math.sin(k - w) * -D, n = Math.cos(k - w) * D, w && "simple" === O.skewType && (v = Math.tan(w), v = Math.sqrt(1 + v * v), i *= v, n *= v, O.skewY && (e *= v, s *= v)), L && (I += O.xOrigin - (O.xOrigin * e + O.yOrigin * i) + O.xOffset, F += O.yOrigin - (O.xOrigin * s + O.yOrigin * n) + O.yOffset, xt && (O.xPercent || O.yPercent) && (d = this.t.getBBox(), I += .01 * O.xPercent * d.width, F += .01 * O.yPercent * d.height), d = 1e-6, d > I && I > -d && (I = 0), d > F && F > -d && (F = 0)), T = (0 | e * P) / P + "," + (0 | s * P) / P + "," + (0 | i * P) / P + "," + (0 | n * P) / P + "," + I + "," + F + ")", L && xt ? this.t.setAttribute("transform", "matrix(" + T) : S[wt] = (O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) matrix(" : "matrix(") + T) : S[wt] = (O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) matrix(" : "matrix(") + A + ",0,0," + D + "," + I + "," + F + ")");if (f && (d = 1e-4, d > A && A > -d && (A = M = 2e-5), d > D && D > -d && (D = M = 2e-5), !E || O.z || O.rotationX || O.rotationY || (E = 0)), k || O.skewX) k *= z, m = e = Math.cos(k), g = s = Math.sin(k), O.skewX && (k -= O.skewX * z, m = Math.cos(k), g = Math.sin(k), "simple" === O.skewType && (v = Math.tan(O.skewX * z), v = Math.sqrt(1 + v * v), m *= v, g *= v, O.skewY && (e *= v, s *= v))), i = -g, n = m;else {
                if (!(C || R || 1 !== M || E || L)) return void (S[wt] = (O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) translate3d(" : "translate3d(") + I + "px," + F + "px," + N + "px)" + (1 !== A || 1 !== D ? " scale(" + A + "," + D + ")" : ""));e = n = 1, i = s = 0;
            }h = 1, r = a = o = l = u = _ = 0, c = E ? -1 / E : 0, p = O.zOrigin, d = 1e-6, x = ",", b = "0", k = C * z, k && (m = Math.cos(k), g = Math.sin(k), o = -g, u = c * -g, r = e * g, a = s * g, h = m, c *= m, e *= m, s *= m), k = R * z, k && (m = Math.cos(k), g = Math.sin(k), v = i * m + r * g, y = n * m + a * g, l = h * g, _ = c * g, r = i * -g + r * m, a = n * -g + a * m, h *= m, c *= m, i = v, n = y), 1 !== M && (r *= M, a *= M, h *= M, c *= M), 1 !== D && (i *= D, n *= D, l *= D, _ *= D), 1 !== A && (e *= A, s *= A, o *= A, u *= A), (p || L) && (p && (I += r * -p, F += a * -p, N += h * -p + p), L && (I += O.xOrigin - (O.xOrigin * e + O.yOrigin * i) + O.xOffset, F += O.yOrigin - (O.xOrigin * s + O.yOrigin * n) + O.yOffset), d > I && I > -d && (I = b), d > F && F > -d && (F = b), d > N && N > -d && (N = 0)), T = O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) matrix3d(" : "matrix3d(", T += (d > e && e > -d ? b : e) + x + (d > s && s > -d ? b : s) + x + (d > o && o > -d ? b : o), T += x + (d > u && u > -d ? b : u) + x + (d > i && i > -d ? b : i) + x + (d > n && n > -d ? b : n), R || C ? (T += x + (d > l && l > -d ? b : l) + x + (d > _ && _ > -d ? b : _) + x + (d > r && r > -d ? b : r), T += x + (d > a && a > -d ? b : a) + x + (d > h && h > -d ? b : h) + x + (d > c && c > -d ? b : c) + x) : T += ",0,0,0,0,1,0,", T += I + x + F + x + N + x + (E ? 1 + -N / E : 1) + ")", S[wt] = T;
        };h = kt.prototype, h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, yt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", { parser: function parser(t, e, i, r, n, o, l) {
                if (r._lastParsedTransform === l) return n;r._lastParsedTransform = l;var h,
                    u,
                    _,
                    c,
                    f,
                    p,
                    d,
                    m,
                    g,
                    v = t._gsTransform,
                    y = r._transform = Nt(t, s, !0, l.parseTransform),
                    T = t.style,
                    x = 1e-6,
                    b = bt.length,
                    w = l,
                    P = {},
                    O = "transformOrigin";if ("string" == typeof w.transform && wt) _ = E.style, _[wt] = w.transform, _.display = "block", _.position = "absolute", N.body.appendChild(E), h = Nt(E, null, !1), N.body.removeChild(E), null != w.xPercent && (h.xPercent = nt(w.xPercent, y.xPercent)), null != w.yPercent && (h.yPercent = nt(w.yPercent, y.yPercent));else if ("object" == (typeof w === "undefined" ? "undefined" : _typeof(w))) {
                    if (h = { scaleX: nt(null != w.scaleX ? w.scaleX : w.scale, y.scaleX), scaleY: nt(null != w.scaleY ? w.scaleY : w.scale, y.scaleY), scaleZ: nt(w.scaleZ, y.scaleZ), x: nt(w.x, y.x), y: nt(w.y, y.y), z: nt(w.z, y.z), xPercent: nt(w.xPercent, y.xPercent), yPercent: nt(w.yPercent, y.yPercent), perspective: nt(w.transformPerspective, y.perspective) }, d = w.directionalRotation, null != d) if ("object" == (typeof d === "undefined" ? "undefined" : _typeof(d))) for (_ in d) {
                        w[_] = d[_];
                    } else w.rotation = d;"string" == typeof w.x && -1 !== w.x.indexOf("%") && (h.x = 0, h.xPercent = nt(w.x, y.xPercent)), "string" == typeof w.y && -1 !== w.y.indexOf("%") && (h.y = 0, h.yPercent = nt(w.y, y.yPercent)), h.rotation = at("rotation" in w ? w.rotation : "shortRotation" in w ? w.shortRotation + "_short" : "rotationZ" in w ? w.rotationZ : y.rotation, y.rotation, "rotation", P), St && (h.rotationX = at("rotationX" in w ? w.rotationX : "shortRotationX" in w ? w.shortRotationX + "_short" : y.rotationX || 0, y.rotationX, "rotationX", P), h.rotationY = at("rotationY" in w ? w.rotationY : "shortRotationY" in w ? w.shortRotationY + "_short" : y.rotationY || 0, y.rotationY, "rotationY", P)), h.skewX = null == w.skewX ? y.skewX : at(w.skewX, y.skewX), h.skewY = null == w.skewY ? y.skewY : at(w.skewY, y.skewY), (u = h.skewY - y.skewY) && (h.skewX += u, h.rotation += u);
                }for (St && null != w.force3D && (y.force3D = w.force3D, p = !0), y.skewType = w.skewType || y.skewType || a.defaultSkewType, f = y.force3D || y.z || y.rotationX || y.rotationY || h.z || h.rotationX || h.rotationY || h.perspective, f || null == w.scale || (h.scaleZ = 1); --b > -1;) {
                    i = bt[b], c = h[i] - y[i], (c > x || -x > c || null != w[i] || null != F[i]) && (p = !0, n = new pt(y, i, y[i], c, n), i in P && (n.e = P[i]), n.xs0 = 0, n.plugin = o, r._overwriteProps.push(n.n));
                }return c = w.transformOrigin, y.svg && (c || w.svgOrigin) && (m = y.xOffset, g = y.yOffset, Mt(t, rt(c), h, w.svgOrigin, w.smoothOrigin), n = dt(y, "xOrigin", (v ? y : h).xOrigin, h.xOrigin, n, O), n = dt(y, "yOrigin", (v ? y : h).yOrigin, h.yOrigin, n, O), (m !== y.xOffset || g !== y.yOffset) && (n = dt(y, "xOffset", v ? m : y.xOffset, y.xOffset, n, O), n = dt(y, "yOffset", v ? g : y.yOffset, y.yOffset, n, O)), c = xt ? null : "0px 0px"), (c || St && f && y.zOrigin) && (wt ? (p = !0, i = Ot, c = (c || Z(t, i, s, !1, "50% 50%")) + "", n = new pt(T, i, 0, 0, n, -1, O), n.b = T[i], n.plugin = o, St ? (_ = y.zOrigin, c = c.split(" "), y.zOrigin = (c.length > 2 && (0 === _ || "0px" !== c[2]) ? parseFloat(c[2]) : _) || 0, n.xs0 = n.e = c[0] + " " + (c[1] || "50%") + " 0px", n = new pt(y, "zOrigin", 0, 0, n, -1, n.n), n.b = _, n.xs0 = n.e = y.zOrigin) : n.xs0 = n.e = c) : rt(c + "", y)), p && (r._transformType = y.svg && xt || !f && 3 !== this._transformType ? 2 : 3), n;
            }, prefix: !0 }), yt("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }), yt("borderRadius", { defaultValue: "0px", parser: function parser(t, e, i, n, a) {
                e = this.format(e);var o,
                    l,
                    h,
                    u,
                    _,
                    c,
                    f,
                    p,
                    d,
                    m,
                    g,
                    v,
                    y,
                    T,
                    x,
                    b,
                    w = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    P = t.style;for (d = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), o = e.split(" "), l = 0; w.length > l; l++) {
                    this.p.indexOf("border") && (w[l] = Q(w[l])), _ = u = Z(t, w[l], s, !1, "0px"), -1 !== _.indexOf(" ") && (u = _.split(" "), _ = u[0], u = u[1]), c = h = o[l], f = parseFloat(_), v = _.substr((f + "").length), y = "=" === c.charAt(1), y ? (p = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), p *= parseFloat(c), g = c.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(c), g = c.substr((p + "").length)), "" === g && (g = r[i] || v), g !== v && (T = H(t, "borderLeft", f, v), x = H(t, "borderTop", f, v), "%" === g ? (_ = 100 * (T / d) + "%", u = 100 * (x / m) + "%") : "em" === g ? (b = H(t, "borderLeft", 1, "em"), _ = T / b + "em", u = x / b + "em") : (_ = T + "px", u = x + "px"), y && (c = parseFloat(_) + p + g, h = parseFloat(u) + p + g)), a = mt(P, w[l], _ + " " + u, c + " " + h, !1, "0px", a);
                }return a;
            }, prefix: !0, formatter: _t("0px 0px 0px 0px", !1, !0) }), yt("backgroundPosition", { defaultValue: "0 0", parser: function parser(t, e, i, r, n, a) {
                var o,
                    l,
                    h,
                    u,
                    _,
                    c,
                    f = "background-position",
                    p = s || W(t, null),
                    m = this.format((p ? d ? p.getPropertyValue(f + "-x") + " " + p.getPropertyValue(f + "-y") : p.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                    g = this.format(e);if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && (c = Z(t, "backgroundImage").replace(k, ""), c && "none" !== c)) {
                    for (o = m.split(" "), l = g.split(" "), X.setAttribute("src", c), h = 2; --h > -1;) {
                        m = o[h], u = -1 !== m.indexOf("%"), u !== (-1 !== l[h].indexOf("%")) && (_ = 0 === h ? t.offsetWidth - X.width : t.offsetHeight - X.height, o[h] = u ? parseFloat(m) / 100 * _ + "px" : 100 * (parseFloat(m) / _) + "%");
                    }m = o.join(" ");
                }return this.parseComplex(t.style, m, g, n, a);
            }, formatter: rt }), yt("backgroundSize", { defaultValue: "0 0", formatter: rt }), yt("perspective", { defaultValue: "0px", prefix: !0 }), yt("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }), yt("transformStyle", { prefix: !0 }), yt("backfaceVisibility", { prefix: !0 }), yt("userSelect", { prefix: !0 }), yt("margin", { parser: ct("marginTop,marginRight,marginBottom,marginLeft") }), yt("padding", { parser: ct("paddingTop,paddingRight,paddingBottom,paddingLeft") }), yt("clip", { defaultValue: "rect(0px,0px,0px,0px)", parser: function parser(t, e, i, r, n, a) {
                var o, l, h;return 9 > d ? (l = t.currentStyle, h = 8 > d ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(Z(t, this.p, s, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a);
            } }), yt("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }), yt("autoRound,strictUnits", { parser: function parser(t, e, i, r, s) {
                return s;
            } }), yt("border", { defaultValue: "0px solid #000", parser: function parser(t, e, i, r, n, a) {
                return this.parseComplex(t.style, this.format(Z(t, "borderTopWidth", s, !1, "0px") + " " + Z(t, "borderTopStyle", s, !1, "solid") + " " + Z(t, "borderTopColor", s, !1, "#000")), this.format(e), n, a);
            }, color: !0, formatter: function formatter(t) {
                var e = t.split(" ");return e[0] + " " + (e[1] || "solid") + " " + (t.match(ut) || ["#000"])[0];
            } }), yt("borderWidth", { parser: ct("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }), yt("float,cssFloat,styleFloat", { parser: function parser(t, e, i, r, s) {
                var n = t.style,
                    a = "cssFloat" in n ? "cssFloat" : "styleFloat";return new pt(n, a, 0, 0, s, -1, i, !1, 0, n[a], e);
            } });var Xt = function Xt(t) {
            var e,
                i = this.t,
                r = i.filter || Z(this.data, "filter") || "",
                s = 0 | this.s + this.c * t;100 === s && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Z(this.data, "filter")) : (i.filter = r.replace(w, ""), e = !0)), e || (this.xn1 && (i.filter = r = r || "alpha(opacity=" + s + ")"), -1 === r.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = r + " alpha(opacity=" + s + ")") : i.filter = r.replace(x, "opacity=" + s));
        };yt("opacity,alpha,autoAlpha", { defaultValue: "1", parser: function parser(t, e, i, r, n, a) {
                var o = parseFloat(Z(t, "opacity", s, !1, "1")),
                    l = t.style,
                    h = "autoAlpha" === i;return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === Z(t, "visibility", s) && 0 !== e && (o = 0), j ? n = new pt(l, "opacity", o, e - o, n) : (n = new pt(l, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = h ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Xt), h && (n = new pt(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", r._overwriteProps.push(n.n), r._overwriteProps.push(i)), n;
            } });var Yt = function Yt(t, e) {
            e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(O, "-$1").toLowerCase())) : t.removeAttribute(e));
        },
            Bt = function Bt(t) {
            if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                this.t.setAttribute("class", 0 === t ? this.b : this.e);for (var e = this.data, i = this.t.style; e;) {
                    e.v ? i[e.p] = e.v : Yt(i, e.p), e = e._next;
                }1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null);
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
        };yt("className", { parser: function parser(t, e, r, n, a, o, l) {
                var h,
                    u,
                    _,
                    c,
                    f,
                    p = t.getAttribute("class") || "",
                    d = t.style.cssText;if (a = n._classNamePT = new pt(t, r, 0, 0, a, 2), a.setRatio = Bt, a.pr = -11, i = !0, a.b = p, u = J(t, s), _ = t._gsClassPT) {
                    for (c = {}, f = _.data; f;) {
                        c[f.p] = 1, f = f._next;
                    }_.setRatio(1);
                }return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : p.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), h = K(t, u, J(t), l, c), t.setAttribute("class", p), a.data = h.firstMPT, t.style.cssText = d, a = a.xfirst = n.parse(t, h.difs, a, o);
            } });var jt = function jt(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e,
                    i,
                    r,
                    s,
                    n,
                    a = this.t.style,
                    o = l.transform.parse;if ("all" === this.e) a.cssText = "", s = !0;else for (e = this.e.split(" ").join("").split(","), r = e.length; --r > -1;) {
                    i = e[r], l[i] && (l[i].parse === o ? s = !0 : i = "transformOrigin" === i ? Ot : l[i].p), Yt(a, i);
                }s && (Yt(a, wt), n = this.t._gsTransform, n && (n.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform));
            }
        };for (yt("clearProps", { parser: function parser(t, e, r, s, n) {
                return n = new pt(t, r, 0, 0, n, 2), n.setRatio = jt, n.e = e, n.pr = -10, n.data = s._tween, i = !0, n;
            } }), h = "bezier,throwProps,physicsProps,physics2D".split(","), gt = h.length; gt--;) {
            Tt(h[gt]);
        }h = a.prototype, h._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function (t, e, o) {
            if (!t.nodeType) return !1;this._target = t, this._tween = o, this._vars = e, u = e.autoRound, i = !1, r = e.suffixMap || a.suffixMap, s = W(t, ""), n = this._overwriteProps;var h,
                f,
                d,
                m,
                g,
                v,
                y,
                T,
                x,
                w = t.style;if (_ && "" === w.zIndex && (h = Z(t, "zIndex", s), ("auto" === h || "" === h) && this._addLazySet(w, "zIndex", 0)), "string" == typeof e && (m = w.cssText, h = J(t, s), w.cssText = m + ";" + e, h = K(t, h, J(t)).difs, !j && b.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, w.cssText = m), this._firstPT = f = e.className ? l.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
                for (x = 3 === this._transformType, wt ? c && (_ = !0, "" === w.zIndex && (y = Z(t, "zIndex", s), ("auto" === y || "" === y) && this._addLazySet(w, "zIndex", 0)), p && this._addLazySet(w, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : w.zoom = 1, d = f; d && d._next;) {
                    d = d._next;
                }T = new pt(t, "transform", 0, 0, null, 2), this._linkCSSP(T, null, d), T.setRatio = wt ? Et : Lt, T.data = this._transform || Nt(t, s, !0), T.tween = o, T.pr = -1, n.pop();
            }if (i) {
                for (; f;) {
                    for (v = f._next, d = m; d && d.pr > f.pr;) {
                        d = d._next;
                    }(f._prev = d ? d._prev : g) ? f._prev._next = f : m = f, (f._next = d) ? d._prev = f : g = f, f = v;
                }this._firstPT = m;
            }return !0;
        }, h.parse = function (t, e, i, n) {
            var a,
                o,
                h,
                _,
                c,
                f,
                p,
                d,
                m,
                g,
                v = t.style;for (a in e) {
                f = e[a], o = l[a], o ? i = o.parse(t, f, a, this, i, n, e) : (c = Z(t, a, s) + "", m = "string" == typeof f, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || m && P.test(f) ? (m || (f = ht(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = mt(v, a, c, f, !0, "transparent", i, 0, n)) : !m || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (h = parseFloat(c), p = h || 0 === h ? c.substr((h + "").length) : "", ("" === c || "auto" === c) && ("width" === a || "height" === a ? (h = it(t, a, s), p = "px") : "left" === a || "top" === a ? (h = G(t, a, s), p = "px") : (h = "opacity" !== a ? 0 : 1, p = "")), g = m && "=" === f.charAt(1), g ? (_ = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), _ *= parseFloat(f), d = f.replace(T, "")) : (_ = parseFloat(f), d = m ? f.replace(T, "") : ""), "" === d && (d = a in r ? r[a] : p), f = _ || 0 === _ ? (g ? _ + h : _) + d : e[a], p !== d && "" !== d && (_ || 0 === _) && h && (h = H(t, a, h, p), "%" === d ? (h /= H(t, a, 100, "%") / 100, e.strictUnits !== !0 && (c = h + "%")) : "em" === d ? h /= H(t, a, 1, "em") : "px" !== d && (_ = H(t, a, _, d), d = "px"), g && (_ || 0 === _) && (f = _ + h + d)), g && (_ += h), !h && 0 !== h || !_ && 0 !== _ ? void 0 !== v[a] && (f || "NaN" != f + "" && null != f) ? (i = new pt(v, a, _ || h || 0, 0, i, -1, a, !1, 0, c, f), i.xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f : c) : q("invalid " + a + " tween value: " + e[a]) : (i = new pt(v, a, h, _ - h, i, 0, a, u !== !1 && ("px" === d || "zIndex" === a), 0, c, f), i.xs0 = d)) : i = mt(v, a, c, f, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
            }return i;
        }, h.setRatio = function (t) {
            var e,
                i,
                r,
                s = this._firstPT,
                n = 1e-6;if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time) {
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6) for (; s;) {
                    if (e = s.c * t + s.s, s.r ? e = Math.round(e) : n > e && e > -n && (e = 0), s.type) {
                        if (1 === s.type) {
                            if (r = s.l, 2 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;else if (3 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;else if (4 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;else if (5 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;else {
                                for (i = s.xs0 + e + s.xs1, r = 1; s.l > r; r++) {
                                    i += s["xn" + r] + s["xs" + (r + 1)];
                                }s.t[s.p] = i;
                            }
                        } else -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
                    } else s.t[s.p] = e + s.xs0;s = s._next;
                } else for (; s;) {
                    2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t), s = s._next;
                }
            } else for (; s;) {
                if (2 !== s.type) {
                    if (s.r && -1 !== s.type) {
                        if (e = Math.round(s.s + s.c), s.type) {
                            if (1 === s.type) {
                                for (r = s.l, i = s.xs0 + e + s.xs1, r = 1; s.l > r; r++) {
                                    i += s["xn" + r] + s["xs" + (r + 1)];
                                }s.t[s.p] = i;
                            }
                        } else s.t[s.p] = e + s.xs0;
                    } else s.t[s.p] = s.e;
                } else s.setRatio(t);s = s._next;
            }
        }, h._enableTransforms = function (t) {
            this._transform = this._transform || Nt(this._target, s, !0), this._transformType = this._transform.svg && xt || !t && 3 !== this._transformType ? 2 : 3;
        };var Ut = function Ut() {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0);
        };h._addLazySet = function (t, e, i) {
            var r = this._firstPT = new pt(t, e, 0, 0, this._firstPT, 2);r.e = i, r.setRatio = Ut, r.data = this;
        }, h._linkCSSP = function (t, e, i, r) {
            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, r = !0), i ? i._next = t : r || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t;
        }, h._kill = function (e) {
            var i,
                r,
                s,
                n = e;if (e.autoAlpha || e.alpha) {
                n = {};for (r in e) {
                    n[r] = e[r];
                }n.opacity = 1, n.autoAlpha && (n.visibility = 1);
            }return e.className && (i = this._classNamePT) && (s = i.xfirst, s && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, s._prev), this._classNamePT = null), t.prototype._kill.call(this, n);
        };var qt = function qt(t, e, i) {
            var r, s, n, a;if (t.slice) for (s = t.length; --s > -1;) {
                qt(t[s], e, i);
            } else for (r = t.childNodes, s = r.length; --s > -1;) {
                n = r[s], a = n.type, n.style && (e.push(J(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || qt(n, e, i);
            }
        };return a.cascadeTo = function (t, i, r) {
            var s,
                n,
                a,
                o,
                l = e.to(t, i, r),
                h = [l],
                u = [],
                _ = [],
                c = [],
                f = e._internals.reservedProps;for (t = l._targets || l.target, qt(t, u, c), l.render(i, !0, !0), qt(t, _), l.render(0, !0, !0), l._enabled(!0), s = c.length; --s > -1;) {
                if (n = K(c[s], u[s], _[s]), n.firstMPT) {
                    n = n.difs;for (a in r) {
                        f[a] && (n[a] = r[a]);
                    }o = {};for (a in n) {
                        o[a] = u[s][a];
                    }h.push(e.fromTo(c[s], i, o, n));
                }
            }return h;
        }, t.activate([a]), a;
    }, !0), function () {
        var t = _gsScope._gsDefine.plugin({ propName: "roundProps", priority: -1, API: 2, init: function init(t, e, i) {
                return this._tween = i, !0;
            } }),
            e = t.prototype;e._onInitAllProps = function () {
            for (var t, e, i, r = this._tween, s = r.vars.roundProps instanceof Array ? r.vars.roundProps : r.vars.roundProps.split(","), n = s.length, a = {}, o = r._propLookup.roundProps; --n > -1;) {
                a[s[n]] = 1;
            }for (n = s.length; --n > -1;) {
                for (t = s[n], e = r._firstPT; e;) {
                    i = e._next, e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : r._firstPT === e && (r._firstPT = i), e._next = e._prev = null, r._propLookup[t] = o), e = i;
                }
            }return !1;
        }, e._add = function (t, e, i, r) {
            this._addTween(t, e, i, i + r, e, !0), this._overwriteProps.push(e);
        };
    }(), function () {
        var t = /(?:\d|\-|\+|=|#|\.)*/g,
            e = /[A-Za-z%]/g;_gsScope._gsDefine.plugin({ propName: "attr", API: 2, version: "0.4.0", init: function init(i, r) {
                var s, n, a, o, l;if ("function" != typeof i.setAttribute) return !1;this._target = i, this._proxy = {}, this._start = {}, this._end = {}, this._suffix = {};for (s in r) {
                    this._start[s] = this._proxy[s] = n = i.getAttribute(s) + "", this._end[s] = a = r[s] + "", this._suffix[s] = o = e.test(a) ? a.replace(t, "") : e.test(n) ? n.replace(t, "") : "", o && (l = a.indexOf(o), -1 !== l && (a = a.substr(0, l))), this._addTween(this._proxy, s, parseFloat(n), a, s) || (this._suffix[s] = ""), "=" === a.charAt(1) && (this._end[s] = this._firstPT.s + this._firstPT.c + o), this._overwriteProps.push(s);
                }return !0;
            }, set: function set(t) {
                this._super.setRatio.call(this, t);for (var e, i = this._overwriteProps, r = i.length, s = 1 === t ? this._end : t ? this._proxy : this._start, n = s === this._proxy; --r > -1;) {
                    e = i[r], this._target.setAttribute(e, s[e] + (n ? this._suffix[e] : ""));
                }
            } });
    }(), _gsScope._gsDefine.plugin({ propName: "directionalRotation", version: "0.2.1", API: 2, init: function init(t, e) {
            "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && (e = { rotation: e }), this.finals = {};var i,
                r,
                s,
                n,
                a,
                o,
                l = e.useRadians === !0 ? 2 * Math.PI : 360,
                h = 1e-6;for (i in e) {
                "useRadians" !== i && (o = (e[i] + "").split("_"), r = o[0], s = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), n = this.finals[i] = "string" == typeof r && "=" === r.charAt(1) ? s + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0, a = n - s, o.length && (r = o.join("_"), -1 !== r.indexOf("short") && (a %= l, a !== a % (l / 2) && (a = 0 > a ? a + l : a - l)), -1 !== r.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * l) % l - (0 | a / l) * l : -1 !== r.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * l) % l - (0 | a / l) * l)), (a > h || -h > a) && (this._addTween(t, i, s, s + a, i), this._overwriteProps.push(i)));
            }return !0;
        }, set: function set(t) {
            var e;if (1 !== t) this._super.setRatio.call(this, t);else for (e = this._firstPT; e;) {
                e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next;
            }
        } })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (t) {
        var e,
            i,
            r,
            s = _gsScope.GreenSockGlobals || _gsScope,
            n = s.com.greensock,
            a = 2 * Math.PI,
            o = Math.PI / 2,
            l = n._class,
            h = function h(e, i) {
            var r = l("easing." + e, function () {}, !0),
                s = r.prototype = new t();return s.constructor = r, s.getRatio = i, r;
        },
            u = t.register || function () {},
            _ = function _(t, e, i, r) {
            var s = l("easing." + t, { easeOut: new e(), easeIn: new i(), easeInOut: new r() }, !0);return u(s, t), s;
        },
            c = function c(t, e, i) {
            this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t);
        },
            f = function f(e, i) {
            var r = l("easing." + e, function (t) {
                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1;
            }, !0),
                s = r.prototype = new t();return s.constructor = r, s.getRatio = i, s.config = function (t) {
                return new r(t);
            }, r;
        },
            p = _("Back", f("BackOut", function (t) {
            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
        }), f("BackIn", function (t) {
            return t * t * ((this._p1 + 1) * t - this._p1);
        }), f("BackInOut", function (t) {
            return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
        })),
            d = l("easing.SlowMo", function (t, e, i) {
            e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0;
        }, !0),
            m = d.prototype = new t();return m.constructor = d, m.getRatio = function (t) {
            var e = t + (.5 - t) * this._p;return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e;
        }, d.ease = new d(.7, .7), m.config = d.config = function (t, e, i) {
            return new d(t, e, i);
        }, e = l("easing.SteppedEase", function (t) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1;
        }, !0), m = e.prototype = new t(), m.constructor = e, m.getRatio = function (t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1;
        }, m.config = e.config = function (t) {
            return new e(t);
        }, i = l("easing.RoughEase", function (e) {
            e = e || {};for (var i, r, s, n, a, o, l = e.taper || "none", h = [], u = 0, _ = 0 | (e.points || 20), f = _, p = e.randomize !== !1, d = e.clamp === !0, m = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) {
                i = p ? Math.random() : 1 / _ * f, r = m ? m.getRatio(i) : i, "none" === l ? s = g : "out" === l ? (n = 1 - i, s = n * n * g) : "in" === l ? s = i * i * g : .5 > i ? (n = 2 * i, s = .5 * n * n * g) : (n = 2 * (1 - i), s = .5 * n * n * g), p ? r += Math.random() * s - .5 * s : f % 2 ? r += .5 * s : r -= .5 * s, d && (r > 1 ? r = 1 : 0 > r && (r = 0)), h[u++] = { x: i, y: r };
            }for (h.sort(function (t, e) {
                return t.x - e.x;
            }), o = new c(1, 1, null), f = _; --f > -1;) {
                a = h[f], o = new c(a.x, a.y, o);
            }this._prev = new c(0, 0, 0 !== o.t ? o : o.next);
        }, !0), m = i.prototype = new t(), m.constructor = i, m.getRatio = function (t) {
            var e = this._prev;if (t > e.t) {
                for (; e.next && t >= e.t;) {
                    e = e.next;
                }e = e.prev;
            } else for (; e.prev && e.t >= t;) {
                e = e.prev;
            }return this._prev = e, e.v + (t - e.t) / e.gap * e.c;
        }, m.config = function (t) {
            return new i(t);
        }, i.ease = new i(), _("Bounce", h("BounceOut", function (t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
        }), h("BounceIn", function (t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375);
        }), h("BounceInOut", function (t) {
            var e = .5 > t;return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5;
        })), _("Circ", h("CircOut", function (t) {
            return Math.sqrt(1 - (t -= 1) * t);
        }), h("CircIn", function (t) {
            return -(Math.sqrt(1 - t * t) - 1);
        }), h("CircInOut", function (t) {
            return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        })), r = function r(e, i, _r) {
            var s = l("easing." + e, function (t, e) {
                this._p1 = t >= 1 ? t : 1, this._p2 = (e || _r) / (1 > t ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2;
            }, !0),
                n = s.prototype = new t();return n.constructor = s, n.getRatio = i, n.config = function (t, e) {
                return new s(t, e);
            }, s;
        }, _("Elastic", r("ElasticOut", function (t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1;
        }, .3), r("ElasticIn", function (t) {
            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2));
        }, .3), r("ElasticInOut", function (t) {
            return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) + 1;
        }, .45)), _("Expo", h("ExpoOut", function (t) {
            return 1 - Math.pow(2, -10 * t);
        }), h("ExpoIn", function (t) {
            return Math.pow(2, 10 * (t - 1)) - .001;
        }), h("ExpoInOut", function (t) {
            return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)));
        })), _("Sine", h("SineOut", function (t) {
            return Math.sin(t * o);
        }), h("SineIn", function (t) {
            return -Math.cos(t * o) + 1;
        }), h("SineInOut", function (t) {
            return -.5 * (Math.cos(Math.PI * t) - 1);
        })), l("easing.EaseLookup", { find: function find(e) {
                return t.map[e];
            } }, !0), u(s.SlowMo, "SlowMo", "ease,"), u(i, "RoughEase", "ease,"), u(e, "SteppedEase", "ease,"), p;
    }, !0);
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (t, e) {
    "use strict";
    var i = t.GreenSockGlobals = t.GreenSockGlobals || t;if (!i.TweenLite) {
        var r,
            s,
            n,
            a,
            o,
            l = function l(t) {
            var e,
                r = t.split("."),
                s = i;for (e = 0; r.length > e; e++) {
                s[r[e]] = s = s[r[e]] || {};
            }return s;
        },
            h = l("com.greensock"),
            u = 1e-10,
            _ = function _(t) {
            var e,
                i = [],
                r = t.length;for (e = 0; e !== r; i.push(t[e++])) {}return i;
        },
            c = function c() {},
            f = function () {
            var t = Object.prototype.toString,
                e = t.call([]);return function (i) {
                return null != i && (i instanceof Array || "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && !!i.push && t.call(i) === e);
            };
        }(),
            p = {},
            d = function d(r, s, n, a) {
            this.sc = p[r] ? p[r].sc : [], p[r] = this, this.gsClass = null, this.func = n;var o = [];this.check = function (h) {
                for (var u, _, c, f, m = s.length, g = m; --m > -1;) {
                    (u = p[s[m]] || new d(s[m], [])).gsClass ? (o[m] = u.gsClass, g--) : h && u.sc.push(this);
                }if (0 === g && n) for (_ = ("com.greensock." + r).split("."), c = _.pop(), f = l(_.join("."))[c] = this.gsClass = n.apply(n, o), a && (i[c] = f, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [], function () {
                    return f;
                }) : r === e && "undefined" != typeof module && module.exports && (module.exports = f)), m = 0; this.sc.length > m; m++) {
                    this.sc[m].check();
                }
            }, this.check(!0);
        },
            m = t._gsDefine = function (t, e, i, r) {
            return new d(t, e, i, r);
        },
            g = h._class = function (t, e, i) {
            return e = e || function () {}, m(t, [], function () {
                return e;
            }, i), e;
        };m.globals = i;var v = [0, 0, 1, 1],
            y = [],
            T = g("easing.Ease", function (t, e, i, r) {
            this._func = t, this._type = i || 0, this._power = r || 0, this._params = e ? v.concat(e) : v;
        }, !0),
            x = T.map = {},
            b = T.register = function (t, e, i, r) {
            for (var s, n, a, o, l = e.split(","), u = l.length, _ = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1;) {
                for (n = l[u], s = r ? g("easing." + n, null, !0) : h.easing[n] || {}, a = _.length; --a > -1;) {
                    o = _[a], x[n + "." + o] = x[o + n] = s[o] = t.getRatio ? t : t[o] || new t();
                }
            }
        };for (n = T.prototype, n._calcEnd = !1, n.getRatio = function (t) {
            if (this._func) return this._params[0] = t, this._func.apply(null, this._params);var e = this._type,
                i = this._power,
                r = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);return 1 === i ? r *= r : 2 === i ? r *= r * r : 3 === i ? r *= r * r * r : 4 === i && (r *= r * r * r * r), 1 === e ? 1 - r : 2 === e ? r : .5 > t ? r / 2 : 1 - r / 2;
        }, r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], s = r.length; --s > -1;) {
            n = r[s] + ",Power" + s, b(new T(null, null, 1, s), n, "easeOut", !0), b(new T(null, null, 2, s), n, "easeIn" + (0 === s ? ",easeNone" : "")), b(new T(null, null, 3, s), n, "easeInOut");
        }x.linear = h.easing.Linear.easeIn, x.swing = h.easing.Quad.easeInOut;var w = g("events.EventDispatcher", function (t) {
            this._listeners = {}, this._eventTarget = t || this;
        });n = w.prototype, n.addEventListener = function (t, e, i, r, s) {
            s = s || 0;var n,
                l,
                h = this._listeners[t],
                u = 0;for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;) {
                n = h[l], n.c === e && n.s === i ? h.splice(l, 1) : 0 === u && s > n.pr && (u = l + 1);
            }h.splice(u, 0, { c: e, s: i, up: r, pr: s }), this !== a || o || a.wake();
        }, n.removeEventListener = function (t, e) {
            var i,
                r = this._listeners[t];if (r) for (i = r.length; --i > -1;) {
                if (r[i].c === e) return void r.splice(i, 1);
            }
        }, n.dispatchEvent = function (t) {
            var e,
                i,
                r,
                s = this._listeners[t];if (s) for (e = s.length, i = this._eventTarget; --e > -1;) {
                r = s[e], r && (r.up ? r.c.call(r.s || i, { type: t, target: i }) : r.c.call(r.s || i));
            }
        };var P = t.requestAnimationFrame,
            O = t.cancelAnimationFrame,
            S = Date.now || function () {
            return new Date().getTime();
        },
            k = S();for (r = ["ms", "moz", "webkit", "o"], s = r.length; --s > -1 && !P;) {
            P = t[r[s] + "RequestAnimationFrame"], O = t[r[s] + "CancelAnimationFrame"] || t[r[s] + "CancelRequestAnimationFrame"];
        }g("Ticker", function (t, e) {
            var i,
                r,
                s,
                n,
                l,
                h = this,
                _ = S(),
                f = e !== !1 && P,
                p = 500,
                d = 33,
                m = "tick",
                g = function g(t) {
                var e,
                    a,
                    o = S() - k;o > p && (_ += o - d), k += o, h.time = (k - _) / 1e3, e = h.time - l, (!i || e > 0 || t === !0) && (h.frame++, l += e + (e >= n ? .004 : n - e), a = !0), t !== !0 && (s = r(g)), a && h.dispatchEvent(m);
            };w.call(h), h.time = h.frame = 0, h.tick = function () {
                g(!0);
            }, h.lagSmoothing = function (t, e) {
                p = t || 1 / u, d = Math.min(e, p, 0);
            }, h.sleep = function () {
                null != s && (f && O ? O(s) : clearTimeout(s), r = c, s = null, h === a && (o = !1));
            }, h.wake = function () {
                null !== s ? h.sleep() : h.frame > 10 && (k = S() - p + 5), r = 0 === i ? c : f && P ? P : function (t) {
                    return setTimeout(t, 0 | 1e3 * (l - h.time) + 1);
                }, h === a && (o = !0), g(2);
            }, h.fps = function (t) {
                return arguments.length ? (i = t, n = 1 / (i || 60), l = this.time + n, void h.wake()) : i;
            }, h.useRAF = function (t) {
                return arguments.length ? (h.sleep(), f = t, void h.fps(i)) : f;
            }, h.fps(t), setTimeout(function () {
                f && 5 > h.frame && h.useRAF(!1);
            }, 1500);
        }), n = h.Ticker.prototype = new h.events.EventDispatcher(), n.constructor = h.Ticker;var R = g("core.Animation", function (t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, U) {
                o || a.wake();var i = this.vars.useFrames ? j : U;i.add(this, i._time), this.vars.paused && this.paused(!0);
            }
        });a = R.ticker = new h.Ticker(), n = R.prototype, n._dirty = n._gc = n._initted = n._paused = !1, n._totalTime = n._time = 0, n._rawPrevTime = -1, n._next = n._last = n._onUpdate = n._timeline = n.timeline = null, n._paused = !1;var C = function C() {
            o && S() - k > 2e3 && a.wake(), setTimeout(C, 2e3);
        };C(), n.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
        }, n.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0);
        }, n.resume = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!1);
        }, n.seek = function (t, e) {
            return this.totalTime(Number(t), e !== !1);
        }, n.restart = function (t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0);
        }, n.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
        }, n.render = function () {}, n.invalidate = function () {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this;
        }, n.isActive = function () {
            var t,
                e = this._timeline,
                i = this._startTime;return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t;
        }, n._enabled = function (t, e) {
            return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1;
        }, n._kill = function () {
            return this._enabled(!1, !1);
        }, n.kill = function (t, e) {
            return this._kill(t, e), this;
        }, n._uncache = function (t) {
            for (var e = t ? this : this.timeline; e;) {
                e._dirty = !0, e = e.timeline;
            }return this;
        }, n._swapSelfInParams = function (t) {
            for (var e = t.length, i = t.concat(); --e > -1;) {
                "{self}" === t[e] && (i[e] = this);
            }return i;
        }, n._callback = function (t) {
            var e = this.vars;e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || y);
        }, n.eventCallback = function (t, e, i, r) {
            if ("on" === (t || "").substr(0, 2)) {
                var s = this.vars;if (1 === arguments.length) return s[t];null == e ? delete s[t] : (s[t] = e, s[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, s[t + "Scope"] = r), "onUpdate" === t && (this._onUpdate = e);
            }return this;
        }, n.delay = function (t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay;
        }, n.duration = function (t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration);
        }, n.totalDuration = function (t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration;
        }, n.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time;
        }, n.totalTime = function (t, e, i) {
            if (o || a.wake(), !arguments.length) return this._totalTime;if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();var r = this._totalDuration,
                        s = this._timeline;if (t > r && !i && (t = r), this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? r - t : t) / this._timeScale, s._dirty || this._uncache(!1), s._timeline) for (; s._timeline;) {
                        s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0), s = s._timeline;
                    }
                }this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), I.length && V());
            }return this;
        }, n.progress = n.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration();
        }, n.startTime = function (t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime;
        }, n.endTime = function (t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale;
        }, n.timeScale = function (t) {
            if (!arguments.length) return this._timeScale;if (t = t || u, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime,
                    i = e || 0 === e ? e : this._timeline.totalTime();this._startTime = i - (i - this._startTime) * this._timeScale / t;
            }return this._timeScale = t, this._uncache(!1);
        }, n.reversed = function (t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed;
        }, n.paused = function (t) {
            if (!arguments.length) return this._paused;var e,
                i,
                r = this._timeline;return t != this._paused && r && (o || t || a.wake(), e = r.rawTime(), i = e - this._pauseTime, !t && r.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && this.render(r.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, !0, !0)), this._gc && !t && this._enabled(!0, !1), this;
        };var A = g("core.SimpleTimeline", function (t) {
            R.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0;
        });n = A.prototype = new R(), n.constructor = A, n.kill()._gc = !1, n._first = n._last = n._recent = null, n._sortChildren = !1, n.add = n.insert = function (t, e) {
            var i, r;if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren) for (r = t._startTime; i && i._startTime > r;) {
                i = i._prev;
            }return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this;
        }, n._remove = function (t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this;
        }, n.render = function (t, e, i) {
            var r,
                s = this._first;for (this._totalTime = this._time = this._rawPrevTime = t; s;) {
                r = s._next, (s._active || t >= s._startTime && !s._paused) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = r;
            }
        }, n.rawTime = function () {
            return o || a.wake(), this._totalTime;
        };var D = g("TweenLite", function (e, i, r) {
            if (R.call(this, i, r), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";this.target = e = "string" != typeof e ? e : D.selector(e) || e;var s,
                n,
                a,
                o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                l = this.vars.overwrite;if (this._overwrite = l = null == l ? B[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : B[l], (o || e instanceof Array || e.push && f(e)) && "number" != typeof e[0]) for (this._targets = a = _(e), this._propLookup = [], this._siblings = [], s = 0; a.length > s; s++) {
                n = a[s], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(s--, 1), this._targets = a = a.concat(_(n))) : (this._siblings[s] = $(n, this, !1), 1 === l && this._siblings[s].length > 1 && W(n, this, null, 1, this._siblings[s])) : (n = a[s--] = D.selector(n), "string" == typeof n && a.splice(s + 1, 1)) : a.splice(s--, 1);
            } else this._propLookup = {}, this._siblings = $(e, this, !1), 1 === l && this._siblings.length > 1 && W(e, this, null, 1, this._siblings);(this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -u, this.render(-this._delay));
        }, !0),
            M = function M(e) {
            return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType);
        },
            z = function z(t, e) {
            var i,
                r = {};for (i in t) {
                Y[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!L[i] || L[i] && L[i]._autoCSS) || (r[i] = t[i], delete t[i]);
            }t.css = r;
        };n = D.prototype = new R(), n.constructor = D, n.kill()._gc = !1, n.ratio = 0, n._firstPT = n._targets = n._overwrittenProps = n._startAt = null, n._notifyPluginsOfEnabled = n._lazy = !1, D.version = "1.17.0", D.defaultEase = n._ease = new T(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = a, D.autoSleep = 120, D.lagSmoothing = function (t, e) {
            a.lagSmoothing(t, e);
        }, D.selector = t.$ || t.jQuery || function (e) {
            var i = t.$ || t.jQuery;return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e);
        };var I = [],
            F = {},
            N = D._internals = { isArray: f, isSelector: M, lazyTweens: I },
            L = D._plugins = {},
            E = N.tweenLookup = {},
            X = 0,
            Y = N.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1 },
            B = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
            j = R._rootFramesTimeline = new A(),
            U = R._rootTimeline = new A(),
            q = 30,
            V = N.lazyRender = function () {
            var t,
                e = I.length;for (F = {}; --e > -1;) {
                t = I[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
            }I.length = 0;
        };U._startTime = a.time, j._startTime = a.frame, U._active = j._active = !0, setTimeout(V, 1), R._updateRoot = D.render = function () {
            var t, e, i;if (I.length && V(), U.render((a.time - U._startTime) * U._timeScale, !1, !1), j.render((a.frame - j._startTime) * j._timeScale, !1, !1), I.length && V(), a.frame >= q) {
                q = a.frame + (parseInt(D.autoSleep, 10) || 120);for (i in E) {
                    for (e = E[i].tweens, t = e.length; --t > -1;) {
                        e[t]._gc && e.splice(t, 1);
                    }0 === e.length && delete E[i];
                }if (i = U._first, (!i || i._paused) && D.autoSleep && !j._first && 1 === a._listeners.tick.length) {
                    for (; i && i._paused;) {
                        i = i._next;
                    }i || a.sleep();
                }
            }
        }, a.addEventListener("tick", R._updateRoot);var $ = function $(t, e, i) {
            var r,
                s,
                n = t._gsTweenID;if (E[n || (t._gsTweenID = n = "t" + X++)] || (E[n] = { target: t, tweens: [] }), e && (r = E[n].tweens, r[s = r.length] = e, i)) for (; --s > -1;) {
                r[s] === e && r.splice(s, 1);
            }return E[n].tweens;
        },
            Q = function Q(t, e, i, r) {
            var s,
                n,
                a = t.vars.onOverwrite;return a && (s = a(t, e, i, r)), a = D.onOverwrite, a && (n = a(t, e, i, r)), s !== !1 && n !== !1;
        },
            W = function W(t, e, i, r, s) {
            var n, a, o, l;if (1 === r || r >= 4) {
                for (l = s.length, n = 0; l > n; n++) {
                    if ((o = s[n]) !== e) o._gc || o._kill(null, t, e) && (a = !0);else if (5 === r) break;
                }return a;
            }var h,
                _ = e._startTime + u,
                c = [],
                f = 0,
                p = 0 === e._duration;for (n = s.length; --n > -1;) {
                (o = s[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || Z(e, 0, p), 0 === Z(o, h, p) && (c[f++] = o)) : _ >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > _ && ((p || !o._initted) && 2e-10 >= _ - o._startTime || (c[f++] = o)));
            }for (n = f; --n > -1;) {
                if (o = c[n], 2 === r && o._kill(i, t, e) && (a = !0), 2 !== r || !o._firstPT && o._initted) {
                    if (2 !== r && !Q(o, e)) continue;o._enabled(!1, !1) && (a = !0);
                }
            }return a;
        },
            Z = function Z(t, e, i) {
            for (var r = t._timeline, s = r._timeScale, n = t._startTime; r._timeline;) {
                if (n += r._startTime, s *= r._timeScale, r._paused) return -100;r = r._timeline;
            }return n /= s, n > e ? n - e : i && n === e || !t._initted && 2 * u > n - e ? u : (n += t.totalDuration() / t._timeScale / s) > e + u ? 0 : n - e - u;
        };n._init = function () {
            var t,
                e,
                i,
                r,
                s,
                n = this.vars,
                a = this._overwrittenProps,
                o = this._duration,
                l = !!n.immediateRender,
                h = n.ease;if (n.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), s = {};for (r in n.startAt) {
                    s[r] = n.startAt[r];
                }if (s.overwrite = !1, s.immediateRender = !0, s.lazy = l && n.lazy !== !1, s.startAt = s.delay = null, this._startAt = D.to(this.target, 0, s), l) if (this._time > 0) this._startAt = null;else if (0 !== o) return;
            } else if (n.runBackwards && 0 !== o) if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;else {
                0 !== this._time && (l = !1), i = {};for (r in n) {
                    Y[r] && "autoCSS" !== r || (i[r] = n[r]);
                }if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && n.lazy !== !1, i.immediateRender = l, this._startAt = D.to(this.target, 0, i), l) {
                    if (0 === this._time) return;
                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
            }if (this._ease = h = h ? h instanceof T ? h : "function" == typeof h ? new T(h, n.easeParams) : x[h] || D.defaultEase : D.defaultEase, n.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (t = this._targets.length; --t > -1;) {
                this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
            } else e = this._initProps(this.target, this._propLookup, this._siblings, a);if (e && D._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards) for (i = this._firstPT; i;) {
                i.s += i.c, i.c = -i.c, i = i._next;
            }this._onUpdate = n.onUpdate, this._initted = !0;
        }, n._initProps = function (e, i, r, s) {
            var n, a, o, l, h, u;if (null == e) return !1;F[e._gsTweenID] && V(), this.vars.css || e.style && e !== t && e.nodeType && L.css && this.vars.autoCSS !== !1 && z(this.vars, e);for (n in this.vars) {
                if (u = this.vars[n], Y[n]) u && (u instanceof Array || u.push && f(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[n] = u = this._swapSelfInParams(u, this));else if (L[n] && (l = new L[n]())._onInitTween(e, this.vars[n], this)) {
                    for (this._firstPT = h = { _next: this._firstPT, t: l, p: "setRatio", s: 0, c: 1, f: !0, n: n, pg: !0, pr: l._priority }, a = l._overwriteProps.length; --a > -1;) {
                        i[l._overwriteProps[a]] = this._firstPT;
                    }(l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0);
                } else this._firstPT = i[n] = h = { _next: this._firstPT, t: e, p: n, f: "function" == typeof e[n], n: n, pg: !1, pr: 0 }, h.s = h.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), h.c = "string" == typeof u && "=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * Number(u.substr(2)) : Number(u) - h.s || 0;h && h._next && (h._next._prev = h);
            }return s && this._kill(s, e) ? this._initProps(e, i, r, s) : this._overwrite > 1 && this._firstPT && r.length > 1 && W(e, this, i, this._overwrite, r) ? (this._kill(i, e), this._initProps(e, i, r, s)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (F[e._gsTweenID] = !0), o);
        }, n.render = function (t, e, i) {
            var r,
                s,
                n,
                a,
                o = this._time,
                l = this._duration,
                h = this._rawPrevTime;if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (r = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > h || h === u && "isPause" !== this.data) && h !== t && (i = !0, h > u && (s = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : u);else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0) && (s = "onReverseComplete", r = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== u || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : u)), this._initted || (i = !0);else if (this._totalTime = this._time = t, this._easeType) {
                var _ = t / l,
                    c = this._easeType,
                    f = this._easePower;(1 === c || 3 === c && _ >= .5) && (_ = 1 - _), 3 === c && (_ *= 2), 1 === f ? _ *= _ : 2 === f ? _ *= _ * _ : 3 === f ? _ *= _ * _ * _ : 4 === f && (_ *= _ * _ * _ * _), this.ratio = 1 === c ? 1 - _ : 2 === c ? _ : .5 > t / l ? _ / 2 : 1 - _ / 2;
            } else this.ratio = this._ease.getRatio(t / l);if (this._time !== o || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, I.push(this), void (this._lazy = [t, e]);this._time && !r ? this.ratio = this._ease.getRatio(this._time / l) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
                }for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), n = this._firstPT; n;) {
                    n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                }this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || r) && this._callback("onUpdate")), s && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === l && this._rawPrevTime === u && a !== u && (this._rawPrevTime = 0));
            }
        }, n._kill = function (t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;var r,
                s,
                n,
                a,
                o,
                l,
                h,
                u,
                _,
                c = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;if ((f(e) || M(e)) && "number" != typeof e[0]) for (r = e.length; --r > -1;) {
                this._kill(t, e[r], i) && (l = !0);
            } else {
                if (this._targets) {
                    for (r = this._targets.length; --r > -1;) {
                        if (e === this._targets[r]) {
                            o = this._propLookup[r] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[r] = t ? this._overwrittenProps[r] || {} : "all";break;
                        }
                    }
                } else {
                    if (e !== this.target) return !1;o = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all";
                }if (o) {
                    if (h = t || o, u = t !== s && "all" !== s && t !== o && ("object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
                        for (n in h) {
                            o[n] && (_ || (_ = []), _.push(n));
                        }if ((_ || !t) && !Q(this, i, e, _)) return !1;
                    }for (n in h) {
                        (a = o[n]) && (c && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), u && (s[n] = 1);
                    }!this._firstPT && this._initted && this._enabled(!1, !1);
                }
            }return l;
        }, n.invalidate = function () {
            return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], R.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -u, this.render(-this._delay)), this;
        }, n._enabled = function (t, e) {
            if (o || a.wake(), t && this._gc) {
                var i,
                    r = this._targets;if (r) for (i = r.length; --i > -1;) {
                    this._siblings[i] = $(r[i], this, !0);
                } else this._siblings = $(this.target, this, !0);
            }return R.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && D._onPluginEvent(t ? "_onEnable" : "_onDisable", this);
        }, D.to = function (t, e, i) {
            return new D(t, e, i);
        }, D.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i);
        }, D.fromTo = function (t, e, i, r) {
            return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new D(t, e, r);
        }, D.delayedCall = function (t, e, i, r, s) {
            return new D(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: r, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, lazy: !1, useFrames: s, overwrite: 0 });
        }, D.set = function (t, e) {
            return new D(t, 0, e);
        }, D.getTweensOf = function (t, e) {
            if (null == t) return [];t = "string" != typeof t ? t : D.selector(t) || t;var i, r, s, n;if ((f(t) || M(t)) && "number" != typeof t[0]) {
                for (i = t.length, r = []; --i > -1;) {
                    r = r.concat(D.getTweensOf(t[i], e));
                }for (i = r.length; --i > -1;) {
                    for (n = r[i], s = i; --s > -1;) {
                        n === r[s] && r.splice(i, 1);
                    }
                }
            } else for (r = $(t).concat(), i = r.length; --i > -1;) {
                (r[i]._gc || e && !r[i].isActive()) && r.splice(i, 1);
            }return r;
        }, D.killTweensOf = D.killDelayedCallsTo = function (t, e, i) {
            "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (i = e, e = !1);for (var r = D.getTweensOf(t, e), s = r.length; --s > -1;) {
                r[s]._kill(i, t);
            }
        };var H = g("plugins.TweenPlugin", function (t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = H.prototype;
        }, !0);if (n = H.prototype, H.version = "1.10.1", H.API = 2, n._firstPT = null, n._addTween = function (t, e, i, r, s, n) {
            var a, o;return null != r && (a = "number" == typeof r || "=" !== r.charAt(1) ? Number(r) - Number(i) : parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2))) ? (this._firstPT = o = { _next: this._firstPT, t: t, p: e, s: i, c: a, f: "function" == typeof t[e], n: s || e, r: n }, o._next && (o._next._prev = o), o) : void 0;
        }, n.setRatio = function (t) {
            for (var e, i = this._firstPT, r = 1e-6; i;) {
                e = i.c * t + i.s, i.r ? e = Math.round(e) : r > e && e > -r && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next;
            }
        }, n._kill = function (t) {
            var e,
                i = this._overwriteProps,
                r = this._firstPT;if (null != t[this._propName]) this._overwriteProps = [];else for (e = i.length; --e > -1;) {
                null != t[i[e]] && i.splice(e, 1);
            }for (; r;) {
                null != t[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, r._prev = null) : this._firstPT === r && (this._firstPT = r._next)), r = r._next;
            }return !1;
        }, n._roundProps = function (t, e) {
            for (var i = this._firstPT; i;) {
                (t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next;
            }
        }, D._onPluginEvent = function (t, e) {
            var i,
                r,
                s,
                n,
                a,
                o = e._firstPT;if ("_onInitAllProps" === t) {
                for (; o;) {
                    for (a = o._next, r = s; r && r.pr > o.pr;) {
                        r = r._next;
                    }(o._prev = r ? r._prev : n) ? o._prev._next = o : s = o, (o._next = r) ? r._prev = o : n = o, o = a;
                }o = e._firstPT = s;
            }for (; o;) {
                o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
            }return i;
        }, H.activate = function (t) {
            for (var e = t.length; --e > -1;) {
                t[e].API === H.API && (L[new t[e]()._propName] = t[e]);
            }return !0;
        }, m.plugin = function (t) {
            if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";var e,
                i = t.propName,
                r = t.priority || 0,
                s = t.overwriteProps,
                n = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_roundProps", initAll: "_onInitAllProps" },
                a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                H.call(this, i, r), this._overwriteProps = s || [];
            }, t.global === !0),
                o = a.prototype = new H(i);o.constructor = a, a.API = t.API;for (e in n) {
                "function" == typeof t[e] && (o[n[e]] = t[e]);
            }return a.version = t.version, H.activate([a]), a;
        }, r = t._gsQueue) {
            for (s = 0; r.length > s; s++) {
                r[s]();
            }for (n in p) {
                p[n].func || t.console.log("GSAP encountered missing dependency: com.greensock." + n);
            }
        }o = !1;
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : undefined || window, "TweenMax");

$('.map-container').click(function () {
    $(this).find('iframe').addClass('clicked');
}).mouseleave(function () {
    $(this).find('iframe').removeClass('clicked');
});
