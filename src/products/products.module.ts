import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductSchema } from './products.model';

@Module({
  imports: [],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
