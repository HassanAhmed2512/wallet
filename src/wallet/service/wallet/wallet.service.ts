import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/databaseTables/User';
import { Wallet } from 'src/databaseTables/wallet';
import { CreateWalletParam } from 'src/utils/types';
import { Repository } from 'typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

// Service Class That Have All The Logic Function

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(Wallet) private walletRepository: Repository<Wallet>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

    // The Logic Function To Create New Wallet For user
  async createWallet(
    id: number,
    createwWallet: CreateWalletParam,
  ) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user)
      throw new HttpException(
        'User not found. Cannot create Profile',
        HttpStatus.BAD_REQUEST,
      );
    const newWallet = this.walletRepository.create({
      ...createwWallet,
      user,
    });
    return this.walletRepository.save(newWallet);
  }

}
