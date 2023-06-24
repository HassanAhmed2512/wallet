import { IsEmail, IsNotEmpty, IsString, Matches, MinLength,Length } from 'class-validator';

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

  @IsNotEmpty({ message: 'phoneNumber is required' })
  @Length(11, 11, { message: 'phoneNumber must be 11 digits long' })
  phoneNumber: string;
  
  @IsNotEmpty({ message: 'nationalID is required' })
  @Length(14, 14, { message: 'nationalID must be 14 digits long' })
  nationalID: string;
}
