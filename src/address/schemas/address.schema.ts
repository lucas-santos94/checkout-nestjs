import { Schema } from 'mongoose';

export const AddressSchema = new Schema(
  {
    street: { type: String, required: true },
    number: { type: String },
    complement: { type: String },
    province: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
  },
  { _id: false },
);
