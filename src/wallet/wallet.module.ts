import { Module } from '@nestjs/common';
import { WallettController } from './controller/wallett/wallett.controller';
import { WalletService } from './service/wallet/wallet.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/databaseTables/User';
import { Wallet } from 'src/databaseTables/wallet';

// Main Module for Wallet Table 
@Module({
  imports: [TypeOrmModule.forFeature([User,Wallet])], // using wallet and user table
  controllers: [WallettController],
  providers: [WalletService]
})
export class WalletModule {}
