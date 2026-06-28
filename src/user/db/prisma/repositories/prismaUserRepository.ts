import { User } from 'src/user/entities/user.entity';
import { PrismaService } from '../prisma.service';
import { PrismaUserMapper } from '../mappers/prismaUserMapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUserRepository /*implements UserRepository*/ {
  constructor(private prismaService: PrismaService) {}
  async create(user: User): Promise<void> {
    const userRaw = PrismaUserMapper.toPrisma(user);

    await this.prismaService.user.create({
      data: userRaw,
    });
  }
}
