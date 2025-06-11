(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [348],
  {
    255: (e, t, n) => {
      'use strict';
      n.d(t, { W: () => i });
      var r = n(89447);
      function i(e) {
        return +(0, r.a)(e);
      }
    },
    3898: (e, t, n) => {
      'use strict';
      n.d(t, { r: () => a });
      var r = n(61183),
        i = n(6711);
      function a(e, t, n) {
        let [a, o] = (0, r.x)(null == n ? void 0 : n.in, e, t);
        return +(0, i.o)(a) == +(0, i.o)(o);
      }
    },
    6711: (e, t, n) => {
      'use strict';
      n.d(t, { o: () => i });
      var r = n(89447);
      function i(e, t) {
        let n = (0, r.a)(e, null == t ? void 0 : t.in);
        return n.setHours(0, 0, 0, 0), n;
      }
    },
    7038: (e, t, n) => {
      'use strict';
      n.d(t, { F: () => i });
      var r = n(89447);
      function i(e, t) {
        return Math.trunc((0, r.a)(e, null == t ? void 0 : t.in).getMonth() / 3) + 1;
      }
    },
    7239: (e, t, n) => {
      'use strict';
      n.d(t, { w: () => i });
      var r = n(25703);
      function i(e, t) {
        return 'function' == typeof e
          ? e(t)
          : e && 'object' == typeof e && r._P in e
            ? e[r._P](t)
            : e instanceof Date
              ? new e.constructor(t)
              : new Date(t);
      }
    },
    8093: (e, t, n) => {
      'use strict';
      n.d(t, { c: () => l });
      let r = {
        lessThanXSeconds: { one: 'less than a second', other: 'less than {{count}} seconds' },
        xSeconds: { one: '1 second', other: '{{count}} seconds' },
        halfAMinute: 'half a minute',
        lessThanXMinutes: { one: 'less than a minute', other: 'less than {{count}} minutes' },
        xMinutes: { one: '1 minute', other: '{{count}} minutes' },
        aboutXHours: { one: 'about 1 hour', other: 'about {{count}} hours' },
        xHours: { one: '1 hour', other: '{{count}} hours' },
        xDays: { one: '1 day', other: '{{count}} days' },
        aboutXWeeks: { one: 'about 1 week', other: 'about {{count}} weeks' },
        xWeeks: { one: '1 week', other: '{{count}} weeks' },
        aboutXMonths: { one: 'about 1 month', other: 'about {{count}} months' },
        xMonths: { one: '1 month', other: '{{count}} months' },
        aboutXYears: { one: 'about 1 year', other: 'about {{count}} years' },
        xYears: { one: '1 year', other: '{{count}} years' },
        overXYears: { one: 'over 1 year', other: 'over {{count}} years' },
        almostXYears: { one: 'almost 1 year', other: 'almost {{count}} years' },
      };
      function i(e) {
        return function () {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = t.width ? String(t.width) : e.defaultWidth;
          return e.formats[n] || e.formats[e.defaultWidth];
        };
      }
      let a = {
          date: i({
            formats: {
              full: 'EEEE, MMMM do, y',
              long: 'MMMM do, y',
              medium: 'MMM d, y',
              short: 'MM/dd/yyyy',
            },
            defaultWidth: 'full',
          }),
          time: i({
            formats: {
              full: 'h:mm:ss a zzzz',
              long: 'h:mm:ss a z',
              medium: 'h:mm:ss a',
              short: 'h:mm a',
            },
            defaultWidth: 'full',
          }),
          dateTime: i({
            formats: {
              full: "{{date}} 'at' {{time}}",
              long: "{{date}} 'at' {{time}}",
              medium: '{{date}}, {{time}}',
              short: '{{date}}, {{time}}',
            },
            defaultWidth: 'full',
          }),
        },
        o = {
          lastWeek: "'last' eeee 'at' p",
          yesterday: "'yesterday at' p",
          today: "'today at' p",
          tomorrow: "'tomorrow at' p",
          nextWeek: "eeee 'at' p",
          other: 'P',
        };
      function s(e) {
        return (t, n) => {
          let r;
          if (
            'formatting' ===
              ((null == n ? void 0 : n.context) ? String(n.context) : 'standalone') &&
            e.formattingValues
          ) {
            let t = e.defaultFormattingWidth || e.defaultWidth,
              i = (null == n ? void 0 : n.width) ? String(n.width) : t;
            r = e.formattingValues[i] || e.formattingValues[t];
          } else {
            let t = e.defaultWidth,
              i = (null == n ? void 0 : n.width) ? String(n.width) : e.defaultWidth;
            r = e.values[i] || e.values[t];
          }
          return r[e.argumentCallback ? e.argumentCallback(t) : t];
        };
      }
      function u(e) {
        return function (t) {
          let n,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = r.width,
            a = (i && e.matchPatterns[i]) || e.matchPatterns[e.defaultMatchWidth],
            o = t.match(a);
          if (!o) return null;
          let s = o[0],
            u = (i && e.parsePatterns[i]) || e.parsePatterns[e.defaultParseWidth],
            l = Array.isArray(u)
              ? (function (e, t) {
                  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
                })(u, (e) => e.test(s))
              : (function (e, t) {
                  for (let n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
                })(u, (e) => e.test(s));
          return (
            (n = e.valueCallback ? e.valueCallback(l) : l),
            { value: (n = r.valueCallback ? r.valueCallback(n) : n), rest: t.slice(s.length) }
          );
        };
      }
      let l = {
        code: 'en-US',
        formatDistance: (e, t, n) => {
          let i,
            a = r[e];
          if (
            ((i =
              'string' == typeof a
                ? a
                : 1 === t
                  ? a.one
                  : a.other.replace('{{count}}', t.toString())),
            null == n ? void 0 : n.addSuffix)
          )
            if (n.comparison && n.comparison > 0) return 'in ' + i;
            else return i + ' ago';
          return i;
        },
        formatLong: a,
        formatRelative: (e, t, n, r) => o[e],
        localize: {
          ordinalNumber: (e, t) => {
            let n = Number(e),
              r = n % 100;
            if (r > 20 || r < 10)
              switch (r % 10) {
                case 1:
                  return n + 'st';
                case 2:
                  return n + 'nd';
                case 3:
                  return n + 'rd';
              }
            return n + 'th';
          },
          era: s({
            values: {
              narrow: ['B', 'A'],
              abbreviated: ['BC', 'AD'],
              wide: ['Before Christ', 'Anno Domini'],
            },
            defaultWidth: 'wide',
          }),
          quarter: s({
            values: {
              narrow: ['1', '2', '3', '4'],
              abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
              wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
            },
            defaultWidth: 'wide',
            argumentCallback: (e) => e - 1,
          }),
          month: s({
            values: {
              narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
              abbreviated: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ],
              wide: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
              ],
            },
            defaultWidth: 'wide',
          }),
          day: s({
            values: {
              narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
              short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
              abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
              wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            },
            defaultWidth: 'wide',
          }),
          dayPeriod: s({
            values: {
              narrow: {
                am: 'a',
                pm: 'p',
                midnight: 'mi',
                noon: 'n',
                morning: 'morning',
                afternoon: 'afternoon',
                evening: 'evening',
                night: 'night',
              },
              abbreviated: {
                am: 'AM',
                pm: 'PM',
                midnight: 'midnight',
                noon: 'noon',
                morning: 'morning',
                afternoon: 'afternoon',
                evening: 'evening',
                night: 'night',
              },
              wide: {
                am: 'a.m.',
                pm: 'p.m.',
                midnight: 'midnight',
                noon: 'noon',
                morning: 'morning',
                afternoon: 'afternoon',
                evening: 'evening',
                night: 'night',
              },
            },
            defaultWidth: 'wide',
            formattingValues: {
              narrow: {
                am: 'a',
                pm: 'p',
                midnight: 'mi',
                noon: 'n',
                morning: 'in the morning',
                afternoon: 'in the afternoon',
                evening: 'in the evening',
                night: 'at night',
              },
              abbreviated: {
                am: 'AM',
                pm: 'PM',
                midnight: 'midnight',
                noon: 'noon',
                morning: 'in the morning',
                afternoon: 'in the afternoon',
                evening: 'in the evening',
                night: 'at night',
              },
              wide: {
                am: 'a.m.',
                pm: 'p.m.',
                midnight: 'midnight',
                noon: 'noon',
                morning: 'in the morning',
                afternoon: 'in the afternoon',
                evening: 'in the evening',
                night: 'at night',
              },
            },
            defaultFormattingWidth: 'wide',
          }),
        },
        match: {
          ordinalNumber: (function (e) {
            return function (t) {
              let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = t.match(e.matchPattern);
              if (!r) return null;
              let i = r[0],
                a = t.match(e.parsePattern);
              if (!a) return null;
              let o = e.valueCallback ? e.valueCallback(a[0]) : a[0];
              return {
                value: (o = n.valueCallback ? n.valueCallback(o) : o),
                rest: t.slice(i.length),
              };
            };
          })({
            matchPattern: /^(\d+)(th|st|nd|rd)?/i,
            parsePattern: /\d+/i,
            valueCallback: (e) => parseInt(e, 10),
          }),
          era: u({
            matchPatterns: {
              narrow: /^(b|a)/i,
              abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
              wide: /^(before christ|before common era|anno domini|common era)/i,
            },
            defaultMatchWidth: 'wide',
            parsePatterns: { any: [/^b/i, /^(a|c)/i] },
            defaultParseWidth: 'any',
          }),
          quarter: u({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^q[1234]/i,
              wide: /^[1234](th|st|nd|rd)? quarter/i,
            },
            defaultMatchWidth: 'wide',
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: 'any',
            valueCallback: (e) => e + 1,
          }),
          month: u({
            matchPatterns: {
              narrow: /^[jfmasond]/i,
              abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
              wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
            },
            defaultMatchWidth: 'wide',
            parsePatterns: {
              narrow: [
                /^j/i,
                /^f/i,
                /^m/i,
                /^a/i,
                /^m/i,
                /^j/i,
                /^j/i,
                /^a/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
              any: [
                /^ja/i,
                /^f/i,
                /^mar/i,
                /^ap/i,
                /^may/i,
                /^jun/i,
                /^jul/i,
                /^au/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
            },
            defaultParseWidth: 'any',
          }),
          day: u({
            matchPatterns: {
              narrow: /^[smtwf]/i,
              short: /^(su|mo|tu|we|th|fr|sa)/i,
              abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
              wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
            },
            defaultMatchWidth: 'wide',
            parsePatterns: {
              narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
              any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
            },
            defaultParseWidth: 'any',
          }),
          dayPeriod: u({
            matchPatterns: {
              narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
              any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
            },
            defaultMatchWidth: 'any',
            parsePatterns: {
              any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /^mi/i,
                noon: /^no/i,
                morning: /morning/i,
                afternoon: /afternoon/i,
                evening: /evening/i,
                night: /night/i,
              },
            },
            defaultParseWidth: 'any',
          }),
        },
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      };
    },
    9107: (e, t, n) => {
      'use strict';
      n.d(t, { e: () => i });
      var r = n(40714);
      function i(e, t, n) {
        return (0, r.f)(e, -t, n);
      }
    },
    10265: (e, t, n) => {
      'use strict';
      n.d(t, { c: () => i });
      var r = n(39624);
      function i(e, t, n) {
        return (0, r.z)(e, -t, n);
      }
    },
    11518: (e, t, n) => {
      'use strict';
      e.exports = n(82269).style;
    },
    15685: () => {},
    16687: (e, t, n) => {
      'use strict';
      n.d(t, { g: () => i });
      var r = n(89447);
      function i(e, t, n) {
        let i = (0, r.a)(e, null == n ? void 0 : n.in);
        return i.setSeconds(t), i;
      }
    },
    17519: (e, t, n) => {
      'use strict';
      n.d(t, { s: () => u });
      var r = n(25703),
        i = n(70540),
        a = n(7239),
        o = n(71182),
        s = n(89447);
      function u(e, t) {
        let n = (0, s.a)(e, null == t ? void 0 : t.in);
        return (
          Math.round(
            ((0, i.b)(n) -
              (function (e, t) {
                let n = (0, o.p)(e, void 0),
                  r = (0, a.w)(e, 0);
                return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), (0, i.b)(r);
              })(n)) /
              r.my
          ) + 1
        );
      }
    },
    19315: (e, t, n) => {
      'use strict';
      n.d(t, { h: () => s });
      var r = n(95490),
        i = n(7239),
        a = n(84423),
        o = n(89447);
      function s(e, t) {
        var n, s, u, l, c, d, f, h;
        let m = (0, o.a)(e, null == t ? void 0 : t.in),
          g = m.getFullYear(),
          p = (0, r.q)(),
          v =
            null !=
            (h =
              null !=
              (f =
                null !=
                (d =
                  null != (c = null == t ? void 0 : t.firstWeekContainsDate)
                    ? c
                    : null == t || null == (s = t.locale) || null == (n = s.options)
                      ? void 0
                      : n.firstWeekContainsDate)
                  ? d
                  : p.firstWeekContainsDate)
                ? f
                : null == (l = p.locale) || null == (u = l.options)
                  ? void 0
                  : u.firstWeekContainsDate)
              ? h
              : 1,
          w = (0, i.w)((null == t ? void 0 : t.in) || e, 0);
        w.setFullYear(g + 1, 0, v), w.setHours(0, 0, 0, 0);
        let y = (0, a.k)(w, t),
          b = (0, i.w)((null == t ? void 0 : t.in) || e, 0);
        b.setFullYear(g, 0, v), b.setHours(0, 0, 0, 0);
        let x = (0, a.k)(b, t);
        return +m >= +y ? g + 1 : +m >= +x ? g : g - 1;
      }
    },
    19828: (e, t, n) => {
      'use strict';
      n.d(t, { D: () => i });
      var r = n(89447);
      function i(e, t) {
        let n = (0, r.a)(e, null == t ? void 0 : t.in);
        return n.setHours(23, 59, 59, 999), n;
      }
    },
    20856: (e, t, n) => {
      'use strict';
      n.d(t, { T: () => a });
      var r = n(7239),
        i = n(89447);
      function a(e, t) {
        let n,
          a = null == t ? void 0 : t.in;
        return (
          e.forEach((e) => {
            a || 'object' != typeof e || (a = r.w.bind(null, e));
            let t = (0, i.a)(e, a);
            (!n || n < t || isNaN(+t)) && (n = t);
          }),
          (0, r.w)(a, n || NaN)
        );
      }
    },
    21391: (e, t, n) => {
      'use strict';
      n.d(t, { N: () => l });
      var r = n(25703),
        i = n(84423),
        a = n(95490),
        o = n(7239),
        s = n(19315),
        u = n(89447);
      function l(e, t) {
        let n = (0, u.a)(e, null == t ? void 0 : t.in);
        return (
          Math.round(
            ((0, i.k)(n, t) -
              (function (e, t) {
                var n, r, u, l, c, d, f, h;
                let m = (0, a.q)(),
                  g =
                    null !=
                    (h =
                      null !=
                      (f =
                        null !=
                        (d =
                          null != (c = null == t ? void 0 : t.firstWeekContainsDate)
                            ? c
                            : null == t || null == (r = t.locale) || null == (n = r.options)
                              ? void 0
                              : n.firstWeekContainsDate)
                          ? d
                          : m.firstWeekContainsDate)
                        ? f
                        : null == (l = m.locale) || null == (u = l.options)
                          ? void 0
                          : u.firstWeekContainsDate)
                      ? h
                      : 1,
                  p = (0, s.h)(e, t),
                  v = (0, o.w)((null == t ? void 0 : t.in) || e, 0);
                return v.setFullYear(p, 0, g), v.setHours(0, 0, 0, 0), (0, i.k)(v, t);
              })(n, t)) /
              r.my
          ) + 1
        );
      }
    },
    22739: (e, t, n) => {
      'use strict';
      n.d(t, { i: () => a });
      var r = n(7239),
        i = n(89447);
      function a(e, t, n) {
        let a = (0, i.a)(e, null == n ? void 0 : n.in);
        return isNaN(+a) ? (0, r.w)((null == n ? void 0 : n.in) || e, NaN) : (a.setFullYear(t), a);
      }
    },
    23068: (e, t, n) => {
      'use strict';
      n.d(t, { f: () => a });
      var r = n(99026),
        i = n(89447);
      function a(e) {
        return !((!(0, r.$)(e) && 'number' != typeof e) || isNaN(+(0, i.a)(e)));
      }
    },
    23718: (e) => {
      'use strict';
      e.exports = function (e, t, n, r, i, a, o, s) {
        if (!e) {
          var u;
          if (void 0 === t)
            u = Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
            );
          else {
            var l = [n, r, i, a, o, s],
              c = 0;
            (u = Error(
              t.replace(/%s/g, function () {
                return l[c++];
              })
            )).name = 'Invariant Violation';
          }
          throw ((u.framesToPop = 1), u);
        }
      };
    },
    23910: (e, t, n) => {
      'use strict';
      n.d(t, { p: () => i });
      var r = n(89447);
      function i(e, t) {
        return (0, r.a)(e, null == t ? void 0 : t.in).getDate();
      }
    },
    25126: (e, t, n) => {
      'use strict';
      n.d(t, { Jt: () => u, OS: () => o });
      var r,
        i = n(12115);
      function a() {
        let e = navigator.userAgentData;
        return e && Array.isArray(e.brands)
          ? e.brands
              .map((e) => {
                let { brand: t, version: n } = e;
                return t + '/' + n;
              })
              .join(' ')
          : navigator.userAgent;
      }
      var o = 'undefined' != typeof document ? i.useLayoutEffect : function () {};
      let s = { ...(r || (r = n.t(i, 2))) }.useInsertionEffect || ((e) => e());
      function u(e) {
        let t = i.useRef(() => {});
        return (
          s(() => {
            t.current = e;
          }),
          i.useCallback(function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return null == t.current ? void 0 : t.current(...n);
          }, [])
        );
      }
      let l = () => ({
        getShadowRoot: !0,
        displayCheck:
          'function' == typeof ResizeObserver && ResizeObserver.toString().includes('[native code]')
            ? 'full'
            : 'none',
      });
    },
    25645: (e, t, n) => {
      'use strict';
      n.d(t, { e: () => i });
      var r = n(48882);
      function i(e, t, n) {
        return (0, r.P)(e, 12 * t, n);
      }
    },
    25703: (e, t, n) => {
      'use strict';
      n.d(t, { Cg: () => a, _P: () => u, _m: () => s, my: () => r, s0: () => o, w4: () => i });
      let r = 6048e5,
        i = 864e5,
        a = 6e4,
        o = 36e5,
        s = 1e3,
        u = Symbol.for('constructDateFrom');
    },
    26382: (e, t, n) => {
      'use strict';
      n.d(t, { n: () => i });
      var r = n(89447);
      function i(e, t) {
        return +(0, r.a)(e) == +(0, r.a)(t);
      }
    },
    26440: (e, t, n) => {
      'use strict';
      var r = n(12115),
        i = (function (e) {
          return e && 'object' == typeof e && 'default' in e ? e : { default: e };
        })(r);
      !(function (e) {
        if (!e || 'undefined' == typeof window) return;
        let t = document.createElement('style');
        t.setAttribute('type', 'text/css'), (t.innerHTML = e), document.head.appendChild(t);
      })(
        '.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}'
      ),
        (t.A = r.forwardRef(function (e, t) {
          let {
              style: n = {},
              className: a = '',
              autoFill: o = !1,
              play: s = !0,
              pauseOnHover: u = !1,
              pauseOnClick: l = !1,
              direction: c = 'left',
              speed: d = 50,
              delay: f = 0,
              loop: h = 0,
              gradient: m = !1,
              gradientColor: g = 'white',
              gradientWidth: p = 200,
              onFinish: v,
              onCycleComplete: w,
              onMount: y,
              children: b,
            } = e,
            [x, S] = r.useState(0),
            [k, T] = r.useState(0),
            [M, N] = r.useState(1),
            [D, C] = r.useState(!1),
            R = r.useRef(null),
            E = t || R,
            P = r.useRef(null),
            O = r.useCallback(() => {
              if (P.current && E.current) {
                let e = E.current.getBoundingClientRect(),
                  t = P.current.getBoundingClientRect(),
                  n = e.width,
                  r = t.width;
                ('up' === c || 'down' === c) && ((n = e.height), (r = t.height)),
                  o && n && r ? N(r < n ? Math.ceil(n / r) : 1) : N(1),
                  S(n),
                  T(r);
              }
            }, [o, E, c]);
          r.useEffect(() => {
            if (D && (O(), P.current && E.current)) {
              let e = new ResizeObserver(() => O());
              return (
                e.observe(E.current),
                e.observe(P.current),
                () => {
                  e && e.disconnect();
                }
              );
            }
          }, [O, E, D]),
            r.useEffect(() => {
              O();
            }, [O, b]),
            r.useEffect(() => {
              C(!0);
            }, []),
            r.useEffect(() => {
              'function' == typeof y && y();
            }, []);
          let _ = r.useMemo(() => (o ? (k * M) / d : k < x ? x / d : k / d), [o, x, k, M, d]),
            F = r.useMemo(
              () =>
                Object.assign(Object.assign({}, n), {
                  '--pause-on-hover': !s || u ? 'paused' : 'running',
                  '--pause-on-click': !s || (u && !l) || l ? 'paused' : 'running',
                  '--width': 'up' === c || 'down' === c ? '100vh' : '100%',
                  '--transform':
                    'up' === c ? 'rotate(-90deg)' : 'down' === c ? 'rotate(90deg)' : 'none',
                }),
              [n, s, u, l, c]
            ),
            A = r.useMemo(
              () => ({
                '--gradient-color': g,
                '--gradient-width': 'number' == typeof p ? ''.concat(p, 'px') : p,
              }),
              [g, p]
            ),
            q = r.useMemo(
              () => ({
                '--play': s ? 'running' : 'paused',
                '--direction': 'left' === c ? 'normal' : 'reverse',
                '--duration': ''.concat(_, 's'),
                '--delay': ''.concat(f, 's'),
                '--iteration-count': h ? ''.concat(h) : 'infinite',
                '--min-width': o ? 'auto' : '100%',
              }),
              [s, c, _, f, h, o]
            ),
            Y = r.useMemo(
              () => ({
                '--transform':
                  'up' === c ? 'rotate(90deg)' : 'down' === c ? 'rotate(-90deg)' : 'none',
              }),
              [c]
            ),
            j = r.useCallback(
              (e) =>
                [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, t) =>
                  i.default.createElement(
                    r.Fragment,
                    { key: t },
                    r.Children.map(b, (e) =>
                      i.default.createElement('div', { style: Y, className: 'rfm-child' }, e)
                    )
                  )
                ),
              [Y, b]
            );
          return D
            ? i.default.createElement(
                'div',
                { ref: E, style: F, className: 'rfm-marquee-container ' + a },
                m && i.default.createElement('div', { style: A, className: 'rfm-overlay' }),
                i.default.createElement(
                  'div',
                  {
                    className: 'rfm-marquee',
                    style: q,
                    onAnimationIteration: w,
                    onAnimationEnd: v,
                  },
                  i.default.createElement(
                    'div',
                    { className: 'rfm-initial-child-container', ref: P },
                    r.Children.map(b, (e) =>
                      i.default.createElement('div', { style: Y, className: 'rfm-child' }, e)
                    )
                  ),
                  j(M - 1)
                ),
                i.default.createElement('div', { className: 'rfm-marquee', style: q }, j(M))
              )
            : null;
        }));
    },
    26681: (e, t, n) => {
      'use strict';
      n.d(t, { GP: () => D });
      var r = n(8093),
        i = n(95490),
        a = n(50007),
        o = n(67386),
        s = n(89447),
        u = n(17519),
        l = n(71182),
        c = n(21391),
        d = n(19315);
      function f(e, t) {
        let n = Math.abs(e).toString().padStart(t, '0');
        return (e < 0 ? '-' : '') + n;
      }
      let h = {
          y(e, t) {
            let n = e.getFullYear(),
              r = n > 0 ? n : 1 - n;
            return f('yy' === t ? r % 100 : r, t.length);
          },
          M(e, t) {
            let n = e.getMonth();
            return 'M' === t ? String(n + 1) : f(n + 1, 2);
          },
          d: (e, t) => f(e.getDate(), t.length),
          a(e, t) {
            let n = e.getHours() / 12 >= 1 ? 'pm' : 'am';
            switch (t) {
              case 'a':
              case 'aa':
                return n.toUpperCase();
              case 'aaa':
                return n;
              case 'aaaaa':
                return n[0];
              default:
                return 'am' === n ? 'a.m.' : 'p.m.';
            }
          },
          h: (e, t) => f(e.getHours() % 12 || 12, t.length),
          H: (e, t) => f(e.getHours(), t.length),
          m: (e, t) => f(e.getMinutes(), t.length),
          s: (e, t) => f(e.getSeconds(), t.length),
          S(e, t) {
            let n = t.length;
            return f(Math.trunc(e.getMilliseconds() * Math.pow(10, n - 3)), t.length);
          },
        },
        m = {
          midnight: 'midnight',
          noon: 'noon',
          morning: 'morning',
          afternoon: 'afternoon',
          evening: 'evening',
          night: 'night',
        },
        g = {
          G: function (e, t, n) {
            let r = +(e.getFullYear() > 0);
            switch (t) {
              case 'G':
              case 'GG':
              case 'GGG':
                return n.era(r, { width: 'abbreviated' });
              case 'GGGGG':
                return n.era(r, { width: 'narrow' });
              default:
                return n.era(r, { width: 'wide' });
            }
          },
          y: function (e, t, n) {
            if ('yo' === t) {
              let t = e.getFullYear();
              return n.ordinalNumber(t > 0 ? t : 1 - t, { unit: 'year' });
            }
            return h.y(e, t);
          },
          Y: function (e, t, n, r) {
            let i = (0, d.h)(e, r),
              a = i > 0 ? i : 1 - i;
            return 'YY' === t
              ? f(a % 100, 2)
              : 'Yo' === t
                ? n.ordinalNumber(a, { unit: 'year' })
                : f(a, t.length);
          },
          R: function (e, t) {
            return f((0, l.p)(e), t.length);
          },
          u: function (e, t) {
            return f(e.getFullYear(), t.length);
          },
          Q: function (e, t, n) {
            let r = Math.ceil((e.getMonth() + 1) / 3);
            switch (t) {
              case 'Q':
                return String(r);
              case 'QQ':
                return f(r, 2);
              case 'Qo':
                return n.ordinalNumber(r, { unit: 'quarter' });
              case 'QQQ':
                return n.quarter(r, { width: 'abbreviated', context: 'formatting' });
              case 'QQQQQ':
                return n.quarter(r, { width: 'narrow', context: 'formatting' });
              default:
                return n.quarter(r, { width: 'wide', context: 'formatting' });
            }
          },
          q: function (e, t, n) {
            let r = Math.ceil((e.getMonth() + 1) / 3);
            switch (t) {
              case 'q':
                return String(r);
              case 'qq':
                return f(r, 2);
              case 'qo':
                return n.ordinalNumber(r, { unit: 'quarter' });
              case 'qqq':
                return n.quarter(r, { width: 'abbreviated', context: 'standalone' });
              case 'qqqqq':
                return n.quarter(r, { width: 'narrow', context: 'standalone' });
              default:
                return n.quarter(r, { width: 'wide', context: 'standalone' });
            }
          },
          M: function (e, t, n) {
            let r = e.getMonth();
            switch (t) {
              case 'M':
              case 'MM':
                return h.M(e, t);
              case 'Mo':
                return n.ordinalNumber(r + 1, { unit: 'month' });
              case 'MMM':
                return n.month(r, { width: 'abbreviated', context: 'formatting' });
              case 'MMMMM':
                return n.month(r, { width: 'narrow', context: 'formatting' });
              default:
                return n.month(r, { width: 'wide', context: 'formatting' });
            }
          },
          L: function (e, t, n) {
            let r = e.getMonth();
            switch (t) {
              case 'L':
                return String(r + 1);
              case 'LL':
                return f(r + 1, 2);
              case 'Lo':
                return n.ordinalNumber(r + 1, { unit: 'month' });
              case 'LLL':
                return n.month(r, { width: 'abbreviated', context: 'standalone' });
              case 'LLLLL':
                return n.month(r, { width: 'narrow', context: 'standalone' });
              default:
                return n.month(r, { width: 'wide', context: 'standalone' });
            }
          },
          w: function (e, t, n, r) {
            let i = (0, c.N)(e, r);
            return 'wo' === t ? n.ordinalNumber(i, { unit: 'week' }) : f(i, t.length);
          },
          I: function (e, t, n) {
            let r = (0, u.s)(e);
            return 'Io' === t ? n.ordinalNumber(r, { unit: 'week' }) : f(r, t.length);
          },
          d: function (e, t, n) {
            return 'do' === t ? n.ordinalNumber(e.getDate(), { unit: 'date' }) : h.d(e, t);
          },
          D: function (e, t, n) {
            let r = (function (e, t) {
              let n = (0, s.a)(e, void 0);
              return (0, a.m)(n, (0, o.D)(n)) + 1;
            })(e);
            return 'Do' === t ? n.ordinalNumber(r, { unit: 'dayOfYear' }) : f(r, t.length);
          },
          E: function (e, t, n) {
            let r = e.getDay();
            switch (t) {
              case 'E':
              case 'EE':
              case 'EEE':
                return n.day(r, { width: 'abbreviated', context: 'formatting' });
              case 'EEEEE':
                return n.day(r, { width: 'narrow', context: 'formatting' });
              case 'EEEEEE':
                return n.day(r, { width: 'short', context: 'formatting' });
              default:
                return n.day(r, { width: 'wide', context: 'formatting' });
            }
          },
          e: function (e, t, n, r) {
            let i = e.getDay(),
              a = (i - r.weekStartsOn + 8) % 7 || 7;
            switch (t) {
              case 'e':
                return String(a);
              case 'ee':
                return f(a, 2);
              case 'eo':
                return n.ordinalNumber(a, { unit: 'day' });
              case 'eee':
                return n.day(i, { width: 'abbreviated', context: 'formatting' });
              case 'eeeee':
                return n.day(i, { width: 'narrow', context: 'formatting' });
              case 'eeeeee':
                return n.day(i, { width: 'short', context: 'formatting' });
              default:
                return n.day(i, { width: 'wide', context: 'formatting' });
            }
          },
          c: function (e, t, n, r) {
            let i = e.getDay(),
              a = (i - r.weekStartsOn + 8) % 7 || 7;
            switch (t) {
              case 'c':
                return String(a);
              case 'cc':
                return f(a, t.length);
              case 'co':
                return n.ordinalNumber(a, { unit: 'day' });
              case 'ccc':
                return n.day(i, { width: 'abbreviated', context: 'standalone' });
              case 'ccccc':
                return n.day(i, { width: 'narrow', context: 'standalone' });
              case 'cccccc':
                return n.day(i, { width: 'short', context: 'standalone' });
              default:
                return n.day(i, { width: 'wide', context: 'standalone' });
            }
          },
          i: function (e, t, n) {
            let r = e.getDay(),
              i = 0 === r ? 7 : r;
            switch (t) {
              case 'i':
                return String(i);
              case 'ii':
                return f(i, t.length);
              case 'io':
                return n.ordinalNumber(i, { unit: 'day' });
              case 'iii':
                return n.day(r, { width: 'abbreviated', context: 'formatting' });
              case 'iiiii':
                return n.day(r, { width: 'narrow', context: 'formatting' });
              case 'iiiiii':
                return n.day(r, { width: 'short', context: 'formatting' });
              default:
                return n.day(r, { width: 'wide', context: 'formatting' });
            }
          },
          a: function (e, t, n) {
            let r = e.getHours() / 12 >= 1 ? 'pm' : 'am';
            switch (t) {
              case 'a':
              case 'aa':
                return n.dayPeriod(r, { width: 'abbreviated', context: 'formatting' });
              case 'aaa':
                return n
                  .dayPeriod(r, { width: 'abbreviated', context: 'formatting' })
                  .toLowerCase();
              case 'aaaaa':
                return n.dayPeriod(r, { width: 'narrow', context: 'formatting' });
              default:
                return n.dayPeriod(r, { width: 'wide', context: 'formatting' });
            }
          },
          b: function (e, t, n) {
            let r,
              i = e.getHours();
            switch (
              ((r = 12 === i ? m.noon : 0 === i ? m.midnight : i / 12 >= 1 ? 'pm' : 'am'), t)
            ) {
              case 'b':
              case 'bb':
                return n.dayPeriod(r, { width: 'abbreviated', context: 'formatting' });
              case 'bbb':
                return n
                  .dayPeriod(r, { width: 'abbreviated', context: 'formatting' })
                  .toLowerCase();
              case 'bbbbb':
                return n.dayPeriod(r, { width: 'narrow', context: 'formatting' });
              default:
                return n.dayPeriod(r, { width: 'wide', context: 'formatting' });
            }
          },
          B: function (e, t, n) {
            let r,
              i = e.getHours();
            switch (
              ((r = i >= 17 ? m.evening : i >= 12 ? m.afternoon : i >= 4 ? m.morning : m.night), t)
            ) {
              case 'B':
              case 'BB':
              case 'BBB':
                return n.dayPeriod(r, { width: 'abbreviated', context: 'formatting' });
              case 'BBBBB':
                return n.dayPeriod(r, { width: 'narrow', context: 'formatting' });
              default:
                return n.dayPeriod(r, { width: 'wide', context: 'formatting' });
            }
          },
          h: function (e, t, n) {
            if ('ho' === t) {
              let t = e.getHours() % 12;
              return 0 === t && (t = 12), n.ordinalNumber(t, { unit: 'hour' });
            }
            return h.h(e, t);
          },
          H: function (e, t, n) {
            return 'Ho' === t ? n.ordinalNumber(e.getHours(), { unit: 'hour' }) : h.H(e, t);
          },
          K: function (e, t, n) {
            let r = e.getHours() % 12;
            return 'Ko' === t ? n.ordinalNumber(r, { unit: 'hour' }) : f(r, t.length);
          },
          k: function (e, t, n) {
            let r = e.getHours();
            return (0 === r && (r = 24), 'ko' === t)
              ? n.ordinalNumber(r, { unit: 'hour' })
              : f(r, t.length);
          },
          m: function (e, t, n) {
            return 'mo' === t ? n.ordinalNumber(e.getMinutes(), { unit: 'minute' }) : h.m(e, t);
          },
          s: function (e, t, n) {
            return 'so' === t ? n.ordinalNumber(e.getSeconds(), { unit: 'second' }) : h.s(e, t);
          },
          S: function (e, t) {
            return h.S(e, t);
          },
          X: function (e, t, n) {
            let r = e.getTimezoneOffset();
            if (0 === r) return 'Z';
            switch (t) {
              case 'X':
                return v(r);
              case 'XXXX':
              case 'XX':
                return w(r);
              default:
                return w(r, ':');
            }
          },
          x: function (e, t, n) {
            let r = e.getTimezoneOffset();
            switch (t) {
              case 'x':
                return v(r);
              case 'xxxx':
              case 'xx':
                return w(r);
              default:
                return w(r, ':');
            }
          },
          O: function (e, t, n) {
            let r = e.getTimezoneOffset();
            switch (t) {
              case 'O':
              case 'OO':
              case 'OOO':
                return 'GMT' + p(r, ':');
              default:
                return 'GMT' + w(r, ':');
            }
          },
          z: function (e, t, n) {
            let r = e.getTimezoneOffset();
            switch (t) {
              case 'z':
              case 'zz':
              case 'zzz':
                return 'GMT' + p(r, ':');
              default:
                return 'GMT' + w(r, ':');
            }
          },
          t: function (e, t, n) {
            return f(Math.trunc(e / 1e3), t.length);
          },
          T: function (e, t, n) {
            return f(+e, t.length);
          },
        };
      function p(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
          n = e > 0 ? '-' : '+',
          r = Math.abs(e),
          i = Math.trunc(r / 60),
          a = r % 60;
        return 0 === a ? n + String(i) : n + String(i) + t + f(a, 2);
      }
      function v(e, t) {
        return e % 60 == 0 ? (e > 0 ? '-' : '+') + f(Math.abs(e) / 60, 2) : w(e, t);
      }
      function w(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
          n = Math.abs(e);
        return (e > 0 ? '-' : '+') + f(Math.trunc(n / 60), 2) + t + f(n % 60, 2);
      }
      var y = n(51308),
        b = n(40861),
        x = n(23068);
      let S = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        k = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        T = /^'([^]*?)'?$/,
        M = /''/g,
        N = /[a-zA-Z]/;
      function D(e, t, n) {
        var a, o, u, l, c, d, f, h, m, p, v, w, D, C, R, E, P, O;
        let _ = (0, i.q)(),
          F = null != (p = null != (m = null == n ? void 0 : n.locale) ? m : _.locale) ? p : r.c,
          A =
            null !=
            (C =
              null !=
              (D =
                null !=
                (w =
                  null != (v = null == n ? void 0 : n.firstWeekContainsDate)
                    ? v
                    : null == n || null == (o = n.locale) || null == (a = o.options)
                      ? void 0
                      : a.firstWeekContainsDate)
                  ? w
                  : _.firstWeekContainsDate)
                ? D
                : null == (l = _.locale) || null == (u = l.options)
                  ? void 0
                  : u.firstWeekContainsDate)
              ? C
              : 1,
          q =
            null !=
            (O =
              null !=
              (P =
                null !=
                (E =
                  null != (R = null == n ? void 0 : n.weekStartsOn)
                    ? R
                    : null == n || null == (d = n.locale) || null == (c = d.options)
                      ? void 0
                      : c.weekStartsOn)
                  ? E
                  : _.weekStartsOn)
                ? P
                : null == (h = _.locale) || null == (f = h.options)
                  ? void 0
                  : f.weekStartsOn)
              ? O
              : 0,
          Y = (0, s.a)(e, null == n ? void 0 : n.in);
        if (!(0, x.f)(Y)) throw RangeError('Invalid time value');
        let j = t
          .match(k)
          .map((e) => {
            let t = e[0];
            return 'p' === t || 'P' === t ? (0, y.m[t])(e, F.formatLong) : e;
          })
          .join('')
          .match(S)
          .map((e) => {
            if ("''" === e) return { isToken: !1, value: "'" };
            let t = e[0];
            if ("'" === t)
              return {
                isToken: !1,
                value: (function (e) {
                  let t = e.match(T);
                  return t ? t[1].replace(M, "'") : e;
                })(e),
              };
            if (g[t]) return { isToken: !0, value: e };
            if (t.match(N))
              throw RangeError(
                'Format string contains an unescaped latin alphabet character `' + t + '`'
              );
            return { isToken: !1, value: e };
          });
        F.localize.preprocessor && (j = F.localize.preprocessor(Y, j));
        let L = { firstWeekContainsDate: A, weekStartsOn: q, locale: F };
        return j
          .map((r) => {
            if (!r.isToken) return r.value;
            let i = r.value;
            return (
              ((!(null == n ? void 0 : n.useAdditionalWeekYearTokens) && (0, b.xM)(i)) ||
                (!(null == n ? void 0 : n.useAdditionalDayOfYearTokens) && (0, b.ef)(i))) &&
                (0, b.Ss)(i, t, String(e)),
              (0, g[i[0]])(Y, i, F.localize, L)
            );
          })
          .join('');
      }
    },
    27981: (e, t, n) => {
      'use strict';
      n.d(t, { a: () => i });
      var r = n(89447);
      function i(e, t) {
        let n = (0, r.a)(e, null == t ? void 0 : t.in),
          i = n.getMonth();
        return n.setMonth(i - (i % 3), 1), n.setHours(0, 0, 0, 0), n;
      }
    },
    28738: (e, t, n) => {
      'use strict';
      n.d(t, { qg: () => ey });
      var r = n(8093),
        i = n(51308),
        a = n(40861),
        o = n(7239),
        s = n(95490),
        u = n(89447);
      class l {
        validate(e, t) {
          return !0;
        }
        constructor() {
          this.subPriority = 0;
        }
      }
      class c extends l {
        validate(e, t) {
          return this.validateValue(e, this.value, t);
        }
        set(e, t, n) {
          return this.setValue(e, t, this.value, n);
        }
        constructor(e, t, n, r, i) {
          super(),
            (this.value = e),
            (this.validateValue = t),
            (this.setValue = n),
            (this.priority = r),
            i && (this.subPriority = i);
        }
      }
      class d extends l {
        set(e, t) {
          return t.timestampIsSet
            ? e
            : (0, o.w)(
                e,
                (function (e, t) {
                  var n, r;
                  let i =
                    'function' == typeof (n = t) &&
                    (null == (r = n.prototype) ? void 0 : r.constructor) === n
                      ? new t(0)
                      : (0, o.w)(t, 0);
                  return (
                    i.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()),
                    i.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()),
                    i
                  );
                })(e, this.context)
              );
        }
        constructor(e, t) {
          super(),
            (this.priority = 10),
            (this.subPriority = -1),
            (this.context = e || ((e) => (0, o.w)(t, e)));
        }
      }
      class f {
        run(e, t, n, r) {
          let i = this.parse(e, t, n, r);
          return i
            ? {
                setter: new c(i.value, this.validate, this.set, this.priority, this.subPriority),
                rest: i.rest,
              }
            : null;
        }
        validate(e, t, n) {
          return !0;
        }
      }
      class h extends f {
        parse(e, t, n) {
          switch (t) {
            case 'G':
            case 'GG':
            case 'GGG':
              return n.era(e, { width: 'abbreviated' }) || n.era(e, { width: 'narrow' });
            case 'GGGGG':
              return n.era(e, { width: 'narrow' });
            default:
              return (
                n.era(e, { width: 'wide' }) ||
                n.era(e, { width: 'abbreviated' }) ||
                n.era(e, { width: 'narrow' })
              );
          }
        }
        set(e, t, n) {
          return (t.era = n), e.setFullYear(n, 0, 1), e.setHours(0, 0, 0, 0), e;
        }
        constructor(...e) {
          super(...e), (this.priority = 140), (this.incompatibleTokens = ['R', 'u', 't', 'T']);
        }
      }
      var m = n(25703);
      let g = {
          month: /^(1[0-2]|0?\d)/,
          date: /^(3[0-1]|[0-2]?\d)/,
          dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
          week: /^(5[0-3]|[0-4]?\d)/,
          hour23h: /^(2[0-3]|[0-1]?\d)/,
          hour24h: /^(2[0-4]|[0-1]?\d)/,
          hour11h: /^(1[0-1]|0?\d)/,
          hour12h: /^(1[0-2]|0?\d)/,
          minute: /^[0-5]?\d/,
          second: /^[0-5]?\d/,
          singleDigit: /^\d/,
          twoDigits: /^\d{1,2}/,
          threeDigits: /^\d{1,3}/,
          fourDigits: /^\d{1,4}/,
          anyDigitsSigned: /^-?\d+/,
          singleDigitSigned: /^-?\d/,
          twoDigitsSigned: /^-?\d{1,2}/,
          threeDigitsSigned: /^-?\d{1,3}/,
          fourDigitsSigned: /^-?\d{1,4}/,
        },
        p = {
          basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
          basic: /^([+-])(\d{2})(\d{2})|Z/,
          basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
          extended: /^([+-])(\d{2}):(\d{2})|Z/,
          extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
        };
      function v(e, t) {
        return e ? { value: t(e.value), rest: e.rest } : e;
      }
      function w(e, t) {
        let n = t.match(e);
        return n ? { value: parseInt(n[0], 10), rest: t.slice(n[0].length) } : null;
      }
      function y(e, t) {
        let n = t.match(e);
        if (!n) return null;
        if ('Z' === n[0]) return { value: 0, rest: t.slice(1) };
        let r = '+' === n[1] ? 1 : -1,
          i = n[2] ? parseInt(n[2], 10) : 0,
          a = n[3] ? parseInt(n[3], 10) : 0,
          o = n[5] ? parseInt(n[5], 10) : 0;
        return { value: r * (i * m.s0 + a * m.Cg + o * m._m), rest: t.slice(n[0].length) };
      }
      function b(e) {
        return w(g.anyDigitsSigned, e);
      }
      function x(e, t) {
        switch (e) {
          case 1:
            return w(g.singleDigit, t);
          case 2:
            return w(g.twoDigits, t);
          case 3:
            return w(g.threeDigits, t);
          case 4:
            return w(g.fourDigits, t);
          default:
            return w(RegExp('^\\d{1,' + e + '}'), t);
        }
      }
      function S(e, t) {
        switch (e) {
          case 1:
            return w(g.singleDigitSigned, t);
          case 2:
            return w(g.twoDigitsSigned, t);
          case 3:
            return w(g.threeDigitsSigned, t);
          case 4:
            return w(g.fourDigitsSigned, t);
          default:
            return w(RegExp('^-?\\d{1,' + e + '}'), t);
        }
      }
      function k(e) {
        switch (e) {
          case 'morning':
            return 4;
          case 'evening':
            return 17;
          case 'pm':
          case 'noon':
          case 'afternoon':
            return 12;
          default:
            return 0;
        }
      }
      function T(e, t) {
        let n,
          r = t > 0,
          i = r ? t : 1 - t;
        if (i <= 50) n = e || 100;
        else {
          let t = i + 50;
          n = e + 100 * Math.trunc(t / 100) - 100 * (e >= t % 100);
        }
        return r ? n : 1 - n;
      }
      function M(e) {
        return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0);
      }
      class N extends f {
        parse(e, t, n) {
          let r = (e) => ({ year: e, isTwoDigitYear: 'yy' === t });
          switch (t) {
            case 'y':
              return v(x(4, e), r);
            case 'yo':
              return v(n.ordinalNumber(e, { unit: 'year' }), r);
            default:
              return v(x(t.length, e), r);
          }
        }
        validate(e, t) {
          return t.isTwoDigitYear || t.year > 0;
        }
        set(e, t, n) {
          let r = e.getFullYear();
          if (n.isTwoDigitYear) {
            let t = T(n.year, r);
            return e.setFullYear(t, 0, 1), e.setHours(0, 0, 0, 0), e;
          }
          let i = 'era' in t && 1 !== t.era ? 1 - n.year : n.year;
          return e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
        }
        constructor(...e) {
          super(...e),
            (this.priority = 130),
            (this.incompatibleTokens = ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T']);
        }
      }
      var D = n(19315),
        C = n(84423);
      class R extends f {
        parse(e, t, n) {
          let r = (e) => ({ year: e, isTwoDigitYear: 'YY' === t });
          switch (t) {
            case 'Y':
              return v(x(4, e), r);
            case 'Yo':
              return v(n.ordinalNumber(e, { unit: 'year' }), r);
            default:
              return v(x(t.length, e), r);
          }
        }
        validate(e, t) {
          return t.isTwoDigitYear || t.year > 0;
        }
        set(e, t, n, r) {
          let i = (0, D.h)(e, r);
          if (n.isTwoDigitYear) {
            let t = T(n.year, i);
            return (
              e.setFullYear(t, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), (0, C.k)(e, r)
            );
          }
          let a = 'era' in t && 1 !== t.era ? 1 - n.year : n.year;
          return (
            e.setFullYear(a, 0, r.firstWeekContainsDate), e.setHours(0, 0, 0, 0), (0, C.k)(e, r)
          );
        }
        constructor(...e) {
          super(...e),
            (this.priority = 130),
            (this.incompatibleTokens = [
              'y',
              'R',
              'u',
              'Q',
              'q',
              'M',
              'L',
              'I',
              'd',
              'D',
              'i',
              't',
              'T',
            ]);
        }
      }
      var E = n(70540);
      class P extends f {
        parse(e, t) {
          return 'R' === t ? S(4, e) : S(t.length, e);
        }
        set(e, t, n) {
          let r = (0, o.w)(e, 0);
          return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), (0, E.b)(r);
        }
        constructor(...e) {
          super(...e),
            (this.priority = 130),
            (this.incompatibleTokens = [
              'G',
              'y',
              'Y',
              'u',
              'Q',
              'q',
              'M',
              'L',
              'w',
              'd',
              'D',
              'e',
              'c',
              't',
              'T',
            ]);
        }
      }
      class O extends f {
        parse(e, t) {
          return 'u' === t ? S(4, e) : S(t.length, e);
        }
        set(e, t, n) {
          return e.setFullYear(n, 0, 1), e.setHours(0, 0, 0, 0), e;
        }
        constructor(...e) {
          super(...e),
            (this.priority = 130),
            (this.incompatibleTokens = ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T']);
        }
      }
      class _ extends f {
        parse(e, t, n) {
          switch (t) {
            case 'Q':
            case 'QQ':
              return x(t.length, e);
            case 'Qo':
              return n.ordinalNumber(e, { unit: 'quarter' });
            case 'QQQ':
              return (
                n.quarter(e, { width: 'abbreviated', context: 'formatting' }) ||
                n.quarter(e, { width: 'narrow', context: 'formatting' })
              );
            case 'QQQQQ':
              return n.quarter(e, { width: 'narrow', context: 'formatting' });
            default:
              return (
                n.quarter(e, { width: 'wide', context: 'formatting' }) ||
                n.quarter(e, { width: 'abbreviated', context: 'formatting' }) ||
                n.quarter(e, { width: 'narrow', context: 'formatting' })
              );
          }
        }
        validate(e, t) {
          return t >= 1 && t <= 4;
        }
        set(e, t, n) {
          return e.setMonth((n - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
        }
        constructor(...e) {
          super(...e),
            (this.priority = 120),
            (this.incompatibleTokens = [
              'Y',
              'R',
              'q',
              'M',
              'L',
              'w',
              'I',
              'd',
              'D',
              'i',
              'e',
              'c',
              't',
              'T',
            ]);
        }
      }
      class F extends f {
        parse(e, t, n) {
          switch (t) {
            case 'q':
            case 'qq':
              return x(t.length, e);
            case 'qo':
              return n.ordinalNumber(e, { unit: 'quarter' });
            case 'qqq':
              return (
                n.quarter(e, { width: 'abbreviated', context: 'standalone' }) ||
                n.quarter(e, { width: 'narrow', context: 'standalone' })
              );
            case 'qqqqq':
              return n.quarter(e, { width: 'narrow', context: 'standalone' });
            default:
              return (
                n.quarter(e, { width: 'wide', context: 'standalone' }) ||
                n.quarter(e, { width: 'abbreviated', context: 'standalone' }) ||
                n.quarter(e, { width: 'narrow', context: 'standalone' })
              );
          }
        }
        validate(e, t) {
          return t >= 1 && t <= 4;
        }
        set(e, t, n) {
          return e.setMonth((n - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
        }
        constructor(...e) {
          super(...e),
            (this.priority = 120),
            (this.incompatibleTokens = [
              'Y',
              'R',
              'Q',
              'M',
              'L',
              'w',
              'I',
              'd',
              'D',
              'i',
              'e',
              'c',
              't',
              'T',
            ]);
        }
      }
      class A extends f {
        parse(e, t, n) {
          let r = (e) => e - 1;
          switch (t) {
            case 'M':
              return v(w(g.month, e), r);
            case 'MM':
              return v(x(2, e), r);
            case 'Mo':
              return v(n.ordinalNumber(e, { unit: 'month' }), r);
            case 'MMM':
              return (
                n.month(e, { width: 'abbreviated', context: 'formatting' }) ||
                n.month(e, { width: 'narrow', context: 'formatting' })
              );
            case 'MMMMM':
              return n.month(e, { width: 'narrow', context: 'formatting' });
            default:
              return (
                n.month(e, { width: 'wide', context: 'formatting' }) ||
                n.month(e, { width: 'abbreviated', context: 'formatting' }) ||
                n.month(e, { width: 'narrow', context: 'formatting' })
              );
          }
        }
        validate(e, t) {
          return t >= 0 && t <= 11;
        }
        set(e, t, n) {
          return e.setMonth(n, 1), e.setHours(0, 0, 0, 0), e;
        }
        constructor(...e) {
          super(...e),
            (this.incompatibleTokens = [
              'Y',
              'R',
              'q',
              'Q',
              'L',
              'w',
              'I',
              'D',
              'i',
              'e',
              'c',
              't',
              'T',
            ]),
            (this.priority = 110);
        }
      }
      class q extends f {
        parse(e, t, n) {
          let r = (e) => e - 1;
          switch (t) {
            case 'L':
              return v(w(g.month, e), r);
            case 'LL':
              return v(x(2, e), r);
            case 'Lo':
              return v(n.ordinalNumber(e, { unit: 'month' }), r);
            case 'LLL':
              return (
                n.month(e, { width: 'abbreviated', context: 'standalone' }) ||
                n.month(e, { width: 'narrow', context: 'standalone' })
              );
            case 'LLLLL':
              return n.month(e, { width: 'narrow', context: 'standalone' });
            default:
              return (
                n.month(e, { width: 'wide', context: 'standalone' }) ||
                n.month(e, { width: 'abbreviated', context: 'standalone' }) ||
                n.month(e, { width: 'narrow', context: 'standalone' })
              );
          }
        }
        validate(e, t) {
          return t >= 0 && t <= 11;
        }
        set(e, t, n) {
          return e.setMonth(n, 1), e.setHours(0, 0, 0, 0), e;
        }
        constructor(...e) {
          super(...e),
            (this.priority = 110),
            (this.incompatibleTokens = [
              'Y',
              'R',
              'q',
              'Q',
              'M',
              'w',
              'I',
              'D',
              'i',
              'e',
              'c',
              't',
              'T',
            ]);
        }
      }
      var Y = n(21391);
      class j extends f {
        parse(e, t, n) {
          switch (t) {
            case 'w':
              return w(g.week, e);
            case 'wo':
              return n.ordinalNumber(e, { unit: 'week' });
            default:
              return x(t.length, e);
          }
        }
        validate(e, t) {
          return t >= 1 && t <= 53;
        }
        set(e, t, n, r) {
          return (0, C.k)(
            (function (e, t, n) {
              let r = (0, u.a)(e, null == n ? void 0 : n.in),
                i = (0, Y.N)(r, n) - t;
              return r.setDate(r.getDate() - 7 * i), (0, u.a)(r, null == n ? void 0 : n.in);
            })(e, n, r),
            r
          );
        }
        constructor(...e) {
          super(...e),
            (this.priority = 100),
            (this.incompatibleTokens = [
              'y',
              'R',
              'u',
              'q',
              'Q',
              'M',
              'L',
              'I',
              'd',
              'D',
              'i',
              't',
              'T',
            ]);
        }
      }
      var L = n(17519);
      class H extends f {
        parse(e, t, n) {
          switch (t) {
            case 'I':
              return w(g.week, e);
            case 'Io':
              return n.ordinalNumber(e, { unit: 'week' });
            default:
              return x(t.length, e);
          }
        }
        validate(e, t) {
          return t >= 1 && t <= 53;
        }
        set(e, t, n) {
          return (0, E.b)(
            (function (e, t, n) {
              let r = (0, u.a)(e, void 0),
                i = (0, L.s)(r, void 0) - t;
              return r.setDate(r.getDate() - 7 * i), r;
            })(e, n)
          );
        }
        constructor(...e) {
          super(...e),
            (this.priority = 100),
            (this.incompatibleTokens = [
              'y',
              'Y',
              'u',
              'q',
              'Q',
              'M',
              'L',
              'w',
              'd',
              'D',
              'e',
              'c',
              't',
              'T',
            ]);
        }
      }
      let z = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        W = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      class I extends f {
        parse(e, t, n) {
          switch (t) {
            case 'd':
              return w(g.date, e);
            case 'do':
              return n.ordinalNumber(e, { unit: 'date' });
            default:
              return x(t.length, e);
          }
        }
        validate(e, t) {
          let n = M(e.getFullYear()),
            r = e.getMonth();
          return n ? t >= 1 && t <= W[r] : t >= 1 && t <= z[r];
        }
        set(e, t, n) {
          return e.setDate(n), e.setHours(0, 0, 0, 0), e;
        }
        constructor(...e) {
          super(...e),
            (this.priority = 90),
            (this.subPriority = 1),
            (this.incompatibleTokens = [
              'Y',
              'R',
              'q',
              'Q',
              'w',
              'I',
              'D',
              'i',
              'e',
              'c',
              't',
              'T',
            ]);
        }
      }
      class U extends f {
        parse(e, t, n) {
          switch (t) {
            case 'D':
            case 'DD':
              return w(g.dayOfYear, e);
            case 'Do':
              return n.ordinalNumber(e, { unit: 'date' });
            default:
              return x(t.length, e);
          }
        }
        validate(e, t) {
          return M(e.getFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365;
        }
        set(e, t, n) {
          return e.setMonth(0, n), e.setHours(0, 0, 0, 0), e;
        }
        constructor(...e) {
          super(...e),
            (this.priority = 90),
            (this.subpriority = 1),
            (this.incompatibleTokens = [
              'Y',
              'R',
              'q',
              'Q',
              'M',
              'L',
              'w',
              'I',
              'd',
              'E',
              'i',
              'e',
              'c',
              't',
              'T',
            ]);
        }
      }
      var Q = n(40714);
      function B(e, t, n) {
        var r, i, a, o, l, c, d, f;
        let h = (0, s.q)(),
          m =
            null !=
            (f =
              null !=
              (d =
                null !=
                (c =
                  null != (l = null == n ? void 0 : n.weekStartsOn)
                    ? l
                    : null == n || null == (i = n.locale) || null == (r = i.options)
                      ? void 0
                      : r.weekStartsOn)
                  ? c
                  : h.weekStartsOn)
                ? d
                : null == (o = h.locale) || null == (a = o.options)
                  ? void 0
                  : a.weekStartsOn)
              ? f
              : 0,
          g = (0, u.a)(e, null == n ? void 0 : n.in),
          p = g.getDay(),
          v = 7 - m,
          w = t < 0 || t > 6 ? t - ((p + v) % 7) : (((((t % 7) + 7) % 7) + v) % 7) - ((p + v) % 7);
        return (0, Q.f)(g, w, n);
      }
      class G extends f {
        parse(e, t, n) {
          switch (t) {
            case 'E':
            case 'EE':
            case 'EEE':
              return (
                n.day(e, { width: 'abbreviated', context: 'formatting' }) ||
                n.day(e, { width: 'short', context: 'formatting' }) ||
                n.day(e, { width: 'narrow', context: 'formatting' })
              );
            case 'EEEEE':
              return n.day(e, { width: 'narrow', context: 'formatting' });
            case 'EEEEEE':
              return (
                n.day(e, { width: 'short', context: 'formatting' }) ||
                n.day(e, { width: 'narrow', context: 'formatting' })
              );
            default:
              return (
                n.day(e, { width: 'wide', context: 'formatting' }) ||
                n.day(e, { width: 'abbreviated', context: 'formatting' }) ||
                n.day(e, { width: 'short', context: 'formatting' }) ||
                n.day(e, { width: 'narrow', context: 'formatting' })
              );
          }
        }
        validate(e, t) {
          return t >= 0 && t <= 6;
        }
        set(e, t, n, r) {
          return (e = B(e, n, r)).setHours(0, 0, 0, 0), e;
        }
        constructor(...e) {
          super(...e),
            (this.priority = 90),
            (this.incompatibleTokens = ['D', 'i', 'e', 'c', 't', 'T']);
        }
      }
      class $ extends f {
        parse(e, t, n, r) {
          let i = (e) => {
            let t = 7 * Math.floor((e - 1) / 7);
            return ((e + r.weekStartsOn + 6) % 7) + t;
          };
          switch (t) {
            case 'e':
            case 'ee':
              return v(x(t.length, e), i);
            case 'eo':
              return v(n.ordinalNumber(e, { unit: 'day' }), i);
            case 'eee':
              return (
                n.day(e, { width: 'abbreviated', context: 'formatting' }) ||
                n.day(e, { width: 'short', context: 'formatting' }) ||
                n.day(e, { width: 'narrow', context: 'formatting' })
              );
            case 'eeeee':
              return n.day(e, { width: 'narrow', context: 'formatting' });
            case 'eeeeee':
              return (
                n.day(e, { width: 'short', context: 'formatting' }) ||
                n.day(e, { width: 'narrow', context: 'formatting' })
              );
            default:
              return (
                n.day(e, { width: 'wide', context: 'formatting' }) ||
                n.day(e, { width: 'abbreviated', context: 'formatting' }) ||
                n.day(e, { width: 'short', context: 'formatting' }) ||
                n.day(e, { width: 'narrow', context: 'formatting' })
              );
          }
        }
        validate(e, t) {
          return t >= 0 && t <= 6;
        }
        set(e, t, n, r) {
          return (e = B(e, n, r)).setHours(0, 0, 0, 0), e;
        }
        constructor(...e) {
          super(...e),
            (this.priority = 90),
            (this.incompatibleTokens = [
              'y',
              'R',
              'u',
              'q',
              'Q',
              'M',
              'L',
              'I',
              'd',
              'D',
              'E',
              'i',
              'c',
              't',
              'T',
            ]);
        }
      }
      class X extends f {
        parse(e, t, n, r) {
          let i = (e) => {
            let t = 7 * Math.floor((e - 1) / 7);
            return ((e + r.weekStartsOn + 6) % 7) + t;
          };
          switch (t) {
            case 'c':
            case 'cc':
              return v(x(t.length, e), i);
            case 'co':
              return v(n.ordinalNumber(e, { unit: 'day' }), i);
            case 'ccc':
              return (
                n.day(e, { width: 'abbreviated', context: 'standalone' }) ||
                n.day(e, { width: 'short', context: 'standalone' }) ||
                n.day(e, { width: 'narrow', context: 'standalone' })
              );
            case 'ccccc':
              return n.day(e, { width: 'narrow', context: 'standalone' });
            case 'cccccc':
              return (
                n.day(e, { width: 'short', context: 'standalone' }) ||
                n.day(e, { width: 'narrow', context: 'standalone' })
              );
            default:
              return (
                n.day(e, { width: 'wide', context: 'standalone' }) ||
                n.day(e, { width: 'abbreviated', context: 'standalone' }) ||
                n.day(e, { width: 'short', context: 'standalone' }) ||
                n.day(e, { width: 'narrow', context: 'standalone' })
              );
          }
        }
        validate(e, t) {
          return t >= 0 && t <= 6;
        }
        set(e, t, n, r) {
          return (e = B(e, n, r)).setHours(0, 0, 0, 0), e;
        }
        constructor(...e) {
          super(...e),
            (this.priority = 90),
            (this.incompatibleTokens = [
              'y',
              'R',
              'u',
              'q',
              'Q',
              'M',
              'L',
              'I',
              'd',
              'D',
              'E',
              'i',
              'e',
              't',
              'T',
            ]);
        }
      }
      class K extends f {
        parse(e, t, n) {
          let r = (e) => (0 === e ? 7 : e);
          switch (t) {
            case 'i':
            case 'ii':
              return x(t.length, e);
            case 'io':
              return n.ordinalNumber(e, { unit: 'day' });
            case 'iii':
              return v(
                n.day(e, { width: 'abbreviated', context: 'formatting' }) ||
                  n.day(e, { width: 'short', context: 'formatting' }) ||
                  n.day(e, { width: 'narrow', context: 'formatting' }),
                r
              );
            case 'iiiii':
              return v(n.day(e, { width: 'narrow', context: 'formatting' }), r);
            case 'iiiiii':
              return v(
                n.day(e, { width: 'short', context: 'formatting' }) ||
                  n.day(e, { width: 'narrow', context: 'formatting' }),
                r
              );
            default:
              return v(
                n.day(e, { width: 'wide', context: 'formatting' }) ||
                  n.day(e, { width: 'abbreviated', context: 'formatting' }) ||
                  n.day(e, { width: 'short', context: 'formatting' }) ||
                  n.day(e, { width: 'narrow', context: 'formatting' }),
                r
              );
          }
        }
        validate(e, t) {
          return t >= 1 && t <= 7;
        }
        set(e, t, n) {
          return (
            (e = (function (e, t, n) {
              let r = (0, u.a)(e, void 0),
                i = (function (e, t) {
                  let n = (0, u.a)(e, null == t ? void 0 : t.in).getDay();
                  return 0 === n ? 7 : n;
                })(r, void 0);
              return (0, Q.f)(r, t - i, n);
            })(e, n)).setHours(0, 0, 0, 0),
            e
          );
        }
        constructor(...e) {
          super(...e),
            (this.priority = 90),
            (this.incompatibleTokens = [
              'y',
              'Y',
              'u',
              'q',
              'Q',
              'M',
              'L',
              'w',
              'd',
              'D',
              'E',
              'e',
              'c',
              't',
              'T',
            ]);
        }
      }
      class Z extends f {
        parse(e, t, n) {
          switch (t) {
            case 'a':
            case 'aa':
            case 'aaa':
              return (
                n.dayPeriod(e, { width: 'abbreviated', context: 'formatting' }) ||
                n.dayPeriod(e, { width: 'narrow', context: 'formatting' })
              );
            case 'aaaaa':
              return n.dayPeriod(e, { width: 'narrow', context: 'formatting' });
            default:
              return (
                n.dayPeriod(e, { width: 'wide', context: 'formatting' }) ||
                n.dayPeriod(e, { width: 'abbreviated', context: 'formatting' }) ||
                n.dayPeriod(e, { width: 'narrow', context: 'formatting' })
              );
          }
        }
        set(e, t, n) {
          return e.setHours(k(n), 0, 0, 0), e;
        }
        constructor(...e) {
          super(...e),
            (this.priority = 80),
            (this.incompatibleTokens = ['b', 'B', 'H', 'k', 't', 'T']);
        }
      }
      class V extends f {
        parse(e, t, n) {
          switch (t) {
            case 'b':
            case 'bb':
            case 'bbb':
              return (
                n.dayPeriod(e, { width: 'abbreviated', context: 'formatting' }) ||
                n.dayPeriod(e, { width: 'narrow', context: 'formatting' })
              );
            case 'bbbbb':
              return n.dayPeriod(e, { width: 'narrow', context: 'formatting' });
            default:
              return (
                n.dayPeriod(e, { width: 'wide', context: 'formatting' }) ||
                n.dayPeriod(e, { width: 'abbreviated', context: 'formatting' }) ||
                n.dayPeriod(e, { width: 'narrow', context: 'formatting' })
              );
          }
        }
        set(e, t, n) {
          return e.setHours(k(n), 0, 0, 0), e;
        }
        constructor(...e) {
          super(...e),
            (this.priority = 80),
            (this.incompatibleTokens = ['a', 'B', 'H', 'k', 't', 'T']);
        }
      }
      class J extends f {
        parse(e, t, n) {
          switch (t) {
            case 'B':
            case 'BB':
            case 'BBB':
              return (
                n.dayPeriod(e, { width: 'abbreviated', context: 'formatting' }) ||
                n.dayPeriod(e, { width: 'narrow', context: 'formatting' })
              );
            case 'BBBBB':
              return n.dayPeriod(e, { width: 'narrow', context: 'formatting' });
            default:
              return (
                n.dayPeriod(e, { width: 'wide', context: 'formatting' }) ||
                n.dayPeriod(e, { width: 'abbreviated', context: 'formatting' }) ||
                n.dayPeriod(e, { width: 'narrow', context: 'formatting' })
              );
          }
        }
        set(e, t, n) {
          return e.setHours(k(n), 0, 0, 0), e;
        }
        constructor(...e) {
          super(...e), (this.priority = 80), (this.incompatibleTokens = ['a', 'b', 't', 'T']);
        }
      }
      class ee extends f {
        parse(e, t, n) {
          switch (t) {
            case 'h':
              return w(g.hour12h, e);
            case 'ho':
              return n.ordinalNumber(e, { unit: 'hour' });
            default:
              return x(t.length, e);
          }
        }
        validate(e, t) {
          return t >= 1 && t <= 12;
        }
        set(e, t, n) {
          let r = e.getHours() >= 12;
          return (
            r && n < 12
              ? e.setHours(n + 12, 0, 0, 0)
              : r || 12 !== n
                ? e.setHours(n, 0, 0, 0)
                : e.setHours(0, 0, 0, 0),
            e
          );
        }
        constructor(...e) {
          super(...e), (this.priority = 70), (this.incompatibleTokens = ['H', 'K', 'k', 't', 'T']);
        }
      }
      class et extends f {
        parse(e, t, n) {
          switch (t) {
            case 'H':
              return w(g.hour23h, e);
            case 'Ho':
              return n.ordinalNumber(e, { unit: 'hour' });
            default:
              return x(t.length, e);
          }
        }
        validate(e, t) {
          return t >= 0 && t <= 23;
        }
        set(e, t, n) {
          return e.setHours(n, 0, 0, 0), e;
        }
        constructor(...e) {
          super(...e),
            (this.priority = 70),
            (this.incompatibleTokens = ['a', 'b', 'h', 'K', 'k', 't', 'T']);
        }
      }
      class en extends f {
        parse(e, t, n) {
          switch (t) {
            case 'K':
              return w(g.hour11h, e);
            case 'Ko':
              return n.ordinalNumber(e, { unit: 'hour' });
            default:
              return x(t.length, e);
          }
        }
        validate(e, t) {
          return t >= 0 && t <= 11;
        }
        set(e, t, n) {
          return (
            e.getHours() >= 12 && n < 12 ? e.setHours(n + 12, 0, 0, 0) : e.setHours(n, 0, 0, 0), e
          );
        }
        constructor(...e) {
          super(...e), (this.priority = 70), (this.incompatibleTokens = ['h', 'H', 'k', 't', 'T']);
        }
      }
      class er extends f {
        parse(e, t, n) {
          switch (t) {
            case 'k':
              return w(g.hour24h, e);
            case 'ko':
              return n.ordinalNumber(e, { unit: 'hour' });
            default:
              return x(t.length, e);
          }
        }
        validate(e, t) {
          return t >= 1 && t <= 24;
        }
        set(e, t, n) {
          return e.setHours(n <= 24 ? n % 24 : n, 0, 0, 0), e;
        }
        constructor(...e) {
          super(...e),
            (this.priority = 70),
            (this.incompatibleTokens = ['a', 'b', 'h', 'H', 'K', 't', 'T']);
        }
      }
      class ei extends f {
        parse(e, t, n) {
          switch (t) {
            case 'm':
              return w(g.minute, e);
            case 'mo':
              return n.ordinalNumber(e, { unit: 'minute' });
            default:
              return x(t.length, e);
          }
        }
        validate(e, t) {
          return t >= 0 && t <= 59;
        }
        set(e, t, n) {
          return e.setMinutes(n, 0, 0), e;
        }
        constructor(...e) {
          super(...e), (this.priority = 60), (this.incompatibleTokens = ['t', 'T']);
        }
      }
      class ea extends f {
        parse(e, t, n) {
          switch (t) {
            case 's':
              return w(g.second, e);
            case 'so':
              return n.ordinalNumber(e, { unit: 'second' });
            default:
              return x(t.length, e);
          }
        }
        validate(e, t) {
          return t >= 0 && t <= 59;
        }
        set(e, t, n) {
          return e.setSeconds(n, 0), e;
        }
        constructor(...e) {
          super(...e), (this.priority = 50), (this.incompatibleTokens = ['t', 'T']);
        }
      }
      class eo extends f {
        parse(e, t) {
          return v(x(t.length, e), (e) => Math.trunc(e * Math.pow(10, -t.length + 3)));
        }
        set(e, t, n) {
          return e.setMilliseconds(n), e;
        }
        constructor(...e) {
          super(...e), (this.priority = 30), (this.incompatibleTokens = ['t', 'T']);
        }
      }
      var es = n(97444);
      class eu extends f {
        parse(e, t) {
          switch (t) {
            case 'X':
              return y(p.basicOptionalMinutes, e);
            case 'XX':
              return y(p.basic, e);
            case 'XXXX':
              return y(p.basicOptionalSeconds, e);
            case 'XXXXX':
              return y(p.extendedOptionalSeconds, e);
            default:
              return y(p.extended, e);
          }
        }
        set(e, t, n) {
          return t.timestampIsSet ? e : (0, o.w)(e, e.getTime() - (0, es.G)(e) - n);
        }
        constructor(...e) {
          super(...e), (this.priority = 10), (this.incompatibleTokens = ['t', 'T', 'x']);
        }
      }
      class el extends f {
        parse(e, t) {
          switch (t) {
            case 'x':
              return y(p.basicOptionalMinutes, e);
            case 'xx':
              return y(p.basic, e);
            case 'xxxx':
              return y(p.basicOptionalSeconds, e);
            case 'xxxxx':
              return y(p.extendedOptionalSeconds, e);
            default:
              return y(p.extended, e);
          }
        }
        set(e, t, n) {
          return t.timestampIsSet ? e : (0, o.w)(e, e.getTime() - (0, es.G)(e) - n);
        }
        constructor(...e) {
          super(...e), (this.priority = 10), (this.incompatibleTokens = ['t', 'T', 'X']);
        }
      }
      class ec extends f {
        parse(e) {
          return b(e);
        }
        set(e, t, n) {
          return [(0, o.w)(e, 1e3 * n), { timestampIsSet: !0 }];
        }
        constructor(...e) {
          super(...e), (this.priority = 40), (this.incompatibleTokens = '*');
        }
      }
      class ed extends f {
        parse(e) {
          return b(e);
        }
        set(e, t, n) {
          return [(0, o.w)(e, n), { timestampIsSet: !0 }];
        }
        constructor(...e) {
          super(...e), (this.priority = 20), (this.incompatibleTokens = '*');
        }
      }
      let ef = {
          G: new h(),
          y: new N(),
          Y: new R(),
          R: new P(),
          u: new O(),
          Q: new _(),
          q: new F(),
          M: new A(),
          L: new q(),
          w: new j(),
          I: new H(),
          d: new I(),
          D: new U(),
          E: new G(),
          e: new $(),
          c: new X(),
          i: new K(),
          a: new Z(),
          b: new V(),
          B: new J(),
          h: new ee(),
          H: new et(),
          K: new en(),
          k: new er(),
          m: new ei(),
          s: new ea(),
          S: new eo(),
          X: new eu(),
          x: new el(),
          t: new ec(),
          T: new ed(),
        },
        eh = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        em = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        eg = /^'([^]*?)'?$/,
        ep = /''/g,
        ev = /\S/,
        ew = /[a-zA-Z]/;
      function ey(e, t, n, l) {
        var c, f, h, m, g, p, v, w, y, b, x, S, k, T, M, N, D, C;
        let R = () => (0, o.w)((null == l ? void 0 : l.in) || n, NaN),
          E = Object.assign({}, (0, s.q)()),
          P = null != (b = null != (y = null == l ? void 0 : l.locale) ? y : E.locale) ? b : r.c,
          O =
            null !=
            (T =
              null !=
              (k =
                null !=
                (S =
                  null != (x = null == l ? void 0 : l.firstWeekContainsDate)
                    ? x
                    : null == l || null == (f = l.locale) || null == (c = f.options)
                      ? void 0
                      : c.firstWeekContainsDate)
                  ? S
                  : E.firstWeekContainsDate)
                ? k
                : null == (m = E.locale) || null == (h = m.options)
                  ? void 0
                  : h.firstWeekContainsDate)
              ? T
              : 1,
          _ =
            null !=
            (C =
              null !=
              (D =
                null !=
                (N =
                  null != (M = null == l ? void 0 : l.weekStartsOn)
                    ? M
                    : null == l || null == (p = l.locale) || null == (g = p.options)
                      ? void 0
                      : g.weekStartsOn)
                  ? N
                  : E.weekStartsOn)
                ? D
                : null == (w = E.locale) || null == (v = w.options)
                  ? void 0
                  : v.weekStartsOn)
              ? C
              : 0;
        if (!t) return e ? R() : (0, u.a)(n, null == l ? void 0 : l.in);
        let F = { firstWeekContainsDate: O, weekStartsOn: _, locale: P },
          A = [new d(null == l ? void 0 : l.in, n)],
          q = t
            .match(em)
            .map((e) => {
              let t = e[0];
              return t in i.m ? (0, i.m[t])(e, P.formatLong) : e;
            })
            .join('')
            .match(eh),
          Y = [];
        for (let n of q) {
          !(null == l ? void 0 : l.useAdditionalWeekYearTokens) &&
            (0, a.xM)(n) &&
            (0, a.Ss)(n, t, e),
            !(null == l ? void 0 : l.useAdditionalDayOfYearTokens) &&
              (0, a.ef)(n) &&
              (0, a.Ss)(n, t, e);
          let r = n[0],
            i = ef[r];
          if (i) {
            let { incompatibleTokens: t } = i;
            if (Array.isArray(t)) {
              let e = Y.find((e) => t.includes(e.token) || e.token === r);
              if (e)
                throw RangeError(
                  "The format string mustn't contain `"
                    .concat(e.fullToken, '` and `')
                    .concat(n, '` at the same time')
                );
            } else if ('*' === i.incompatibleTokens && Y.length > 0)
              throw RangeError(
                "The format string mustn't contain `".concat(
                  n,
                  '` and any other token at the same time'
                )
              );
            Y.push({ token: r, fullToken: n });
            let a = i.run(e, n, P.match, F);
            if (!a) return R();
            A.push(a.setter), (e = a.rest);
          } else {
            if (r.match(ew))
              throw RangeError(
                'Format string contains an unescaped latin alphabet character `' + r + '`'
              );
            if (
              ("''" === n ? (n = "'") : "'" === r && (n = n.match(eg)[1].replace(ep, "'")),
              0 !== e.indexOf(n))
            )
              return R();
            e = e.slice(n.length);
          }
        }
        if (e.length > 0 && ev.test(e)) return R();
        let j = A.map((e) => e.priority)
            .sort((e, t) => t - e)
            .filter((e, t, n) => n.indexOf(e) === t)
            .map((e) =>
              A.filter((t) => t.priority === e).sort((e, t) => t.subPriority - e.subPriority)
            )
            .map((e) => e[0]),
          L = (0, u.a)(n, null == l ? void 0 : l.in);
        if (isNaN(+L)) return R();
        let H = {};
        for (let e of j) {
          if (!e.validate(L, F)) return R();
          let t = e.set(L, H, F);
          Array.isArray(t) ? ((L = t[0]), Object.assign(H, t[1])) : (L = t);
        }
        return L;
      }
    },
    29161: (e, t, n) => {
      'use strict';
      n.d(t, { Y: () => i });
      var r = n(89447);
      function i(e, t) {
        return +(0, r.a)(e) < +(0, r.a)(t);
      }
    },
    32944: (e, t, n) => {
      'use strict';
      n.d(t, { p: () => i });
      var r = n(89447);
      function i(e, t) {
        let n = (0, r.a)(e, null == t ? void 0 : t.in),
          i = n.getMonth();
        return n.setFullYear(n.getFullYear(), i + 1, 0), n.setHours(23, 59, 59, 999), n;
      }
    },
    34138: (e, t, n) => {
      'use strict';
      n.d(t, { z: () => a });
      var r = n(49291),
        i = n(89447);
      function a(e, t, n) {
        let a = (0, i.a)(e, null == n ? void 0 : n.in),
          o = Math.trunc(a.getMonth() / 3) + 1;
        return (0, r.Z)(a, a.getMonth() + 3 * (t - o));
      }
    },
    35279: () => {},
    35695: (e, t, n) => {
      'use strict';
      var r = n(18999);
      n.o(r, 'usePathname') &&
        n.d(t, {
          usePathname: function () {
            return r.usePathname;
          },
        }),
        n.o(r, 'useRouter') &&
          n.d(t, {
            useRouter: function () {
              return r.useRouter;
            },
          });
    },
    36489: (e, t, n) => {
      'use strict';
      n.d(t, { q: () => i });
      var r = n(89447);
      function i(e, t) {
        return (0, r.a)(e, null == t ? void 0 : t.in).getHours();
      }
    },
    37223: (e, t, n) => {
      'use strict';
      n.d(t, { a: () => i });
      var r = n(48882);
      function i(e, t, n) {
        return (0, r.P)(e, -t, n);
      }
    },
    38619: (e, t, n) => {
      'use strict';
      n.d(t, { g: () => i });
      var r = n(89447);
      function i(e, t, n) {
        let i = (0, r.a)(e, null == n ? void 0 : n.in);
        return i.setMinutes(t), i;
      }
    },
    38991: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => a });
      var r = n(7239),
        i = n(89447);
      function a(e, t, n) {
        return (0, r.w)((null == n ? void 0 : n.in) || e, +(0, i.a)(e) + t);
      }
    },
    39624: (e, t, n) => {
      'use strict';
      n.d(t, { z: () => i });
      var r = n(48882);
      function i(e, t, n) {
        return (0, r.P)(e, 3 * t, n);
      }
    },
    40150: (e, t, n) => {
      'use strict';
      n.d(t, { p: () => i });
      var r = n(38991);
      function i(e, t, n) {
        return (0, r.A)(e, 1e3 * t, n);
      }
    },
    40714: (e, t, n) => {
      'use strict';
      n.d(t, { f: () => a });
      var r = n(7239),
        i = n(89447);
      function a(e, t, n) {
        let a = (0, i.a)(e, null == n ? void 0 : n.in);
        return isNaN(t)
          ? (0, r.w)((null == n ? void 0 : n.in) || e, NaN)
          : (t && a.setDate(a.getDate() + t), a);
      }
    },
    40861: (e, t, n) => {
      'use strict';
      n.d(t, { Ss: () => u, ef: () => o, xM: () => s });
      let r = /^D+$/,
        i = /^Y+$/,
        a = ['D', 'DD', 'YY', 'YYYY'];
      function o(e) {
        return r.test(e);
      }
      function s(e) {
        return i.test(e);
      }
      function u(e, t, n) {
        let r = (function (e, t, n) {
          let r = 'Y' === e[0] ? 'years' : 'days of the month';
          return 'Use `'
            .concat(e.toLowerCase(), '` instead of `')
            .concat(e, '` (in `')
            .concat(t, '`) for formatting ')
            .concat(r, ' to the input `')
            .concat(
              n,
              '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'
            );
        })(e, t, n);
        if ((console.warn(r), a.includes(e))) throw RangeError(r);
      }
    },
    43163: (e, t, n) => {
      'use strict';
      n.d(t, { Q: () => i });
      var r = n(89447);
      function i(e, t) {
        let n = (0, r.a)(e, null == t ? void 0 : t.in),
          i = n.getFullYear();
        return n.setFullYear(i + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
      }
    },
    48882: (e, t, n) => {
      'use strict';
      n.d(t, { P: () => a });
      var r = n(7239),
        i = n(89447);
      function a(e, t, n) {
        let a = (0, i.a)(e, null == n ? void 0 : n.in);
        if (isNaN(t)) return (0, r.w)((null == n ? void 0 : n.in) || e, NaN);
        if (!t) return a;
        let o = a.getDate(),
          s = (0, r.w)((null == n ? void 0 : n.in) || e, a.getTime());
        return (s.setMonth(a.getMonth() + t + 1, 0), o >= s.getDate())
          ? s
          : (a.setFullYear(s.getFullYear(), s.getMonth(), o), a);
      }
    },
    49291: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => a });
      var r = n(7239),
        i = n(89447);
      function a(e, t, n) {
        let a = (0, i.a)(e, null == n ? void 0 : n.in),
          o = a.getFullYear(),
          s = a.getDate(),
          u = (0, r.w)((null == n ? void 0 : n.in) || e, 0);
        u.setFullYear(o, t, 15), u.setHours(0, 0, 0, 0);
        let l = (function (e, t) {
          let n = (0, i.a)(e, void 0),
            a = n.getFullYear(),
            o = n.getMonth(),
            s = (0, r.w)(n, 0);
          return s.setFullYear(a, o + 1, 0), s.setHours(0, 0, 0, 0), s.getDate();
        })(u);
        return a.setMonth(t, Math.min(s, l)), a;
      }
    },
    50007: (e, t, n) => {
      'use strict';
      n.d(t, { m: () => s });
      var r = n(97444),
        i = n(61183),
        a = n(25703),
        o = n(6711);
      function s(e, t, n) {
        let [s, u] = (0, i.x)(null == n ? void 0 : n.in, e, t),
          l = (0, o.o)(s),
          c = (0, o.o)(u);
        return Math.round((l - (0, r.G)(l) - (c - (0, r.G)(c))) / a.w4);
      }
    },
    51308: (e, t, n) => {
      'use strict';
      n.d(t, { m: () => a });
      let r = (e, t) => {
          switch (e) {
            case 'P':
              return t.date({ width: 'short' });
            case 'PP':
              return t.date({ width: 'medium' });
            case 'PPP':
              return t.date({ width: 'long' });
            default:
              return t.date({ width: 'full' });
          }
        },
        i = (e, t) => {
          switch (e) {
            case 'p':
              return t.time({ width: 'short' });
            case 'pp':
              return t.time({ width: 'medium' });
            case 'ppp':
              return t.time({ width: 'long' });
            default:
              return t.time({ width: 'full' });
          }
        },
        a = {
          p: i,
          P: (e, t) => {
            let n,
              a = e.match(/(P+)(p+)?/) || [],
              o = a[1],
              s = a[2];
            if (!s) return r(e, t);
            switch (o) {
              case 'P':
                n = t.dateTime({ width: 'short' });
                break;
              case 'PP':
                n = t.dateTime({ width: 'medium' });
                break;
              case 'PPP':
                n = t.dateTime({ width: 'long' });
                break;
              default:
                n = t.dateTime({ width: 'full' });
            }
            return n.replace('{{date}}', r(o, t)).replace('{{time}}', i(s, t));
          },
        };
    },
    53231: (e, t, n) => {
      'use strict';
      n.d(t, { w: () => i });
      var r = n(89447);
      function i(e, t) {
        let n = (0, r.a)(e, null == t ? void 0 : t.in);
        return n.setDate(1), n.setHours(0, 0, 0, 0), n;
      }
    },
    54549: (e, t, n) => {
      'use strict';
      n.d(t, { k: () => i });
      var r = n(85118);
      function i(e, t, n) {
        return (0, r.J)(e, -t, n);
      }
    },
    55551: (e, t, n) => {
      'use strict';
      n.d(t, { C: () => i });
      var r = n(89447);
      function i(e, t) {
        return (0, r.a)(e, null == t ? void 0 : t.in).getFullYear();
      }
    },
    56146: (e, t, n) => {
      'use strict';
      n.d(t, { j: () => a });
      var r = n(7239),
        i = n(89447);
      function a(e, t) {
        let n,
          a = null == t ? void 0 : t.in;
        return (
          e.forEach((e) => {
            a || 'object' != typeof e || (a = r.w.bind(null, e));
            let t = (0, i.a)(e, a);
            (!n || n > t || isNaN(+t)) && (n = t);
          }),
          (0, r.w)(a, n || NaN)
        );
      }
    },
    56463: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => a, u: () => i });
      let r = n(12115).createContext(null),
        i = (e, t = null) => (null != e ? String(e) : t || null),
        a = r;
    },
    57716: (e, t, n) => {
      'use strict';
      n.d(t, { d: () => i });
      var r = n(89447);
      function i(e, t) {
        return +(0, r.a)(e) > +(0, r.a)(t);
      }
    },
    58086: (e, t, n) => {
      'use strict';
      n.d(t, { z: () => a });
      var r = n(25703),
        i = n(89447);
      function a(e, t, n) {
        let a = (0, i.a)(e, null == n ? void 0 : n.in);
        return a.setTime(a.getTime() + t * r.Cg), a;
      }
    },
    59875: (e, t, n) => {
      'use strict';
      n.d(t, { U: () => i });
      var r = n(61183);
      function i(e, t, n) {
        let [i, a] = (0, r.x)(null == n ? void 0 : n.in, e, t);
        return 12 * (i.getFullYear() - a.getFullYear()) + (i.getMonth() - a.getMonth());
      }
    },
    61183: (e, t, n) => {
      'use strict';
      n.d(t, { x: () => i });
      var r = n(7239);
      function i(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          n[i - 1] = arguments[i];
        let a = r.w.bind(null, e || n.find((e) => 'object' == typeof e));
        return n.map(a);
      }
    },
    63118: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => X });
      var r = n(29300),
        i = n.n(r),
        a = n(12115),
        o = n(56463),
        s = n(91497),
        u = n(97390),
        l = n(95155);
      let c = a.forwardRef((e, t) => {
        let { bsPrefix: n, className: r, as: a, ...o } = e;
        n = (0, u.oU)(n, 'navbar-brand');
        let s = a || (o.href ? 'a' : 'span');
        return (0, l.jsx)(s, { ...o, ref: t, className: i()(r, n) });
      });
      c.displayName = 'NavbarBrand';
      var d = n(73666),
        f = n(39009),
        h = n(2489),
        m = n(74874);
      let g = function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return t
          .filter((e) => null != e)
          .reduce((e, t) => {
            if ('function' != typeof t)
              throw Error(
                'Invalid Argument Type, must only provide functions, undefined, or null.'
              );
            return null === e
              ? t
              : function () {
                  for (var n = arguments.length, r = Array(n), i = 0; i < n; i++)
                    r[i] = arguments[i];
                  e.apply(this, r), t.apply(this, r);
                };
          }, null);
      };
      var p = n(78283),
        v = n(54692);
      let w = { height: ['marginTop', 'marginBottom'], width: ['marginLeft', 'marginRight'] };
      function y(e, t) {
        let n = t['offset'.concat(e[0].toUpperCase()).concat(e.slice(1))],
          r = w[e];
        return n + parseInt((0, d.A)(t, r[0]), 10) + parseInt((0, d.A)(t, r[1]), 10);
      }
      let b = {
          [f.kp]: 'collapse',
          [f.ze]: 'collapsing',
          [f.ns]: 'collapsing',
          [f._K]: 'collapse show',
        },
        x = a.forwardRef((e, t) => {
          let {
              onEnter: n,
              onEntering: r,
              onEntered: o,
              onExit: s,
              onExiting: u,
              className: c,
              children: d,
              dimension: f = 'height',
              in: w = !1,
              timeout: x = 300,
              mountOnEnter: S = !1,
              unmountOnExit: k = !1,
              appear: T = !1,
              getDimensionValue: M = y,
              ...N
            } = e,
            D = 'function' == typeof f ? f() : f,
            C = (0, a.useMemo)(
              () =>
                g((e) => {
                  e.style[D] = '0';
                }, n),
              [D, n]
            ),
            R = (0, a.useMemo)(
              () =>
                g((e) => {
                  let t = 'scroll'.concat(D[0].toUpperCase()).concat(D.slice(1));
                  e.style[D] = ''.concat(e[t], 'px');
                }, r),
              [D, r]
            ),
            E = (0, a.useMemo)(
              () =>
                g((e) => {
                  e.style[D] = null;
                }, o),
              [D, o]
            ),
            P = (0, a.useMemo)(
              () =>
                g((e) => {
                  (e.style[D] = ''.concat(M(D, e), 'px')), (0, p.A)(e);
                }, s),
              [s, M, D]
            ),
            O = (0, a.useMemo)(
              () =>
                g((e) => {
                  e.style[D] = null;
                }, u),
              [D, u]
            );
          return (0, l.jsx)(v.A, {
            ref: t,
            addEndListener: m.A,
            ...N,
            'aria-expanded': N.role ? w : null,
            onEnter: C,
            onEntering: R,
            onEntered: E,
            onExit: P,
            onExiting: O,
            childRef: (0, h.am)(d),
            in: w,
            timeout: x,
            mountOnEnter: S,
            unmountOnExit: k,
            appear: T,
            children: (e, t) =>
              a.cloneElement(d, {
                ...t,
                className: i()(c, d.props.className, b[e], 'width' === D && 'collapse-horizontal'),
              }),
          });
        });
      x.displayName = 'Collapse';
      var S = n(95163);
      let k = a.forwardRef((e, t) => {
        let { children: n, bsPrefix: r, ...i } = e;
        r = (0, u.oU)(r, 'navbar-collapse');
        let o = (0, a.useContext)(S.A);
        return (0, l.jsx)(x, {
          in: !!(o && o.expanded),
          ...i,
          children: (0, l.jsx)('div', { ref: t, className: r, children: n }),
        });
      });
      k.displayName = 'NavbarCollapse';
      var T = n(37150);
      let M = a.forwardRef((e, t) => {
        let {
          bsPrefix: n,
          className: r,
          children: o,
          label: s = 'Toggle navigation',
          as: c = 'button',
          onClick: d,
          ...f
        } = e;
        n = (0, u.oU)(n, 'navbar-toggler');
        let { onToggle: h, expanded: m } = (0, a.useContext)(S.A) || {},
          g = (0, T.A)((e) => {
            d && d(e), h && h();
          });
        return (
          'button' === c && (f.type = 'button'),
          (0, l.jsx)(c, {
            ...f,
            ref: t,
            onClick: g,
            'aria-label': s,
            className: i()(r, n, !m && 'collapsed'),
            children: o || (0, l.jsx)('span', { className: ''.concat(n, '-icon') }),
          })
        );
      });
      M.displayName = 'NavbarToggle';
      let N = void 0 !== n.g && n.g.navigator && 'ReactNative' === n.g.navigator.product,
        D = 'undefined' != typeof document || N ? a.useLayoutEffect : a.useEffect,
        C = new WeakMap(),
        R = (e, t) => {
          if (!e || !t) return;
          let n = C.get(t) || new Map();
          C.set(t, n);
          let r = n.get(e);
          return r || (((r = t.matchMedia(e)).refCount = 0), n.set(r.media, r)), r;
        },
        E = (function (e) {
          let t = Object.keys(e);
          function n(e, t) {
            return e === t ? t : e ? `${e} and ${t}` : t;
          }
          return function (r, i, o) {
            let s;
            return (
              'object' == typeof r ? ((s = r), (o = i), (i = !0)) : (s = { [r]: (i = i || !0) }),
              (function (e, t = 'undefined' == typeof window ? void 0 : window) {
                let n = R(e, t),
                  [r, i] = (0, a.useState)(() => !!n && n.matches);
                return (
                  D(() => {
                    let n = R(e, t);
                    if (!n) return i(!1);
                    let r = C.get(t),
                      a = () => {
                        i(n.matches);
                      };
                    return (
                      n.refCount++,
                      n.addListener(a),
                      a(),
                      () => {
                        n.removeListener(a),
                          n.refCount--,
                          n.refCount <= 0 && (null == r || r.delete(n.media)),
                          (n = void 0);
                      }
                    );
                  }, [e]),
                  r
                );
              })(
                (0, a.useMemo)(
                  () =>
                    Object.entries(s).reduce((r, [i, a]) => {
                      let o, s;
                      return (
                        ('up' === a || !0 === a) &&
                          (r = n(
                            r,
                            ('number' == typeof (o = e[i]) && (o = `${o}px`), `(min-width: ${o})`)
                          )),
                        ('down' === a || !0 === a) &&
                          (r = n(
                            r,
                            ((s =
                              'number' ==
                              typeof (s = e[t[Math.min(t.indexOf(i) + 1, t.length - 1)]])
                                ? `${s - 0.2}px`
                                : `calc(${s} - 0.2px)`),
                            `(max-width: ${s})`)
                          )),
                        r
                      );
                    }, ''),
                  [JSON.stringify(s)]
                ),
                o
              )
            );
          };
        })({ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 });
      var P = n(77422),
        O = n(34748);
      let _ = a.forwardRef((e, t) => {
        let { className: n, bsPrefix: r, as: a = 'div', ...o } = e;
        return (
          (r = (0, u.oU)(r, 'offcanvas-body')),
          (0, l.jsx)(a, { ref: t, className: i()(n, r), ...o })
        );
      });
      _.displayName = 'OffcanvasBody';
      let F = { [f.ns]: 'show', [f._K]: 'show' },
        A = a.forwardRef((e, t) => {
          let {
            bsPrefix: n,
            className: r,
            children: o,
            in: s = !1,
            mountOnEnter: c = !1,
            unmountOnExit: d = !1,
            appear: g = !1,
            ...p
          } = e;
          return (
            (n = (0, u.oU)(n, 'offcanvas')),
            (0, l.jsx)(v.A, {
              ref: t,
              addEndListener: m.A,
              in: s,
              mountOnEnter: c,
              unmountOnExit: d,
              appear: g,
              ...p,
              childRef: (0, h.am)(o),
              children: (e, t) =>
                a.cloneElement(o, {
                  ...t,
                  className: i()(
                    r,
                    o.props.className,
                    (e === f.ns || e === f.ze) && ''.concat(n, '-toggling'),
                    F[e]
                  ),
                }),
            })
          );
        });
      A.displayName = 'OffcanvasToggling';
      var q = n(1306),
        Y = n(39324);
      let j = a.forwardRef((e, t) => {
        let { bsPrefix: n, className: r, closeLabel: a = 'Close', closeButton: o = !1, ...s } = e;
        return (
          (n = (0, u.oU)(n, 'offcanvas-header')),
          (0, l.jsx)(Y.A, { ref: t, ...s, className: i()(r, n), closeLabel: a, closeButton: o })
        );
      });
      j.displayName = 'OffcanvasHeader';
      let L = (0, n(58724).A)('h5'),
        H = a.forwardRef((e, t) => {
          let { className: n, bsPrefix: r, as: a = L, ...o } = e;
          return (
            (r = (0, u.oU)(r, 'offcanvas-title')),
            (0, l.jsx)(a, { ref: t, className: i()(n, r), ...o })
          );
        });
      H.displayName = 'OffcanvasTitle';
      var z = n(28787);
      function W(e) {
        return (0, l.jsx)(A, { ...e });
      }
      function I(e) {
        return (0, l.jsx)(O.A, { ...e });
      }
      let U = a.forwardRef((e, t) => {
        let {
            bsPrefix: n,
            className: r,
            children: o,
            'aria-labelledby': s,
            placement: c = 'start',
            responsive: d,
            show: f = !1,
            backdrop: h = !0,
            keyboard: m = !0,
            scroll: g = !1,
            onEscapeKeyDown: p,
            onShow: v,
            onHide: w,
            container: y,
            autoFocus: b = !0,
            enforceFocus: x = !0,
            restoreFocus: S = !0,
            restoreFocusOptions: k,
            onEntered: M,
            onExit: N,
            onExiting: D,
            onEnter: C,
            onEntering: R,
            onExited: O,
            backdropClassName: _,
            manager: F,
            renderStaticNode: A = !1,
            ...Y
          } = e,
          j = (0, a.useRef)();
        n = (0, u.oU)(n, 'offcanvas');
        let [L, H] = (0, a.useState)(!1),
          U = (0, T.A)(w),
          Q = E(d || 'xs', 'up');
        (0, a.useEffect)(() => {
          H(d ? f && !Q : f);
        }, [f, d, Q]);
        let B = (0, a.useMemo)(() => ({ onHide: U }), [U]),
          G = (0, a.useCallback)(
            (e) => (0, l.jsx)('div', { ...e, className: i()(''.concat(n, '-backdrop'), _) }),
            [_, n]
          ),
          $ = (e) =>
            (0, l.jsx)('div', {
              ...e,
              ...Y,
              className: i()(r, d ? ''.concat(n, '-').concat(d) : n, ''.concat(n, '-').concat(c)),
              'aria-labelledby': s,
              children: o,
            });
        return (0, l.jsxs)(l.Fragment, {
          children: [
            !L && (d || A) && $({}),
            (0, l.jsx)(q.A.Provider, {
              value: B,
              children: (0, l.jsx)(P.A, {
                show: L,
                ref: t,
                backdrop: h,
                container: y,
                keyboard: m,
                autoFocus: b,
                enforceFocus: x && !g,
                restoreFocus: S,
                restoreFocusOptions: k,
                onEscapeKeyDown: p,
                onShow: v,
                onHide: U,
                onEnter: function (e) {
                  for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                    n[r - 1] = arguments[r];
                  e && (e.style.visibility = 'visible'), null == C || C(e, ...n);
                },
                onEntering: R,
                onEntered: M,
                onExit: N,
                onExiting: D,
                onExited: function (e) {
                  for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                    n[r - 1] = arguments[r];
                  e && (e.style.visibility = ''), null == O || O(...n);
                },
                manager:
                  F ||
                  (g
                    ? (j.current || (j.current = new z.A({ handleContainerOverflow: !1 })),
                      j.current)
                    : (0, z.R)()),
                transition: W,
                backdropTransition: I,
                renderBackdrop: G,
                renderDialog: $,
              }),
            }),
          ],
        });
      });
      U.displayName = 'Offcanvas';
      let Q = Object.assign(U, { Body: _, Header: j, Title: H }),
        B = a.forwardRef((e, t) => {
          let { onHide: n, ...r } = e,
            i = (0, a.useContext)(S.A),
            o = (0, T.A)(() => {
              null == i || null == i.onToggle || i.onToggle(), null == n || n();
            });
          return (0, l.jsx)(Q, {
            ref: t,
            show: !!(null != i && i.expanded),
            ...r,
            renderStaticNode: !0,
            onHide: o,
          });
        });
      B.displayName = 'NavbarOffcanvas';
      let G = a.forwardRef((e, t) => {
        let { className: n, bsPrefix: r, as: a = 'span', ...o } = e;
        return (
          (r = (0, u.oU)(r, 'navbar-text')), (0, l.jsx)(a, { ref: t, className: i()(n, r), ...o })
        );
      });
      G.displayName = 'NavbarText';
      let $ = a.forwardRef((e, t) => {
        let {
            bsPrefix: n,
            expand: r = !0,
            variant: c = 'light',
            bg: d,
            fixed: f,
            sticky: h,
            className: m,
            as: g = 'nav',
            expanded: p,
            onToggle: v,
            onSelect: w,
            collapseOnSelect: y = !1,
            ...b
          } = (0, s.Zw)(e, { expanded: 'onToggle' }),
          x = (0, u.oU)(n, 'navbar'),
          k = (0, a.useCallback)(
            function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              null == w || w(...t), y && p && (null == v || v(!1));
            },
            [w, y, p, v]
          );
        void 0 === b.role && 'nav' !== g && (b.role = 'navigation');
        let T = ''.concat(x, '-expand');
        'string' == typeof r && (T = ''.concat(T, '-').concat(r));
        let M = (0, a.useMemo)(
          () => ({
            onToggle: () => (null == v ? void 0 : v(!p)),
            bsPrefix: x,
            expanded: !!p,
            expand: r,
          }),
          [x, p, r, v]
        );
        return (0, l.jsx)(S.A.Provider, {
          value: M,
          children: (0, l.jsx)(o.A.Provider, {
            value: k,
            children: (0, l.jsx)(g, {
              ref: t,
              ...b,
              className: i()(
                m,
                x,
                r && T,
                c && ''.concat(x, '-').concat(c),
                d && 'bg-'.concat(d),
                h && 'sticky-'.concat(h),
                f && 'fixed-'.concat(f)
              ),
            }),
          }),
        });
      });
      $.displayName = 'Navbar';
      let X = Object.assign($, { Brand: c, Collapse: k, Offcanvas: B, Text: G, Toggle: M });
    },
    63280: (e, t, n) => {
      'use strict';
      n.d(t, { d: () => a });
      var r = n(61183),
        i = n(27981);
      function a(e, t, n) {
        let [a, o] = (0, r.x)(null == n ? void 0 : n.in, e, t);
        return +(0, i.a)(a) == +(0, i.a)(o);
      }
    },
    64044: (e, t, n) => {
      'use strict';
      n.d(t, { L: () => a });
      var r = n(38991),
        i = n(25703);
      function a(e, t, n) {
        return (0, r.A)(e, t * i.s0, n);
      }
    },
    66848: (e, t, n) => {
      'use strict';
      n.d(t, { P: () => i });
      var r = n(89447);
      function i(e, t) {
        return (0, r.a)(e, null == t ? void 0 : t.in).getDay();
      }
    },
    67386: (e, t, n) => {
      'use strict';
      n.d(t, { D: () => i });
      var r = n(89447);
      function i(e, t) {
        let n = (0, r.a)(e, null == t ? void 0 : t.in);
        return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
      }
    },
    68375: () => {},
    70540: (e, t, n) => {
      'use strict';
      n.d(t, { b: () => i });
      var r = n(84423);
      function i(e, t) {
        return (0, r.k)(e, { ...t, weekStartsOn: 1 });
      }
    },
    70542: (e, t, n) => {
      'use strict';
      n.d(t, { t: () => i });
      var r = n(61183);
      function i(e, t, n) {
        let [i, a] = (0, r.x)(null == n ? void 0 : n.in, e, t);
        return i.getFullYear() === a.getFullYear() && i.getMonth() === a.getMonth();
      }
    },
    71182: (e, t, n) => {
      'use strict';
      n.d(t, { p: () => o });
      var r = n(7239),
        i = n(70540),
        a = n(89447);
      function o(e, t) {
        let n = (0, a.a)(e, null == t ? void 0 : t.in),
          o = n.getFullYear(),
          s = (0, r.w)(n, 0);
        s.setFullYear(o + 1, 0, 4), s.setHours(0, 0, 0, 0);
        let u = (0, i.b)(s),
          l = (0, r.w)(n, 0);
        l.setFullYear(o, 0, 4), l.setHours(0, 0, 0, 0);
        let c = (0, i.b)(l);
        return n.getTime() >= u.getTime() ? o + 1 : n.getTime() >= c.getTime() ? o : o - 1;
      }
    },
    71423: (e, t, n) => {
      'use strict';
      n.d(t, { O: () => i });
      var r = n(89447);
      function i(e, t) {
        return (0, r.a)(e, null == t ? void 0 : t.in).getMinutes();
      }
    },
    72794: (e, t, n) => {
      'use strict';
      n.d(t, { $: () => a });
      var r = n(95490),
        i = n(89447);
      function a(e, t) {
        var n, a, o, s, u, l, c, d;
        let f = (0, r.q)(),
          h =
            null !=
            (d =
              null !=
              (c =
                null !=
                (l =
                  null != (u = null == t ? void 0 : t.weekStartsOn)
                    ? u
                    : null == t || null == (a = t.locale) || null == (n = a.options)
                      ? void 0
                      : n.weekStartsOn)
                  ? l
                  : f.weekStartsOn)
                ? c
                : null == (s = f.locale) || null == (o = s.options)
                  ? void 0
                  : o.weekStartsOn)
              ? d
              : 0,
          m = (0, i.a)(e, null == t ? void 0 : t.in),
          g = m.getDay();
        return (
          m.setDate(m.getDate() + ((g < h ? -7 : 0) + 6 - (g - h))), m.setHours(23, 59, 59, 999), m
        );
      }
    },
    73820: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => O });
      var r = n(29300),
        i = n.n(r),
        a = n(12115),
        o = n(91497),
        s = n(90610),
        u = n(19913);
      let l = a.createContext(null);
      l.displayName = 'NavContext';
      var c = n(56463);
      let d = a.createContext(null);
      var f = n(23855),
        h = n(41730),
        m = n(32960),
        g = n(95155);
      let p = ['as', 'active', 'eventKey'];
      function v({ key: e, onClick: t, active: n, id: r, role: i, disabled: o }) {
        let s = (0, a.useContext)(c.A),
          u = (0, a.useContext)(l),
          m = (0, a.useContext)(d),
          g = n,
          p = { role: i };
        if (u) {
          i || 'tablist' !== u.role || (p.role = 'tab');
          let t = u.getControllerId(null != e ? e : null),
            a = u.getControlledId(null != e ? e : null);
          (p[(0, f.sE)('event-key')] = e),
            (p.id = t || r),
            ((g = null == n && null != e ? u.activeKey === e : n) ||
              (!(null != m && m.unmountOnExit) && !(null != m && m.mountOnEnter))) &&
              (p['aria-controls'] = a);
        }
        return (
          'tab' === p.role &&
            ((p['aria-selected'] = g),
            g || (p.tabIndex = -1),
            o && ((p.tabIndex = -1), (p['aria-disabled'] = !0))),
          (p.onClick = (0, h.A)((n) => {
            o || (null == t || t(n), null != e && s && !n.isPropagationStopped() && s(e, n));
          })),
          [p, { isActive: g }]
        );
      }
      let w = a.forwardRef((e, t) => {
        let { as: n = m.Ay, active: r, eventKey: i } = e,
          a = (function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e)
              if ({}.hasOwnProperty.call(e, r)) {
                if (t.indexOf(r) >= 0) continue;
                n[r] = e[r];
              }
            return n;
          })(e, p),
          [o, s] = v(Object.assign({ key: (0, c.u)(i, a.href), active: r }, a));
        return (
          (o[(0, f.sE)('active')] = s.isActive), (0, g.jsx)(n, Object.assign({}, a, o, { ref: t }))
        );
      });
      w.displayName = 'NavItem';
      let y = ['as', 'onSelect', 'activeKey', 'role', 'onKeyDown'],
        b = () => {},
        x = (0, f.sE)('event-key'),
        S = a.forwardRef((e, t) => {
          let n,
            r,
            { as: i = 'div', onSelect: o, activeKey: h, role: m, onKeyDown: p } = e,
            v = (function (e, t) {
              if (null == e) return {};
              var n = {};
              for (var r in e)
                if ({}.hasOwnProperty.call(e, r)) {
                  if (t.indexOf(r) >= 0) continue;
                  n[r] = e[r];
                }
              return n;
            })(e, y),
            w = (function () {
              let [, e] = (0, a.useReducer)((e) => e + 1, 0);
              return e;
            })(),
            S = (0, a.useRef)(!1),
            k = (0, a.useContext)(c.A),
            T = (0, a.useContext)(d);
          T &&
            ((m = m || 'tablist'),
            (h = T.activeKey),
            (n = T.getControlledId),
            (r = T.getControllerId));
          let M = (0, a.useRef)(null),
            N = (e) => {
              let t = M.current;
              if (!t) return null;
              let n = (0, s.A)(t, `[${x}]:not([aria-disabled=true])`),
                r = t.querySelector('[aria-selected=true]');
              if (!r || r !== document.activeElement) return null;
              let i = n.indexOf(r);
              if (-1 === i) return null;
              let a = i + e;
              return a >= n.length && (a = 0), a < 0 && (a = n.length - 1), n[a];
            },
            D = (e, t) => {
              null != e && (null == o || o(e, t), null == k || k(e, t));
            };
          (0, a.useEffect)(() => {
            if (M.current && S.current) {
              let e = M.current.querySelector(`[${x}][aria-selected=true]`);
              null == e || e.focus();
            }
            S.current = !1;
          });
          let C = (0, u.A)(t, M);
          return (0, g.jsx)(c.A.Provider, {
            value: D,
            children: (0, g.jsx)(l.Provider, {
              value: {
                role: m,
                activeKey: (0, c.u)(h),
                getControlledId: n || b,
                getControllerId: r || b,
              },
              children: (0, g.jsx)(
                i,
                Object.assign({}, v, {
                  onKeyDown: (e) => {
                    let t;
                    if ((null == p || p(e), T)) {
                      switch (e.key) {
                        case 'ArrowLeft':
                        case 'ArrowUp':
                          t = N(-1);
                          break;
                        case 'ArrowRight':
                        case 'ArrowDown':
                          t = N(1);
                          break;
                        default:
                          return;
                      }
                      t &&
                        (e.preventDefault(),
                        D(t.dataset[(0, f.y)('EventKey')] || null, e),
                        (S.current = !0),
                        w());
                    }
                  },
                  ref: C,
                  role: m,
                })
              ),
            }),
          });
        });
      S.displayName = 'Nav';
      let k = Object.assign(S, { Item: w });
      var T = n(97390),
        M = n(95163);
      let N = a.createContext(null);
      N.displayName = 'CardHeaderContext';
      let D = a.forwardRef((e, t) => {
        let { className: n, bsPrefix: r, as: a = 'div', ...o } = e;
        return (
          (r = (0, T.oU)(r, 'nav-item')), (0, g.jsx)(a, { ref: t, className: i()(n, r), ...o })
        );
      });
      (D.displayName = 'NavItem'), n(84956), n(68141), n(18), n(94583), new WeakMap();
      let C = ['onKeyDown'],
        R = a.forwardRef((e, t) => {
          let { onKeyDown: n } = e,
            r = (function (e, t) {
              if (null == e) return {};
              var n = {};
              for (var r in e)
                if ({}.hasOwnProperty.call(e, r)) {
                  if (t.indexOf(r) >= 0) continue;
                  n[r] = e[r];
                }
              return n;
            })(e, C),
            [i] = (0, m.Am)(Object.assign({ tagName: 'a' }, r)),
            a = (0, h.A)((e) => {
              i.onKeyDown(e), null == n || n(e);
            });
          return (function (e) {
            return !e || '#' === e.trim();
          })(r.href) || 'button' === r.role
            ? (0, g.jsx)('a', Object.assign({ ref: t }, r, i, { onKeyDown: a }))
            : (0, g.jsx)('a', Object.assign({ ref: t }, r, { onKeyDown: n }));
        });
      R.displayName = 'Anchor';
      let E = a.forwardRef((e, t) => {
        let {
          bsPrefix: n,
          className: r,
          as: a = R,
          active: o,
          eventKey: s,
          disabled: u = !1,
          ...l
        } = e;
        n = (0, T.oU)(n, 'nav-link');
        let [d, f] = v({ key: (0, c.u)(s, l.href), active: o, disabled: u, ...l });
        return (0, g.jsx)(a, {
          ...l,
          ...d,
          ref: t,
          disabled: u,
          className: i()(r, n, u && 'disabled', f.isActive && 'active'),
        });
      });
      E.displayName = 'NavLink';
      let P = a.forwardRef((e, t) => {
        let n,
          r,
          {
            as: s = 'div',
            bsPrefix: u,
            variant: l,
            fill: c = !1,
            justify: d = !1,
            navbar: f,
            navbarScroll: h,
            className: m,
            activeKey: p,
            ...v
          } = (0, o.Zw)(e, { activeKey: 'onSelect' }),
          w = (0, T.oU)(u, 'nav'),
          y = !1,
          b = (0, a.useContext)(M.A),
          x = (0, a.useContext)(N);
        return (
          b ? ((n = b.bsPrefix), (y = null == f || f)) : x && ({ cardHeaderBsPrefix: r } = x),
          (0, g.jsx)(k, {
            as: s,
            ref: t,
            activeKey: p,
            className: i()(m, {
              [w]: !y,
              [''.concat(n, '-nav')]: y,
              [''.concat(n, '-nav-scroll')]: y && h,
              [''.concat(r, '-').concat(l)]: !!r,
              [''.concat(w, '-').concat(l)]: !!l,
              [''.concat(w, '-fill')]: c,
              [''.concat(w, '-justified')]: d,
            }),
            ...v,
          })
        );
      });
      P.displayName = 'Nav';
      let O = Object.assign(P, { Item: D, Link: E });
    },
    76492: (e, t, n) => {
      'use strict';
      n.d(t, { UE: () => I, ll: () => H, rD: () => U, UU: () => W, cY: () => z });
      let r = Math.min,
        i = Math.max,
        a = Math.round,
        o = Math.floor,
        s = (e) => ({ x: e, y: e }),
        u = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
        l = { start: 'end', end: 'start' };
      function c(e, t) {
        return 'function' == typeof e ? e(t) : e;
      }
      function d(e) {
        return e.split('-')[0];
      }
      function f(e) {
        return e.split('-')[1];
      }
      function h(e) {
        return 'y' === e ? 'height' : 'width';
      }
      function m(e) {
        return ['top', 'bottom'].includes(d(e)) ? 'y' : 'x';
      }
      function g(e) {
        return 'x' === m(e) ? 'y' : 'x';
      }
      function p(e) {
        return e.replace(/start|end/g, (e) => l[e]);
      }
      function v(e) {
        return e.replace(/left|right|bottom|top/g, (e) => u[e]);
      }
      function w(e) {
        return 'number' != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function y(e) {
        let { x: t, y: n, width: r, height: i } = e;
        return { width: r, height: i, top: n, left: t, right: t + r, bottom: n + i, x: t, y: n };
      }
      function b(e, t, n) {
        let r,
          { reference: i, floating: a } = e,
          o = m(t),
          s = g(t),
          u = h(s),
          l = d(t),
          c = 'y' === o,
          p = i.x + i.width / 2 - a.width / 2,
          v = i.y + i.height / 2 - a.height / 2,
          w = i[u] / 2 - a[u] / 2;
        switch (l) {
          case 'top':
            r = { x: p, y: i.y - a.height };
            break;
          case 'bottom':
            r = { x: p, y: i.y + i.height };
            break;
          case 'right':
            r = { x: i.x + i.width, y: v };
            break;
          case 'left':
            r = { x: i.x - a.width, y: v };
            break;
          default:
            r = { x: i.x, y: i.y };
        }
        switch (f(t)) {
          case 'start':
            r[s] -= w * (n && c ? -1 : 1);
            break;
          case 'end':
            r[s] += w * (n && c ? -1 : 1);
        }
        return r;
      }
      let x = async (e, t, n) => {
        let {
            placement: r = 'bottom',
            strategy: i = 'absolute',
            middleware: a = [],
            platform: o,
          } = n,
          s = a.filter(Boolean),
          u = await (null == o.isRTL ? void 0 : o.isRTL(t)),
          l = await o.getElementRects({ reference: e, floating: t, strategy: i }),
          { x: c, y: d } = b(l, r, u),
          f = r,
          h = {},
          m = 0;
        for (let n = 0; n < s.length; n++) {
          let { name: a, fn: g } = s[n],
            {
              x: p,
              y: v,
              data: w,
              reset: y,
            } = await g({
              x: c,
              y: d,
              initialPlacement: r,
              placement: f,
              strategy: i,
              middlewareData: h,
              rects: l,
              platform: o,
              elements: { reference: e, floating: t },
            });
          (c = null != p ? p : c),
            (d = null != v ? v : d),
            (h = { ...h, [a]: { ...h[a], ...w } }),
            y &&
              m <= 50 &&
              (m++,
              'object' == typeof y &&
                (y.placement && (f = y.placement),
                y.rects &&
                  (l =
                    !0 === y.rects
                      ? await o.getElementRects({ reference: e, floating: t, strategy: i })
                      : y.rects),
                ({ x: c, y: d } = b(l, f, u))),
              (n = -1));
        }
        return { x: c, y: d, placement: f, strategy: i, middlewareData: h };
      };
      async function S(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: r, y: i, platform: a, rects: o, elements: s, strategy: u } = e,
          {
            boundary: l = 'clippingAncestors',
            rootBoundary: d = 'viewport',
            elementContext: f = 'floating',
            altBoundary: h = !1,
            padding: m = 0,
          } = c(t, e),
          g = w(m),
          p = s[h ? ('floating' === f ? 'reference' : 'floating') : f],
          v = y(
            await a.getClippingRect({
              element:
                null == (n = await (null == a.isElement ? void 0 : a.isElement(p))) || n
                  ? p
                  : p.contextElement ||
                    (await (null == a.getDocumentElement
                      ? void 0
                      : a.getDocumentElement(s.floating))),
              boundary: l,
              rootBoundary: d,
              strategy: u,
            })
          ),
          b =
            'floating' === f
              ? { x: r, y: i, width: o.floating.width, height: o.floating.height }
              : o.reference,
          x = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(s.floating)),
          S = ((await (null == a.isElement ? void 0 : a.isElement(x))) &&
            (await (null == a.getScale ? void 0 : a.getScale(x)))) || { x: 1, y: 1 },
          k = y(
            a.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: s,
                  rect: b,
                  offsetParent: x,
                  strategy: u,
                })
              : b
          );
        return {
          top: (v.top - k.top + g.top) / S.y,
          bottom: (k.bottom - v.bottom + g.bottom) / S.y,
          left: (v.left - k.left + g.left) / S.x,
          right: (k.right - v.right + g.right) / S.x,
        };
      }
      async function k(e, t) {
        let { placement: n, platform: r, elements: i } = e,
          a = await (null == r.isRTL ? void 0 : r.isRTL(i.floating)),
          o = d(n),
          s = f(n),
          u = 'y' === m(n),
          l = ['left', 'top'].includes(o) ? -1 : 1,
          h = a && u ? -1 : 1,
          g = c(t, e),
          {
            mainAxis: p,
            crossAxis: v,
            alignmentAxis: w,
          } = 'number' == typeof g
            ? { mainAxis: g, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: g.mainAxis || 0,
                crossAxis: g.crossAxis || 0,
                alignmentAxis: g.alignmentAxis,
              };
        return (
          s && 'number' == typeof w && (v = 'end' === s ? -1 * w : w),
          u ? { x: v * h, y: p * l } : { x: p * l, y: v * h }
        );
      }
      var T = n(86301);
      function M(e) {
        let t = (0, T.L9)(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          i = (0, T.sb)(e),
          o = i ? e.offsetWidth : n,
          s = i ? e.offsetHeight : r,
          u = a(n) !== o || a(r) !== s;
        return u && ((n = o), (r = s)), { width: n, height: r, $: u };
      }
      function N(e) {
        return (0, T.vq)(e) ? e : e.contextElement;
      }
      function D(e) {
        let t = N(e);
        if (!(0, T.sb)(t)) return s(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: i, $: o } = M(t),
          u = (o ? a(n.width) : n.width) / r,
          l = (o ? a(n.height) : n.height) / i;
        return (
          (u && Number.isFinite(u)) || (u = 1), (l && Number.isFinite(l)) || (l = 1), { x: u, y: l }
        );
      }
      let C = s(0);
      function R(e) {
        let t = (0, T.zk)(e);
        return (0, T.Tc)() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : C;
      }
      function E(e, t, n, r) {
        var i;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let a = e.getBoundingClientRect(),
          o = N(e),
          u = s(1);
        t && (r ? (0, T.vq)(r) && (u = D(r)) : (u = D(e)));
        let l = (void 0 === (i = n) && (i = !1), r && (!i || r === (0, T.zk)(o)) && i)
            ? R(o)
            : s(0),
          c = (a.left + l.x) / u.x,
          d = (a.top + l.y) / u.y,
          f = a.width / u.x,
          h = a.height / u.y;
        if (o) {
          let e = (0, T.zk)(o),
            t = r && (0, T.vq)(r) ? (0, T.zk)(r) : r,
            n = e,
            i = (0, T._m)(n);
          for (; i && r && t !== n; ) {
            let e = D(i),
              t = i.getBoundingClientRect(),
              r = (0, T.L9)(i),
              a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
            (c *= e.x),
              (d *= e.y),
              (f *= e.x),
              (h *= e.y),
              (c += a),
              (d += o),
              (n = (0, T.zk)(i)),
              (i = (0, T._m)(n));
          }
        }
        return y({ width: f, height: h, x: c, y: d });
      }
      function P(e, t) {
        let n = (0, T.CP)(e).scrollLeft;
        return t ? t.left + n : E((0, T.ep)(e)).left + n;
      }
      function O(e, t, n) {
        void 0 === n && (n = !1);
        let r = e.getBoundingClientRect();
        return { x: r.left + t.scrollLeft - (n ? 0 : P(e, r)), y: r.top + t.scrollTop };
      }
      function _(e, t, n) {
        let r;
        if ('viewport' === t)
          r = (function (e, t) {
            let n = (0, T.zk)(e),
              r = (0, T.ep)(e),
              i = n.visualViewport,
              a = r.clientWidth,
              o = r.clientHeight,
              s = 0,
              u = 0;
            if (i) {
              (a = i.width), (o = i.height);
              let e = (0, T.Tc)();
              (!e || (e && 'fixed' === t)) && ((s = i.offsetLeft), (u = i.offsetTop));
            }
            return { width: a, height: o, x: s, y: u };
          })(e, n);
        else if ('document' === t)
          r = (function (e) {
            let t = (0, T.ep)(e),
              n = (0, T.CP)(e),
              r = e.ownerDocument.body,
              a = i(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              o = i(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
              s = -n.scrollLeft + P(e),
              u = -n.scrollTop;
            return (
              'rtl' === (0, T.L9)(r).direction && (s += i(t.clientWidth, r.clientWidth) - a),
              { width: a, height: o, x: s, y: u }
            );
          })((0, T.ep)(e));
        else if ((0, T.vq)(t))
          r = (function (e, t) {
            let n = E(e, !0, 'fixed' === t),
              r = n.top + e.clientTop,
              i = n.left + e.clientLeft,
              a = (0, T.sb)(e) ? D(e) : s(1),
              o = e.clientWidth * a.x,
              u = e.clientHeight * a.y;
            return { width: o, height: u, x: i * a.x, y: r * a.y };
          })(t, n);
        else {
          let n = R(e);
          r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
        }
        return y(r);
      }
      function F(e) {
        return 'static' === (0, T.L9)(e).position;
      }
      function A(e, t) {
        if (!(0, T.sb)(e) || 'fixed' === (0, T.L9)(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return (0, T.ep)(e) === n && (n = n.ownerDocument.body), n;
      }
      function q(e, t) {
        let n = (0, T.zk)(e);
        if ((0, T.Tf)(e)) return n;
        if (!(0, T.sb)(e)) {
          let t = (0, T.$4)(e);
          for (; t && !(0, T.eu)(t); ) {
            if ((0, T.vq)(t) && !F(t)) return t;
            t = (0, T.$4)(t);
          }
          return n;
        }
        let r = A(e, t);
        for (; r && (0, T.Lv)(r) && F(r); ) r = A(r, t);
        return r && (0, T.eu)(r) && F(r) && !(0, T.sQ)(r) ? n : r || (0, T.gJ)(e) || n;
      }
      let Y = async function (e) {
          let t = this.getOffsetParent || q,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: (function (e, t, n) {
              let r = (0, T.sb)(t),
                i = (0, T.ep)(t),
                a = 'fixed' === n,
                o = E(e, !0, a, t),
                u = { scrollLeft: 0, scrollTop: 0 },
                l = s(0);
              if (r || (!r && !a))
                if ((('body' !== (0, T.mq)(t) || (0, T.ZU)(i)) && (u = (0, T.CP)(t)), r)) {
                  let e = E(t, !0, a, t);
                  (l.x = e.x + t.clientLeft), (l.y = e.y + t.clientTop);
                } else i && (l.x = P(i));
              a && !r && i && (l.x = P(i));
              let c = !i || r || a ? s(0) : O(i, u);
              return {
                x: o.left + u.scrollLeft - l.x - c.x,
                y: o.top + u.scrollTop - l.y - c.y,
                width: o.width,
                height: o.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          };
        },
        j = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: i } = e,
              a = 'fixed' === i,
              o = (0, T.ep)(r),
              u = !!t && (0, T.Tf)(t.floating);
            if (r === o || (u && a)) return n;
            let l = { scrollLeft: 0, scrollTop: 0 },
              c = s(1),
              d = s(0),
              f = (0, T.sb)(r);
            if (
              (f || (!f && !a)) &&
              (('body' !== (0, T.mq)(r) || (0, T.ZU)(o)) && (l = (0, T.CP)(r)), (0, T.sb)(r))
            ) {
              let e = E(r);
              (c = D(r)), (d.x = e.x + r.clientLeft), (d.y = e.y + r.clientTop);
            }
            let h = !o || f || a ? s(0) : O(o, l, !0);
            return {
              width: n.width * c.x,
              height: n.height * c.y,
              x: n.x * c.x - l.scrollLeft * c.x + d.x + h.x,
              y: n.y * c.y - l.scrollTop * c.y + d.y + h.y,
            };
          },
          getDocumentElement: T.ep,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: a, strategy: o } = e,
              s = [
                ...('clippingAncestors' === n
                  ? (0, T.Tf)(t)
                    ? []
                    : (function (e, t) {
                        let n = t.get(e);
                        if (n) return n;
                        let r = (0, T.v9)(e, [], !1).filter(
                            (e) => (0, T.vq)(e) && 'body' !== (0, T.mq)(e)
                          ),
                          i = null,
                          a = 'fixed' === (0, T.L9)(e).position,
                          o = a ? (0, T.$4)(e) : e;
                        for (; (0, T.vq)(o) && !(0, T.eu)(o); ) {
                          let t = (0, T.L9)(o),
                            n = (0, T.sQ)(o);
                          n || 'fixed' !== t.position || (i = null),
                            (
                              a
                                ? !n && !i
                                : (!n &&
                                    'static' === t.position &&
                                    !!i &&
                                    ['absolute', 'fixed'].includes(i.position)) ||
                                  ((0, T.ZU)(o) &&
                                    !n &&
                                    (function e(t, n) {
                                      let r = (0, T.$4)(t);
                                      return (
                                        !(r === n || !(0, T.vq)(r) || (0, T.eu)(r)) &&
                                        ('fixed' === (0, T.L9)(r).position || e(r, n))
                                      );
                                    })(e, o))
                            )
                              ? (r = r.filter((e) => e !== o))
                              : (i = t),
                            (o = (0, T.$4)(o));
                        }
                        return t.set(e, r), r;
                      })(t, this._c)
                  : [].concat(n)),
                a,
              ],
              u = s[0],
              l = s.reduce(
                (e, n) => {
                  let a = _(t, n, o);
                  return (
                    (e.top = i(a.top, e.top)),
                    (e.right = r(a.right, e.right)),
                    (e.bottom = r(a.bottom, e.bottom)),
                    (e.left = i(a.left, e.left)),
                    e
                  );
                },
                _(t, u, o)
              );
            return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
          },
          getOffsetParent: q,
          getElementRects: Y,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: n } = M(e);
            return { width: t, height: n };
          },
          getScale: D,
          isElement: T.vq,
          isRTL: function (e) {
            return 'rtl' === (0, T.L9)(e).direction;
          },
        };
      function L(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
      }
      function H(e, t, n, a) {
        let s;
        void 0 === a && (a = {});
        let {
            ancestorScroll: u = !0,
            ancestorResize: l = !0,
            elementResize: c = 'function' == typeof ResizeObserver,
            layoutShift: d = 'function' == typeof IntersectionObserver,
            animationFrame: f = !1,
          } = a,
          h = N(e),
          m = u || l ? [...(h ? (0, T.v9)(h) : []), ...(0, T.v9)(t)] : [];
        m.forEach((e) => {
          u && e.addEventListener('scroll', n, { passive: !0 }),
            l && e.addEventListener('resize', n);
        });
        let g =
            h && d
              ? (function (e, t) {
                  let n,
                    a = null,
                    s = (0, T.ep)(e);
                  function u() {
                    var e;
                    clearTimeout(n), null == (e = a) || e.disconnect(), (a = null);
                  }
                  return (
                    !(function l(c, d) {
                      void 0 === c && (c = !1), void 0 === d && (d = 1), u();
                      let f = e.getBoundingClientRect(),
                        { left: h, top: m, width: g, height: p } = f;
                      if ((c || t(), !g || !p)) return;
                      let v = o(m),
                        w = o(s.clientWidth - (h + g)),
                        y = {
                          rootMargin:
                            -v +
                            'px ' +
                            -w +
                            'px ' +
                            -o(s.clientHeight - (m + p)) +
                            'px ' +
                            -o(h) +
                            'px',
                          threshold: i(0, r(1, d)) || 1,
                        },
                        b = !0;
                      function x(t) {
                        let r = t[0].intersectionRatio;
                        if (r !== d) {
                          if (!b) return l();
                          r
                            ? l(!1, r)
                            : (n = setTimeout(() => {
                                l(!1, 1e-7);
                              }, 1e3));
                        }
                        1 !== r || L(f, e.getBoundingClientRect()) || l(), (b = !1);
                      }
                      try {
                        a = new IntersectionObserver(x, { ...y, root: s.ownerDocument });
                      } catch (e) {
                        a = new IntersectionObserver(x, y);
                      }
                      a.observe(e);
                    })(!0),
                    u
                  );
                })(h, n)
              : null,
          p = -1,
          v = null;
        c &&
          ((v = new ResizeObserver((e) => {
            let [r] = e;
            r &&
              r.target === h &&
              v &&
              (v.unobserve(t),
              cancelAnimationFrame(p),
              (p = requestAnimationFrame(() => {
                var e;
                null == (e = v) || e.observe(t);
              }))),
              n();
          })),
          h && !f && v.observe(h),
          v.observe(t));
        let w = f ? E(e) : null;
        return (
          f &&
            (function t() {
              let r = E(e);
              w && !L(w, r) && n(), (w = r), (s = requestAnimationFrame(t));
            })(),
          n(),
          () => {
            var e;
            m.forEach((e) => {
              u && e.removeEventListener('scroll', n), l && e.removeEventListener('resize', n);
            }),
              null == g || g(),
              null == (e = v) || e.disconnect(),
              (v = null),
              f && cancelAnimationFrame(s);
          }
        );
      }
      let z = function (e) {
          return (
            void 0 === e && (e = 0),
            {
              name: 'offset',
              options: e,
              async fn(t) {
                var n, r;
                let { x: i, y: a, placement: o, middlewareData: s } = t,
                  u = await k(t, e);
                return o === (null == (n = s.offset) ? void 0 : n.placement) &&
                  null != (r = s.arrow) &&
                  r.alignmentOffset
                  ? {}
                  : { x: i + u.x, y: a + u.y, data: { ...u, placement: o } };
              },
            }
          );
        },
        W = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: 'flip',
              options: e,
              async fn(t) {
                var n, r, i, a, o;
                let {
                    placement: s,
                    middlewareData: u,
                    rects: l,
                    initialPlacement: w,
                    platform: y,
                    elements: b,
                  } = t,
                  {
                    mainAxis: x = !0,
                    crossAxis: k = !0,
                    fallbackPlacements: T,
                    fallbackStrategy: M = 'bestFit',
                    fallbackAxisSideDirection: N = 'none',
                    flipAlignment: D = !0,
                    ...C
                  } = c(e, t);
                if (null != (n = u.arrow) && n.alignmentOffset) return {};
                let R = d(s),
                  E = m(w),
                  P = d(w) === w,
                  O = await (null == y.isRTL ? void 0 : y.isRTL(b.floating)),
                  _ =
                    T ||
                    (P || !D
                      ? [v(w)]
                      : (function (e) {
                          let t = v(e);
                          return [p(e), t, p(t)];
                        })(w)),
                  F = 'none' !== N;
                !T &&
                  F &&
                  _.push(
                    ...(function (e, t, n, r) {
                      let i = f(e),
                        a = (function (e, t, n) {
                          let r = ['left', 'right'],
                            i = ['right', 'left'];
                          switch (e) {
                            case 'top':
                            case 'bottom':
                              if (n) return t ? i : r;
                              return t ? r : i;
                            case 'left':
                            case 'right':
                              return t ? ['top', 'bottom'] : ['bottom', 'top'];
                            default:
                              return [];
                          }
                        })(d(e), 'start' === n, r);
                      return (
                        i && ((a = a.map((e) => e + '-' + i)), t && (a = a.concat(a.map(p)))), a
                      );
                    })(w, D, N, O)
                  );
                let A = [w, ..._],
                  q = await S(t, C),
                  Y = [],
                  j = (null == (r = u.flip) ? void 0 : r.overflows) || [];
                if ((x && Y.push(q[R]), k)) {
                  let e = (function (e, t, n) {
                    void 0 === n && (n = !1);
                    let r = f(e),
                      i = g(e),
                      a = h(i),
                      o =
                        'x' === i
                          ? r === (n ? 'end' : 'start')
                            ? 'right'
                            : 'left'
                          : 'start' === r
                            ? 'bottom'
                            : 'top';
                    return t.reference[a] > t.floating[a] && (o = v(o)), [o, v(o)];
                  })(s, l, O);
                  Y.push(q[e[0]], q[e[1]]);
                }
                if (((j = [...j, { placement: s, overflows: Y }]), !Y.every((e) => e <= 0))) {
                  let e = ((null == (i = u.flip) ? void 0 : i.index) || 0) + 1,
                    t = A[e];
                  if (
                    t &&
                    ('alignment' !== k ||
                      E === m(t) ||
                      j.every((e) => e.overflows[0] > 0 && m(e.placement) === E))
                  )
                    return { data: { index: e, overflows: j }, reset: { placement: t } };
                  let n =
                    null ==
                    (a = j
                      .filter((e) => e.overflows[0] <= 0)
                      .sort((e, t) => e.overflows[1] - t.overflows[1])[0])
                      ? void 0
                      : a.placement;
                  if (!n)
                    switch (M) {
                      case 'bestFit': {
                        let e =
                          null ==
                          (o = j
                            .filter((e) => {
                              if (F) {
                                let t = m(e.placement);
                                return t === E || 'y' === t;
                              }
                              return !0;
                            })
                            .map((e) => [
                              e.placement,
                              e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0),
                            ])
                            .sort((e, t) => e[1] - t[1])[0])
                            ? void 0
                            : o[0];
                        e && (n = e);
                        break;
                      }
                      case 'initialPlacement':
                        n = w;
                    }
                  if (s !== n) return { reset: { placement: n } };
                }
                return {};
              },
            }
          );
        },
        I = (e) => ({
          name: 'arrow',
          options: e,
          async fn(t) {
            let {
                x: n,
                y: a,
                placement: o,
                rects: s,
                platform: u,
                elements: l,
                middlewareData: d,
              } = t,
              { element: m, padding: p = 0 } = c(e, t) || {};
            if (null == m) return {};
            let v = w(p),
              y = { x: n, y: a },
              b = g(o),
              x = h(b),
              S = await u.getDimensions(m),
              k = 'y' === b,
              T = k ? 'clientHeight' : 'clientWidth',
              M = s.reference[x] + s.reference[b] - y[b] - s.floating[x],
              N = y[b] - s.reference[b],
              D = await (null == u.getOffsetParent ? void 0 : u.getOffsetParent(m)),
              C = D ? D[T] : 0;
            (C && (await (null == u.isElement ? void 0 : u.isElement(D)))) ||
              (C = l.floating[T] || s.floating[x]);
            let R = C / 2 - S[x] / 2 - 1,
              E = r(v[k ? 'top' : 'left'], R),
              P = r(v[k ? 'bottom' : 'right'], R),
              O = C - S[x] - P,
              _ = C / 2 - S[x] / 2 + (M / 2 - N / 2),
              F = i(E, r(_, O)),
              A =
                !d.arrow &&
                null != f(o) &&
                _ !== F &&
                s.reference[x] / 2 - (_ < E ? E : P) - S[x] / 2 < 0,
              q = A ? (_ < E ? _ - E : _ - O) : 0;
            return {
              [b]: y[b] + q,
              data: { [b]: F, centerOffset: _ - F - q, ...(A && { alignmentOffset: q }) },
              reset: A,
            };
          },
        }),
        U = (e, t, n) => {
          let r = new Map(),
            i = { platform: j, ...n },
            a = { ...i.platform, _c: r };
          return x(e, t, { ...i, platform: a });
        };
    },
    80520: (e, t, n) => {
      'use strict';
      n.d(t, { v: () => i });
      var r = n(89447);
      function i(e, t, n) {
        let i = +(0, r.a)(e, null == n ? void 0 : n.in),
          [a, o] = [
            +(0, r.a)(t.start, null == n ? void 0 : n.in),
            +(0, r.a)(t.end, null == n ? void 0 : n.in),
          ].sort((e, t) => e - t);
        return i >= a && i <= o;
      }
    },
    82269: (e, t, n) => {
      'use strict';
      var r = n(49509);
      n(68375);
      var i = n(12115),
        a = (function (e) {
          return e && 'object' == typeof e && 'default' in e ? e : { default: e };
        })(i),
        o = void 0 !== r && r.env && !0,
        s = function (e) {
          return '[object String]' === Object.prototype.toString.call(e);
        },
        u = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              n = t.name,
              r = void 0 === n ? 'stylesheet' : n,
              i = t.optimizeForSpeed,
              a = void 0 === i ? o : i;
            l(s(r), '`name` must be a string'),
              (this._name = r),
              (this._deletedRulePlaceholder = '#' + r + '-deleted-rule____{}'),
              l('boolean' == typeof a, '`optimizeForSpeed` must be a boolean'),
              (this._optimizeForSpeed = a),
              (this._serverSheet = void 0),
              (this._tags = []),
              (this._injected = !1),
              (this._rulesCount = 0);
            var u =
              'undefined' != typeof window && document.querySelector('meta[property="csp-nonce"]');
            this._nonce = u ? u.getAttribute('content') : null;
          }
          var t,
            n = e.prototype;
          return (
            (n.setOptimizeForSpeed = function (e) {
              l('boolean' == typeof e, '`setOptimizeForSpeed` accepts a boolean'),
                l(
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
                (l(!this._injected, 'sheet already injected'),
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
              if ((l(s(e), '`insertRule` accepts only strings'), 'undefined' == typeof window))
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
                l(r, 'old rule at index `' + e + '` not found'), (r.textContent = t);
              }
              return e;
            }),
            (n.deleteRule = function (e) {
              if ('undefined' == typeof window) return void this._serverSheet.deleteRule(e);
              if (this._optimizeForSpeed) this.replaceRule(e, '');
              else {
                var t = this._tags[e];
                l(t, 'rule at index `' + e + '` not found'),
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
              t && l(s(t), 'makeStyleTag accepts only strings as second parameter');
              var r = document.createElement('style');
              this._nonce && r.setAttribute('nonce', this._nonce),
                (r.type = 'text/css'),
                r.setAttribute('data-' + e, ''),
                t && r.appendChild(document.createTextNode(t));
              var i = document.head || document.getElementsByTagName('head')[0];
              return n ? i.insertBefore(r, n) : i.appendChild(r), r;
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
      function l(e, t) {
        if (!e) throw Error('StyleSheet: ' + t + '.');
      }
      var c = function (e) {
          for (var t = 5381, n = e.length; n; ) t = (33 * t) ^ e.charCodeAt(--n);
          return t >>> 0;
        },
        d = {};
      function f(e, t) {
        if (!t) return 'jsx-' + e;
        var n = String(t),
          r = e + n;
        return d[r] || (d[r] = 'jsx-' + c(e + '-' + n)), d[r];
      }
      function h(e, t) {
        'undefined' == typeof window && (t = t.replace(/\/style/gi, '\\/style'));
        var n = e + t;
        return d[n] || (d[n] = t.replace(/__jsx-style-dynamic-selector/g, e)), d[n];
      }
      var m = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              n = t.styleSheet,
              r = void 0 === n ? null : n,
              i = t.optimizeForSpeed,
              a = void 0 !== i && i;
            (this._sheet = r || new u({ name: 'styled-jsx', optimizeForSpeed: a })),
              this._sheet.inject(),
              r &&
                'boolean' == typeof a &&
                (this._sheet.setOptimizeForSpeed(a),
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
                i = n.rules;
              if (r in this._instancesCounts) {
                this._instancesCounts[r] += 1;
                return;
              }
              var a = i
                .map(function (e) {
                  return t._sheet.insertRule(e);
                })
                .filter(function (e) {
                  return -1 !== e;
                });
              (this._indices[r] = a), (this._instancesCounts[r] = 1);
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
                  return a.default.createElement('style', {
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
                var i = f(r, n);
                return {
                  styleId: i,
                  rules: Array.isArray(t)
                    ? t.map(function (e) {
                        return h(i, e);
                      })
                    : [h(i, t)],
                };
              }
              return { styleId: f(r), rules: Array.isArray(t) ? t : [t] };
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
        g = i.createContext(null);
      g.displayName = 'StyleSheetContext';
      var p = a.default.useInsertionEffect || a.default.useLayoutEffect,
        v = 'undefined' != typeof window ? new m() : void 0;
      function w(e) {
        var t = v || i.useContext(g);
        return (
          t &&
            ('undefined' == typeof window
              ? t.add(e)
              : p(
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
      (w.dynamic = function (e) {
        return e
          .map(function (e) {
            return f(e[0], e[1]);
          })
          .join(' ');
      }),
        (t.style = w);
    },
    82637: (e, t, n) => {
      'use strict';
      n.d(t, { w: () => a });
      var r = n(61183),
        i = n(7038);
      function a(e, t, n) {
        let [a, o] = (0, r.x)(null == n ? void 0 : n.in, e, t);
        return 4 * (a.getFullYear() - o.getFullYear()) + ((0, i.F)(a) - (0, i.F)(o));
      }
    },
    84423: (e, t, n) => {
      'use strict';
      n.d(t, { k: () => a });
      var r = n(95490),
        i = n(89447);
      function a(e, t) {
        var n, a, o, s, u, l, c, d;
        let f = (0, r.q)(),
          h =
            null !=
            (d =
              null !=
              (c =
                null !=
                (l =
                  null != (u = null == t ? void 0 : t.weekStartsOn)
                    ? u
                    : null == t || null == (a = t.locale) || null == (n = a.options)
                      ? void 0
                      : n.weekStartsOn)
                  ? l
                  : f.weekStartsOn)
                ? c
                : null == (s = f.locale) || null == (o = s.options)
                  ? void 0
                  : o.weekStartsOn)
              ? d
              : 0,
          m = (0, i.a)(e, null == t ? void 0 : t.in),
          g = m.getDay();
        return m.setDate(m.getDate() - (7 * (g < h) + g - h)), m.setHours(0, 0, 0, 0), m;
      }
    },
    84945: (e, t, n) => {
      'use strict';
      n.d(t, { UE: () => g, UU: () => m, cY: () => h, we: () => d });
      var r = n(76492),
        i = n(12115),
        a = n(47650),
        o = 'undefined' != typeof document ? i.useLayoutEffect : function () {};
      function s(e, t) {
        let n, r, i;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ('function' == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && 'object' == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!s(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (i = Object.keys(e)).length) !== Object.keys(t).length) return !1;
          for (r = n; 0 != r--; ) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = i[r];
            if (('_owner' !== n || !e.$$typeof) && !s(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function u(e) {
        return 'undefined' == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function l(e, t) {
        let n = u(e);
        return Math.round(t * n) / n;
      }
      function c(e) {
        let t = i.useRef(e);
        return (
          o(() => {
            t.current = e;
          }),
          t
        );
      }
      function d(e) {
        void 0 === e && (e = {});
        let {
            placement: t = 'bottom',
            strategy: n = 'absolute',
            middleware: d = [],
            platform: f,
            elements: { reference: h, floating: m } = {},
            transform: g = !0,
            whileElementsMounted: p,
            open: v,
          } = e,
          [w, y] = i.useState({
            x: 0,
            y: 0,
            strategy: n,
            placement: t,
            middlewareData: {},
            isPositioned: !1,
          }),
          [b, x] = i.useState(d);
        s(b, d) || x(d);
        let [S, k] = i.useState(null),
          [T, M] = i.useState(null),
          N = i.useCallback((e) => {
            e !== E.current && ((E.current = e), k(e));
          }, []),
          D = i.useCallback((e) => {
            e !== P.current && ((P.current = e), M(e));
          }, []),
          C = h || S,
          R = m || T,
          E = i.useRef(null),
          P = i.useRef(null),
          O = i.useRef(w),
          _ = null != p,
          F = c(p),
          A = c(f),
          q = c(v),
          Y = i.useCallback(() => {
            if (!E.current || !P.current) return;
            let e = { placement: t, strategy: n, middleware: b };
            A.current && (e.platform = A.current),
              (0, r.rD)(E.current, P.current, e).then((e) => {
                let t = { ...e, isPositioned: !1 !== q.current };
                j.current &&
                  !s(O.current, t) &&
                  ((O.current = t),
                  a.flushSync(() => {
                    y(t);
                  }));
              });
          }, [b, t, n, A, q]);
        o(() => {
          !1 === v &&
            O.current.isPositioned &&
            ((O.current.isPositioned = !1), y((e) => ({ ...e, isPositioned: !1 })));
        }, [v]);
        let j = i.useRef(!1);
        o(
          () => (
            (j.current = !0),
            () => {
              j.current = !1;
            }
          ),
          []
        ),
          o(() => {
            if ((C && (E.current = C), R && (P.current = R), C && R)) {
              if (F.current) return F.current(C, R, Y);
              Y();
            }
          }, [C, R, Y, F, _]);
        let L = i.useMemo(
            () => ({ reference: E, floating: P, setReference: N, setFloating: D }),
            [N, D]
          ),
          H = i.useMemo(() => ({ reference: C, floating: R }), [C, R]),
          z = i.useMemo(() => {
            let e = { position: n, left: 0, top: 0 };
            if (!H.floating) return e;
            let t = l(H.floating, w.x),
              r = l(H.floating, w.y);
            return g
              ? {
                  ...e,
                  transform: 'translate(' + t + 'px, ' + r + 'px)',
                  ...(u(H.floating) >= 1.5 && { willChange: 'transform' }),
                }
              : { position: n, left: t, top: r };
          }, [n, g, H.floating, w.x, w.y]);
        return i.useMemo(
          () => ({ ...w, update: Y, refs: L, elements: H, floatingStyles: z }),
          [w, Y, L, H, z]
        );
      }
      let f = (e) => ({
          name: 'arrow',
          options: e,
          fn(t) {
            let { element: n, padding: i } = 'function' == typeof e ? e(t) : e;
            return n && {}.hasOwnProperty.call(n, 'current')
              ? null != n.current
                ? (0, r.UE)({ element: n.current, padding: i }).fn(t)
                : {}
              : n
                ? (0, r.UE)({ element: n, padding: i }).fn(t)
                : {};
          },
        }),
        h = (e, t) => ({ ...(0, r.cY)(e), options: [e, t] }),
        m = (e, t) => ({ ...(0, r.UU)(e), options: [e, t] }),
        g = (e, t) => ({ ...f(e), options: [e, t] });
    },
    85118: (e, t, n) => {
      'use strict';
      n.d(t, { J: () => i });
      var r = n(40714);
      function i(e, t, n) {
        return (0, r.f)(e, 7 * t, n);
      }
    },
    85318: (e, t, n) => {
      'use strict';
      n.d(t, { n: () => i });
      var r = n(61183);
      function i(e, t, n) {
        let [i, a] = (0, r.x)(null == n ? void 0 : n.in, e, t);
        return i.getFullYear() - a.getFullYear();
      }
    },
    86301: (e, t, n) => {
      'use strict';
      function r() {
        return 'undefined' != typeof window;
      }
      function i(e) {
        return s(e) ? (e.nodeName || '').toLowerCase() : '#document';
      }
      function a(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
      }
      function o(e) {
        var t;
        return null == (t = (s(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function s(e) {
        return !!r() && (e instanceof Node || e instanceof a(e).Node);
      }
      function u(e) {
        return !!r() && (e instanceof Element || e instanceof a(e).Element);
      }
      function l(e) {
        return !!r() && (e instanceof HTMLElement || e instanceof a(e).HTMLElement);
      }
      function c(e) {
        return (
          !!r() &&
          'undefined' != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof a(e).ShadowRoot)
        );
      }
      function d(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: i } = w(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !['inline', 'contents'].includes(i)
        );
      }
      function f(e) {
        return ['table', 'td', 'th'].includes(i(e));
      }
      function h(e) {
        return [':popover-open', ':modal'].some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function m(e) {
        let t = p(),
          n = u(e) ? w(e) : e;
        return (
          ['transform', 'translate', 'scale', 'rotate', 'perspective'].some(
            (e) => !!n[e] && 'none' !== n[e]
          ) ||
          (!!n.containerType && 'normal' !== n.containerType) ||
          (!t && !!n.backdropFilter && 'none' !== n.backdropFilter) ||
          (!t && !!n.filter && 'none' !== n.filter) ||
          ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'].some((e) =>
            (n.willChange || '').includes(e)
          ) ||
          ['paint', 'layout', 'strict', 'content'].some((e) => (n.contain || '').includes(e))
        );
      }
      function g(e) {
        let t = b(e);
        for (; l(t) && !v(t); ) {
          if (m(t)) return t;
          if (h(t)) break;
          t = b(t);
        }
        return null;
      }
      function p() {
        return (
          'undefined' != typeof CSS &&
          !!CSS.supports &&
          CSS.supports('-webkit-backdrop-filter', 'none')
        );
      }
      function v(e) {
        return ['html', 'body', '#document'].includes(i(e));
      }
      function w(e) {
        return a(e).getComputedStyle(e);
      }
      function y(e) {
        return u(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function b(e) {
        if ('html' === i(e)) return e;
        let t = e.assignedSlot || e.parentNode || (c(e) && e.host) || o(e);
        return c(t) ? t.host : t;
      }
      function x(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
      }
      n.d(t, {
        $4: () => b,
        CP: () => y,
        L9: () => w,
        Lv: () => f,
        Tc: () => p,
        Tf: () => h,
        ZU: () => d,
        _m: () => x,
        ep: () => o,
        eu: () => v,
        gJ: () => g,
        mq: () => i,
        sQ: () => m,
        sb: () => l,
        v9: () =>
          function e(t, n, r) {
            var i;
            void 0 === n && (n = []), void 0 === r && (r = !0);
            let o = (function e(t) {
                let n = b(t);
                return v(n)
                  ? t.ownerDocument
                    ? t.ownerDocument.body
                    : t.body
                  : l(n) && d(n)
                    ? n
                    : e(n);
              })(t),
              s = o === (null == (i = t.ownerDocument) ? void 0 : i.body),
              u = a(o);
            if (s) {
              let t = x(u);
              return n.concat(u, u.visualViewport || [], d(o) ? o : [], t && r ? e(t) : []);
            }
            return n.concat(o, e(o, [], r));
          },
        vq: () => u,
        zk: () => a,
      });
    },
    86395: (e, t, n) => {
      'use strict';
      n.d(t, { S: () => i });
      var r = n(89447);
      function i(e) {
        return (0, r.a)(e).getSeconds();
      }
    },
    89447: (e, t, n) => {
      'use strict';
      n.d(t, { a: () => i });
      var r = n(7239);
      function i(e, t) {
        return (0, r.w)(t || e, e);
      }
    },
    91121: (e, t, n) => {
      'use strict';
      n.d(t, { s: () => i });
      var r = n(61183);
      function i(e, t, n) {
        let [i, a] = (0, r.x)(null == n ? void 0 : n.in, e, t);
        return i.getFullYear() === a.getFullYear();
      }
    },
    91497: (e, t, n) => {
      'use strict';
      n.d(t, { Zw: () => u });
      var r = n(79630),
        i = n(93495),
        a = n(12115);
      n(23718);
      function o(e) {
        return 'default' + e.charAt(0).toUpperCase() + e.substr(1);
      }
      function s(e) {
        var t = (function (e, t) {
          if ('object' != typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || 'default');
            if ('object' != typeof r) return r;
            throw TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === t ? String : Number)(e);
        })(e, 'string');
        return 'symbol' == typeof t ? t : String(t);
      }
      function u(e, t) {
        return Object.keys(t).reduce(function (n, u) {
          var l,
            c,
            d,
            f,
            h,
            m,
            g,
            p,
            v = n[o(u)],
            w = n[u],
            y = (0, i.A)(n, [o(u), u].map(s)),
            b = t[u],
            x =
              ((l = e[b]),
              (c = (0, a.useRef)(void 0 !== w)),
              (f = (d = (0, a.useState)(v))[0]),
              (h = d[1]),
              (m = void 0 !== w),
              (g = c.current),
              (c.current = m),
              !m && g && f !== v && h(v),
              [
                m ? w : f,
                (0, a.useCallback)(
                  function (e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                      n[r - 1] = arguments[r];
                    l && l.apply(void 0, [e].concat(n)), h(e);
                  },
                  [l]
                ),
              ]),
            S = x[0],
            k = x[1];
          return (0, r.A)({}, y, (((p = {})[u] = S), (p[b] = k), p));
        }, e);
      }
    },
    91588: (e, t, n) => {
      'use strict';
      n.d(t, { t: () => i });
      var r = n(89447);
      function i(e, t) {
        return (0, r.a)(e, null == t ? void 0 : t.in).getMonth();
      }
    },
    94458: (e, t, n) => {
      'use strict';
      n.d(t, { d: () => i });
      var r = n(25645);
      function i(e, t, n) {
        return (0, r.e)(e, -t, n);
      }
    },
    95163: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => i });
      let r = n(12115).createContext(null);
      r.displayName = 'NavbarContext';
      let i = r;
    },
    95490: (e, t, n) => {
      'use strict';
      n.d(t, { q: () => i });
      let r = {};
      function i() {
        return r;
      }
    },
    97165: (e, t, n) => {
      'use strict';
      n.d(t, { a: () => i });
      var r = n(89447);
      function i(e, t, n) {
        let i = (0, r.a)(e, null == n ? void 0 : n.in);
        return i.setHours(t), i;
      }
    },
    97444: (e, t, n) => {
      'use strict';
      n.d(t, { G: () => i });
      var r = n(89447);
      function i(e) {
        let t = (0, r.a)(e),
          n = new Date(
            Date.UTC(
              t.getFullYear(),
              t.getMonth(),
              t.getDate(),
              t.getHours(),
              t.getMinutes(),
              t.getSeconds(),
              t.getMilliseconds()
            )
          );
        return n.setUTCFullYear(t.getFullYear()), e - n;
      }
    },
    98449: (e, t, n) => {
      'use strict';
      n.d(t, { c: () => a });
      var r = n(61183),
        i = n(50007);
      function a(e, t, n) {
        let [a, s] = (0, r.x)(null == n ? void 0 : n.in, e, t),
          u = o(a, s),
          l = Math.abs((0, i.m)(a, s));
        a.setDate(a.getDate() - u * l);
        let c = Number(o(a, s) === -u),
          d = u * (l - c);
        return 0 === d ? 0 : d;
      }
      function o(e, t) {
        let n =
          e.getFullYear() - t.getFullYear() ||
          e.getMonth() - t.getMonth() ||
          e.getDate() - t.getDate() ||
          e.getHours() - t.getHours() ||
          e.getMinutes() - t.getMinutes() ||
          e.getSeconds() - t.getSeconds() ||
          e.getMilliseconds() - t.getMilliseconds();
        return n < 0 ? -1 : n > 0 ? 1 : n;
      }
    },
    98794: (e, t, n) => {
      'use strict';
      n.d(t, { H: () => o });
      var r = n(25703),
        i = n(7239),
        a = n(89447);
      function o(e, t) {
        var n;
        let o,
          g,
          p = () => (0, i.w)(null == t ? void 0 : t.in, NaN),
          v = null != (n = null == t ? void 0 : t.additionalDigits) ? n : 2,
          w = (function (e) {
            let t,
              n = {},
              r = e.split(s.dateTimeDelimiter);
            if (r.length > 2) return n;
            if (
              (/:/.test(r[0])
                ? (t = r[0])
                : ((n.date = r[0]),
                  (t = r[1]),
                  s.timeZoneDelimiter.test(n.date) &&
                    ((n.date = e.split(s.timeZoneDelimiter)[0]),
                    (t = e.substr(n.date.length, e.length)))),
              t)
            ) {
              let e = s.timezone.exec(t);
              e ? ((n.time = t.replace(e[1], '')), (n.timezone = e[1])) : (n.time = t);
            }
            return n;
          })(e);
        if (w.date) {
          let e = (function (e, t) {
            let n = RegExp(
                '^(?:(\\d{4}|[+-]\\d{' + (4 + t) + '})|(\\d{2}|[+-]\\d{' + (2 + t) + '})$)'
              ),
              r = e.match(n);
            if (!r) return { year: NaN, restDateString: '' };
            let i = r[1] ? parseInt(r[1]) : null,
              a = r[2] ? parseInt(r[2]) : null;
            return {
              year: null === a ? i : 100 * a,
              restDateString: e.slice((r[1] || r[2]).length),
            };
          })(w.date, v);
          o = (function (e, t) {
            var n, r, i, a, o, s, l, c;
            if (null === t) return new Date(NaN);
            let f = e.match(u);
            if (!f) return new Date(NaN);
            let g = !!f[4],
              p = d(f[1]),
              v = d(f[2]) - 1,
              w = d(f[3]),
              y = d(f[4]),
              b = d(f[5]) - 1;
            if (g) {
              return ((n = 0), (r = y), (i = b), r >= 1 && r <= 53 && i >= 0 && i <= 6)
                ? (function (e, t, n) {
                    let r = new Date(0);
                    r.setUTCFullYear(e, 0, 4);
                    let i = r.getUTCDay() || 7;
                    return r.setUTCDate(r.getUTCDate() + ((t - 1) * 7 + n + 1 - i)), r;
                  })(t, y, b)
                : new Date(NaN);
            }
            {
              let e = new Date(0);
              return ((a = t),
              (o = v),
              (s = w),
              o >= 0 &&
                o <= 11 &&
                s >= 1 &&
                s <= (h[o] || (m(a) ? 29 : 28)) &&
                ((l = t), (c = p) >= 1 && c <= (m(l) ? 366 : 365)))
                ? (e.setUTCFullYear(t, v, Math.max(p, w)), e)
                : new Date(NaN);
            }
          })(e.restDateString, e.year);
        }
        if (!o || isNaN(+o)) return p();
        let y = +o,
          b = 0;
        if (
          w.time &&
          isNaN(
            (b = (function (e) {
              var t, n, i;
              let a = e.match(l);
              if (!a) return NaN;
              let o = f(a[1]),
                s = f(a[2]),
                u = f(a[3]);
              return ((t = o),
              (n = s),
              (i = u),
              24 === t
                ? 0 === n && 0 === i
                : i >= 0 && i < 60 && n >= 0 && n < 60 && t >= 0 && t < 25)
                ? o * r.s0 + s * r.Cg + 1e3 * u
                : NaN;
            })(w.time))
          )
        )
          return p();
        if (w.timezone) {
          if (
            isNaN(
              (g = (function (e) {
                var t, n;
                if ('Z' === e) return 0;
                let i = e.match(c);
                if (!i) return 0;
                let a = '+' === i[1] ? -1 : 1,
                  o = parseInt(i[2]),
                  s = (i[3] && parseInt(i[3])) || 0;
                return ((t = 0), (n = s) >= 0 && n <= 59) ? a * (o * r.s0 + s * r.Cg) : NaN;
              })(w.timezone))
            )
          )
            return p();
        } else {
          let e = new Date(y + b),
            n = (0, a.a)(0, null == t ? void 0 : t.in);
          return (
            n.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()),
            n.setHours(
              e.getUTCHours(),
              e.getUTCMinutes(),
              e.getUTCSeconds(),
              e.getUTCMilliseconds()
            ),
            n
          );
        }
        return (0, a.a)(y + b + g, null == t ? void 0 : t.in);
      }
      let s = { dateTimeDelimiter: /[T ]/, timeZoneDelimiter: /[Z ]/i, timezone: /([Z+-].*)$/ },
        u = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
        l = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
        c = /^([+-])(\d{2})(?::?(\d{2}))?$/;
      function d(e) {
        return e ? parseInt(e) : 1;
      }
      function f(e) {
        return (e && parseFloat(e.replace(',', '.'))) || 0;
      }
      let h = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      function m(e) {
        return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0);
      }
    },
    99026: (e, t, n) => {
      'use strict';
      function r(e) {
        return (
          e instanceof Date ||
          ('object' == typeof e && '[object Date]' === Object.prototype.toString.call(e))
        );
      }
      n.d(t, { $: () => r });
    },
  },
]);
