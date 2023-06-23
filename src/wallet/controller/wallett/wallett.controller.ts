import {
  Controller,
  Post,
  Param,
  Body,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateWalletDto } from 'src/wallet/dtos/createWallet.dto';
import { WalletService } from 'src/wallet/service/wallet/wallet.service';

// The Main Route for all other Routes is wallett
@Controller('wallett')
export class WallettController {
  constructor(private walletService: WalletService) {}

  // First Route To Create A wallet for User
  @UsePipes(ValidationPipe)
  @Post(':id')
  createUserPost(
    @Param('id', ParseIntPipe) id: number,
    @Body() CreateWalletDto: CreateWalletDto,
  ) {
    return this.walletService.createWallet(id, CreateWalletDto);
  }
}
