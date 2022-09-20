import axios, { AxiosRequestHeaders } from 'axios';
import { ICreatedKlarnaOrder, IKlarnaSDK } from './@types/types';

/**
 * Klarna checkout method to mark an order as aborted
 * @param {IKlarnaSDK} klarnaSDK
 * @param {string} orderId
 * @returns {ICreatedKlarnaOrder}
 */
export async function markAnOrderAsAborted(
    klarnaSDK: IKlarnaSDK,
    orderId: string,
): Promise<ICreatedKlarnaOrder> {
    const { klarnaUri, headers } = klarnaSDK;
    const { data } = await axios.post(`${klarnaUri}/${orderId}`, null, {
        headers: headers as unknown as AxiosRequestHeaders,
    });
    return data.order;
}
