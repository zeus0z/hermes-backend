import { BadRequestException, Injectable } from "@nestjs/common";
import { ProductDto } from "../dto/product.dto";
import prisma from "src/config/prisma-client";

@Injectable()
export class CreateProductsService {

    async getAllProducts(): Promise<any> {
        try {
            const products = await prisma.products.findMany();
            return products;
        } catch (e) {
            console.error("Erro ao buscar products:", e);
            throw e;
        } finally {
            await prisma.$disconnect()
        }
    }

    async createNewProduct(
        { sku,
            product_name,
            product_image_url,
            retail_price,
            product_category,
            product_variation,
            product_description,
            product_quantity
             }: ProductDto
    ): Promise<any> {

        if (!ProductDto) {
            throw new BadRequestException('Some of the fields are missing')
        }

        try {
            
            await prisma.products.create({
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
            return `Produto Criado com Sucesso`
        } catch (e) {
           throw e
        } finally {
            await prisma.$disconnect()
        }
    }


}