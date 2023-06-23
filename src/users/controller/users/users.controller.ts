import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  Get,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { UsersService } from 'src/users/service/users/users.service';

// The Main Route for all other Routes is users
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  // Route to Get all Users
  @Get()
  getUsers() {
    return this.userService.findUsers();
  }

  // Route to Create User
  @UsePipes(ValidationPipe)
  @Post('/register')
  async createUser(@Body() createUserDto: CreateUserDto) {
    const { confirmpassword, ...userDetails } = createUserDto;
    return this.userService.createUser(userDetails);
  }
}
