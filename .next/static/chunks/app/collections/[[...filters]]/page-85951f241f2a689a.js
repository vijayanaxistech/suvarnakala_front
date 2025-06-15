(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [464],
  {
    2393: (A, e, t) => {
      'use strict';
      t.r(e), t.d(e, { default: () => s });
      let s = {
        src: '/_next/static/media/6.c88fc03a.jpg',
        height: 660,
        width: 1440,
        blurDataURL:
          'data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBv/aAAwDAQACEAMQAAAAkwWm/8QAHBAAAQMFAAAAAAAAAAAAAAAAAQIDBAAFERKS/9oACAEBAAE/AItznRti2+rKUk8V/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAGREAAwADAAAAAAAAAAAAAAAAAQIRAAMx/9oACAEDAQE/ANiI5rKCaei5/9k=',
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    7512: (A, e, t) => {
      'use strict';
      t.d(e, { default: () => i });
      var s = t(95155),
        r = t(12115);
      let i = (A) => {
        let { product: e } = A,
          [t, i] = (0, r.useState)(''),
          a = async () => {
            let A = prompt('Please enter your WhatsApp number for inquiry (e.g., +1234567890):');
            if (!A) return void alert('Phone number is required to send the inquiry.');
            if (!/^\+\d{10,15}$/.test(A))
              return void alert(
                'Please enter a valid phone number starting with "+" followed by 10-15 digits.'
              );
            i(A);
            let t =
              'Product Inquiry:\n\n' +
              'From: '.concat(A, '\n') +
              'Product Name: '.concat(e.title, '\n') +
              'Metal Type: '.concat(e.metal, '\n') +
              'Purity (Karat): '.concat(e.purity, '\n') +
              'Gross Weight (g): '.concat(e.grossWeight, '\n') +
              'Product Image URL: '.concat(e.mainImage);
            try {
              let A = await fetch('/api/send-whatsapp', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ to: '+919429439061', body: t }),
                }),
                e = await A.json();
              e.success
                ? alert('Message sent successfully via WhatsApp!')
                : alert('Failed to send message: ' + e.message);
            } catch (A) {
              console.error('Error sending  message:', A),
                alert('An error occurred while sending the message.');
            }
          };
        return (0, s.jsxs)('button', {
          onClick: a,
          className: 'more-info-btn-sm',
          children: [
            (0, s.jsx)('span', { children: 'More Info' }),
            (0, s.jsx)('i', { className: 'bi bi-info-circle ms-1' }),
          ],
        });
      };
    },
    13611: (A, e, t) => {
      'use strict';
      t.r(e), t.d(e, { default: () => s });
      let s = {
        src: '/_next/static/media/4.b189b9a1.jpg',
        height: 660,
        width: 1440,
        blurDataURL:
          'data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oADAMBAAIQAxAAAAChA0//xAAcEAABAwUAAAAAAAAAAAAAAAABAAIRAwQSIkH/2gAIAQEAAT8Atacg5Pc7URPF/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEDMoH/2gAIAQIBAT8AjrrP/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAMy/9oACAEDAQE/AGUf/9k=',
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    14342: (A, e, t) => {
      'use strict';
      t.r(e), t.d(e, { default: () => s });
      let s = {
        src: '/_next/static/media/cf111899016362517bb2fe4c9508dfd5281ec129.130554d8.png',
        height: 1920,
        width: 2880,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAOVBMVEWzOBTQSB7Zgh3JWhfBTRmjJwzPPRjFNBS9LRKwLA+xRxWeQRC2Tw2pMginOw+RLAbMYBt6Gge5XBKl68qAAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAALklEQVR4nAXBCQIAEAgAwUWp3Pz/sWZQ+pMxN91FWH5Ra1ZybuBh9ZQAUqoW+gEbmAEWyYmzlgAAAABJRU5ErkJggg==',
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    28268: (A, e, t) => {
      'use strict';
      t.r(e), t.d(e, { default: () => s });
      let s = {
        src: '/_next/static/media/collections.729309bd.png',
        height: 600,
        width: 1440,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAALVBMVEXVzce6lm7y9Pri3d7e187LyLrZ09Xq6ezYx7PIrJHt5+S/oH65rZCLbkvHtqVqPclcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPgYWXlYGFmY2DgZWTkZGBgY2LgY+Rm4WJmZwIABu0AgD6sn3sAAAAASUVORK5CYII=',
        blurWidth: 8,
        blurHeight: 3,
      };
    },
    30517: (A, e, t) => {
      'use strict';
      t.r(e), t.d(e, { default: () => s });
      let s = {
        src: '/_next/static/media/2.cfc02c4b.jpg',
        height: 660,
        width: 1440,
        blurDataURL:
          'data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAAAqAnf/8QAGxAAAQQDAAAAAAAAAAAAAAAAAQACAwQRE0H/2gAIAQEAAT8AjoVYAdcTW5PGgL//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwCP/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQBR/9oACAEDAQE/AFdv/9k=',
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    35695: (A, e, t) => {
      'use strict';
      var s = t(18999);
      t.o(s, 'usePathname') &&
        t.d(e, {
          usePathname: function () {
            return s.usePathname;
          },
        }),
        t.o(s, 'useRouter') &&
          t.d(e, {
            useRouter: function () {
              return s.useRouter;
            },
          });
    },
    45034: (A, e, t) => {
      'use strict';
      t.d(e, { default: () => o });
      var s = t(95155),
        r = t(12115),
        i = t(60902),
        a = t(29911),
        n = t(90748),
        l = t(35695);
      let o = (A) => {
        let { categories: e, metals: t, purities: o, occasions: g, selectedFilters: c } = A,
          d = (0, r.useRef)(null),
          [h, u] = (0, r.useState)(!1),
          [m, p] = (0, r.useState)('jewellery'),
          C = (0, l.useRouter)();
        (0, r.useEffect)(() => {
          console.log('Selected Filters:', c);
        }, [c]),
          (0, r.useEffect)(() => {
            let A = (A) => {
              d.current && !d.current.contains(A.target) && u(!1);
            };
            return (
              document.addEventListener('mousedown', A),
              () => {
                document.removeEventListener('mousedown', A);
              }
            );
          }, []);
        let E = (A) => {
            p((e) => (e === A ? null : A));
          },
          x = (A, e) => {
            if (!e) return void console.warn('Empty filter value for type:', A);
            let t = Object.entries({ ...c, [A]: e })
                .filter((A) => {
                  let [e, t] = A;
                  return t;
                })
                .flatMap((A) => {
                  let [e, t] = A;
                  return [encodeURIComponent(e), encodeURIComponent(t)];
                }),
              s = t.length > 0 ? '/collections/'.concat(t.join('/')) : '/collections';
            console.log('Navigating to:', s), C.push(s), u(!1);
          },
          b = (A) => {
            let e = { ...c };
            delete e[A];
            let t = Object.entries(e)
                .filter((A) => {
                  let [e, t] = A;
                  return t;
                })
                .flatMap((A) => {
                  let [e, t] = A;
                  return [encodeURIComponent(e), encodeURIComponent(t)];
                }),
              s = t.length > 0 ? '/collections/'.concat(t.join('/')) : '/collections';
            console.log('Removing filter:', A, 'Navigating to:', s), C.push(s);
          },
          Q = (A, e) =>
            (0, s.jsx)('div', {
              className: 'd-flex flex-wrap gap-2 mt-2',
              children: A.map((A) =>
                (0, s.jsx)(
                  'span',
                  {
                    onClick: () => x(e, A),
                    className: 'px-3 py-1 rounded-pill border '.concat(
                      c[e] === A ? 'bg-dark text-white' : 'bg-light text-dark'
                    ),
                    style: { cursor: 'pointer', fontSize: '14px' },
                    children: A,
                  },
                  A
                )
              ),
            });
        return (0, s.jsxs)('div', {
          className: 'position-relative',
          ref: d,
          children: [
            (0, s.jsxs)(i.default, {
              variant: 'outline-dark',
              className: 'd-flex align-items-center gap-2 rounded-pill px-4 py-2',
              onClick: () => u((A) => !A),
              children: [(0, s.jsx)(a.YsJ, {}), 'Filters', (0, s.jsx)(n.pte, {})],
            }),
            h &&
              (0, s.jsxs)('div', {
                className: 'shadow p-3 bg-white position-absolute',
                style: {
                  minWidth: 'clamp(280px, 90vw, 350px)',
                  top: '110%',
                  right: 0,
                  borderRadius: 12,
                  zIndex: 1e3,
                  boxShadow: '0 0 12px rgba(0,0,0,0.15)',
                },
                children: [
                  (0, s.jsxs)('div', {
                    className: 'd-flex justify-content-between align-items-center mb-3',
                    children: [
                      (0, s.jsx)('strong', { children: 'Filter By' }),
                      (0, s.jsxs)('div', {
                        children: [
                          Object.keys(c).length > 0 &&
                            (0, s.jsx)(i.default, {
                              variant: 'outline-secondary',
                              size: 'sm',
                              className: 'me-2',
                              onClick: () => {
                                console.log('Clearing all filters, navigating to /collections'),
                                  C.push('/collections'),
                                  u(!1);
                              },
                              children: 'Clear All Filters',
                            }),
                          (0, s.jsx)(n.WQq, {
                            onClick: () => u(!1),
                            style: { cursor: 'pointer', fontSize: '20px' },
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object.keys(c).length > 0 &&
                    (0, s.jsxs)('div', {
                      className: 'mb-3',
                      children: [
                        (0, s.jsx)('strong', { children: 'Active Filters' }),
                        (0, s.jsx)('div', {
                          className: 'd-flex flex-wrap gap-2 mt-2',
                          children: Object.entries(c).map((A) => {
                            let [e, t] = A;
                            return (0, s.jsxs)(
                              'span',
                              {
                                className:
                                  'px-3 py-1 rounded-pill border bg-dark text-white d-flex align-items-center',
                                style: { fontSize: '14px' },
                                children: [
                                  t,
                                  (0, s.jsx)(n.WQq, {
                                    onClick: () => b(e),
                                    style: { cursor: 'pointer', marginLeft: '8px' },
                                  }),
                                ],
                              },
                              e
                            );
                          }),
                        }),
                      ],
                    }),
                  (0, s.jsxs)('div', {
                    className: 'mb-3',
                    children: [
                      (0, s.jsxs)('div', {
                        className: 'd-flex justify-content-between align-items-center',
                        onClick: () => E('jewellery'),
                        style: { cursor: 'pointer' },
                        children: [
                          (0, s.jsx)('strong', { children: 'Jewellery Type' }),
                          (0, s.jsx)(n.pte, {
                            style: {
                              transform: 'jewellery' === m ? 'rotate(180deg)' : 'rotate(0)',
                              transition: 'transform 0.3s',
                            },
                          }),
                        ],
                      }),
                      'jewellery' === m && Q(e, 'category'),
                    ],
                  }),
                  (0, s.jsxs)('div', {
                    className: 'mb-3',
                    children: [
                      (0, s.jsxs)('div', {
                        className: 'd-flex justify-content-between align-items-center',
                        onClick: () => E('metal'),
                        style: { cursor: 'pointer' },
                        children: [
                          (0, s.jsx)('strong', { children: 'Metal' }),
                          (0, s.jsx)(n.pte, {
                            style: {
                              transform: 'metal' === m ? 'rotate(180deg)' : 'rotate(0)',
                              transition: 'transform 0.3s',
                            },
                          }),
                        ],
                      }),
                      'metal' === m && Q(t, 'metal'),
                    ],
                  }),
                  (0, s.jsxs)('div', {
                    className: 'mb-3',
                    children: [
                      (0, s.jsxs)('div', {
                        className: 'd-flex justify-content-between align-items-center',
                        onClick: () => E('purity'),
                        style: { cursor: 'pointer' },
                        children: [
                          (0, s.jsx)('strong', { children: 'Purity' }),
                          (0, s.jsx)(n.pte, {
                            style: {
                              transform: 'purity' === m ? 'rotate(180deg)' : 'rotate(0)',
                              transition: 'transform 0.3s',
                            },
                          }),
                        ],
                      }),
                      'purity' === m && Q(o, 'purity'),
                    ],
                  }),
                  (0, s.jsxs)('div', {
                    children: [
                      (0, s.jsxs)('div', {
                        className: 'd-flex justify-content-between align-items-center',
                        onClick: () => E('occasion'),
                        style: { cursor: 'pointer' },
                        children: [
                          (0, s.jsx)('strong', { children: 'Occasion' }),
                          (0, s.jsx)(n.pte, {
                            style: {
                              transform: 'occasion' === m ? 'rotate(180deg)' : 'rotate(0)',
                              transition: 'transform 0.3s',
                            },
                          }),
                        ],
                      }),
                      'occasion' === m && Q(g, 'occasion'),
                    ],
                  }),
                ],
              }),
          ],
        });
      };
    },
    48651: (A, e, t) => {
      'use strict';
      t.r(e), t.d(e, { default: () => s });
      let s = {
        src: '/_next/static/media/dark-brown-colour-flower-pattern-background-abstract-banner-multipurpose-design 1.c28d1eb3.png',
        height: 427,
        width: 1440,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAFVBMVEUYAAFsAwsMAACDBxFcAQg7AQM8AAN0TnFBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAF0lEQVR4nGNgYmBgY2RmZmRgArFYGFkAASwAJAOE4CgAAAAASUVORK5CYII=',
        blurWidth: 8,
        blurHeight: 2,
      };
    },
    63570: (A, e, t) => {
      'use strict';
      t.r(e), t.d(e, { default: () => s });
      let s = {
        src: '/_next/static/media/1.d5062353.jpg',
        height: 660,
        width: 1440,
        blurDataURL:
          'data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBf/aAAwDAQACEAMQAAAApASp/8QAHRAAAgEEAwAAAAAAAAAAAAAAAgMEAAERIhIhMf/aAAgBAQABPwCZCWLZhpYaTLG4Y5b+9la9f//EABgRAAIDAAAAAAAAAAAAAAAAAAABAkJy/9oACAECAQE/AIW0z//EABkRAQACAwAAAAAAAAAAAAAAAAEAEQIDIf/aAAgBAwEBPwDWDiWXwn//2Q==',
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    63830: (A, e, t) => {
      Promise.resolve().then(t.t.bind(t, 6874, 23)),
        Promise.resolve().then(t.t.bind(t, 33063, 23)),
        Promise.resolve().then(t.bind(t, 60902)),
        Promise.resolve().then(t.bind(t, 68136)),
        Promise.resolve().then(t.bind(t, 92809)),
        Promise.resolve().then(t.bind(t, 11846)),
        Promise.resolve().then(t.bind(t, 63570)),
        Promise.resolve().then(t.bind(t, 30517)),
        Promise.resolve().then(t.bind(t, 78544)),
        Promise.resolve().then(t.bind(t, 13611)),
        Promise.resolve().then(t.bind(t, 95110)),
        Promise.resolve().then(t.bind(t, 2393)),
        Promise.resolve().then(t.bind(t, 14342)),
        Promise.resolve().then(t.bind(t, 28268)),
        Promise.resolve().then(t.bind(t, 48651)),
        Promise.resolve().then(t.bind(t, 73299)),
        Promise.resolve().then(t.bind(t, 79717)),
        Promise.resolve().then(t.bind(t, 45034)),
        Promise.resolve().then(t.bind(t, 7512)),
        Promise.resolve().then(t.bind(t, 87365)),
        Promise.resolve().then(t.t.bind(t, 68334, 23));
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
    73299: (A, e, t) => {
      'use strict';
      t.r(e), t.d(e, { default: () => s });
      let s = {
        src: '/_next/static/media/shopWomwn.72dd0434.png',
        height: 427,
        width: 427,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEXAknvtyNUOAAC4lH6JV1W/naSIUTliMTnJkmx1PR1+YE1nPCTHl4R5QigAAADGjnx+SCx6QSNqWnvMoXmATCx7WVFGKiZ4ZoFKRmmXZUxpU1+eYU21e1ZiVXJCMz5cLBp9Y2qCUkFODksXAAAAHHRSTlMBFTRbMDn9D/1d4XbUWAW6xP4fnoX+/ef7/fjhPZsYPQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEFJREFUeJwVxscRgCAAAMFDiQYwR0Dtv0mH1y5A1dQAntZ2pow+Bl80Ls5TyRDtuwuQ45qOpMA9W86XRC1an98tfkubAtvoUUUoAAAAAElFTkSuQmCC',
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    78544: (A, e, t) => {
      'use strict';
      t.r(e), t.d(e, { default: () => s });
      let s = {
        src: '/_next/static/media/3.9489bad6.jpg',
        height: 660,
        width: 1440,
        blurDataURL:
          'data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oADAMBAAIQAxAAAACuCv8A/8QAHBAAAgEFAQAAAAAAAAAAAAAAAwQCAAYSFCIh/9oACAEBAAE/ALfS2xicYbZIWMcep+dV/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEDIf/aAAgBAwEBPwC+0Z//2Q==',
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    79717: (A, e, t) => {
      'use strict';
      t.r(e), t.d(e, { default: () => s });
      let s = {
        src: '/_next/static/media/women-s-earings_8408-3.7a65888a.avif',
        height: 492,
        width: 740,
        blurDataURL:
          'data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAANZtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAD6AAEAAAAAAAAANQAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAVmlwcnAAAAA4aXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAAgAAAAFAAAAEHBpeGkAAAAAAwgICAAAABZpcG1hAAAAAAAAAAEAAQOBAgMAAAA9bWRhdBIACgg4CLxhAQ0GkDInGAAKKKKEAO2LSygoDpbAvlLX0lv9dD4gl++8od7HN65LzUb3Z3lk',
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    87365: (A, e, t) => {
      'use strict';
      t.d(e, { default: () => a });
      var s = t(95155),
        r = t(12115),
        i = t(90748);
      let a = (A) => {
        let { product: e } = A,
          [t, a] = (0, r.useState)(''),
          n = async () => {
            let A = prompt('Please enter your WhatsApp number for inquiry (e.g., +1234567890):');
            if (!A) return void alert('Phone number is required to send the inquiry.');
            if (!/^\+\d{10,15}$/.test(A))
              return void alert(
                'Please enter a valid phone number starting with "+" followed by 10-15 digits.'
              );
            a(A);
            let t =
              'Product Inquiry:\n\n' +
              'From: '.concat(A, '\n') +
              'Product Name: '.concat(e.title, '\n') +
              'Metal Type: '.concat(e.metal, '\n') +
              'Purity (Karat): '.concat(e.purity, '\n') +
              'Gross Weight (g): '.concat(e.grossWeight, '\n') +
              'Product Image URL: '.concat(e.mainImage);
            try {
              let A = await fetch('/api/send-whatsapp', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ to: '+919429439061', body: t }),
                }),
                e = await A.json();
              e.success
                ? alert('Message sent successfully via WhatsApp!')
                : alert('Failed to send message: ' + e.message);
            } catch (A) {
              console.error('Error sending WhatsApp message:', A),
                alert('An error occurred while sending the message.');
            }
          };
        return (0, s.jsx)('button', {
          onClick: n,
          className: 'btn btn-link p-0 m-0 fs-5',
          style: { color: '#33CC33' },
          children: (0, s.jsx)(i._8j, {}),
        });
      };
    },
    95110: (A, e, t) => {
      'use strict';
      t.r(e), t.d(e, { default: () => s });
      let s = {
        src: '/_next/static/media/5.1c3b0aac.jpg',
        height: 660,
        width: 1440,
        blurDataURL:
          'data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oADAMBAAIQAxAAAACgA6f/xAAaEAACAgMAAAAAAAAAAAAAAAABAwARAgUS/9oACAEBAAE/ANcla1Y8irE//8QAFhEAAwAAAAAAAAAAAAAAAAAAAAIx/9oACAECAQE/AFh//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECMv/aAAgBAwEBPwC9M//Z',
        blurWidth: 8,
        blurHeight: 4,
      };
    },
  },
  (A) => {
    var e = (e) => A((A.s = e));
    A.O(0, [397, 711, 206, 63, 62, 99, 441, 684, 358], () => e(63830)), (_N_E = A.O());
  },
]);
