import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductIdDto } from './dto/productId.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  store(@Body() createProductDto: CreateProductDto) {
    return this.productService.store(createProductDto);
  }

  @Get()
  list() {
    return this.productService.list();
  }

  @Get('/:productId')
  findById(@Param() params: ProductIdDto) {
    return this.productService.findById(params.productId);
  }

  @Delete('/:productId')
  async delete(@Param() params: ProductIdDto) {
    const result = await this.productService.delete(params.productId);

    if (result.deletedCount === 0) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }

    return { message: 'Product deleted successfully' };
  }

  @Put('/:productId')
  async update(
    @Param() params: ProductIdDto,
    @Body() createProductDto: CreateProductDto,
  ) {
    const updatedProduct = await this.productService.update(
      params.productId,
      createProductDto,
    );
    return { message: 'Product updated successfully', product: updatedProduct };
  }
}
