import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SexController } from './sex.controller';
import { AppService } from './app.service';
import { SexService } from './sex.service';

@Module({
  imports: [],
  controllers: [AppController, SexController],
  providers: [AppService, SexService],
})

export class AppModule {}
