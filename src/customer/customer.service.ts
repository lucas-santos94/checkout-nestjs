import { HttpException, Injectable } from '@nestjs/common';
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
    const { cpf, email } = createCustomerDto;

    const existingCustomerCpf = await this.customerModel
      .findOne({ cpf: cpf })
      .exec();

    if (existingCustomerCpf) {
      throw new HttpException(`Cliente com o cpf ${cpf} já cadastrado`, 409);
    }

    const existingCustomerEmail = await this.customerModel
      .findOne({ email: email })
      .exec();

    if (existingCustomerEmail) {
      throw new HttpException(
        `Cliente com o email ${email} já cadastrado`,
        409,
      );
    }

    const createCustomer = new this.customerModel(createCustomerDto);
    return createCustomer.save();
  }

  async findById(customerId: string): Promise<Customer> {
    const customer = await this.customerModel.findById(customerId);
    if (!customer) {
      throw new HttpException(`Cliente não encontrado`, 404);
    }
    return customer;
  }

  async findAll(): Promise<Customer[]> {
    return this.customerModel.find();
  }
}
