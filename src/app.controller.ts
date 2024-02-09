import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('testes')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('teste1')
  getTeste():string{
    return 'teste 1 feito com sucesso'
  }
  getTeste2():number{
    return 55
  }

}
