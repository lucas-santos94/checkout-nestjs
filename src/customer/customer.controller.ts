import { Body, Controller, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Post()
  store(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.store(createCustomerDto);
  }
}
