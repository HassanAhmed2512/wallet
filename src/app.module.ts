import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './databaseTables/User';
import { Wallet } from './databaseTables/wallet';
import { History } from './databaseTables/History';
import { UsersModule } from './users/users.module';
import { WalletModule } from './wallet/wallet.module';
import { HistoryModule } from './history/history.module';

//  The Main Module For The Project
@Module({
  imports: [
    // Configration DataBase mysql
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'instapay',
      entities: [User, Wallet, History], // 3 tables
      synchronize: true,
    }),
    UsersModule, //module that include all controllers and servies of users
    WalletModule, //module that include all controllers and servies of users  
    HistoryModule, //module that include all controllers and servies of users
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
