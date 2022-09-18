# Klarna checkout Node

<img src="https://res.cloudinary.com/halkoliiteri/image/upload/v1663523265/rollingrecords/klarna_logo_wonnpy.png" alt="Klarna Checkout logo" with="100px" height="100px" /><img src="https://res.cloudinary.com/halkoliiteri/image/upload/v1663523265/rollingrecords/node-js-new_izpsyb.png" alt="Node.js logo" width="100px" height="107px" />

Promise based client for **node.js**, for interaction with
[Klarna checkout API V3](https://docs.klarna.com/klarna-checkout/api/#tag/order).

## Setting up playground Klarna Merchant portal

Sign up to playground Klarna
[Merchant portal](https://auth.playground.eu.portal.klarna.com/auth/realms/merchants/protocol/openid-connect/auth?client_id=merchant-portal&redirect_uri=https%3A%2F%2Fportal.playground.klarna.com%2Forders&state=8a193f2a-d3fb-471b-ae40-88b215da2ebe&response_mode=fragment&response_type=code&scope=openid&nonce=d91dd7a8-2157-4dd0-87a0-aeb07ed166b0&code_challenge=kWT--nIE4eyY97yqmkLK9bIew-Gm1pMdD94hLRTzqZc&code_challenge_method=S256)
& and Create your Klarna checkout API **credentials** under Settings.

## &#128190; Install

You can install `klarna-checkout-node` with npm, yarn or pnpm.

### Using npm:

`npm install klarna-checkout-node --save`

### Using yarn:

`yarn add klarna-checkout-node`

### Using pnpm:

`pnpm add klarna-checkout-node`

## Usage

`klarna-checkout-node` is shipped with full support for TypeScript, ESM Modules
and Commonjs. This means that package can be used with `import` &amp; `export`
syntax and `module.exports` &amp; `require` syntax.

### Usage with TypeScript

**Example code:**

```TypeScript
import { initialize, createOrder, getOrder, IKlarnaSDK, IKlarnaOrder } from 'klarna-checkout-node';

/** initialize klarna SDK, with your credentials, that you can get from playground merchant portal settings page. */
const klarnaSDK: IKlarnaSDK = initialize(
    {
        eid: process.env.EID,
        secret: process.env.KLARNA_SECRET,
        live: process.env.NODE_ENV === 'production' ? true : false
    }
);

const order: IKlarnaOrder = {
            order_lines: [
                {
                    reference: 'test-id-one',
                    name: 'test product',
                    unit_price: 2,
                    quantity: 1,
                    total_tax_amount: 0.39,
                    total_discount_amount: 0,
                    total_amount: 2,
                    tax_rate: 2400,
                    image_uri:
                        'https://res.cloudinary.com/image/upload/v1662557938/dpcd0a3jqbbozy1ygmxt.jpg',
                    uri: 'https://rollingrecords.fi/lp:t/test-id-one',
                    type: 'physical',
                },
            ],
            order_amount: 2,
            order_tax_amount: 0.39,
            purchase_country: 'US',
            purchase_currency: 'USD',
            locale: 'us-US',
            merchant_urls: {
                checkout: 'http://localhost:3000/ostoskori',
                confirmation: 'http://localhost:3000/ostoskori/vahvistus',
                push: 'http://localhost:8080/klarna/push',
                terms: 'http://localhost:3000/ehdot',
            },
            billing_adress: {
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
        };
        /** Create order and render payment info in the client from html_snippet property. */
        const newKlarnaOrder = await createOrder(klarnaSDK, order);
        /** Get order and render successfull order in the client from html_snippet property. */
        const klarnaOrder = await getOrder(klarnaSDK, newKlarnaOrder.order_id);

```

### Usage with Commonjs

**Example code:**

```js
const { initialize, createOrder, getOrder } = require('klarna-checkout-node');

/** initialize klarna SDK, with your credentials, that you can get from playground merchant portal settings page. */
const klarnaSDK = initialize({
    eid: process.env.EID,
    secret: process.env.KLARNA_SECRET,
    live: process.env.NODE_ENV === 'production' ? true : false,
});

const order = {
    order_lines: [
        {
            reference: 'test-id-one',
            name: 'test product',
            unit_price: 2,
            quantity: 1,
            total_tax_amount: 0.39,
            total_discount_amount: 0,
            total_amount: 2,
            tax_rate: 2400,
            image_uri:
                'https://res.cloudinary.com/image/upload/v1662557938/dpcd0a3jqbbozy1ygmxt.jpg',
            uri: 'https://rollingrecords.fi/lp:t/test-id-one',
            type: 'physical',
        },
    ],
    order_amount: 2,
    order_tax_amount: 0.39,
    purchase_country: 'US',
    purchase_currency: 'USD',
    locale: 'us-US',
    merchant_urls: {
        checkout: 'http://localhost:3000/ostoskori',
        confirmation: 'http://localhost:3000/ostoskori/vahvistus',
        push: 'http://localhost:8080/klarna/push',
        terms: 'http://localhost:3000/ehdot',
    },
    billing_adress: {
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
};
/** Create order and render payment info in the client from html_snippet property. */
const newKlarnaOrder = await createOrder(klarnaSDK, order);
/** Get order and render successfull order in the client from html_snippet property. */
const klarnaOrder = await getOrder(klarnaSDK, newKlarnaOrder.order_id);
```
