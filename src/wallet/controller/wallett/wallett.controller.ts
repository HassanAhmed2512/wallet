import {
  Controller,
  Post,
  Param,
  Body,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
  Get
} from '@nestjs/common';
import { CreateTransactionDto } from 'src/wallet/dtos/createTransaction.dto';
import { CreateWalletDto } from 'src/wallet/dtos/createWallet.dto';
import { WalletService } from 'src/wallet/service/wallet/wallet.service';

// The Main Route for all other Routes is wallett
@Controller('wallet')
export class WallettController {
  constructor(private walletService: WalletService) {}

 

  
// Route to create a transaction
@UsePipes(ValidationPipe)
@Post('/transaction')
createTransaction(@Body() transactionDto: CreateTransactionDto) {
  return this.walletService.createTransaction(transactionDto);
}


 // First Route To Create A wallet for User
  @UsePipes(ValidationPipe)
  @Post('/create/:id')
  createUserPost(
    @Param('id', ParseIntPipe) id: number,
    @Body() CreateWalletDto: CreateWalletDto,
  ) {
    return this.walletService.createWallet(id, CreateWalletDto);
  }


   // Get all history for specific  user .
   @Get(':userId')
   async getAllHistoryByUserId(@Param('userId', ParseIntPipe) userId: number) {
     return this.walletService.getAllWalletByUserId(userId);
   }
}
