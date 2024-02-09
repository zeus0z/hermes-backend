import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { CreateProductDto } from "./dto/create-product.dto";
const prisma = new PrismaClient();


@Injectable()
export class LojaService {

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
            is_out_of_stock }: CreateProductDto
    ): Promise<any> {

        if (!CreateProductDto) {
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