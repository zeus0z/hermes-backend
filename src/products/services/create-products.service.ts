import { BadRequestException, Injectable } from "@nestjs/common";
import { ProductDto } from "../dto/product.dto";
import prisma from "src/config/prisma-client";

@Injectable()
export class CreateProductsService {

    async getAllProducts(): Promise<any> {
        try {
            const produtos = await prisma.produtos.findMany();
            return produtos;
        } catch (e) {
            console.error("Erro ao buscar produtos:", e);
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
            product_quantity,
            is_out_of_stock }: ProductDto
    ): Promise<any> {

        if (!ProductDto) {
            throw new BadRequestException('Some of the fields are missing')
        }

        try {
            await prisma.produtos.create({
                data: {

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
            })
            return `Produto Criado com Sucesso`
        } catch (e) {
           throw e
        } finally {
            await prisma.$disconnect()
        }
    }


}