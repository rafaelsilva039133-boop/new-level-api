import { Difficulty } from 'generated/prisma/enums';

export function calculateXp(difficulty: Difficulty): number {
  switch (difficulty) {
    case 'EASY':
      return 10;
    case 'MEDIUM':
      return 25;
    case 'HARD':
      return 50;
  }
}
