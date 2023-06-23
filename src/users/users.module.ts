  import { Module } from '@nestjs/common';
import { UsersController } from './controller/users/users.controller';
import { UsersService } from './service/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/databaseTables/User';
import { Wallet } from 'src/databaseTables/wallet';

// Main Module for Users Table 
@Module({
  imports: [TypeOrmModule.forFeature([User,Wallet])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
