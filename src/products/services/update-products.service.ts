import { Injectable } from "@nestjs/common";
import prisma from "src/config/prisma-client";
import { ProductDto } from "../dto/product.dto";


@Injectable()
export class UpdateProductsService {

    async updateProductWithId( {
        id,
        sku,
        product_name,
        product_image_url,
        retail_price,
        product_category,
        product_description,
        product_quantity
    }: ProductDto): Promise<any> {
        try {
            await prisma.products.update({
                where: {
                    id : Number(id)
                },
                data: {
                   
                    sku,
                    product_name,
                    product_image_url,
                    retail_price : Number(retail_price),
                    product_category: Number(product_category),
                    // product_variation,
                    product_description,
                    product_quantity : Number(product_quantity)
                }
            })
           
        } catch (e) {
            throw e
        } finally {
            await prisma.$disconnect()
        }
    }

}