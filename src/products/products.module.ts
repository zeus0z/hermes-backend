import { Module } from '@nestjs/common';
import { CreateProductsController } from './controllers/create-products.controller';
import { ReadProductsController } from './controllers/read-products.controller';
import { CreateProductsService } from './services/create-products.service';
import { ReadProductsService } from './services/read-products.service';
import { DeleteProductsController } from './controllers/delete-products.controller';
import { DeleteProductsService } from './services/delete-products.service';
import { UpdateProductsController } from './controllers/update-products.controller';
import { UpdateProductsService } from './services/update-products.service';

@Module({
    controllers: [
        CreateProductsController,
        ReadProductsController,
        DeleteProductsController,
        UpdateProductsController
    ],
    providers: [
        CreateProductsService,
        ReadProductsService,
        DeleteProductsService,
        UpdateProductsService
    ]
})

export class ProductsModule { }
