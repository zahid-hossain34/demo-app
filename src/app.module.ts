import { Logger, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import mongoose from 'mongoose';

@Module({
  imports: [
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}