import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserUseCase } from './useCases/createUserUseCase';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [UserController, DatabaseModule],
  providers: [CreateUserUseCase],
})
export class UserModule {}
