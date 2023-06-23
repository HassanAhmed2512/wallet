import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/databaseTables/User';
import { Wallet } from 'src/databaseTables/wallet';
import { CreateUserParam, UpdateUserParam } from 'src/utils/types';
import { Repository } from 'typeorm';

// Service Class That Have All The Logic Function

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Wallet) private walletRepository: Repository<Wallet>,
  ) {}


  // Get All Users
  findUsers() {
    return this.userRepository.find({ relations: ['wallets', 'history'] });
  }

  // Create User
  createUser(userDetails: CreateUserParam) {
    const newUser = this.userRepository.create({
      ...userDetails,
      createdDate: new Date(),
    });
    this.walletRepository.create({ cash:0 , })
    return this.userRepository.save(newUser);
  }

  //Update User
  updateUser(id: number, updateUserDetails: UpdateUserParam) {
    return this.userRepository.update({ id }, { ...updateUserDetails });
  }
}
