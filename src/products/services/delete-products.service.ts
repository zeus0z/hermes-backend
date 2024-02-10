import { Injectable, Param } from '@nestjs/common';
import prisma from 'src/config/prisma-client';

@Injectable()
export class DeleteProductsService {

    
    async deleteProductWithID(id:number): Promise<any>{
        try{
            await prisma.produtos.delete({
                where:{
                    id
                }
            })

        } catch (e) {
            console.log(e)
            throw e
        } finally{
            await prisma.$disconnect()
        }
    }

    
    
}
