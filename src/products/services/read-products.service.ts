import { BadRequestException, Injectable } from "@nestjs/common";
import prisma from "src/config/prisma-client";
import { ProductDto } from "../dto/product.dto";
import { IProdutos } from "../interfaces/produto.interface";



@Injectable()
export class ReadProductsService {

    async getAllProducts(): Promise<any> {
        try {
            const produtos = await prisma.produtos.findMany();
            console.clear();
            console.log('Done fetching all products');
            return produtos;
        } catch (e) {
            throw e;
        } finally {
            await prisma.$disconnect()
        }
    }

    async getSingleProductById(id: number): Promise<any> {
        try {
            return await prisma.produtos.findUnique({
                where: {
                    id,
                },
            })
        } catch (e) {
            throw e;
        } finally {
            await prisma.$disconnect()
        }
    }

    async getAllProductsByName(name: string): Promise<any> {
        try {
            return await prisma.produtos.findMany({
                where: {
                    product_name: {
                        contains: name
                    }
                },
            })
        } catch (e) {
            throw e;
        } finally {
            await prisma.$disconnect()
        }
    }

    async getProductsByCategory(category_number: number): Promise<any> {
        try {
            return await prisma.produtos.findMany({
                where: {
                    product_category: {
                        equals: category_number
                    }
                }
            })
        } catch (e) {
            throw (e)
        } finally {
            await prisma.$disconnect()
        }
    }






}