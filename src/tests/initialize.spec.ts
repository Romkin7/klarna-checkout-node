import { IKlarnaSDK } from '../@types/types';
import { initialize } from '../initialize';

describe('klarna checkout initialize function tests', () => {
    it('initialize function returns headers and klarnaUri', () => {
        const live = process.env.NODE_ENV === 'production' ? true : false;
        const EID = process.env.EID as string;
        const KLARNA_SECRET = process.env.KLARNA_SECRET as string;
        const klarnaSDK: IKlarnaSDK = initialize({
            eid: EID,
            secret: KLARNA_SECRET,
            live,
        });

        expect(klarnaSDK).toStrictEqual({
            headers: {
                Authorization:
                    'Basic  UEs3OTY3OF8zMjExNzhwOTU4OTpXdWN3ejFCZXlKMU5DR3A1',
                'Content-Type': 'application/json',
            },
            klarnaUri: 'https://api.playground.klarna.com/checkout/v3/orders',
        });
    });
    it('initialize function throws an error with missing eid', () => {
        const live = process.env.NODE_ENV === 'production' ? true : false;
        const EID = '';
        const KLARNA_SECRET = process.env.KLARNA_SECRET as string;

        expect(() =>
            initialize({
                eid: EID,
                secret: KLARNA_SECRET,
                live,
            }),
        ).toThrowError('Invalid or missing credentials.');
    });
    it('initialize function throws an error with missing secret', () => {
        const live = process.env.NODE_ENV === 'production' ? true : false;
        const EID = process.env.EID as string;
        const KLARNA_SECRET = '';

        expect(() =>
            initialize({
                eid: EID,
                secret: KLARNA_SECRET,
                live,
            }),
        ).toThrowError('Invalid or missing credentials.');
    });
});
