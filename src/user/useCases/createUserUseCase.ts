import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/UserRepository';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(data: CreateUserDto) {
    const user = new User({
      clerkId: data.clerkId,
      name: data.name,
      email: data.email,
    });

    await this.userRepository.create(user);

    return user;
  }
}
