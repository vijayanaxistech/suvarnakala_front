(exports.id = 631),
  (exports.ids = [631]),
  (exports.modules = {
    5388: (e, t, a) => {
      'use strict';
      a.d(t, { A: () => s });
      let s = {
        src: '/_next/static/media/Group 41992.078e3f40.png',
        height: 116,
        width: 115,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAACVBMVEUcOYUkNosbOIWbAWlfAAAAA3RSTlMPASWjNWblAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJ0lEQVR4nD2LAQoAQBABZ/z/0Zfd9kQoUOW0AflIi5DUGjoqc6/BAwYMAC0OjwqHAAAAAElFTkSuQmCC',
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    6259: (e, t, a) => {
      Promise.resolve().then(a.t.bind(a, 16444, 23)),
        Promise.resolve().then(a.t.bind(a, 16042, 23)),
        Promise.resolve().then(a.t.bind(a, 88170, 23)),
        Promise.resolve().then(a.t.bind(a, 49477, 23)),
        Promise.resolve().then(a.t.bind(a, 29345, 23)),
        Promise.resolve().then(a.t.bind(a, 12089, 23)),
        Promise.resolve().then(a.t.bind(a, 46577, 23)),
        Promise.resolve().then(a.t.bind(a, 31307, 23));
    },
    12038: (e, t, a) => {
      'use strict';
      a.d(t, { default: () => N });
      var s = a(60687),
        r = a(76180),
        l = a.n(r),
        o = a(43210),
        n = a(85814),
        i = a.n(n),
        d = a(30474),
        c = a(16189),
        m = a(72657),
        h = a(49429),
        f = a(38057),
        x = a(3769),
        A = a(92388),
        b = a(69587),
        p = a(79962),
        u = a(41144),
        j = a(82916);
      a(59863);
      var g = a(62185),
        w = a(52748),
        v = a(36588),
        y = a(12315);
      let k = {
          src: '/_next/static/media/Book_A.43bca03e.png',
          height: 678,
          width: 678,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEVpJRNmPSRxOSZHHRI6FAsVBQMxCAQjAwIxFAlIEQpEKxtgJA4aGxJXLhZ8SC9CIgeOUi82Lx9UNSXovVPAAAAAAXRSTlP+GuMHfQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD1JREFUeJwFwYcBgDAMAzBnOukE/j8WCWgGSWI2S7oTnqY6Z6JCns4ixnpFKwK+1nesLmoMU78btY/blvMDQKQB8KMyUY0AAAAASUVORK5CYII=',
          blurWidth: 8,
          blurHeight: 8,
        },
        N = () => {
          let e = (0, c.usePathname)(),
            [t, a] = (0, o.useState)(!1),
            [r, n] = (0, o.useState)(!1),
            [N, C] = (0, o.useState)({
              name: '',
              email: '',
              mobile: '',
              city: '',
              store: '',
              date: '',
              jewelry: '',
              message: '',
              captchaAnswer: '',
            }),
            [S, R] = (0, o.useState)({}),
            [P, B] = (0, o.useState)(''),
            M = (0, o.useRef)(null),
            U = () => {
              let e = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
                t = '';
              for (let a = 0; a < 6; a++) t += e.charAt(Math.floor(Math.random() * e.length));
              B(t);
              let a = M.current;
              if (a) {
                let e = a.getContext('2d');
                if (e) {
                  e.clearRect(0, 0, a.width, a.height),
                    (e.fillStyle = '#f0f0f0'),
                    e.fillRect(0, 0, a.width, a.height);
                  for (let t = 0; t < 50; t++)
                    (e.fillStyle = `rgba(0, 0, 0, ${0.2 * Math.random()})`),
                      e.fillRect(Math.random() * a.width, Math.random() * a.height, 2, 2);
                  (e.font = '20px Arial'),
                    (e.fillStyle = '#000'),
                    (e.textAlign = 'center'),
                    (e.textBaseline = 'middle');
                  let s = a.width / (t.length + 1);
                  for (let r = 0; r < t.length; r++) {
                    e.save();
                    let l = s * (r + 1),
                      o = a.height / 2;
                    e.translate(l, o),
                      e.rotate((Math.random() - 0.5) * 0.3),
                      e.fillText(t[r], 0, 0),
                      e.restore();
                  }
                } else console.error('Failed to get 2D context for canvas');
              } else console.error('Canvas element not found');
            };
          (0, o.useEffect)(() => {
            if (r) {
              let e = setTimeout(() => {
                U();
              }, 100);
              return () => clearTimeout(e);
            }
          }, [r]);
          let E = (e) => {
              let { name: t, value: a } = e.target;
              C((e) => ({ ...e, [t]: a })), R((e) => ({ ...e, [t]: '' }));
            },
            I = () => {
              let e = {};
              return (
                N.name.trim() || (e.name = 'Name is required'),
                N.email.trim()
                  ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(N.email) ||
                    (e.email = 'Please enter a valid email address')
                  : (e.email = 'Email is required'),
                N.mobile.trim()
                  ? /^[0-9]{10}$/.test(N.mobile) ||
                    (e.mobile = 'Please enter a valid 10-digit mobile number')
                  : (e.mobile = 'Mobile number is required'),
                N.city.trim() || (e.city = 'City is required'),
                N.store.trim() || (e.store = 'Store is required'),
                N.date || (e.date = 'Appointment date is required'),
                N.jewelry.trim() || (e.jewelry = 'Interested jewelry is required'),
                N.captchaAnswer.trim()
                  ? N.captchaAnswer.trim().toLowerCase() !== P.toLowerCase() &&
                    (e.captchaAnswer = 'Incorrect CAPTCHA')
                  : (e.captchaAnswer = 'CAPTCHA is required'),
                R(e),
                0 === Object.keys(e).length
              );
            },
            G = async () => {
              if (!I()) return void alert('Please fill in all required fields correctly.');
              try {
                await (0, g.uu)(N),
                  alert('Appointment request sent successfully!'),
                  C({
                    name: '',
                    email: '',
                    mobile: '',
                    city: '',
                    store: '',
                    date: '',
                    jewelry: '',
                    message: '',
                    captchaAnswer: '',
                  }),
                  R({}),
                  n(!1);
              } catch (e) {
                console.error('Error sending appointment request:', e),
                  alert('Failed to send appointment. Please try again later.');
              }
            };
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)('div', {
                className: 'jsx-2815eb15dfe79f04 header-marquee text-white py-1',
                children: (0, s.jsx)(u.A, {
                  speed: 50,
                  gradient: !1,
                  pauseOnHover: !0,
                  children:
                    "Today’s Showroom Timings: 11:00am to 7:00pm | Flat 50% off From 15 May 2025 to 14 June 2025 | Today's Rate: 24K Gold: ₹6,700.00 (10 gram) | 22K Gold: ₹6,670.00 (10 gram)",
                }),
              }),
              (0, s.jsx)(m.A, {
                expand: 'lg',
                expanded: t,
                className: 'custom-navbar shadow-sm',
                sticky: 'top',
                children: (0, s.jsxs)(h.default, {
                  fluid: !0,
                  className: 'd-flex align-items-center justify-content-between',
                  children: [
                    (0, s.jsx)('div', {
                      className: 'jsx-2815eb15dfe79f04 header-logo',
                      children: (0, s.jsx)(i(), {
                        href: '/',
                        passHref: !0,
                        legacyBehavior: !1,
                        children: (0, s.jsx)(m.A.Brand, {
                          onClick: () => a(!1),
                          style: { cursor: 'pointer' },
                          children: (0, s.jsx)(d.default, {
                            src: y.A,
                            alt: 'Suvarnakala Logo',
                            width: 150,
                            height: 60,
                          }),
                        }),
                      }),
                    }),
                    (0, s.jsx)(m.A.Toggle, {
                      as: 'div',
                      className: 'custom-toggler d-lg-none',
                      onClick: () => a((e) => !e),
                      children: t
                        ? (0, s.jsx)(b.QCr, { size: 24, color: '#D41B1F' })
                        : (0, s.jsx)(b.OXb, { size: 24, color: '#D41B1F' }),
                    }),
                    (0, s.jsx)(m.A.Collapse, {
                      id: 'basic-navbar-nav',
                      className: 'justify-content-center',
                      children: (0, s.jsx)(f.A, {
                        className: 'gap-3 text-center flex-column flex-lg-row align-items-center',
                        children: [
                          { href: '/', label: 'Home' },
                          { href: '/about', label: 'About Us' },
                          { href: '/collections', label: 'Collections' },
                          { href: '/our-showrooms', label: 'Our Showrooms' },
                          { href: '/events', label: 'Events' },
                          { href: '/why-us', label: 'Why Us' },
                          { href: '/contact', label: 'Contact Us' },
                          {
                            href: '#',
                            label: 'Book an Appointment',
                            onClick: () => {
                              n(!0);
                            },
                          },
                        ].map(({ href: t, label: r, onClick: l }, o) => {
                          let n = !l && (e === t || e.startsWith(t + '/'));
                          return (0, s.jsx)(
                            i(),
                            {
                              href: t,
                              passHref: !0,
                              legacyBehavior: !1,
                              className: 'custom-nav-link',
                              onClick: (e) => {
                                l && (e.preventDefault(), l()), a(!1);
                              },
                              style: { textDecoration: 'none' },
                              children: (0, s.jsx)(f.A.Link, {
                                as: 'span',
                                className: n ? 'text-danger active-link' : 'text-dark',
                                children: r,
                              }),
                            },
                            o
                          );
                        }),
                      }),
                    }),
                    (0, s.jsxs)('div', {
                      className:
                        'jsx-2815eb15dfe79f04 d-none d-lg-flex align-items-center gap-3 social-icons',
                      children: [
                        (0, s.jsx)(f.A.Link, {
                          href: 'https://wa.me/your-number',
                          target: '_blank',
                          children: (0, s.jsx)(b.EcP, {}),
                        }),
                        (0, s.jsx)(f.A.Link, {
                          href: 'https://twitter.com/your-profile',
                          target: '_blank',
                          children: (0, s.jsx)(b.feZ, {}),
                        }),
                        (0, s.jsx)(f.A.Link, {
                          href: 'https://facebook.com/your-profile',
                          target: '_blank',
                          children: (0, s.jsx)(b.iYk, {}),
                        }),
                        (0, s.jsx)(f.A.Link, {
                          href: 'https://instagram.com/your-profile',
                          target: '_blank',
                          children: (0, s.jsx)(b.ao$, {}),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, s.jsx)(x.A, {
                show: r,
                onHide: () => {
                  n(!1),
                    R({}),
                    C({
                      name: '',
                      email: '',
                      mobile: '',
                      city: '',
                      store: '',
                      date: '',
                      jewelry: '',
                      message: '',
                      captchaAnswer: '',
                    });
                },
                centered: !0,
                size: 'lg',
                dialogClassName: 'custom-modal',
                autoFocus: !1,
                children: (0, s.jsx)(x.A.Body, {
                  className: 'p-0 d-flex align-items-center justify-content-center',
                  style: { width: '1200px', height: '300px', maxWidth: '100vw' },
                  children: (0, s.jsxs)('div', {
                    style: { height: '100%' },
                    className: 'jsx-2815eb15dfe79f04 row no-gutters m-0 w-100',
                    children: [
                      (0, s.jsx)('div', {
                        style: { height: '100%' },
                        className: 'jsx-2815eb15dfe79f04 col-md-6 d-none d-md-block p-0',
                        children: (0, s.jsx)('div', {
                          style: { position: 'relative', width: '100%', height: '100%' },
                          className: 'jsx-2815eb15dfe79f04',
                          children: (0, s.jsx)(d.default, {
                            src: k,
                            alt: 'Appointment',
                            fill: !0,
                            priority: !0,
                            style: { objectFit: 'cover' },
                          }),
                        }),
                      }),
                      (0, s.jsxs)('div', {
                        style: { height: '100%', overflowY: 'auto', backgroundColor: 'black' },
                        className: 'jsx-2815eb15dfe79f04 col-md-6 p-4',
                        children: [
                          (0, s.jsx)('h4', {
                            className: 'jsx-2815eb15dfe79f04 mb-4 text-center text-white fw-bold',
                            children: 'Book an Appointment',
                          }),
                          (0, s.jsxs)('div', {
                            className: 'jsx-2815eb15dfe79f04 pt-5',
                            children: [
                              (0, s.jsxs)('div', {
                                className: 'jsx-2815eb15dfe79f04 row',
                                children: [
                                  (0, s.jsxs)('div', {
                                    className: 'jsx-2815eb15dfe79f04 mb-3 col-md-6',
                                    children: [
                                      (0, s.jsx)('input', {
                                        type: 'text',
                                        name: 'name',
                                        placeholder: 'Name',
                                        required: !0,
                                        value: N.name,
                                        onChange: E,
                                        className:
                                          'jsx-2815eb15dfe79f04 form-control text-white bg-black w-100 border-white',
                                      }),
                                      S.name &&
                                        (0, s.jsx)('span', {
                                          className: 'jsx-2815eb15dfe79f04 error-text',
                                          children: S.name,
                                        }),
                                    ],
                                  }),
                                  (0, s.jsxs)('div', {
                                    className: 'jsx-2815eb15dfe79f04 mb-3 col-md-6',
                                    children: [
                                      (0, s.jsx)('input', {
                                        type: 'email',
                                        name: 'email',
                                        placeholder: 'Email',
                                        required: !0,
                                        value: N.email,
                                        onChange: E,
                                        className:
                                          'jsx-2815eb15dfe79f04 form-control text-white bg-black w-100 border-white',
                                      }),
                                      S.email &&
                                        (0, s.jsx)('span', {
                                          className: 'jsx-2815eb15dfe79f04 error-text',
                                          children: S.email,
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsxs)('div', {
                                className: 'jsx-2815eb15dfe79f04 row',
                                children: [
                                  (0, s.jsxs)('div', {
                                    className: 'jsx-2815eb15dfe79f04 mb-3 col-md-6',
                                    children: [
                                      (0, s.jsx)('input', {
                                        type: 'text',
                                        name: 'mobile',
                                        placeholder: 'Mobile Number',
                                        required: !0,
                                        value: N.mobile,
                                        onChange: E,
                                        className:
                                          'jsx-2815eb15dfe79f04 form-control text-white bg-black w-100 border-white',
                                      }),
                                      S.mobile &&
                                        (0, s.jsx)('span', {
                                          className: 'jsx-2815eb15dfe79f04 error-text',
                                          children: S.mobile,
                                        }),
                                    ],
                                  }),
                                  (0, s.jsxs)('div', {
                                    className: 'jsx-2815eb15dfe79f04 mb-3 col-md-6',
                                    children: [
                                      (0, s.jsx)('input', {
                                        type: 'text',
                                        name: 'city',
                                        placeholder: 'City',
                                        required: !0,
                                        value: N.city,
                                        onChange: E,
                                        className:
                                          'jsx-2815eb15dfe79f04 form-control text-white bg-black w-100 border-white',
                                      }),
                                      S.city &&
                                        (0, s.jsx)('span', {
                                          className: 'jsx-2815eb15dfe79f04 error-text',
                                          children: S.city,
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsxs)('div', {
                                className: 'jsx-2815eb15dfe79f04 row',
                                children: [
                                  (0, s.jsxs)('div', {
                                    className: 'jsx-2815eb15dfe79f04 mb-3 col-md-6',
                                    children: [
                                      (0, s.jsxs)('select', {
                                        name: 'store',
                                        required: !0,
                                        value: N.store,
                                        onChange: E,
                                        className:
                                          'jsx-2815eb15dfe79f04 form-control text-white-50 bg-black w-100 border-white',
                                        children: [
                                          (0, s.jsx)('option', {
                                            value: '',
                                            className: 'jsx-2815eb15dfe79f04',
                                            children: 'Select Store',
                                          }),
                                          (0, s.jsx)('option', {
                                            value: 'Jodhpur Cross Roads, Satellite',
                                            className: 'jsx-2815eb15dfe79f04',
                                            children: 'Jodhpur Cross Roads, Satellite',
                                          }),
                                          (0, s.jsx)('option', {
                                            value: 'C.G. Road',
                                            className: 'jsx-2815eb15dfe79f04',
                                            children: 'C.G. Road',
                                          }),
                                          (0, s.jsx)('option', {
                                            value: 'Maninagar',
                                            className: 'jsx-2815eb15dfe79f04',
                                            children: 'Maninagar',
                                          }),
                                        ],
                                      }),
                                      S.store &&
                                        (0, s.jsx)('span', {
                                          className: 'jsx-2815eb15dfe79f04 error-text',
                                          children: S.store,
                                        }),
                                    ],
                                  }),
                                  (0, s.jsx)('div', {
                                    className: 'jsx-2815eb15dfe79f04 mb-3 col-md-6',
                                    children: (0, s.jsxs)('div', {
                                      className: 'jsx-2815eb15dfe79f04 w-100',
                                      children: [
                                        (0, s.jsx)(j.Ay, {
                                          selected: N.date ? new Date(N.date) : null,
                                          onChange: (e) =>
                                            C((t) => ({
                                              ...t,
                                              date: e?.toISOString().split('T')[0] || '',
                                            })),
                                          dateFormat: 'dd/MM/yyyy',
                                          className:
                                            'form-control bg-black text-white w-100 border-white',
                                          placeholderText: 'Select Appointment Date',
                                          wrapperClassName: 'w-100',
                                        }),
                                        S.date &&
                                          (0, s.jsx)('span', {
                                            className: 'jsx-2815eb15dfe79f04 error-text',
                                            children: S.date,
                                          }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, s.jsx)('div', {
                                className: 'jsx-2815eb15dfe79f04 row',
                                children: (0, s.jsxs)('div', {
                                  className: 'jsx-2815eb15dfe79f04 mb-3 col-md-12',
                                  children: [
                                    (0, s.jsx)('input', {
                                      type: 'text',
                                      name: 'jewelry',
                                      placeholder: 'Interested Jewelry',
                                      required: !0,
                                      value: N.jewelry,
                                      onChange: E,
                                      className:
                                        'jsx-2815eb15dfe79f04 form-control text-white bg-black w-100 border-white',
                                    }),
                                    S.jewelry &&
                                      (0, s.jsx)('span', {
                                        className: 'jsx-2815eb15dfe79f04 error-text',
                                        children: S.jewelry,
                                      }),
                                  ],
                                }),
                              }),
                              (0, s.jsx)('div', {
                                className: 'jsx-2815eb15dfe79f04 mb-3',
                                children: (0, s.jsx)('textarea', {
                                  rows: 6,
                                  name: 'message',
                                  placeholder: 'Message',
                                  value: N.message,
                                  onChange: E,
                                  style: { width: '100%', height: '175px' },
                                  className:
                                    'jsx-2815eb15dfe79f04 form-control text-white bg-black w-100 border-white',
                                }),
                              }),
                              (0, s.jsxs)(w.A, {
                                sx: {
                                  display: 'flex',
                                  flexWrap: 'wrap',
                                  alignItems: 'center',
                                  gap: 2,
                                  mt: 3,
                                  mb: 3,
                                },
                                children: [
                                  (0, s.jsx)('canvas', {
                                    ref: M,
                                    width: 200,
                                    height: 60,
                                    style: {
                                      border: '1px solid #dee2e6',
                                      borderRadius: '4px',
                                      backgroundColor: '#f0f0f0',
                                      maxWidth: '100%',
                                    },
                                    className: 'jsx-2815eb15dfe79f04',
                                  }),
                                  (0, s.jsx)(A.default, {
                                    variant: 'outlined',
                                    onClick: U,
                                    className: 'rounded-1 p-2',
                                    style: {
                                      borderColor: '#033A79',
                                      color: '#033A79',
                                      minWidth: '50px',
                                      padding: '10px',
                                      flexShrink: 0,
                                    },
                                    children: (0, s.jsx)(p.wAq, {}),
                                  }),
                                  (0, s.jsx)(v.A, {
                                    id: 'captchaAnswer',
                                    name: 'captchaAnswer',
                                    label: 'Enter CAPTCHA Code',
                                    variant: 'outlined',
                                    size: 'medium',
                                    value: N.captchaAnswer,
                                    onChange: E,
                                    error: !!S.captchaAnswer,
                                    helperText: S.captchaAnswer,
                                    fullWidth: !0,
                                    sx: {
                                      flex: 1,
                                      input: { color: '#fff' },
                                      label: { color: '#fff' },
                                      '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#fff' },
                                        '&:hover fieldset': { borderColor: '#fff' },
                                        '&.Mui-focused fieldset': { borderColor: '#fff' },
                                      },
                                    },
                                    inputProps: { autoComplete: 'off' },
                                  }),
                                ],
                              }),
                              (0, s.jsx)('div', {
                                className: 'jsx-2815eb15dfe79f04 text-center pt-4',
                                children: (0, s.jsx)(A.default, {
                                  onClick: G,
                                  className: 'px-4 py-2 rounded-pill fw-bold',
                                  style: {
                                    backgroundColor: '#033A79',
                                    border: 'none',
                                    color: 'white',
                                  },
                                  children: 'Book Appointment',
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, s.jsx)(l(), {
                id: '2815eb15dfe79f04',
                children:
                  '.error-text.jsx-2815eb15dfe79f04{color:#ff4d4d;font-size:12px;margin-top:4px;display:block}.form-control.bg-black.jsx-2815eb15dfe79f04{border:1px solid#7e7979}.form-control.bg-black.jsx-2815eb15dfe79f04::-webkit-input-placeholder{color:#7e7979}.form-control.bg-black.jsx-2815eb15dfe79f04:-moz-placeholder{color:#7e7979}.form-control.bg-black.jsx-2815eb15dfe79f04::-moz-placeholder{color:#7e7979}.form-control.bg-black.jsx-2815eb15dfe79f04:-ms-input-placeholder{color:#7e7979}.form-control.bg-black.jsx-2815eb15dfe79f04::-ms-input-placeholder{color:#7e7979}.form-control.bg-black.jsx-2815eb15dfe79f04::placeholder{color:#7e7979}.form-control.bg-black.jsx-2815eb15dfe79f04:focus{background-color:#000;color:#fff;border-color:#033a79;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.react-datepicker-wrapper.jsx-2815eb15dfe79f04 .form-control.bg-black.jsx-2815eb15dfe79f04{border:1px solid#7e7979}.react-datepicker-wrapper.jsx-2815eb15dfe79f04 .form-control.bg-black.jsx-2815eb15dfe79f04:focus{border-color:#033a79;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;outline:none}.custom-navbar.jsx-2815eb15dfe79f04{background-color:#fff;hearted padding: 10px 0;}.custom-nav-link.jsx-2815eb15dfe79f04{color:#333;font-weight:500;text-decoration:none}.custom-nav-link.jsx-2815eb15dfe79f04:hover{color:#d41b1f!important}.header-marquee.jsx-2815eb15dfe79f04{background-color:#d41b1f;font-size:14px}.social-icons.jsx-2815eb15dfe79f04 a.jsx-2815eb15dfe79f04{color:#333;font-size:20px}.social-icons.jsx-2815eb15dfe79f04 a.jsx-2815eb15dfe79f04:hover{color:#d41b1f}.custom-toggler.jsx-2815eb15dfe79f04{border:none}.active-link.jsx-2815eb15dfe79f04{font-weight:600}',
              }),
            ],
          });
        };
    },
    12315: (e, t, a) => {
      'use strict';
      a.d(t, { A: () => s });
      let s = {
        src: '/_next/static/media/Suvarnakala.de714873.png',
        height: 326,
        width: 904,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAG1BMVEVAHCRVIz3OGx8FOXqYHB/QGR2gGxtrKEiCHSMtGA9gAAAACXRSTlMRB2QzLHEuUSvVcCI8AAAACXBIWXMAAC4jAAAuIwF4pT92AAAAH0lEQVR4nGNgYmJiZWVnZmZgZGBhYeNgYGRgZAADRgAD4AA4YAelZQAAAABJRU5ErkJggg==',
        blurWidth: 8,
        blurHeight: 3,
      };
    },
    24597: (e, t, a) => {
      'use strict';
      a.d(t, { default: () => s });
      let s = (0, a(12907).registerClientReference)(
        function () {
          throw Error(
            'Attempted to call the default export of "C:\\\\AnaxisTech Projects\\\\Suvrankala\\\\suvarnakala_frontend\\\\src\\\\components\\\\Header.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
          );
        },
        'C:\\AnaxisTech Projects\\Suvrankala\\suvarnakala_frontend\\src\\components\\Header.tsx',
        'default'
      );
    },
    28659: (e, t, a) => {
      'use strict';
      a.d(t, { default: () => s });
      let s = (0, a(12907).registerClientReference)(
        function () {
          throw Error(
            'Attempted to call the default export of "C:\\\\AnaxisTech Projects\\\\Suvrankala\\\\suvarnakala_frontend\\\\src\\\\components\\\\Footer.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
          );
        },
        'C:\\AnaxisTech Projects\\Suvrankala\\suvarnakala_frontend\\src\\components\\Footer.tsx',
        'default'
      );
    },
    41268: (e, t, a) => {
      'use strict';
      a.d(t, { A: () => s });
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
    43211: (e, t, a) => {
      Promise.resolve().then(a.t.bind(a, 86346, 23)),
        Promise.resolve().then(a.t.bind(a, 27924, 23)),
        Promise.resolve().then(a.t.bind(a, 35656, 23)),
        Promise.resolve().then(a.t.bind(a, 40099, 23)),
        Promise.resolve().then(a.t.bind(a, 38243, 23)),
        Promise.resolve().then(a.t.bind(a, 28827, 23)),
        Promise.resolve().then(a.t.bind(a, 62763, 23)),
        Promise.resolve().then(a.t.bind(a, 97173, 23));
    },
    46549: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 51317)), Promise.resolve().then(a.bind(a, 12038));
    },
    51317: (e, t, a) => {
      'use strict';
      a.d(t, { default: () => A });
      var s = a(60687);
      a(43210);
      var r = a(95282),
        l = a.n(r),
        o = a(30474),
        n = a(12315),
        i = a(69587),
        d = a(54399),
        c = a(41268),
        m = a(5388),
        h = a(85814),
        f = a.n(h);
      let x = new Date().getFullYear();
      function A() {
        let e = {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Suvarnakala',
          description:
            'Suvarnakala offers personalized jewelry experiences, crafted by skilled artisans dedicated to quality and timeless elegance.',
          logo: n.A.src,
          url: 'https://yourwebsite.com',
          contactPoint: [
            {
              '@type': 'ContactPoint',
              telephone: '+91 7874011144',
              contactType: 'Customer Service',
              email: 'sales@suvarnakala.com',
              areaServed: 'IN',
            },
          ],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Ahmedabad',
            addressRegion: 'Gujarat',
            addressCountry: 'IN',
            streetAddress: 'Maninagar - Satellite - C.G.Road',
          },
          sameAs: [
            'https://twitter.com/yourprofile',
            'https://facebook.com/yourprofile',
            'https://instagram.com/yourprofile',
          ],
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(l(), {
              children: [
                (0, s.jsx)('meta', {
                  name: 'description',
                  content:
                    'Contact Suvarnakala for personalized jewelry experiences. Visit our showrooms in Ahmedabad, Gujarat, or connect with us online.',
                }),
                (0, s.jsx)('meta', {
                  name: 'keywords',
                  content:
                    'Suvarnakala, jewelry store, Ahmedabad jewelry, contact Suvarnakala, personalized jewelry',
                }),
                (0, s.jsx)('meta', { name: 'robots', content: 'index, follow' }),
                (0, s.jsx)('meta', {
                  name: 'viewport',
                  content: 'width=device-width, initial-scale=1',
                }),
                (0, s.jsx)('meta', {
                  property: 'og:title',
                  content: 'Suvarnakala - Personalized Jewelry Experiences',
                }),
                (0, s.jsx)('meta', {
                  property: 'og:description',
                  content:
                    'Connect with Suvarnakala for exquisite jewelry crafted with timeless elegance. Visit us in Ahmedabad or online.',
                }),
                (0, s.jsx)('meta', { property: 'og:image', content: n.A.src }),
                (0, s.jsx)('meta', { property: 'og:url', content: 'https://yourwebsite.com' }),
                (0, s.jsx)('meta', { property: 'og:type', content: 'website' }),
                (0, s.jsx)('script', {
                  type: 'application/ld+json',
                  dangerouslySetInnerHTML: { __html: JSON.stringify(e) },
                }),
              ],
            }),
            (0, s.jsx)('div', {
              className: ' pb-0',
              children: (0, s.jsx)('footer', {
                className: 'bg-color pt-5 pb-3 footer',
                'aria-label': 'Suvarnakala Footer',
                children: (0, s.jsxs)('div', {
                  className: 'container',
                  children: [
                    (0, s.jsxs)('div', {
                      className: 'footer-sections',
                      children: [
                        (0, s.jsxs)('div', {
                          className: 'footer-logo-section',
                          children: [
                            (0, s.jsx)(o.default, {
                              src: n.A,
                              alt: 'Suvarnakala Jewelry Logo',
                              className: 'img-fluid mb-3',
                              width: 200,
                              height: 80,
                              loading: 'lazy',
                            }),
                            (0, s.jsx)('p', {
                              className: 'text-dark small footer-description',
                              children:
                                'We offer personalized jewelry experiences, crafted by skilled artisans dedicated to quality and timeless elegance.',
                            }),
                            (0, s.jsxs)('div', {
                              className: 'd-flex gap-2 mt-3',
                              children: [
                                (0, s.jsx)(o.default, {
                                  src: d.A,
                                  alt: 'Download Suvarnakala App on Google Play',
                                  width: 120,
                                  height: 40,
                                  loading: 'lazy',
                                }),
                                (0, s.jsx)(o.default, {
                                  src: c.A,
                                  alt: 'Download Suvarnakala App on App Store',
                                  width: 120,
                                  height: 40,
                                  loading: 'lazy',
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)('div', {
                          className: 'footer-links-section',
                          children: [
                            (0, s.jsx)('h6', {
                              className: 'fw-bold mb-3 text-uppercase footer-title',
                              children: 'Useful Links',
                            }),
                            (0, s.jsx)('ul', {
                              className: 'list-unstyled',
                              children: [
                                { name: 'Home', href: '/' },
                                { name: 'About Us', href: '/about' },
                                { name: 'Our Showrooms', href: '/our-showrooms' },
                                { name: 'Contact Us', href: '/contact' },
                                { name: 'Disclaimer', href: '/disclaimer' },
                                { name: 'Privacy Policy', href: '/privacy-policy' },
                              ].map((e, t) =>
                                (0, s.jsx)(
                                  'li',
                                  {
                                    className: 'mb-1',
                                    children: (0, s.jsx)(f(), {
                                      href: e.href,
                                      className: 'text-dark text-decoration-none footer-link',
                                      children: e.name,
                                    }),
                                  },
                                  t
                                )
                              ),
                            }),
                          ],
                        }),
                        (0, s.jsxs)('div', {
                          className: 'footer-contact-section',
                          children: [
                            (0, s.jsx)('h6', {
                              className: 'fw-bold mb-3 text-uppercase footer-title',
                              children: 'Get In Touch',
                            }),
                            (0, s.jsxs)('ul', {
                              className: 'list-unstyled text-dark small',
                              children: [
                                (0, s.jsxs)('li', {
                                  className: 'mb-2 d-flex align-items-center',
                                  children: [
                                    (0, s.jsx)(i.dRU, {
                                      className: 'text-red me-2 icon-small',
                                      'aria-hidden': 'true',
                                    }),
                                    (0, s.jsx)('a', {
                                      href: 'tel:+917874011144',
                                      className: 'text-dark text-decoration-none',
                                      children: '+91 7874011144',
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)('li', {
                                  className: 'd-flex align-items-center',
                                  children: [
                                    (0, s.jsx)(i.maD, {
                                      className: 'text-red me-2 icon-small',
                                      'aria-hidden': 'true',
                                    }),
                                    (0, s.jsx)('a', {
                                      href: 'mailto:sales@suvarnakala.com',
                                      className: 'text-dark text-decoration-none',
                                      children: 'sales@suvarnakala.com',
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)('div', {
                          className: 'footer-social-section social-media',
                          children: [
                            (0, s.jsx)('h6', {
                              className: 'fw-bold mb-3 text-uppercase footer-title',
                              children: 'Social Media',
                            }),
                            (0, s.jsxs)('div', {
                              className: 'd-flex gap-3',
                              children: [
                                (0, s.jsx)('a', {
                                  href: '#',
                                  className: 'text-red hover-social',
                                  'aria-label': 'Follow Suvarnakala on Twitter',
                                  children: (0, s.jsx)(i.feZ, { className: 'icon-small' }),
                                }),
                                (0, s.jsx)('a', {
                                  href: '#',
                                  className: 'text-red hover-social',
                                  'aria-label': 'Follow Suvarnakala on Facebook',
                                  children: (0, s.jsx)(i.iYk, { className: 'icon-small' }),
                                }),
                                (0, s.jsx)('a', {
                                  href: '#',
                                  className: 'text-red hover-social',
                                  'aria-label': 'Follow Suvarnakala on Instagram',
                                  children: (0, s.jsx)(i.ao$, { className: 'icon-small' }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)('div', {
                      className: 'd-flex align-items-center my-2',
                      children: [
                        (0, s.jsx)('div', { className: 'flex-grow-1 border-top border-secondary' }),
                        (0, s.jsx)('div', {
                          className: 'px-3',
                          children: (0, s.jsx)(o.default, {
                            src: m.A,
                            alt: 'Decorative Leaf Icon',
                            width: 70,
                            height: 70,
                            loading: 'lazy',
                          }),
                        }),
                        (0, s.jsx)('div', { className: 'flex-grow-1 border-top border-secondary' }),
                      ],
                    }),
                    (0, s.jsx)('div', {
                      className:
                        'd-flex flex-column flex-md-row justify-content-center align-items-center text-center px-3 footer-bottom',
                      children: (0, s.jsxs)('p', {
                        className: 'text-blue mb-1 mb-md-0',
                        children: ['\xa9 ', x, ' suvarnakala. All Rights Reserved.'],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
    },
    54399: (e, t, a) => {
      'use strict';
      a.d(t, { A: () => s });
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
    56277: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 28659)), Promise.resolve().then(a.bind(a, 24597));
    },
    61135: () => {},
    62185: (e, t, a) => {
      'use strict';
      a.d(t, { Ay: () => n, C1: () => r, uu: () => o });
      var s = a(51060);
      let r = 'https://skalaapi.anaxistech.com',
        l = s.A.create({ baseURL: r, headers: { 'Content-Type': 'application/json' } }),
        o = async (e) => {
          try {
            return (await l.post('/api/sendappointment', e)).data;
          } catch (e) {
            throw (console.error('Error sending appointment request:', e), e);
          }
        },
        n = l;
    },
    94431: (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => n, metadata: () => o });
      var s = a(37413);
      a(27209), a(61135);
      var r = a(24597),
        l = a(28659);
      let o = { title: 'Suvarnakala Pvt. Ltd.', icons: { icon: './favicon.ico' } };
      function n({ children: e }) {
        return (0, s.jsxs)('html', {
          lang: 'en',
          children: [
            (0, s.jsxs)('head', {
              children: [
                (0, s.jsx)('link', {
                  href: 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap',
                  rel: 'stylesheet',
                }),
                (0, s.jsx)('link', {
                  href: 'https://fonts.googleapis.com/css2?family=Cookie&display=swap',
                  rel: 'stylesheet',
                }),
              ],
            }),
            (0, s.jsxs)('body', {
              children: [
                (0, s.jsx)(r.default, {}),
                (0, s.jsx)('main', { className: 'min-h-screen', children: e }),
                (0, s.jsx)(l.default, {}),
              ],
            }),
          ],
        });
      }
    },
  });
