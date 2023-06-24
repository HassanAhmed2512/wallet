import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  Get,
  BadRequestException,
  Res,
  UnauthorizedException,
  Req,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { UsersService } from 'src/users/service/users/users.service';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from 'src/users/dtos/loginUser.dto';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';

// The Main Route for all other Routes is users
@Controller('users')
export class UsersController {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  // Route to Get all Users
  @Get()
  getUsers() {
    return this.userService.findUsers();
  }

  // Route to Create User
  @UsePipes(ValidationPipe)
  @Post('/register')
  async createUser(@Body() createUserDto: CreateUserDto) {
    // Validate that both password are the same
    if (createUserDto.password !== createUserDto.confirmpassword) {
      throw new BadRequestException("Passwords doesn't match");
    } else {
      //Hashing Passwrods
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
      createUserDto.password = hashedPassword;

      // Take off cofrim password from the data
      const { confirmpassword, ...userDetails } = createUserDto;
      return this.userService.createUser(userDetails);
    }
  }

  //Route for Login
  @UsePipes(ValidationPipe)
  @Post('login')
  async login(
    @Body() LoginUser: LoginUserDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { email, password } = LoginUser;
    const user = await this.userService.findOneByEmail({ email });
    // IF There is no user with this Email
    if (!user) {
      throw new BadRequestException('invalid credentials');
    }
    // IF The Password Is wroung

    if (!(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('invalid credentials');
    }

    const jwt = await this.jwtService.signAsync({ id: user.id });

    response.cookie('jwt', jwt, { httpOnly: true });

    return {
      message: 'success',
    };
  }

  // Rounte For Logout
  @Post('logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('jwt');
    return {
      message: 'success',
    };
  }

  // Route for Get one User
  @Get('user')
  async user(@Req() request: Request) {
    try {
      // Take The JWT Token from the Cookies and Check
      const cookie = request.cookies['jwt'];
      const data = await this.jwtService.verifyAsync(cookie);
      // If There is No Cookies Go out
      if (!data) {
        throw new UnauthorizedException();
      }
      // Get The User Data
      const user = await this.userService.findOneById({ id: data['id'] });
      const { password, ...result } = user; // Remove Password from the Data
      return result;
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

}
