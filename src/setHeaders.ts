import { IHeaders, IInit } from './@types/types';

/**
 * @method setHeaders Headers builder
 * @param {IInit} init
 * @returns {IHeaders} headers object, which contain Content-Type and Authorization headers
 */
export function setHeaders(init: IInit): IHeaders {
    const token = `Basic  ${Buffer.from(`${init.eid}:${init.secret}`).toString(
        'base64',
    )}`;
    return {
        'Content-Type': 'application/json',
        Authorization: token,
    };
}
