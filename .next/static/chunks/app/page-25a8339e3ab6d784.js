(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    11516: (e, a, t) => {
      'use strict';
      t.d(a, { default: () => A });
      var s = t(95155);
      t(12115);
      var i = t(58296);
      t(26310), t(15685);
      let n = {
          superLargeDesktop: { breakpoint: { max: 4e3, min: 1441 }, items: 5 },
          desktop: { breakpoint: { max: 1440, min: 1024 }, items: 3 },
          tablet: { breakpoint: { max: 1023, min: 768 }, items: 2 },
          mobile: { breakpoint: { max: 767, min: 0 }, items: 1 },
        },
        A = (e) => {
          let { testimonials: a } = e;
          return (0, s.jsxs)('div', {
            className: 'p-5 pt-4 pb-0',
            'aria-label': 'Suvarnakala Customer Testimonials Section',
            children: [
              (0, s.jsxs)('div', {
                className: 'custom-heading-wrapper d-flex align-items-center mb-4',
                children: [
                  (0, s.jsxs)('h2', {
                    className: 'm-0 custom-heading text-wrap me-3',
                    children: [
                      (0, s.jsxs)('span', {
                        children: [
                          'Customer ',
                          (0, s.jsx)('span', { className: 'text-red', children: 'Stories :' }),
                        ],
                      }),
                      (0, s.jsxs)('div', {
                        className: 'decorative-line',
                        children: [
                          (0, s.jsx)('div', { className: 'diamond' }),
                          (0, s.jsx)('div', { className: 'line' }),
                          (0, s.jsx)('div', { className: 'diamond' }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)('span', {
                    className: 'heading-extension',
                    children: 'Stories Behind Every Sparkle',
                  }),
                ],
              }),
              a && a.length > 0
                ? (0, s.jsx)(i.default, {
                    responsive: n,
                    infinite: !0,
                    autoPlay: !0,
                    autoPlaySpeed: 4e3,
                    arrows: !1,
                    containerClass: 'carousel-container',
                    itemClass: 'px-1 pb-5',
                    'aria-live': 'polite',
                    children: a.map((e, a) =>
                      (0, s.jsxs)(
                        'div',
                        {
                          className:
                            'p-4 bg-white rounded-4 shadow-sm d-flex flex-column justify-content-between text-start position-relative testimonial-card',
                          style: { height: '210px', border: '1px solid #e3e6ea' },
                          role: 'group',
                          'aria-label': 'Testimonial by '.concat(e.name),
                          children: [
                            (0, s.jsxs)('div', {
                              className: 'd-flex align-items-center mb-3',
                              children: [
                                (0, s.jsx)('div', {
                                  className:
                                    'rounded-circle d-flex align-items-center justify-content-center me-3',
                                  style: {
                                    width: '45px',
                                    height: '45px',
                                    backgroundColor: '#012f63',
                                    color: '#fff',
                                    fontWeight: 600,
                                    fontSize: '18px',
                                  },
                                  children: e.name.charAt(0),
                                }),
                                (0, s.jsx)('h6', {
                                  className: 'm-0 text-dark fw-semibold',
                                  children: e.name,
                                }),
                              ],
                            }),
                            (0, s.jsxs)('p', {
                              className: 'text-secondary mt-0 mb-0',
                              style: { fontSize: '14px', lineHeight: '1.5' },
                              children: ['“', e.description, '”'],
                            }),
                          ],
                        },
                        a
                      )
                    ),
                  })
                : (0, s.jsx)('p', {
                    className: 'text-center text-muted',
                    children: 'No testimonials available at the moment.',
                  }),
            ],
          });
        };
    },
    12230: (e, a, t) => {
      'use strict';
      t.d(a, { default: () => d });
      var s = t(95155),
        i = t(11518),
        n = t.n(i);
      t(12115);
      var A = t(66766),
        r = t(58296);
      t(26310);
      let l = {
          src: '/_next/static/media/demo_bg.a7226470.png',
          height: 414,
          width: 210,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAMAAADp7a43AAAAJ1BMVEU3NwDQyNTcwcLTtbrlz9jKz+C5wtKltMr53/Dm3/XW3vnP4f/M3v09uL6YAAAACHRSTlMBonlypKR+c2COcM4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAnSURBVHicJcS3AQAgDMAwpxf4/14GNAjMQLsV73ZkRn6xG+S5CVU8C+cAqt6V4UIAAAAASUVORK5CYII=',
          blurWidth: 4,
          blurHeight: 8,
        },
        o = [
          {
            content: 'Timeless Gold Elegance',
            description:
              'Experience the exquisite craftsmanship and unparalleled beauty of our exclusive gold jewelry collection—designed to celebrate every moment.',
            explore: '→ Gold Collection',
            image: {
              src: '/_next/static/media/indian-traditional-jewellery_136354-6545.c763d177.avif',
              height: 1109,
              width: 740,
              blurDataURL:
                'data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAANZtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAD6AAEAAAAAAAAAMwAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAVmlwcnAAAAA4aXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAAUAAAAIAAAAEHBpeGkAAAAAAwgICAAAABZpcG1hAAAAAAAAAAEAAQOBAgMAAAA7bWRhdBIACgg4CKdhAQ0GkDIlGAAKKKKFADYgI7pxlFSi6e4VoENj7Dusj9hS11yE13qo496ltw==',
              blurWidth: 5,
              blurHeight: 8,
            },
          },
          {
            content: 'Sparkling Real Diamonds',
            description:
              'Discover the captivating sparkle and eternal allure of authentic diamonds, meticulously set to enhance your unique style.',
            explore: '→ Diamond Treasures',
            image: {
              src: '/_next/static/media/gold-mangalsutra-necklace_864595-690.156b9f88.avif',
              height: 1095,
              width: 740,
              blurDataURL:
                'data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAANZtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAD6AAEAAAAAAAAALwAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAVmlwcnAAAAA4aXBjbwAAAAxhdjFDgSACAAAAABRpc3BlAAAAAAAAAAUAAAAIAAAAEHBpeGkAAAAAAwgICAAAABZpcG1hAAAAAAAAAAEAAQOBAgMAAAA3bWRhdBIACgg4CKdhAQ0GkDIhGAAKKKKEAPUl6DXM8QfsSVGgOcJxct01DBKjzhiedHLw',
              blurWidth: 5,
              blurHeight: 8,
            },
          },
          {
            content: 'Exquisite Silver Designs',
            description:
              'Explore our stunning silver jewelry pieces, crafted to add a touch of grace and sophistication to any outfit.',
            explore: '→ Silver Collection',
            image: t(79717).default,
          },
        ],
        c = { all: { breakpoint: { max: 3e3, min: 0 }, items: 1 } },
        d = () =>
          (0, s.jsxs)('section', {
            className: 'jsx-b24f1b0ede4ef015 about_section',
            children: [
              (0, s.jsx)('div', {
                className: 'jsx-b24f1b0ede4ef015 container',
                children: (0, s.jsxs)('div', {
                  className:
                    'jsx-b24f1b0ede4ef015 row d-flex align-items-center position-relative mt-3 mb-3',
                  children: [
                    (0, s.jsxs)('div', {
                      className: 'jsx-b24f1b0ede4ef015 col-md-6',
                      children: [
                        (0, s.jsx)('div', {
                          className:
                            'jsx-b24f1b0ede4ef015 custom-heading-wrapper d-flex align-items-center mb-4',
                          children: (0, s.jsxs)('h3', {
                            className: 'jsx-b24f1b0ede4ef015 m-0 custom-heading text-wrap me-3',
                            children: [
                              (0, s.jsxs)('span', {
                                className: 'jsx-b24f1b0ede4ef015',
                                children: [
                                  'Discover Our ',
                                  (0, s.jsx)('span', {
                                    className: 'jsx-b24f1b0ede4ef015 text-red',
                                    children: 'Variety',
                                  }),
                                ],
                              }),
                              (0, s.jsxs)('div', {
                                className: 'jsx-b24f1b0ede4ef015 decorative-line',
                                children: [
                                  (0, s.jsx)('div', { className: 'jsx-b24f1b0ede4ef015 diamond' }),
                                  (0, s.jsx)('div', { className: 'jsx-b24f1b0ede4ef015 line' }),
                                  (0, s.jsx)('div', { className: 'jsx-b24f1b0ede4ef015 diamond' }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsxs)('div', {
                          className: 'jsx-b24f1b0ede4ef015 about_title',
                          children: [
                            (0, s.jsx)('h5', {
                              className:
                                'jsx-b24f1b0ede4ef015 text-center text-md-start text-sm-center',
                              children: 'Timeless Elegance, Redefined',
                            }),
                            (0, s.jsx)('p', {
                              className: 'jsx-b24f1b0ede4ef015 text-justify mt-3',
                              children:
                                'Discover the enduring charm of Gold, the brilliance of Real Diamonds, and the innovation of Lab-Grown Diamonds. Whether you seek classic luxury, natural sparkle, or sustainable sophistication, our carefully curated collection offers something for every style and occasion. Crafted to perfection, each piece reflects purity, beauty, and value you can treasure forever.',
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)('div', {
                      className: 'jsx-b24f1b0ede4ef015 col-md-6',
                      children: (0, s.jsx)(r.default, {
                        responsive: c,
                        infinite: !0,
                        showDots: !0,
                        arrows: !1,
                        dotListClass: 'custom-dot-list',
                        itemClass: 'pb-3',
                        children: o.map((e, a) =>
                          (0, s.jsxs)(
                            'div',
                            {
                              className: 'jsx-b24f1b0ede4ef015 about_right_wrapper',
                              children: [
                                (0, s.jsxs)('div', {
                                  className:
                                    'jsx-b24f1b0ede4ef015 about_patternshape position-relative',
                                  children: [
                                    (0, s.jsx)(A.default, { src: l, alt: 'Background Pattern' }),
                                    (0, s.jsx)('div', {
                                      className:
                                        'jsx-b24f1b0ede4ef015 about_sub_content position-absolute',
                                      children: (0, s.jsxs)('p', {
                                        className: 'jsx-b24f1b0ede4ef015',
                                        children: [
                                          (0, s.jsx)('span', {
                                            className: 'jsx-b24f1b0ede4ef015 text-red',
                                            children: e.content,
                                          }),
                                          (0, s.jsx)('br', { className: 'jsx-b24f1b0ede4ef015' }),
                                          e.description,
                                          (0, s.jsx)('br', { className: 'jsx-b24f1b0ede4ef015' }),
                                          (0, s.jsx)('span', {
                                            className: 'jsx-b24f1b0ede4ef015 text-red',
                                            children: e.explore,
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, s.jsx)('div', {
                                  className: 'jsx-b24f1b0ede4ef015 about_main_image',
                                  children: (0, s.jsx)(A.default, {
                                    src: e.image,
                                    alt: e.content,
                                    width: 500,
                                    height: 300,
                                    style: {
                                      width: '370px',
                                      height: '370px',
                                      borderRadius: '20px',
                                      objectFit: 'cover',
                                    },
                                  }),
                                }),
                              ],
                            },
                            a
                          )
                        ),
                      }),
                    }),
                  ],
                }),
              }),
              (0, s.jsx)(n(), {
                id: 'b24f1b0ede4ef015',
                children:
                  '.about_section .react-multi-carousel-list{position:relative;width:100%;min-height:400px}.about_right_wrapper{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;min-height:400px}',
              }),
            ],
          });
    },
    16198: (e, a, t) => {
      'use strict';
      t.d(a, { default: () => n });
      var s = t(95155),
        i = t(12115);
      let n = (e) => {
        let { heroes: a, baseUrl: t } = e,
          [n, A] = (0, i.useState)(0),
          [r, l] = (0, i.useState)(0),
          o = (0, i.useRef)(null),
          c = [...a].sort((e, a) => e.priority - a.priority);
        (0, i.useEffect)(() => {
          console.log('Sorted Heroes:', c);
          let e = () => {
            o.current
              ? (l(o.current.clientWidth), console.log('Slide width:', o.current.clientWidth))
              : (l(window.innerWidth), console.log('Window width:', window.innerWidth));
          };
          return (
            e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e)
          );
        }, []);
        let d = (0, i.useCallback)(() => {
            A((e) => (e + 1) % (c.length || 1));
          }, [c.length]),
          m = (0, i.useCallback)(() => {
            A((e) => (e - 1 + (c.length || 1)) % (c.length || 1));
          }, [c.length]);
        return (
          (0, i.useEffect)(() => {
            if (0 === r || 0 === c.length) return;
            let e = setInterval(() => {
              d();
            }, 3e3);
            return () => clearInterval(e);
          }, [r, d, c.length]),
          (0, s.jsxs)('div', {
            ref: o,
            className: 'position-relative overflow-hidden',
            style: { width: '100%', maxWidth: '100vw', height: '600px', margin: 'auto' },
            'aria-label': 'Suvarnakala Hero Section Carousel',
            children: [
              c.length > 0
                ? (0, s.jsx)('div', {
                    style: {
                      display: 'flex',
                      width: ''.concat(c.length * r, 'px'),
                      transform: 'translateX(-'.concat(n * r, 'px)'),
                      transition: 'transform 0.7s ease-in-out',
                    },
                    'aria-live': 'polite',
                    children: c.map((e, a) => {
                      let { title: i, description: n, image: A } = e,
                        l = A.startsWith('http') ? A : ''.concat(t).concat(A);
                      return (
                        console.log('Slide '.concat(a + 1, ' image URL:'), l),
                        (0, s.jsxs)(
                          'div',
                          {
                            style: {
                              width: ''.concat(r, 'px'),
                              height: '600px',
                              position: 'relative',
                              flexShrink: 0,
                              backgroundImage: 'url('.concat(l || '/fallback-image.jpg', ')'),
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              backgroundColor: '#f0f0f0',
                            },
                            role: 'group',
                            'aria-label': 'Slide '.concat(a + 1, ': ').concat(i),
                            children: [
                              (0, s.jsx)('div', {
                                style: {
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                  backgroundColor: 'rgba(0,0,0,0.5)',
                                  zIndex: 1,
                                },
                              }),
                              (0, s.jsxs)('div', {
                                className: 'd-none d-md-flex flex-column justify-content-center',
                                style: {
                                  position: 'absolute',
                                  top: 0,
                                  left: '5%',
                                  height: '100%',
                                  color: 'white',
                                  maxWidth: '40%',
                                  paddingRight: '15px',
                                  zIndex: 2,
                                },
                                children: [
                                  (0, s.jsx)('h1', {
                                    className: 'display-6 fw-semibold mb-4',
                                    children: i,
                                  }),
                                  (0, s.jsx)('p', { className: 'lead mb-5', children: n }),
                                  (0, s.jsx)('a', {
                                    href: '/collections',
                                    className: 'btn custom-btn btn-lg w-auto px-4',
                                    children: 'Check Collection',
                                  }),
                                ],
                              }),
                              (0, s.jsxs)('div', {
                                className:
                                  'd-flex d-md-none flex-column justify-content-center align-items-center text-center',
                                style: {
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  bottom: 0,
                                  padding: '20px',
                                  color: 'white',
                                  zIndex: 2,
                                  background:
                                    'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3), rgba(0,0,0,0))',
                                },
                                children: [
                                  (0, s.jsx)('h3', { className: 'fw-semibold mb-3', children: i }),
                                  (0, s.jsx)('p', { className: 'mb-4', children: n }),
                                  (0, s.jsx)('a', {
                                    href: '/collections',
                                    className: 'btn custom-btn',
                                    children: 'Check Collection',
                                  }),
                                ],
                              }),
                            ],
                          },
                          a
                        )
                      );
                    }),
                  })
                : (0, s.jsx)('div', {
                    style: {
                      width: '100%',
                      height: '600px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#f0f0f0',
                    },
                    children: (0, s.jsx)('p', { children: 'No heroes available' }),
                  }),
              c.length > 0 &&
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)('button', {
                      onClick: m,
                      'aria-label': 'Previous Slide',
                      className:
                        'position-absolute top-50 start-0 translate-middle-y btn btn-white rounded-circle d-flex align-items-center justify-content-center',
                      style: {
                        width: '30px',
                        height: '30px',
                        marginLeft: '10px',
                        backgroundColor: 'white',
                        border: 'none',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                        cursor: 'pointer',
                        zIndex: 10,
                        padding: '0',
                      },
                      children: (0, s.jsx)('svg', {
                        xmlns: 'http://www.w3.org/2000/svg',
                        viewBox: '0 0 24 24',
                        fill: 'black',
                        width: '24px',
                        height: '24px',
                        children: (0, s.jsx)('path', {
                          d: 'M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z',
                        }),
                      }),
                    }),
                    (0, s.jsx)('button', {
                      onClick: d,
                      'aria-label': 'Next Slide',
                      className:
                        'position-absolute top-50 end-0 translate-middle-y btn btn-white rounded-circle d-flex align-items-center justify-content-center',
                      style: {
                        width: '30px',
                        height: '30px',
                        marginRight: '10px',
                        backgroundColor: 'white',
                        border: 'none',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                        cursor: 'pointer',
                        zIndex: 10,
                        padding: '0',
                      },
                      children: (0, s.jsx)('svg', {
                        xmlns: 'http://www.w3.org/2000/svg',
                        viewBox: '0 0 24 24',
                        fill: 'black',
                        width: '24px',
                        height: '24px',
                        children: (0, s.jsx)('path', {
                          d: 'M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z',
                        }),
                      }),
                    }),
                  ],
                }),
            ],
          })
        );
      };
    },
    16378: (e, a, t) => {
      'use strict';
      t.d(a, { default: () => c });
      var s = t(95155),
        i = t(11518),
        n = t.n(i),
        A = t(66766),
        r = t(6874),
        l = t.n(r),
        o = t(25731);
      let c = (e) => {
        let { categories: a, isLoading: t = !1 } = e,
          i = a.slice(0, 7),
          r = (e) => {
            e.currentTarget.src = 'https://via.placeholder.com/250x250?text=No+Image';
          };
        return (0, s.jsxs)('div', {
          'aria-label': 'Suvarnakala Shop by Style Section',
          className: 'jsx-5f195df72a271321 p-5 pb-0 pt-4',
          children: [
            (0, s.jsxs)('div', {
              className:
                'jsx-5f195df72a271321 custom-heading-wrapper d-flex align-items-center mb-4',
              children: [
                (0, s.jsxs)('h2', {
                  className: 'jsx-5f195df72a271321 m-0 custom-heading text-wrap me-3',
                  children: [
                    (0, s.jsxs)('span', {
                      className: 'jsx-5f195df72a271321',
                      children: [
                        'Shop by ',
                        (0, s.jsx)('span', {
                          className: 'jsx-5f195df72a271321 text-red',
                          children: 'Style :',
                        }),
                      ],
                    }),
                    (0, s.jsxs)('div', {
                      className: 'jsx-5f195df72a271321 decorative-line',
                      children: [
                        (0, s.jsx)('div', { className: 'jsx-5f195df72a271321 diamond' }),
                        (0, s.jsx)('div', { className: 'jsx-5f195df72a271321 line' }),
                        (0, s.jsx)('div', { className: 'jsx-5f195df72a271321 diamond' }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)('span', {
                  className: 'jsx-5f195df72a271321 heading-extension',
                  children: 'Find Your Perfect Match',
                }),
              ],
            }),
            (0, s.jsx)('div', {
              className:
                'jsx-5f195df72a271321 categories-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4',
              children: t
                ? (0, s.jsx)('div', {
                    className: 'jsx-5f195df72a271321 text-center col-span-full',
                    children: 'Loading...',
                  })
                : (0, s.jsxs)(s.Fragment, {
                    children: [
                      i.map((e, a) =>
                        (0, s.jsxs)(
                          l(),
                          {
                            href: '/collections/category/'.concat(encodeURIComponent(e.name)),
                            className: 'category-item text-decoration-none '.concat(
                              a < 4 ? 'top-row' : 'bottom-row'
                            ),
                            role: 'group',
                            'aria-label': 'Category: '.concat(e.name),
                            children: [
                              (0, s.jsx)('div', {
                                style: {
                                  overflow: 'hidden',
                                  borderRadius: '0.80rem',
                                  aspectRatio: '1/1',
                                },
                                className: 'jsx-5f195df72a271321 image-wrapper',
                                children: (0, s.jsx)(A.default, {
                                  src: e.image
                                    ? ''.concat(o.C1, '/').concat(e.image)
                                    : 'https://via.placeholder.com/250x250?text=No+Image',
                                  alt: 'Suvarnakala '.concat(e.name, ' Jewelry Collection'),
                                  width: 250,
                                  height: 250,
                                  className: 'img-fluid category-image',
                                  style: {
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: '100%',
                                    transition: 'transform 0.3s ease-in-out',
                                  },
                                  onError: r,
                                  loading: 'lazy',
                                }),
                              }),
                              (0, s.jsx)('p', {
                                className:
                                  'jsx-5f195df72a271321 text-red mt-2 fs-5 sm:fs-5 text-center',
                                children: e.name,
                              }),
                            ],
                          },
                          e._id
                        )
                      ),
                      (0, s.jsxs)(l(), {
                        href: '/collections',
                        className: ' text-decoration-none bottom-row',
                        role: 'group',
                        'aria-label': 'Explore Additional Categories',
                        children: [
                          (0, s.jsxs)('div', {
                            style: {
                              background: 'linear-gradient(135deg, #F5E7D6 0%, #F5E7D6 100%)',
                              aspectRatio: '1/1',
                              width: '100%',
                              color: '#6b4c2d',
                              fontFamily: "'Playfair Display', serif",
                              padding: '1.5rem',
                              letterSpacing: '0.05em',
                              userSelect: 'none',
                              borderRadius: '0.80rem',
                            },
                            className:
                              'jsx-5f195df72a271321 d-flex flex-column justify-content-center align-items-center text-center ',
                            children: [
                              (0, s.jsx)('p', {
                                style: {
                                  textTransform: 'uppercase',
                                  fontWeight: '700',
                                  letterSpacing: '0.1em',
                                },
                                className: 'jsx-5f195df72a271321 fs-5 fw-bold mb-0',
                                children: 'Discover',
                              }),
                              (0, s.jsx)('p', {
                                style: { fontWeight: '500', marginTop: '0.25rem' },
                                className: 'jsx-5f195df72a271321 fs-4',
                                children: 'Exclusive Collections',
                              }),
                            ],
                          }),
                          (0, s.jsx)('p', {
                            className:
                              'jsx-5f195df72a271321 text-red mt-2 fs-5 sm:fs-5 text-center',
                            children: 'View all',
                          }),
                        ],
                      }),
                    ],
                  }),
            }),
            (0, s.jsx)(n(), {
              id: '5f195df72a271321',
              children:
                '.category-item:hover .category-image{-webkit-transform:scale(1.05);-moz-transform:scale(1.05);-ms-transform:scale(1.05);-o-transform:scale(1.05);transform:scale(1.05)}@media(min-width:768px){.top-row{grid-column:auto}.bottom-row{grid-column:auto}}@media(max-width:767px){.categories-container{grid-template-columns:repeat(2,1fr)}.top-row:nth-child(1),.top-row:nth-child(2){grid-column:1}.top-row:nth-child(3),.top-row:nth-child(4){grid-column:2}.bottom-row:nth-child(5){grid-column:1}.bottom-row:nth-child(6){grid-column:2}.extra-category{grid-column:1/-1}}',
            }),
          ],
        });
      };
    },
    24446: (e, a, t) => {
      'use strict';
      t.d(a, { A: () => s });
      let s = {
        src: '/_next/static/media/googleplay.2d91f189.png',
        height: 512,
        width: 1770,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAG1BMVEUVSlEVFRUrLCwkIB0+Pz9OTk05Oy4cUDMmJiY1gtJlAAAAA3RSTlP8/PxKql7sAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGklEQVR4nGNgYGdm4mBmZGRgYGNmYWVhYQIAAeYANkbe1RUAAAAASUVORK5CYII=',
        blurWidth: 8,
        blurHeight: 2,
      };
    },
    25731: (e, a, t) => {
      'use strict';
      t.d(a, { Ay: () => r, C1: () => i, uu: () => A });
      var s = t(23464);
      let i = 'https://skalaapi.anaxistech.com',
        n = s.A.create({ baseURL: i, headers: { 'Content-Type': 'application/json' } }),
        A = async (e) => {
          try {
            return (await n.post('/api/sendappointment', e)).data;
          } catch (e) {
            throw (console.error('Error sending appointment request:', e), e);
          }
        },
        r = n;
    },
    30814: (e, a, t) => {
      'use strict';
      t.d(a, { default: () => m });
      var s = t(95155);
      t(12115);
      var i = t(66766),
        n = t(78126),
        A = t.n(n);
      let r = {
          src: '/_next/static/media/Gift Card 2.9bceceaa.png',
          height: 280,
          width: 475,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAMFBMVEUzBgtEAgakNyCNS0ZzNDZoFxVMDA+xNBmCHRVdFhdKIB2uRC2DKB16HBeXY2B+SUu9RYIYAAAABXRSTlP9/vr9/c47FJ4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAsSURBVHicHcGFDQAgEASwezdk/21JaIFufOTl5E4oMzO9ir0yU46AIyJm+AERLADoknbQsQAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 5,
        },
        l = {
          src: '/_next/static/media/6fe12d1ca7e63ca786546007ade02bf47d451b70.1c04eb21.png',
          height: 512,
          width: 512,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEVMaXH7s1n3y2r8kyn/wIr9slj7szL4wGj7s0/7fxj+3VD4zoX/aAD5xEf5vD7/cxD+0Jz/vI3/vmf/xJb4wUf/zRb8wWL7vib5vjf7y2b7q0/4wFD+xj7/4mb+4kz/qx//y17700vfLICfAAAAHHRSTlMAe1GkDD/3I5ZA/SpYvPUf7RuCqX37w/7b8/aenNtgwwAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAEJJREFUeJwVyrURwDAAALE3Q5jJDuy/ZM6dCgGDlBpg3mIKBf5YlW8M7vJij1kw3subrNKYPsevrQA3nY91ZdPVAX5fOQK7h/M5qwAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 8,
        },
        o = {
          src: '/_next/static/media/58ffe92b446f8b39c2730187c40eb5601690961e.2a5a534a.png',
          height: 512,
          width: 512,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEX+pQD9kQD/kgD/uAD/cAD/2QD+jQD/uQD9hwD+fwD/pQD+wQD/zwBMaXH/3wD/wwD/nAD/awD8XAD+ZQD+XQD/rQD9kgD/vgD/zQD/2gD+zAD8aQD9agD8fQD/fwD7WwD9awD/5QD/zwBv+DekAAAAIXRSTlOhppe9/WYzybnNtNMqAHtwdDphgnST2zu7fe3Zu6tsS9Np+DxkAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAARklEQVR4nB3IxRGAMAAEwIs7UdwC/RfJDPtcBD9LmWWAWJSdTl4gHAPRe8HwKBDDG9aXjVTz+g81/YbYnNXmaPAxpnTV/AFygANu5qZ3UgAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 8,
        };
      var c = t(24446),
        d = t(50945);
      let m = () => {
        let e = {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'Suvarnakala Gift Card',
          description:
            'The Suvarnakala Gift Card is the perfect gift for any occasion, allowing recipients to choose from exquisite gold, diamond, and jadtar jewelry collections.',
          image: r.src,
          offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            description: 'Available as a luxury physical card or a convenient digital option.',
          },
          brand: { '@type': 'Brand', name: 'Suvarnakala' },
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(A(), {
              children: [
                (0, s.jsx)('title', {
                  children: 'Suvarnakala Gift Card - Perfect Jewelry Gift for Any Occasion',
                }),
                (0, s.jsx)('meta', {
                  name: 'description',
                  content:
                    'Gift the Suvarnakala Gift Card for birthdays, weddings, or any special moment. Choose from luxury physical or digital cards for exquisite jewelry selections.',
                }),
                (0, s.jsx)('meta', {
                  name: 'keywords',
                  content:
                    'Suvarnakala Gift Card, jewelry gift card, gold jewelry, diamond jewelry, gift for occasions, luxury gift card',
                }),
                (0, s.jsx)('meta', { name: 'robots', content: 'index, follow' }),
                (0, s.jsx)('meta', {
                  name: 'viewport',
                  content: 'width=device-width, initial-scale=1',
                }),
                (0, s.jsx)('link', { rel: 'canonical', href: 'https://yourwebsite.com/gift-card' }),
                (0, s.jsx)('meta', {
                  property: 'og:title',
                  content: 'Suvarnakala Gift Card - Perfect Jewelry Gift for Any Occasion',
                }),
                (0, s.jsx)('meta', {
                  property: 'og:description',
                  content:
                    'Gift the Suvarnakala Gift Card for birthdays, weddings, or any special moment.',
                }),
                (0, s.jsx)('meta', { property: 'og:image', content: r.src }),
                (0, s.jsx)('meta', {
                  property: 'og:url',
                  content: 'https://yourwebsite.com/gift-card',
                }),
                (0, s.jsx)('meta', { property: 'og:type', content: 'website' }),
                (0, s.jsx)('script', {
                  type: 'application/ld+json',
                  dangerouslySetInnerHTML: { __html: JSON.stringify(e) },
                }),
              ],
            }),
            (0, s.jsx)('div', {
              className: ' pb-2 ',
              children: (0, s.jsx)('div', {
                className: ' bg-color',
                'aria-label': 'Suvarnakala Gift Card Section',
                children: (0, s.jsx)('div', {
                  className: 'p-5 pt-3 pb-2 ',
                  children: (0, s.jsxs)('div', {
                    className: 'row align-items-center',
                    children: [
                      (0, s.jsx)('div', {
                        className: 'custom-heading-wrapper d-flex align-items-center mb-4',
                        children: (0, s.jsxs)('h2', {
                          className: 'm-0 custom-heading text-wrap me-3',
                          children: [
                            (0, s.jsxs)('span', {
                              className: '',
                              children: [
                                'Suvarnakala ',
                                (0, s.jsx)('span', {
                                  className: 'text-red',
                                  children: 'Gift Card ',
                                }),
                              ],
                            }),
                            (0, s.jsxs)('div', {
                              className: 'decorative-line',
                              children: [
                                (0, s.jsx)('div', { className: 'diamond' }),
                                (0, s.jsx)('div', { className: 'line' }),
                                (0, s.jsx)('div', { className: 'diamond' }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, s.jsx)('p', {
                        className: 'text-blue mt-2 text-center text-md-start',
                        children:
                          'Not sure which piece to choose? Let them decide with the Suvarnakala Gift Card, a perfect way to celebrate special moments with the beauty of fine jewelry.',
                      }),
                      (0, s.jsxs)('div', {
                        className: 'col-12 col-md-7 mb-4 mb-md-0',
                        children: [
                          (0, s.jsx)('h6', {
                            className: 'fw-bold mt-1 mb-3 text-red text-center text-md-start',
                            children: 'Why a Suvarnakala Gift Card?',
                          }),
                          (0, s.jsxs)('ul', {
                            className:
                              'ps-3 text-blue text-center text-md-start list-unstyled list-md-bullet',
                            children: [
                              (0, s.jsx)('li', {
                                className: 'mb-2',
                                children:
                                  'Perfect for Any Occasion — Birthdays, weddings, anniversaries, or just because.',
                              }),
                              (0, s.jsx)('li', {
                                className: 'mb-2',
                                children:
                                  'Freedom to Choose — From delicate everyday pieces to statement bridal sets.',
                              }),
                              (0, s.jsx)('li', {
                                className: 'mb-2',
                                children:
                                  'Elegant Presentation — Available as a luxury physical card or a convenient digital option.',
                              }),
                            ],
                          }),
                          (0, s.jsxs)('div', {
                            className:
                              'd-flex flex-column flex-md-row gap-3 mt-4 justify-content-center justify-content-md-start',
                            children: [
                              (0, s.jsxs)('div', {
                                className:
                                  'd-flex gift-card flex-column align-items-center justify-content-center px-4 py-3 shadow',
                                children: [
                                  (0, s.jsx)(i.default, {
                                    src: l,
                                    alt: 'Suvarnakala Gold Rate Booking Icon',
                                    width: 30,
                                    height: 30,
                                    style: { objectFit: 'contain' },
                                    loading: 'lazy',
                                  }),
                                  (0, s.jsx)('span', {
                                    className: 'mt-3',
                                    children: 'Gold Rate Booking',
                                  }),
                                ],
                              }),
                              (0, s.jsxs)('div', {
                                className:
                                  'd-flex flex-column gift-card align-items-center justify-content-center px-4 py-3 shadow',
                                children: [
                                  (0, s.jsx)(i.default, {
                                    src: o,
                                    alt: 'Suvarnakala Monthly Installment Icon',
                                    width: 30,
                                    height: 30,
                                    style: { objectFit: 'contain' },
                                    loading: 'lazy',
                                  }),
                                  (0, s.jsx)('span', {
                                    className: 'mt-3',
                                    children: 'Monthly Installment',
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsx)('p', {
                            className: 'mt-4 text-red text-center text-md-start',
                            children: 'For latest updates and offers, download our app today.',
                          }),
                          (0, s.jsxs)('div', {
                            className: 'd-flex gap-3 mb-3 align-items-center',
                            children: [
                              (0, s.jsx)(i.default, {
                                src: c.A,
                                alt: 'Play Store',
                                width: 120,
                                height: 40,
                              }),
                              (0, s.jsx)(i.default, {
                                src: d.A,
                                alt: 'App Store',
                                width: 120,
                                height: 40,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)('div', {
                        className: 'col-12 col-md-5 text-center',
                        children: (0, s.jsx)(i.default, {
                          src: r,
                          alt: 'Suvarnakala Gift Card for Jewelry',
                          className: 'img-fluid rounded',
                          width: 400,
                          height: 300,
                          style: { maxHeight: '280px', objectFit: 'contain', width: '100%' },
                          sizes: '(max-width: 768px) 100vw, 400px',
                          loading: 'lazy',
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        });
      };
    },
    40563: (e, a, t) => {
      'use strict';
      t.d(a, { default: () => d });
      var s = t(95155),
        i = t(12115),
        n = t(66766),
        A = t(78126),
        r = t.n(A);
      let l = {
        src: '/_next/static/media/mobile.5425c1da.png',
        height: 349,
        width: 346,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEVMaXH08fDQsadSRULJppZ1ZWPdzMZWR0NxU0ipo6N1Z2FOTk5NOjN4X1bkwK6yinrV19rBv721j4PLxcjIxMfQvLxNPzyOjYzo6Om5hGzEmoj///9fZg66AAAAFnRSTlMA/q9jRhuC8FIv+irO3ero+XinVOHzsvkU5gAAAAlwSFlzAAALEwAACxMBAJqcGAAAADpJREFUeJxjEBYV4WQAATZpRhYwg0mCUQgiIi7OzwpmSAhIcYAYrIJ8kjzcYEkWXjF2sBgDJ5cYOzMARlAB7m+xKmUAAAAASUVORK5CYII=',
        blurWidth: 8,
        blurHeight: 8,
      };
      var o = t(24446),
        c = t(50945);
      function d(e) {
        let { bachatMahotsavImages: a } = e,
          [t, A] = (0, i.useState)(0);
        (0, i.useEffect)(() => {
          if (a.length > 0) {
            let e = setInterval(() => {
              A((e) => (e + 1) % a.length);
            }, 3e3);
            return () => clearInterval(e);
          }
        }, [a]);
        let d = {
          '@context': 'https://schema.org',
          '@type': 'Event',
          name: 'Gold Bachat Mahotsav',
          description:
            'Join our exclusive Bachat Mahotsav for irresistible offers on gold, diamond, and silver jewelry.',
          image: a[0] || '',
          offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            description: 'Special discounts and making charge waivers on jewelry',
          },
          eventStatus: 'https://schema.org/EventScheduled',
          eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(r(), {
              children: [
                (0, s.jsx)('title', {
                  children: 'Gold Bachat Mahotsav - Exclusive Jewelry Discounts',
                }),
                (0, s.jsx)('meta', {
                  name: 'description',
                  content: 'Join Bachat Mahotsav for exclusive jewelry offers.',
                }),
                (0, s.jsx)('meta', {
                  name: 'keywords',
                  content: 'gold, diamond, silver, jewelry, discounts',
                }),
                (0, s.jsx)('meta', { property: 'og:image', content: a[0] || '' }),
                (0, s.jsx)('script', {
                  type: 'application/ld+json',
                  dangerouslySetInnerHTML: { __html: JSON.stringify(d) },
                }),
              ],
            }),
            (0, s.jsx)('div', {
              className: ' pb-2',
              children: (0, s.jsx)('section', {
                className: 'hero-section',
                children: (0, s.jsx)('div', {
                  className: 'p-5',
                  children: (0, s.jsxs)('div', {
                    className: 'row',
                    children: [
                      (0, s.jsxs)('div', {
                        className: 'col-md-6',
                        children: [
                          (0, s.jsxs)('div', {
                            className: 'main-title',
                            children: [
                              (0, s.jsx)('div', {
                                className: 'custom-heading-wrapper d-flex align-items-center  mb-4',
                                style: { marginTop: '-6px' },
                                children: (0, s.jsxs)('h2', {
                                  className: 'm-0 custom-heading text-wrap me-3',
                                  children: [
                                    (0, s.jsxs)('span', {
                                      className: '',
                                      children: [
                                        'Celebrate Savings ',
                                        (0, s.jsx)('span', {
                                          className: 'text-red',
                                          children: 'with Style! ',
                                        }),
                                      ],
                                    }),
                                    (0, s.jsxs)('div', {
                                      className: 'decorative-line',
                                      children: [
                                        (0, s.jsx)('div', { className: 'diamond' }),
                                        (0, s.jsx)('div', { className: 'line' }),
                                        (0, s.jsx)('div', { className: 'diamond' }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, s.jsxs)('p', {
                                className: 'text-justify',
                                children: [
                                  'Join our exclusive ',
                                  (0, s.jsx)('span', {
                                    className: 'dark_font',
                                    children: 'Bachat Mahotsav',
                                  }),
                                  ' and enjoy irresistible offers on gold, diamond, and silver jewelry. Special discounts, making charge waivers, and festive combos – all crafted to bring sparkle to your celebrations.',
                                ],
                              }),
                              (0, s.jsxs)('p', {
                                children: [
                                  'The most awaited ',
                                  (0, s.jsx)('span', {
                                    className: 'dark_font',
                                    children: 'Gold Bachat Mahotsav',
                                  }),
                                  " is here! It's not just a festival — it’s your golden opportunity to save smart and shine brighter with stunning jewellery collections and exclusive savings plans.",
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsxs)('div', {
                            className: 'd-flex gap-3 align-items-center',
                            children: [
                              (0, s.jsx)(n.default, {
                                src: o.A,
                                alt: 'Play Store',
                                width: 120,
                                height: 40,
                              }),
                              (0, s.jsx)(n.default, {
                                src: c.A,
                                alt: 'App Store',
                                width: 120,
                                height: 40,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)('div', {
                        className: 'col-md-6',
                        children: (0, s.jsxs)('div', {
                          className: 'jewellary_image',
                          'aria-live': 'polite',
                          children: [
                            a.length > 0 &&
                              (0, s.jsx)('img', {
                                src: a[t],
                                alt: 'Bachat Mahotsav jewelry offer '.concat(t + 1),
                                className: '',
                                style: { maxHeight: '401px', width: '100%', objectFit: 'cover' },
                                loading: 'lazy',
                              }),
                            (0, s.jsx)('div', {
                              className: 'mobile_img',
                              children: (0, s.jsx)(n.default, {
                                src: l,
                                alt: 'Mobile app showcasing Bachat Mahotsav offers',
                                className: 'img-fluid',
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        });
      }
    },
    40807: (e, a, t) => {
      Promise.resolve().then(t.bind(t, 12230)),
        Promise.resolve().then(t.bind(t, 40563)),
        Promise.resolve().then(t.bind(t, 75714)),
        Promise.resolve().then(t.bind(t, 30814)),
        Promise.resolve().then(t.bind(t, 16198)),
        Promise.resolve().then(t.bind(t, 47459)),
        Promise.resolve().then(t.bind(t, 76655)),
        Promise.resolve().then(t.bind(t, 16378)),
        Promise.resolve().then(t.bind(t, 11516)),
        Promise.resolve().then(t.bind(t, 96771)),
        Promise.resolve().then(t.bind(t, 62274));
    },
    47459: (e, a, t) => {
      'use strict';
      t.d(a, { default: () => l });
      var s = t(95155),
        i = t(66766),
        n = t(58296);
      t(26310);
      var A = t(25731);
      let r = {
          superLargeDesktop: { breakpoint: { max: 4e3, min: 1441 }, items: 5 },
          desktop: { breakpoint: { max: 1440, min: 1024 }, items: 3 },
          tablet: { breakpoint: { max: 1023, min: 768 }, items: 3 },
          smallTablet: { breakpoint: { max: 767, min: 576 }, items: 2 },
          mobile: { breakpoint: { max: 575, min: 0 }, items: 1 },
        },
        l = (e) => {
          let { moments: a = [] } = e;
          return (0, s.jsxs)('div', {
            className: 'p-5 pt-4 pb-0',
            'aria-label': 'Suvarnakala Defining Moments Section',
            children: [
              (0, s.jsxs)('div', {
                className: 'custom-heading-wrapper d-flex align-items-center mb-4',
                children: [
                  (0, s.jsxs)('h2', {
                    className: 'm-0 custom-heading text-wrap me-3',
                    children: [
                      (0, s.jsxs)('span', {
                        children: [
                          'Suvarnakala’s Defining ',
                          (0, s.jsx)('span', { className: 'text-red', children: 'Moments : ' }),
                        ],
                      }),
                      (0, s.jsxs)('div', {
                        className: 'decorative-line',
                        children: [
                          (0, s.jsx)('div', { className: 'diamond' }),
                          (0, s.jsx)('div', { className: 'line' }),
                          (0, s.jsx)('div', { className: 'diamond' }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)('span', {
                    className: 'heading-extension',
                    children: 'Elevate Your Look with the Latest Designs',
                  }),
                ],
              }),
              (0, s.jsx)('div', {
                className: 'mt-4',
                children:
                  0 === a.length
                    ? (0, s.jsx)('div', {
                        className: 'text-center',
                        role: 'alert',
                        children:
                          'No moments available. Please check the admin panel or try again later.',
                      })
                    : (0, s.jsx)(n.default, {
                        responsive: r,
                        infinite: !0,
                        autoPlay: !0,
                        autoPlaySpeed: 3e3,
                        arrows: !1,
                        containerClass: 'carousel-container',
                        itemClass: 'px-2 pb-5',
                        'aria-live': 'polite',
                        children: a.map((e, a) =>
                          (0, s.jsx)(
                            'div',
                            {
                              className: 'card border-0 shadow-sm',
                              role: 'group',
                              'aria-label': 'Moment '.concat(a + 1, ': Suvarnakala Jewelry Moment'),
                              children: (0, s.jsx)('div', {
                                style: {
                                  position: 'relative',
                                  width: '100%',
                                  paddingTop: '60%',
                                  overflow: 'hidden',
                                },
                                children: (0, s.jsx)(i.default, {
                                  src: e.imagePath
                                    ? ''.concat(A.C1, '/').concat(e.imagePath)
                                    : 'https://via.placeholder.com/300x180?text=No+Image',
                                  alt: 'Suvarnakala Defining Moment '.concat(
                                    a + 1,
                                    ' - Jewelry Design'
                                  ),
                                  fill: !0,
                                  sizes: '(max-width: 576px) 100vw, 300px',
                                  style: { objectFit: 'cover' },
                                  loading: 'lazy',
                                  onError: (e) => {
                                    e.currentTarget.src =
                                      'https://via.placeholder.com/300x180?text=No+Image';
                                  },
                                }),
                              }),
                            },
                            e._id
                          )
                        ),
                      }),
              }),
            ],
          });
        };
    },
    50945: (e, a, t) => {
      'use strict';
      t.d(a, { A: () => s });
      let s = {
        src: '/_next/static/media/appstore.d173bba6.png',
        height: 512,
        width: 1773,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAFVBMVEUsLCwXFxc/Pz8iIiKMjIxQUFBzc3PVmatnAAAAAnRSTlP+7SIXn84AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAaSURBVHicY2BgY2ZgYGBmZGBgYWBlYmJiBAABEgAeHVSJngAAAABJRU5ErkJggg==',
        blurWidth: 8,
        blurHeight: 2,
      };
    },
    62274: (e, a, t) => {
      'use strict';
      t.d(a, { default: () => i });
      var s = t(95155);
      t(12115);
      let i = () =>
        (0, s.jsx)('div', {
          style: { width: 'auto', padding: 0, boxSizing: 'border-box' },
          className: 'rounded-0  ',
          children: (0, s.jsxs)('video', {
            style: {
              backgroundColor: '#000',
              display: 'block',
              width: '100%',
              height: '600px',
              maxHeight: '500px',
              objectFit: 'cover',
            },
            autoPlay: !0,
            muted: !0,
            loop: !0,
            playsInline: !0,
            preload: 'metadata',
            children: [
              (0, s.jsx)('source', { src: '/1724486881975.mp4', type: 'video/mp4' }),
              'Your browser does not support the video tag.',
            ],
          }),
        });
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
    75714: (e, a, t) => {
      'use strict';
      t.d(a, { default: () => c });
      var s = t(95155),
        i = t(66766),
        n = t(78126),
        A = t.n(n),
        r = t(68334),
        l = t.n(r);
      let o = [
        {
          title: 'Bridal Bliss',
          img: {
            src: '/_next/static/media/Bridal Bliss.8e8065ba.jpg',
            height: 870,
            width: 587,
            blurDataURL:
              'data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAUDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oADAMBAAIQAxAAAAC4BL//xAAbEAABBAMAAAAAAAAAAAAAAAABAAIREgMiYf/aAAgBAQABPwCuW75IaObSv//EABURAQEAAAAAAAAAAAAAAAAAAAAS/9oACAECAQE/AJf/xAAXEQEAAwAAAAAAAAAAAAAAAAABAAJh/9oACAEDAQE/AGzk/9k=',
            blurWidth: 5,
            blurHeight: 8,
          },
        },
        {
          title: 'Dazzling Diamonds',
          img: {
            src: '/_next/static/media/2- Diamonds.f1fe8ad0.jpg',
            height: 268,
            width: 667,
            blurDataURL:
              'data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAADAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBf/aAAwDAQACEAMQAAAAjCZ3/8QAHBAAAQMFAAAAAAAAAAAAAAAAAQIEEwADEhVR/9oACAEBAAE/AHjVvpjdjEiDklXDX//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/AI//xAAXEQEBAQEAAAAAAAAAAAAAAAABAgAh/9oACAEDAQE/AKpHim//2Q==',
            blurWidth: 8,
            blurHeight: 3,
          },
        },
        {
          title: 'Golden Classic',
          img: {
            src: '/_next/static/media/3- Gold Classic.845df769.jpg',
            height: 268,
            width: 667,
            blurDataURL:
              'data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAADAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oADAMBAAIQAxAAAAC1A1f/xAAaEAEAAwADAAAAAAAAAAAAAAACAQMEADGx/9oACAEBAAE/AFhxq9tZqkoHaML3n//EABgRAAIDAAAAAAAAAAAAAAAAAAABAkJy/9oACAECAQE/AI20z//EABgRAQADAQAAAAAAAAAAAAAAAAEAAiEx/9oACAEDAQE/ALLmvCf/2Q==',
            blurWidth: 8,
            blurHeight: 3,
          },
        },
        {
          title: 'Effortless Everyday',
          img: {
            src: '/_next/static/media/1- Effortless Every day.8e7d3fec.jpg',
            height: 268,
            width: 667,
            blurDataURL:
              'data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAADAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBf/aAAwDAQACEAMQAAAAmBM//8QAGhABAAIDAQAAAAAAAAAAAAAAAgMRAAQFIf/aAAgBAQABPwDoRRjSSJpWfc//xAAWEQADAAAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8AiP/EABcRAQADAAAAAAAAAAAAAAAAAAEAETH/2gAIAQMBAT8AtMWf/9k=',
            blurWidth: 8,
            blurHeight: 3,
          },
        },
      ];
      function c() {
        let e = {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Suvarnakala Jewelry Categories',
          description:
            'Explore Suvarnakala’s jewelry collections, including Bridal Bliss, Dazzling Diamonds, Golden Classic, and Effortless Everyday, designed for every occasion.',
          itemListElement: o.map((e, a) => ({
            '@type': 'ProductGroup',
            position: a + 1,
            item: {
              '@type': 'Product',
              name: e.title,
              image: e.img.src,
              description: "Suvarnakala's ".concat(
                e.title,
                ' jewelry collection for special occasions.'
              ),
            },
          })),
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(A(), {
              children: [
                (0, s.jsx)('title', {
                  children: 'Suvarnakala Jewelry Collections - Bridal, Diamonds, Gold, Everyday',
                }),
                (0, s.jsx)('meta', {
                  name: 'description',
                  content:
                    'Discover Suvarnakala’s jewelry collections: Bridal Bliss, Dazzling Diamonds, Golden Classic, and Effortless Everyday, crafted for every occasion from casual to glamorous.',
                }),
                (0, s.jsx)('meta', {
                  name: 'keywords',
                  content:
                    'Suvarnakala, Bridal Bliss, Dazzling Diamonds, Golden Classic, Effortless Everyday, jewelry collections, gold jewelry, diamond jewelry',
                }),
                (0, s.jsx)('meta', { name: 'robots', content: 'index, follow' }),
                (0, s.jsx)('meta', {
                  name: 'viewport',
                  content: 'width=device-width, initial-scale=1',
                }),
                (0, s.jsx)('link', {
                  rel: 'canonical',
                  href: 'https://yourwebsite.com/collections',
                }),
                (0, s.jsx)('meta', {
                  property: 'og:title',
                  content: 'Suvarnakala Jewelry Collections - Bridal, Diamonds, Gold, Everyday',
                }),
                (0, s.jsx)('meta', {
                  property: 'og:description',
                  content:
                    'Explore Suvarnakala’s jewelry collections for every occasion, from Bridal Bliss to Effortless Everyday.',
                }),
                (0, s.jsx)('meta', { property: 'og:image', content: o[0].img.src }),
                (0, s.jsx)('meta', {
                  property: 'og:url',
                  content: 'https://yourwebsite.com/collections',
                }),
                (0, s.jsx)('meta', { property: 'og:type', content: 'website' }),
                (0, s.jsx)('script', {
                  type: 'application/ld+json',
                  dangerouslySetInnerHTML: { __html: JSON.stringify(e) },
                }),
              ],
            }),
            (0, s.jsxs)('div', {
              className: 'p-5 pb-0 pt-4',
              'aria-label': 'Suvarnakala Jewelry Collections',
              children: [
                (0, s.jsxs)('div', {
                  className: 'custom-heading-wrapper d-flex align-items-center mb-4',
                  children: [
                    (0, s.jsxs)('h2', {
                      className: 'm-0 custom-heading text-wrap me-3',
                      children: [
                        (0, s.jsxs)('span', {
                          children: [
                            'The Right Fit ',
                            (0, s.jsx)('span', {
                              className: 'text-red',
                              children: 'for Every Events :',
                            }),
                          ],
                        }),
                        (0, s.jsxs)('div', {
                          className: 'decorative-line',
                          children: [
                            (0, s.jsx)('div', { className: 'diamond' }),
                            (0, s.jsx)('div', { className: 'line' }),
                            (0, s.jsx)('div', { className: 'diamond' }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)('span', {
                      className: 'heading-extension',
                      children: 'From Casual to Glam, Effortlessly',
                    }),
                  ],
                }),
                (0, s.jsxs)('div', {
                  className: 'row g-3',
                  children: [
                    (0, s.jsx)('div', {
                      className: 'col-12 col-md-6',
                      children: (0, s.jsxs)('div', {
                        className: ''.concat(l().card, ' position-relative'),
                        children: [
                          (0, s.jsx)(i.default, {
                            src: o[0].img,
                            alt: 'Suvarnakala '.concat(o[0].title, ' Jewelry Collection'),
                            layout: 'fill',
                            objectFit: 'cover',
                            className: 'rounded',
                            priority: !0,
                          }),
                          (0, s.jsx)('div', { className: l().overlay, children: o[0].title }),
                        ],
                      }),
                    }),
                    (0, s.jsx)('div', {
                      className: 'col-12 col-md-6 d-flex flex-column gap-3',
                      children: o
                        .slice(1)
                        .map((e, a) =>
                          (0, s.jsxs)(
                            'div',
                            {
                              className: ''.concat(l().cardSmall, ' position-relative'),
                              children: [
                                (0, s.jsx)(i.default, {
                                  src: e.img,
                                  alt: 'Suvarnakala '.concat(e.title, ' Jewelry Collection'),
                                  layout: 'fill',
                                  objectFit: 'cover',
                                  className: 'rounded',
                                  loading: 'lazy',
                                }),
                                (0, s.jsx)('div', { className: l().overlay, children: e.title }),
                              ],
                            },
                            a
                          )
                        ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    76655: (e, a, t) => {
      'use strict';
      t.d(a, { default: () => m });
      var s = t(95155),
        i = t(11518),
        n = t.n(i),
        A = t(12115),
        r = t(66766),
        l = t(51770);
      let o = {
        src: '/_next/static/media/products1.baae8c5c.jpg',
        height: 1012,
        width: 999,
        blurDataURL:
          'data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAAAvhM3/8QAGxAAAQQDAAAAAAAAAAAAAAAAAQACAxESIUH/2gAIAQEAAT8AM8jxm4AQ66Kpf//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/AI//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==',
        blurWidth: 8,
        blurHeight: 8,
      };
      var c = t(24446),
        d = t(50945);
      function m() {
        let [e, a] = (0, A.useState)(!1);
        (0, A.useEffect)(() => {
          if (!sessionStorage.getItem('popupShown')) {
            let e = setTimeout(() => {
              a(!0), sessionStorage.setItem('popupShown', 'true');
            }, 1e4);
            return () => clearTimeout(e);
          }
        }, []);
        let t = () => a(!1);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(l.A, {
              show: e,
              onHide: t,
              centered: !0,
              size: 'lg',
              contentClassName: 'border-0',
              dialogClassName: 'rounded-3 overflow-hidden',
              children: (0, s.jsxs)('div', {
                className: 'jsx-e13ae61abf547a88 d-flex flex-column flex-md-row',
                children: [
                  (0, s.jsx)('div', {
                    className: 'jsx-e13ae61abf547a88 col-12 col-md-6 p-0',
                    children: (0, s.jsx)(r.default, {
                      src: o,
                      alt: 'Suvarnakala Welcome',
                      style: {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        minHeight: '200px',
                      },
                    }),
                  }),
                  (0, s.jsxs)('div', {
                    className:
                      'jsx-e13ae61abf547a88 col-12 col-md-6 bg-dark text-white p-3 p-md-4 d-flex flex-column position-relative',
                    children: [
                      (0, s.jsx)('button', {
                        onClick: t,
                        style: { top: '12px', right: '12px', zIndex: 1 },
                        'aria-label': 'Close',
                        className:
                          'jsx-e13ae61abf547a88 btn-close btn-close-white position-absolute',
                      }),
                      (0, s.jsx)('div', {
                        className:
                          'jsx-e13ae61abf547a88 d-flex flex-column justify-content-between flex-grow-1',
                        children: (0, s.jsxs)('div', {
                          className: 'jsx-e13ae61abf547a88',
                          children: [
                            (0, s.jsx)('h2', {
                              className: 'jsx-e13ae61abf547a88 mb-2 mt-3 mt-md-4',
                              children: 'Login to Offers',
                            }),
                            (0, s.jsx)('h6', {
                              className: 'jsx-e13ae61abf547a88 mt-3',
                              children: '\uD83C\uDF81 Exclusive Deals Await!',
                            }),
                            (0, s.jsx)('p', {
                              className: 'jsx-e13ae61abf547a88 mt-3 mb-2',
                              children: 'FREE shipping on $50+',
                            }),
                            (0, s.jsx)('p', {
                              className: 'jsx-e13ae61abf547a88',
                              children: 'Member-only perks',
                            }),
                            (0, s.jsx)('div', {
                              className: 'jsx-e13ae61abf547a88 mt-3 mt-md-4',
                              children: (0, s.jsxs)('div', {
                                className:
                                  'jsx-e13ae61abf547a88 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-start gap-2 gap-sm-3',
                                children: [
                                  (0, s.jsx)('a', {
                                    href: 'https://play.google.com/store',
                                    target: '_blank',
                                    rel: 'noopener noreferrer',
                                    className: 'jsx-e13ae61abf547a88',
                                    children: (0, s.jsx)(r.default, {
                                      src: c.A,
                                      alt: 'Android App',
                                      width: 135,
                                      height: 40,
                                      style: { width: '100%', height: 'auto', maxWidth: '135px' },
                                    }),
                                  }),
                                  (0, s.jsx)('a', {
                                    href: 'https://www.apple.com/in/app-store/',
                                    target: '_blank',
                                    rel: 'noopener noreferrer',
                                    className: 'jsx-e13ae61abf547a88',
                                    children: (0, s.jsx)(r.default, {
                                      src: d.A,
                                      alt: 'iOS App',
                                      width: 135,
                                      height: 40,
                                      style: { width: '100%', height: 'auto', maxWidth: '135px' },
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, s.jsx)(n(), {
              id: 'e13ae61abf547a88',
              children:
                '.modal-dialog.jsx-e13ae61abf547a88{max-width:900px;width:90%;margin:1rem auto}.modal-content.jsx-e13ae61abf547a88{-webkit-border-radius:8px!important;-moz-border-radius:8px!important;border-radius:8px!important;overflow:hidden}@media(max-width:575.98px){.modal-dialog.jsx-e13ae61abf547a88{margin:.5rem;width:95%}h2.jsx-e13ae61abf547a88{font-size:1.25rem}h6.jsx-e13ae61abf547a88{font-size:.9rem}p.jsx-e13ae61abf547a88{font-size:.8rem;line-height:1.3}.bg-dark.jsx-e13ae61abf547a88{padding:1.5rem!important}.d-flex.gap-2.gap-sm-3.jsx-e13ae61abf547a88{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:1rem!important}.d-flex.gap-2.gap-sm-3.jsx-e13ae61abf547a88 a.jsx-e13ae61abf547a88{width:100%;max-width:120px}.d-flex.gap-2.gap-sm-3.jsx-e13ae61abf547a88 img.jsx-e13ae61abf547a88{width:100%!important;height:auto!important}}@media(min-width:576px)and (max-width:767.98px){.modal-dialog.jsx-e13ae61abf547a88{width:90%}h2.jsx-e13ae61abf547a88{font-size:1.5rem}h6.jsx-e13ae61abf547a88{font-size:1rem}p.jsx-e13ae61abf547a88{font-size:.9rem;line-height:1.4}.d-flex.gap-2.gap-sm-3.jsx-e13ae61abf547a88{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;gap:1.5rem!important}.d-flex.gap-2.gap-sm-3.jsx-e13ae61abf547a88 a.jsx-e13ae61abf547a88{max-width:130px}}@media(min-width:768px){.modal-dialog.jsx-e13ae61abf547a88{width:85%}h2.jsx-e13ae61abf547a88{font-size:1.75rem}h6.jsx-e13ae61abf547a88{font-size:1.1rem}p.jsx-e13ae61abf547a88{font-size:1rem;line-height:1.5}.d-flex.gap-2.gap-sm-3.jsx-e13ae61abf547a88{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:start;gap:1.5rem!important}}@media(min-width:992px){.modal-dialog.jsx-e13ae61abf547a88{width:80%;max-width:900px}h2.jsx-e13ae61abf547a88{font-size:2rem}.bg-dark.jsx-e13ae61abf547a88{padding:2rem!important}}',
            }),
          ],
        });
      }
    },
    79717: (e, a, t) => {
      'use strict';
      t.r(a), t.d(a, { default: () => s });
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
    96771: (e, a, t) => {
      'use strict';
      t.d(a, { default: () => x });
      var s = t(95155),
        i = t(11518),
        n = t.n(i),
        A = t(12115),
        r = t(78126),
        l = t.n(r),
        o = t(66766),
        c = t(58296);
      t(26310), t(15685);
      let d = ''.concat('https://skalaapi.anaxistech.com', '/Uploads'),
        m = {
          superLargeDesktop: { breakpoint: { max: 4e3, min: 1441 }, items: 5 },
          desktop: { breakpoint: { max: 1440, min: 1024 }, items: 4 },
          tablet: { breakpoint: { max: 1023, min: 768 }, items: 3 },
          smallTablet: { breakpoint: { max: 767, min: 576 }, items: 2 },
          mobile: { breakpoint: { max: 575, min: 0 }, items: 1 },
        },
        x = (e) => {
          let { initialDesigns: a } = e,
            [t, i] = (0, A.useState)(a);
          (0, A.useEffect)(() => {
            i([...a].sort((e, a) => a._id.localeCompare(e._id)));
          }, [a]);
          let r = {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Suvarnakala Top Trending Designs',
            description:
              'Explore Suvarnakala’s top trending jewelry designs, featuring the latest styles in gold, diamond, and more for every occasion.',
            itemListElement: t.map((e, a) => ({
              '@type': 'Product',
              position: a + 1,
              name: e.name,
              image: e.image
                ? e.image.startsWith('http')
                  ? e.image
                  : ''.concat(d, '/').concat(e.image)
                : 'https://via.placeholder.com/300x300?text=No+Image',
              description: 'Suvarnakala '.concat(e.name, ' trending jewelry design.'),
              brand: { '@type': 'Brand', name: 'Suvarnakala' },
            })),
          };
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)(l(), {
                children: [
                  (0, s.jsx)('title', {
                    className: 'jsx-f91e2997be3434c4',
                    children: 'Suvarnakala Top Trending Jewelry Designs - Latest Styles',
                  }),
                  (0, s.jsx)('meta', {
                    name: 'description',
                    content:
                      'Discover Suvarnakala’s top trending jewelry designs, featuring the latest in gold, diamond, and more.',
                    className: 'jsx-f91e2997be3434c4',
                  }),
                  (0, s.jsx)('meta', {
                    name: 'keywords',
                    content:
                      'Suvarnakala, trending jewelry, top jewelry designs, gold jewelry, diamond jewelry, latest jewelry styles',
                    className: 'jsx-f91e2997be3434c4',
                  }),
                  (0, s.jsx)('meta', {
                    name: 'robots',
                    content: 'index, follow',
                    className: 'jsx-f91e2997be3434c4',
                  }),
                  (0, s.jsx)('meta', {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                    className: 'jsx-f91e2997be3434c4',
                  }),
                  (0, s.jsx)('link', {
                    rel: 'canonical',
                    href: 'https://yourwebsite.com/top-trending-designs',
                    className: 'jsx-f91e2997be3434c4',
                  }),
                  (0, s.jsx)('meta', {
                    property: 'og:title',
                    content: 'Suvarnakala Top Trending Jewelry Designs - Latest Styles',
                    className: 'jsx-f91e2997be3434c4',
                  }),
                  (0, s.jsx)('meta', {
                    property: 'og:description',
                    content:
                      'Explore Suvarnakala’s top trending jewelry designs, featuring the latest in gold, diamond, and more.',
                    className: 'jsx-f91e2997be3434c4',
                  }),
                  (0, s.jsx)('meta', {
                    property: 'og:image',
                    content:
                      t.length > 0 && t[0].image
                        ? ''.concat(d, '/').concat(t[0].image)
                        : 'https://via.placeholder.com/300x300?text=No+Image',
                    className: 'jsx-f91e2997be3434c4',
                  }),
                  (0, s.jsx)('meta', {
                    property: 'og:url',
                    content: 'https://yourwebsite.com/top-trending-designs',
                    className: 'jsx-f91e2997be3434c4',
                  }),
                  (0, s.jsx)('meta', {
                    property: 'og:type',
                    content: 'website',
                    className: 'jsx-f91e2997be3434c4',
                  }),
                  (0, s.jsx)('script', {
                    type: 'application/ld+json',
                    dangerouslySetInnerHTML: { __html: JSON.stringify(r) },
                    className: 'jsx-f91e2997be3434c4',
                  }),
                ],
              }),
              (0, s.jsx)(n(), {
                id: 'f91e2997be3434c4',
                children:
                  '.image-container.jsx-f91e2997be3434c4{position:relative;width:100%;padding-top:100%;overflow:hidden;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;cursor:pointer}.image-container.jsx-f91e2997be3434c4 img.jsx-f91e2997be3434c4{-webkit-transition:-webkit-transform.3s ease,-webkit-filter.3s ease;-moz-transition:-moz-transform.3s ease,filter.3s ease;-o-transition:-o-transform.3s ease,filter.3s ease;transition:-webkit-transform.3s ease,-webkit-filter.3s ease;transition:-moz-transform.3s ease,filter.3s ease;transition:-o-transform.3s ease,filter.3s ease;transition:transform.3s ease,filter.3s ease}.image-container.jsx-f91e2997be3434c4:hover img.jsx-f91e2997be3434c4{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1);-webkit-filter:brightness(60%)contrast(1.1);filter:brightness(60%)contrast(1.1)}.link-icon.jsx-f91e2997be3434c4{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%);opacity:0;-webkit-transition:opacity.3s ease,-webkit-transform.3s ease;-moz-transition:opacity.3s ease,-moz-transform.3s ease;-o-transition:opacity.3s ease,-o-transform.3s ease;transition:opacity.3s ease,-webkit-transform.3s ease;transition:opacity.3s ease,-moz-transform.3s ease;transition:opacity.3s ease,-o-transform.3s ease;transition:opacity.3s ease,transform.3s ease;background:-webkit-linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888);background:-moz-linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888);background:-o-linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888);background:linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888);-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;padding:12px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.image-container.jsx-f91e2997be3434c4:hover .link-icon.jsx-f91e2997be3434c4{opacity:1;-webkit-transform:translate(-50%,-50%)scale(1.1);-moz-transform:translate(-50%,-50%)scale(1.1);-ms-transform:translate(-50%,-50%)scale(1.1);-o-transform:translate(-50%,-50%)scale(1.1);transform:translate(-50%,-50%)scale(1.1)}.custom-icon.jsx-f91e2997be3434c4{-webkit-filter:drop-shadow(0 2px 4px rgba(0,0,0,.3));filter:drop-shadow(0 2px 4px rgba(0,0,0,.3))}',
              }),
              (0, s.jsxs)('div', {
                'aria-label': 'Suvarnakala Top Trending Designs Section',
                className: 'jsx-f91e2997be3434c4 p-5  pb-0',
                children: [
                  (0, s.jsxs)('div', {
                    className:
                      'jsx-f91e2997be3434c4 custom-heading-wrapper d-flex align-items-center mb-4',
                    children: [
                      (0, s.jsxs)('h2', {
                        className: 'jsx-f91e2997be3434c4 m-0 custom-heading text-wrap me-3',
                        children: [
                          (0, s.jsxs)('span', {
                            className: 'jsx-f91e2997be3434c4',
                            children: [
                              'Top Trending ',
                              (0, s.jsx)('span', {
                                className: 'jsx-f91e2997be3434c4 text-red',
                                children: 'Designs :',
                              }),
                            ],
                          }),
                          (0, s.jsxs)('div', {
                            className: 'jsx-f91e2997be3434c4 decorative-line',
                            children: [
                              (0, s.jsx)('div', { className: 'jsx-f91e2997be3434c4 diamond' }),
                              (0, s.jsx)('div', { className: 'jsx-f91e2997be3434c4 line' }),
                              (0, s.jsx)('div', { className: 'jsx-f91e2997be3434c4 diamond' }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)('span', {
                        className: 'jsx-f91e2997be3434c4 heading-extension',
                        children: 'Elevate Your Look with the Latest Designs',
                      }),
                    ],
                  }),
                  (0, s.jsx)('div', {
                    className: 'jsx-f91e2997be3434c4 mt-4',
                    children:
                      0 === t.length
                        ? (0, s.jsx)('div', {
                            className: 'jsx-f91e2997be3434c4 text-center',
                            children: 'No trending designs available',
                          })
                        : (0, s.jsx)(c.default, {
                            responsive: m,
                            infinite: !0,
                            autoPlay: !0,
                            autoPlaySpeed: 3e3,
                            showDots: !1,
                            arrows: !1,
                            containerClass: 'carousel-container',
                            itemClass: 'px-2 pb-5',
                            'aria-live': 'polite',
                            children: t.map((e) => {
                              var a;
                              let t = (null == (a = e.image) ? void 0 : a.startsWith('http'))
                                ? e.image
                                : ''.concat(d, '/').concat(e.image);
                              return (0, s.jsx)(
                                'div',
                                {
                                  role: 'group',
                                  'aria-label': 'Trending Design: '.concat(e.name),
                                  className: 'jsx-f91e2997be3434c4 bg-transparent',
                                  children: (0, s.jsx)('div', {
                                    className: 'jsx-f91e2997be3434c4 image-container rounded-top-4',
                                    children: (0, s.jsxs)('a', {
                                      href: e.instaLink,
                                      target: '_blank',
                                      rel: 'noopener noreferrer',
                                      'aria-label': 'Visit Instagram link for '.concat(e.name),
                                      className: 'jsx-f91e2997be3434c4',
                                      children: [
                                        (0, s.jsx)(o.default, {
                                          src: t,
                                          alt: 'Suvarnakala '.concat(
                                            e.name,
                                            ' Trending Jewelry Design'
                                          ),
                                          fill: !0,
                                          sizes: '(max-width: 576px) 100vw, 300px',
                                          style: {
                                            objectFit: 'cover',
                                            transition: 'filter 0.3s ease',
                                          },
                                          loading: 'lazy',
                                          unoptimized: !0,
                                        }),
                                        (0, s.jsx)('span', {
                                          className: 'jsx-f91e2997be3434c4 link-icon',
                                          children: (0, s.jsx)('svg', {
                                            width: '28',
                                            height: '28',
                                            viewBox: '0 0 24 24',
                                            fill: 'white',
                                            className: 'jsx-f91e2997be3434c4 custom-icon',
                                            children: (0, s.jsx)('path', {
                                              d: 'M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.468.067-2.847.364-3.928 1.445-1.081 1.081-1.378 2.46-1.445 3.928-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.067 1.468.364 2.847 1.445 3.928 1.081 1.081 2.46 1.378 3.928 1.445 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.468-.067 2.847-.364 3.928-1.445 1.081-1.081 1.378-2.46 1.445-3.928.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.067-1.468-.364-2.847-1.445-3.928-1.081-1.081-2.46-1.378-3.928-1.445-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441-.645-1.441-1.441s.645-1.441 1.441-1.441 1.441.645 1.441 1.441-.645 1.441-1.441 1.441z',
                                              className: 'jsx-f91e2997be3434c4',
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                },
                                e._id
                              );
                            }),
                          }),
                  }),
                ],
              }),
            ],
          });
        };
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    e.O(0, [447, 397, 740, 63, 62, 209, 9, 770, 25, 441, 684, 358], () => a(40807)), (_N_E = e.O());
  },
]);
