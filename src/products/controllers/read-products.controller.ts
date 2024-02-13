import { Controller, Get, Param } from '@nestjs/common';
import { ReadProductsService } from '../services/read-products.service';
import { ProductDto } from '../dto/product.dto';



@Controller('products')
export class ReadProductsController {
    constructor(
        private readonly readProductsService: ReadProductsService) { }

    @Get('get_all')
    async returnAllProducts(): Promise<any> {
        try {
            return await this.readProductsService.getAllProducts()

        } catch (e) {
            console.error(e)
            throw e
        }
    }

    @Get(':id')
    async getSingleProductById(@Param('id') id: number): Promise<ProductDto> {
        try {
            return await this.readProductsService.getSingleProductById(Number(id))
        } catch (e) {
            return e
        }

    }

    @Get('/name/:name')
    async getProductsByName(@Param('name') name: string): Promise<ProductDto> {
        try {
            return await this.readProductsService.getAllProductsByName(name)
        } catch (e) {
            console.error(e)
            return e
        }

    }



}


