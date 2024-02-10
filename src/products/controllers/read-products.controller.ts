import { Controller, Get, Post, Body, BadRequestException, Param } from '@nestjs/common';
import { CreateProductsService } from '../services/crete-products.service';
import { ReadProductsService } from '../services/read-products.service';
import { ProductDto } from '../dto/product.dto';


@Controller('products')
export class ReadProductsController {
    constructor(
        private readonly readProductsService: ReadProductsService,
        private readonly createProductsService: CreateProductsService) { }

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
            return e
        }

    }





    @Post('create_product')
    async createNewProduct(@Body() createProductDto: ProductDto) {

        const { sku,
            product_name,
            product_image_url,
            retail_price,
            product_category,
            product_variation,
            product_description,
            product_quantity,
            is_out_of_stock } = createProductDto



        try {
            return await this.createProductsService.createNewProduct(
                {
                    sku,
                    product_name,
                    product_image_url,
                    retail_price,
                    product_category,
                    product_variation,
                    product_description,
                    product_quantity,
                    is_out_of_stock
                }
            )
        } catch (e) {

            throw new BadRequestException("Missing Fields")
        }
    }



}


