!(function (n, e) {
    'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = e())
        : 'function' == typeof define && define.amd
        ? define(e)
        : (n.nprogress = e());
})(this, function () {
    var n,
        e,
        t = { version: '0.2.0' },
        r = (t.settings = {
            minimum: 0.08,
            easing: 'linear',
            positionUsing: '',
            speed: 200,
            trickle: !0,
            trickleSpeed: 200,
            showSpinner: !0,
            barSelector: '[role="bar"]',
            spinnerSelector: '[role="spinner"]',
            parent: 'body',
            template:
                '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
        });
    function i(n, e, t) {
        return n < e ? e : n > t ? t : n;
    }
    function s(n) {
        return 100 * (-1 + n);
    }
    (t.configure = function (n) {
        var e, t;
        for (e in n) void 0 !== (t = n[e]) && n.hasOwnProperty(e) && (r[e] = t);
        return this;
    }),
        (t.status = null),
        (t.set = function (n) {
            var e = t.isStarted();
            (n = i(n, r.minimum, 1)), (t.status = 1 === n ? null : n);
            var u = t.render(!e),
                c = u.querySelector(r.barSelector),
                l = r.speed,
                d = r.easing;
            return (
                o(function (e) {
                    '' === r.positionUsing && (r.positionUsing = t.getPositioningCSS()),
                        a(
                            c,
                            (function (n, e, t) {
                                var i;
                                return (
                                    ((i =
                                        'translate3d' === r.positionUsing
                                            ? { transform: 'translate3d(' + s(n) + '%,0,0)' }
                                            : 'translate' === r.positionUsing
                                            ? { transform: 'translate(' + s(n) + '%,0)' }
                                            : { 'margin-left': s(n) + '%' }).transition =
                                        'all ' + e + 'ms ' + t),
                                    i
                                );
                            })(n, l, d)
                        ),
                        1 === n
                            ? (a(u, { transition: 'none', opacity: 1 }),
                              setTimeout(function () {
                                  a(u, { transition: 'all ' + l + 'ms linear', opacity: 0 }),
                                      setTimeout(function () {
                                          t.remove(), e();
                                      }, l);
                              }, l))
                            : setTimeout(e, l);
                }),
                this
            );
        }),
        (t.isStarted = function () {
            return 'number' == typeof t.status;
        }),
        (t.start = function () {
            t.status || t.set(0);
            var n = function () {
                setTimeout(function () {
                    t.status && (t.trickle(), n());
                }, r.trickleSpeed);
            };
            return r.trickle && n(), this;
        }),
        (t.done = function (n) {
            return n || t.status ? t.inc(0.3 + 0.5 * Math.random()).set(1) : this;
        }),
        (t.inc = function (n) {
            var e = t.status;
            return e
                ? e > 1
                    ? void 0
                    : ('number' != typeof n &&
                          (n =
                              e >= 0 && e < 0.2
                                  ? 0.1
                                  : e >= 0.2 && e < 0.5
                                  ? 0.04
                                  : e >= 0.5 && e < 0.8
                                  ? 0.02
                                  : e >= 0.8 && e < 0.99
                                  ? 0.005
                                  : 0),
                      (e = i(e + n, 0, 0.994)),
                      t.set(e))
                : t.start();
        }),
        (t.trickle = function () {
            return t.inc();
        }),
        (n = 0),
        (e = 0),
        (t.promise = function (r) {
            return r && 'resolved' !== r.state()
                ? (0 === e && t.start(),
                  n++,
                  e++,
                  r.always(function () {
                      0 == --e ? ((n = 0), t.done()) : t.set((n - e) / n);
                  }),
                  this)
                : this;
        }),
        (t.render = function (n) {
            if (t.isRendered()) return document.getElementById('nprogress');
            c(document.documentElement, 'nprogress-busy');
            var e = document.createElement('div');
            (e.id = 'nprogress'), (e.innerHTML = r.template);
            var i,
                o = e.querySelector(r.barSelector),
                u = n ? '-100' : s(t.status || 0),
                l = document.querySelector(r.parent);
            return (
                a(o, {
                    transition: 'all 0 linear',
                    transform: 'translate3d(' + u + '%,0,0)',
                }),
                r.showSpinner || ((i = e.querySelector(r.spinnerSelector)) && f(i)),
                l != document.body && c(l, 'nprogress-custom-parent'),
                l.appendChild(e),
                e
            );
        }),
        (t.remove = function () {
            l(document.documentElement, 'nprogress-busy'),
                l(document.querySelector(r.parent), 'nprogress-custom-parent');
            var n = document.getElementById('nprogress');
            n && f(n);
        }),
        (t.isRendered = function () {
            return !!document.getElementById('nprogress');
        }),
        (t.getPositioningCSS = function () {
            var n = document.body.style,
                e =
                    'WebkitTransform' in n
                        ? 'Webkit'
                        : 'MozTransform' in n
                        ? 'Moz'
                        : 'msTransform' in n
                        ? 'ms'
                        : 'OTransform' in n
                        ? 'O'
                        : '';
            return e + 'Perspective' in n
                ? 'translate3d'
                : e + 'Transform' in n
                ? 'translate'
                : 'margin';
        });
    var o = (function () {
            var n = [];
            function e() {
                var t = n.shift();
                t && t(e);
            }
            return function (t) {
                n.push(t), 1 == n.length && e();
            };
        })(),
        a = (function () {
            var n = ['Webkit', 'O', 'Moz', 'ms'],
                e = {};
            function t(t, r, i) {
                var s;
                (s = (s = r).replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function (n, e) {
                    return e.toUpperCase();
                })),
                    (r =
                        e[s] ||
                        (e[s] = (function (e) {
                            var t = document.body.style;
                            if (e in t) return e;
                            for (
                                var r, i = n.length, s = e.charAt(0).toUpperCase() + e.slice(1);
                                i--;

                            )
                                if ((r = n[i] + s) in t) return r;
                            return e;
                        })(s))),
                    (t.style[r] = i);
            }
            return function (n, e) {
                var r,
                    i,
                    s = arguments;
                if (2 == s.length)
                    for (r in e) void 0 !== (i = e[r]) && e.hasOwnProperty(r) && t(n, r, i);
                else t(n, s[1], s[2]);
            };
        })();
    function u(n, e) {
        return ('string' == typeof n ? n : d(n)).indexOf(' ' + e + ' ') >= 0;
    }
    function c(n, e) {
        var t = d(n),
            r = t + e;
        u(t, e) || (n.className = r.substring(1));
    }
    function l(n, e) {
        var t,
            r = d(n);
        u(n, e) &&
            ((t = r.replace(' ' + e + ' ', ' ')), (n.className = t.substring(1, t.length - 1)));
    }
    function d(n) {
        return (' ' + ((n && n.className) || '') + ' ').replace(/\s+/gi, ' ');
    }
    function f(n) {
        n && n.parentNode && n.parentNode.removeChild(n);
    }
    return t;
});
//# sourceMappingURL=nprogress.umd.js.map
