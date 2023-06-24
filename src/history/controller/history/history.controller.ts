import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { HistoryService } from 'src/history/service/history/history.service';

@Controller('history')
export class HistoryController {
  constructor(private historyService: HistoryService) {}

  // Get all history for specific  user .
  @Get(':userId')
  async getAllHistoryByUserId(@Param('userId', ParseIntPipe) userId: number) {
    return this.historyService.getAllHistoryByUserId(userId);
  }
}
