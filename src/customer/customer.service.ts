import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel('Customer') private readonly customerModel: Model<Customer>,
  ) {}

  async store(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const createCustomer = new this.customerModel(createCustomerDto);
    return createCustomer.save();
  }
}
