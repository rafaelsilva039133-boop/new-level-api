import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/replace';

interface UserSchema {
  clerkId: string;
  name: string;
  email: string;
  level: number;
  currentXp: number;
  createdAt: Date;
}

export class User {
  props: UserSchema;
  _id: string;

  constructor(
    props: Replace<
      UserSchema,
      {
        createdAt?: Date;
        level?: number;
        currentXp?: number;
      }
    >,
    id?: string,
  ) {
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
      level: props.level ?? 0,
      currentXp: props.currentXp ?? 0,
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
}
