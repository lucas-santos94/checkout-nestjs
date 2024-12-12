import { Schema } from 'mongoose';
import { ItemsSchema } from './items.schema';

export const OrderSchema = new Schema(
  {
    customer: { type: String, required: true },
    status: { type: String, required: true },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
    items: { type: [{ ItemsSchema }], required: true },
  },
  { timestamps: true },
);
