import { Status, Priority, Difficulty } from 'generated/prisma/enums';
import { Replace } from 'src/helpers/replace';
import { User } from 'src/user/entities/user.entity';
import { calculateXp } from './services/xpCalculator';
import { randomUUID } from 'crypto';

interface TaskSchema {
  title: string;
  description: string | null;
  status: Status;
  priority: Priority;
  difficulty: Difficulty;
  xpReward: number;
  dueDate: Date | null;
  completedAt: Date | null;
  userId: string;
  user: User;
  createdAt: Date;
  updatedAt: Date;
}

export class Task {
  private props: TaskSchema;
  private _id: string;

  constructor(
    props: Replace<
      TaskSchema,
      {
        createdAt: Date;
        xpReward?: number;
        updatedAt: Date;
      }
    >,
    id?: string,
  ) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      xpReward: props.xpReward ?? calculateXp(props.difficulty),
      updatedAt: props.updatedAt ?? new Date(),
    };

    this._id = id || randomUUID();
  }

  complete() {
    this.props.status = Status.COMPLETED;
    this.props.completedAt = new Date();
  }
}
