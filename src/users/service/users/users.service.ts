import { Injectable, BadRequestException } from '@nestjs/common';
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
  async createUser(userDetails: CreateUserParam) {
    // take the data to check
    const { email, phoneNumber, nationalID } = userDetails;
    // check to make sure they are not used befor
    const userEmail = await this.userRepository.findOneBy({ email });
    const userPhone = await this.userRepository.findOneBy({ phoneNumber });
    const userId = await this.userRepository.findOneBy({ nationalID });
    // if used go out
    if (userEmail || userPhone || userId) {
      throw new BadRequestException('This Email or Phone or nationaId is used');
    } else {
      // Create User
      const newUser = this.userRepository.create({
        ...userDetails,
        createdDate: new Date(),
      });
      const res = this.userRepository.save(newUser);
      // When user Created it Create a wallet for him
      const id = (await res).id;
      const user = await this.userRepository.findOneBy({ id });
      const newWallet = this.walletRepository.create({
        cash: 0,
        user,
      });
      this.walletRepository.save(newWallet);
      return res;
    }
  }

  //Update User
  updateUser(id: number, updateUserDetails: UpdateUserParam) {
    return this.userRepository.update({ id }, { ...updateUserDetails });
  }
}
