import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/replace';
import { Task } from 'src/task/entities/task.entity';

interface UserSchema {
  clerkId: string;
  name: string;
  email: string;
  level: number;
  currentXp: number;
  createdAt: Date;
  updatedAt: Date | null;
  tasks: Task[];
}

export class User {
  private props: UserSchema;
  private _id: string;

  constructor(
    props: Replace<
      UserSchema,
      {
        createdAt?: Date;
        updatedAt?: Date | null;
        level?: number;
        currentXp?: number;
        tasks?: Task[];
      }
    >,
    id?: string,
  ) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? null,
      level: props.level ?? 0,
      currentXp: props.currentXp ?? 0,
      tasks: props.tasks ?? [],
    };

    this._id = id || randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get clerkId(): string {
    return this.props.clerkId;
  }

  get name(): string {
    return this.props.name;
  }

  set name(name: string) {
    this.props.name = name;
  }

  get email(): string {
    return this.props.email;
  }

  set email(email: string) {
    this.props.email = email;
  }

  get level(): number {
    return this.props.level;
  }

  set level(level: number) {
    this.props.level = level;
  }

  get currentXp(): number {
    return this.props.currentXp;
  }

  set currentXp(currentXp: number) {
    this.props.currentXp = currentXp;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date | null {
    return this.props.updatedAt;
  }

  set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt;
  }

  get tasks(): Task[] {
    return this.props.tasks;
  }
}
