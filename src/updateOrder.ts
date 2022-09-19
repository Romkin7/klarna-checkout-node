import axios, { AxiosRequestHeaders } from 'axios';
import { ICreatedKlarnaOrder, IKlarnaSDK } from './@types/types';

/**
 * Klarna checkout method to update an order
 * @param {IKlarnaSDK} klarnaSDK
 * @param {ICreatedKlarnaOrder} klarnaOrder
 * @return {ICreatedKlarnaOrder}
 */
export async function updateOrder(
    klarnaSDK: IKlarnaSDK,
    klarnaOrder: ICreatedKlarnaOrder,
): Promise<ICreatedKlarnaOrder> {
    const { klarnaUri, headers } = klarnaSDK;
    const { order_id } = klarnaOrder;
    const { data } = (await axios.post(
        `${klarnaUri as unknown as string}/${order_id}`,
        klarnaOrder,
        {
            headers: headers as unknown as AxiosRequestHeaders,
        },
    )) as unknown as { data: { order: ICreatedKlarnaOrder } };
    return data.order;
}
