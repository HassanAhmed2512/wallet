import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './databaseTables/User';
import { Wallet } from './databaseTables/wallet';
import { History } from './databaseTables/History';
import { UsersModule } from './users/users.module';
import { WalletModule } from './wallet/wallet.module';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'instapay',
    entities: [User,Wallet,History],
    synchronize: true,

  }), UsersModule, WalletModule, HistoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
