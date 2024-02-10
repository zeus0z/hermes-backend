import { Controller, Delete, Param } from "@nestjs/common";
import { DeleteProductsService } from "../services/delete-products.service";
import prisma from "src/config/prisma-client";


@Controller('products')
export class DeleteProductsController {
    constructor(private readonly deleteProductsService: DeleteProductsService){}


    @Delete('/delete/:id')
    async deleteProductWithId(@Param('id') id:number):Promise<any>{
        try{
            await this.deleteProductsService.deleteProductWithID(Number(id))
            return `Product with ID ${id} deleted successfully!`
        } catch (e) {
            return e
        } finally{
            await prisma.$disconnect()
        }
    }

}