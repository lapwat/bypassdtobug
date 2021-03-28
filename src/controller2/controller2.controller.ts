import { Controller, Get, Body } from '@nestjs/common';

import { AppService } from '../app.service';
import { SimpleDto as SimpleDtoFileImportCrossFolder } from '../controller/simple.dto';
import { SimpleDto as SimpleDtoModuleImportCrossFolder } from '@controller';

@Controller('controller2')
export class Controller2Controller {
  constructor(private readonly appService: AppService) {}

  @Get('dto_ok')
  getHelloFileAccess(@Body() dto: SimpleDtoFileImportCrossFolder): string {
    return this.appService.getHello();
  }

  @Get('dto_bypass')
  getHelloModuleAccess(@Body() dto: SimpleDtoModuleImportCrossFolder): string {
    return this.appService.getHello();
  }
}
