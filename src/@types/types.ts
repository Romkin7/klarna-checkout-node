import { LOCALE } from './locales';
import { PURCHASE_COUNTRY } from './purchaseCountries';
import { PURCHASE_CURRENCY } from './purchaseCurrencies';
import {
    createOrder,
    getOrder,
    initialize,
    updateOrder,
    markAnOrderAsAborted,
} from './declarations';

export type VatUnits = 2400 | 1000;
export interface IKlarnaUrls {
    /** Test env url */
    test: 'https://api.playground.klarna.com/checkout/v3/orders';
    /** Live env url */
    live: 'https://api.klarna.com/checkout/v3/orders';
}

export interface IHeaders {
    'Content-Type': 'application/json';
    Authorization: string;
}

export interface IKlarnaSDK {
    headers: IHeaders;
    klarnaUri: IKlarnaUrls;
}

export interface IInit {
    eid: string;
    secret: string;
    live: boolean;
}

export interface IMerchantUrls {
    terms: null | string;
    checkout: null | string;
    confirmation: null | string;
    push: null | string;
}

/** Klarna order */
export type UnitTypes = 'physical' | 'discount' | 'shipping_fee' | 'gift_card';

export interface IAddress {
    given_name: string;
    family_name: string;
    organization_name?: string;
    email: string;
    title?: string;
    street_address: string;
    street_address2?: string;
    street_name?: string;
    street_number?: string;
    house_extension?: string;
    postal_code: string;
    city: string;
    region?: string;
    phone: string;
    country: PURCHASE_COUNTRY;
    care_of?: 'C/O';
    reference?: string;
    attention?: string;
}

export interface IOrderItem {
    reference: string;
    name: string;
    quantity: number;
    total_tax_amount: number;
    unit_price: number;
    total_amount: number;
    total_discount_amount: number;
    tax_rate: VatUnits;
    image_uri: string;
    uri: string;
    type: UnitTypes;
}
export interface IKlarnaOrder {
    order_lines: IOrderItem[];
    order_amount: number;
    order_tax_amount: number;
    purchase_country: PURCHASE_COUNTRY;
    purchase_currency: PURCHASE_CURRENCY;
    locale: LOCALE;
    merchant_urls: IMerchantUrls;
    billing_adress: IAddress;
    shipping_address: IAddress;
}

export interface ICreatedKlarnaOrder {
    order_id: string;
    status: 'checkout_incomplete';
    purchase_country: PURCHASE_COUNTRY;
    purchase_currency: PURCHASE_CURRENCY;
    locale: LOCALE;
    billing_address: IAddress;
    shipping_address: IAddress;
    order_amount: number;
    order_tax_amount: number;
    order_lines: IOrderItem[];
    merchant_urls: {
        terms: string;
        checkout: string;
        confirmation: string;
        push: string;
    };
    html_snippet: string;
    started_at: Date;
    last_modified_at: Date;
    options: {
        allow_separate_shipping_address: false;
        date_of_birth_mandatory: false;
        require_validate_callback_success: false;
    };
    external_payment_methods: [];
    external_checkouts: [];
}

export {
    initialize,
    createOrder,
    updateOrder,
    markAnOrderAsAborted,
    getOrder,
    LOCALE,
    PURCHASE_COUNTRY,
    PURCHASE_CURRENCY,
};
