# Klarna checkout Node

<img src="./resources/klarna_logo.png" alt="Klarna Checkout logo" with="100px" height="100px" /> <img src="./resources/node-js-new.png" alt="Node.js logo" width="100px" height="107px" />

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

```TypeScript
import { Initialize, createOrder, getOrder, IInitReturn, IKlarnaOrder } from 'klarna-checkout-node';

const klarnaSDK: IIn = Initialize(
    {
        eid: process.env.EID, 
        secret: process.env.KLARNA_SECRET, 
        live: process.env.NODE_ENV === 'production' ? true : false 
    }
);

const order: IKlarnaOrder = {} 

```

### Usage with Commonjs

```js
const { Initialize, createOrder, getOrder } = require('klarna-checkout-node');
```
