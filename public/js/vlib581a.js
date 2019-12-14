! function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.DMVAST = t()
    }
}(function() {
    return function t(e, i, n) {
        function r(o, a) {
            if (!i[o]) {
                if (!e[o]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(o, !0);
                    if (s) return s(o, !0);
                    var u = new Error("Cannot find module '" + o + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var c = i[o] = {
                    exports: {}
                };
                e[o][0].call(c.exports, function(t) {
                    var i = e[o][1][t];
                    return r(i || t)
                }, c, c.exports, t, e, i, n)
            }
            return i[o].exports
        }
        for (var s = "function" == typeof require && require, o = 0; o < n.length; o++) r(n[o]);
        return r
    }({
        1: [function(t, e, i) {
            function n() {
                this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
            }

            function r(t) {
                return "function" == typeof t
            }

            function s(t) {
                return "number" == typeof t
            }

            function o(t) {
                return "object" == typeof t && null !== t
            }

            function a(t) {
                return void 0 === t
            }
            e.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function(t) {
                if (!s(t) || t < 0 || isNaN(t)) throw TypeError("n must be a positive number");
                return this._maxListeners = t, this
            }, n.prototype.emit = function(t) {
                var e, i, n, s, l, u;
                if (this._events || (this._events = {}), "error" === t && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
                    if ((e = arguments[1]) instanceof Error) throw e;
                    var c = new Error('Uncaught, unspecified "error" event. (' + e + ")");
                    throw c.context = e, c
                }
                if (i = this._events[t], a(i)) return !1;
                if (r(i)) switch (arguments.length) {
                    case 1:
                        i.call(this);
                        break;
                    case 2:
                        i.call(this, arguments[1]);
                        break;
                    case 3:
                        i.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        s = Array.prototype.slice.call(arguments, 1), i.apply(this, s)
                } else if (o(i))
                    for (s = Array.prototype.slice.call(arguments, 1), u = i.slice(), n = u.length, l = 0; l < n; l++) u[l].apply(this, s);
                return !0
            }, n.prototype.addListener = function(t, e) {
                var i;
                if (!r(e)) throw TypeError("listener must be a function");
                return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, r(e.listener) ? e.listener : e), this._events[t] ? o(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, o(this._events[t]) && !this._events[t].warned && (i = a(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) && i > 0 && this._events[t].length > i && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), "function" == typeof console.trace && console.trace()), this
            }, n.prototype.on = n.prototype.addListener, n.prototype.once = function(t, e) {
                function i() {
                    this.removeListener(t, i), n || (n = !0, e.apply(this, arguments))
                }
                if (!r(e)) throw TypeError("listener must be a function");
                var n = !1;
                return i.listener = e, this.on(t, i), this
            }, n.prototype.removeListener = function(t, e) {
                var i, n, s, a;
                if (!r(e)) throw TypeError("listener must be a function");
                if (!this._events || !this._events[t]) return this;
                if (i = this._events[t], s = i.length, n = -1, i === e || r(i.listener) && i.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e);
                else if (o(i)) {
                    for (a = s; a-- > 0;)
                        if (i[a] === e || i[a].listener && i[a].listener === e) {
                            n = a;
                            break
                        } if (n < 0) return this;
                    1 === i.length ? (i.length = 0, delete this._events[t]) : i.splice(n, 1), this._events.removeListener && this.emit("removeListener", t, e)
                }
                return this
            }, n.prototype.removeAllListeners = function(t) {
                var e, i;
                if (!this._events) return this;
                if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;
                if (0 === arguments.length) {
                    for (e in this._events) "removeListener" !== e && this.removeAllListeners(e);
                    return this.removeAllListeners("removeListener"), this._events = {}, this
                }
                if (i = this._events[t], r(i)) this.removeListener(t, i);
                else if (i)
                    for (; i.length;) this.removeListener(t, i[i.length - 1]);
                return delete this._events[t], this
            }, n.prototype.listeners = function(t) {
                return this._events && this._events[t] ? r(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
            }, n.prototype.listenerCount = function(t) {
                if (this._events) {
                    var e = this._events[t];
                    if (r(e)) return 1;
                    if (e) return e.length
                }
                return 0
            }, n.listenerCount = function(t, e) {
                return t.listenerCount(e)
            }
        }, {}],
        2: [function(t, e, i) {
            var n;
            n = function() {
                function t() {
                    this.id = null, this.sequence = null, this.system = null, this.title = null, this.description = null, this.advertiser = null, this.pricing = null, this.survey = null, this.errorURLTemplates = [], this.impressionURLTemplates = [], this.creatives = [], this.extensions = []
                }
                return t
            }(), e.exports = n
        }, {}],
        3: [function(t, e, i) {
            var n, r, s;
            r = t("./parser"), s = t("./util"), n = function() {
                function t() {}
                return t.cappingFreeLunch = 0, t.cappingMinimumTimeInterval = 0, t.options = {
                        withCredentials: !1,
                        timeout: 0
                    }, t.get = function(t, e, n) {
                        var s, o, a, l;
                        if (o = +new Date, s = i.extend = function(t, e) {
                                var i, n;
                                for (i in e) n = e[i], t[i] = n;
                                return t
                            }, n || ("function" == typeof e && (n = e), a = {}), a = s(this.options, e), this.totalCallsTimeout < o ? (this.totalCalls = 1, this.totalCallsTimeout = o + 36e5) : this.totalCalls++, this.cappingFreeLunch >= this.totalCalls) return void n(null, new Error("VAST call canceled – FreeLunch capping not reached yet " + this.totalCalls + "/" + this.cappingFreeLunch));
                        if ((l = o - this.lastSuccessfullAd) < 0) this.lastSuccessfullAd = 0;
                        else if (l < this.cappingMinimumTimeInterval) return void n(null, new Error("VAST call canceled – (" + this.cappingMinimumTimeInterval + ")ms minimum interval reached"));
                        return r.parse(t, a, function(t) {
                            return function(t, e) {
                                return n(t, e)
                            }
                        }())
                    },
                    function() {
                        var e, i;
                        i = s.storage, e = Object.defineProperty, ["lastSuccessfullAd", "totalCalls", "totalCallsTimeout"].forEach(function(n) {
                            e(t, n, {
                                get: function() {
                                    return i.getItem(n)
                                },
                                set: function(t) {
                                    return i.setItem(n, t)
                                },
                                configurable: !1,
                                enumerable: !0
                            })
                        }), null == t.lastSuccessfullAd && (t.lastSuccessfullAd = 0), null == t.totalCalls && (t.totalCalls = 0), null == t.totalCallsTimeout && (t.totalCallsTimeout = 0)
                    }(), t
            }(), e.exports = n
        }, {
            "./parser": 12,
            "./util": 18
        }],
        4: [function(t, e, i) {
            var n;
            n = function() {
                function t() {
                    this.id = null, this.width = 0, this.height = 0, this.type = null, this.staticResource = null, this.htmlResource = null, this.iframeResource = null, this.altText = null, this.companionClickThroughURLTemplate = null, this.companionClickTrackingURLTemplates = [], this.trackingEvents = {}
                }
                return t
            }(), e.exports = n
        }, {}],
        5: [function(t, e, i) {
            var n, r, s, o, a = function(t, e) {
                    function i() {
                        this.constructor = t
                    }
                    for (var n in e) l.call(e, n) && (t[n] = e[n]);
                    return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
                },
                l = {}.hasOwnProperty;
            n = function() {
                function t(t) {
                    null == t && (t = {}), this.id = t.id || null, this.adId = t.adId || null, this.sequence = t.sequence || null, this.apiFramework = t.apiFramework || null, this.trackingEvents = {}
                }
                return t
            }(), s = function(t) {
                function e() {
                    e.__super__.constructor.apply(this, arguments), this.type = "linear", this.duration = 0, this.skipDelay = null, this.mediaFiles = [], this.videoClickThroughURLTemplate = null, this.videoClickTrackingURLTemplates = [], this.videoCustomClickURLTemplates = [], this.adParameters = null, this.icons = []
                }
                return a(e, t), e
            }(n), o = function(t) {
                function e() {
                    e.__super__.constructor.apply(this, arguments), this.type = "nonlinear", this.variations = []
                }
                return a(e, t), e
            }(n), r = function(t) {
                function e() {
                    e.__super__.constructor.apply(this, arguments), this.type = "companion", this.variations = []
                }
                return a(e, t), e
            }(n), e.exports = {
                VASTCreativeLinear: s,
                VASTCreativeNonLinear: o,
                VASTCreativeCompanion: r
            }
        }, {}],
        6: [function(t, e, i) {
            var n;
            n = function() {
                function t() {
                    this.attributes = {}, this.children = []
                }
                return t
            }(), e.exports = n
        }, {}],
        7: [function(t, e, i) {
            var n;
            n = function() {
                function t() {
                    this.name = null, this.value = null, this.attributes = {}
                }
                return t
            }(), e.exports = n
        }, {}],
        8: [function(t, e, i) {
            var n;
            n = function() {
                function t() {
                    this.program = null, this.height = 0, this.width = 0, this.xPosition = 0, this.yPosition = 0, this.apiFramework = null, this.offset = null, this.duration = 0, this.type = null, this.staticResource = null, this.htmlResource = null, this.iframeResource = null, this.iconClickThroughURLTemplate = null, this.iconClickTrackingURLTemplates = [], this.iconViewTrackingURLTemplate = null
                }
                return t
            }(), e.exports = n
        }, {}],
        9: [function(t, e, i) {
            e.exports = {
                client: t("./client"),
                tracker: t("./tracker"),
                parser: t("./parser"),
                util: t("./util")
            }
        }, {
            "./client": 3,
            "./parser": 12,
            "./tracker": 14,
            "./util": 18
        }],
        10: [function(t, e, i) {
            var n;
            n = function() {
                function t() {
                    this.id = null, this.fileURL = null, this.deliveryType = "progressive", this.mimeType = null, this.codec = null, this.bitrate = 0, this.minBitrate = 0, this.maxBitrate = 0, this.width = 0, this.height = 0, this.apiFramework = null, this.scalable = null, this.maintainAspectRatio = null
                }
                return t
            }(), e.exports = n
        }, {}],
        11: [function(t, e, i) {
            var n;
            n = function() {
                function t() {
                    this.id = null, this.width = 0, this.height = 0, this.expandedWidth = 0, this.expandedHeight = 0, this.scalable = !0, this.maintainAspectRatio = !0, this.minSuggestedDuration = 0, this.apiFramework = "static", this.type = null, this.staticResource = null, this.htmlResource = null, this.iframeResource = null, this.nonlinearClickThroughURLTemplate = null, this.nonlinearClickTrackingURLTemplates = [], this.adParameters = null
                }
                return t
            }(), e.exports = n
        }, {}],
        12: [function(t, e, i) {
            var n, r, s, o, a, l, u, c, h, p, d, f, m, g, v, T = [].indexOf || function(t) {
                for (var e = 0, i = this.length; e < i; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            };
            r = t("./urlhandler"), g = t("./response"), s = t("./ad"), o = t("./extension"), a = t("./extensionchild"), v = t("./util"), c = t("./creative").VASTCreativeLinear, u = t("./creative").VASTCreativeCompanion, h = t("./creative").VASTCreativeNonLinear, d = t("./mediafile"), p = t("./icon"), l = t("./companionad"), f = t("./nonlinear"), n = t("events").EventEmitter, m = function() {
                function t() {}
                var e;
                return e = [], t.addURLTemplateFilter = function(t) {
                    "function" == typeof t && e.push(t)
                }, t.removeURLTemplateFilter = function() {
                    return e.pop()
                }, t.countURLTemplateFilters = function() {
                    return e.length
                }, t.clearUrlTemplateFilters = function() {
                    return e = []
                }, t.parse = function(t, e, i) {
                    return i || ("function" == typeof e && (i = e), e = {}), this._parse(t, null, e, function(t, e) {
                        return i(e, t)
                    })
                }, t.vent = new n, t.track = function(t, e) {
                    return this.vent.emit("VAST-error", e), v.track(t, e)
                }, t.on = function(t, e) {
                    return this.vent.on(t, e)
                }, t.once = function(t, e) {
                    return this.vent.once(t, e)
                }, t._parse = function(t, i, n, s) {
                    var o, a, l;
                    for (s || ("function" == typeof n && (s = n), n = {}), a = 0, l = e.length; a < l; a++) o = e[a], t = o(t);
                    return null == i && (i = []), i.push(t), r.get(t, n, function(e) {
                        return function(r, o) {
                            var a, l, u, c, h, p, d, f, m, v, y;
                            if (null != r) return s(r);
                            if (y = new g, null == (null != o ? o.documentElement : void 0) || "VAST" !== o.documentElement.nodeName) return s(new Error("Invalid VAST XMLDocument"));
                            for (m = o.documentElement.childNodes, u = 0, h = m.length; u < h; u++) f = m[u], "Error" === f.nodeName && y.errorURLTemplates.push(e.parseNodeText(f));
                            for (v = o.documentElement.childNodes, c = 0, p = v.length; c < p; c++) f = v[c], "Ad" === f.nodeName && (a = e.parseAdElement(f), null != a ? (a.xml = o, y.ads.push(a)) : e.track(y.errorURLTemplates, {
                                ERRORCODE: 101
                            }));
                            for (l = function(t, i) {
                                    var n, r, o, l;
                                    if (null == t && (t = null), null == i && (i = !1), y) {
                                        for (o = !0, l = y.ads, n = 0, r = l.length; n < r; n++) {
                                            if (a = l[n], null != a.nextWrapperURL) return;
                                            a.creatives.length > 0 && (o = !1)
                                        }
                                        return o && (i || e.track(y.errorURLTemplates, {
                                            ERRORCODE: 303
                                        })), 0 === y.ads.length && (y = null), s(t, y)
                                    }
                                }, d = y.ads.length; d--;) a = y.ads[d], null != a.nextWrapperURL && function(r) {
                                var s, o, a;
                                i.length > (null !== n.wrapperLimit ? n.wrapperLimit : 9) || (a = r.nextWrapperURL, T.call(i, a) >= 0) ? (e.track(r.errorURLTemplates, {
                                    ERRORCODE: 302
                                }), y.ads.splice(y.ads.indexOf(r), 1), l(new Error("Wrapper limit reached, as defined by the video player"))) : (0 === r.nextWrapperURL.indexOf("//") ? (o = location.protocol, r.nextWrapperURL = "" + o + r.nextWrapperURL) : -1 === r.nextWrapperURL.indexOf("://") && (s = t.slice(0, t.lastIndexOf("/")), r.nextWrapperURL = s + "/" + r.nextWrapperURL), e._parse(r.nextWrapperURL, i, n, function(t, i) {
                                    var n, s, o, a, u, c, h, p, d, f, m, g, v, T, k, A, R, b, L, x, U, C, E, w;
                                    if (o = !1, null != t) e.track(r.errorURLTemplates, {
                                        ERRORCODE: 301
                                    }), y.ads.splice(y.ads.indexOf(r), 1), o = !0;
                                    else if (null == i) e.track(r.errorURLTemplates, {
                                        ERRORCODE: 303
                                    }), y.ads.splice(y.ads.indexOf(r), 1), o = !0;
                                    else
                                        for (y.errorURLTemplates = y.errorURLTemplates.concat(i.errorURLTemplates), u = y.ads.indexOf(r), y.ads.splice(u, 1), b = i.ads, c = 0, h = b.length; c < h; c++) {
                                            if (w = b[c], w.lastURI || (w.lastURI = {}, w.lastURI.impressionURLTemplates || (w.lastURI.impressionURLTemplates = w.impressionURLTemplates), w.lastURI.errorURLTemplates || (w.lastURI.errorURLTemplates = w.errorURLTemplates), w.lastURI.trackingEvents = []), w.errorURLTemplates = r.errorURLTemplates.concat(w.errorURLTemplates), w.impressionURLTemplates = r.impressionURLTemplates.concat(w.impressionURLTemplates), w.extensions = r.extensions.concat(w.extensions), null != r.trackingEvents)
                                                for (L = w.creatives, v = 0, p = L.length; v < p; v++)
                                                    if (s = L[v], null != r.trackingEvents[s.type])
                                                        for (x = Object.keys(r.trackingEvents[s.type]), T = 0, d = x.length; T < d; T++) a = x[T], (n = s.trackingEvents)[a] || (n[a] = []), w.lastURI.trackingEvents[a] || (w.lastURI.trackingEvents[a] = []), w.lastURI.trackingEvents[a] = w.lastURI.trackingEvents[a].concat(r.trackingEvents[s.type][a]), s.trackingEvents[a] = s.trackingEvents[a].concat(r.trackingEvents[s.type][a]);
                                            if (null != r.videoClickTrackingURLTemplates)
                                                for (U = w.creatives, k = 0, f = U.length; k < f; k++) s = U[k], "linear" === s.type && (w.lastURI.videoClickTrackingURLTemplates || (w.lastURI.videoClickTrackingURLTemplates = s.videoClickTrackingURLTemplates), s.videoClickTrackingURLTemplates = s.videoClickTrackingURLTemplates.concat(r.videoClickTrackingURLTemplates));
                                            if (null != r.videoCustomClickURLTemplates)
                                                for (C = w.creatives, A = 0, m = C.length; A < m; A++) s = C[A], "linear" === s.type && (s.videoCustomClickURLTemplates = s.videoCustomClickURLTemplates.concat(r.videoCustomClickURLTemplates));
                                            if (null != r.videoClickThroughURLTemplate)
                                                for (E = w.creatives, R = 0, g = E.length; R < g; R++) s = E[R], "linear" === s.type && null == s.videoClickThroughURLTemplate && (s.videoClickThroughURLTemplate = r.videoClickThroughURLTemplate);
                                            y.ads.splice(++u, 0, w)
                                        }
                                    return delete r.nextWrapperURL, l(t, o)
                                }))
                            }(a);
                            return l()
                        }
                    }(this))
                }, t.childByName = function(t, e) {
                    var i, n, r, s;
                    for (s = t.childNodes, n = 0, r = s.length; n < r; n++)
                        if (i = s[n], i.nodeName === e) return i
                }, t.childsByName = function(t, e) {
                    var i, n, r, s, o;
                    for (n = [], o = t.childNodes, r = 0, s = o.length; r < s; r++) i = o[r], i.nodeName === e && n.push(i);
                    return n
                }, t.parseAdElement = function(t) {
                    var e, i, n, r, s;
                    for (r = t.childNodes, i = 0, n = r.length; i < n; i++)
                        if (e = r[i], "Wrapper" === (s = e.nodeName) || "InLine" === s) {
                            if (this.copyNodeAttribute("id", t, e), this.copyNodeAttribute("sequence", t, e), "Wrapper" === e.nodeName) return this.parseWrapperElement(e);
                            if ("InLine" === e.nodeName) return this.parseInLineElement(e)
                        }
                }, t.parseWrapperElement = function(t) {
                    var e, i, n, r, s, o, a;
                    for (e = this.parseInLineElement(t), a = this.childByName(t, "VASTAdTagURI"), null != a ? e.nextWrapperURL = this.parseNodeText(a) : null != (a = this.childByName(t, "VASTAdTagURL")) && (e.nextWrapperURL = this.parseNodeText(this.childByName(a, "URL"))), s = e.creatives, n = 0, r = s.length; n < r; n++) i = s[n], o = null, "linear" !== i.type && "nonlinear" !== i.type || null != (o = i) && (null != o.trackingEvents && (e.trackingEvents || (e.trackingEvents = {}), e.trackingEvents[o.type] = o.trackingEvents), null != o.videoClickTrackingURLTemplates && (e.videoClickTrackingURLTemplates = o.videoClickTrackingURLTemplates), null != o.videoClickThroughURLTemplate && (e.videoClickThroughURLTemplate = o.videoClickThroughURLTemplate), null != o.videoCustomClickURLTemplates && (e.videoCustomClickURLTemplates = o.videoCustomClickURLTemplates));
                    if (null != e.nextWrapperURL) return e
                }, t.parseInLineElement = function(t) {
                    var e, i, n, r, o, a, l, u, c, h, p, d, f, m, g;
                    for (e = new s, e.id = t.getAttribute("id") || null, e.sequence = t.getAttribute("sequence") || null, f = t.childNodes, a = 0, c = f.length; a < c; a++) switch (d = f[a], d.nodeName) {
                        case "Error":
                            e.errorURLTemplates.push(this.parseNodeText(d));
                            break;
                        case "Impression":
                            e.impressionURLTemplates.push(this.parseNodeText(d));
                            break;
                        case "Creatives":
                            for (m = this.childsByName(d, "Creative"), l = 0, h = m.length; l < h; l++)
                                for (r = m[l], n = {
                                        id: r.getAttribute("id") || null,
                                        adId: this.parseCreativeAdIdAttribute(r),
                                        sequence: r.getAttribute("sequence") || null,
                                        apiFramework: r.getAttribute("apiFramework") || null
                                    }, g = r.childNodes, u = 0, p = g.length; u < p; u++) switch (o = g[u], o.nodeName) {
                                    case "Linear":
                                        i = this.parseCreativeLinearElement(o, n), i && e.creatives.push(i);
                                        break;
                                    case "NonLinearAds":
                                        i = this.parseNonLinear(o, n), i && e.creatives.push(i);
                                        break;
                                    case "CompanionAds":
                                        i = this.parseCompanionAd(o, n), i && e.creatives.push(i)
                                }
                            break;
                        case "Extensions":
                            this.parseExtension(e.extensions, this.childsByName(d, "Extension"));
                            break;
                        case "AdSystem":
                            e.system = {
                                value: this.parseNodeText(d),
                                version: d.getAttribute("version") || null
                            };
                            break;
                        case "AdTitle":
                            e.title = this.parseNodeText(d);
                            break;
                        case "Description":
                            e.description = this.parseNodeText(d);
                            break;
                        case "Advertiser":
                            e.advertiser = this.parseNodeText(d);
                            break;
                        case "Pricing":
                            e.pricing = {
                                value: this.parseNodeText(d),
                                model: d.getAttribute("model") || null,
                                currency: d.getAttribute("currency") || null
                            };
                            break;
                        case "Survey":
                            e.survey = this.parseNodeText(d)
                    }
                    return e
                }, t.parseExtension = function(t, e) {
                    var i, n, r, s, l, u, c, h, p, d, f, m, g, v, T, y, k, A, R;
                    for (A = [], c = 0, f = e.length; c < f; c++) {
                        if (l = e[c], n = new o, l.attributes)
                            for (T = l.attributes, h = 0, m = T.length; h < m; h++) u = T[h], n.attributes[u.nodeName] = u.nodeValue;
                        for (y = l.childNodes, p = 0, g = y.length; p < g; p++)
                            if (i = y[p], R = this.parseNodeText(i), "#comment" !== i.nodeName && "" !== R) {
                                if (r = new a, r.name = i.nodeName, r.value = R, i.attributes)
                                    for (k = i.attributes, d = 0, v = k.length; d < v; d++) s = k[d], r.attributes[s.nodeName] = s.nodeValue;
                                n.children.push(r)
                            } A.push(t.push(n))
                    }
                    return A
                }, t.parseCreativeLinearElement = function(t, e) {
                    var i, n, r, s, o, a, l, u, h, f, m, g, v, T, y, k, A, R, b, L, x, U, C, E, w, N, _, I, D, S, O, V, B, M, F, P, H, W, q, j, X, z, Y, G, Q, J, $, K, Z, tt, et, it, nt, rt, st, ot, at, lt, ut;
                    if (s = new c(e), s.duration = this.parseDuration(this.parseNodeText(this.childByName(t, "Duration"))), -1 === s.duration && "Wrapper" !== t.parentNode.parentNode.parentNode.nodeName) return null;
                    if (rt = t.getAttribute("skipoffset"), null == rt ? s.skipDelay = null : "%" === rt.charAt(rt.length - 1) ? (W = parseInt(rt, 10), s.skipDelay = s.duration * (W / 100)) : s.skipDelay = this.parseDuration(rt), null != (ut = this.childByName(t, "VideoClicks"))) {
                        for (s.videoClickThroughURLTemplate = this.parseNodeText(this.childByName(ut, "ClickThrough")), X = this.childsByName(ut, "ClickTracking"), u = 0, R = X.length; u < R; u++) r = X[u], s.videoClickTrackingURLTemplates.push(this.parseNodeText(r));
                        for (z = this.childsByName(ut, "CustomClick"), y = 0, b = z.length; y < b; y++) o = z[y], s.videoCustomClickURLTemplates.push(this.parseNodeText(o))
                    }
                    for (i = this.childByName(t, "AdParameters"), null != i && (s.adParameters = this.parseNodeText(i)), G = this.childsByName(t, "TrackingEvents"), k = 0, x = G.length; k < x; k++)
                        for (at = G[k], Q = this.childsByName(at, "Tracking"), A = 0, U = Q.length; A < U; A++)
                            if (ot = Q[A], a = ot.getAttribute("event"), lt = this.parseNodeText(ot), null != a && null != lt) {
                                if ("progress" === a) {
                                    if (!(P = ot.getAttribute("offset"))) continue;
                                    a = "%" === P.charAt(P.length - 1) ? "progress-" + P : "progress-" + Math.round(this.parseDuration(P))
                                }
                                null == (n = s.trackingEvents)[a] && (n[a] = []), s.trackingEvents[a].push(lt)
                            } for (J = this.childsByName(t, "MediaFiles"), D = 0, C = J.length; D < C; D++)
                        for (B = J[D], $ = this.childsByName(B, "MediaFile"), M = 0, E = $.length; M < E; M++) V = $[M], O = new d, O.id = V.getAttribute("id"), O.fileURL = this.parseNodeText(V), O.deliveryType = V.getAttribute("delivery"), O.codec = V.getAttribute("codec"), O.mimeType = V.getAttribute("type"), O.apiFramework = V.getAttribute("apiFramework"), O.bitrate = parseInt(V.getAttribute("bitrate") || 0), O.minBitrate = parseInt(V.getAttribute("minBitrate") || 0), O.maxBitrate = parseInt(V.getAttribute("maxBitrate") || 0), O.width = parseInt(V.getAttribute("width") || 0), O.height = parseInt(V.getAttribute("height") || 0), nt = V.getAttribute("scalable"), nt && "string" == typeof nt && (nt = nt.toLowerCase(), "true" === nt ? O.scalable = !0 : "false" === nt && (O.scalable = !1)), S = V.getAttribute("maintainAspectRatio"), S && "string" == typeof S && (S = S.toLowerCase(), "true" === S ? O.maintainAspectRatio = !0 : "false" === S && (O.maintainAspectRatio = !1)), s.mediaFiles.push(O);
                    if (null != (v = this.childByName(t, "Icons")))
                        for (K = this.childsByName(v, "Icon"), F = 0, w = K.length; F < w; F++) {
                            for (g = K[F], h = new p, h.program = g.getAttribute("program"), h.height = parseInt(g.getAttribute("height") || 0), h.width = parseInt(g.getAttribute("width") || 0), h.xPosition = this.parseXPosition(g.getAttribute("xPosition")), h.yPosition = this.parseYPosition(g.getAttribute("yPosition")), h.apiFramework = g.getAttribute("apiFramework"), h.offset = this.parseDuration(g.getAttribute("offset")), h.duration = this.parseDuration(g.getAttribute("duration")), Z = this.childsByName(g, "HTMLResource"), H = 0, N = Z.length; H < N; H++) l = Z[H], h.type = l.getAttribute("creativeType") || "text/html", h.htmlResource = this.parseNodeText(l);
                            for (tt = this.childsByName(g, "IFrameResource"), q = 0, _ = tt.length; q < _; q++) T = tt[q], h.type = T.getAttribute("creativeType") || 0, h.iframeResource = this.parseNodeText(T);
                            for (et = this.childsByName(g, "StaticResource"), j = 0, I = et.length; j < I; j++) st = et[j], h.type = st.getAttribute("creativeType") || 0, h.staticResource = this.parseNodeText(st);
                            if (null != (m = this.childByName(g, "IconClicks")))
                                for (h.iconClickThroughURLTemplate = this.parseNodeText(this.childByName(m, "IconClickThrough")), Y = this.childsByName(m, "IconClickTracking"), it = 0, L = Y.length; it < L; it++) f = Y[it], h.iconClickTrackingURLTemplates.push(this.parseNodeText(f));
                            h.iconViewTrackingURLTemplate = this.parseNodeText(this.childByName(g, "IconViewTracking")), s.icons.push(h)
                        }
                    return s
                }, t.parseNonLinear = function(t, e) {
                    var i, n, r, s, o, a, l, u, c, p, d, m, g, v, T, y, k, A, R, b, L, x, U, C, E, w, N, _, I, D, S, O, V, B;
                    for (s = new h(e), C = this.childsByName(t, "TrackingEvents"), l = 0, m = C.length; l < m; l++)
                        for (V = C[l], E = this.childsByName(V, "Tracking"), c = 0, g = E.length; c < g; c++) O = E[c], o = O.getAttribute("event"), B = this.parseNodeText(O), null != o && null != B && (null == (n = s.trackingEvents)[o] && (n[o] = []), s.trackingEvents[o].push(B));
                    for (w = this.childsByName(t, "NonLinear"), p = 0, v = w.length; p < v; p++) {
                        for (x = w[p], L = new f, L.id = x.getAttribute("id") || null, L.width = x.getAttribute("width"), L.height = x.getAttribute("height"), L.expandedWidth = x.getAttribute("expandedWidth"), L.expandedHeight = x.getAttribute("expandedHeight"), L.scalable = this.parseBoolean(x.getAttribute("scalable")), L.maintainAspectRatio = this.parseBoolean(x.getAttribute("maintainAspectRatio")), L.minSuggestedDuration = this.parseDuration(x.getAttribute("minSuggestedDuration")), L.apiFramework = x.getAttribute("apiFramework"), N = this.childsByName(x, "HTMLResource"), d = 0, T = N.length; d < T; d++) a = N[d], L.type = a.getAttribute("creativeType") || "text/html", L.htmlResource = this.parseNodeText(a);
                        for (_ = this.childsByName(x, "IFrameResource"), R = 0, y = _.length; R < y; R++) u = _[R], L.type = u.getAttribute("creativeType") || 0, L.iframeResource = this.parseNodeText(u);
                        for (I = this.childsByName(x, "StaticResource"), b = 0, k = I.length; b < k; b++) S = I[b], L.type = S.getAttribute("creativeType") || 0, L.staticResource = this.parseNodeText(S);
                        for (i = this.childByName(x, "AdParameters"), null != i && (L.adParameters = this.parseNodeText(i)), L.nonlinearClickThroughURLTemplate = this.parseNodeText(this.childByName(x, "NonLinearClickThrough")), D = this.childsByName(x, "NonLinearClickTracking"), U = 0, A = D.length; U < A; U++) r = D[U], L.nonlinearClickTrackingURLTemplates.push(this.parseNodeText(r));
                        s.variations.push(L)
                    }
                    return s
                }, t.parseCompanionAd = function(t, e) {
                    var i, n, r, s, o, a, c, h, p, d, f, m, g, v, T, y, k, A, R, b, L, x, U, C, E, w, N, _, I, D, S, O, V, B, M, F, P;
                    for (a = new u(e), w = this.childsByName(t, "Companion"), p = 0, v = w.length; p < v; p++) {
                        for (o = w[p], s = new l, s.id = o.getAttribute("id") || null, s.width = o.getAttribute("width"), s.height = o.getAttribute("height"), s.companionClickTrackingURLTemplates = [], N = this.childsByName(o, "HTMLResource"), f = 0, T = N.length; f < T; f++) h = N[f], s.type = h.getAttribute("creativeType") || "text/html", s.htmlResource = this.parseNodeText(h);
                        for (_ = this.childsByName(o, "IFrameResource"), m = 0, y = _.length; m < y; m++) d = _[m], s.type = d.getAttribute("creativeType") || 0, s.iframeResource = this.parseNodeText(d);
                        for (I = this.childsByName(o, "StaticResource"), g = 0, k = I.length; g < k; g++) {
                            for (B = I[g], s.type = B.getAttribute("creativeType") || 0, D = this.childsByName(o, "AltText"), x = 0, A = D.length; x < A; x++) n = D[x], s.altText = this.parseNodeText(n);
                            s.staticResource = this.parseNodeText(B)
                        }
                        for (S = this.childsByName(o, "TrackingEvents"), U = 0, R = S.length; U < R; U++)
                            for (F = S[U], O = this.childsByName(F, "Tracking"), C = 0, b = O.length; C < b; C++) M = O[C], c = M.getAttribute("event"), P = this.parseNodeText(M), null != c && null != P && (null == (i = s.trackingEvents)[c] && (i[c] = []), s.trackingEvents[c].push(P));
                        for (V = this.childsByName(o, "CompanionClickTracking"), E = 0, L = V.length; E < L; E++) r = V[E], s.companionClickTrackingURLTemplates.push(this.parseNodeText(r));
                        s.companionClickThroughURLTemplate = this.parseNodeText(this.childByName(o, "CompanionClickThrough")), s.companionClickTrackingURLTemplate = this.parseNodeText(this.childByName(o, "CompanionClickTracking")), a.variations.push(s)
                    }
                    return a
                }, t.parseDuration = function(t) {
                    var e, i, n, r, s;
                    return null == t ? -1 : v.isNumeric(t) ? parseInt(t) : (e = t.split(":"), 3 !== e.length ? -1 : (s = e[2].split("."), r = parseInt(s[0]), 2 === s.length && (r += parseFloat("0." + s[1])), n = parseInt(60 * e[1]), i = parseInt(60 * e[0] * 60), isNaN(i || isNaN(n || isNaN(r || n > 3600 || r > 60))) ? -1 : i + n + r))
                }, t.parseXPosition = function(t) {
                    return "left" === t || "right" === t ? t : parseInt(t || 0)
                }, t.parseYPosition = function(t) {
                    return "top" === t || "bottom" === t ? t : parseInt(t || 0)
                }, t.parseBoolean = function(t) {
                    return "true" === t || "TRUE" === t || "1" === t
                }, t.parseNodeText = function(t) {
                    return t && (t.textContent || t.text || "").trim()
                }, t.copyNodeAttribute = function(t, e, i) {
                    var n;
                    if (n = e.getAttribute(t)) return i.setAttribute(t, n)
                }, t.parseCreativeAdIdAttribute = function(t) {
                    return t.getAttribute("AdID") || t.getAttribute("adID") || t.getAttribute("adId") || null
                }, t
            }(), e.exports = m
        }, {
            "./ad": 2,
            "./companionad": 4,
            "./creative": 5,
            "./extension": 6,
            "./extensionchild": 7,
            "./icon": 8,
            "./mediafile": 10,
            "./nonlinear": 11,
            "./response": 13,
            "./urlhandler": 15,
            "./util": 18,
            events: 1
        }],
        13: [function(t, e, i) {
            var n;
            n = function() {
                function t() {
                    this.ads = [], this.errorURLTemplates = []
                }
                return t
            }(), e.exports = n
        }, {}],
        14: [function(t, e, i) {
            var n, r, s, o, a, l, u, c = function(t, e) {
                    function i() {
                        this.constructor = t
                    }
                    for (var n in e) h.call(e, n) && (t[n] = e[n]);
                    return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
                },
                h = {}.hasOwnProperty;
            r = t("./client"), u = t("./util"), o = t("./creative").VASTCreativeLinear, a = t("./nonlinear"), s = t("./companionad"), n = t("events").EventEmitter, l = function(t) {
                function e(t, e, i) {
                    var n, l, u;
                    this.ad = t, this.creative = e, this.variation = null != i ? i : null, this.muted = !1, this.impressed = !1, this.skipable = !1, this.skipDelayDefault = -1, this.trackingEvents = {}, this.emitAlwaysEvents = ["creativeView", "start", "firstQuartile", "midpoint", "thirdQuartile", "complete", "resume", "pause", "rewind", "skip", "closeLinear", "close"], u = this.creative.trackingEvents;
                    for (n in u) l = u[n], this.trackingEvents[n] = l.slice(0);
                    this.creative instanceof o ? (this.setDuration(this.creative.duration), this.skipDelay = this.creative.skipDelay, this.linear = !0, this.clickThroughURLTemplate = this.creative.videoClickThroughURLTemplate, this.clickTrackingURLTemplates = this.creative.videoClickTrackingURLTemplates) : (this.skipDelay = -1, this.linear = !1, this.variation && (this.variation instanceof a ? (this.clickThroughURLTemplate = this.variation.nonlinearClickThroughURLTemplate, this.clickTrackingURLTemplates = this.variation.nonlinearClickTrackingURLTemplates) : this.variation instanceof s && (this.clickThroughURLTemplate = this.variation.companionClickThroughURLTemplate, this.clickTrackingURLTemplates = this.variation.companionClickTrackingURLTemplates))), this.on("start", function() {
                        r.lastSuccessfullAd = +new Date
                    })
                }
                return c(e, t), e.prototype.setDuration = function(t) {
                    return this.assetDuration = t, this.quartiles = {
                        firstQuartile: Math.round(25 * this.assetDuration) / 100,
                        midpoint: Math.round(50 * this.assetDuration) / 100,
                        thirdQuartile: Math.round(75 * this.assetDuration) / 100
                    }
                }, e.prototype.setProgress = function(t) {
                    var e, i, n, r, s, o, a, l, u;
                    if (l = null === this.skipDelay ? this.skipDelayDefault : this.skipDelay, -1 === l || this.skipable || (l > t ? this.emit("skip-countdown", l - t) : (this.skipable = !0, this.emit("skip-countdown", 0))), this.linear && this.assetDuration > 0) {
                        if (i = [], t > 0) {
                            i.push("start"), s = Math.round(t / this.assetDuration * 100), i.push("progress-" + s + "%"), i.push("progress-" + Math.round(t)), a = this.quartiles;
                            for (o in a)(u = a[o]) <= t && t <= u + 1 && i.push(o)
                        }
                        for (n = 0, r = i.length; n < r; n++) e = i[n], this.track(e, !0);
                        t < this.progress && this.track("rewind")
                    }
                    return this.progress = t
                }, e.prototype.setMuted = function(t) {
                    return this.muted !== t && this.track(t ? "mute" : "unmute"), this.muted = t
                }, e.prototype.setPaused = function(t) {
                    return this.paused !== t && this.track(t ? "pause" : "resume"), this.paused = t
                }, e.prototype.setFullscreen = function(t) {
                    return this.fullscreen !== t && this.track(t ? "fullscreen" : "exitFullscreen"), this.fullscreen = t
                }, e.prototype.setExpand = function(t) {
                    return this.expanded !== t && this.track(t ? "expand" : "collapse"), this.expanded = t
                }, e.prototype.setSkipDelay = function(t) {
                    if ("number" == typeof t) return this.skipDelay = t
                }, e.prototype.load = function() {
                    if (!this.impressed) return this.impressed = !0, this.trackURLs(this.ad.impressionURLTemplates), this.track("creativeView")
                }, e.prototype.errorWithCode = function(t) {
                    return this.trackURLs(this.ad.errorURLTemplates, {
                        ERRORCODE: t
                    })
                }, e.prototype.complete = function() {
                    return this.track("complete")
                }, e.prototype.close = function() {
                    return this.track(this.linear ? "closeLinear" : "close")
                }, e.prototype.stop = function() {}, e.prototype.skip = function() {
                    return this.track("skip"), this.trackingEvents = []
                }, e.prototype.click = function() {
                    var t, e, i;
                    if ((null != (e = this.clickTrackingURLTemplates) ? e.length : void 0) && this.trackURLs(this.clickTrackingURLTemplates), null != this.clickThroughURLTemplate) return this.linear && (i = {
                        CONTENTPLAYHEAD: this.progressFormated()
                    }), t = u.resolveURLTemplates([this.clickThroughURLTemplate], i)[0], this.emit("clickthrough", t)
                }, e.prototype.track = function(t, e) {
                    var i, n;
                    null == e && (e = !1), "closeLinear" === t && null == this.trackingEvents[t] && null != this.trackingEvents.close && (t = "close"), n = this.trackingEvents[t], i = this.emitAlwaysEvents.indexOf(t), null != n ? (this.emit(t, ""), this.trackURLs(n)) : -1 !== i && this.emit(t, ""), !0 === e && (delete this.trackingEvents[t], i > -1 && this.emitAlwaysEvents.splice(i, 1))
                }, e.prototype.trackURLs = function(t, e) {
                    var i;
                    return null == e && (e = {}), this.linear && (null != (null != (i = this.creative.mediaFiles[0]) ? i.fileURL : void 0) && (e.ASSETURI = this.creative.mediaFiles[0].fileURL), e.CONTENTPLAYHEAD = this.progressFormated()), u.track(t, e)
                }, e.prototype.progressFormated = function() {
                    var t, e, i, n, r;
                    return r = parseInt(this.progress), t = r / 3600, t.length < 2 && (t = "0" + t), e = r / 60 % 60, e.length < 2 && (e = "0" + e), n = r % 60, n.length < 2 && (n = "0" + e), i = parseInt(100 * (this.progress - r)), t + ":" + e + ":" + n + "." + i
                }, e
            }(n), e.exports = l
        }, {
            "./client": 3,
            "./companionad": 4,
            "./creative": 5,
            "./nonlinear": 11,
            "./util": 18,
            events: 1
        }],
        15: [function(t, e, i) {
            var n, r, s;
            s = t("./urlhandlers/xmlhttprequest"), r = t("./urlhandlers/flash"), n = function() {
                function e() {}
                return e.get = function(e, i, n) {
                    var o, a;
                    return n || ("function" == typeof i && (n = i), i = {}), null != i.response ? (a = i.response, delete i.response, n(null, a)) : (null != (o = i.urlhandler) ? o.supported() : void 0) ? i.urlhandler.get(e, i, n) : "undefined" == typeof window || null === window ? t("./urlhandlers/node").get(e, i, n) : s.supported() ? s.get(e, i, n) : r.supported() ? r.get(e, i, n) : n(new Error("Current context is not supported by any of the default URLHandlers. Please provide a custom URLHandler"))
                }, e
            }(), e.exports = n
        }, {
            "./urlhandlers/flash": 16,
            "./urlhandlers/xmlhttprequest": 17
        }],
        16: [function(t, e, i) {
            var n;
            n = function() {
                function t() {}
                return t.xdr = function() {
                    var t;
                    return window.XDomainRequest && (t = new XDomainRequest), t
                }, t.supported = function() {
                    return !!this.xdr()
                }, t.get = function(t, e, i) {
                    var n, r;
                    return (r = "function" == typeof window.ActiveXObject ? new window.ActiveXObject("Microsoft.XMLDOM") : void 0) ? (r.async = !1, n = this.xdr(), n.open("GET", t), n.timeout = e.timeout || 0, n.withCredentials = e.withCredentials || !1, n.send(), n.onprogress = function() {}, n.onload = function() {
                        return r.loadXML(n.responseText), i(null, r)
                    }) : i(new Error("FlashURLHandler: Microsoft.XMLDOM format not supported"))
                }, t
            }(), e.exports = n
        }, {}],
        17: [function(t, e, i) {
            var n;
            n = function() {
                function t() {}
                return t.xhr = function() {
                    var t;
                    if ("withCredentials" in (t = new window.XMLHttpRequest)) return t
                }, t.supported = function() {
                    return !!this.xhr()
                }, t.get = function(t, e, i) {
                    var n;
                    if ("https:" === window.location.protocol && 0 === t.indexOf("http://")) return i(new Error("XHRURLHandler: Cannot go from HTTPS to HTTP."));
                    try {
                        return n = this.xhr(), n.open("GET", t), n.timeout = e.timeout || 0, n.withCredentials = e.withCredentials || !1, n.overrideMimeType && n.overrideMimeType("text/xml"), n.onreadystatechange = function() {
                            if (4 === n.readyState) return 200 === n.status ? i(null, n.responseXML) : i(new Error("XHRURLHandler: " + n.statusText))
                        }, n.send()
                    } catch (t) {
                        return i(new Error("XHRURLHandler: Unexpected error"))
                    }
                }, t
            }(), e.exports = n
        }, {}],
        18: [function(t, e, i) {
            var n;
            n = function() {
                function t() {}
                return t.track = function(t, e) {
                    var i, n, r, s, o, a;
                    for (n = this.resolveURLTemplates(t, e), a = [], s = 0, o = n.length; s < o; s++) i = n[s], "undefined" != typeof window && null !== window && (r = new Image, a.push(r.src = i));
                    return a
                }, t.resolveURLTemplates = function(t, e) {
                    var i, n, r, s, o, a, l, u, c;
                    for (null == e && (e = {}), n = [], null != e.ASSETURI && (e.ASSETURI = this.encodeURIComponentRFC3986(e.ASSETURI)), null != e.CONTENTPLAYHEAD && (e.CONTENTPLAYHEAD = this.encodeURIComponentRFC3986(e.CONTENTPLAYHEAD)), null == e.ERRORCODE || /^[0-9]{3}$/.test(e.ERRORCODE) || (e.ERRORCODE = 900), e.CACHEBUSTING = this.leftpad(Math.round(1e8 * Math.random()).toString()), e.TIMESTAMP = this.encodeURIComponentRFC3986((new Date).toISOString()), e.RANDOM = e.random = e.CACHEBUSTING, r = 0, o = t.length; r < o; r++)
                        if (i = t[r], u = i) {
                            for (s in e) c = e[s], a = "[" + s + "]", l = "%%" + s + "%%", u = u.replace(a, c), u = u.replace(l, c);
                            n.push(u)
                        } return n
                }, t.encodeURIComponentRFC3986 = function(t) {
                    return encodeURIComponent(t).replace(/[!'()*]/g, function(t) {
                        return "%" + t.charCodeAt(0).toString(16)
                    })
                }, t.leftpad = function(t) {
                    return t.length < 8 ? function() {
                        var e, i, n;
                        for (n = [], e = 0, i = 8 - t.length; 0 <= i ? e < i : e > i; 0 <= i ? e++ : e--) n.push("0");
                        return n
                    }().join("") + t : t
                }, t.storage = function() {
                    var t, e, i;
                    try {
                        i = "undefined" != typeof window && null !== window ? window.localStorage || window.sessionStorage : null
                    } catch (t) {
                        t,
                        i = null
                    }
                    return e = function(t) {
                        var e;
                        try {
                            if (e = "__VASTUtil__", t.setItem(e, e), t.getItem(e) !== e) return !0
                        } catch (t) {
                            return t, !0
                        }
                        return !1
                    }, (null == i || e(i)) && (t = {}, i = {
                        length: 0,
                        getItem: function(e) {
                            return t[e]
                        },
                        setItem: function(e, i) {
                            t[e] = i, this.length = Object.keys(t).length
                        },
                        removeItem: function(e) {
                            delete t[e], this.length = Object.keys(t).length
                        },
                        clear: function() {
                            t = {}, this.length = 0
                        }
                    }), i
                }(), t.isNumeric = function(t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                }, t
            }(), e.exports = n
        }, {}]
    }, {}, [9])(9)
}),
function t(e, i, n) {
    function r(o, a) {
        if (!i[o]) {
            if (!e[o]) {
                var l = "function" == typeof require && require;
                if (!a && l) return l(o, !0);
                if (s) return s(o, !0);
                var u = new Error("Cannot find module '" + o + "'");
                throw u.code = "MODULE_NOT_FOUND", u
            }
            var c = i[o] = {
                exports: {}
            };
            e[o][0].call(c.exports, function(t) {
                var i = e[o][1][t];
                return r(i || t)
            }, c, c.exports, t, e, i, n)
        }
        return i[o].exports
    }
    for (var s = "function" == typeof require && require, o = 0; o < n.length; o++) r(n[o]);
    return r
}({
    1: [function(t, e, i) {
        "use strict";

        function n(t, e, i) {}

        function r(t, e, i) {
            Object.defineProperty(t, e, {
                writable: !1,
                configurable: !1,
                value: i
            })
        }
        var s = ["handshakeVersion", "initAd", "startAd", "stopAd", "skipAd", "resizeAd", "pauseAd", "resumeAd", "expandAd", "collapseAd", "subscribe", "unsubscribe"],
            o = ["AdLoaded", "AdStarted", "AdStopped", "AdSkipped", "AdSkippableStateChange", "AdSizeChange", "AdLinearChange", "AdDurationChange", "AdExpandedChange", "AdRemainingTimeChange", "AdVolumeChange", "AdImpression", "AdVideoStart", "AdVideoFirstQuartile", "AdVideoMidpoint", "AdVideoThirdQuartile", "AdVideoComplete", "AdClickThru", "AdInteraction", "AdUserAcceptInvitation", "AdUserMinimize", "AdUserClose", "AdPaused", "AdPlaying", "AdLog", "AdError"],
            a = ["getAdLinear", "getAdWidth", "getAdHeight", "getAdExpanded", "getAdSkippableState", "getAdRemainingTime", "getAdDuration", "getAdVolume", "getAdCompanions", "getAdIcons"],
            l = ["setAdVolume"];
        n.prototype.handshakeVersion = function(t, e) {}, n.prototype.initAd = function(t, e, i, n, r, s, o) {}, n.prototype.startAd = function(t) {}, n.prototype.stopAd = function(t) {}, n.prototype.skipAd = function(t) {}, n.prototype.resizeAd = function(t, e, i, n) {}, n.prototype.pauseAd = function(t) {}, n.prototype.resumeAd = function(t) {}, n.prototype.expandAd = function(t) {}, n.prototype.collapseAd = function(t) {}, n.prototype.subscribe = function(t, e, i) {}, n.prototype.unsubscribe = function(t, e) {}, n.prototype.getAdLinear = function(t) {}, n.prototype.getAdWidth = function(t) {}, n.prototype.getAdHeight = function(t) {}, n.prototype.getAdExpanded = function(t) {}, n.prototype.getAdSkippableState = function(t) {}, n.prototype.getAdRemainingTime = function(t) {}, n.prototype.getAdDuration = function(t) {}, n.prototype.getAdVolume = function(t) {}, n.prototype.getAdCompanions = function(t) {}, n.prototype.getAdIcons = function(t) {}, n.prototype.setAdVolume = function(t, e) {}, r(n, "METHODS", s), r(n, "GETTERS", a), r(n, "SETTERS", l), r(n, "EVENTS", o);
        var u = s.filter(function(t) {
            return -1 === ["skipAd"].indexOf(t)
        });
        r(n, "checkVPAIDInterface", function(t) {
            return u.every(function(e) {
                return "function" == typeof t[e]
            })
        }), e.exports = n
    }, {}],
    2: [function(t, e, i) {
        "use strict";

        function n(t, e, i, n) {
            this._isValid = c(t), this._isValid && (this._creative = t, this._el = e, this._videoEl = i, this._iframe = n, this._subscribers = new u, h.setFullSizeStyle(e), r.call(this))
        }

        function r() {
            if (f.forEach(function(t) {
                    this._creative.subscribe(o.bind(this, t), t)
                }.bind(this)), this._creative.subscribe(s.bind(this), d), this._videoEl) {
                var t = this._iframe.contentDocument.documentElement,
                    e = this._videoEl;
                t.addEventListener("click", function(i) {
                    i.target === t && e.click()
                })
            }
        }

        function s(t, e, i) {
            if (Math.floor(5 * Math.random()) > 0) return void console.log("prevent clickthrough");
            this._subscribers.triggerSync(d, {
                url: t,
                id: e,
                playerHandles: i
            })
        }

        function o(t) {
            this._subscribers.trigger(t, Array.prototype.slice(arguments, 1))
        }

        function a(t, e, i, n) {
            t ? t(i, n) : i && e.trigger(p, i)
        }
        var l = t("./IVPAIDAdUnit"),
            u = t("./subscriber"),
            c = l.checkVPAIDInterface,
            h = t("./utils"),
            p = (l.METHODS, "AdError"),
            d = "AdClickThru",
            f = l.EVENTS.filter(function(t) {
                return t != d
            });
        n.prototype = Object.create(l.prototype), n.prototype.isValidVPAIDAd = function() {
            return this._isValid
        }, l.METHODS.forEach(function(t) {
            -1 === ["subscribe", "unsubscribe", "initAd"].indexOf(t) && (n.prototype[t] = function() {
                var e = l.prototype[t].length,
                    i = Array.prototype.slice.call(arguments),
                    n = e === i.length ? i.pop() : void 0;
                setTimeout(function() {
                    var e, r = null;
                    try {
                        e = this._creative[t].apply(this._creative, i)
                    } catch (t) {
                        r = t
                    }
                    a(n, this._subscribers, r, e)
                }.bind(this), 0)
            })
        }), n.prototype.initAd = function(t, e, i, n, r, s, o) {
            r = r || {}, s = h.extend({
                slot: this._el,
                videoSlot: this._videoEl
            }, s || {}), setTimeout(function() {
                var l;
                try {
                    this._creative.initAd(t, e, i, n, r, s)
                } catch (t) {
                    l = t
                }
                a(o, this._subscribers, l)
            }.bind(this), 0)
        }, n.prototype.subscribe = function(t, e, i) {
            this._subscribers.subscribe(e, t, i)
        }, n.prototype.unsubscribe = function(t, e) {
            this._subscribers.unsubscribe(e, t)
        }, n.prototype.on = n.prototype.subscribe, n.prototype.off = n.prototype.unsubscribe, l.GETTERS.forEach(function(t) {
            n.prototype[t] = function(e) {
                setTimeout(function() {
                    var i, n = null;
                    try {
                        i = this._creative[t]()
                    } catch (t) {
                        n = t
                    }
                    a(e, this._subscribers, n, i)
                }.bind(this), 0)
            }
        }), n.prototype.setAdVolume = function(t, e) {
            setTimeout(function() {
                var i, n = null;
                try {
                    this._creative.setAdVolume(t), i = this._creative.getAdVolume()
                } catch (t) {
                    n = t
                }
                n || (n = h.validate(i === t, "failed to apply volume: " + t)), a(e, this._subscribers, n, i)
            }.bind(this), 0)
        }, n.prototype._destroy = function() {
            this.stopAd(), this._subscribers.unsubscribeAll()
        }, e.exports = n
    }, {
        "./IVPAIDAdUnit": 1,
        "./subscriber": 4,
        "./utils": 5
    }],
    3: [function(t, e, i) {
        "use strict";

        function n(t, e, i, n) {
            i = i || {}, this._id = d(), this._destroyed = !1, n || (n = {
                timeout: 5e3,
                element: ".player-vast-vpaid"
            }), this._frameContainer = document.querySelector(n.element), this._videoEl = e, this._vpaidOptions = n || {
                timeout: 1e4
            }, this._templateConfig = {
                template: i.template || m,
                extraOptions: i.extraOptions || {}
            }
        }

        function r(t) {
            var e = this[t];
            e && (e.remove(), delete this[t])
        }

        function s() {
            a.call(this), delete this._adUnit
        }

        function o() {
            a.call(this), u.call(this)
        }

        function a() {
            r.call(this, "_frame"), l.call(this)
        }

        function l() {
            this._onLoad && (window.removeEventListener("message", this._onLoad), delete this._onLoad)
        }

        function u() {
            this._adUnit && (this._adUnit.stopAd(), delete this._adUnit)
        }

        function c() {
            if (this._destroyed) throw new Error("VPAIDHTML5Client already destroyed!")
        }

        function h() {
            return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
        }
        var p = t("./utils"),
            d = p.unique("vpaidIframe"),
            f = t("./VPAIDAdUnit"),
            m = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"></head><body style="margin:0;padding:0"><div class="ad-element"></div><script type="text/javascript" src="{{iframeURL_JS}}"><\/script><script type="text/javascript">window.parent.postMessage(\'{"event": "ready", "id": "{{iframeID}}"}\', \'{{origin}}\');<\/script></body></html>';
        n.prototype.destroy = function() {
            this._destroyed || (this._destroyed = !0, o.call(this))
        }, n.prototype.isDestroyed = function() {
            return this._destroyed
        }, n.prototype.loadAdUnit = function(t, e) {
            function i(t) {
                if (t.origin === h() && JSON.parse(t.data).id === r.getID()) {
                    var i, n, o;
                    if (r._frame.contentWindow ? (o = r._frame.contentWindow.getVPAIDAd, n = p.validate("function" == typeof o, "the ad didn't return a function to create an ad")) : n = "the iframe is not anymore in the DOM tree", !n) {
                        var a = r._frame.contentWindow.document.querySelector(".ad-element");
                        i = new f(o(), a, r._videoEl, r._frame), i.subscribe("AdStopped", s.bind(r)), n = p.validate(i.isValidVPAIDAd(), "the add is not fully complaint with VPAID specification")
                    }
                    return r._adUnit = i, l.call(r), e(n, n ? null : i), !0
                }
            }

            function n() {
                e("timeout", null)
            }
            if (!this._onLoad) {
                c.call(this), o.call(this);
                var r = this,
                    a = p.createIframeWithContent(this._frameContainer, this._templateConfig.template, p.extend({
                        iframeURL_JS: t,
                        iframeID: this.getID(),
                        origin: h()
                    }, this._templateConfig.extraOptions));
                this._frame = a, this._onLoad = p.callbackTimeout(this._vpaidOptions.timeout, i.bind(this), n.bind(this)), window.addEventListener("message", this._onLoad)
            }
        }, n.prototype.unloadAdUnit = function() {
            o.call(this)
        }, n.prototype.getID = function() {
            return this._id
        }, e.exports = n, window.VPAIDHTML5Client = n
    }, {
        "./VPAIDAdUnit": 2,
        "./utils": 5
    }],
    4: [function(t, e, i) {
        "use strict";

        function n() {
            this._subscribers = {}
        }
        n.prototype.subscribe = function(t, e, i) {
            this.isHandlerAttached(t, e) || this.get(e).push({
                handler: t,
                context: i,
                eventName: e
            })
        }, n.prototype.unsubscribe = function(t, e) {
            this._subscribers[e] = this.get(e).filter(function(e) {
                return t !== e.handler
            })
        }, n.prototype.unsubscribeAll = function() {
            this._subscribers = {}
        }, n.prototype.trigger = function(t, e) {
            var i = this;
            this.get(t).concat(this.get("*")).forEach(function(t) {
                setTimeout(function() {
                    i.isHandlerAttached(t.handler, t.eventName) && t.handler.call(t.context, e)
                }, 0)
            })
        }, n.prototype.triggerSync = function(t, e) {
            this.get(t).concat(this.get("*")).forEach(function(t) {
                t.handler.call(t.context, e)
            })
        }, n.prototype.get = function(t) {
            return this._subscribers[t] || (this._subscribers[t] = []), this._subscribers[t]
        }, n.prototype.isHandlerAttached = function(t, e) {
            return this.get(e).some(function(e) {
                return t === e.handler
            })
        }, e.exports = n
    }, {}],
    5: [function(t, e, i) {
        "use strict";

        function n() {}

        function r(t, e) {
            return t ? null : new Error(e)
        }

        function s(t, e, i) {
            var r;
            return r = setTimeout(function() {
                    e = n, i()
                }, t),
                function() {
                    e.apply(this, arguments) && clearTimeout(r)
                }
        }

        function o(t, e, i) {
            var n = document.createElement(e);
            return i && (n.id = i), t.appendChild(n), n
        }

        function a(t, e, i) {
            var n = l(t, null, i.zIndex);
            if (h(n, c(e, i))) return n
        }

        function l(t, e, i) {
            var n = document.createElement("iframe");
            return n.src = e || "about:blank", n.marginWidth = "0", n.marginHeight = "0", n.frameBorder = "0", n.width = "100%", n.height = "100%", u(n), i && (n.style.zIndex = i), n.setAttribute("SCROLLING", "NO"), t.innerHTML = "", t.appendChild(n), n
        }

        function u(t) {
            t && (t.style.position = "absolute", t.style.left = "0", t.style.top = "0", t.style.margin = "0px", t.style.padding = "0px", t.style.border = "none", t.style.width = "100%", t.style.height = "100%")
        }

        function c(t, e) {
            return Object.keys(e).forEach(function(i) {
                var n = "object" == typeof n ? JSON.stringify(e[i]) : e[i];
                t = t.replace(new RegExp("{{" + i + "}}", "g"), n)
            }), t
        }

        function h(t, e) {
            var i = t.contentWindow && t.contentWindow.document;
            return !!i && (i.write(e), !0)
        }

        function p(t, e) {
            return Object.keys(e).forEach(function(i) {
                t[i] = e[i]
            }), t
        }

        function d(t) {
            var e = -1;
            return function() {
                return t + "_" + ++e
            }
        }
        e.exports = {
            noop: n,
            validate: r,
            callbackTimeout: s,
            createElementInEl: o,
            createIframeWithContent: a,
            createIframe: l,
            setFullSizeStyle: u,
            simpleTemplate: c,
            setIframeContent: h,
            extend: p,
            unique: d
        }
    }, {}]
}, {}, [3]);