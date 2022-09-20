export default {
    post: jest.fn(() =>
        Promise.resolve({
            data: {
                order: {
                    order_id: 'f3bdd8e3-bd76-6318-ab18-9b6d64de1fef',
                    status: 'checkout_incomplete',
                    purchase_country: 'fi',
                    purchase_currency: 'EUR',
                    locale: 'fi-FI',
                    billing_address: {
                        given_name: 'John',
                        family_name: 'Doe',
                        email: 'john.doe@outlook.com',
                        street_address: 'Johnintie 4 B 67',
                        postal_code: '00910',
                        city: 'Helsinki',
                        phone: '+358401234567',
                        country: 'FI',
                    },
                    shipping_address: {
                        given_name: 'John',
                        family_name: 'Doe',
                        email: 'john.doe@outlook.com',
                        street_address: 'Johnintie 4 B 67',
                        postal_code: '00910',
                        city: 'Helsinki',
                        phone: '+358401234567',
                        country: 'FI',
                    },
                    order_amount: 84,
                    order_tax_amount: 11,
                    order_lines: [
                        {
                            type: 'physical',
                            reference: 'test-id-one',
                            name: 'test product',
                            quantity: 1,
                            unit_price: 2,
                            tax_rate: 2400,
                            total_amount: 2,
                            total_discount_amount: 0,
                            total_tax_amount: 0.39,
                        },
                    ],
                    merchant_urls: {
                        terms: 'http://localhost:3001/ehdot',
                        checkout: 'http://localhost:3001/ostoskori',
                        confirmation:
                            'http://localhost:3001/ostoskori/vahvistus',
                        push: 'http://localhost:8080/klarna/push',
                    },
                    html_snippet:
                        "<div id=\"klarna-checkout-container\" style=\"overflow: hidden;\">\n  <div id=\"klarna-unsupported-page\">\n  <style type=\"text/css\">\n  @-webkit-keyframes klarnaFadeIn{from{opacity:0}to{opacity:1}}@-moz-keyframes klarnaFadeIn{from{opacity:0}to{opacity:1}}@keyframes klarnaFadeIn{from{opacity:0}to{opacity:1}}#klarna-unsupported-page{opacity:0;opacity:1\\9;-webkit-animation:klarnaFadeIn ease-in 1;-moz-animation:klarnaFadeIn ease-in 1;animation:klarnaFadeIn ease-in 1;-webkit-animation-fill-mode:forwards;-moz-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-duration:.1s;-moz-animation-duration:.1s;animation-duration:.1s;-webkit-animation-delay:5s;-moz-animation-delay:5s;animation-delay:5s;text-align:center;padding-top:64px}#klarna-unsupported-page .heading{font-family: \"Klarna Headline\", Helvetica, Arial, sans-serif;color: rgb(23, 23, 23);font-size: 36px;letter-spacing: -0.2px;-webkit-font-smoothing: antialiased;}#klarna-unsupported-page .subheading{font-family: \"Klarna Text\", \"Klarna Sans\", Helvetica, Arial, sans-serif;color: rgb(23, 23, 23);-webkit-font-smoothing: antialiased;line-height: 28px;font-weight: 400;font-size: 19px;max-width: 640px;margin: 20px auto;}#klarna-unsupported-page .reload {cursor: pointer;outline: none;-webkit-tap-highlight-color: rgba(255, 255, 255, 0);border-width: 1px;background-color: rgb(38, 37, 37);border-color: rgb(38, 37, 37);padding: 15px 24px;margin-top: 15px;color: rgb(255, 255, 255);font-family: \"Klarna Text\", \"Klarna Sans\", Helvetica, Arial, sans-serif;font-weight: 500;text-rendering: geometricprecision;font-size: 100%;}\n  </style>\n  <h1 class=\"heading\">Something went wrong</h1>\n  <p class=\"subheading\">Sorry for any inconvenience, please try reloading the checkout page or try again later.</p>\n  <p class=\"subheading\">If the problem persists it maybe be because you are using an old version of the web browser which is not safe nor compatible with modern web sites. For a smoother checkout experience, please install a newer browser.</p>\n  <button class=\"reload\" onclick=\"reloadCheckoutHandler && reloadCheckoutHandler()\">Reload checkout</button>\n  </div>\n  <script id=\"klarna-checkout-context\" type=\"text/javascript\">\n  /* <![CDATA[ */\n  var reloadCheckoutHandler;\n  (function(w,k,i,d,n,c,l){\n    w[k]=w[k]||function(){(w[k].q=w[k].q||[]).push(arguments)};\n    l=w[k].config={\n      container:w.document.getElementById(i),\n      ORDER_URL:'https://js.playground.klarna.com/eu/kco/checkout/orders/f3bdd8e3-bd76-6318-ab18-9b6d64de1fef',\n      AUTH_HEADER:'KlarnaCheckout 1tved9q1d5x665yjyl3d',\n      LOCALE:'fi-FI',\n      ORDER_STATUS:'checkout_incomplete',\n      MERCHANT_NAME:'Your business name',\n      GUI_OPTIONS:[],\n      ALLOW_SEPARATE_SHIPPING_ADDRESS:false,\n      PURCHASE_COUNTRY:'fin',\n      PURCHASE_CURRENCY:'EUR',\n      TESTDRIVE:true,\n      BOOTSTRAP_SRC:'https://js.playground.klarna.com/kcoc/220915-30ba409/checkout.bootstrap.js',\n      FE_EVENTS_DISABLED:'false',      CLIENT_EVENT_HOST:'https://eu.playground.klarnaevt.com'\n    };\n    n=d.createElement('script');\n    c=d.getElementById(i);\n    n.async=!0;\n    n.src=l.BOOTSTRAP_SRC;\n    c.appendChild(n);\n    try{\n      ((w.Image && (new w.Image))||(d.createElement && d.createElement('img'))||{}).src =\n        l.CLIENT_EVENT_HOST + '/v1/checkout/snippet/load' +\n        '?sid=' + l.ORDER_URL.split('/').slice(-1) +\n        '&order_status=' + w.encodeURIComponent(l.ORDER_STATUS) +\n        '&timestamp=' + (new Date).getTime();\n    }catch(e){}\n    reloadCheckoutHandler = function () {\n        try{\n            ((w.Image && (new w.Image))||(d.createElement && d.createElement('img'))||{}).src =\n            l.CLIENT_EVENT_HOST+'/v1/checkout/snippet/reload?sid='+l.ORDER_URL.split('/').slice(-1)+\n            '&order_status='+w.encodeURIComponent(l.ORDER_STATUS)+'&timestamp='+(new Date()).getTime();\n            window.location.reload();\n        }catch(e){}\n    }\n  })(this,'_klarnaCheckout','klarna-checkout-container',document);\n  /* ]]> */\n  </script>\n  <noscript>\nPlease <a href=\"http://enable-javascript.com\">enable JavaScript</a>.\n  </noscript>\n</div>",
                    started_at: '2022-09-18T12:22:41Z',
                    last_modified_at: '2022-09-18T12:22:41Z',
                    options: {
                        allow_separate_shipping_address: false,
                        date_of_birth_mandatory: false,
                        require_validate_callback_success: false,
                    },
                    external_payment_methods: [],
                    external_checkouts: [],
                },
            },
        }),
    ),
    get: jest.fn(() =>
        Promise.resolve({
            data: {
                order: {
                    order_id: 'f3bdd8e3-bd76-6318-ab18-9b6d64de1fef',
                    status: 'checkout_incomplete',
                    purchase_country: 'fi',
                    purchase_currency: 'EUR',
                    locale: 'fi-FI',
                    billing_address: {
                        given_name: 'John',
                        family_name: 'Doe',
                        email: 'john.doe@outlook.com',
                        street_address: 'Johnintie 4 B 67',
                        postal_code: '00910',
                        city: 'Helsinki',
                        phone: '+358401234567',
                        country: 'FI',
                    },
                    shipping_address: {
                        given_name: 'John',
                        family_name: 'Doe',
                        email: 'john.doe@outlook.com',
                        street_address: 'Johnintie 4 B 67',
                        postal_code: '00910',
                        city: 'Helsinki',
                        phone: '+358401234567',
                        country: 'FI',
                    },
                    order_amount: 84,
                    order_tax_amount: 11,
                    order_lines: [
                        {
                            type: 'physical',
                            reference: 'test-id-one',
                            name: 'test product',
                            quantity: 1,
                            unit_price: 2,
                            tax_rate: 2400,
                            total_amount: 2,
                            total_discount_amount: 0,
                            total_tax_amount: 0.39,
                        },
                    ],
                    merchant_urls: {
                        terms: 'http://localhost:3001/ehdot',
                        checkout: 'http://localhost:3001/ostoskori',
                        confirmation:
                            'http://localhost:3001/ostoskori/vahvistus',
                        push: 'http://localhost:8080/api/klarna/push',
                    },
                    html_snippet:
                        "<div id=\"klarna-checkout-container\" style=\"overflow: hidden;\">\n  <div id=\"klarna-unsupported-page\">\n  <style type=\"text/css\">\n  @-webkit-keyframes klarnaFadeIn{from{opacity:0}to{opacity:1}}@-moz-keyframes klarnaFadeIn{from{opacity:0}to{opacity:1}}@keyframes klarnaFadeIn{from{opacity:0}to{opacity:1}}#klarna-unsupported-page{opacity:0;opacity:1\\9;-webkit-animation:klarnaFadeIn ease-in 1;-moz-animation:klarnaFadeIn ease-in 1;animation:klarnaFadeIn ease-in 1;-webkit-animation-fill-mode:forwards;-moz-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-duration:.1s;-moz-animation-duration:.1s;animation-duration:.1s;-webkit-animation-delay:5s;-moz-animation-delay:5s;animation-delay:5s;text-align:center;padding-top:64px}#klarna-unsupported-page .heading{font-family: \"Klarna Headline\", Helvetica, Arial, sans-serif;color: rgb(23, 23, 23);font-size: 36px;letter-spacing: -0.2px;-webkit-font-smoothing: antialiased;}#klarna-unsupported-page .subheading{font-family: \"Klarna Text\", \"Klarna Sans\", Helvetica, Arial, sans-serif;color: rgb(23, 23, 23);-webkit-font-smoothing: antialiased;line-height: 28px;font-weight: 400;font-size: 19px;max-width: 640px;margin: 20px auto;}#klarna-unsupported-page .reload {cursor: pointer;outline: none;-webkit-tap-highlight-color: rgba(255, 255, 255, 0);border-width: 1px;background-color: rgb(38, 37, 37);border-color: rgb(38, 37, 37);padding: 15px 24px;margin-top: 15px;color: rgb(255, 255, 255);font-family: \"Klarna Text\", \"Klarna Sans\", Helvetica, Arial, sans-serif;font-weight: 500;text-rendering: geometricprecision;font-size: 100%;}\n  </style>\n  <h1 class=\"heading\">Something went wrong</h1>\n  <p class=\"subheading\">Sorry for any inconvenience, please try reloading the checkout page or try again later.</p>\n  <p class=\"subheading\">If the problem persists it maybe be because you are using an old version of the web browser which is not safe nor compatible with modern web sites. For a smoother checkout experience, please install a newer browser.</p>\n  <button class=\"reload\" onclick=\"reloadCheckoutHandler && reloadCheckoutHandler()\">Reload checkout</button>\n  </div>\n  <script id=\"klarna-checkout-context\" type=\"text/javascript\">\n  /* <![CDATA[ */\n  var reloadCheckoutHandler;\n  (function(w,k,i,d,n,c,l){\n    w[k]=w[k]||function(){(w[k].q=w[k].q||[]).push(arguments)};\n    l=w[k].config={\n      container:w.document.getElementById(i),\n      ORDER_URL:'https://js.playground.klarna.com/eu/kco/checkout/orders/f3bdd8e3-bd76-6318-ab18-9b6d64de1fef',\n      AUTH_HEADER:'KlarnaCheckout 1tved9q1d5x665yjyl3d',\n      LOCALE:'fi-FI',\n      ORDER_STATUS:'checkout_incomplete',\n      MERCHANT_NAME:'Your business name',\n      GUI_OPTIONS:[],\n      ALLOW_SEPARATE_SHIPPING_ADDRESS:false,\n      PURCHASE_COUNTRY:'fin',\n      PURCHASE_CURRENCY:'EUR',\n      TESTDRIVE:true,\n      BOOTSTRAP_SRC:'https://js.playground.klarna.com/kcoc/220919-10063c4/checkout.bootstrap.js',\n      FE_EVENTS_DISABLED:'false',      CLIENT_EVENT_HOST:'https://eu.playground.klarnaevt.com'\n    };\n    n=d.createElement('script');\n    c=d.getElementById(i);\n    n.async=!0;\n    n.src=l.BOOTSTRAP_SRC;\n    c.appendChild(n);\n    try{\n      ((w.Image && (new w.Image))||(d.createElement && d.createElement('img'))||{}).src =\n        l.CLIENT_EVENT_HOST + '/v1/checkout/snippet/load' +\n        '?sid=' + l.ORDER_URL.split('/').slice(-1) +\n        '&order_status=' + w.encodeURIComponent(l.ORDER_STATUS) +\n        '&timestamp=' + (new Date).getTime();\n    }catch(e){}\n    reloadCheckoutHandler = function () {\n        try{\n            ((w.Image && (new w.Image))||(d.createElement && d.createElement('img'))||{}).src =\n            l.CLIENT_EVENT_HOST+'/v1/checkout/snippet/reload?sid='+l.ORDER_URL.split('/').slice(-1)+\n            '&order_status='+w.encodeURIComponent(l.ORDER_STATUS)+'&timestamp='+(new Date()).getTime();\n            window.location.reload();\n        }catch(e){}\n    }\n  })(this,'_klarnaCheckout','klarna-checkout-container',document);\n  /* ]]> */\n  </script>\n  <noscript>\nPlease <a href=\"http://enable-javascript.com\">enable JavaScript</a>.\n  </noscript>\n</div>",
                    started_at: '2022-09-18T12:22:41Z',
                    last_modified_at: '2022-09-18T12:22:41Z',
                    options: {
                        allow_separate_shipping_address: false,
                        date_of_birth_mandatory: false,
                        require_validate_callback_success: false,
                    },
                    external_payment_methods: [],
                    external_checkouts: [],
                },
            },
        }),
    ),
};
