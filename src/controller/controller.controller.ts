import { Controller, Get, Body } from '@nestjs/common';

import { AppService } from '../app.service';
import { SimpleDto as SimpleDtoFileImport } from './simple.dto';
import { SimpleDto as SimpleDtoModuleImport } from '@controller';

@Controller('controller')
export class ControllerController {
  constructor(private readonly appService: AppService) {}

  @Get('dto_ok')
  getHelloFileAccess(@Body() dto: SimpleDtoFileImport): string {
    return this.appService.getHello();
  }

  @Get('dto_bypass')
  getHelloModuleAccess(@Body() dto: SimpleDtoModuleImport): string {
    return this.appService.getHello();
  }
}
