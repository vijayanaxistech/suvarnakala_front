(exports.id = 286),
  (exports.ids = [286]),
  (exports.modules = {
    1322: (e, t) => {
      'use strict';
      function o(e) {
        let {
            widthInt: t,
            heightInt: o,
            blurWidth: r,
            blurHeight: n,
            blurDataURL: i,
            objectFit: a,
          } = e,
          s = r ? 40 * r : t,
          l = n ? 40 * n : o,
          u = s && l ? "viewBox='0 0 " + s + ' ' + l + "'" : '';
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u ? 'none' : 'contain' === a ? 'xMidYMid' : 'cover' === a ? 'xMidYMid slice' : 'none') +
          "' style='filter: url(%23b);' href='" +
          i +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'getImageBlurSvg', {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
    },
    4536: (e, t, o) => {
      let { createProxy: r } = o(39844);
      e.exports = r(
        'C:\\AnaxisTech Projects\\Suvrankala\\suvarnakala_frontend\\node_modules\\next\\dist\\client\\app-dir\\link.js'
      );
    },
    9131: (e, t, o) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'getImgProps', {
          enumerable: !0,
          get: function () {
            return l;
          },
        }),
        o(21122);
      let r = o(1322),
        n = o(27894),
        i = ['-moz-initial', 'fill', 'none', 'scale-down', void 0];
      function a(e) {
        return void 0 !== e.default;
      }
      function s(e) {
        return void 0 === e
          ? e
          : 'number' == typeof e
            ? Number.isFinite(e)
              ? e
              : NaN
            : 'string' == typeof e && /^[0-9]+$/.test(e)
              ? parseInt(e, 10)
              : NaN;
      }
      function l(e, t) {
        var o, l;
        let u,
          d,
          c,
          {
            src: f,
            sizes: m,
            unoptimized: p = !1,
            priority: h = !1,
            loading: g,
            className: v,
            quality: b,
            width: C,
            height: _,
            fill: j = !1,
            style: w,
            overrideSrc: y,
            onLoad: x,
            onLoadingComplete: E,
            placeholder: S = 'empty',
            blurDataURL: k,
            fetchPriority: P,
            decoding: R = 'async',
            layout: O,
            objectFit: A,
            objectPosition: I,
            lazyBoundary: z,
            lazyRoot: T,
            ...M
          } = e,
          { imgConf: N, showAltText: $, blurComplete: D, defaultLoader: F } = t,
          B = N || n.imageConfigDefault;
        if ('allSizes' in B) u = B;
        else {
          let e = [...B.deviceSizes, ...B.imageSizes].sort((e, t) => e - t),
            t = B.deviceSizes.sort((e, t) => e - t),
            r = null == (o = B.qualities) ? void 0 : o.sort((e, t) => e - t);
          u = { ...B, allSizes: e, deviceSizes: t, qualities: r };
        }
        if (void 0 === F)
          throw Object.defineProperty(
            Error(
              'images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config'
            ),
            '__NEXT_ERROR_CODE',
            { value: 'E163', enumerable: !1, configurable: !0 }
          );
        let G = M.loader || F;
        delete M.loader, delete M.srcSet;
        let L = '__next_img_default' in G;
        if (L) {
          if ('custom' === u.loader)
            throw Object.defineProperty(
              Error(
                'Image with src "' +
                  f +
                  '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
              ),
              '__NEXT_ERROR_CODE',
              { value: 'E252', enumerable: !1, configurable: !0 }
            );
        } else {
          let e = G;
          G = (t) => {
            let { config: o, ...r } = t;
            return e(r);
          };
        }
        if (O) {
          'fill' === O && (j = !0);
          let e = {
            intrinsic: { maxWidth: '100%', height: 'auto' },
            responsive: { width: '100%', height: 'auto' },
          }[O];
          e && (w = { ...w, ...e });
          let t = { responsive: '100vw', fill: '100vw' }[O];
          t && !m && (m = t);
        }
        let W = '',
          q = s(C),
          U = s(_);
        if ((l = f) && 'object' == typeof l && (a(l) || void 0 !== l.src)) {
          let e = a(f) ? f.default : f;
          if (!e.src)
            throw Object.defineProperty(
              Error(
                'An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ' +
                  JSON.stringify(e)
              ),
              '__NEXT_ERROR_CODE',
              { value: 'E460', enumerable: !1, configurable: !0 }
            );
          if (!e.height || !e.width)
            throw Object.defineProperty(
              Error(
                'An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ' +
                  JSON.stringify(e)
              ),
              '__NEXT_ERROR_CODE',
              { value: 'E48', enumerable: !1, configurable: !0 }
            );
          if (((d = e.blurWidth), (c = e.blurHeight), (k = k || e.blurDataURL), (W = e.src), !j))
            if (q || U) {
              if (q && !U) {
                let t = q / e.width;
                U = Math.round(e.height * t);
              } else if (!q && U) {
                let t = U / e.height;
                q = Math.round(e.width * t);
              }
            } else (q = e.width), (U = e.height);
        }
        let J = !h && ('lazy' === g || void 0 === g);
        (!(f = 'string' == typeof f ? f : W) || f.startsWith('data:') || f.startsWith('blob:')) &&
          ((p = !0), (J = !1)),
          u.unoptimized && (p = !0),
          L && !u.dangerouslyAllowSVG && f.split('?', 1)[0].endsWith('.svg') && (p = !0);
        let V = s(b),
          X = Object.assign(
            j
              ? {
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: A,
                  objectPosition: I,
                }
              : {},
            $ ? {} : { color: 'transparent' },
            w
          ),
          Y =
            D || 'empty' === S
              ? null
              : 'blur' === S
                ? 'url("data:image/svg+xml;charset=utf-8,' +
                  (0, r.getImageBlurSvg)({
                    widthInt: q,
                    heightInt: U,
                    blurWidth: d,
                    blurHeight: c,
                    blurDataURL: k || '',
                    objectFit: X.objectFit,
                  }) +
                  '")'
                : 'url("' + S + '")',
          H = i.includes(X.objectFit)
            ? 'fill' === X.objectFit
              ? '100% 100%'
              : 'cover'
            : X.objectFit,
          K = Y
            ? {
                backgroundSize: H,
                backgroundPosition: X.objectPosition || '50% 50%',
                backgroundRepeat: 'no-repeat',
                backgroundImage: Y,
              }
            : {},
          Q = (function (e) {
            let {
              config: t,
              src: o,
              unoptimized: r,
              width: n,
              quality: i,
              sizes: a,
              loader: s,
            } = e;
            if (r) return { src: o, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: u } = (function (e, t, o) {
                let { deviceSizes: r, allSizes: n } = e;
                if (o) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let r; (r = e.exec(o)); ) t.push(parseInt(r[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return { widths: n.filter((t) => t >= r[0] * e), kind: 'w' };
                  }
                  return { widths: n, kind: 'w' };
                }
                return 'number' != typeof t
                  ? { widths: r, kind: 'w' }
                  : {
                      widths: [
                        ...new Set([t, 2 * t].map((e) => n.find((t) => t >= e) || n[n.length - 1])),
                      ],
                      kind: 'x',
                    };
              })(t, n, a),
              d = l.length - 1;
            return {
              sizes: a || 'w' !== u ? a : '100vw',
              srcSet: l
                .map(
                  (e, r) =>
                    s({ config: t, src: o, quality: i, width: e }) +
                    ' ' +
                    ('w' === u ? e : r + 1) +
                    u
                )
                .join(', '),
              src: s({ config: t, src: o, quality: i, width: l[d] }),
            };
          })({ config: u, src: f, unoptimized: p, width: q, quality: V, sizes: m, loader: G });
        return {
          props: {
            ...M,
            loading: J ? 'lazy' : g,
            fetchPriority: P,
            width: q,
            height: U,
            decoding: R,
            className: v,
            style: { ...X, ...K },
            sizes: Q.sizes,
            srcSet: Q.srcSet,
            src: y || Q.src,
          },
          meta: { unoptimized: p, priority: h, placeholder: S, fill: j },
        };
      }
    },
    15754: (e, t, o) => {
      'use strict';
      o.d(t, { default: () => n });
      var r = o(12907);
      (0, r.registerClientReference)(
        function () {
          throw Error(
            "Attempted to call useCol() from the server but useCol is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
          );
        },
        'C:\\AnaxisTech Projects\\Suvrankala\\suvarnakala_frontend\\node_modules\\react-bootstrap\\esm\\Col.js',
        'useCol'
      );
      let n = (0, r.registerClientReference)(
        function () {
          throw Error(
            'Attempted to call the default export of "C:\\\\AnaxisTech Projects\\\\Suvrankala\\\\suvarnakala_frontend\\\\node_modules\\\\react-bootstrap\\\\esm\\\\Col.js" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
          );
        },
        'C:\\AnaxisTech Projects\\Suvrankala\\suvarnakala_frontend\\node_modules\\react-bootstrap\\esm\\Col.js',
        'default'
      );
    },
    21122: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'warnOnce', {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let o = (e) => {};
    },
    27894: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        !(function (e, t) {
          for (var o in t) Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
        })(t, {
          VALID_LOADERS: function () {
            return o;
          },
          imageConfigDefault: function () {
            return r;
          },
        });
      let o = ['default', 'imgix', 'cloudinary', 'akamai', 'custom'],
        r = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: '/_next/image',
          loader: 'default',
          loaderFile: '',
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ['image/webp'],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: 'attachment',
          localPatterns: void 0,
          remotePatterns: [],
          qualities: void 0,
          unoptimized: !1,
        };
    },
    32091: (e, t) => {
      'use strict';
      function o(e) {
        var t;
        let { config: o, src: r, width: n, quality: i } = e,
          a =
            i ||
            (null == (t = o.qualities)
              ? void 0
              : t.reduce((e, t) => (Math.abs(t - 75) < Math.abs(e - 75) ? t : e))) ||
            75;
        return (
          o.path +
          '?url=' +
          encodeURIComponent(r) +
          '&w=' +
          n +
          '&q=' +
          a +
          (r.startsWith('/_next/static/media/'), '')
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (o.__next_img_default = !0);
      let r = o;
    },
    38799: (e, t, o) => {
      'use strict';
      o.d(t, { default: () => r });
      let r = (0, o(12907).registerClientReference)(
        function () {
          throw Error(
            'Attempted to call the default export of "C:\\\\AnaxisTech Projects\\\\Suvrankala\\\\suvarnakala_frontend\\\\node_modules\\\\react-bootstrap\\\\esm\\\\Row.js" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
          );
        },
        'C:\\AnaxisTech Projects\\Suvrankala\\suvarnakala_frontend\\node_modules\\react-bootstrap\\esm\\Row.js',
        'default'
      );
    },
    47047: (e, t, o) => {
      'use strict';
      o.d(t, { default: () => r });
      let r = (0, o(12907).registerClientReference)(
        function () {
          throw Error(
            'Attempted to call the default export of "C:\\\\AnaxisTech Projects\\\\Suvrankala\\\\suvarnakala_frontend\\\\node_modules\\\\react-bootstrap\\\\esm\\\\Container.js" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
          );
        },
        'C:\\AnaxisTech Projects\\Suvrankala\\suvarnakala_frontend\\node_modules\\react-bootstrap\\esm\\Container.js',
        'default'
      );
    },
    49603: (e, t, o) => {
      let { createProxy: r } = o(39844);
      e.exports = r(
        'C:\\AnaxisTech Projects\\Suvrankala\\suvarnakala_frontend\\node_modules\\next\\dist\\client\\image-component.js'
      );
    },
    52730: (e, t, o) => {
      'use strict';
      o.d(t, { default: () => r });
      let r = (0, o(12907).registerClientReference)(
        function () {
          throw Error(
            'Attempted to call the default export of "C:\\\\AnaxisTech Projects\\\\Suvrankala\\\\suvarnakala_frontend\\\\node_modules\\\\react-bootstrap\\\\esm\\\\Button.js" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
          );
        },
        'C:\\AnaxisTech Projects\\Suvrankala\\suvarnakala_frontend\\node_modules\\react-bootstrap\\esm\\Button.js',
        'default'
      );
    },
    53384: (e, t, o) => {
      'use strict';
      o.d(t, { default: () => n.a });
      var r = o(70099),
        n = o.n(r);
    },
    70099: (e, t, o) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        !(function (e, t) {
          for (var o in t) Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
        })(t, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return s;
          },
        });
      let r = o(72639),
        n = o(9131),
        i = o(49603),
        a = r._(o(32091));
      function s(e) {
        let { props: t } = (0, n.getImgProps)(e, {
          defaultLoader: a.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: '/_next/image',
            loader: 'default',
            dangerouslyAllowSVG: !1,
            unoptimized: !0,
          },
        });
        for (let [e, o] of Object.entries(t)) void 0 === o && delete t[e];
        return { props: t };
      }
      let l = i.Image;
    },
    91820: (e, t, o) => {
      'use strict';
      o.d(t, { default: () => u });
      var r = o(69662),
        n = o.n(r),
        i = o(43210),
        a = o(98466),
        s = o(60687);
      let l = i.forwardRef((e, t) => {
        let [{ className: o, ...r }, { as: i = 'div', bsPrefix: l, spans: u }] = (function ({
          as: e,
          bsPrefix: t,
          className: o,
          ...r
        }) {
          t = (0, a.oU)(t, 'col');
          let i = (0, a.gy)(),
            s = (0, a.Jm)(),
            l = [],
            u = [];
          return (
            i.forEach((e) => {
              let o,
                n,
                i,
                a = r[e];
              delete r[e],
                'object' == typeof a && null != a
                  ? ({ span: o, offset: n, order: i } = a)
                  : (o = a);
              let d = e !== s ? `-${e}` : '';
              o && l.push(!0 === o ? `${t}${d}` : `${t}${d}-${o}`),
                null != i && u.push(`order${d}-${i}`),
                null != n && u.push(`offset${d}-${n}`);
            }),
            [
              { ...r, className: n()(o, ...l, ...u) },
              { as: e, bsPrefix: t, spans: l },
            ]
          );
        })(e);
        return (0, s.jsx)(i, { ...r, ref: t, className: n()(o, !u.length && l) });
      });
      l.displayName = 'Col';
      let u = l;
    },
    94146: (e, t, o) => {
      'use strict';
      o.d(t, { default: () => u });
      var r = o(69662),
        n = o.n(r),
        i = o(43210),
        a = o(98466),
        s = o(60687);
      let l = i.forwardRef(({ bsPrefix: e, className: t, as: o = 'div', ...r }, i) => {
        let l = (0, a.oU)(e, 'row'),
          u = (0, a.gy)(),
          d = (0, a.Jm)(),
          c = `${l}-cols`,
          f = [];
        return (
          u.forEach((e) => {
            let t,
              o = r[e];
            delete r[e], null != o && 'object' == typeof o ? ({ cols: t } = o) : (t = o);
            let n = e !== d ? `-${e}` : '';
            null != t && f.push(`${c}${n}-${t}`);
          }),
          (0, s.jsx)(o, { ref: i, ...r, className: n()(t, l, ...f) })
        );
      });
      l.displayName = 'Row';
      let u = l;
    },
  });
