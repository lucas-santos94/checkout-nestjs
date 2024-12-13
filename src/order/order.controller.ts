import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post()
  store(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.store(createOrderDto);
  }
}
