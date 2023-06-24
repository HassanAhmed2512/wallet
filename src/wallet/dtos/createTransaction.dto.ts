import { IsPositive, IsInt } from 'class-validator';

export class CreateTransactionDto {
  
  @IsInt({ message: 'senderWalletId must be an integer' })
  senderWalletId: number;

  @IsInt({ message: 'senderWalletId must be an integer' })
  receiverWalletId: number;

  @IsInt({ message: 'Amount must be an integer' })
  @IsPositive({ message: 'Amount must be a positive integer' })
  amount: number;
}
