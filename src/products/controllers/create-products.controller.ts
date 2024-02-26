import { Post, Body, BadRequestException, Controller } from '@nestjs/common';
import { CreateProductsService } from '../services/create-products.service';
import { ProductDto } from '../dto/product.dto';
import { ReadProductsService } from '../services/read-products.service';



@Controller('products')
export class CreateProductsController {
    constructor(
        private readonly createProductsService: CreateProductsService,
        private readonly readProductsService: ReadProductsService) { }
        


    @Post('create')
    async createNewProduct(@Body() productDto: ProductDto) {

        const { sku,
            product_name,
            product_image_url,
            product_description,
        } = productDto

       const retail_price = Number(productDto.retail_price)
       const product_category = Number(productDto.product_category)
       const product_quantity = Number(productDto.product_quantity)

      

        try {
             await this.createProductsService.createNewProduct(
                {
                    sku,
                    product_name,
                    product_image_url,
                    retail_price,
                    product_category,
                    product_description,
                    product_quantity
                }
            )

            return this.readProductsService.getAllProductsByName(product_name);
            

        } catch (e) {
            throw e
        }
    }

}


