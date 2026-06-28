import { Prisma } from 'generated/prisma/client';

export type UserWithTasks = Prisma.UserGetPayload<{
  include: {
    tasks: true;
  };
}>;
