import { Injectable } from "@nestjs/common";
import prisma from "src/config/prisma-client";
import { ProductDto } from "../dto/product.dto";


@Injectable()
export class UpdateProductsService {

    async updateProductWithId(id: number, {
        sku,
        product_name,
        product_image_url,
        retail_price,
        product_category,
        product_variation,
        product_description,
        product_quantity
    }: ProductDto): Promise<any> {
        try {
            await prisma.products.update({
                where: {
                    id
                },
                data: {
                    sku,
                    product_name,
                    product_image_url,
                    retail_price,
                    product_category,
                    product_variation,
                    product_description,
                    product_quantity
                }
            })
            return 'Product update sucessfully'
        } catch (e) {
            throw e
        } finally {
            await prisma.$disconnect()
        }
    }

}