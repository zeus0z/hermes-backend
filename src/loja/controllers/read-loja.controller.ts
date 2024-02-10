import { Controller, Get, Post, Body, BadRequestException, Param } from '@nestjs/common';
import { LojaCreateService } from '../loja-create.service';
import { LojaReadService } from '../loja-read.service';
import { IProdutos } from '../interfaces/produto.interface';
import { CreateProductDto } from '../dto/create-product.dto';


@Controller('loja')
export class ReadLojaController {
    constructor(
        private readonly lojaReadService: LojaReadService,
        private readonly lojaCreateService: LojaCreateService) { }

    @Get('get_all')
    async returnAllProducts(): Promise<any> {
        try {
            return await this.lojaReadService.getAllProducts()
        } catch (e) {
            console.error(e)
            throw e
        }
    }

    @Get(':id')
     async getSingleProductById(@Param('id') id:number):Promise<CreateProductDto>{
         try{
             return await this.lojaReadService.getSingleProductById(Number(id))
         } catch (e){
             return e
         }
      
    }

    @Get('/name/:name')
     async getProductsByName(@Param('name') name:string):Promise<CreateProductDto>{
         try{
             return await this.lojaReadService.getAllProductsByName(name)
         } catch (e){
             return e
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
            return await this.lojaCreateService.createNewProduct(
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


