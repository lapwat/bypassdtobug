import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerController } from '@controller';
import { Controller2Controller } from './controller2/controller2.controller';

@Module({
  imports: [],
  controllers: [AppController, ControllerController, Controller2Controller],
  providers: [AppService],
})
export class AppModule {}
