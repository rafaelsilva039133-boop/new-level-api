//import { User } from 'src/user/entities/user.entity';
//import { UserRepository } from 'src/user/repositories/UserRepository';
import { PrismaService } from '../prisma.service';

export class PrismaUserRepository /*implements UserRepository*/ {
  constructor(private prismaService: PrismaService) {}
  /*
  create(user: User): Promise<void> {
    this.prismaService.user.create({
      data: {},
    });
  }
  */
}
