import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserUseCase } from './useCases/createUserUseCase';

@Controller('user')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async create(@Body() body: CreateUserDto) {
    const { clerkId, name, email } = body;

    const user = await this.createUserUseCase.execute({
      clerkId,
      name,
      email,
    });

    return user;
  }
}
