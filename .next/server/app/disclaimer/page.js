(() => {
  var e = {};
  (e.id = 144),
    (e.ids = [144]),
    (e.modules = {
      3295: (e) => {
        'use strict';
        e.exports = require('next/dist/server/app-render/after-task-async-storage.external.js');
      },
      5605: (e, r, t) => {
        'use strict';
        t.r(r),
          t.d(r, {
            GlobalError: () => o.a,
            __next_app__: () => c,
            pages: () => d,
            routeModule: () => p,
            tree: () => u,
          });
        var i = t(65239),
          s = t(48088),
          a = t(88170),
          o = t.n(a),
          n = t(30893),
          l = {};
        for (let e in n)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (l[e] = () => n[e]);
        t.d(r, l);
        let u = {
            children: [
              '',
              {
                children: [
                  'disclaimer',
                  {
                    children: [
                      '__PAGE__',
                      {},
                      {
                        page: [
                          () => Promise.resolve().then(t.bind(t, 85096)),
                          'C:\\AnaxisTech Projects\\Suvrankala\\suvarnakala_frontend\\src\\app\\disclaimer\\page.tsx',
                        ],
                      },
                    ],
                  },
                  {
                    metadata: {
                      icon: [
                        async (e) => (await Promise.resolve().then(t.bind(t, 70440))).default(e),
                      ],
                      apple: [],
                      openGraph: [],
                      twitter: [],
                      manifest: void 0,
                    },
                  },
                ],
              },
              {
                layout: [
                  () => Promise.resolve().then(t.bind(t, 94431)),
                  'C:\\AnaxisTech Projects\\Suvrankala\\suvarnakala_frontend\\src\\app\\layout.tsx',
                ],
                'not-found': [
                  () => Promise.resolve().then(t.t.bind(t, 57398, 23)),
                  'next/dist/client/components/not-found-error',
                ],
                forbidden: [
                  () => Promise.resolve().then(t.t.bind(t, 89999, 23)),
                  'next/dist/client/components/forbidden-error',
                ],
                unauthorized: [
                  () => Promise.resolve().then(t.t.bind(t, 65284, 23)),
                  'next/dist/client/components/unauthorized-error',
                ],
                metadata: {
                  icon: [async (e) => (await Promise.resolve().then(t.bind(t, 70440))).default(e)],
                  apple: [],
                  openGraph: [],
                  twitter: [],
                  manifest: void 0,
                },
              },
            ],
          }.children,
          d = [
            'C:\\AnaxisTech Projects\\Suvrankala\\suvarnakala_frontend\\src\\app\\disclaimer\\page.tsx',
          ],
          c = { require: t, loadChunk: () => Promise.resolve() },
          p = new i.AppPageRouteModule({
            definition: {
              kind: s.RouteKind.APP_PAGE,
              page: '/disclaimer/page',
              pathname: '/disclaimer',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: u },
          });
      },
      10846: (e) => {
        'use strict';
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js');
      },
      12412: (e) => {
        'use strict';
        e.exports = require('assert');
      },
      19121: (e) => {
        'use strict';
        e.exports = require('next/dist/server/app-render/action-async-storage.external.js');
      },
      21820: (e) => {
        'use strict';
        e.exports = require('os');
      },
      27910: (e) => {
        'use strict';
        e.exports = require('stream');
      },
      28354: (e) => {
        'use strict';
        e.exports = require('util');
      },
      29021: (e) => {
        'use strict';
        e.exports = require('fs');
      },
      29294: (e) => {
        'use strict';
        e.exports = require('next/dist/server/app-render/work-async-storage.external.js');
      },
      33873: (e) => {
        'use strict';
        e.exports = require('path');
      },
      55511: (e) => {
        'use strict';
        e.exports = require('crypto');
      },
      55591: (e) => {
        'use strict';
        e.exports = require('https');
      },
      63033: (e) => {
        'use strict';
        e.exports = require('next/dist/server/app-render/work-unit-async-storage.external.js');
      },
      70440: (e, r, t) => {
        'use strict';
        t.r(r), t.d(r, { default: () => s });
        var i = t(31658);
        let s = async (e) => [
          {
            type: 'image/x-icon',
            sizes: '512x512',
            url: (0, i.fillMetadataSegment)('.', await e.params, 'favicon.ico') + '',
          },
        ];
      },
      74075: (e) => {
        'use strict';
        e.exports = require('zlib');
      },
      78335: () => {},
      79551: (e) => {
        'use strict';
        e.exports = require('url');
      },
      81630: (e) => {
        'use strict';
        e.exports = require('http');
      },
      83997: (e) => {
        'use strict';
        e.exports = require('tty');
      },
      85096: (e, r, t) => {
        'use strict';
        t.r(r), t.d(r, { default: () => a, metadata: () => s });
        var i = t(37413);
        t(61120);
        let s = { title: 'Disclaimer | Suvarnakala Pvt. Ltd' };
        function a() {
          return (0, i.jsxs)('main', {
            className: 'p-5 text-justify',
            children: [
              (0, i.jsx)('h1', { className: 'mb-4', children: 'Disclaimer' }),
              (0, i.jsx)('p', {
                children:
                  'The information contained in this website is for general information purposes only. The information is provided by Suvarnakala Pvt. Ltd. and while we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.',
              }),
              (0, i.jsx)('p', {
                children:
                  'In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits are arising out of, or in connection with, the use of this website.',
              }),
              (0, i.jsx)('p', {
                children:
                  'Through this website you are able to link to other websites which are not under the control of Suvarnakala Pvt. Ltd. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.',
              }),
              (0, i.jsx)('p', {
                children:
                  'Every effort is made to keep the website up and running smoothly. However, Suvarnakala Pvt. Ltd. takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.',
              }),
            ],
          });
        }
      },
      94735: (e) => {
        'use strict';
        e.exports = require('events');
      },
      96487: () => {},
    });
  var r = require('../../webpack-runtime.js');
  r.C(e);
  var t = (e) => r((r.s = e)),
    i = r.X(0, [447, 44, 277, 631], () => t(5605));
  module.exports = i;
})();
