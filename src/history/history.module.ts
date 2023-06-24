import { Module } from '@nestjs/common';
import { HistoryService } from './service/history/history.service';
import { HistoryController } from './controller/history/history.controller';
import { History } from 'src/databaseTables/History';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([History])], // using wallet and user table
  providers: [HistoryService],
  controllers: [HistoryController]
})
export class HistoryModule {}
