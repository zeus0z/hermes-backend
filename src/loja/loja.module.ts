import { Module } from '@nestjs/common';
import { ReadLojaController } from './controllers/read-loja.controller';
import { CreateLojaController } from './controllers/create-loja.controller';
import { LojaCreateService } from './loja-create.service';
import { LojaReadService } from './loja-read.service';

@Module({
    controllers: [ReadLojaController, CreateLojaController],
    providers: [LojaCreateService, LojaReadService]
})

export class LojaModule {}
