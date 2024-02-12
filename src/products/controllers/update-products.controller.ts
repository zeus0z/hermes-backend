import { Body, Controller, Param, Put } from "@nestjs/common";

import { UpdateProductsService } from "../services/update-products.service";
import { ReadProductsService } from "../services/read-products.service";
import { ProductDto } from "../dto/product.dto";



@Controller('products')
export class UpdateProductsController {

    constructor(
        private readonly updateProductsService: UpdateProductsService,
        private readonly readProductsService: ReadProductsService
    ) { }

 


    @Put('update/:id')
    async updateProductWithId(@Param('id') id: number, @Body() updateProductData: ProductDto): Promise<any> {
        try {
            await this.updateProductsService.updateProductWithId(Number(id), updateProductData)
            return await this.readProductsService.getSingleProductById(Number(id))
        } catch (e) {
            return e
        }

    }


}