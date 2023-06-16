import { Injectable } from '@nestjs/common';
import { EqualUser } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async createUser(user: EqualUser): Promise<EqualUser> {
    return this.prismaService.createUser(user);
  }
  async getAllUsers(): Promise<EqualUser[]> {
    return this.prismaService.prisma.equalUser.findMany();
  }
}

