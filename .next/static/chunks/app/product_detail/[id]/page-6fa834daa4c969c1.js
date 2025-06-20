(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [404],
  {
    7512: (e, t, n) => {
      'use strict';
      n.d(t, { default: () => i });
      var r = n(95155),
        s = n(12115);
      let i = (e) => {
        let { product: t } = e,
          [n, i] = (0, s.useState)(''),
          o = async () => {
            let e = prompt('Please enter your WhatsApp number for inquiry (e.g., +1234567890):');
            if (!e) return void alert('Phone number is required to send the inquiry.');
            if (!/^\+\d{10,15}$/.test(e))
              return void alert(
                'Please enter a valid phone number starting with "+" followed by 10-15 digits.'
              );
            i(e);
            let n =
              'Product Inquiry:\n\n' +
              'From: '.concat(e, '\n') +
              'Product Name: '.concat(t.title, '\n') +
              'Metal Type: '.concat(t.metal, '\n') +
              'Purity (Karat): '.concat(t.purity, '\n') +
              'Gross Weight (g): '.concat(t.grossWeight, '\n') +
              'Product Image URL: '.concat(t.mainImage);
            try {
              let e = await fetch('/api/send-whatsapp', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ to: '+919429439061', body: n }),
                }),
                t = await e.json();
              t.success
                ? alert('Message sent successfully via WhatsApp!')
                : alert('Failed to send message: ' + t.message);
            } catch (e) {
              console.error('Error sending  message:', e),
                alert('An error occurred while sending the message.');
            }
          };
        return (0, r.jsxs)('button', {
          onClick: o,
          className: 'more-info-btn-sm',
          children: [
            (0, r.jsx)('span', { children: 'More Info' }),
            (0, r.jsx)('i', { className: 'bi bi-info-circle ms-1' }),
          ],
        });
      };
    },
    11518: (e, t, n) => {
      'use strict';
      e.exports = n(82269).style;
    },
    12714: (e, t, n) => {
      Promise.resolve().then(n.t.bind(n, 6874, 23)),
        Promise.resolve().then(n.t.bind(n, 33063, 23)),
        Promise.resolve().then(n.bind(n, 60902)),
        Promise.resolve().then(n.bind(n, 68136)),
        Promise.resolve().then(n.bind(n, 92809)),
        Promise.resolve().then(n.bind(n, 11846)),
        Promise.resolve().then(n.bind(n, 28268)),
        Promise.resolve().then(n.bind(n, 48651)),
        Promise.resolve().then(n.bind(n, 73299)),
        Promise.resolve().then(n.bind(n, 7512)),
        Promise.resolve().then(n.bind(n, 87365)),
        Promise.resolve().then(n.t.bind(n, 68334, 23)),
        Promise.resolve().then(n.bind(n, 59717));
    },
    25731: (e, t, n) => {
      'use strict';
      n.d(t, { Ay: () => a, C1: () => s, uu: () => o });
      var r = n(23464);
      let s = 'https://skalaapi.anaxistech.com',
        i = r.A.create({ baseURL: s, headers: { 'Content-Type': 'application/json' } }),
        o = async (e) => {
          try {
            return (await i.post('/api/sendappointment', e)).data;
          } catch (e) {
            throw (console.error('Error sending appointment request:', e), e);
          }
        },
        a = i;
    },
    28268: (e, t, n) => {
      'use strict';
      n.r(t), n.d(t, { default: () => r });
      let r = {
        src: '/_next/static/media/collections.729309bd.png',
        height: 600,
        width: 1440,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAALVBMVEXVzce6lm7y9Pri3d7e187LyLrZ09Xq6ezYx7PIrJHt5+S/oH65rZCLbkvHtqVqPclcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPgYWXlYGFmY2DgZWTkZGBgY2LgY+Rm4WJmZwIABu0AgD6sn3sAAAAASUVORK5CYII=',
        blurWidth: 8,
        blurHeight: 3,
      };
    },
    48651: (e, t, n) => {
      'use strict';
      n.r(t), n.d(t, { default: () => r });
      let r = {
        src: '/_next/static/media/dark-brown-colour-flower-pattern-background-abstract-banner-multipurpose-design 1.c28d1eb3.png',
        height: 427,
        width: 1440,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAFVBMVEUYAAFsAwsMAACDBxFcAQg7AQM8AAN0TnFBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAF0lEQVR4nGNgYmBgY2RmZmRgArFYGFkAASwAJAOE4CgAAAAASUVORK5CYII=',
        blurWidth: 8,
        blurHeight: 2,
      };
    },
    59717: (e, t, n) => {
      'use strict';
      n.d(t, { default: () => c });
      var r = n(95155),
        s = n(11518),
        i = n.n(s),
        o = n(12115),
        a = n(66766),
        l = n(25731);
      let c = (e) => {
        let { mainImage: t, thumbnailImages: n, productTitle: s } = e,
          [c, d] = (0, o.useState)(t);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)('div', {
              className:
                'jsx-cb8b4357827724e col-12 col-md-5 d-flex align-items-center justify-content-center order-md-2',
              children: (0, r.jsx)('div', {
                style: { padding: '20px' },
                className: 'jsx-cb8b4357827724e',
                children: (0, r.jsx)('div', {
                  style: { overflow: 'hidden', borderRadius: '0.25rem' },
                  className: 'jsx-cb8b4357827724e image-wrapper',
                  children: (0, r.jsx)(a.default, {
                    src: ''.concat(l.C1, '/').concat(c),
                    alt: s,
                    width: 350,
                    height: 350,
                    className: 'img-fluid main-image',
                    style: { objectFit: 'contain', transition: 'transform 0.3s ease-in-out' },
                  }),
                }),
              }),
            }),
            (0, r.jsx)('div', {
              style: { gap: '12px' },
              className:
                'jsx-cb8b4357827724e col-12 col-md-1 d-flex flex-md-column align-items-center justify-content-center order-md-1 thumbnails-container',
              children: n.map((e, t) =>
                (0, r.jsx)(
                  a.default,
                  {
                    src: ''.concat(l.C1, '/').concat(e),
                    alt: 'Thumbnail '.concat(t),
                    width: 70,
                    height: 70,
                    className: 'rounded-0 shadow-sm',
                    style: {
                      cursor: 'pointer',
                      objectFit: 'cover',
                      background: '#fff',
                      border: c === e ? '2px solid #ddd' : '1px solid #ddd',
                    },
                    onClick: () => d(e),
                  },
                  t
                )
              ),
            }),
            (0, r.jsx)(i(), {
              id: 'cb8b4357827724e',
              children:
                '.image-wrapper:hover .main-image{-webkit-transform:scale(1.05);-moz-transform:scale(1.05);-ms-transform:scale(1.05);-o-transform:scale(1.05);transform:scale(1.05)}',
            }),
          ],
        });
      };
    },
    68334: (e) => {
      e.exports = {
        card: 'page_card__QV0Om',
        cardSmall: 'page_cardSmall__UiD6X',
        overlay: 'page_overlay__pWWMz',
        rightSection: 'page_rightSection__VCwMG',
        goldLeftPanel: 'page_goldLeftPanel__q70nT',
        content: 'page_content__kDoxQ',
        textRed: 'page_textRed__W4BAn',
        textBlue: 'page_textBlue__8jMCK',
        goldRightPanel: 'page_goldRightPanel__8ZiIJ',
        categoryItem: 'page_categoryItem__ZqrrQ',
        imageWrapper: 'page_imageWrapper__OufeY',
        categoryImage: 'page_categoryImage__iTTGG',
      };
    },
    68375: () => {},
    73299: (e, t, n) => {
      'use strict';
      n.r(t), n.d(t, { default: () => r });
      let r = {
        src: '/_next/static/media/shopWomwn.72dd0434.png',
        height: 427,
        width: 427,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEXAknvtyNUOAAC4lH6JV1W/naSIUTliMTnJkmx1PR1+YE1nPCTHl4R5QigAAADGjnx+SCx6QSNqWnvMoXmATCx7WVFGKiZ4ZoFKRmmXZUxpU1+eYU21e1ZiVXJCMz5cLBp9Y2qCUkFODksXAAAAHHRSTlMBFTRbMDn9D/1d4XbUWAW6xP4fnoX+/ef7/fjhPZsYPQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEFJREFUeJwVxscRgCAAAMFDiQYwR0Dtv0mH1y5A1dQAntZ2pow+Bl80Ls5TyRDtuwuQ45qOpMA9W86XRC1an98tfkubAtvoUUUoAAAAAElFTkSuQmCC',
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    82269: (e, t, n) => {
      'use strict';
      var r = n(49509);
      n(68375);
      var s = n(12115),
        i = (function (e) {
          return e && 'object' == typeof e && 'default' in e ? e : { default: e };
        })(s),
        o = void 0 !== r && r.env && !0,
        a = function (e) {
          return '[object String]' === Object.prototype.toString.call(e);
        },
        l = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              n = t.name,
              r = void 0 === n ? 'stylesheet' : n,
              s = t.optimizeForSpeed,
              i = void 0 === s ? o : s;
            c(a(r), '`name` must be a string'),
              (this._name = r),
              (this._deletedRulePlaceholder = '#' + r + '-deleted-rule____{}'),
              c('boolean' == typeof i, '`optimizeForSpeed` must be a boolean'),
              (this._optimizeForSpeed = i),
              (this._serverSheet = void 0),
              (this._tags = []),
              (this._injected = !1),
              (this._rulesCount = 0);
            var l =
              'undefined' != typeof window && document.querySelector('meta[property="csp-nonce"]');
            this._nonce = l ? l.getAttribute('content') : null;
          }
          var t,
            n = e.prototype;
          return (
            (n.setOptimizeForSpeed = function (e) {
              c('boolean' == typeof e, '`setOptimizeForSpeed` accepts a boolean'),
                c(
                  0 === this._rulesCount,
                  'optimizeForSpeed cannot be when rules have already been inserted'
                ),
                this.flush(),
                (this._optimizeForSpeed = e),
                this.inject();
            }),
            (n.isOptimizeForSpeed = function () {
              return this._optimizeForSpeed;
            }),
            (n.inject = function () {
              var e = this;
              if (
                (c(!this._injected, 'sheet already injected'),
                (this._injected = !0),
                'undefined' != typeof window && this._optimizeForSpeed)
              ) {
                (this._tags[0] = this.makeStyleTag(this._name)),
                  (this._optimizeForSpeed = 'insertRule' in this.getSheet()),
                  this._optimizeForSpeed ||
                    (o ||
                      console.warn(
                        'StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.'
                      ),
                    this.flush(),
                    (this._injected = !0));
                return;
              }
              this._serverSheet = {
                cssRules: [],
                insertRule: function (t, n) {
                  return (
                    'number' == typeof n
                      ? (e._serverSheet.cssRules[n] = { cssText: t })
                      : e._serverSheet.cssRules.push({ cssText: t }),
                    n
                  );
                },
                deleteRule: function (t) {
                  e._serverSheet.cssRules[t] = null;
                },
              };
            }),
            (n.getSheetForTag = function (e) {
              if (e.sheet) return e.sheet;
              for (var t = 0; t < document.styleSheets.length; t++)
                if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
            }),
            (n.getSheet = function () {
              return this.getSheetForTag(this._tags[this._tags.length - 1]);
            }),
            (n.insertRule = function (e, t) {
              if ((c(a(e), '`insertRule` accepts only strings'), 'undefined' == typeof window))
                return (
                  'number' != typeof t && (t = this._serverSheet.cssRules.length),
                  this._serverSheet.insertRule(e, t),
                  this._rulesCount++
                );
              if (this._optimizeForSpeed) {
                var n = this.getSheet();
                'number' != typeof t && (t = n.cssRules.length);
                try {
                  n.insertRule(e, t);
                } catch (t) {
                  return (
                    o ||
                      console.warn(
                        'StyleSheet: illegal rule: \n\n' +
                          e +
                          '\n\nSee https://stackoverflow.com/q/20007992 for more info'
                      ),
                    -1
                  );
                }
              } else {
                var r = this._tags[t];
                this._tags.push(this.makeStyleTag(this._name, e, r));
              }
              return this._rulesCount++;
            }),
            (n.replaceRule = function (e, t) {
              if (this._optimizeForSpeed || 'undefined' == typeof window) {
                var n = 'undefined' != typeof window ? this.getSheet() : this._serverSheet;
                if ((t.trim() || (t = this._deletedRulePlaceholder), !n.cssRules[e])) return e;
                n.deleteRule(e);
                try {
                  n.insertRule(t, e);
                } catch (r) {
                  o ||
                    console.warn(
                      'StyleSheet: illegal rule: \n\n' +
                        t +
                        '\n\nSee https://stackoverflow.com/q/20007992 for more info'
                    ),
                    n.insertRule(this._deletedRulePlaceholder, e);
                }
              } else {
                var r = this._tags[e];
                c(r, 'old rule at index `' + e + '` not found'), (r.textContent = t);
              }
              return e;
            }),
            (n.deleteRule = function (e) {
              if ('undefined' == typeof window) return void this._serverSheet.deleteRule(e);
              if (this._optimizeForSpeed) this.replaceRule(e, '');
              else {
                var t = this._tags[e];
                c(t, 'rule at index `' + e + '` not found'),
                  t.parentNode.removeChild(t),
                  (this._tags[e] = null);
              }
            }),
            (n.flush = function () {
              (this._injected = !1),
                (this._rulesCount = 0),
                'undefined' != typeof window
                  ? (this._tags.forEach(function (e) {
                      return e && e.parentNode.removeChild(e);
                    }),
                    (this._tags = []))
                  : (this._serverSheet.cssRules = []);
            }),
            (n.cssRules = function () {
              var e = this;
              return 'undefined' == typeof window
                ? this._serverSheet.cssRules
                : this._tags.reduce(function (t, n) {
                    return (
                      n
                        ? (t = t.concat(
                            Array.prototype.map.call(e.getSheetForTag(n).cssRules, function (t) {
                              return t.cssText === e._deletedRulePlaceholder ? null : t;
                            })
                          ))
                        : t.push(null),
                      t
                    );
                  }, []);
            }),
            (n.makeStyleTag = function (e, t, n) {
              t && c(a(t), 'makeStyleTag accepts only strings as second parameter');
              var r = document.createElement('style');
              this._nonce && r.setAttribute('nonce', this._nonce),
                (r.type = 'text/css'),
                r.setAttribute('data-' + e, ''),
                t && r.appendChild(document.createTextNode(t));
              var s = document.head || document.getElementsByTagName('head')[0];
              return n ? s.insertBefore(r, n) : s.appendChild(r), r;
            }),
            (t = [
              {
                key: 'length',
                get: function () {
                  return this._rulesCount;
                },
              },
            ]),
            (function (e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  'value' in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            })(e.prototype, t),
            e
          );
        })();
      function c(e, t) {
        if (!e) throw Error('StyleSheet: ' + t + '.');
      }
      var d = function (e) {
          for (var t = 5381, n = e.length; n; ) t = (33 * t) ^ e.charCodeAt(--n);
          return t >>> 0;
        },
        u = {};
      function h(e, t) {
        if (!t) return 'jsx-' + e;
        var n = String(t),
          r = e + n;
        return u[r] || (u[r] = 'jsx-' + d(e + '-' + n)), u[r];
      }
      function m(e, t) {
        'undefined' == typeof window && (t = t.replace(/\/style/gi, '\\/style'));
        var n = e + t;
        return u[n] || (u[n] = t.replace(/__jsx-style-dynamic-selector/g, e)), u[n];
      }
      var p = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              n = t.styleSheet,
              r = void 0 === n ? null : n,
              s = t.optimizeForSpeed,
              i = void 0 !== s && s;
            (this._sheet = r || new l({ name: 'styled-jsx', optimizeForSpeed: i })),
              this._sheet.inject(),
              r &&
                'boolean' == typeof i &&
                (this._sheet.setOptimizeForSpeed(i),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
              (this._fromServer = void 0),
              (this._indices = {}),
              (this._instancesCounts = {});
          }
          var t = e.prototype;
          return (
            (t.add = function (e) {
              var t = this;
              void 0 === this._optimizeForSpeed &&
                ((this._optimizeForSpeed = Array.isArray(e.children)),
                this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
                'undefined' == typeof window ||
                  this._fromServer ||
                  ((this._fromServer = this.selectFromServer()),
                  (this._instancesCounts = Object.keys(this._fromServer).reduce(function (e, t) {
                    return (e[t] = 0), e;
                  }, {})));
              var n = this.getIdAndRules(e),
                r = n.styleId,
                s = n.rules;
              if (r in this._instancesCounts) {
                this._instancesCounts[r] += 1;
                return;
              }
              var i = s
                .map(function (e) {
                  return t._sheet.insertRule(e);
                })
                .filter(function (e) {
                  return -1 !== e;
                });
              (this._indices[r] = i), (this._instancesCounts[r] = 1);
            }),
            (t.remove = function (e) {
              var t = this,
                n = this.getIdAndRules(e).styleId;
              if (
                ((function (e, t) {
                  if (!e) throw Error('StyleSheetRegistry: ' + t + '.');
                })(n in this._instancesCounts, 'styleId: `' + n + '` not found'),
                (this._instancesCounts[n] -= 1),
                this._instancesCounts[n] < 1)
              ) {
                var r = this._fromServer && this._fromServer[n];
                r
                  ? (r.parentNode.removeChild(r), delete this._fromServer[n])
                  : (this._indices[n].forEach(function (e) {
                      return t._sheet.deleteRule(e);
                    }),
                    delete this._indices[n]),
                  delete this._instancesCounts[n];
              }
            }),
            (t.update = function (e, t) {
              this.add(t), this.remove(e);
            }),
            (t.flush = function () {
              this._sheet.flush(),
                this._sheet.inject(),
                (this._fromServer = void 0),
                (this._indices = {}),
                (this._instancesCounts = {});
            }),
            (t.cssRules = function () {
              var e = this,
                t = this._fromServer
                  ? Object.keys(this._fromServer).map(function (t) {
                      return [t, e._fromServer[t]];
                    })
                  : [],
                n = this._sheet.cssRules();
              return t.concat(
                Object.keys(this._indices)
                  .map(function (t) {
                    return [
                      t,
                      e._indices[t]
                        .map(function (e) {
                          return n[e].cssText;
                        })
                        .join(e._optimizeForSpeed ? '' : '\n'),
                    ];
                  })
                  .filter(function (e) {
                    return !!e[1];
                  })
              );
            }),
            (t.styles = function (e) {
              var t, n;
              return (
                (t = this.cssRules()),
                void 0 === (n = e) && (n = {}),
                t.map(function (e) {
                  var t = e[0],
                    r = e[1];
                  return i.default.createElement('style', {
                    id: '__' + t,
                    key: '__' + t,
                    nonce: n.nonce ? n.nonce : void 0,
                    dangerouslySetInnerHTML: { __html: r },
                  });
                })
              );
            }),
            (t.getIdAndRules = function (e) {
              var t = e.children,
                n = e.dynamic,
                r = e.id;
              if (n) {
                var s = h(r, n);
                return {
                  styleId: s,
                  rules: Array.isArray(t)
                    ? t.map(function (e) {
                        return m(s, e);
                      })
                    : [m(s, t)],
                };
              }
              return { styleId: h(r), rules: Array.isArray(t) ? t : [t] };
            }),
            (t.selectFromServer = function () {
              return Array.prototype.slice
                .call(document.querySelectorAll('[id^="__jsx-"]'))
                .reduce(function (e, t) {
                  return (e[t.id.slice(2)] = t), e;
                }, {});
            }),
            e
          );
        })(),
        f = s.createContext(null);
      f.displayName = 'StyleSheetContext';
      var A = i.default.useInsertionEffect || i.default.useLayoutEffect,
        g = 'undefined' != typeof window ? new p() : void 0;
      function _(e) {
        var t = g || s.useContext(f);
        return (
          t &&
            ('undefined' == typeof window
              ? t.add(e)
              : A(
                  function () {
                    return (
                      t.add(e),
                      function () {
                        t.remove(e);
                      }
                    );
                  },
                  [e.id, String(e.dynamic)]
                )),
          null
        );
      }
      (_.dynamic = function (e) {
        return e
          .map(function (e) {
            return h(e[0], e[1]);
          })
          .join(' ');
      }),
        (t.style = _);
    },
    87365: (e, t, n) => {
      'use strict';
      n.d(t, { default: () => o });
      var r = n(95155),
        s = n(12115),
        i = n(90748);
      let o = (e) => {
        let { product: t } = e,
          [n, o] = (0, s.useState)(''),
          a = async () => {
            let e = prompt('Please enter your WhatsApp number for inquiry (e.g., +1234567890):');
            if (!e) return void alert('Phone number is required to send the inquiry.');
            if (!/^\+\d{10,15}$/.test(e))
              return void alert(
                'Please enter a valid phone number starting with "+" followed by 10-15 digits.'
              );
            o(e);
            let n =
              'Product Inquiry:\n\n' +
              'From: '.concat(e, '\n') +
              'Product Name: '.concat(t.title, '\n') +
              'Metal Type: '.concat(t.metal, '\n') +
              'Purity (Karat): '.concat(t.purity, '\n') +
              'Gross Weight (g): '.concat(t.grossWeight, '\n') +
              'Product Image URL: '.concat(t.mainImage);
            try {
              let e = await fetch('/api/send-whatsapp', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ to: '+919429439061', body: n }),
                }),
                t = await e.json();
              t.success
                ? alert('Message sent successfully via WhatsApp!')
                : alert('Failed to send message: ' + t.message);
            } catch (e) {
              console.error('Error sending WhatsApp message:', e),
                alert('An error occurred while sending the message.');
            }
          };
        return (0, r.jsx)('button', {
          onClick: a,
          className: 'btn btn-link p-0 m-0 fs-5',
          style: { color: '#33CC33' },
          children: (0, r.jsx)(i._8j, {}),
        });
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [397, 206, 63, 62, 209, 99, 441, 684, 358], () => t(12714)), (_N_E = e.O());
  },
]);
