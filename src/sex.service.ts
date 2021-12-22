import { Injectable } from '@nestjs/common';

@Injectable()
export class SexService {
  getDuration(): string {
    return "4 minutes";
  }
}
