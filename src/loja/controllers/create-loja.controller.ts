import { Controller,Post, Body, BadRequestException } from '@nestjs/common';
import { LojaCreateService } from '../loja-create.service';
import { CreateProductDto } from '../dto/create-product.dto';


@Controller('loja')
export class CreateLojaController {
    constructor(
        private readonly lojaCreateService: LojaCreateService) { }


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
            return await this.lojaCreateService.createNewProduct(
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


