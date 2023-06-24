import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/databaseTables/User';
import { Wallet } from 'src/databaseTables/wallet';
import { CreateWalletParam } from 'src/utils/types';
import { Repository } from 'typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { History } from 'src/databaseTables/History';
import { CreateTransactionDto } from 'src/wallet/dtos/createTransaction.dto';

// Service Class That Have All The Logic Function

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(Wallet) private walletRepository: Repository<Wallet>,
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(History) private historyRepository: Repository<History>,
  ) {}

  // The Logic Function To Create New Wallet For user
  async createWallet(id: number, createwWallet: CreateWalletParam) {
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

  // The Logic Function To Create New Transaction For user
  async createTransaction(transactionDto: CreateTransactionDto): Promise<any> {
    const { senderWalletId, receiverWalletId, amount } = transactionDto;

    const senderWallet = await this.walletRepository.findOneBy({
      id: senderWalletId,
    });
    const receiverWallet = await this.walletRepository.findOneBy({
      id: receiverWalletId,
    });
 
    if (!senderWallet || !receiverWallet) {
      throw new HttpException(
        'Sender wallet or receiver wallet not found',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (senderWallet.cash < amount) {
      throw new HttpException('Insufficient funds', HttpStatus.BAD_REQUEST);
    }

    // Deduct the amount from the sender's wallet
    senderWallet.cash = +senderWallet.cash - +amount;
    await this.walletRepository.save(senderWallet);

    // Add the amount to the receiver's wallet
    receiverWallet.cash = +receiverWallet.cash + +amount;
    await this.walletRepository.save(receiverWallet);
    // Get sender and receiver data
    const sender = await this.userRepository.findOneBy({
      wallets: senderWallet,
    });
    const receiver = await this.userRepository.findOneBy({
      wallets: receiverWallet,
    });

    // Create a history entry for the sender
    const senderHistoryEntry = this.historyRepository.create({
      receiverId: receiver.id,
      cash: amount,
      createdDate: new Date(),
      transfertype: 'send',
      user: sender,
    });
    await this.historyRepository.save(senderHistoryEntry);

    // Create a history entry for the receiver
    const receiverHistoryEntry = this.historyRepository.create({
      receiverId: sender.id,
      cash: amount,
      createdDate: new Date(),
      transfertype: 'receive',
      user: receiver,
    });
    await this.historyRepository.save(receiverHistoryEntry);

    return {
      message: 'Transaction successful',
    };
  }


  // the Logic Get all history for specific  user .
  async getAllWalletByUserId(userId: number): Promise<Wallet[]> {
    return this.walletRepository.find({ where: { user: { id: userId } } });
  }
}
