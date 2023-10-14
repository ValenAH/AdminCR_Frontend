import { PaymentMethod } from "./paymentMethod.model"

export interface Payment {
    id: number
    paymentMethod: PaymentMethod,
    amount: number,
    date: Date
}