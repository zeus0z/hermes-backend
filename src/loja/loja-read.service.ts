import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { CreateProductDto } from "./dto/create-product.dto";
import { IProdutos } from "./interfaces/produto.interface";
const prisma = new PrismaClient();


@Injectable()
export class LojaReadService {

    async getAllProducts(): Promise<any> {
        try {
            const produtos = await prisma.produtos.findMany();
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
                where:{
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
                where:{
                    product_name:{
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

    async getProductsByCategory(category_number:number):Promise<any>{
        try{
            return await prisma.produtos.findMany({
                where:{
                    product_category:{
                        equals: category_number
                    }
                }
            })
        } catch (e){
            throw(e)
        } finally {
            await prisma.$disconnect()
        }
    }






}