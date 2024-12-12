import { Schema } from 'mongoose';

export const ItemsSchema = new Schema({
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});
