import axios, { AxiosRequestHeaders } from 'axios';
import { ICreatedKlarnaOrder, IKlarnaSDK, IKlarnaOrder } from './@types/types';

/**
 * Klarna checkout method to create an order
 * @param {IKlarnaSDK} klarnaSDK
 * @param {IKlarnaOrder} order
 * @returns {ICreatedKlarnaOrder}
 */
export async function createOrder(
    klarnaSDK: IKlarnaSDK,
    order: IKlarnaOrder,
): Promise<ICreatedKlarnaOrder> {
    const { klarnaUri, headers } = klarnaSDK;
    const { data } = await axios.post(klarnaUri as unknown as string, order, {
        headers: headers as unknown as AxiosRequestHeaders,
    });
    return data;
}
