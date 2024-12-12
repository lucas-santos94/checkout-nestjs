import { Address } from '../../address/interfaces/address.interface';

export interface Customer {
  name: string;
  cpf: string;
  email: string;
  phone: string;
  address?: Address;
  notificationDisabled?: boolean;
  createdAt: Date;
  updatedAt: Date;
}
