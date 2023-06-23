import { Module } from '@nestjs/common';
import { WallettController } from './controller/wallett/wallett.controller';
import { WalletService } from './service/wallet/wallet.service';

@Module({
  controllers: [WallettController],
  providers: [WalletService]
})
export class WalletModule {}
