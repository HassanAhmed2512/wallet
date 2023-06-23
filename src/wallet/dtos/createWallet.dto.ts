import {
  IsNotEmpty,
  IsInt,
  IsPositive,
} from 'class-validator';

    // The Forman Data That will do the Valdiation Based on 
export class CreateWalletDto {
  @IsInt({ message: 'Cash must be an integer' })
  @IsNotEmpty({ message: 'Cash is required' })
  @IsPositive({ message: 'Cash must be a positive integer' })
  cash: number;
}
