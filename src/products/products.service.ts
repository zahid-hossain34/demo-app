import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProductModel } from './products.model';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interface/product.interface';

@Injectable()
export class ProductsService {
    constructor(
    ){}
    async create(createProductDto: CreateProductDto): Promise<Product> {
        const createdProduct = new ProductModel(createProductDto);
        return await createdProduct.save();
      }
    
      async findAll(): Promise<Product[]> {
        return await ProductModel.find().exec();
      }
    
      async findOne(id: string): Promise<Product> {
        return await ProductModel.findById(id).exec();
      }
    
      async update(id: string, createProductDto: CreateProductDto): Promise<Product> {
        return await ProductModel.findByIdAndUpdate(id, createProductDto, { new: true }).exec();
      }
    
      async delete(id: string): Promise<Product> {
        return await ProductModel.findByIdAndDelete(id).exec();
      }
}
