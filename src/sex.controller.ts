import { Controller, Get } from '@nestjs/common';
import { SexService } from './sex.service';

@Controller()
export class SexController {
  constructor(private readonly sexService: SexService) {}

  @Get('/anwyeah')
  getDuration(): string {
    return this.sexService.getDuration();
  }
}
