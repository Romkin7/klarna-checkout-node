import axios, { AxiosRequestHeaders } from 'axios';
import { ICreatedKlarnaOrder, IKlarnaSDK } from './@types/types';

/**
 * Klarna checkout method to get an order
 * @param {IKlarnaSDK} klarnaSDK
 * @param {string} orderId
 * @returns {ICreatedKlarnaOrder}
 */
export async function getOrder(
    klarnaSDK: IKlarnaSDK,
    orderId: string,
): Promise<ICreatedKlarnaOrder> {
    const { data } = await axios.get(
        `${klarnaSDK.klarnaUri as unknown as string}/${orderId}`,
        {
            headers: klarnaSDK.headers as unknown as AxiosRequestHeaders,
        },
    );
    return data;
}
