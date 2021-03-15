import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(private serv: TestService) {}

  @Get()
  public async getAll() {
    return await this.serv.getAll();
  }
}
