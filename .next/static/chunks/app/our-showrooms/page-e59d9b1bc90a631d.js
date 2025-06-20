(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [153],
  {
    11846: (A, e, t) => {
      'use strict';
      t.d(e, { default: () => g });
      var a = t(29300),
        l = t.n(a),
        i = t(12115),
        r = t(97390),
        n = t(95155);
      let s = i.forwardRef((A, e) => {
        let { bsPrefix: t, className: a, as: i = 'div', ...s } = A,
          g = (0, r.oU)(t, 'row'),
          d = (0, r.gy)(),
          c = (0, r.Jm)(),
          h = ''.concat(g, '-cols'),
          o = [];
        return (
          d.forEach((A) => {
            let e,
              t = s[A];
            delete s[A],
              null != t && 'object' == typeof t ? ({ cols: e } = t) : (e = t),
              null != e &&
                o.push(
                  ''
                    .concat(h)
                    .concat(A !== c ? '-'.concat(A) : '', '-')
                    .concat(e)
                );
          }),
          (0, n.jsx)(i, { ref: e, ...s, className: l()(a, g, ...o) })
        );
      });
      s.displayName = 'Row';
      let g = s;
    },
    16442: (A, e, t) => {
      Promise.resolve().then(t.bind(t, 76820));
    },
    32960: (A, e, t) => {
      'use strict';
      t.d(e, { Am: () => r, Ay: () => s });
      var a = t(12115),
        l = t(95155);
      let i = ['as', 'disabled'];
      function r({
        tagName: A,
        disabled: e,
        href: t,
        target: a,
        rel: l,
        role: i,
        onClick: r,
        tabIndex: n = 0,
        type: s,
      }) {
        A || (A = null != t || null != a || null != l ? 'a' : 'button');
        let g = { tagName: A };
        if ('button' === A) return [{ type: s || 'button', disabled: e }, g];
        let d = (a) => {
          var l;
          if (((!e && ('a' !== A || ((l = t) && '#' !== l.trim()))) || a.preventDefault(), e))
            return void a.stopPropagation();
          null == r || r(a);
        };
        return (
          'a' === A && (t || (t = '#'), e && (t = void 0)),
          [
            {
              role: null != i ? i : 'button',
              disabled: void 0,
              tabIndex: e ? void 0 : n,
              href: t,
              target: 'a' === A ? a : void 0,
              'aria-disabled': e || void 0,
              rel: 'a' === A ? l : void 0,
              onClick: d,
              onKeyDown: (A) => {
                ' ' === A.key && (A.preventDefault(), d(A));
              },
            },
            g,
          ]
        );
      }
      let n = a.forwardRef((A, e) => {
        let { as: t, disabled: a } = A,
          n = (function (A, e) {
            if (null == A) return {};
            var t = {};
            for (var a in A)
              if ({}.hasOwnProperty.call(A, a)) {
                if (e.indexOf(a) >= 0) continue;
                t[a] = A[a];
              }
            return t;
          })(A, i),
          [s, { tagName: g }] = r(Object.assign({ tagName: t, disabled: a }, n));
        return (0, l.jsx)(g, Object.assign({}, n, s, { ref: e }));
      });
      n.displayName = 'Button';
      let s = n;
    },
    48651: (A, e, t) => {
      'use strict';
      t.r(e), t.d(e, { default: () => a });
      let a = {
        src: '/_next/static/media/dark-brown-colour-flower-pattern-background-abstract-banner-multipurpose-design 1.c28d1eb3.png',
        height: 427,
        width: 1440,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAFVBMVEUYAAFsAwsMAACDBxFcAQg7AQM8AAN0TnFBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAF0lEQVR4nGNgYmBgY2RmZmRgArFYGFkAASwAJAOE4CgAAAAASUVORK5CYII=',
        blurWidth: 8,
        blurHeight: 2,
      };
    },
    56870: (A, e, t) => {
      'use strict';
      t.r(e), t.d(e, { default: () => a });
      let a = {
        src: '/_next/static/media/Line 467.e7db9c43.png',
        height: 13,
        width: 486,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAAA1BMVEWXdTArty6wAAAAAXRSTlMlC+IMIQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAtJREFUeJxjYIACAAAJAAH7UripAAAAAElFTkSuQmCC',
        blurWidth: 8,
        blurHeight: 1,
      };
    },
    60902: (A, e, t) => {
      'use strict';
      t.d(e, { default: () => d });
      var a = t(29300),
        l = t.n(a),
        i = t(12115),
        r = t(32960),
        n = t(97390),
        s = t(95155);
      let g = i.forwardRef((A, e) => {
        let {
            as: t,
            bsPrefix: a,
            variant: i = 'primary',
            size: g,
            active: d = !1,
            disabled: c = !1,
            className: h,
            ...o
          } = A,
          E = (0, n.oU)(a, 'btn'),
          [u, { tagName: m }] = (0, r.Am)({ tagName: t, disabled: c, ...o });
        return (0, s.jsx)(m, {
          ...u,
          ...o,
          ref: e,
          disabled: c,
          className: l()(
            h,
            E,
            d && 'active',
            i && ''.concat(E, '-').concat(i),
            g && ''.concat(E, '-').concat(g),
            o.href && c && 'disabled'
          ),
        });
      });
      g.displayName = 'Button';
      let d = g;
    },
    66766: (A, e, t) => {
      'use strict';
      t.d(e, { default: () => l.a });
      var a = t(71469),
        l = t.n(a);
    },
    68136: (A, e, t) => {
      'use strict';
      t.d(e, { default: () => g });
      var a = t(29300),
        l = t.n(a),
        i = t(12115),
        r = t(97390),
        n = t(95155);
      let s = i.forwardRef((A, e) => {
        let [{ className: t, ...a }, { as: i = 'div', bsPrefix: s, spans: g }] = (function (A) {
          let { as: e, bsPrefix: t, className: a, ...i } = A;
          t = (0, r.oU)(t, 'col');
          let n = (0, r.gy)(),
            s = (0, r.Jm)(),
            g = [],
            d = [];
          return (
            n.forEach((A) => {
              let e,
                a,
                l,
                r = i[A];
              delete i[A],
                'object' == typeof r && null != r
                  ? ({ span: e, offset: a, order: l } = r)
                  : (e = r);
              let n = A !== s ? '-'.concat(A) : '';
              e &&
                g.push(!0 === e ? ''.concat(t).concat(n) : ''.concat(t).concat(n, '-').concat(e)),
                null != l && d.push('order'.concat(n, '-').concat(l)),
                null != a && d.push('offset'.concat(n, '-').concat(a));
            }),
            [
              { ...i, className: l()(a, ...g, ...d) },
              { as: e, bsPrefix: t, spans: g },
            ]
          );
        })(A);
        return (0, n.jsx)(i, { ...a, ref: e, className: l()(t, !g.length && s) });
      });
      s.displayName = 'Col';
      let g = s;
    },
    68334: (A) => {
      A.exports = {
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
    71469: (A, e, t) => {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        !(function (A, e) {
          for (var t in e) Object.defineProperty(A, t, { enumerable: !0, get: e[t] });
        })(e, {
          default: function () {
            return s;
          },
          getImageProps: function () {
            return n;
          },
        });
      let a = t(88229),
        l = t(38883),
        i = t(33063),
        r = a._(t(51193));
      function n(A) {
        let { props: e } = (0, l.getImgProps)(A, {
          defaultLoader: r.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: '/_next/image',
            loader: 'default',
            dangerouslyAllowSVG: !1,
            unoptimized: !0,
          },
        });
        for (let [A, t] of Object.entries(e)) void 0 === t && delete e[A];
        return { props: e };
      }
      let s = i.Image;
    },
    73299: (A, e, t) => {
      'use strict';
      t.r(e), t.d(e, { default: () => a });
      let a = {
        src: '/_next/static/media/shopWomwn.72dd0434.png',
        height: 427,
        width: 427,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEXAknvtyNUOAAC4lH6JV1W/naSIUTliMTnJkmx1PR1+YE1nPCTHl4R5QigAAADGjnx+SCx6QSNqWnvMoXmATCx7WVFGKiZ4ZoFKRmmXZUxpU1+eYU21e1ZiVXJCMz5cLBp9Y2qCUkFODksXAAAAHHRSTlMBFTRbMDn9D/1d4XbUWAW6xP4fnoX+/ef7/fjhPZsYPQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEFJREFUeJwVxscRgCAAAMFDiQYwR0Dtv0mH1y5A1dQAntZ2pow+Bl80Ls5TyRDtuwuQ45qOpMA9W86XRC1an98tfkubAtvoUUUoAAAAAElFTkSuQmCC',
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    76820: (A, e, t) => {
      'use strict';
      t.d(e, { default: () => R });
      var a = t(95155),
        l = t(66766),
        i = t(12115),
        r = t(68136),
        n = t(11846),
        s = t(92809),
        g = t(60902),
        d = t(51770);
      let c = {
        src: '/_next/static/media/our-showroom-bg.be56233d.png',
        height: 600,
        width: 1440,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAHlBMVEWmj2xYTDuIdFZvYU03LCMzMC5IOC10alRNMigrIxvswPczAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIUlEQVR4nAXBhwEAMAzCMBPI6P8PVyKvpZsgb5U9pAC2PwUXAFQygp/jAAAAAElFTkSuQmCC',
        blurWidth: 8,
        blurHeight: 3,
      };
      var h = t(48651),
        o = t(73299),
        E = t(56870),
        u = t(68334),
        m = t.n(u),
        C = t(6874),
        w = t.n(C);
      let b = [
          {
            src: '/_next/static/media/1.d7cbfe7c.png',
            height: 231,
            width: 411,
            blurDataURL:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAP1BMVEWOn55ibGS62Ntsd2ukt8Gzw8Wsu7mgvc6Xp69YW1dSWFWNq7CZoZe4tauFkImdurekwcWgx9ytra5lcGd9cHHcqQsKAAAACnRSTlP9////////9/f3UypA/QAAAAlwSFlzAAALEwAACxMBAJqcGAAAACpJREFUeJwFwYcBACAIA7CCBff2/1tNYOYkmYCqOteOCOK92QGkYFy8/AEO8QDyoHOSBQAAAABJRU5ErkJggg==',
            blurWidth: 8,
            blurHeight: 4,
          },
          {
            src: '/_next/static/media/2.8020e74c.png',
            height: 232,
            width: 413,
            blurDataURL:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAASFBMVEXEso+kgF2FZ0nCqH+1nHOzsKerpJu+NyqeZEbFq6CdlYuJd1ytd12iq7LDdmWwjmWmiWaYakXLgmytlGjl2bxxWUa0mHf/8tKfNXEtAAAACnRSTlP+////5v//5ubmuEliCAAAAAlwSFlzAAALEwAACxMBAJqcGAAAACxJREFUeJxj4BNiZBRjYGZhEOAXZBJl4uFgYGXlFmbm5mFn4GXjEhHnYuMEABYLAUcwXN4TAAAAAElFTkSuQmCC',
            blurWidth: 8,
            blurHeight: 4,
          },
          {
            src: '/_next/static/media/3.d76f4168.png',
            height: 231,
            width: 411,
            blurDataURL:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAPFBMVEVwcG18e3bTzaq7tpiJh4JOS0GhopWvrpm3uaSWlY7p4L3Tz7KMi26HhGCssaTZ1rG6u5bWyZjAvJm8vq69KyPDAAAACHRSTlP7////////93kQ1BwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAqSURBVHicBcGHAQAgCMCwoqLgHv//asKJZqoJqouTBFqez8mFcNce3coHD1kA+CdbhEAAAAAASUVORK5CYII=',
            blurWidth: 8,
            blurHeight: 4,
          },
          {
            src: '/_next/static/media/4.66b1880d.png',
            height: 231,
            width: 411,
            blurDataURL:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAOVBMVEWqh1Lqz4vj2LLKuYmolHG9onPOtX3WwIXix4S6hUvp1qj8/OLMwpzOqWjPya/nzpWom3+4qo7s27AN41caAAAACnRSTlP9////////+/v39oX2lQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAClJREFUeJwFwYcBACAIA7CyBMH9/7EmmESZbwcU0HOtQ83HkgY04SoO/xF9AOmlNlzqAAAAAElFTkSuQmCC',
            blurWidth: 8,
            blurHeight: 4,
          },
          {
            src: '/_next/static/media/5.d73d4ec3.png',
            height: 232,
            width: 413,
            blurDataURL:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAQlBMVEWZZTShflqfjHWXXyyFTyKpeDuaajqPWSiLWjlmMxrFml6ObUa6iUByUjXc5+ybjo5VVE54UzBqRjqCdWC6l3LCrpbRqCCHAAAACnRSTlPm////5v///ub+jWnJigAAAAlwSFlzAAALEwAACxMBAJqcGAAAACtJREFUeJwFwYcBACAIA7ACgop7/f+qCfrYj/NNYCJ3M2AuqRol4LSiaooPFdwBE4VLRyYAAAAASUVORK5CYII=',
            blurWidth: 8,
            blurHeight: 4,
          },
          {
            src: '/_next/static/media/6.c80d463e.png',
            height: 231,
            width: 411,
            blurDataURL:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAARVBMVEV2YEewlW+miGSMZka2iVOThG2kfFF/Wj6XaTvDnGSCaFBpVkameEKUdVLGk1hwVT1xZFeFYzrt1KGxpJDJtIm3onz85rLmJABMAAAACnRSTlP7////////+/f3Vy7J3gAAAAlwSFlzAAALEwAACxMBAJqcGAAAACxJREFUeJxjYGdjFBFl4eNkYGbi4mJj4eFgYGBlEmTmZWVnEBAWE2Lk52YAABOXAST3aR5aAAAAAElFTkSuQmCC',
            blurWidth: 8,
            blurHeight: 4,
          },
          {
            src: '/_next/static/media/7.eac3d968.png',
            height: 232,
            width: 413,
            blurDataURL:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAP1BMVEXa1MiYbTy1lGawmXWmfkmkhlWhczyaiXK+m1+aflfXs3fLnV7CqH3IsHl7VCqchFi+iE+mkGiOYi7358GbeUcwiH4sAAAACnRSTlPm////////5ubmqOnwRwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACtJREFUeJwFwYcBACAIA7AiwwXu/281wU6N2S9gR3pLnjHIVheqmKryIsoHE0kBGlFvS5YAAAAASUVORK5CYII=',
            blurWidth: 8,
            blurHeight: 4,
          },
          {
            src: '/_next/static/media/8.26929cfa.png',
            height: 231,
            width: 411,
            blurDataURL:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAP1BMVEWUc0mXZz+bdkWlfVK2mHCFb1T14Km7pYCNdE6aeVV3ZlWgeVKCYECZh2ysj2HEp3yxfkGjkXixiFjJsI6rdz7BnqrVAAAACnRSTlP7////////+/v3+5uG0gAAAAlwSFlzAAALEwAACxMBAJqcGAAAAClJREFUeJwFwYUBACAMA7COKa7/30qCy4equGO+RU1LhiQGJICtOsx6fBNaAP6pZ5eIAAAAAElFTkSuQmCC',
            blurWidth: 8,
            blurHeight: 4,
          },
          {
            src: '/_next/static/media/9.f52a1780.png',
            height: 231,
            width: 411,
            blurDataURL:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAP1BMVEW5qHy5rIvLwrOqpoOdlnNvZlfPwam2qYW5rZSvoYJeW03TxaOqn3ugi2KwrJmIgF1JRj+Nh258fWYiIBzEvZzhq6UQAAAACnRSTlP7////////+/f3Vy7J3gAAAAlwSFlzAAALEwAACxMBAJqcGAAAACpJREFUeJwFwYUBACAMA7AyheHy/60keNtB1h1yVyLTDI6QkbTgsExp1T8TBQEIDI6L5QAAAABJRU5ErkJggg==',
            blurWidth: 8,
            blurHeight: 4,
          },
        ],
        p = [
          {
            src: '/_next/static/media/1.272b718e.png',
            height: 231,
            width: 411,
            blurDataURL:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAM1BMVEXrxYLXsGzBmV3jv4GwjFSYflHDqXPHpGver2bLpGTmyI/00ZDUtHq2lV3YuX3ElVjq1Z5q7TdjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKElEQVR4nAXBhQEAIAwDsM6ZIP9fSwISoBsFp+Ml8xCZrDcGa6nZDv4OeQDeH5L37gAAAABJRU5ErkJggg==',
            blurWidth: 8,
            blurHeight: 4,
          },
          {
            src: '/_next/static/media/2.5d863a6f.png',
            height: 231,
            width: 411,
            blurDataURL:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAJ1BMVEXNnFG1jUjXpVfUnU+VZS6ufjnKlEXcs2LBkES8gjejeD/JolmrgkqJM76XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJ0lEQVR4nAXBiQEAIAgDsSsFwWf/eU1IIoxN3unGIqukWaKId/byBwhnAIkb3UzJAAAAAElFTkSuQmCC',
            blurWidth: 8,
            blurHeight: 4,
          },
          {
            src: '/_next/static/media/3.789d8fea.png',
            height: 231,
            width: 411,
            blurDataURL:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAM1BMVEXRwaTAnmLNpGHCqHuuhk20j1LXuoS2lGTKyLGjdTvBv7Dcv4qKd1CdglR/bVLJs4qypYZr4qtPAAAACnRSTlP9////////+/f3WjC5mQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAClJREFUeJwFwQkCADAEA7Ci2Ozy/9cuQcSKBwBMs64aEPV9jyScQqrPDw5CAMOJnKvRAAAAAElFTkSuQmCC',
            blurWidth: 8,
            blurHeight: 4,
          },
          {
            src: '/_next/static/media/4.f6702c17.png',
            height: 231,
            width: 411,
            blurDataURL:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAQlBMVEXi2L22nHDgwIHQpWnInmLqz5q1lmGofUXVtHrhtnHnxo+smYa7rIbkzqDw0onRsGvw2qzu5dLbp1jGkWvq3cDBv6tG9YOgAAAACXRSTlP3////////+/evInixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAK0lEQVR4nAXBhQEAIAwDsDJhDNf/XyVBVp3tLkA41FMeEImCRU/oQ3i72wcUOQEW20WybAAAAABJRU5ErkJggg==',
            blurWidth: 8,
            blurHeight: 4,
          },
          {
            src: '/_next/static/media/5.2d5d77c9.png',
            height: 231,
            width: 411,
            blurDataURL:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAANlBMVEXHqWupfkjWt3KeglKld0G6lF/EpG3PrG+ve0W0hk2Jb0y7jFLErIbauYOthVrnyZvWuILWu5VXVD4xAAAACnRSTlP9////////+/v7/zO6vgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAClJREFUeJwFwYcBACAIA7CCZbn9/1kTCG2+s4CR7NwtUZRmfgOAhrrVBxCpANQw9lyGAAAAAElFTkSuQmCC',
            blurWidth: 8,
            blurHeight: 4,
          },
          {
            src: '/_next/static/media/6.67efdade.png',
            height: 231,
            width: 411,
            blurDataURL:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAOVBMVEXPpGjLjVfEjmDv3rDQmWTDll3CklLXsHTiypbt0Zvs16DbuH6yil/PfFHUgVG8g0rjyYncy6f55reLUw2lAAAACnRSTlP7////////+/v3+5uG0gAAAAlwSFlzAAALEwAACxMBAJqcGAAAACpJREFUeJwFwYcBACAIA7AyRcT5/7EmMG9XXgZ0ehkXwGsT6eiAjpMS7QMR8QD1a/kHKQAAAABJRU5ErkJggg==',
            blurWidth: 8,
            blurHeight: 4,
          },
          {
            src: '/_next/static/media/7.9e9514cf.png',
            height: 231,
            width: 411,
            blurDataURL:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAMFBMVEWshlS5c0a5lli3kFbozJKwjlrcwITEpGzIfEaVc0i+mminhE3TtH+4e0jduXXMnWm8h1XwAAAAA3RSTlP99/c/TjSYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKElEQVR4nAXBhwEAIAgDsCK0gPP/b02giFA6sInTXQZyPrAMvjKvfHwNKgDCHTjF5wAAAABJRU5ErkJggg==',
            blurWidth: 8,
            blurHeight: 4,
          },
          {
            src: '/_next/static/media/8.dfe2a8d1.png',
            height: 231,
            width: 411,
            blurDataURL:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAMFBMVEW/lmCvf0bWrmO0jFLFnV6shVDmyo3Co2u9pHHSsXXPuIW6llTEjk/bvomEaUWnilgWHX+HAAAAA3RSTlP6+/eWtG0RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKElEQVR4nAXBhwEAIAgDsCKU5eD/b03gfispgh7y8QCaXWEKmCLc9voPUADF5D+RYAAAAABJRU5ErkJggg==',
            blurWidth: 8,
            blurHeight: 4,
          },
          {
            src: '/_next/static/media/9.829046bc.png',
            height: 231,
            width: 411,
            blurDataURL:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAALVBMVEX41pbXtnrivoblyY/8357cxZDsy4nlyJXRp2nBn2byzIqfflq2mme8nXrtzJJzY0QzAAAABHRSTlP9/fv7p6RbgQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACdJREFUeJwFwYcBACAIwLCywfX/uSa4kwuHKxGpZexJOdNCm78o9AMLZgCrQd1ZZQAAAABJRU5ErkJggg==',
            blurWidth: 8,
            blurHeight: 4,
          },
        ],
        f = [
          {
            src: '/_next/static/media/1.a9dd232a.png',
            height: 230,
            width: 409,
            blurDataURL:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAPFBMVEXPqXzszpbPpnLPo2LXsHXdnXTevIPgv5L+9/PHc03GjFzfpW7pwoSxelH53KXWwIi9kmOxhVrk0rThnn3XcawXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKklEQVR4nAXBhQEAIAwDsG5Mcfn/VxJ0mgb3QGHZhxFItVR6gdpk8PL7AQ/3APptRxITAAAAAElFTkSuQmCC',
            blurWidth: 8,
            blurHeight: 4,
          },
          {
            src: '/_next/static/media/2.9bc2ae7c.png',
            height: 230,
            width: 409,
            blurDataURL:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAOVBMVEXpwYaNWzSBTCbPsYfGlF6+hk6VZzvkx5asfUrhsnfQq2ncqHTioHDUe1nRnGHbxaaKTiO2mXXGoXR1GXldAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVR4nAXBhwEAIAgDsLLBrf8fa4IIeQEAO/nYaoXLRK6zQ9LSddQHECwA6Hb0RCIAAAAASUVORK5CYII=',
            blurWidth: 8,
            blurHeight: 4,
          },
          {
            src: '/_next/static/media/3.67f25cc8.png',
            height: 230,
            width: 409,
            blurDataURL:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAM1BMVEWbjW6zpoqKeliRdVHEvabVzbrKxLFxZ0iciGWVd1WIbU59ZkeolniKdlHCtph4XkKKf2Gl+7ZbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKElEQVR4nAXBhQEAIAwDsM4N+/9aEphiZU3DPbbILZCCOaNBdjLe4AMPNgDaLcW43QAAAABJRU5ErkJggg==',
            blurWidth: 8,
            blurHeight: 4,
          },
          {
            src: '/_next/static/media/4.4199be9d.png',
            height: 230,
            width: 409,
            blurDataURL:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAARVBMVEXUwrC+mnHs6eng29fq4tTq2tjczcH49ejn3svWxKS5pYPgzKr//fHn0c3w6+Pl1rqllZqcY1q7lYmIcmXDs7G+p5vayrgIn+HfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKklEQVR4nAXBhQEAIAwDsA6Y4fr/qyRQaczRAkbSqt0y6OGKwUFrz+MFHxJEARsKy0I3AAAAAElFTkSuQmCC',
            blurWidth: 8,
            blurHeight: 4,
          },
          {
            src: '/_next/static/media/5.4199be9d.png',
            height: 230,
            width: 409,
            blurDataURL:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAARVBMVEXUwrC+mnHs6eng29fq4tTq2tjczcH49ejn3svWxKS5pYPgzKr//fHn0c3w6+Pl1rqllZqcY1q7lYmIcmXDs7G+p5vayrgIn+HfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKklEQVR4nAXBhQEAIAwDsA6Y4fr/qyRQaczRAkbSqt0y6OGKwUFrz+MFHxJEARsKy0I3AAAAAElFTkSuQmCC',
            blurWidth: 8,
            blurHeight: 4,
          },
          {
            src: '/_next/static/media/6.4199be9d.png',
            height: 230,
            width: 409,
            blurDataURL:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAARVBMVEXUwrC+mnHs6eng29fq4tTq2tjczcH49ejn3svWxKS5pYPgzKr//fHn0c3w6+Pl1rqllZqcY1q7lYmIcmXDs7G+p5vayrgIn+HfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKklEQVR4nAXBhQEAIAwDsA6Y4fr/qyRQaczRAkbSqt0y6OGKwUFrz+MFHxJEARsKy0I3AAAAAElFTkSuQmCC',
            blurWidth: 8,
            blurHeight: 4,
          },
        ],
        R = () => {
          let [A, e] = (0, i.useState)(null),
            [t, u] = (0, i.useState)(!1),
            C = (A) => {
              e(A), u(!0);
            },
            R = (A) =>
              A.map((A, e) =>
                (0, a.jsx)(
                  r.default,
                  {
                    xs: 12,
                    sm: 6,
                    md: 4,
                    children: (0, a.jsx)('div', {
                      style: {
                        width: '100%',
                        height: '230px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                      },
                      onClick: () => C(A),
                      children: (0, a.jsx)(l.default, {
                        src: A,
                        alt: 'Showroom Image '.concat(e + 1),
                        layout: 'responsive',
                        width: 350,
                        height: 250,
                        objectFit: 'cover',
                        placeholder: 'blur',
                      }),
                    }),
                  },
                  e
                )
              );
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)('div', {
                style: { position: 'relative', width: '100%', height: '500px' },
                children: (0, a.jsx)(l.default, {
                  src: c,
                  alt: 'Suvarnakala Banner',
                  layout: 'fill',
                  objectFit: 'cover',
                  priority: !0,
                }),
              }),
              (0, a.jsxs)('div', {
                className: 'bg-color p-5',
                children: [
                  (0, a.jsxs)(n.default, {
                    className: ' g-4',
                    children: [
                      (0, a.jsx)('div', {
                        className:
                          'custom-heading-wrapper text-center justify-content-center d-flex align-items-center mb-1',
                        children: (0, a.jsxs)('h2', {
                          className: 'm-0 custom-heading text-wrap me-3',
                          children: [
                            (0, a.jsx)('p', {
                              className: 'text-red mb-1 fs-3',
                              children: 'Jodhpur Cross Roads, Satellite',
                            }),
                            (0, a.jsx)(l.default, {
                              src: E.default,
                              alt: 'Horizontal Line',
                              className: 'mb-0',
                              style: { width: '100%', height: 'auto', display: 'block' },
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)('p', {
                        className: 'text-blue mt-0 text-center',
                        children: 'Venus Amadeus Jodhpur Cross Road, B.R.T.S Bus Stand, Satellite',
                      }),
                      R(b),
                    ],
                  }),
                  (0, a.jsxs)(n.default, {
                    className: 'mt-4 g-4',
                    children: [
                      (0, a.jsx)('div', {
                        className:
                          'custom-heading-wrapper text-center justify-content-center d-flex align-items-center mb-1',
                        children: (0, a.jsxs)('h2', {
                          className: 'm-0 custom-heading text-wrap me-3',
                          children: [
                            (0, a.jsx)('p', {
                              className: 'text-red mb-1 fs-3',
                              children: 'C G Road',
                            }),
                            (0, a.jsx)(l.default, {
                              src: E.default,
                              alt: 'Horizontal Line',
                              className: 'mb-0',
                              style: { width: '100%', height: 'auto', display: 'block' },
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)('p', {
                        className: 'text-blue mt-0 text-center',
                        children: 'National Plaza, Opp. Lal Bungalow, C. G. Road',
                      }),
                      R(p),
                    ],
                  }),
                  (0, a.jsxs)(n.default, {
                    className: 'mt-4 g-4',
                    children: [
                      (0, a.jsx)('div', {
                        className:
                          'custom-heading-wrapper text-center justify-content-center d-flex align-items-center mb-1',
                        children: (0, a.jsxs)('h2', {
                          className: 'm-0 custom-heading text-wrap me-3',
                          children: [
                            (0, a.jsx)('p', {
                              className: 'text-red mb-1 fs-3',
                              children: 'Maninagar',
                            }),
                            (0, a.jsx)(l.default, {
                              src: E.default,
                              alt: 'Horizontal Line',
                              className: 'mb-0',
                              style: { width: '100%', height: 'auto', display: 'block' },
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)('p', {
                        className: 'text-blue mt-0 text-center',
                        children: 'Opp. Pintoo Garments, Maninagar Cross Rd, Maninagar',
                      }),
                      R(f),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)('div', {
                style: { position: 'relative', width: '100%', height: '300px' },
                children: [
                  (0, a.jsx)(l.default, {
                    src: h.default,
                    alt: 'Shop Now Banner',
                    layout: 'fill',
                    objectFit: 'cover',
                    priority: !0,
                  }),
                  (0, a.jsx)('div', {
                    style: {
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                    },
                    children: (0, a.jsx)(s.default, {
                      children: (0, a.jsxs)(n.default, {
                        className: 'align-items-center',
                        children: [
                          (0, a.jsx)(r.default, {
                            md: 6,
                            className: 'd-none d-md-flex justify-content-start',
                            children: (0, a.jsx)(l.default, {
                              src: o.default,
                              alt: 'Shop Girl',
                              width: 300,
                              height: 300,
                            }),
                          }),
                          (0, a.jsxs)(r.default, {
                            xs: 12,
                            md: 6,
                            className: 'text-center text-md-start text-white',
                            children: [
                              (0, a.jsx)('h1', {
                                className: 'fs-4 fs-md-3 fw-semibold lh-tight mb-4',
                                children: 'Elevate Every Moment with Timeless Jewellery',
                              }),
                              (0, a.jsx)(w(), {
                                href: '/collections',
                                children: (0, a.jsx)(g.default, {
                                  variant: 'outline-light rounded-0',
                                  className: m().shopNowBtn,
                                  style: { textDecoration: 'none' },
                                  children: 'Shop Now',
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, a.jsx)(d.A, {
                show: t,
                onHide: () => u(!1),
                centered: !0,
                size: 'lg',
                children: (0, a.jsx)(d.A.Body, {
                  className: 'p-0 d-flex align-items-center justify-content-center',
                  children:
                    A &&
                    (0, a.jsx)(l.default, {
                      src: A,
                      alt: 'Preview',
                      width: 900,
                      height: 600,
                      style: { objectFit: 'contain', width: '100%', height: 'auto' },
                    }),
                }),
              }),
            ],
          });
        };
    },
    92809: (A, e, t) => {
      'use strict';
      t.d(e, { default: () => g });
      var a = t(29300),
        l = t.n(a),
        i = t(12115),
        r = t(97390),
        n = t(95155);
      let s = i.forwardRef((A, e) => {
        let { bsPrefix: t, fluid: a = !1, as: i = 'div', className: s, ...g } = A,
          d = (0, r.oU)(t, 'container');
        return (0, n.jsx)(i, {
          ref: e,
          ...g,
          className: l()(
            s,
            a ? ''.concat(d).concat('string' == typeof a ? '-'.concat(a) : '-fluid') : d
          ),
        });
      });
      s.displayName = 'Container';
      let g = s;
    },
  },
  (A) => {
    var e = (e) => A((A.s = e));
    A.O(0, [397, 63, 62, 9, 770, 441, 684, 358], () => e(16442)), (_N_E = A.O());
  },
]);
