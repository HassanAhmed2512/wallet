import { Injectable } from '@nestjs/common';
import { History } from 'src/databaseTables/History';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HistoryService {
    constructor(
        @InjectRepository(History) private historyRepository: Repository<History>,
      ) {}

// the Logic Get all history for specific  user .
  async getAllHistoryByUserId(userId: number): Promise<History[]> {
    return this.historyRepository.find({ where: { user: { id: userId } } });
  }

    
}
