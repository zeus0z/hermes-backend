import { Injectable } from "@nestjs/common";
import { ProductDto } from "../dto/product.dto";
import prisma from "src/config/prisma-client";

@Injectable()
export class CreateProductsService {

    async createNewProduct(
        {
            sku,
            product_name,
            product_image_url,
            retail_price,
            product_category,
            product_description,
            product_quantity
        }: ProductDto): Promise<any> {

        try {
            await prisma.products.create({
                data: {
                    sku,
                    product_name,
                    product_image_url,
                    retail_price,
                    product_category,
                    product_description,
                    product_quantity

                }
            })
           
        } catch (e) {
            throw e
        } finally {
            await prisma.$disconnect()
        }
    }


}