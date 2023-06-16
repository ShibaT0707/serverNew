import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './CreateUser';
import { EqualUser } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() user: EqualUser): Promise<EqualUser> {
    return this.userService.createUser(user);
  }
  @Get()
async getAllUsers(): Promise<EqualUser[]> {
  return this.userService.getAllUsers();
}
}
