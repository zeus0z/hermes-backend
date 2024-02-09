import { Controller, Get, Post, Body, BadRequestException } from '@nestjs/common';
import { LojaService } from './loja.service';
import { IProdutos } from './interfaces/produto.interface';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('loja')
export class LojaController {
    constructor(
        private readonly lojaService: LojaService) { }

    @Get('get_all')
    async returnAllProducts(): Promise<any> {
        try {
            return await this.lojaService.getAllProducts()
        } catch (e) {
            console.error(e)
            throw e
        }
    }

    

    @Post('create_product')
    async createNewProduct(@Body() createProductDto: CreateProductDto) {

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
            return await this.lojaService.createNewProduct(
                {sku,
                product_name,
                product_image_url,
                retail_price,
                product_category,
                product_variation,
                product_description,
                product_quantity,
                is_out_of_stock}
                )
        } catch (e) {
          
            throw new BadRequestException("Missing Fields")
        }
    }



}


