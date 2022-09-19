import { ICreatedKlarnaOrder, IInit, IKlarnaOrder, IKlarnaSDK } from './types';

declare function initialize(init: IInit): IKlarnaSDK;
declare function createOrder(
    klarnaSDK: IKlarnaSDK,
    order: IKlarnaOrder,
): ICreatedKlarnaOrder;
declare function getOrder(
    klarnaSDK: IInit,
    orderId: string,
): ICreatedKlarnaOrder;
declare function updateOrder(
    klarnaSDK: IKlarnaSDK,
    klarnaOrder: ICreatedKlarnaOrder,
): ICreatedKlarnaOrder;
