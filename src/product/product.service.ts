import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async store(createProductDto: CreateProductDto): Promise<Product> {
    const createProduct = new this.productModel(createProductDto);
    return createProduct.save();
  }

  async list(): Promise<Product[]> {
    return this.productModel.find();
  }

  async findById(productId: string): Promise<Product> {
    return this.productModel.findById(productId);
  }

  async delete(productId: string): Promise<{ deletedCount?: number }> {
    return this.productModel.deleteOne({ _id: productId }).exec();
  }

  async update(
    productId: string,
    createProductDto: CreateProductDto,
  ): Promise<Product> {
    const updatedProduct = await this.productModel
      .findByIdAndUpdate(productId, createProductDto, { new: true })
      .exec();

    if (!updatedProduct) {
      throw new Error('Product not found');
    }

    return updatedProduct;
  }
}
