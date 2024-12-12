import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerIdDto } from "./dto/customer-id.dto";

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Post()
  store(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.store(createCustomerDto);
  }

  @Get('/:customerId')
  findById(@Param() params: CustomerIdDto) {
    return this.customerService.findById(params.customerId);
  }
}
