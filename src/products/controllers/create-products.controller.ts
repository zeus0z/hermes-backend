import { Post, Body, BadRequestException, Controller } from '@nestjs/common';
import { CreateProductsService } from '../services/create-products.service';
import { ProductDto } from '../dto/product.dto';



@Controller('products')
export class CreateProductsController  {
    constructor(
        private readonly createProductsService: CreateProductsService) {
       
    }


    @Post('create')
    async createNewProduct(@Body() productDto: ProductDto) {

        const { sku,
            product_name,
            product_image_url,
            retail_price,
            product_category,
            product_variation,
            product_description,
            product_quantity
            } = productDto



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
                    product_quantity
                   
                }
            )
        } catch (e) {

            throw new BadRequestException("Missing Fields")
        }
    }



}


