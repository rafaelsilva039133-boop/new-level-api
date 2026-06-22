import { describe, expect, it, beforeEach } from '@jest/globals';
import { CreateUserUseCase } from './createUserUseCase';
import { UserRepositoryInMemory } from '../repositories/UserReposytoryInMemory';

let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe('Create User', () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });

  it('Should be able create user', async () => {
    await createUserUseCase.execute({
      clerkId: '123fdsf',
      name: 'Rafael',
      email: 'rafael@email.com',
    });

    expect(userRepositoryInMemory.users).toHaveLength(1);
  });
});
