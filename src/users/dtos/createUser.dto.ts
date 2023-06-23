import { IsEmail, IsNotEmpty, IsString, Matches, MinLength, IsInt, IsPositive, Min, Max,Equals } from 'class-validator';

    // The Forman Data That will do the Valdiation Based on 

export class CreateUserDto {
  
  @IsEmail({}, { message: 'Invalid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()\-=_+[\]{}|;':"\\|,.<>/?]+$/, {
    message: 'Password must contain at least one lowercase letter, one uppercase letter, and one number',
  })
  password: string;

  @IsString({ message: 'ConfirmPassword must be a string' })
  @IsNotEmpty({ message: 'ConfirmPassword is required' })
  confirmpassword: string;

  @IsString({ message: 'firstName must be a string' })
  @IsNotEmpty({ message: 'firstName is required' })
  firstName: string;

  @IsString({ message: 'lastName must be a string' })
  @IsNotEmpty({ message: 'lastName is required' })
  lastName: string;

  @IsInt({ message: 'phoneNumber must be an integer' })
  @IsNotEmpty({ message: 'phoneNumber is required' })
  @IsPositive({ message: 'phoneNumber must be a positive integer' })
  @Min(1000000000, { message: 'phoneNumber must 10 digits long' })
  @Max(9999999999, { message: 'phoneNumber must 10 digits long' })
  phoneNumber: number;

  @IsInt({ message: 'nationalID must be an integer' })
  @IsNotEmpty({ message: 'nationalID is required' })
  @IsPositive({ message: 'nationalID must be a positive integer' })
  @Min(10000000000000, { message: 'nationalID must be at least 14 digits long' })
  @Max(99999999999999, { message: 'nationalID must be at most 14 digits long' })
  nationalID: number;
}
