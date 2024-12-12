import { Items } from './items.interface';

export interface Order {
  customer: string;
  status: string;
  amount: number;
  paymentMethod: string;
  items: Items[];
}
