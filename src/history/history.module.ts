import { Module } from '@nestjs/common';
import { HistoryService } from './service/history/history.service';
import { HistoryController } from './controller/history/history.controller';

@Module({
  providers: [HistoryService],
  controllers: [HistoryController]
})
export class HistoryModule {}
