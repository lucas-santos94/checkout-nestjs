import { Schema } from 'mongoose';
import { AddressSchema } from '../../address/schemas/address.schema';

export const CustomerSchema = new Schema(
  {
    name: { type: String, required: true },
    cpf: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: AddressSchema },
    notificationDisabled: { type: Boolean },
  },
  { timestamps: true },
);
