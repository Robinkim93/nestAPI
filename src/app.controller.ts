import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/* 
express에서는 router에서
router.get('cats/findall', 실행함수)
router.get('cats/findone', 실행함수)
로 적어줬다면
nest에서는 @Controller('cats')
@Get(findall)
@Get(findone)
의 형식으로 적어줄 수 있다. 
*/
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
