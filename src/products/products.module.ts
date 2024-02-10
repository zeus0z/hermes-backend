import { Module } from '@nestjs/common';
import { CreateProductsController } from './controllers/create-products.controller';
import { ReadProductsController } from './controllers/read-products.controller';
import { CreateProductsService } from './services/crete-products.service';
import { ReadProductsService } from './services/read-products.service';

@Module({
    controllers: [CreateProductsController, ReadProductsController],
    providers: [CreateProductsService, ReadProductsService]
})

export class ProductsModule { }
