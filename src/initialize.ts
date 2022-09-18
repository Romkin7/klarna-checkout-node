import { IInit, IKlarnaSDK, IKlarnaUrls } from './@types/types';
import { klarnaUrls } from './klarnaUri';
import { setHeaders } from './setHeaders';

/**
 * initialize Klarna checkout method
 * @param {IInit} init
 * @returns {IKlarnaSDK}
 */
export function initialize(init: IInit): IKlarnaSDK {
    const { eid, secret, live } = init;
    if (!eid || !secret) {
        throw new Error('Invalid or missing credentials.');
    }
    const headers = setHeaders(init);
    const klarnaUri = live
        ? (klarnaUrls.live as unknown as IKlarnaUrls)
        : (klarnaUrls.test as unknown as IKlarnaUrls);
    return {
        headers,
        klarnaUri,
    };
}
