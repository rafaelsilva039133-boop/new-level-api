import { Module } from '@nestjs/common';
import { PrismaService } from 'src/user/db/prisma/prisma.service';
import { PrismaUserRepository } from 'src/user/db/prisma/repositories/prismaUserRepository';
import { UserRepository } from 'src/user/repositories/UserRepository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [UserRepository],
})
export class DatabaseModule {}
