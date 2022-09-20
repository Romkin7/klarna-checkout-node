import { ICreatedKlarnaOrder, IInit, IKlarnaOrder, IKlarnaSDK } from './types';

declare function initialize(init: IInit): IKlarnaSDK;
declare function createOrder(
    klarnaSDK: IKlarnaSDK,
    order: IKlarnaOrder,
): Promise<ICreatedKlarnaOrder>;
declare function getOrder(
    klarnaSDK: IKlarnaSDK,
    orderId: string,
): Promise<ICreatedKlarnaOrder>;
declare function updateOrder(
    klarnaSDK: IKlarnaSDK,
    klarnaOrder: ICreatedKlarnaOrder,
): Promise<ICreatedKlarnaOrder>;
declare function markAnOrderAsAborted(
    klarnaSDK: IKlarnaSDK,
    orderId: string,
): Promise<ICreatedKlarnaOrder>;
