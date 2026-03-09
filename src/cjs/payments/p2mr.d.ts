import { Payment, PaymentOpts } from './index.js';
/**
 * Creates a Pay-to-Taproot-Script-Hash (P2MR) payment object.
 *
 * @param a - The payment object containing the necessary data for P2MR.
 * @param opts - Optional payment options.
 * @returns The P2MR payment object.
 * @throws {TypeError} If the provided data is invalid or insufficient.
 */
export declare function p2mr(a: Payment, opts?: PaymentOpts): Payment;
