import { Status, Priority, Difficulty } from 'generated/prisma/enums';
import { Replace } from 'src/helpers/replace';
import { User } from 'src/user/entities/user.entity';
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
  updatedAt: Date | null;
}

export class Task {
  private props: TaskSchema;
  private _id: string;

  constructor(
    props: Replace<
      TaskSchema,
      {
        createdAt?: Date;
        xpReward?: number;
      }
    >,
    id?: string,
  ) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      xpReward: props.xpReward ?? this.calculateXp(props.difficulty),
    };

    this._id = id || randomUUID();
  }

  // ========================
  // Getters
  // ========================

  get id() {
    return this._id;
  }

  get title() {
    return this.props.title;
  }

  get description() {
    return this.props.description;
  }

  get status() {
    return this.props.status;
  }

  get priority() {
    return this.props.priority;
  }

  get difficulty() {
    return this.props.difficulty;
  }

  get xpReward() {
    return this.props.xpReward;
  }

  get dueDate() {
    return this.props.dueDate;
  }

  get completedAt() {
    return this.props.completedAt;
  }

  get userId() {
    return this.props.userId;
  }

  get user() {
    return this.props.user;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  // ========================
  // Setters
  // ========================

  set title(title: string) {
    this.props.title = title;
    this.touch();
  }

  set description(description: string | null) {
    this.props.description = description;
    this.touch();
  }

  set status(status: Status) {
    this.props.status = status;
    this.touch();
  }

  set priority(priority: Priority) {
    this.props.priority = priority;
    this.touch();
  }

  set difficulty(difficulty: Difficulty) {
    this.props.difficulty = difficulty;
    this.props.xpReward = this.calculateXp(difficulty);
    this.touch();
  }

  set dueDate(dueDate: Date | null) {
    this.props.dueDate = dueDate;
    this.touch();
  }

  set user(user: User) {
    this.props.user = user;
    this.props.userId = user.id;
    this.touch();
  }

  complete() {
    this.props.status = Status.COMPLETED;
    this.props.completedAt = new Date();
    this.touch();
  }

  private touch() {
    this.props.updatedAt = new Date();
  }

  private calculateXp(difficulty: Difficulty): number {
    switch (difficulty) {
      case Difficulty.EASY:
        return 10;
      case Difficulty.MEDIUM:
        return 25;
      case Difficulty.HARD:
        return 50;
    }
  }
}
