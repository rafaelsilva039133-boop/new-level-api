import { User } from 'src/user/entities/user.entity';
import { User as UserRaw } from '@prisma/client';
import { UserWithTasks } from 'src/types/userWithTasks.type';

export class PrismaUserMapper {
  static toPrisma({
    createdAt,
    currentXp,
    clerkId,
    id,
    name,
    email,
    level,
    updatedAt,
  }: User): UserRaw {
    return {
      createdAt,
      currentXp,
      clerkId,
      id,
      name,
      email,
      level,
      updatedAt,
    };
  }

  static toDomain(raw: UserWithTasks): User {
    return new User(
      {
        clerkId: raw.clerkId,
        name: raw.name,
        email: raw.email,
        level: raw.level,
        currentXp: raw.currentXp,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
        tasks: [], // por enquanto
      },
      raw.id,
    );
  }
}
